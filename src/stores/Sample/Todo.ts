// import { ITodoData } from '@interfaces/TodoData';
import { observable } from 'mobx';

export interface ITodo {
	todoList: ITodoData[];
	currentId: number;
	addTodo: (content: string) => void;
	removeTodo: (id: number) => void;
	pending: ITodoData[];
	completed: ITodoData[];
	completedPercentage: any;
}

export interface ITodoData {
	id: number;
	title: string;
	done: boolean;
}

const Todo = observable<ITodo>({
	todoList: [],
	currentId: 0,
	addTodo(content) {
		this.todoList.push({ id: this.currentId, title: content, done: false });
		this.currentId++;
	},
	removeTodo(id) {
		const index = this.todoList.findIndex((v) => v.id === id);
		if (id !== -1) {
			this.todoList.splice(index, 1);
		}
	},
	get pending() {
		return this.todoList.filter((item) => !item.done);
	},
	get completed() {
		return this.todoList.filter((item) => item.done);
	},
	get completedPercentage() {
		const percent = Math.floor(this.completed.length / this.todoList.length);
		return percent ? percent : 0 + '%';
	},
});

export default Todo;
