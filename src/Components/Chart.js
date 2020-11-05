import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = () => {

    const state = {
        labels: ['', '', '', '', ''],
        datasets: [
            {
                label: '',
                fill: true,
                lineTension: 0.5,
                backgroundColor: 'linear-gradient(180deg, rgba(2, 148, 255, 0.126274) 33.13%, rgba(255, 255, 255, 0.0001) 117.06%)',
                borderWidth: 2,
                borderColor: '#0294FF',
                data: [3, 2, 4, 3, 6]
            }
        ]
    }

    return (
        <div>
            <Line
                data={state}
                options={{
                    title:{
                        display:true,
                        text: '',
                        fontSize:10
                    },
                    legend:{
                        display:true,
                        position:'right'
                    }
                }}
            />
        </div>
    );
}

export default Chart

