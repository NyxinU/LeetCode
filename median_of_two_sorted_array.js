
var findMedianSortedArrays = function (nums1, nums2) {
  let half = (nums1.length + nums2.length)/2;
  let combined = (nums1.concat(nums2).sort(function (a, b) {
    return a - b
  }));
  let mid = Math.floor(half);

  console.log('====================================');
  console.log(combined);
  console.log('====================================');

  if (half === mid) {
    return (combined[mid] + combined[mid - 1])/2;
  }else { 
    return combined[mid];
  }


};

let nums1 = [1]
let nums2 = [2, 3, 4, 5, 6, 7, 8, 9, 10]


console.log('====================================');
console.log(findMedianSortedArrays(nums1, nums2));
console.log('====================================');

