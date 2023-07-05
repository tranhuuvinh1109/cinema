import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react'
import { Col } from 'react-bootstrap';

const SpotlightItem: FC = () => {
	return (
		<Col md={3} sm={6} className='mt-8 flex justify-center'>
			<div className='spotlight-item relative w-full overflow-hidden flex justify-center'>
				<img className='img-spotlight' src="https://firebasestorage.googleapis.com/v0/b/moment-learning.appspot.com/o/images%2Fportfolio1.png?alt=media&token=8f656a4c-1ee8-4bfe-92aa-0c116f9dad06" alt="portfolio" />
				<button className='btn-play hidden absolute top-1/2 translate-y-[-50%]'><FontAwesomeIcon icon={faCirclePlay} fontSize={50} /></button>
				<div className='absolute bottom-0 px-2 py-3 w-full bg-linear'>
					<h2 className='text-3xl'>Boyz II Men</h2>
					<div className="mt-2 flex">
						<div className="author-review">
							<FontAwesomeIcon icon={faStar} className='text-yellow-300 mr-1' />
							<FontAwesomeIcon icon={faStar} className='text-yellow-300 mr-1' />
							<FontAwesomeIcon icon={faStar} className='text-yellow-300 mr-1' />
							<FontAwesomeIcon icon={faStar} className='text-yellow-300 mr-1' />
							<FontAwesomeIcon icon={faStar} className='text-yellow-300 mr-1' />
						</div>
						<h4 className='ml-4'>180k voters</h4>
					</div>
				</div>
			</div>
		</Col>
	)
}

export default SpotlightItem;