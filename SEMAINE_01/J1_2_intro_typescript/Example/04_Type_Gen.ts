// typage générique
function fusion<T>(a: T[], b: T[]): T[] {
    return a.concat(b);
}

let c = fusion<string>(['a', 'b', 'c'], ['d', 'e']);
console.log(c) // affichera ['a', 'b', 'c', 'd', 'e']


fusion<number>([1, 2, 3], [5, 6, 7]);

function fusionTR<T,R,S>(a:T[], b :R[]) : S[]{
    const res : S[] = [];

    return res ;
}

type Merge = number[];

fusionTR<number, string, Merge>([1, 2, 3], ['10', '20']);


class Queue<T>{
    
}