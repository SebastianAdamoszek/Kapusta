import { HelmetProvider, Helmet } from 'react-helmet-async';
import { ReportsPage } from '../../components/Reports/Reports';
// import { BalanceForm } from '../../components/BalanceForm/BalanceForm';

const Reports = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Reports</title>
      </Helmet>
      <ReportsPage />
      {/* <BalanceForm /> */}
    </HelmetProvider>
  );
};
export default Reports;
