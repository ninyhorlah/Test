import React from 'react';
import { Line } from 'react-chartjs-2';


const Chart = () => {
    
    
    const state = {
        labels: ['', '', '', '', ''],
        datasets: [
            {
                
                // fill: true,
                
                lineTension: 0.2,
                backgroundColor: '',
                borderWidth: 1,
                borderColor: '#0294FF',
                data: [27, 26, 28, 27, 30]
            }
        ]
    }

    return (
        <div className='chartJs'>
            <Line
                data={state}
                height='80px'
                width='70px'
                options={{
                    maintainAspectRatio: false,
                    elements: {
                        line: {
                            tension: 0
                        }
                    },
                    fillColor: 'linear-gradient(180deg, rgba(2, 148, 255, 0.126274) 33.13%, rgba(255, 255, 255, 0.0001) 117.06%)',
                    scales: {
                        xAxes: [{
                            gridLines: {
                                display:false
                            }
                        }],
                        yAxes: [{
                            display: false,
                            gridLines: {
                                display:false
                            }   
                        }]
                    },
                    legend:{
                        display:false,
                    }
                }}
            />
        </div>
    );
}

export default Chart

