const DefaultLayout = ({ children }: { children: JSX.Element }) => {
	return (
		<>
			{/*
      <App maxWidth="false">
        <BodyBox>
          <Sidebar></Sidebar>
          <Content>{ children }</Content>
        </BodyBox>
      </App>
      */}
			{children}
		</>
	);
};

export default DefaultLayout;
