import React from 'react';
import { ReportsLogic } from '../Reports/ReportsLogic';
import css from './CategoriesIconsList.module.scss';
import ArrowL from '../../icons/arrow-l.svg';
import ArrowR from '../../icons/arrow-r.svg';
import { Link, useLocation } from 'react-router-dom';

export const CategoriesListIcon = () => {
  const { categories } = ReportsLogic();
   const location = useLocation();
   const redirectTo = location.state?.from ?? '/income';

  return (
    <div className={css.ExpensesWrapper}>
      <Link to={redirectTo} className={css.LinkIncome}>
        <img src={ArrowL} alt="arrow" />
        <h2 className={css.Title}>Expenses</h2>
        <img src={ArrowR} alt="arrow" />
      </Link>
      <div className={css.Categories}>
        <ul className={css.CategoriesList}>
          {categories.map(
            (category, index) =>
              category.value !== 0 && (
                <li key={index} className={css.CategoriesListItem}>
                  <p>{category.value}</p>
                  <category.icon className={css.CategoriesListIcon} />
                  <p>{category.name}</p>
                </li>
              )
          )}
          <li className={css.LineBottom}></li>
        </ul>
      </div>
    </div>
  );
};
