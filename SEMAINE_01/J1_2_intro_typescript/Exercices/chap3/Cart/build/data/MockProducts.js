"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockDelivery = exports.MockDetails = void 0;
const def_1 = require("../def");
// Le nombre de details == delivery
exports.MockDetails = [
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
exports.MockDelivery = [
    { delivery: def_1.Delivery.DoorToDoor, id: 10 },
    { delivery: def_1.Delivery.Special, id: 109 },
    { delivery: def_1.Delivery.AirDelivery, id: 111 },
    { delivery: def_1.Delivery.Special, id: 19 },
    { delivery: def_1.Delivery.DoorToDoor, id: 101 },
    { delivery: def_1.Delivery.DoorToDoor, id: 77 },
];
