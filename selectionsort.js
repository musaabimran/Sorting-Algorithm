  // the array that will be use of the size
let Arr5 = []

const labels5 = Arr5
const data4 = {
  labels: labels5,
  datasets: [{
    label: 'Selection Sort',
    backgroundColor: '#a14084',
    borderColor: '#A13034',
    data: [],
  }]
};

const config4 = 
{
  type: 'bar',
  data: data4,
  options: {}
};


const myChart5 = new Chart(
  document.getElementById('selection_sort'),
  config4
);



async function selectionSort(Arr5) {
  let n = Arr5.length;

  for (let i = 0; i < n; i++) {
    // Finding the smallest number in the subarray
    let min = i;
    for (let j = i + 1; j < n; j++) {

      if (Arr5[j] < Arr5[min]) {
        min = j;
      }

      await sleep(speedFactor/2)
      myChart5.data.datasets[0].data = Arr5
      myChart5.config.data.labels = Arr5
      myChart5.update()

    }

    if (min != i) {
      // Swapping the elements
      let tmp = Arr5[i];
      Arr5[i] = Arr5[min];
      Arr5[min] = tmp;
    }

    await sleep(speedFactor)
    myChart5.data.datasets[0].data = Arr5
    myChart5.config.data.labels = Arr5
    myChart5.update()
  }

  
  await sleep(speedFactor)
  myChart5.data.datasets[0].data = Arr5
  myChart5.config.data.labels = Arr5
  myChart5.data.datasets[0].backgroundColor = '#1C9753'
  myChart5.update()

  return Arr5;
}

  