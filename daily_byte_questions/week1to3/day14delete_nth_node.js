// This question is asked by Facebook. Given a linked list and a value n, remove the nth to last node and return the resulting list.

// Ex: Given the following linked lists...

// 1->2->3->null, n = 1, return 1->2->null
// 1->2->3->null, n = 2, return 1->3->null
// 1->2->3->null, n = 3, return 2->3->null
function deleteNthNode(list,n) {
    let fast = list.head 
    for (let i =0;i<n;i++) {
        fast = fast.next 
    }
    let current = list.head 
    while (fast) {
        fast = fast.next 
        current = current.next
    }
    current.next = null 
}