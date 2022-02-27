import React from 'react';
import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

//! _app.tsx 에서 설정값 주석여부 확인하고 사용해야함.
//! page/index.tsx 등의 바로 하는경우 API호출 시 ServiceWorker가 실행되고나서 API를 호출해야하므로 Settimeout 처리해야함
const index = () => {
	const [username, setUsername] = useState('');
	const [userData, setUserData] = useState<any>(null);

	useEffect(() => {
		// Service Worker가 실행되기 전에 API가 호출되면 에러 발생해서 강제로 setTimeout 실행함
		// setTimeout(() => {
		testMockAPI();
		// }, 1000);
	}, []);

	const testMockAPI = async () => {
		const hellowAPI = await axios.get('/api/hello');
		console.log(hellowAPI);

		const mockAPI = await axios.get('/fruits');
		console.log(mockAPI);
	};

	const handleFormSubmit = useCallback(
		async (event) => {
			// Prevent the default behavior, as we don't want
			// for our page to reload upon submit.
			event.preventDefault();
			const mockAPI2 = await axios.post('/login', {
				username: username ? 'test' : username,
			});
			console.log(mockAPI2);
			setUserData(mockAPI2.data);
		},
		[username],
	);

	const handleUsernameChange = useCallback((event) => {
		console.log(event.target.value);
		setUsername(event.target.value);
	}, []);

	return (
		<>
			{userData ? (
				<div>
					<h1>
						<span data-testid="firstName">{userData.firstName}</span> <span data-testid="lastName">{userData.lastName}</span>
					</h1>
					<p data-testid="userId">{userData.id}</p>
				</div>
			) : (
				<form onSubmit={handleFormSubmit}>
					<div>
						<label htmlFor="username">Username:</label>
						<input id="username" name="username" value={username} onChange={handleUsernameChange} />
						<button type="submit">Submit</button>
					</div>
				</form>
			)}
		</>
	);
};

export default index;
