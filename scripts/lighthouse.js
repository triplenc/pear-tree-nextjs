module.exports = () => {
  const fs = require("fs");

  const SUMMARY_FIELDS = [
    "performance",
    "accessibility",
    "best-practices",
    "seo",
  ];

  const AUDITS = [
    "first-contentful-paint",
    "largest-contentful-paint",
    "total-blocking-time",
    "cumulative-layout-shift",
    "interactive",
  ];

  const score = (res) => (res >= 90 ? "🟢" : res >= 50 ? "🟠" : "🔴");

  const formatResult = (result) => result * 100;

  const createSummaryInfo = (value, field) => {
    return `| ${score(value)} ${field} | ${value} |`;
  };

  const createAuditsInfo = (displayValue, value, field) => {
    return `| ${score(value)} ${field} | ${displayValue} |`;
  };
  const results = JSON.parse(fs.readFileSync("./lhci_reports/manifest.json"));

  const reducedResult = results.reduce(
    (prevResult, currentResult) => {
      const { jsonPath, summary } = currentResult;
      const details = JSON.parse(fs.readFileSync(jsonPath));
      const { audits } = details;
      AUDITS.forEach((audit) => {
        if (!prevResult.audits[audit])
          prevResult.audits[audit] = { displayValue: 0, value: 0 };

        const [float, metric] = audits[audit].displayValue.split(" ");
        prevResult.audits[audit].displayValue += parseFloat(float);
        prevResult.audits[audit].metric = metric;

        prevResult.audits[audit].value += formatResult(
          Number(audits[audit].score),
        );
      });

      SUMMARY_FIELDS.forEach((summaryField) => {
        if (!prevResult.summary[summaryField])
          prevResult.summary[summaryField] = { value: 0 };

        prevResult.summary[summaryField].value += formatResult(
          Number(summary[summaryField]),
        );
      });

      prevResult.totalRunCount += 1;

      return prevResult;
    },
    { audits: {}, summary: {}, totalRunCount: 0 },
  );

  Object.keys(reducedResult).forEach((key) => {
    if (key === "audits") {
      Object.keys(reducedResult[key]).forEach((field) => {
        reducedResult[key][field].displayValue =
          Math.round(
            (reducedResult[key][field].displayValue * 100) /
              reducedResult.totalRunCount,
          ) / 100;
        reducedResult[key][field].value =
          Math.round(
            (reducedResult[key][field].value * 100) /
              reducedResult.totalRunCount,
          ) / 100;
      });
    }

    if (key === "summary") {
      Object.keys(reducedResult[key]).forEach((field) => {
        reducedResult[key][field].value = Math.floor(
          reducedResult[key][field].value / reducedResult.totalRunCount,
        );
      });
    }
  });

  const comment = [
    `⚡️ Lighthouse report!`,
    `| Category | Score |`,
    `| --- | --- |`,
    ...SUMMARY_FIELDS.map((summaryField) => {
      return createSummaryInfo(
        reducedResult.summary[summaryField].value,
        summaryField,
      );
    }),
  ].join("\n");
  const detail = [
    `| Category | Score |`,
    `| --- | --- |`,
    ...AUDITS.map((audit) => {
      const { displayValue, metric, value } = reducedResult.audits[audit];
      return createAuditsInfo(`${displayValue} ${metric ?? ""}`, value, audit);
    }),
  ].join("\n");

  return `${comment}\n\n${detail}\n\n`;
};
