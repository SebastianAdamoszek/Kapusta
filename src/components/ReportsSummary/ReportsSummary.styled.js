import styled from 'styled-components';

export const ReportsSummaryWrapper = styled.div`
  min-width: 280px;
  height: auto;
  border: 1px solid var(--line-bg-color);
  border-radius: 20px;
  padding: 21px 10px;
  box-shadow: 5px 10px 20px 0px var(--box-shadow-color);
  margin: 32px 0;
  background-color: var(--bg-white-color);

  @media screen and (min-width: 768px) {
    margin: 32px auto;
    width: 704px;
    padding: 17px 0px;
  }

  @media screen and (min-width: 1280px) {
    width: 1034px;
  }
`;

export const ReportsSummaryList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0 10px;

  @media screen and (min-width: 768px) {
    justify-content: center;
    gap: 20px;
  }
`;

export const ReportsSummaryListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 14px;
  font-weight: 700;
  color: var(--text-color-secondary);

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 15px;
  }
  p {
    color: var(--text-color-secondary);
  }
`;

export const ReportsSummaryExpenses = styled.p`
  span {
    color: var(--expenses-text-color);
  }
`;

export const ReportsSummaryIncome = styled.div`
  span {
    color: var(--profits-text-color);
  }
`;

export const LineVertical = styled.div`
  padding: 27px 0.5px;
  background-color: var(--line-bg-color);

  @media screen and (min-width: 768px) {
    padding: 11px 0.5px;
  }
`;
export const Currency = styled.span`
  text-transform: uppercase;
`;
