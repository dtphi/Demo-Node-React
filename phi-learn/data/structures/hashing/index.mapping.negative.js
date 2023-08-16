// JavaScript program to implement direct index
// mapping with negative values allowed.

let MAX = 1000;

// Since array is global, it
// is initialized as 0.
let has = new Array(MAX + 1);
for (let i = 0; i < MAX + 1; i++) {
    has[i] = new Array(2);
    for (let j = 0; j < 2; j++)
        has[i][j] = 0;
}

// searching if X is Present in
// the given array or not.
function search(X) {
    if (X >= 0) {
        if (has[X][0] == true) {
            return true;
        }
        else {
            return false;
        }
    }

    // if X is negative take the
    // absolute value of X.
    X = Math.abs(X);
    if (has[X][1] == true) {
        return true;
    }

    return false;
}

function insert(a, n) {
    for (let i = 0; i < n; i++) {
        if (a[i] >= 0) {
            has[a[i]][0] = true;
        }
        else {
            let abs_i = Math.abs(a[i]);
            has[abs_i][1] = true;
        }
    }
}
//debugger
// Driver code
let a = [-1, 9, -5, -8, -5, -2];
let n = a.length;
insert(a, n);
let X = -5;
if (search(X) == true) {
    document.write("Present");
}
else {
    document.write("Not Present");
}