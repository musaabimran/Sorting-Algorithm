// the array that will be use of the size
let inputArr1 = []



  const labels1 = inputArr1
const data = {
  labels: labels1,
  datasets: [{
    label: 'Insertion Sort',
    backgroundColor: '#a14084',
    borderColor: '#A13034',
    data: [],
  }]
};


const config = 
{
  type: 'bar',
  data: data,
  options: {}
};


const myChart1 = new Chart(
  document.getElementById('insertion_sort'),
  config
);


//write insertion sort function
async function InsertionSort(inputArr1) 
{

  for (let i = 1; i < inputArr1.length; i++) 
  {
    let key = inputArr1[i];
    let j;

    for( j=i-1; j >= 0 && inputArr1[j] > key; j--)
    {
      inputArr1[j + 1] = inputArr1[j];
      await sleep(speedFactor)
      myChart1.data.datasets[0].data = inputArr1
      myChart1.config.data.labels = inputArr1
      myChart1.update()
    }

    inputArr1[j + 1] = key;
    
  }

  await sleep(speedFactor)
  myChart1.data.datasets[0].data = inputArr1
  myChart1.config.data.labels = inputArr1
  myChart1.data.datasets[0].backgroundColor = '#1C9753'
  myChart1.update()
 
  return inputArr1;
}
  
  