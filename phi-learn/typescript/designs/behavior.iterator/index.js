/**
 * Iterator Design Pattern
 *
 * Intent: Lets you traverse elements of a collection without exposing its
 * underlying representation (list, stack, tree, etc.).
 */
/**
 * Concrete Iterators implement various traversal algorithms. These classes
 * store the current traversal position at all times.
 */
var AlphabeticalOrderIterator = /** @class */ (function () {
    function AlphabeticalOrderIterator(collection, reverse) {
        if (reverse === void 0) { reverse = false; }
        /**
         * Stores the current traversal position. An iterator may have a lot of
         * other fields for storing iteration state, especially when it is supposed
         * to work with a particular kind of collection.
         */
        this.position = 0;
        /**
         * This variable indicates the traversal direction.
         */
        this.reverse = false;
        this.collection = collection;
        this.reverse = reverse;
        if (reverse) {
            this.position = collection.getCount() - 1;
        }
    }
    AlphabeticalOrderIterator.prototype.rewind = function () {
        this.position = this.reverse ?
            this.collection.getCount() - 1 :
            0;
    };
    AlphabeticalOrderIterator.prototype.current = function () {
        return this.collection.getItems()[this.position];
    };
    AlphabeticalOrderIterator.prototype.key = function () {
        return this.position;
    };
    AlphabeticalOrderIterator.prototype.next = function () {
        var item = this.collection.getItems()[this.position];
        this.position += this.reverse ? -1 : 1;
        return item;
    };
    AlphabeticalOrderIterator.prototype.valid = function () {
        if (this.reverse) {
            return this.position >= 0;
        }
        return this.position < this.collection.getCount();
    };
    return AlphabeticalOrderIterator;
}());
/**
 * Concrete Collections provide one or several methods for retrieving fresh
 * iterator instances, compatible with the collection class.
 */
var WordsCollection = /** @class */ (function () {
    function WordsCollection() {
        this.items = [];
    }
    WordsCollection.prototype.getItems = function () {
        return this.items;
    };
    WordsCollection.prototype.getCount = function () {
        return this.items.length;
    };
    WordsCollection.prototype.addItem = function (item) {
        this.items.push(item);
    };
    WordsCollection.prototype.getIterator = function () {
        return new AlphabeticalOrderIterator(this);
    };
    WordsCollection.prototype.getReverseIterator = function () {
        return new AlphabeticalOrderIterator(this, true);
    };
    return WordsCollection;
}());
/**
 * The client code may or may not know about the Concrete Iterator or Collection
 * classes, depending on the level of indirection you want to keep in your
 * program.
 */
var collection = new WordsCollection();
collection.addItem('First');
collection.addItem('Second');
collection.addItem('Third');
var iterator = collection.getIterator();
console.log('Straight traversal:');
while (iterator.valid()) {
    console.log(iterator.next());
}
console.log('');
console.log('Reverse traversal:');
var reverseIterator = collection.getReverseIterator();
while (reverseIterator.valid()) {
    console.log(reverseIterator.next());
}
