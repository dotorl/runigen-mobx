// import style from '@layouts/AppLayout/style.scss';

const AppLayout = ({ children }: { children: JSX.Element }) => {
	return (
		<>
			{/* 
      <App maxWidth="false">
        <BodyBox>
          <Sidebar></Sidebar>
          <Content>{ children }</Content>
        </BodyBox>
      </App> */}

			<div className="pageLayout">{children}</div>
		</>
	);
};

export default AppLayout;
