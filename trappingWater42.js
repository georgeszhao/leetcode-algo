/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if (height === null || height.length === 0) return 0;

    let max = 0,
        leftmax = 0,
        rightmax = 0,
        left = 0,
        right = height.length - 1;

    while (left < right) {
        leftmax = Math.max(leftmax, height[left]);
        rightmax = Math.max(rightmax, height[right]);

        if (leftmax < rightmax) {
            max += leftmax - height[left];
            left++;
        } else {
            max += rightmax - height[right];
            right--;
        }
    }
    return max;
};

/*

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.


The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!

Example:

Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6

*/