export interface Item {
  roomName: string | null;
  name: string;
  quantity: number;
  price: number;
  id?: number;
}

export interface ItemsByRoom {
  [room: string]: Item[];
}
