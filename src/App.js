import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Servicios from './Servicios';
import Contacto from './Contacto';
import Footer from './Footer';
import 'animate.css/animate.min.css';
import { Helmet } from 'react-helmet';

function App() {
	return (
		<div>
			<Helmet>
				<title>Landing</title>
			</Helmet>
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
