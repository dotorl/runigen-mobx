import React from 'react';
import TodoItem from '@components/Sample/TodoItem';
import TodoForm from '@components/Sample/TodoForm';
import useStore from '@stores/index';
import { observer } from 'mobx-react';

const index = observer(() => {
	const { Todo } = useStore();

	return (
		<>
			<p>TODO</p>
			<TodoForm />
			{Todo.todoList.map((v) => {
				return <TodoItem data={v} key={`todoData_${v.id}`} />;
			})}
		</>
	);
});
export default index;
