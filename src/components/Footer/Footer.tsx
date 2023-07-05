import React, { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';


const Footer: FC = () => {
	return (
		<footer className='text-white footer' style={{ background: 'url("https://firebasestorage.googleapis.com/v0/b/moment-learning.appspot.com/o/images%2Ffooter-bg.png?alt=media&token=317cdc8b-4d6a-45d0-95da-ceeaf53fbfbb")' }}>
			<Container>
				<Row>
					<Col lg={3} sm={6}>
						<div className='widget'>
							<img className='mb-10' src='https://firebasestorage.googleapis.com/v0/b/moment-learning.appspot.com/o/images%2Flogo.png?alt=media&token=b86a4dc4-7d72-4166-aef5-f7ccd0d6596f' alt='about' />
							<p className='text-slate-500'>Danang, VietNam</p>
							<h6 className='mt-5 font-medium text-base'><span>Call us: </span>(+84) 915905138</h6>
						</div>
					</Col>
					<Col lg={3} sm={6}>
						<div className='widget'>
							<h4 className='mb-10 text-lg font-medium'>Legal</h4>
							<ul>
								<li className='mt-4'>Terms of Use</li>
								<li className='mt-4'>Privacy Policy</li>
								<li className='mt-4'>Security</li>
							</ul>
						</div>
					</Col>
					<Col lg={3} sm={6}>
						<div className='widget'>
							<h4 className='mb-10 text-lg font-medium'>Account</h4>
							<ul>
								<li className='mt-4'>My Account</li>
								<li className='mt-4'>Watchlist</li>
								<li className='mt-4'>Collections</li>
								<li className='mt-4'>User Guide</li>
							</ul>
						</div>
					</Col>
					<Col lg={3} sm={6}>
						<div className='widget'>
							<h4 className='mb-10 text-lg font-medium'>Newsletter</h4>
							<p>Subscribe to our newsletter system now to get latest news from us.</p>
							<form action='#'>
								<input type='text' placeholder='Enter your email..' />
								<button>SUBSCRIBE NOW</button>
							</form>
						</div>
					</Col>
				</Row>
			</Container>
			<div className='copyright'>
				<Container>
					<Row>
						<Col lg={6}>
							<div className='copyright-content'>
								<p><a target='_blank' href='https://www.templateshub.net'>Templates Hub</a></p>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</footer>
	)
}

export default Footer;