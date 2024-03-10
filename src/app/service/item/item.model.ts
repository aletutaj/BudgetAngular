export interface Item {
  roomName: string;
  name: string;
  quantity: number;
  price: number
}

export interface ItemsByRoom {
  [room: string]: Item[];
}
