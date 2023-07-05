import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Divider from '../Divider/Divider';


const TrailerMovie: FC = () => {
	return (
		<Container className='text-white mt-20'>
			<Row>
				<Col lg={6}>
					<div>
						<h1 className='text-4xl'><FontAwesomeIcon icon={faFilm} className='text-amber-300' /> Trailers & Videos</h1>
					</div>
				</Col>
			</Row>
			<Divider />
		</Container>
	)
}

export default TrailerMovie;