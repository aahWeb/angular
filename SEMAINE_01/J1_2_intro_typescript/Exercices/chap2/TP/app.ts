type Groupes = [number, number, number?][];

const students: number[] = [
  12, 11, 123, 8, 9, 100, 90, 23, 22, 99, 198, 202, 11, 19, 78, 112, 7, 90, 877
];

function buildGroupes(students: number[]): Groupes | never {
  const len: number = students.length;
  if(len === 0) throw new Error("Error no student");

  const groupes: Groupes = [];
  students.sort((_) => Math.random() - 0.5);
  let j = 0 ;
  for (let i = 0; i < len / 2 ; i++) {

    const [k, l]: [number, number] = [students[i + j ], students[i + 1 + j]];
  
    if (l === undefined) {
      groupes[i - 1].push(k);
  
      break;
    }
  
    groupes.push([k, l]);
    j++;
  }

  return groupes;
}


console.log(buildGroupes([ ...students ]));

console.log(students);