import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Servicios from './Servicios';
import Contacto from './Contacto';
import Footer from './Footer';

function App() {
	return (
		<div>
			<Jumbotron className="jm-bg" fluid>
				<Container className="cntr-bg"></Container>
			</Jumbotron>
			<Servicios />
			<Contacto />
			<Footer />
		</div>
	);
}

export default App;
