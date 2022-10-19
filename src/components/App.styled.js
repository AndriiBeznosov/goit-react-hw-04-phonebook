import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 500px;
  background-color: ${p => p.theme.colors.backgroundColorsPrimary};
  padding: 30px 20px;
  margin: 0 auto;
`;

export const Container = styled.div`
  margin-top: 12px;
  box-shadow: 0px 0px 19px 0px rgba(69, 162, 158, 1);
  padding: 10px;
  border-radius: 10px;
`;
