//
//  Longest Substring Without Repeating Characters .swift
//  
//
//  Created by Nix on 3/6/19.
//

import Foundation

  func lengthOfLongestSubstring(_ s: String) -> Int {
    var lowestIndex: Int = 0
    var largestRange: Int = 0
    var indexOfLetters = [Character: Int]()
    
    for (index, c) in s.enumerated() {
      if let prevIndex = indexOfLetters[c] {
        indexOfLetters[c] = index
        if prevIndex >= lowestIndex {
          lowestIndex = prevIndex + 1
          continue
        }
      }
      let range = (index + 1) - lowestIndex
      if range > largestRange { largestRange = range }
      indexOfLetters[c] = index
      
//      print(lowestIndex, index, largestRange, c)
    }
    return largestRange
  }

print(lengthOfLongestSubstring("tmmzuxt"))
print(lengthOfLongestSubstring("aabebcdaf"))
