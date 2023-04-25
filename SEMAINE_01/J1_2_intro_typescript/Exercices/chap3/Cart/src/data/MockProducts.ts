import { Details, ProductDelivery, Delivery } from "../def";

// Le nombre de details == delivery
export const MockDetails: Details[] = [
  {
    id: 19,
    name: "Katharine Sanders",
    price: 2324,
    origin: "fr",
  },
  {
    id: 101,
    name: "Lilian Swanson",
    price: 2875,
    origin: "fr",
  },
  {
    id: 77,
    name: "Mack Huff",
    price: 1292,
    origin: "en",
  },
  {
    id: 111,
    name: "Mabel Medina",
    price: 1467,
    origin: "eu",
  },
  {
    id: 10,
    name: "Pearlie Griffin",
    price: 2827,
    origin: "eu",
  },
  {
    id: 109,
    name: "Meredith Riddle",
    price: 1200,
    origin: "fr",
  },
];

export const MockDelivery: ProductDelivery[] = [
  { delivery: Delivery.DoorToDoor, id: 10 },
  { delivery: Delivery.Special, id: 109 },
  { delivery: Delivery.AirDelivery, id: 111 },
  { delivery: Delivery.Special, id: 19 },
  { delivery: Delivery.DoorToDoor, id: 101 },
  { delivery: Delivery.DoorToDoor, id: 77 },
];
