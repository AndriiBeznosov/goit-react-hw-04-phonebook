import styled from 'styled-components';

export const List = styled.ul`
  padding: 15px 30px;
  background-color: ${p => p.theme.colors.backgroundColors};
  border-radius: 10px;
`;

export const Item = styled.li`
  color: ${p => p.theme.colors.colorText};
  font-weight: 700;
  font-style: italic;
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const Span = styled.span`
  font-weight: 500;
`;

export const Button = styled.button`
  color: ${p => p.theme.colors.btnСolorText};
  background-color: ${p => p.theme.colors.colorElement};
  border-radius: 5px;
  padding: 2px 10px;
  border: 0;
  transition: box-shadow 250ms ease, transform 250ms ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: ${p => p.theme.boxShadow};
  }
`;
