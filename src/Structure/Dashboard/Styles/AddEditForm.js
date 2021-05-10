import styled from "styled-components"

export const Card = styled.div`
  width: 500px;
  height: 400px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: #e1f5fe;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
`;

export const TopBlock = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  background-color: white;
`;

export const Title = styled.div`
  height: 45px;
  font-size: 25px;
  padding: 5px;
  padding-top: 15px;
`

export const AddIcon = styled.button`
  font-size: 20px;
  background-color: white;
  border: 0;
  padding: 15px;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
`;

export const BottomBlock = styled.div`
  background-color: #e1f5fe;
`;

export const Cancel = styled.button`
  font-size: 20px;
  border: 0;
  background-color: #e1f5fe;
`;

export const Save = styled.button`
  font-size: 20px;
  background-color: #76ff03;
  border-radius: 5px;
  padding-left: 15px;
  padding-right: 15px;
`;