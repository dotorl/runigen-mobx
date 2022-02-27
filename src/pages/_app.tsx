import Modal from '@components/Sample/Modal';
import { isServer } from '@consts/index';
import '@styles/globals.scss';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	// MSW : MOCK API 사용할 경우
	// 노드 환경에선 server, 브라우저 환경에선 worker를 사용한다.
	if (isServer) {
		(async () => {
			const { server } = await import('@mocks/server');
			server.listen();
		})();
	} else {
		(async () => {
			const { worker } = await import('@mocks/browser');
			worker.start();
		})();
	}

	// 환경변수 확인
	console.log(process.env.NEXT_PUBLIC_API_URL);
	return (
		<>
			<Component {...pageProps} />

			{/*  TODO: Modal -> store로 관리할수있게 모듈화 처리 하면될듯*/}
			<Modal
				show={false}
				onCloseModal={() => {
					console.log('');
				}}
			>
				<form>
					<div>sadasd</div>
				</form>
			</Modal>
		</>
	);
}

export default MyApp;
