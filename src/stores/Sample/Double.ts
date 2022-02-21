import { observable } from 'mobx';

interface IDouble {
	value: number;
	increment: () => void;
	getDouble: number;
	// getDouble: () => number;  // getter는 실제로 함수형태로 호출되지않으므로 이렇게 선언하면 안되는듯
}

const Double = observable<IDouble>({
	value: 1,
	increment() {
		this.value++;
	},
	get getDouble() {
		return this.value * 2;
	},
});

export default Double;
