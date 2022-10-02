import { useUserLocation } from "src/hooks/useUserLocation";

import { MapComponent } from "@components/common/Map";
import { styled } from "@styles";

const MapHomeContainer = styled("div", {
  border: "$gray02 solid",
  borderRadius: "$15",
  borderWidth: "0.1rem",
  height: "33rem",
  mx: "$24",
  my: "$10",
  overflow: "hidden",
});

export function MapHome() {
  const {
    userLocation: { latitude, longitude },
  } = useUserLocation();

  return (
    <MapHomeContainer>
      <MapComponent latitude={latitude} longitude={longitude} />
    </MapHomeContainer>
  );
}
