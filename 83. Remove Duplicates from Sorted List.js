//Solucion
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
 var deleteDuplicates = function(head) {
    let one = []
    let nodo1 =head


    while(nodo1 != null ){
        one.push(nodo1.val);
        nodo1 = nodo1.next;
    }
    one = new Set([...one])
    one = [...one]
    

    let head2 = null;
    let p = null;
    for(i = 0;i<one.length;i++){
        const node = new ListNode(one[i],null)
        if(head2 === null){
            head2 = node
            p = node
        }else{
            p.next = node;
            p = node
        }
    }
    return head2
};