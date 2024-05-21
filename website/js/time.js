// just to check i'm entering the correct folder
console.log("I'm in the time.js file :)");

function whenDocumentLoaded(action) {
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", action);
	} else {
		// `DOMContentLoaded` already fired
		action();
	}
}

const labels = [1900, 1910, 1940, 1950];
const values1 = [1,2,4,5];
const values2 = [3,5,3,7];

function drawTimeChart(dataset) {
    console.log('drawTimeChart')
    let ctx = document.getElementById('timeChart'); 
    
    //let's make the data usable
    //let = datasets [];
    
    let col = Object.keys(dataset[0]);
    let d = { 'year' : [], 'col1':[], 'col2':[], 'col2':[], 'col3':[], 'col4':[]}
    dataset.forEach((row) => {
        d['year'].push(row[col[0]])
        d['col1'].push(row[col[1]])
        d['col2'].push(row[col[2]])
        d['col3'].push(row[col[3]])
        d['col4'].push(row[col[4]])
    });
    console.log('just before chart')
    new Chart(ctx, {
        type: "line",
        data: {
            labels : d.year,
            datasets : [{
                data : d.col1,
                label : col[1],
                yAxisID : 'y1',
            },{
                data : d.col2,
                label : col[2],
                yAxisID : 'y2',
            },{
                data : d.col3,
                label : col[3],
                yAxisID : 'y3',
            },{
                data : d.col4,
                label : col[4],
                yAxisID : 'y4',
            }]
        },
        options: {
            layout: {
                padding: 20
            },
            scales : {
                yAxes: [{
                    id: 'y1',
                    type:'linear',
                    position:'left',
                },{
                    id: 'y2',
                    type:'linear',
                    position:'left',
                },{
                    id: 'y3',
                    type:'linear',
                    position:'right',
                },{
                    id: 'y4',
                    type:'linear',
                    position:'right',
                }]
            }
        }
      });
}

whenDocumentLoaded(() => {
    console.log('loaded hey')

    d3.csv('data/final.csv').then((data) => {
        drawTimeChart(data)
    })
});