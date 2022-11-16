//solucion
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    let one = []
    let nodo1 =list1
    let nodo2 = list2

    while(nodo1 != null ){
        one.push(nodo1.val);
        nodo1 = nodo1.next;
    }
    while(nodo2 != null){
        one.push(nodo2.val);
        nodo2 = nodo2.next;
    }
    one.sort((a,b)=>{
        return a - b
    })
    let head = null;
    let p = null;
    for(i = 0;i<one.length;i++){
        const node = new ListNode(one[i],null)
        if(head === null){
            head = node
            p = node
        }else{
            p.next = node;
            p = node
        }
    }
    return head
};