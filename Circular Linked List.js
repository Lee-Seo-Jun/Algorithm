function Node(value){
    this.data = valuel;
    this.next = null;
};

function CircularLinkedList(){
    this.head = null;
    this.length = 0;
};

CircularLinkedList.prototype.size = function(){
    return this.length;
};

CircularLinkedList.prototype.isEmpty = function(){
    return this.length === 0;
};

let cll = new CircularLinkedList();
let node;


node = new Node(123);
cll.head = node;
node.next = cll.head;
cll.length++;
console.log(cll);