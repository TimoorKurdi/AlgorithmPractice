//An example of sorting an array first and then finding its duplicates

var arr = [9, 9, 111, 2, 3, 4, 4, 5, 7];
var sorted_arr = arr.sort(function(a,b) { return a - b; });
console.log(arr);
// [ 2, 3, 4, 4, 5, 7, 9, 9, 111 ]

var results = [];
for (var i = 0; i < arr.length; i++) {
  //The reason for -1 after length is that inorder to check the last element of the array, in this case 111, we need to minus 1, if we minus 2, 111 is no longer being checked to see if there are any doubles for it, if we minus 3, then the next element going reverse after 111, 9 is removed so now we only have one 9 and that means we only have 4 as a duplicate, so basically we would have [4] instead of [4, 9] as a final answer if we did arr.length - 3 or anything more than length - 2.
    if (sorted_arr[i + 1] == sorted_arr[i]) {
      //Here we write a conditional to see if on the iterations of the sorted array, the element at its index and the element right after its index, which is denoted by index + 1 is equal to the original element at the index. If so, we push it into our results array because we found a duplicate, if not we keep going until we've gone thru all the elements in the array.
        results.push(sorted_arr[i]);
    }
}

console.log(results);
//[ 4, 9 ]