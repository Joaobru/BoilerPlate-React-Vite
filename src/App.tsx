import React from 'react';
import { useUserData } from '@src/stores/useUserData';

function App() {
	const { name, age } = useUserData();

	return (
		<div className="App">
			<h1>Hello World</h1>
			<h2>{name}</h2>
			<h3>{age}</h3>
		</div>
	);
}

export default App;
