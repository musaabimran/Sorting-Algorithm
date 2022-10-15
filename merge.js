// the array that will be use of the size
let inputArr_m = []

const label_m = inputArr_m
const data_m = {
    labels: label_m,
    datasets: [{
        label: 'Merge Sort',
        backgroundColor: '#a14084',
        borderColor: '#A13034',
        data: [],
    }]
};

const config_m = {
    type: 'bar',
    data: data_m,
    options: {}
};


const myChart_m = new Chart(
    document.getElementById('merge_sort'),
    config_m
);


 
async function mergeSort(arr) {
    let n= arr.length
    // For current size of subarrays to
    // be merged curr_size varies from
    // 1 to n/2
    var curr_size;

    // For picking starting index of
    // left subarray to be merged
    var left_start;

    // Merge subarrays in bottom up
    // manner. First merge subarrays
    // of size 1 to create sorted
    // subarrays of size 2, then merge
    // subarrays of size 2 to create
    // sorted subarrays of size 4, and
    // so on.
    for (curr_size = 1; curr_size <= n - 1; curr_size = 2 * curr_size) {

        // Pick starting point of different
        // subarrays of current size
        for (left_start = 0; left_start < n - 1; left_start += 2 * curr_size) {
            // Find ending point of left
            // subarray. mid+1 is starting
            // point of right
            var mid = Math.min(left_start + curr_size - 1, n - 1);

            var right_end = Math.min(left_start + 2 * curr_size - 1, n - 1);

            // Merge Subarrays arr[left_start...mid]
            // & arr[mid+1...right_end]
            merge(arr, left_start, mid, right_end);
            await sleep(speedFactor*2)
            myChart_m.data.datasets[0].data = inputArr_m
            myChart_m.config.data.labels = inputArr_m
            myChart_m.update()
        }
    }

    await sleep(speedFactor)
    myChart_m.data.datasets[0].data = inputArr_m
    myChart_m.config.data.labels = inputArr_m
    myChart_m.data.datasets[0].backgroundColor = '#1C9753'
    myChart_m.update()
   
    return inputArr_m
}

/*
 * Function to merge the two haves arr[l..m] and arr[m+1..r] of array arr
 */
 function merge(arr , l , m , r) {
    var i, j, k;
    var n1 = m - l + 1;
    var n2 = r - m;

    /* create temp arrays */
    var L = Array(n1).fill(0);
    var R = Array(n2).fill(0);

    /*
     * Copy data to temp arrays L and R
     */
    for (i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];

    /*
     * Merge the temp arrays back into arr[l..r]
     */
    i = 0;
    j = 0;
    k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    /*
     * Copy the remaining elements of L, if there are any
     */
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    /*
     * Copy the remaining elements of R, if there are any
     */
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }

  
}
