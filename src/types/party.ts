import { User } from "./user";

export interface Party {
  createdAt: Date;
  crew: User[];
  distance: string;
  endTime: string;
  gatherLocation: string;
  id: number;
  platform: string;
  storeName: string;
}
