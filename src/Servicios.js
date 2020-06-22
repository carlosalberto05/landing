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
import Container from 'react-bootstrap/Container';
import ScrollAnimation from 'react-animate-on-scroll';

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
			<ScrollAnimation animateIn="animate__zoomIn">
				<h1 className="display-1 text-center mb-5">Servicios</h1>
			</ScrollAnimation>

			{elementos.map(({ img, id, texto, titulo }, index) => {
				if (index % 2 === 0) {
					return (
						<Row className="mb-5" key={id}>
							<Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
								<ScrollAnimation animateIn="animate__fadeInLeft">
									<Image src={img} fluid />
								</ScrollAnimation>
							</Col>
							<Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
								<ScrollAnimation animateIn="animate__fadeInRight">
									<h1 className="display-4">{titulo}</h1>
									<p className="lead">{texto}</p>
								</ScrollAnimation>
							</Col>
						</Row>
					);
				} else {
					return (
						<Row className="mb-5" key={id}>
							<Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 1 }}>
								<ScrollAnimation delay={1000} animateIn="animate__fadeInLeft">
									<h1 className="display-4">{titulo}</h1>
									<p className="lead">{texto}</p>
								</ScrollAnimation>
							</Col>
							<Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 2 }}>
								<ScrollAnimation delay={1000} animateIn="animate__fadeInRight">
									<Image src={img} fluid />
								</ScrollAnimation>
							</Col>
						</Row>
					);
				}
			})}
		</Container>
	);
};
export default Servicios;
