import { Map, MapMarker, StaticMap } from "react-kakao-maps-sdk";

interface MapComponentProps {
  isStatic: boolean;
  latitude: number;
  level?: number;
  longitude: number;
}

/**
 * TODO : props에 따라  Static Map or Dynamic Map 구분 진행 필요
 */
export function MapComponent({
  isStatic,
  latitude = 33.5563,
  level = 3,
  longitude = 126.79581,
}: MapComponentProps) {
  switch (isStatic) {
    case true:
      return (
        <>
          <StaticMap
            center={{ lat: latitude, lng: longitude }}
            id="map"
            level={level}
            marker={{ position: { lat: latitude, lng: longitude } }}
            style={{ height: "100%", width: "100%" }}
          />
        </>
      );
    case false:
      return (
        <>
          <Map
            center={{ lat: latitude, lng: longitude }}
            id="map"
            level={level}
            style={{ height: "100%", width: "100%" }}>
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
}
