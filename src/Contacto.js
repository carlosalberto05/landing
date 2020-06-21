import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import './App.css';

function Contacto() {
	const { control, handleSubmit, errors, watch } = useForm();
	const [enviando, setEnviando] = useState({
		terminado: false,
		procesando: false,
		exito: false,
		error: false,
	});

	const envio = (data) => {
		setEnviando({ ...enviando, procesando: true });
		fetch('https://us-central1-landing-740b6.cloudfunctions.net/helloWorld', {
			method: 'POST',
			headers: {
				'Content-Type': 'text/plain',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((res) => {
				setEnviando({
					...enviando,
					procesando: false,
					terminado: true,
					exito: true,
				});
				console.log(res);
			})
			.catch((err) => {
				setEnviando({
					...enviando,
					procesando: false,
					terminado: true,
					error: true,
				});
				console.log(err);
			});
	};
	return (
		<div>
			<Container>
				<h1 className="display-1 text-center mb-5">Contacto</h1>
				{!enviando.terminado && !enviando.procesando && (
					<Form onSubmit={handleSubmit((data) => envio(data))}>
						<Form.Group controlId="formBasicName">
							<Form.Label>Nombre: </Form.Label>
							<Controller
								as={<Form.Control />}
								name="nombre"
								control={control}
								defaultValue=""
								type="text"
								placeholder="Escribe tu nombre"
								rules={{
									required: 'El nombre es requerido',
									minLength: {
										value: 3,
										message: 'Escribe minimo 3 caracteres',
									},
								}}
							/>
							{errors.nombre && (
								<Alert className="mt-3" variant={'danger'}>
									{errors.nombre.message}
								</Alert>
							)}
						</Form.Group>

						<Form.Group controlId="formBasicEmail">
							<Form.Label>Correo: </Form.Label>
							<Controller
								as={<Form.Control />}
								name="email"
								control={control}
								defaultValue=""
								type="email"
								placeholder="Escribe tu correo"
								rules={{
									required: 'El correo es requerido',
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
										message: 'El correo debe ser en un formato adecuado',
									},
								}}
							/>
							{errors.email && (
								<Alert className="mt-3" variant={'danger'}>
									{errors.email.message}
								</Alert>
							)}
						</Form.Group>

						<Form.Group controlId="formBasicConfirmation">
							<Form.Label>Confirma tu correo: </Form.Label>
							<Controller
								as={<Form.Control />}
								name="confirm"
								control={control}
								defaultValue=""
								type="email"
								placeholder="Confirma tu correo"
								rules={{
									required: 'La confirmación de correo es requerida',
									validate: (value) =>
										value === watch('email') || 'Los correos no coinciden',
								}}
							/>
							{errors.confirm && (
								<Alert className="mt-3" variant={'danger'}>
									{errors.confirm.message}
								</Alert>
							)}
						</Form.Group>

						<Form.Group controlId="exampleForm.ControlTextarea1">
							<Form.Label>Mensaje: </Form.Label>
							<Controller
								as={<Form.Control as="textarea" />}
								name="mensaje"
								control={control}
								defaultValue=""
								type="email"
								placeholder="Escribe tu correo"
								rows="3"
								rules={{
									required: 'El mensaje es requerido',
									minLength: {
										value: 20,
										message: 'La longitud debe ser de al menos 20 caracteres',
									},
								}}
							/>
							{errors.mensaje && (
								<Alert className="mt-3" variant={'danger'}>
									{errors.mensaje.message}
								</Alert>
							)}
						</Form.Group>

						<Button className="btn-bg" variant="primary" type="submit" block>
							Enviar
						</Button>
					</Form>
				)}
				{enviando.procesando && !enviando.terminado && (
					<Alert className="mt-3 py-5 text-center" variant={'primary'}>
						<Spinner animation="border" role="status">
							<span className="sr-only">Loading...</span>
						</Spinner>
						<br />
						Enviado ...
					</Alert>
				)}
				{enviando.terminado && enviando.exito && (
					<Alert className="mt-3 py-5" variant={'success'}>
						El envío fue correcto
					</Alert>
				)}
				{enviando.terminado && enviando.error && (
					<Alert className="mt-3 py-5" variant={'danger'}>
						Error al enviar
					</Alert>
				)}
			</Container>
		</div>
	);
}

export default Contacto;
