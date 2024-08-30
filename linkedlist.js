//##LinkedList
// Linked lists are another way to store and manage collections of data. 
// Unlike arrays, linked lists are not stored in contiguous memory locations. 
// Instead, each element (called a node) points to the next element in the list.

// Singly Linked List

// Create a Node
class Node {
    constructor(data) {
        this.data = data; //Value stored in the node
        this.next = null;//Pointer to the next node
    }
}

// Linked List
class LinkedList {
    constructor() {
        this.head = null;
    }


    // Add a new node to the end of the list
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode; //Add the new node at the end
    }

    //print all nodes in the list
    printList() {
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

// Example Usage
const list = new LinkedList();
list.append("apple");
list.append("banana");
list.append("cherry");
list.printList();
console.log(list);

