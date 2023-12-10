import React, { useEffect, useState } from 'react';
import { getDaysOfCalendarSlide, monthsOfTheYear } from '../../utils/date';
import { Task } from '../../types/Task';
import { CurrentDate } from '../../types/CurrentDate';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { v4 } from 'uuid';
import { CalendarCell } from '../CalendarCell';
import styled from '@emotion/styled';
import { generateColor } from '../../utils/randomColor';
import { getPublicHolidays } from '../../api/calendar';

export const Body = styled('section')`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  height: calc(100vh - 100px);
  padding: 0 5px 5px;
`;

interface Props {
  currentDate: CurrentDate;
  countryCode: string;
}

export const CalendarMain: React.FC<Props> = ({ currentDate, countryCode }) => {
  const [tasks, setTasks] = useState<any>({});
  const [holidays, setHolidays] = useState<any>({});
  const { currentMonth, currentYear } = currentDate;
  const dates = getDaysOfCalendarSlide(currentMonth, currentYear);
  const countRows = dates.length === 35 ? 5 : 6;

  const handleCreateTask = (cellId: string) => {
    const newTask: Task = {
      id: v4(),
      colors: [generateColor()],
      text: '',
    };

    setTasks((currentTasks: any) => ({
      ...currentTasks,
      [cellId]: currentTasks[cellId]
        ? [...currentTasks[cellId], newTask]
        : [newTask],
    }));
  };

  const handleUpdateTask = (updatedTask: Task, cellId: string) => {
    setTasks((currentTasks: any) => ({
      ...currentTasks,
      [cellId]: currentTasks[cellId].map((task: Task) =>
        task.id !== updatedTask.id ? task : updatedTask,
      ),
    }));
  };

  const handleRemoveTask = (id: string, cellId: string) => {
    setTasks((currentTasks: any) => ({
      ...currentTasks,
      [cellId]: currentTasks[cellId].filter((task: Task) => task.id !== id),
    }));
  };

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = source.droppableId;
    const finish = destination.droppableId;
    const cell1: Task[] = [...tasks[start]];
    const cell2: Task[] = Array.from(tasks[finish] || []);
    const removed = cell1.splice(source.index, 1)[0];

    if (start === finish) {
      cell1.splice(destination.index, 0, removed);
      setTasks({ ...tasks, [start]: cell1 });
      return;
    }

    cell2.splice(destination.index, 0, removed);
    setTasks({ ...tasks, [start]: cell1, [finish]: cell2 });
  };

  const loadHolidays = async () => {
    try {
      const { data } = await getPublicHolidays(currentYear, countryCode);
      const holidays: any = {};

      for (const holiday of data) {
        holidays[holiday.date] = holiday;
      }

      setHolidays(holidays);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadHolidays();
  }, [currentYear, countryCode]);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Body style={{ gridTemplateRows: `repeat(${countRows}, 1fr)` }}>
        {dates.map((date, i) => {
          const isFirstOrLastDayOfMonth =
            date.getDate() === 1 || dates[i + 1]?.getDate() === 1;
          const monthName = monthsOfTheYear[date.getMonth()].slice(0, 3);

          return (
            <CalendarCell
              key={i}
              date={date}
              currentMonth={currentMonth}
              countRows={countRows}
              tasks={tasks}
              holidays={holidays}
              monthName={isFirstOrLastDayOfMonth ? monthName : ''}
              onCreateTask={handleCreateTask}
              onUpdateTask={handleUpdateTask}
              onRemoveTask={handleRemoveTask}
            />
          );
        })}
      </Body>
    </DragDropContext>
  );
};
