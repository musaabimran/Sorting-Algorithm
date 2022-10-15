// the array that will be use of the size
let rad = []

labels = rad
const data_r = {
labels: labels,
datasets: [{
    label: 'Radix Sort',
    backgroundColor: '#a14084',
    borderColor: '#A13034',
    data: []
}]
};

const config_r = {
type: 'bar',
data: data_r,
options: {}
};



const radixChart = new Chart(
document.getElementById('radix_sort'),
config_r
);


function splitArray(dataArray)
{
    var positiveArray = [];
    var negativeArray = [];

    // spliting negative and positive
    for(let i = 0 ; i< dataArray.length ; i++)
    {
        if(dataArray[i] >= 0)
        {
            positiveArray.push(dataArray[i]);
        }
        else
        {
            negativeArray.push(dataArray[i]);
        }
    }

    // returning both
    return [positiveArray, negativeArray]
}

// reverse the array
function reverseArr(input) {
    var ret = new Array;
    for(var i = input.length-1; i >= 0; i--) {
        ret.push(input[i]);
    }
    return ret;
}

//   find the maximum digit used in the array
function getMax_rad(data,size)
{
    let max = Math.abs(data[0]);
        for (let i = 1; i < size; i++)
        {
            if (Math.abs(data[i]) > Math.abs(max)) //if greater
                max = Math.abs(data[i])
        }
        
        return max //return the max
}

// for getting a digit at a specified place
function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10 //the digit we need
  }

// A function to do counting sort of arr[] according to
    // the digit represented by exp.
async function radixSort_N(dataArray) {
    
    // getting max digit number
    var max = getMax_rad(dataArray, dataArray.length)
  
    // count -- iterate equal to digits of max
    // go till max/mutilple of 10, i.e 10, 100 result greater than 0
    //  99 then 2 times ,9999 the 4 times
    for (let place = 1, i = 0; Math.floor(Math.abs(max)/ place) > 0; place *= 10, i++)
    {
        // making buckets as digits thus 10 buckets 
        let buckets = Array.from({length: 10}, () => [])
        
        // checking from the least bit that which digit will be included where and so on
        for (let j = 0 ; j < dataArray.length ; j++)
        {
                buckets[getDigit(dataArray[j] , i)].push(dataArray[j])
        }
        
        dataArray = [].concat(...buckets)

        // the changed graphs after sorting iteration
        await sleep(speedFactor)
        radixChart.data.datasets[0].data = dataArray
        radixChart.config.data.labels = dataArray
        radixChart.update()
    }
    
    return dataArray
}


async function radixSort(dataArray)
{
    var negative = false;
    var negSize = 0;

    // looking for the negative array
    for(let i = 0 ; i<dataArray.length ; i++)
    {
        if(dataArray[i] < 0)
        {
            negative = true;
            negSize = negSize + 1;
        }
    }

    // will split as negative exists
    if(negative == true)
    {
        // split and call
        var resultedParts = splitArray(dataArray);
        
        var positivePart = resultedParts[0];
        var negativePart = resultedParts[1];

        var posSorted = await radixSort_N(resultedParts[0])
        var negSorted = await radixSort_N(resultedParts[1])

        negSorted = reverseArr(negSorted) //reversing negpart

        // concating both
        const sortedArray = negSorted.concat(posSorted);
    
         // the changed graphs after sorting iteration
         await sleep(speedFactor)
         radixChart.data.datasets[0].data = sortedArray
         radixChart.config.data.labels = sortedArray
         radixChart.update()

         await sleep(speedFactor)
         radixChart.data.datasets[0].data = sortedArray
         radixChart.config.data.labels = sortedArray
         radixChart.data.datasets[0].backgroundColor = '#1C9753'
         radixChart.update()

         return

    }

    // else will call simple radix
    var result = await radixSort_N(dataArray)

    await sleep(speedFactor)
    radixChart.data.datasets[0].data = result
    radixChart.config.data.labels = result
    radixChart.data.datasets[0].backgroundColor = '#1C9753'
    radixChart.update()

}
