import React from 'react';
import { observer } from 'mobx-react';
// import { createAxiosInstance } from 'src/core/axiosHelper';
import NextLink from '@components/NextLink';
// import Link from 'next/link';

// :FC 관련 사용하면 좋지 않다는 말이있어서 해제
const Sample = observer(() => {
	// 위쪽에 observer를 안쓰고 return에서  이런 형태로 쓸 수 도 있음
	// return useObserver(
	//   ()=> (
	//     <>Hi</>
	//   )
	// )
	interface IExampleItem {
		/**
		 * 예시 항목의 Index입니다.
		 */
		idx: number;
		/**
		 * 예시 항목의 제목입니다.
		 */
		title: string;
		/**
		 * 예시 항목에 대한 짧은 설명입니다.
		 */
		infoShort: string;
		/**
		 * 예시 항목을 볼 수 있는 페이지 주소입니다.
		 */
		link: string;
	}
	const list: IExampleItem[] = [
		{
			idx: 0,
			title: '카운터',
			infoShort: 'counter 기본 예시입니다.',
			link: '/sample/counter',
		},
		{
			idx: 1,
			title: '할 일 목록',
			infoShort: 'TODO 리스트 예시입니다.',
			link: '/sample/todo',
		},
		{
			idx: 2,
			title: 'Mock API (msw) ',
			infoShort: 'MSW Library 예시입니다.',
			link: '/sample/msw',
		},
	];

	// axiosHelper 사용 예제
	// useEffect(() => {
	// 	const axiosInstace = createAxiosInstance('http://localhost:3000');
	// 	axiosInstace.get('/api/hello', {}).then((res) => {
	// 		console.log(res);
	// 	});
	// }, []);

	return (
		<>
			<div className="samplePage">
				{/* 인덱스 페이지 설명 */}
				<div className="form">
					<span className="pr-3"> 🎉 </span>
					<span className="info-block">[Runigen] Nextjs + Mobx 템플릿의 예시 페이지들이 아래 나열됩니다.</span>
				</div>

				{/* 이동가능한 예시 페이지 목록 */}
				{list.map((item) => {
					return (
						<div key={item.idx} className="sample_item">
							<NextLink href={item.link}>
								<div className="form">
									{/* 주 내용이 담기는 넓은 레이아웃 */}
									<div className="w-9/12">
										<span className="title">{item.title}</span>
										<span className="info-short">&nbsp;-&nbsp;{item.infoShort}</span>
									</div>
									{/* 주소용 좁은 레이아웃 */}
									<div className="w-3/12 text-right">
										<span className="info-link">{item.link}</span>
									</div>
								</div>
							</NextLink>
						</div>
					);
				})}
			</div>

			{/* <NextLink
				href="/choksasdfasdf"
				onClick={() => {
					console.log('test clickFunction');
				}}
			>
				<p>NextLink test</p>
			</NextLink>

			<Link href="/choks">
				<div>sdasd</div>
			</Link> */}
		</>
	);
});

// 위쪽에 observer를 감싸는게 편할지, 아래에 감싸는게 편할진 뭐가 보기좋은지는 잘 모르겠음..흠
// export default observer(Choks);
export default Sample;
