import styled from 'styled-components';

export const StyledTransactionTable = styled.table`
  tbody {
    display: block;
    margin-top: 60px;
    min-width: 282px;
    max-width: 282px;
    max-height: 160px;
    min-height: 160px;
    overflow-y: scroll;
    overflow-x: hidden;
    border-top: none;

    tr {
    display: flex;    
    justify-content: flex-start;
    margin-top: 6px;
    width: 282px;
    
    &:not(:last-child) {
    border-bottom: 2px solid #f5f6fb;
      }

      td {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 20px;
        overflow-x: hidden;
        overflow: hidden;
  }
`;

export const DescriptionAndDetailsWrapper = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 8px;
  gap: 3px;
  min-width: 125px;
  max-width: 125px;
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const DateAndCategoryWrapper = styled.span`
  display: flex;
  padding: 0;
  height: 15px;
  gap: 20px;
  min-width: 141px;
  max-width: 141px;
  font-size: 8px;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const AmoutWrapper = styled.span`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-width: 120px;
  max-width: 120px;
  font-weight: 700;
`;

export const DeleteWrapper = styled.span`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-left: 20px;
  padding-right: 1.65px;
`;
