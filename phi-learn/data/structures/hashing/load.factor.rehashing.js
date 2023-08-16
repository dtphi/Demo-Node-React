// javascript program to implement Rehashing
class Map {
    constructor() {
        // The bucket array where
        // the nodes containing K-V pairs are stored
        this.buckets = [];
        this.numBuckets = 5;
        // No. of pairs stored - n
        this.size = 0;
        // Default loadFactor
        this.DEFAULT_LOAD_FACTOR = 0.75;

        for (let i = 0; i < this.numBuckets; i++) {
            this.buckets.push(null);
        }
    }

    getBucketInd(key) {
        //Using the inbuilt function from the object class
        let hashCode = key.toString().hashCode();
        // array index = hashCode%numBuckets
        return (hashCode % this.numBuckets);
    }

    insert(key, value) {
        //Getting the index at which it needs to be inserted
        let bucketInd = this.getBucketInd(key);

        // The first node at that index
        let head = this.buckets[bucketInd];
        // First, loop through all the nodes present at that index
        // to check if the key already exists
        while (head) {
            //If already present the value is updated
            if (head.key == key) {
                head.value = value;
                return;
            }
            head = head.next;
        }
        //new node with the K and V
        let newElementNode = new MapNode(key, value);
        //The head node at the index
        head = this.buckets[bucketInd];
        // the new node is inserted
        // by making it the head
        // and it's next is the previous head
        newElementNode.next = head;
        this.buckets[bucketInd] = newElementNode;
        this.size++;
        let loadFactor = (1.0 * this.size) / this.numBuckets;

        if (loadFactor > this.DEFAULT_LOAD_FACTOR) {
            console.log(loadFactor
                + " is greater than "
                + this.DEFAULT_LOAD_FACTOR);
            //If the load factor is > 0.75, rehashing is done
            console.log(
                "Therefore Rehashing will be done.");
            //Rehash
            this.rehash();

            console.log("New Size of Map: "
                + this.numBuckets);
        }

        console.log("Number of pairs in the Map: "
            + this.size);
    }

    rehash() {
        console.log("\n***Rehashing Started***\n");
        //he present bucket list is made temp
        let temp = this.buckets;
        // New bucketList of double the old size is created
        this.numBuckets *= 2;
        //Initialised to null
        this.buckets = [];
        for (let i = 0; i < this.numBuckets; i++) {
            this.buckets.push(null);
        }
        //Now size is made zero
        // and we loop through all the nodes in the original bucket list(temp)
        // and insert it into the new list
        this.size = 0;

        for (let i = 0; i < temp.length; i++) {
            let head = temp[i];

            while (head) {
                let key = head.key;
                let val = head.value;
                //calling the insert function for each node in temp
                // as the new list is now the bucketArray
                this.insert(key, val);
                head = head.next;
            }
        }

        console.log("***Rehashing Done***\n");
    }

}

class MapNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

String.prototype.hashCode = function () {
    let hash = 0;
    if (this.length == 0) {
        return hash;
    }
    for (let i = 0; i < this.length; i++) {
        let char = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}


let map = new Map();
// Inserting elements
map.insert(1, 1);
map.insert(2, 2);
map.insert(3, 3);
map.insert(4, 4);
map.insert(5, 5);
map.insert(6, 6);
map.insert(7, 7);
map.insert(8, 8);
map.insert(9, 9);
map.insert(10, 10);

//Code is contributed by NarasingaNikhil
