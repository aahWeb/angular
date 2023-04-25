"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
function buildGroupes(students) {
    const len = students.length;
    if (len === 0)
        throw new Error("Error no student");
    const groupes = [];
    students.sort((_) => Math.random() - 0.5);
    let j = 0;
    for (let i = 0; i < len / 2; i++, j++) {
        const [k, l] = [students[i + j], students[i + 1 + j]];
        if (l === undefined) {
            groupes[i - 1].push(k);
            break;
        }
        groupes.push([k, l]);
    }
    return groupes;
}
console.log(buildGroupes(data_1.default));
console.log(data_1.default);
console.log(`value a : ${data_1.a}, value b : ${data_1.b}`);
