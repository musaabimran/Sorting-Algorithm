// the array that will be use of the size
let inputArr_buc = []

labels9 = inputArr_buc
const data9 = {
labels: labels9,
datasets: [{
    label: 'Bucket Sort',
    backgroundColor: '#a14084',
    borderColor: '#A13034',
    data: []
}]
};

const config9 = {
type: 'bar',
data: data9,
options: {}
};


const bucket = new Chart(
document.getElementById('bucket_sort'),
config9
);


// find the maximum in the array
function getMax(data,size)
{
    let max = data[0];
        for (let i = 1; i < size; i++)
            if (data[i] > max) // if greater
                max = data[i]
        return max //return the max
}

// get the minimum in the array
function getMin(data, n)
{
    let min = data[0];
    for (let i = 1; i < n; i++)
        if (data[i] < min) // if lesser
            min = data[i]
    return min //return the min
}

// the main code for the bucket sort
async function bucketSort(inputArr_buc,n)
{

    // if 1 or no elements
    if (n <= 1)
            return;

    // getting maximun and minimum
    let max = getMax(inputArr_buc, n)
    let min = getMin(inputArr_buc, n)

    // for bucket making --- calculating bucket number
    const bucketNo = Math.ceil(Math.log10(n) * 3.3);

    // for finding the interval
    let interval = (max - min) / bucketNo
    
    // creating buckets ---- to avoid loosing any digit adding 1 more bucket
    let createdBucket = bucketNo + 1

   
    // 1) Create n empty buckets equal to the number calculated      
    let buckets = new Array(createdBucket);

    for (let i = 0; i < createdBucket; i++)
    {
        buckets[i] = [];
    }

    // 2) Put array elements in different buckets
    for (let i = 0; i <  n;  i++) {
        // identifying the bucket
        buckets[Math.floor ( Math.abs((inputArr_buc[i] - min) / interval )) ].push(inputArr_buc[i]); 
    }

    // 3) Sort individual buckets by the insrtion sort 
    for (let i = 0; i < createdBucket; i++) {
        buckets[i].sort(function(a,b){return a-b;});

         // the changed graphs after sorting iteration
         await sleep(speedFactor/10)
         bucket.data.datasets[0].data = inputArr_buc
         bucket.config.data.labels = inputArr_buc
         bucket.update()
    }

    // 4) Concatenate all buckets into arr[] to get the sorted array
    let index = 0;
    for (let i = 0; i < createdBucket; i++) {
        for (let j = 0; j < buckets[i].length; j++) {
            inputArr_buc[index++] = buckets[i][j];

             // the changed graphs after sorting iteration
        await sleep(speedFactor )
        bucket.data.datasets[0].data = inputArr_buc
        bucket.config.data.labels = inputArr_buc
        bucket.update()

        }
       
    }

    bucket.data.datasets[0].data = inputArr_buc
    bucket.config.data.labels = inputArr_buc
    bucket.data.datasets[0].backgroundColor = '#1C9753'
    bucket.update()
    
}
