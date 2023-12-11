/* eslint-disable no-unused-vars */
import React, { useMemo } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { TaskItem } from '../TaskItem';
import { generateDayId } from '../../utils/date';
import { Task } from '../../types/Task';
import {
  Box,
  Button,
  Cell,
  Text,
  TasksBox,
  HolidayName,
  HolidayBox,
} from './Emotion';
import { AddIcon } from '../../icons/AddIcon';

interface Props {
  date: Date;
  currentMonth: number;
  countRows: number;
  monthName: string;
  tasks: Task[];
  holidays: any;
  searchParam: string;
  colorParam: string;
  onCreateTask: (cellId: string) => void;
  onUpdateTask: (task: Task, cellId: string) => void;
  onRemoveTask: (id: string, cellId: string) => void;
}

export const CalendarCell: React.FC<Props> = React.memo(
  ({
    date,
    currentMonth,
    countRows,
    monthName,
    tasks,
    holidays,
    searchParam,
    colorParam,
    onCreateTask,
    onUpdateTask,
    onRemoveTask,
  }: Props) => {
    const day = date.getDate();
    const month = date.getMonth();
    const cellId = generateDayId(date);

    const filteredTasks = useMemo(
      () =>
        tasks.filter(
          ({ text, colors }) =>
            (text.toLowerCase().includes(searchParam.toLowerCase()) &&
              colorParam === '') ||
            colors.includes(colorParam),
        ),
      [searchParam, colorParam, tasks],
    );

    return (
      <Cell
        style={{
          opacity: month === currentMonth ? 1 : 0.4,
          height: `calc((100vh - (100px + 5px + 20px)) / ${countRows})`,
        }}
      >
        <Box>
          <Text>{`${monthName} ${day}`}</Text>
          <Button onClick={() => onCreateTask(cellId)}>
            <AddIcon />
          </Button>
        </Box>

        <Droppable droppableId={cellId}>
          {(provided) => (
            <TasksBox ref={provided.innerRef} {...provided.droppableProps}>
              {holidays[cellId] && (
                <HolidayBox>
                  <HolidayName>{holidays[cellId].name}</HolidayName>
                </HolidayBox>
              )}
              {filteredTasks.map((task: Task, index: number) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  index={index}
                  onUpdateTask={(task) => onUpdateTask(task, cellId)}
                  onRemoveTask={(id) => onRemoveTask(id, cellId)}
                />
              ))}
              {provided.placeholder}
            </TasksBox>
          )}
        </Droppable>
      </Cell>
    );
  },
);

CalendarCell.displayName = 'CalendarCell';
