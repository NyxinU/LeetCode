//
//  Set Matrix Zeroes .swift
//  
//
//  Created by Nix on 2/12/19.
//

import Foundation

class Solution {
    func setZeroes(_ matrix: inout [[Int]]) {
        var zeroInFirstRow: Bool = false
        var zeroInFirstCol: Bool = false
        
        for row in 0..<matrix.count {
            for col in 0..<matrix[0].count {
                if matrix[row][col] == 0 {
                    if row == 0 { zeroInFirstRow = true }
                    if col == 0 { zeroInFirstCol = true }
                    matrix[0][col] = 0
                    matrix[row][0] = 0
                }
            }
        }
        
        for col in 1..<matrix[0].count {
            if matrix[0][col] == 0 {
                for row in 1..<matrix.count {
                    matrix[row][col] = 0
                }
            }
            if zeroInFirstRow { matrix[0][col] = 0 }
        }
        
        for row in 1..<matrix.count {
            if matrix[row][0] == 0 {
                for col in 1..<matrix[0].count {
                    matrix[row][col] = 0
                }
            }
            if zeroInFirstCol { matrix[row][0] = 0 }
        }
    }
}
