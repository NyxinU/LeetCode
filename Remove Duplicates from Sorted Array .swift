//
//  Remove Duplicates from Sorted Array .swift
//  
//
//  Created by Nix on 2/11/19.
//

import Foundation

class Solution {
    func removeDuplicates(_ nums: inout [Int]) -> Int {
        if nums.count == 0 { return 0 }
        var i: Int = 0
        var j: Int = 0
        
        while j < nums.count {
            if nums[j] <= nums[i] {
                j += 1
            } else {
                nums[i + 1] = nums[j]
                i += 1
            }
        }
        return i + 1
    }
}
