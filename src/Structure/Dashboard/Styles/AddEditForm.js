import styled from "styled-components";

export const Card = styled.div`
  width: 500px;
  height: 430px;
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
  font-size: 20px;
  padding: 5px;
  padding-top: 15px;
  display: flex;
`;

export const AddIcon = styled.button`
  font-size: 20px;
  background-color: white;
  border: 0;
  padding: 15px;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
`;

export const BottomBlock = styled.div`
  background-color: #e1f5fe;
  overflow: auto;
`;

export const Cancel = styled.button`
  font-size: 20px;
  border: 0;
  background-color: #e1f5fe;
  margin-right: 10px;
`;

export const Save = styled.button`
  font-size: 20px;
  border-radius: 5px;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Avatar = styled.img`
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;


export const CoverOver = styled.div`
  width: 500px;
  height: 370px;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 5;
  position: absolute;
  top: 110px;
`;
