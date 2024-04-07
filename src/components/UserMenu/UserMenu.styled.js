import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
`;
export const UserArea = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;
export const Avatar = styled.span`
  padding: 9px 12px;
  font-size: 12px;
  font-weight: 700;
  margin-right: 12px;
  color: var(--btn-grey-text-color);
  letter-spacing: 0.04em;
  text-align: center;
  background-color: var(--bg-avatar-color);
  border-radius: 50px;
`;
export const Name = styled.span`
  padding: 9px 20px 9px 0px;
  color: var(--secondaryTextColor);
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.04em;
`;
export const LogoutButton = styled.button`
  font-size: 12px;
  font-weight: 400;
  color: rvar(--btn-grey-text-color);
  letter-spacing: 0.04em;
  border: none;
  background: none;
  text-decoration: underline;
  cursor: pointer;
  border-left: 1px solid var(--bg-stripe-color);
  padding: 11px 20px;
`;
export const LogoutIcon = styled.svg`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
`;
