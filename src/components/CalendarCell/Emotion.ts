import styled from '@emotion/styled';

export const Cell = styled('article')`
  background-color: #e1e1e1;
  border-radius: 3px;
  padding: 5px 5px 0;
`;

export const TasksBox = styled('div')`
  overflow-y: auto;
  height: calc(100% - 28px);

  &::-webkit-scrollbar {
    width: 0;
  }
`;

export const Text = styled('p')`
  font-weight: 500;
  margin-bottom: 5px;
`;

export const Box = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

export const Button = styled('button')`
  border: none;
  padding: 3px 5px;
  border-radius: 25px;
  color: #8b9396;
  background-color: inherit;
  transition: background-color 400ms;

  &:hover {
    background-color: rgba(10, 10, 10, 0.1);
  }
`;

export const HolidayBox = styled('div')`
  background-color: #fff;
  border-radius: 3px;
  padding: 5px;
  margin-bottom: 5px;
`;

export const HolidayName = styled('p')`
  font-size: 15px;
  line-height: 15px;
  letter-spacing: 0.6px;
  padding: 3px 0 5px;
`;

export const Marker = styled('div')`
  margin: 2px 0;
  width: 30px;
  height: 6px;
  background-color: #f00;
  border-radius: 6px;
`;
