export interface UserLocation {
  latitude: number;
  longitude: number;
  시군구: string;
  시도: string;
  읍면동: string;
}

export interface User {
  name: string;
  profileImage: string;
}
