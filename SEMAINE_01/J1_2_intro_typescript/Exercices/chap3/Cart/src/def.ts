export interface Details {
    id?: number;
    name: string;
    price: number;
    origin: string;
}

export enum Delivery {
    DoorToDoor = "doortoDoor",
    AirDelivery = "airDelivery",
    Special = "special"
}

export type ProductDelivery = { delivery: Delivery, id: number } ;
