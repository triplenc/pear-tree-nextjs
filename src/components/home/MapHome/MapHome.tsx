import Link from "next/link";
import { useUserLocation } from "src/hooks/useUserLocation";

import { Subtitle1 } from "@components/common";
import { MapComponent } from "@components/common/Map";
import { styled } from "@styles";

const MapHomeWrapper = styled("div", {
  border: "$gray02 solid",
  borderRadius: "$15",
  borderWidth: "0.1rem",
  height: "33rem",
  my: "$10",
  overflow: "hidden",
});

const MapHomeContainer = styled("div", {
  mt: "$18",
  mx: "$24",
});

export function MapHome() {
  const {
    userLocation: { latitude, longitude },
  } = useUserLocation();

  return (
    <MapHomeContainer>
      <Subtitle1>내 주변 파티를 찾아봐요 👀</Subtitle1>
      <Link passHref href={"/map"}>
        <MapHomeWrapper>
          <MapComponent
            isStatic={true}
            latitude={latitude}
            longitude={longitude}
          />
        </MapHomeWrapper>
      </Link>
    </MapHomeContainer>
  );
}
