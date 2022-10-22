module.exports = () => {
  const fs = require("fs");

  const results = JSON.parse(fs.readFileSync("./lhci_reports/manifest.json"));
  let comments = "";
  results.forEach((result) => {
    const { jsonPath, summary } = result;
    const details = JSON.parse(fs.readFileSync(jsonPath));
    const { audits } = details;
    const score = (res) => (res >= 90 ? "🟢" : res >= 50 ? "🟠" : "🔴");
    const formatResult = (result) => result * 100;
    const createSummaryInfo = (field) => {
      const value = formatResult(summary[field]);
      return `| ${score(value)} ${field} | ${value} |`;
    };
    const createAuditsInfo = (field) => {
      const target = audits[field];
      const value = formatResult(target.score);
      return `| ${score(value)} ${field} | ${target.displayValue} |`;
    };
    const comment = [
      `⚡️ Lighthouse report!`,
      `| Category | Score |`,
      `| --- | --- |`,
      createSummaryInfo("performance"),
      createSummaryInfo("accessibility"),
      createSummaryInfo("best-practices"),
      createSummaryInfo("seo"),
    ].join("\n");
    const detail = [
      `| Category | Score |`,
      `| --- | --- |`,
      createAuditsInfo("first-contentful-paint"),
      createAuditsInfo("largest-contentful-paint"),
      createAuditsInfo("total-blocking-time"),
      createAuditsInfo("cumulative-layout-shift"),
      createAuditsInfo("interactive"),
    ].join("\n");
    comments += `${comment}\n\n${detail}\n\n`;
  });

  return comments;
};
