import Count from '@stores/Count';
import Double from '@stores/Double';
import Todo from '@stores/Todo';

const store = { Count, Double, Todo };

function useStore() {
	return store;
}

export default useStore;
