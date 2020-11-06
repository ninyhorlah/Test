import React from 'react'
import { Line } from 'react-chartjs-2';

const Bigchart = () => {

    const state = {
        labels: ['', '', '', '', ''],
        datasets: [
            {
               lineTension: 0.2,
                borderWidth: 1,
                borderColor: '#0294FF',
                data: [27, 26, 28, 27, 30]
            }
        ]
    }

    return (
        <div>
            
        </div>
    )
}

export default Bigchart
