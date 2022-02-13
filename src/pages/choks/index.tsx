import React, { useEffect } from 'react';
import useStore from '@stores/index';
import { observer } from 'mobx-react';
import { autorun } from 'mobx';
import TodoItem from '@components/TodoItem';
import TodoForm from '@components/TodoForm';
import { createAxiosInstance } from 'src/core/axiosHelper';

// :FC 관련 사용하면 좋지 않다는 말이있어서 해제
const Choks = observer(() => {
	const { Count, Double, Todo } = useStore();

	// 위쪽에 observer를 안쓰고 return에서  이런 형태로 쓸 수 도 있음
	// return useObserver(
	//   ()=> (
	//     <>Hi</>
	//   )
	// )

	useEffect(() => {
		const axiosInstace = createAxiosInstance('http://localhost:3000');
		axiosInstace.get('/api/hello', {}).then((res) => {
			console.log(res);
		});
	}, []);

	autorun(() => {
		// if( Double.double ){
		//   console.log(`Double : ${Double.double}  `);
		// }
		if (Double.getDouble === 8) {
			console.log(`만약 value가 8이라면 0으로 초기화`);
			Double.value = 0;
		}
	});

	return (
		<>
			<>
				<div>
					<div>
						<h1>Count (Class)</h1>
						<div>number: {Count.num}</div>
						<button onClick={() => Count.increase()}>plus</button>
						<button onClick={() => Count.decrease()}>minus</button>
					</div>
				</div>

				<div>
					<h1>Computed</h1>
					<div>double number: {Double.value}</div>
					<button onClick={() => Double.increment()}>double increment</button>
				</div>

				<p>TODO</p>
				<TodoForm />
				{Todo.todoData.map((v) => {
					return <TodoItem data={v} key={`todoData_${v.id}`} />;
				})}
			</>
		</>
	);
});

// 위쪽에 observer를 감싸는게 편할지, 아래에 감싸는게 편할진 뭐가 보기좋은지는 잘 모르겠음..흠
// export default observer(Choks);
export default Choks;
