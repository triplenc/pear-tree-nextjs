import { Map, MapMarker } from "react-kakao-maps-sdk";

interface MapComponentProps {
  lattitude: number;
  level?: number;
  longitude: number;
}

export function MapComponent({
  lattitude = 33.5563,
  level = 3,
  longitude = 126.79581,
}: MapComponentProps) {
  return (
    <>
      <Map
        center={{ lat: lattitude, lng: longitude }}
        id="map"
        level={level}
        style={{ height: "360px", width: "100%" }}>
        <MapMarker
          position={{ lat: lattitude, lng: longitude }}
          image={{
            size: {
              height: 66,
              width: 66,
            },
            src: "/icons/map-my-location.svg",
          }}>
          {/* TODO: 마커 div style 적용 */}
        </MapMarker>
      </Map>
    </>
  );
}
