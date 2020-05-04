import React from 'react';
import { nanoid } from 'nanoid';
import uno from './img/1.svg';
import dos from './img/2.svg';
import tres from './img/3.svg';
import cuatro from './img/4.svg';
import cinco from './img/5.svg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
// import { Container } from 'react-bootstrap/lib/Tab';
import Container from 'react-bootstrap/Container';

const Servicios = (props) => {
	const elementos = [
		{
			img: uno,
			id: 'id' + nanoid(),
			texto: 'Clases enfocadas en tus necesidades',
			titulo: 'Personalizadas',
		},
		{
			img: dos,
			id: 'id' + nanoid(),
			texto: 'Análisis y comentarios de tus actividades',
			titulo: 'Retroalimentación',
		},
		{
			img: tres,
			id: 'id' + nanoid(),
			texto: 'Registro detallado de tu avance',
			titulo: 'Progreso',
		},
		{
			img: cuatro,
			id: 'id' + nanoid(),
			texto: 'Además cuentas con un asesor digital disponible las 24/7',
			titulo: 'Asesoría en línea',
		},
		{
			img: cinco,
			id: 'id' + nanoid(),
			texto:
				'Sabemos que tienes objetivos claro, nosostros te ayudamos a conseguirlos',
			titulo: 'Objetivos',
		},
	];
	return (
		<Container>
			<h1 className="display-1 text-center mb-5">Servicios</h1>
			{elementos.map(({ img, id, texto, titulo }, index) => {
				if (index % 2 === 0) {
					return (
						<Row className="mb-5" key={id}>
							<Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
								<Image src={img} fluid />
							</Col>
							<Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
								<h1 className="display-4">{titulo}</h1>
								<p className="lead">{texto}</p>
							</Col>
						</Row>
					);
				} else {
					return (
						<Row className="mb-5" key={id}>
							<Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 1 }}>
								<h1 className="display-4">{titulo}</h1>
								<p className="lead">{texto}</p>
							</Col>
							<Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 2 }}>
								<Image src={img} fluid />
							</Col>
						</Row>
					);
				}
			})}
		</Container>
	);
};
export default Servicios;
