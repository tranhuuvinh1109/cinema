import { faClapperboard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SpotlightItem from '../SpotlightItem/SpotlightItem';
import Divider from '../Divider/Divider';



const Spotlight: FC = () => {
	return (
		<Container className='text-white'>
			<Row className=' pt-14'>
				<Col lg={6}>
					<div>
						<h1 className='text-4xl'><FontAwesomeIcon icon={faClapperboard} className='text-amber-300' /> Spotlight This Month</h1>
					</div>
				</Col>
				<Col lg={6}>
					<div className="portfolio-menu">
						<ul className='flex justify-end items-center'>
							<li className='mx-4'>Latest</li>
							<li className='mx-4'>Comming Soon</li>
							<li className='ml-4'>Top Rated</li>
						</ul>
					</div>
				</Col>
			</Row>
			<Divider />
			<Row className='mt-12'>
				<Col>
					<Row className=''>
						<SpotlightItem />
						<SpotlightItem />
						<SpotlightItem />
						<SpotlightItem />
						<SpotlightItem />
						<SpotlightItem />
					</Row>
				</Col>
			</Row>
		</Container>
	)
}

export default Spotlight;