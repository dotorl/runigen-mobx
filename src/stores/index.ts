import Count from '@stores/Sample/Count';
import Double from '@stores/Sample/Double';
import Todo from '@stores/Sample/Todo';

const store = { Count, Double, Todo };

const useStore = () => {
	return store;
};

export default useStore;
