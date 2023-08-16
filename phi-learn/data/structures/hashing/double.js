// JS code
const MAX_SIZE = 10000001;

// Set sieve of Eratosthenes
let isPrime = new Array(MAX_SIZE).fill(0);
isPrime[0] = isPrime[1] = 1;
for (let i = 2; i * i <= MAX_SIZE; i++) {
    if (isPrime[i] === 0) {
        for (let j = i * i; j <= MAX_SIZE; j += i) {
            isPrime[j] = 1;
        }
    }
}

// Create DoubleHash Class
class DoubleHash {
    constructor(n) {
        this.TABLE_SIZE = n;
        this.PRIME = this.TABLE_SIZE - 1;
        while (isPrime[this.PRIME] === 1) {
            this.PRIME--;
        }
        this.keysPresent = 0;
        this.hashTable = new Array(this.TABLE_SIZE).fill(-1);
    }
    isFull() {
        return this.TABLE_SIZE == this.keysPresent;
    }
    hash1(value) {
        return value % this.TABLE_SIZE;
    }

    hash2(value) {
        return this.PRIME - (value % this.PRIME);
    }

    // Function to print prime numbers
    __printPrime(n) {
        for (let i = 0; i <= n; i++) {
            if (isPrime[i] === 0) {
                console.log(i + ", ");
            }
        }
        console.log("\n");
    }

    // Function to insert value in hash table
    insert(value) {
        if (value === -1 || value === -2) {
            console.log("ERROR : -1 and -2 can't be inserted in the table\n");
        }
        if (this.isFull()) {
            console.log("ERROR : Hash Table Full\n");
            return;
        }
        let probe = this.hash1(value),
            offset = this.hash2(value); // in linear probing offset = 1;

        while (this.hashTable[probe] !== -1) {
            if (-2 === this.hashTable[probe]) break; // insert at deleted element's location
            probe = (probe + offset) % this.TABLE_SIZE;
        }

        this.hashTable[probe] = value;
        this.keysPresent += 1;
    }

    erase(value) {
        // Return if element is not present
        if (!this.search(value)) return;

        let probe = this.hash1(value),
            offset = this.hash2(value);

        while (this.hashTable[probe] !== -1) {
            if (this.hashTable[probe] === value) {
                this.hashTable[probe] = -2; // mark element as deleted (rather than unvisited(-1)).
                this.keysPresent--;
                return;
            } else {
                probe = (probe + offset) % this.TABLE_SIZE;
            }
        }
    }

    search(value) {
        let probe = this.hash1(value),
            offset = this.hash2(value),
            initialPos = probe;
        let firstItr = true;

        while (1) {
            if (this.hashTable[probe] === -1) break; // Stop search if -1 is encountered.
            else if (this.hashTable[probe] === value) return true; // Stop search after finding the element.
            else if (probe === initialPos && !firstItr)
                return false; // Stop search if one complete traversal of hash table is completed.
            else probe = (probe + offset) % this.TABLE_SIZE; // if none of the above cases occur then update the index and check at it.
            firstItr = false;
        }
        return false;
    }

    // Function to display the hash table.
    print() {
        for (let i = 0; i < this.TABLE_SIZE; i++) console.log(this.hashTable[i] + ", ");
        console.log("\n");
    }
}

// Main function
function main() {
    let myHash = new DoubleHash(13); // creates an empty hash table of size 13

    // Inserts random element in the hash table
    let insertions = [115, 12, 87, 66, 123],
        n1 = insertions.length;

    for (let i = 0; i < n1; i++) myHash.insert(insertions[i]);

    console.log("Status of hash table after initial insertions : ");
    myHash.print();

    // Searches for random element in the hash table, and prints them if found.
    let queries = [1, 12, 2, 3, 69, 88, 115],
        n2 = queries.length;

    console.log("\n" + "Search operation after insertion : \n");

    for (let i = 0; i < n2; i++)
        if (myHash.search(queries[i])) console.log(queries[i] + " present\n");

    // Deletes random element from the hash table.
    let deletions = [123, 87, 66],
        n3 = deletions.length;

    for (let i = 0; i < n3; i++) myHash.erase(deletions[i]);

    console.log("Status of hash table after deleting elements : ");
    myHash.print();

    return 0;
}
//debugger
main();

// This code is contributed by ishankhandelwals.
