// function mergeTwoSortedList(l1, l2) {
//   let i = 0,
//     j = 0,
//     result = [];
//   while (i < l1.length && j < l2.length) {
//     if (l1[i] < l2[j]) {
//       result.push(l1[i]);
//       i++;
//     } else {
//       result.push(l2[j]);
//       j++;
//     }
//   }
//   return result.concat(l1.slice(i)).concat(l2.slice(j));
// }

// let list1 = [1, 2, 4],
//   list2 = [1, 3, 4];
// console.log(mergeTwoSortedList(list1, list2));

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(-1);
  let current = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }
  current.next = list1 ? list1 : list2;
  return dummy;
};
