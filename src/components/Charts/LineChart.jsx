import React, { useEffect, useState } from 'react';
import data_json from '../../../data.json'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,

} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,

);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};

function GetRandomNumber() {
    return Math.trunc(Math.random() * 1000)
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [

        {
            data: labels.map(() => GetRandomNumber()),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

export default function LineChart() {
    const [dataChart, setDataChart] = useState([]);
    function timeConverter(UNIX_timestamp) {
        var a = new Date(UNIX_timestamp);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
        return time;
    }

    useEffect(() => {
        let labels = [];
        let values = []

        data_json.batchList[0].rates.forEach((el, index) => {
            labels.push(timeConverter(data_json.batchList[0].startTime + index * data_json.batchList[0].interval));
            values.push(el);
        });


        setDataChart({
            labels,
            datasets: [

                {
                    data: values,
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                },
            ]
        })
    }, [])
    return (
        <>
            {
                dataChart?.labels?.length && <Line options={options} data={dataChart} />
            }
        </>
    );
}
