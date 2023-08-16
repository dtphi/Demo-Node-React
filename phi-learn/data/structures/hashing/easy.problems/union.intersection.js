// JavaScript program to find union and intersection of
// two unsorted linked lists in O(m+n) time.
// structure of a node
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function push(head_ref, new_data) {
    // allocate node and put in data
    let new_node = new Node(new_data);

    // link the old list of the new node
    new_node.next = head_ref;

    // move the head to point to the new node
    head_ref = new_node;
    return head_ref;
}

function getIntersection(head1, head2) {
    let m = new Map();
    let result = null;

    let p = head1;
    while (p != null) {
        m.set(p.data, true);
        p = p.next;
    }
    p = head2;
    while (p != null) {
        if (m.has(p.data) && m.get(p.data) == true) {
            result = push(result, p.data);
        }
        p = p.next;
    }
    return result;
}

function getUnion(head1, head2) {
    let union_list = new Set();
    let p = head1;
    while (p != null) {
        union_list.add(p.data);
        p = p.next;
    }
    p = head2;
    while (p != null) {
        union_list.add(p.data);
        p = p.next;
    }
    let result = null;
    union_list.forEach(function (value) {
        result = push(result, value);
    })
    return result;
}

function printList(node) {
    while (node != null) {
        document.write(node.data + " ");
        node = node.next;
    }
}

function printUnionIntersection(head1, head2) {
    let intersection_list = getIntersection(head1, head2);
    let union_list = getUnion(head1, head2);

    console.log("Intersection list is : ");
    printList(intersection_list);
    console.log("Union list is : ");
    printList(union_list);
}

// driver code to test above function
let head1 = null;
let head2 = null;

// list1
head1 = push(head1, 1);
head1 = push(head1, 2);
head1 = push(head1, 3);
head1 = push(head1, 3);
head1 = push(head1, 4);
head1 = push(head1, 5);

// list2
head2 = push(head2, 1);
head2 = push(head2, 5);
head2 = push(head2, 6);

console.log("First list is : ");
printList(head1);

console.log("Second list is : ");
printList(head2);

printUnionIntersection(head1, head2);

// THIS CODE IS CONTRIBUTED BY YASH AGARWAL(YASHAGARWAL2852002)
