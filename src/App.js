import './styles/App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Form from './components/Form';
import ThankYou from './components/ThankYou';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Form />} />
				<Route path="thankyou" element={<ThankYou />} />
			</Routes>
		</Router>
	);
};

export default App;
