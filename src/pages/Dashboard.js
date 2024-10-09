import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faUsers, faChartLine, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import RevenueSalesChart from '../components/chart/RevenueSalesChart';
import WeeklyChart from '../components/chart/WeeklyChart';

const Dashboard = () => {
  const items = [
    {
      icon: faEye,
      title: '$3.456K',
      subtitle: 'Total views',
      change: '0.43%',
    },
    {
      icon: faUsers,
      title: '1,234',
      subtitle: 'Total users',
      change: '1.2%',
    },
    {
      icon: faChartLine,
      title: '75%',
      subtitle: 'Growth rate',
      change: '3.5%',
    },
    {
      icon: faCommentDots,
      title: '512',
      subtitle: 'New messages',
      change: '0.5%',
    },
  ];

  return (
    <div className='dark:text-white'>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 mt-5">
        {items.map((item, index) => (
          <div key={index} className="rounded-sm border border-stroke bg-white dark:dark:bg-gray-800 p-5 shadow-md dark:border-strokedark dark:bg-boxdark">
            <div className="flex h-11.5 w-11.5 items-left justify-left rounded-full bg-meta-2 dark:bg-meta-4 text-primary-900 dark:text-white">
              <FontAwesomeIcon icon={item.icon} className="fill-primary dark:fill-white" size="lg" />
            </div>
            <div className="mt-4 flex items-end justify-between">
              <div>
                <h4 className="text-gray-900  font-bold text-black dark:text-white">{item.title}</h4>
                <span className="text-sm font-medium text-gray-500 ">{item.subtitle}</span>
              </div>
              <span className="flex items-center gap-1 text-sm font-medium text-sucess-500">
                {item.change}
                <FontAwesomeIcon icon={faChartLine} className="fill-meta-3" size="sm" />
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
  {/* Chart Container */}
  <div className="col-span-12 rounded-sm border border-stroke bg-white dark:dark:bg-gray-800 px-5 pt-7.5 pb-5 shadow-md dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
    <RevenueSalesChart />
  </div>
  <div className="col-span-12 rounded-sm border border-stroke bg-white dark:dark:bg-gray-800 p-7.5 shadow-md  dark:border-strokedark dark:bg-boxdark xl:col-span-4">
    <WeeklyChart />
  </div>

</div>

    </div>
  );
};

export default Dashboard;
