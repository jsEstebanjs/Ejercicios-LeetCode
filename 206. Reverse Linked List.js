//solucion
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    let l = head;
    let array = [];
    while(l != null){
        array.push(l.val);
        l = l.next;
    }
    array.reverse()
    //convertir de array a lista 
    let h = null;
    let p = null;
    for(i = 0;i<array.length;i++){
        const node = new ListNode(array[i],null);
        if(h === null){
            h = node;
            p = node;
            
        }else{
            p.next = node;
            p = node
        }
    }
    return h
};