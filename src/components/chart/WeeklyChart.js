import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const WeeklyChart = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : false;
  });
  const series = [
    {
      name: 'Sales', // Name of the series
      data: [200, 300, 250, 400, 350, 450, 500], // Example data for the week
    },
  ];

  // Chart options
  const options = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false, // Hide toolbar
      },
      background:isDarkMode?'': '#ffffff', // Set background color to white
    },
    plotOptions: {
      bar: {
        horizontal: false, // Vertically oriented bars
        columnWidth: '55%', // Width of the columns
        endingShape: 'rounded', // Rounded bars
      },
    },
    dataLabels: {
      enabled: false, // Disable data labels on bars
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'], // No border color
    },
    xaxis: {
      categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], // Days of the week
      labels: {
        style: {
          colors:isDarkMode?"#6b7280": '#000000', // Set x-axis label color to black
        },
      },
    },
    yaxis: {
      title: {
        text: 'Sales ($)', // Y-axis title
        style: {
          color: isDarkMode?"#6b7280": '#000000', // Set y-axis title color to black
        },
      },
      labels: {
        style: {
          colors:isDarkMode?"#6b7280": '#000000', // Set y-axis label color to black
        },
      },
    },
    fill: {
      opacity: 1, // Solid fill for bars
    },
    colors: ['#34c38f'], // Bar color
    tooltip: {
      y: {
        formatter: (val) => `$${val}`, // Tooltip value formatting
        style: {
          color: isDarkMode?"#6b7280": '#000000', // Set tooltip text color to black
        },
      },
    },
    title: {
      text: 'Weekly Sales Data',
      marginTop:'10px',
      align: 'left',
      style: {
       
        color: '#6b7280', // Set chart title color to black
      },
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 300,
          },
        },
      },
      {
        breakpoint: 768,
        options: {
          chart: {
            height: 250,
          },
        },
      },
    ],
  };

  return (
    <div>
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default WeeklyChart;
