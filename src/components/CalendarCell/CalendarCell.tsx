/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
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
  Marker,
} from './Emotion';

interface Props {
  date: Date;
  currentMonth: number;
  countRows: number;
  monthName: string;
  tasks: any;
  holidays: any;
  onCreateTask: (cellId: string) => void;
  onUpdateTask: (task: Task, cellId: string) => void;
  onRemoveTask: (id: string, cellId: string) => void;
}

export const CalendarCell: React.FC<Props> = ({
  date,
  currentMonth,
  countRows,
  monthName,
  tasks,
  holidays,
  onCreateTask,
  onUpdateTask,
  onRemoveTask,
}) => {
  const day = date.getDate();
  const month = date.getMonth();
  const cellId = generateDayId(date);

  return (
    <Cell
      style={{
        opacity: month === currentMonth ? 1 : 0.4,
        height: `calc((100vh - (100px + 5px + 20px)) / ${countRows})`,
      }}
      key={cellId}
    >
      <Box>
        <Text>{`${monthName} ${day}`}</Text>
        <Button onClick={() => onCreateTask(cellId)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="10px"
            height="10px"
            viewBox="0 0 30 30"
            transform="rotate(45)"
          >
            <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
          </svg>
        </Button>
      </Box>

      <Droppable droppableId={cellId}>
        {(provided) => (
          <TasksBox ref={provided.innerRef} {...provided.droppableProps}>
            {holidays[cellId] && (
              <HolidayBox>
                <Marker />

                <HolidayName>{holidays[cellId].name}</HolidayName>
              </HolidayBox>
            )}
            {tasks[cellId]?.map((task: Task, index: number) => (
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
};
