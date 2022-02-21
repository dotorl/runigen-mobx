import Modal from '@components/Sample/Modal';
import '@styles/globals.scss';
// import { Provider } from 'mobx-react';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
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
