import './App.css';
import React from 'react';
import HomePage from './components/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<React.StrictMode>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<HomePage />}
					/>
					<Route
						path="/:filename"
						element={<HomePage />}
					/>
				</Routes>
			</BrowserRouter>
		</React.StrictMode>
	);
}

export default App;
