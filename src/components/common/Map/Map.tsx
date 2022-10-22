import { Map, MapMarker } from "react-kakao-maps-sdk";

interface MapComponentProps {
  draggable?: boolean;
  latitude: number;
  level?: number;
  longitude: number;
  zoomable?: boolean;
}

export function MapComponent({
  draggable = true,
  latitude = 33.5563,
  level = 3,
  longitude = 126.79581,
  zoomable = true,
}: MapComponentProps) {
  return (
    <>
      <Map
        center={{ lat: latitude, lng: longitude }}
        draggable={draggable}
        id="map"
        level={level}
        style={{ height: "100%", width: "100%" }}
        zoomable={zoomable}>
        <MapMarker
          position={{ lat: latitude, lng: longitude }}
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
