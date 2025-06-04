function twoSumTS(arr: number[], target: number): number[] {
  let map = new Map<number, number>();

  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];

    if (map.has(complement)) {
      return [map.get(complement) as number, i];
    }
    map.set(arr[i], i);
  }
  return [];
}

console.log(twoSumTS([2, 7, 11, 15], 9));
