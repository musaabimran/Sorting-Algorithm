// the array that will be use of the size
let Arr4 = []

const labels4 = Arr4
const data3 = {
  labels: labels4,
  datasets: [{
    label: 'Bubble Sort ',
    backgroundColor: '#a14084',
    borderColor: "#a14084",
    data: [],
  }]
};



const config3 = 
{
  type: 'bar',
  data: data3,
  options: {}
};

const myChart4 = new Chart(
  document.getElementById('bubble_sort'),
  config3
);

async function BubbleSort(Arr4) 
{
  let num = Arr4.length;

  for (let i = 0; i <num; i++) 
  {
    for (let j = 0; j < num - i - 1; j++) 
    {
      if (Arr4[j] > Arr4[j + 1]) 
      {
        let temp = Arr4[j];
        Arr4[j] = Arr4[j + 1];
        Arr4[j + 1] = temp;
      await sleep(speedFactor)
      myChart4.data.datasets[0].data = Arr4
      myChart4.config.data.labels = Arr4
      myChart4.update()
      }

    }
  }

  await sleep(speedFactor)
  myChart4.data.datasets[0].data = Arr4
  myChart4.config.data.labels = Arr4
  myChart4.data.datasets[0].backgroundColor = '#1C9753'
  myChart4.update()

  return Arr4;
}
