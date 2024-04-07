import React from 'react';
import css from './BalanceConfirm.module.scss';
import { ReportsLogic } from '../Reports/ReportsLogic';

export const BalanceConfirm = () => {
  const { balance, currency } = ReportsLogic();

  return (
    <div className={css.ReportsBalanceWrapper}>
      <div className={css.ReportsBalanceWrapperTabletDesk}>
        <div className={css.DateBalanceWrapper}>
          <div className={css.BalanceConfirmWrapperDesk}>
            <div className={css.BalanceWrapper}>
              <h3>Balance:</h3>
              <p className={css.Balance}>
                <span>{balance}</span>
                <span>{currency}</span>
              </p>
            </div>
            <div className={css.ConfirmWrapper}>
              <h3>Confirm</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
