// the array that will be use of the size
let Arr2 = []


const labels2 = Arr2
const data1 = {
  labels: labels2,
  datasets: [{
    label: 'Heap Sort ',
    backgroundColor: '#a14084',
    borderColor: "#a14084",
    data: [],
  }]
};


const config1 = 
{
  type: 'bar',
  data: data1,
  options: {}
};

const myChart2 = new Chart(
  document.getElementById('heap_sort'),
  config1
);

async function HeapSort(Arr2 )
  {
  for (let i = Math.floor(Arr2 .length / 2); i >= 0; i--) {
    await heapify(Arr2 , Arr2 .length, i);
  }
  for (let i =Arr2 .length - 1; i >= 0; i--) {
    await swap(Arr2 , 0, i);
    
    // after swap
    await sleep(speedFactor )
    myChart2.data.datasets[0].data = Arr2
    myChart2.config.data.labels = Arr2
    myChart2.update()

    await heapify(Arr2 , i, 0);

    // after heapify
    await sleep(speedFactor )
    myChart2.data.datasets[0].data = Arr2
    myChart2.config.data.labels = Arr2
    myChart2.update()
  }

  // the green color
  await sleep(speedFactor )
  myChart2.data.datasets[0].data = Arr2
  myChart2.config.data.labels = Arr2
  myChart2.data.datasets[0].backgroundColor = '#1C9753'
  myChart2.update()
   
  return Arr2 ;
}

async function heapify(Arr2 , n, i) 
{
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  if (left < n && Arr2 [left] > Arr2 [largest]) 
  {
    largest = left;
  }
  if (right < n && Arr2 [right] > Arr2 [largest]) 
  {
    largest = right;
  }
  if (largest != i) 
  {
    await swap(Arr2 , i, largest);
    await heapify(Arr2 , n, largest);
  }
}

async function swap(Arr2, i, j) 
{
  let temp = Arr2[i];
  Arr2[i] = Arr2[j];
  Arr2[j] = temp;

  return Arr2;
}  
  