//
//  Number of Islands .swift
//  
//
//  Created by Nix on 2/19/19.
//

import Foundation


  let one: Character = Character("1")
  let zero: Character = Character("0")
  
  func numIslands(_ grid: [[Character]]) -> Int {
    var counter: Int = 0
    var gridCopy: [[Character]] = grid
    var queue: [(row: Int, col: Int)] = []
    let rowCount = grid.count
    let colCount = grid[0].count
    
    for row in 0 ..< grid.endIndex {
      for col in 0 ..< grid[0].endIndex {
        if gridCopy[row][col] == one { queue.append((row, col)) }
        while queue.count > 0 {
          let coordiates = queue.removeFirst()
          appendAdjacentIslands(grid: &gridCopy, queue: &queue, row: coordiates.row - 1, col: coordiates.col, rowCount: rowCount, colCount: colCount)
          appendAdjacentIslands(grid: &gridCopy, queue: &queue, row: coordiates.row + 1, col: coordiates.col, rowCount: rowCount, colCount: colCount)
          appendAdjacentIslands(grid: &gridCopy, queue: &queue, row: coordiates.row, col: coordiates.col - 1, rowCount: rowCount, colCount: colCount)
          appendAdjacentIslands(grid: &gridCopy, queue: &queue, row: coordiates.row, col: coordiates.col + 1, rowCount: rowCount, colCount: colCount)
          
          print(queue)
          
          if queue.count == 0 { counter += 1}
        }
      }
    }
    return counter
  }
  
  func appendAdjacentIslands(grid: inout [[Character]], queue: inout [(row: Int, col: Int)], row: Int, col: Int, rowCount: Int, colCount: Int) -> Void {
    if (row >= 0 && col >= 0 && row < rowCount && col < colCount && grid[row][col] == one) {
      queue.append((row, col))
      grid[row][col] = zero
    }
  }
    print(numIslands([["1","1","1","1","1","0","1","1","1","1","1","1","1","1","1","0","1","0","1","1"],["0","1","1","1","1","1","1","1","1","1","1","1","1","0","1","1","1","1","1","0"],["1","0","1","1","1","0","0","1","1","0","1","1","1","1","1","1","1","1","1","1"],["1","1","1","1","0","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],["1","0","0","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],["1","0","1","1","1","1","1","1","0","1","1","1","0","1","1","1","0","1","1","1"],["0","1","1","1","1","1","1","1","1","1","1","1","0","1","1","0","1","1","1","1"],["1","1","1","1","1","1","1","1","1","1","1","1","0","1","1","1","1","0","1","1"],["1","1","1","1","1","1","1","1","1","1","0","1","1","1","1","1","1","1","1","1"],["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],["0","1","1","1","1","1","1","1","0","1","1","1","1","1","1","1","1","1","1","1"],["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],["1","1","1","1","1","0","1","1","1","1","1","1","1","0","1","1","1","1","1","1"],["1","0","1","1","1","1","1","0","1","1","1","0","1","1","1","1","0","1","1","1"],["1","1","1","1","1","1","1","1","1","1","1","1","0","1","1","1","1","1","1","0"],["1","1","1","1","1","1","1","1","1","1","1","1","1","0","1","1","1","1","0","0"],["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"]]))



