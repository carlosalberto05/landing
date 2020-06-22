import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
	return (
		<div className="mt-5 footer-bg py-5">
			<p className="lead text-center my-0 py-0">tel: 567-7812-1246</p>
			<p className="lead text-center my-0 py-0">
				3er planeta del sistema solar
			</p>
			<div className="text-center">
				<FontAwesomeIcon className="ml-3" icon={faFacebook} />
				<FontAwesomeIcon className="ml-3" icon={faTwitter} />
				<FontAwesomeIcon className="ml-3" icon={faPhoneSquare} />
			</div>
		</div>
	);
};

export default Footer;
