/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Task } from '../../types/Task';
import { TaskInput } from '../TaskInput';
import {
  AddColorButton,
  ColorInput,
  ColorsBox,
  TaskBox,
  TaskText,
} from './Emotion';
import { generateColor } from '../../utils/randomColor';
import { debounce } from 'lodash';

interface Props {
  task: Task;
  index: number;
  onUpdateTask: (task: Task) => void;
  onRemoveTask: (id: string) => void;
}

export const TaskItem: React.FC<Props> = React.memo(
  ({ task, index, onUpdateTask, onRemoveTask }: Props) => {
    const [isUpdating, setIsUpdating] = useState(!task.text);

    const updateText = (text: string) => {
      onUpdateTask({ id: task.id, text, colors: task.colors });
    };

    const blure = (text: string) => {
      if (!text) {
        onRemoveTask(task.id);
      }

      setIsUpdating(false);
    };

    const updateColors = (color: string, index: number) => {
      const colors = [...task.colors];
      colors[index] = color;

      debouncedUpdateColors({ id: task.id, text: task.text, colors });
    };

    const debouncedUpdateColors = debounce((newColor) => {
      onUpdateTask(newColor);
    }, 1000);

    const addColor = () => {
      onUpdateTask({
        id: task.id,
        text: task.text,
        colors: [...task.colors, generateColor()],
      });
    };

    return (
      <Draggable draggableId={task.id} index={index}>
        {(provided) => (
          <TaskBox
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            onDoubleClick={() => setIsUpdating(true)}
          >
            <ColorsBox>
              {task.colors.map((color, index) => (
                <ColorInput
                  key={color}
                  type="color"
                  value={color}
                  onChange={(event) => updateColors(event.target.value, index)}
                />
              ))}

              {task.colors.length < 3 && (
                <AddColorButton type="button" onClick={addColor} />
              )}
            </ColorsBox>

            {!isUpdating ? (
              <TaskText>{task.text}</TaskText>
            ) : (
              <TaskInput
                text={task.text}
                onChange={(event) => updateText(event.target.value)}
                onBlur={blure}
              />
            )}
          </TaskBox>
        )}
      </Draggable>
    );
  },
);

TaskItem.displayName = 'TaskItem';
