import styled from '@emotion/styled';

export const Header = styled('section')`
  padding: 10px 0;
  height: 80px;
`;

export const Columns = styled('section')`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 0 5px;
`;

export const ColumnName = styled('article')`
  color: #8b9396;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
`;

export const Management = styled('section')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 10px;
`;

export const CalendarDate = styled('h2')`
  font-size: 20px;
`;

export const Button = styled('button')`
  height: 30px;
  width: 30px;
  line-height: 28px;
  border: none;
  background-color: #e3e4e6;
  border-radius: 6px;
  border-bottom: 2px solid #fd8701;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #dddee0;
  }
`;

export const Pagination = styled('div')`
  display: flex;
  gap: 10px;
`;
