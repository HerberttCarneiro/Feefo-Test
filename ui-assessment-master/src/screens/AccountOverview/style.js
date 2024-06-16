import styled from "styled-components";

export const Container = styled.div`
  margin: auto 50px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 600px) {
    display: inline;
  }
`;

export const Title = styled.div`
  color: #5e5e5e;
  flex: 0.5;
  font-weight: bold;
  font-size: 28px;
  text-wrap: nowrap;
  text-align: left;
`;
