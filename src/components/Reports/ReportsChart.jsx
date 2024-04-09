import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { categoriesData } from './CategoriesData';
import css from './ReportsChart.module.scss';
import ArrowL from '../../icons/arrow-l.svg';
import ArrowR from '../../icons/arrow-r.svg';

export const ReportsChart = () => {
  const location = useLocation();
  const redirectTo = location.state?.from ?? '/expenses';
  const [selectedCategory, setSelectedCategory] = useState(null);

  const getDataForCategory = category => {
    const items = category.items.map(item => item.name);
    const values = category.items.map(item => item.value);
    return {
      labels: items,
      datasets: [
        {
          label: category.name,
          backgroundColor: '#ffdac0',
          borderColor: '#ff751d',
          borderWidth: 2,
          borderRadius: 10,
          data: values,
        },
      ],
    };
  };

  const handleCategoryClick = categoryName => {
    setSelectedCategory(
      categoryName === selectedCategory ? null : categoryName
    );
  };

  useEffect(() => {
    // Ustawienie opcji dla ChartJS
    ChartJS.register({
      // Dostosuj opcje ChartJS według potrzeb
    });
  }, []);

  return (
    <div className={css.CategoriesWrapper}>


      <Link to={redirectTo} className={css.LinkExpenses}>
        <img src={ArrowL} alt="arrow" />
        <h2 className={css.Title}>Expenses</h2>
        <img src={ArrowR} alt="arrow" />
      </Link>

      <div className={css.Categories}>
        <ul className={css.CategoriesList}>
          {categoriesData.map(
            (category, index) =>
              category.value !== 0 && (
                <li
                  key={index}
                  onClick={() => handleCategoryClick(category.name)}
                  className={css.CategoriesListItem}
                >
                  <p>{category.value}</p>
                  <category.icon className={css.CategoriesListIcon} />
                  <p>{category.name}</p>
                </li>
              )
          )}
          <li className={css.LineBottom}></li>
        </ul>
      </div>

      <div className={css.chartContainer}>
        {categoriesData.map((category, index) => (
          <div key={index}>
            {selectedCategory === category.name && (
              <Bar
                data={getDataForCategory(category)}
                options={{
                  // indexAxis: window.innerWidth < 768 ? 'y' : 'x',
                  scales: {
                    x: {
                      stacked: true,
                      gridLines: {
                        drawBorder: false,
                        display: false,
                      },
                      ticks: {
                        autoSkip: true,
                        maxTicksLimit: 13,
                      },
                    },
                    y: {
                      stacked: true,
                      gridLines: {
                        drawBorder: false,
                      },
                    },
                  },
                  layout: {
                    padding: {
                      left: 3,
                      right: 3,
                    },
                  },

                  legend: {
                    display: true,
                    position: 'top',
                  },
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  barThickness: window.innerWidth < 768 ? 15 : 38,
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
