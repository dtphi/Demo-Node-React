/**
 * 1. Use two loops
 */

// JavaScript program to find whether an array
// is subset of another array

/* Return true if arr2[] is a subset
of arr1[] */
function isSubset(arr1, arr2, m, n) {
    let i = 0;
    let j = 0;
    for (i = 0; i < n; i++) {
        for (j = 0; j < m; j++)
            if (arr2[i] == arr1[j])
                break;

        /* If the above inner loop
        was not broken at all then
        arr2[i] is not present in
        arr1[] */
        if (j == m)
            return false;
    }

    /* If we reach here then all
    elements of arr2[] are present
    in arr1[] */
    return true;
}
//debugger
// Driver Code
let arr1 = [11, 1, 13, 21, 3, 7];
let arr2 = [11, 3, 7, 1];

let m = arr1.length;
let n = arr2.length;

if (isSubset(arr1, arr2, m, n))
    document.write("arr2[] is "
        + "subset of arr1[] ");
else
    document.write("arr2[] is "
        + "not a subset of arr1[]");

/**
 * 2. Sorting and Binary Search.
 * Algorithm:
 * The algorithm is pretty straightforward. 
 * - Sort the first array arr1[].
 * - Look for the elements of arr2[] in sorted arr1[].
 * - If we encounter a particular value that is present in arr2[] but not in arr1[], the code will terminate, arr2[] can never be the subset of arr1[].
 * - Else arr2[] is the subset of arr1[].
 */

// Javascript program to find whether an array
// is subset of another array

// Return true if arr2[] is a subset of arr1[]
function isSubset(arr1, arr2, m, n) {
    let i = 0;

    sort(arr1, 0, m - 1);

    for (i = 0; i < n; i++) {
        if (binarySearch(arr1, 0, m - 1,
            arr2[i]) == -1)
            return false;
    }

    // If we reach here then all elements
    // of arr2[] are present in arr1[]
    return true;
}

/* FOLLOWING FUNCTIONS ARE ONLY
FOR SEARCHING AND
* SORTING PURPOSE */
/* Standard Binary Search function*/
function binarySearch(arr, low, high, x) {
    if (high >= low) {

        // low + (high - low)/2;
        let mid = Math.floor((low + high) / 2);

        // Check if arr[mid] is the first occurrence of
        // x. arr[mid] is first occurrence if x is one of
        // the following is true: (i) mid == 0 and
        // arr[mid] == x (ii) arr[mid-1] < x and arr[mid] == x
        if ((mid == 0 || x > arr[mid - 1]) &&
            (arr[mid] == x))
            return mid;
        else if (x > arr[mid])
            return binarySearch(arr, (mid + 1),
                high, x);
        else
            return binarySearch(arr, low,
                (mid - 1), x);
    }
    return -1;
}

/* This function takes last element as pivot,
places the pivot element at its correct
position in sorted array, and places all
smaller (smaller than pivot) to left of
pivot and all greater elements to right
of pivot */
function partition(arr, low, high) {
    let pivot = arr[high];
    let i = (low - 1);

    for (let j = low; j < high; j++) {

        // If current element is smaller than or
        // equal to pivot
        if (arr[j] <= pivot) {
            i++;

            // Swap arr[i] and arr[j]
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    // Swap arr[i+1] and arr[high] (or pivot)
    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;

    return i + 1;
}

/* The main function that implements QuickSort()
arr[] --> Array to be sorted,
low --> Starting index,
high --> Ending index */
function sort(arr, low, high) {
    if (low < high) {

        // pi is partitioning index, arr[pi]
        // is now at right place
        let pi = partition(arr, low, high);

        // Recursively sort elements before
        // partition and after partition
        sort(arr, low, pi - 1);
        sort(arr, pi + 1, high);
    }
}

// Driver Code
arr1 = [11, 1, 13, 21, 3, 7];
arr2 = [11, 3, 7, 1];
m = arr1.length;
n = arr2.length;

if (isSubset(arr1, arr2, m, n))
    document.write("arr2[] is subset of arr1[] ");
else
    document.write("arr2[] is not a subset of arr1[]");


/**
 * 3. Sorting and Merging
 * Algorithm:
 * The initial step will be to sort the two arrays.
 * - Find whether an array is subset of another array - GeeksforGeeks
 * - If arr1[j] < arr2[i], we will increase j by 1.
 * - If arr1[j] = arr2[i], we will increase j and i by 1.
 * - If arr1[j] > arr2[i], we will terminate as arr2[] is not the subset of arr1[].
 */

// JavaScript program to find whether an array
// is subset of another array

// Return 1 if arr2[] is a subset of arr1[]
function isSubset(arr1, arr2, m, n) {
    let i = 0, j = 0;

    if (m < n)
        return 0;

    // Sort both the arrays
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);

    // Iterate till they do not exceed their sizes
    while (i < n && j < m) {

        // If the element is smaller then
        // Move ahead in the first array
        if (arr1[j] < arr2[i])
            j++;

        // If both are equal, then move
        // both of them forward
        else if (arr1[j] == arr2[i]) {
            j++;
            i++;
        }

        // If we do not have an element smaller
        // or equal to the second array then break
        else if (arr1[j] > arr2[i])
            return 0;
    }
    return (i < n) ? false : true;
}

// Driver Code
arr1 = [11, 1, 13, 21, 3, 7];
arr2 = [11, 3, 7, 1];

m = arr1.length;
n = arr2.length;

if (isSubset(arr1, arr2, m, n))
    document.write("arr2[] is subset of arr1[] ");
else
    document.write("arr2[] is not a subset of arr1[] ");


/**
 * 4. Hashing
 * 
 */

// Javascript code to find whether an
// array is subset of another array

// Return true if arr2[] is a
// subset of arr1[]
function isSubset(arr1, arr2, m, n) {
    let hset = new Set();

    // hset stores all the values of arr1
    for (let i = 0; i < m; i++) {
        if (!hset.has(arr1[i]))
            hset.add(arr1[i]);
    }

    // Loop to check if all elements
    // of arr2 also lies in arr1
    for (let i = 0; i < n; i++) {
        if (!hset.has(arr2[i]))
            return false;
    }
    return true;
}

// Driver Code
arr1 = [11, 1, 13, 21, 3, 7];
arr2 = [11, 3, 7, 1];
m = arr1.length;
n = arr2.length;

if (isSubset(arr1, arr2, m, n))
    document.write("arr2 is a subset of arr1");
else
    document.write("arr2 is not a subset of arr1");


/**
 * 5. Set
 * 
 */

arr1 = [11, 1, 13, 21, 3, 7];
arr2 = [11, 3, 7, 1];
m = arr1.length;
n = arr2.length;
let s = new Set();
for (let i = 0; i < m; i++) {
    s.add(arr1[i]);
}
let p = s.size;
for (let i = 0; i < n; i++) {
    s.add(arr2[i]);
}

if (s.size == p) {
    document.write("arr2[] is subset of arr1[] " + "<br>");
}
else {
    document.write("arr2[] is not subset of arr1[] " + "<br>");
}

/**
 * 6. Frequency Table
 */

// javascript program to find whether an array
// is subset of another array

/* Return true if arr2[] is a subset of arr1[] */

function isSubset(arr1, m, arr2, n) {
    // Create a Frequency Table using STL
    let frequency = new Array(arr1);

    // Increase the frequency of each element
    // in the frequency table.
    for (let i = 0; i < m; i++) {
        frequency[arr1[i]]++;
    }
    // Decrease the frequency if the
    // element was found in the frequency
    // table with the frequency more than 0.
    // else return 0 and if loop is
    // completed return 1.
    for (let i = 0; i < n; i++) {
        if (frequency[arr2[i]] > 0)
            frequency[arr2[i]]--;
        else {
            return false;
        }
    }
    return true;
}

// Driver Code
arr1 = [11, 1, 13, 21, 3, 7];
arr2 = [11, 3, 7, 1];
m = arr1.length;
n = arr2.length;

if (isSubset(arr1, m, arr2, n))
    document.write("arr2[] is subset of arr1[] "
        + "\n");
else
    document.write("arr2[] is not a subset of arr1[] "
        + "\n");
