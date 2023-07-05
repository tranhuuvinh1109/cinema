import { faPlay, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import { Row, Col } from 'react-bootstrap';


const PosterItem: FC = () => {
	return (
		<Row className='bg-regal-black poster-item'>
			<Col lg={6} md={5} className='flex justify-center'>
				<div className='hero-area-content'>
					<img className='mt-[-120px]' src='https://firebasestorage.googleapis.com/v0/b/moment-learning.appspot.com/o/images%2Fslide3.png?alt=media&token=dd2f8087-31fc-42f8-8059-19ea4e9adf83' alt='about' />
				</div>
			</Col>
			<Col lg={6} md={7} className='flex justify-center'>
				<div className='text-white'>
					<h2 className='text-3xl font-medium'>The Devil Princess</h2>
					<div className='poster-item-review flex'>
						<div className='author-review text-yellow-300'>
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
						</div>
						<h4 className='text-xl pl-6'>180k voters</h4>
					</div>
					<p className='mt-8 text-stone-400 text-xl'>She is a devil princess from the demon world. She grew up sheltered by her parents and doesn't really know how to be evil or any of the common actions,   She is unable to cry due to Keita's accidental first wish, despite needed for him to wish...</p>
					<h3 className='mt-4 font-medium text-3xl'>Cast:</h3>
					<div className='mt-2 flex justify-between'>
						<div className='poster-item-cast flex-1'>
							<img src='https://firebasestorage.googleapis.com/v0/b/moment-learning.appspot.com/o/images%2Fcast5.png?alt=media&token=cc14da4f-c9db-4cca-bf31-e7581fd94784' alt='about' />
						</div>
						<div className='poster-item-cast flex-1'>
							<img src='https://firebasestorage.googleapis.com/v0/b/moment-learning.appspot.com/o/images%2Fcast5.png?alt=media&token=cc14da4f-c9db-4cca-bf31-e7581fd94784' alt='about' />
						</div>
						<div className='poster-item-cast flex-1'>
							<img src='https://firebasestorage.googleapis.com/v0/b/moment-learning.appspot.com/o/images%2Fcast5.png?alt=media&token=cc14da4f-c9db-4cca-bf31-e7581fd94784' alt='about' />
						</div>
						<div className='poster-item-cast flex-1 poster-item-cast-more'>
							5+
						</div>
					</div>
					<div className='mt-8 flex justify-between'>
						<h3 className='font-medium text-3xl'>Watch Trailer</h3>
						<button className='theme-btn-primary'><FontAwesomeIcon icon={faPlay} /> Tickets</button>
					</div>
				</div>
			</Col>
		</Row>
	)

}


export default PosterItem