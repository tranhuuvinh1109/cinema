import React, { FC, useState, useRef } from 'react';
import { Container } from 'react-bootstrap';
import Slider from "react-slick";
import PosterItem from '../PosterItem/PosterItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const images = [
	{
		key: 1,
		content: <PosterItem />
	},
	{
		key: 2,
		content: <PosterItem />
	},
	{
		key: 3,
		content: <PosterItem />
	},
	{
		key: 4,
		content: <PosterItem />
	},
	{
		key: 5,
		content: <PosterItem />
	},
];

const Poster: FC = () => {
	const [imageIndex, setImageIndex] = useState(0);

	return (
		<div
			className="bg-no-repeat bg-center bg-cover overflow-hidden"
			style={{
				backgroundImage:
					"url('https://firebasestorage.googleapis.com/v0/b/moment-learning.appspot.com/o/images%2Fhero-area.png?alt=media&token=d036bd34-d338-48a9-8c83-230e535192c4')",
			}}
		>
			<Container>
				<Swiper
					spaceBetween={30}
					centeredSlides={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
					}}
					modules={[Autoplay, Pagination, Navigation]}
					className="mySwiper"
				>
					<SwiperSlide>
						<PosterItem />
					</SwiperSlide>
					<SwiperSlide>
						<PosterItem />
					</SwiperSlide>
					<SwiperSlide>
						<PosterItem />
					</SwiperSlide>
					<SwiperSlide>
						<PosterItem />
					</SwiperSlide>

				</Swiper>

			</Container>
		</div>
	);
};

export default Poster;



// const Poster: FC = () => {
// 	const [imageIndex, setImageIndex] = useState(0);
// 	const settings = {
// 		autoplay: false,
// 		focusOnSelect: true,
// 		pauseOnFocus: true,
// 		autoplaySpeed: 3000,
// 		infinite: true,
// 		centerPadding: "60px",
// 		speed: 500,
// 		slidesToShow: 3,
// 		centerMode: true,
// 		beforeChange: (_current: any, next: React.SetStateAction<number>) =>
// 			setImageIndex(next),
// 	};

// 	return (
// 		<div
// 			className="bg-no-repeat bg-center bg-cover overflow-hidden"
// 			style={{
// 				backgroundImage:
// 					"url('https://firebasestorage.googleapis.com/v0/b/moment-learning.appspot.com/o/images%2Fhero-area.png?alt=media&token=d036bd34-d338-48a9-8c83-230e535192c4')",
// 			}}
// 		>
// 			<Slider {...settings}>
// 				{images.map((img, idx) => (
// 					<div
// 						key={img.key}
// 						className={idx === imageIndex ? 'slide activeSlide' : 'slide'}
// 					>
// 						{img.content}
// 					</div>
// 				))}
// 			</Slider>
// 		</div>
// 	);
// };
