import './styles/App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import ThankYou from './components/ThankYou';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Form />} />
			<Route path="thankyou" element={<ThankYou />} />
		</Routes>
	);
};

export default App;
