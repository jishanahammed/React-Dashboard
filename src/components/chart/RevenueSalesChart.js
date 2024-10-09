import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const RevenueSalesChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'], // Time periods
    datasets: [
      {
        label: 'Total Revenue',
        data: [12000, 15000, 13000, 14000, 16000, 17000], // Data for revenue
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Color for Revenue
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Total Sales',
        data: [300, 400, 350, 500, 450, 550], // Data for sales
        backgroundColor: 'rgba(153, 102, 255, 0.6)', // Color for Sales
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Ensures the chart resizes based on container dimensions
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Total Revenue and Sales Chart',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="relative w-full h-64 md:h-80">
      {/* Set height to ensure responsiveness */}
      <Bar data={data} options={options} />
    </div>
  );
};

export default RevenueSalesChart;
