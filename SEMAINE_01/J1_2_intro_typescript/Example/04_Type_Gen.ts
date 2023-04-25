// typage générique
function fusion<T>(a: T[], b: T[]): T[] {
  return a.concat(b);
}

let c = fusion<string>(["a", "b", "c"], ["d", "e"]);
console.log(c); // affichera ['a', 'b', 'c', 'd', 'e']

fusion<number>([1, 2, 3], [5, 6, 7]);

function fusionTR<T, R>(a: T[], b: R[]): Array<T|R> {
  const res: Array<T|R> = [];

  return res.concat(a, b);
}

console.log( fusionTR<number, string>([1, 2, 3], ["10", "20"]) ) ;

class Queue<T> {}
