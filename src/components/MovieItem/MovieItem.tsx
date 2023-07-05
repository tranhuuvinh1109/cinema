import React, { useState, useRef } from 'react';
import { MovieItemType } from '../../type';

type MovieItemProps = {
	data: MovieItemType;
};

const MovieItem: React.FC<MovieItemProps> = ({ data }) => {
	const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);

	const videoRef = useRef(null);

	const showTooltip = () => {
		setIsTooltipVisible(true);
		if (videoRef.current) {
			// videoRef.current.play();
		}
	};

	const hideTooltip = () => {
		setIsTooltipVisible(false);
		if (videoRef.current) {
			// videoRef.current.pause();
		}
	};
	return (
		<div className='mx-1 w-44'>
			<div
				className='relative block'
				onMouseEnter={showTooltip}
				onMouseLeave={hideTooltip}
			>
				<img src={data.image} alt='movie item' className='w-full' />
				{isTooltipVisible && (
					<div className="absolute w-96 z-40 p-2 rounded top-0">
						<video ref={videoRef} className="w-full" autoPlay>
							<source
								src="https://firebasestorage.googleapis.com/v0/b/moment-learning.appspot.com/o/videos%2Fcourse%2FDockerBenefits%20of%20DOCKER?alt=media&token=0efea268-a0fd-4175-9773-c49f65dc1c80"
								type="video/mp4"
							/>
						</video>
						<div>
							<h1>
								ssss
							</h1>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default MovieItem;