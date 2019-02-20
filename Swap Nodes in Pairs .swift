//
//  Swap Nodes in Pairs .swift
//  
//
//  Created by Nix on 2/20/19.
//

import Foundation

class Solution {
  func swapPairs(_ head: ListNode?) -> ListNode? {
    guard let head = head else { return nil }
    guard let next = head.next else { return head }
    
    let nextHead = swapPairs(next.next)
    
    head.next = nextHead
    next.next = head
    
    return next
  }
}
