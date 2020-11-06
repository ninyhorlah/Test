import React from 'react'
import { Line } from 'react-chartjs-2';

const Bigchart = () => {
    
    const state = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
               lineTension: 0.2,
                borderWidth: 1,
                borderColor: '#0294FF',
                data: [57, 60, 88, 100, 120, 70]
            }
        ]
    }

    return (
        <div>
            <Line
            data={state}
            height= '200px'
            width='689px'
            options={{
                responsive: true,
                    maintainAspectRatio: false,
                    elements: {
                        line: {
                            tension: 0
                        },
                        point: {
                            radius: 0
                        }
                    },
                scales: {
                        xAxes: [{
                            position: 'top',
                            ticks: {
                                fontSize: 14,
                                fontColor: '#000',
                                fontStyle: 'bold'
                            },
                            gridLines: {
                                display:true
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
                    },
                    
            }}
            />
        </div>
    )
}

export default Bigchart
