//solucionado
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    let l = head;
    let array = [];
    while(l != null ){
        array.push(l.val)
        l = l.next
    }
    let array2 = [...array];
   array =  array.join("")
   array2 = array2.reverse().join("")
   if(array === array2){
    return true
   }else{
    return false
   }

};