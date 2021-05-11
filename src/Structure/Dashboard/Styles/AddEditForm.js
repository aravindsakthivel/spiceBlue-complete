import styled from "styled-components";

export const Card = styled.div`
  width: 500px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #e1f5fe;
`;

export const TopBlock = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  background-color: white;
  height: 45px;
`;

export const Title = styled.div`
  height: 20px;
  font-size: 18px;
  padding: 5px;
  padding-top: 10px;
  display: flex;
`;

export const AddIcon = styled.button`
  font-size: 20px;
  background-color: white;
  border: 0;
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
`;

export const Save = styled.button`
  font-size: 20px;
  padding-left: 30px;
  padding-right: 30px;
`;

export const Avatar = styled.img`
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;


export const CoverOver = styled.div`
  width: 500px;
  height: 360px;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 5;
  position: absolute;
  top: 93px;
`;

export const Calender = styled.input`
  padding-left: 35px;
`

export const Time = styled.input`
  padding-left: 35px;
  &::before{
    content: "Time";
    margin-right: 0.6em;
    color: #9d9d9d;
  }
`;

export const TaskIcon = styled.img`
  position: absolute;
  right: 100px;
  top: -10px;
`;