import { observable } from 'mobx';

interface ICount {
	num: number;
	increase: () => void;
	decrease: () => void;
}

const Count = observable<ICount>({
	num: 0,
	increase() {
		this.num++;
	},
	decrease() {
		this.num--;
	},
});

export default Count;
