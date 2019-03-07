//
//  Pascal's Triangle.swift
//  
//
//  Created by Nix on 3/6/19.
//

import Foundation

func generate(_ numRows: Int) -> [[Int]] {
  if numRows == 1 { return [[1]] }
  var pyramid = generate(numRows - 1)
  guard let botRow = pyramid.last else {
    return [[]]
  }
  var newRow = [Int]()
  
  for idx in 0...botRow.count {
    if idx == 0 || idx == botRow.count {
      newRow.append(1)
    } else {
      let sum = botRow[idx - 1] + botRow[idx]
      newRow.append(sum)
    }
  }
  pyramid.append(newRow)
  
  return pyramid
}

print(generate(9))
