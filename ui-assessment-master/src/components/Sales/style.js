import styled from "styled-components";

export const Content = styled.div`
  background-color: #fff;
  /* margin: auto 50px; */
  text-align: left;
  border-radius: 2px;
`;

export const Title = styled.div`
  padding: 10px;
  display: flex;
  font-weight: bold;
  span {
    margin-left: 10px;
  }
`;

export const Info = styled.div`
  padding: 10px;
  font-size: 12px;
  strong {
    font-weight: bold;
    font-family: "Arial", sans-serif;
  }
`;

export const Data = styled.div`
  border-top: 1px solid #d3d1d1;
  font-size: 12px;
  display: flex;

  strong {
    font-weight: bold;
    font-family: "Arial", sans-serif;
  }

  div {
    display: flex;
    flex: 1;
  }

  div:last-child {
    border-left: 1px solid #d3d1d1;
  }
`;
