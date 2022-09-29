import { Map, MapMarker, ZoomControl } from "react-kakao-maps-sdk";

import MyLocation from "@icons/map-my-location.svg";

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
  //TODO 위치 및 지도 크기 상태관리 필요 props? jotai?

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
