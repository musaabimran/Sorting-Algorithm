// the array that will be use of the size
let inputArr_c = []



const labels_c = inputArr_c
const data_c = {
    labels: labels_c,
    datasets: [{
        label: 'Count Sort',
        backgroundColor: '#a14084',
        borderColor: '#A13034',
        data: [],
    }]
};

const config_c = {
    type: 'bar',
    data: data_c,
    options: {}
};

const myChart_c = new Chart(
    document.getElementById('count_sort'),
    config_c
);

async function countingSort(inputArr_c) 
{
    var max = Math.max.apply(Math, inputArr_c);
    var min = Math.min.apply(Math, inputArr_c);

    let j = 0;
    let supplementary = [];
    
    for (let i = min; i <= max; i++) {
        supplementary[i] = 0;
    }
    
    for (let i=0; i < inputArr_c.length; i++) {
        supplementary[inputArr_c[i]] += 1;
    }
       
    for (let i = min; i <= max; i++) {
        while (supplementary[i] > 0) 
        {
            inputArr_c[j++] = i;
            supplementary[i] -= 1;
            
            await sleep(speedFactor)
            myChart_c.data.datasets[0].data = inputArr_c
            myChart_c.config.data.labels = inputArr_c
            await myChart_c.update()
          
        }
        
    }

    // printing sorted
    await sleep(speedFactor)
    myChart_c.data.datasets[0].data = inputArr_c
    myChart_c.config.data.labels = inputArr_c
    myChart_c.data.datasets[0].backgroundColor = '#1C9753'
    await myChart_c.update()

    return inputArr_c;
}

