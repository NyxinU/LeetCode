//
//  3Sum.swift
//  
//
//  Created by Nix on 2/11/19.
//

import Foundation
class Solution {
    func threeSum(_ nums: [Int]) -> [[Int]] {
        let sorted = nums.sorted()
        var threeSumTriplets: [[Int]] = []
        
        for i in 0...sorted.count - 2 {
            if i == 0 || (i > 0 && sorted[i] != sorted[i - 1]) {
                var low: Int = i + 1
                var high: Int = sorted.count - 1
                var sum = 0 - sorted[i]
                
                while low < high {
                    if sorted[low] + sorted[high] == sum {
                        
                        threeSumTriplets.append([sorted[i], sorted[low], sorted[high]])
                        while low < high && sorted[low] == sorted[low + 1] { low += 1 }
                        while low < high && sorted[high] == sorted[high - 1] { high -= 1 }
                        low += 1
                        high -= 1
                    } else if (sorted[low] + sorted[high]) < sum {
                        low += 1
                    } else {
                        high -= 1
                    }
                }
            }
        }
        return threeSumTriplets
    }
}
