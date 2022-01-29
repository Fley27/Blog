import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import HeaderCard from '../cards/header';
import styles from "../../styles/bar-chart.module.css";

export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
    },
};


const labels = ["Tecnologie", "Lifestyle", "Mode", "Sexo", "Job Et Etudes", "Société", "Autres"];


export const data =  {
        labels,
        datasets: [
            {
                label: '',
                data: [1067,1077,1117,1337,2217,2455,2478],
                borderColor: 'rgb(12, 124, 213)',
                yAxisID: 'y1',
                fill: false
            },
        ],
};

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
const App = ({period, title}) => {
    return (
        <div className = {styles.container}>
            <HeaderCard 
                period = {period}
                title = {title}
            />
            <div className = {styles.wrapper}>
                <Line options={options} data={data} />
            </div>
        </div>
    )
}


export default App;