"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Queue_1 = require("./Queue");
const data_1 = require("./Data/data");
const queue = new Queue_1.default();
for (const number of data_1.numbers)
    queue.push(number);
console.log(queue.pop()); // affiche 1 première valeur ajouter dans la queue
const queueList = new Queue_1.default();
for (const number of data_1.listNumbers)
    queueList.push(number);
console.log(queueList.pop()); // affiche 1 première valeur ajouter dans la queue
