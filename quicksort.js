// the array that will be use of the size
let Arr3 = []



const labels3 = Arr3
const data2 = {
  labels: labels3,
  datasets: [{
    label: 'Quick Sort ',
    backgroundColor: '#a14084',
    borderColor: '#A13034',
    data: [],
  }]
};

const config2 = 
{
  type: 'bar',
  data: data2,
  options: {}
};


const myChart3 = new Chart(
  document.getElementById('quick_sort'),
  config2
);


async function QuickSort2(Arr3, left, right) 
{

  var index;
  if (Arr3.length > 1) 
  {
    index = await partition(Arr3, left, right); //index returned from partition
    if (left < index - 1) 
    {
      await QuickSort2(Arr3, left, index - 1);
    }

    if (index < right) 
    {
      await QuickSort2(Arr3, index, right);
    }
  }

  return Arr3;
}

async function partition(Arr3, left, right) 
{
  let pivotIndex = Math.floor((right + left) / 2);
  var pivot = Arr3[pivotIndex]; //middle element
  //bars[pivotIndex].style.backgroundColor = "red";

  (i = left), //left pointer
    (j = right); //right pointer
  while (i <= j) 
  {
    while (Arr3[i] < pivot) 
    {
      i++;
    }
    while (Arr3[j] > pivot) 
    {
      j--;
    }

    if (i <= j) 
    {
      await swap2(Arr3, i, j); 
      i++;
      j--;
    }
  }
  return i;
}

async function swap2(Arr3, i, j) 
{
  let temp = Arr3[i];
  Arr3[i] = Arr3[j];
  Arr3[j] = temp;

  await sleep(speedFactor)
  myChart3.data.datasets[0].data = Arr3
  myChart3.config.data.labels = Arr3
  myChart3.update()

  return Arr3;
}
  
async function QuickSort(Arr3, left, right)
{
  var result = await QuickSort2(Arr3, left, right)

  myChart3.data.datasets[0].data = result
  myChart3.config.data.labels = result
  myChart3.data.datasets[0].backgroundColor = '#1C9753'
  myChart3.update()
}