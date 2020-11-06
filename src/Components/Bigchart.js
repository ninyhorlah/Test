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
                data: [[57, 60, 88], [66, 50, 100], [58, 99, 44], [57, 102, 99], [60, 90, 101]]
            }
        ]
    }

    return (
        <div>
            
        </div>
    )
}

export default Bigchart
