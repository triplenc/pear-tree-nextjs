import { useCallback, useEffect, useRef, useState } from "react";

import { Map, MapMarker } from "react-kakao-maps-sdk";

declare global {
  interface Window {
    kakao: any;
  }
}

export function MapComponent() {
  return (
    <>
      <Map
        center={{ lat: 33.5563, lng: 126.79581 }}
        style={{ height: "360px", width: "100%" }}>
        <MapMarker position={{ lat: 33.5563, lng: 126.79581 }}>
          <div>marker Name</div>
        </MapMarker>
      </Map>
    </>
  );
}
