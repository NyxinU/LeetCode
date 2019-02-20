//
//  Reverse String.swift
//  
//
//  Created by Nix on 2/12/19.
//

import Foundation

class Solution {
    func reverseString(_ s: inout [Character]) {
        var i: Int = 0
        var j: Int = s.count - 1
        
        reverseStringHelper(s, i, j)
    }
    
  func reverseStringHelper(_ s: inout [Character],_ i: Int, _ j: Int) {
        if i <= j { return }
        reverseStringHelper(&s, &i, &j)
    }
}
