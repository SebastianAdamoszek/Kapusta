import { useState, useEffect } from 'react';
import { categoriesData } from './CategoriesData';

export const ReportsLogic = () => {
  const [categories, setCategories] = useState([]);
  const [balance] = useState(50000);
  const [currency] = useState(' usd');

  useEffect(() => {
   

    categoriesData.forEach(category => {
      const categoryValue = category.items.reduce(
        (total, item) => total + item.value,
        0
      );
      category.value = categoryValue;
    });

    setCategories(categoriesData);
  }, []);

  const totalValue = categories.reduce(
    (acc, category) => acc + category.value,
    0
  );

  const calculateIncome = () => {
    const income = balance - totalValue;
    return income;
  };

  const income = calculateIncome();

  return {
    categories,
    balance,
    totalValue,
    income,
    currency,
  };
};
