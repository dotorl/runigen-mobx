import Modal from '@components/Modal';
import '@styles/globals.scss';
import { Provider } from 'mobx-react';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />

      {/*  TODO: Modal -> store로 관리할수있게 모듈화 처리 하면될듯*/}
      <Modal show={false} onCloseModal={() => {}}>
        <form>
          <div>sadasd</div>
        </form>
      </Modal>
    </>
  );
}

export default MyApp;
