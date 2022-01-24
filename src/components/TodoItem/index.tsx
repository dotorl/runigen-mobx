
import React from 'react';


import { TodoData } from '@interfaces/TodoData';
import useStore from '@stores/index';

interface Props {
  data: TodoData;
}

const TodoItem = ({ data }: Props) => {
  const { Todo } = useStore();

  const removeItem = () => {
    Todo.removeTodo(data.id);
  };

  return (
    <div>
      <input type="checkbox" />
      <span>{data.content}</span>
      <span onClick={removeItem}>❌</span>
    </div>
  );
};

export default TodoItem;