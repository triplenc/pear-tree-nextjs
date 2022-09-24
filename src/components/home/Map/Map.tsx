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
  //TODO 위치 및 지도 크기 상태관리 필요 props? jotoi?

  return (
    <>
      <Map
        center={{ lat: lattitude, lng: longitude }}
        level={level}
        style={{ height: "360px", width: "100%" }}>
        <MapMarker position={{ lat: lattitude, lng: longitude }}>
          <div>내 위치</div>
          {/* TODO: 마커 div style 적용 */}
        </MapMarker>
      </Map>
    </>
  );
}
