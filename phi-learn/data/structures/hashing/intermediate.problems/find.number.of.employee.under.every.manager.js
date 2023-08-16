// A hashmap to store result. It stores count of employees
// under every employee, the count may be 0 also
let result = new Map();

// Driver function
function main() {
    let dataSet = new Map();
    dataSet.set("A", "C");
    dataSet.set("B", "C");
    dataSet.set("C", "F");
    dataSet.set("D", "E");
    dataSet.set("E", "F");
    dataSet.set("F", "F");

    populateResult(dataSet);
    console.log("result = ", result);
}

// This function populates 'result' for given input 'dataset'
function populateResult(dataSet) {
    // To store reverse of original map, each key will have 0
    // to multiple values
    let mngrEmpMap = new Map();

    // To fill mngrEmpMap, iterate through the given map
    for (let [emp, mngr] of dataSet) {
        if (emp !== mngr) { // excluding emp-emp entry
            // Get the previous list of direct reports under
            // current 'mgr' and add the current 'emp' to the list
            let directReportList = mngrEmpMap.get(mngr);

            // If 'emp' is the first employee under 'mgr'
            if (directReportList === undefined) {
                directReportList = [];
                // add a new entry for the mngr with empty directReportList
                mngrEmpMap.set(mngr, directReportList);
            }
            directReportList.push(emp);
        }
    }

    // Now use manager-Emp map built above to populate result
    // with use of populateResultUtil()

    // note- we are iterating over original emp-manager map and
    // will use mngr-emp map in helper to get the count
    for (let mngr of dataSet.keys()) {
        populateResultUtil(mngr, mngrEmpMap);
    }
}

// This is a recursive function to fill count for 'mgr' using
// mngrEmpMap. This function uses memoization to avoid re-
// computations of subproblems.
function populateResultUtil(mngr, mngrEmpMap) {
    let count = 0;

    // means employee is not a manager of any other employee
    if (!mngrEmpMap.has(mngr)) {
        result.set(mngr, 0);
        return 0;
    }

    // this employee count has already been done by this
    // method, so avoid re-computation
    else if (result.has(mngr)) {
        count = result.get(mngr);
    }

    else {
        let directReportEmpList = mngrEmpMap.get(mngr);
        count = directReportEmpList.length;
        for (let directReportEmp of directReportEmpList) {
            count += populateResultUtil(directReportEmp, mngrEmpMap);
        }

        result.set(mngr, count);
    }
    return count;
}
//debugger
// call the main function
main();
