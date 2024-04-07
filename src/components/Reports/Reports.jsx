import React from 'react';
import { ReportsPageContainer } from './Reports.styled'
import  BalanceForm  from '../BalanceForm/BalanceForm';
import { DateComponent } from '../DateComponent/DateComponent';
import { ReportsSummary } from '../ReportsSummary/ReportsSummary';
import { ButtonToHome } from '../ButtonToHome/ButtonToHome';
// import { CategoriesListIcon } from '../CategoriesIconsList/CategoriesIconsList';
import { ReportsChart } from './ReportsChart';

export const ReportsPage = () => {
  return (
    <ReportsPageContainer>
      <ButtonToHome />
      <DateComponent />
      <BalanceForm />
      <ReportsSummary />
      {/* <CategoriesListIcon /> */}
      <ReportsChart />
    </ReportsPageContainer>
  );
};