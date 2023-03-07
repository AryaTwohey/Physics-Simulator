const ctx = document.querySelector('#chart');
const ctxContainer = document.querySelector('#chartContainer')

const newChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['1', '2', '3', '4', '5', '6','7'],
      datasets: [{
        label: 'Position',
        data: [12, 19, 3, 5, 2, 3, 4, 7],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


function ptGraph(chart, title) {
  //This is some test data, eventually, the data will come from the user entering in some values
  chart.data.datasets[0].data = [];
  chart.data.datasets[0].label = title
  
   for(let i = 0; i < chart.data.labels.length; i++){
     chart.data.datasets[0].data[i] =  Math.random() * 20

     }

  chart.data.datasets.label = title
  
  chart.update()
 
}
function vtGraph(chart, title) {
  //This is some test data, eventually, the data will come from the user entering in some values
 
  chart.data.datasets[0].data = [];
  chart.data.datasets[0].label = title


  //chart.data.dataset.label = ""

   for(let i = 0; i < chart.data.labels.length; i++){
     chart.data.datasets[0].data[i] =  Math.random() * 20

     }

  chart.data.datasets.label = title
 
  chart.update();
}
function atGraph(chart, title){
  //This is some test data, eventually, the data will come from the user entering in some values
 
  chart.data.datasets[0].data = [];
  chart.data.datasets[0].label = title

  //chart.data.dataset.label = ""

   for(let i = 0; i < chart.data.labels.length; i++){
     chart.data.datasets[0].data[i] =  Math.random() * 20

     }

  chart.data.datasets.label = title
 
  chart.update();

}


