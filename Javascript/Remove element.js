function removeElement(nums, val) {
  let k = 0,
    j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) j++;
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
    return j + 1;
  }

  //   const filtered = nums.filter((el) => {
  //     if (el === val) count++;
  //     return el !== val;
  //   });

  //   const sorted = filtered.sort((a, b) => a - b);
  //   return count;
}

let nums = [0, 1, 2, 2, 3, 0, 4, 2],
  val = 2;

console.log(removeElement(nums, val));
