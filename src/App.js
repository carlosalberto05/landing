import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Servicios from './Servicios';

function App() {
	return (
		<div>
			<Jumbotron className="jm-bg" fluid>
				<Container className="cntr-bg"></Container>
			</Jumbotron>
			<Servicios />
		</div>
	);
}

export default App;
