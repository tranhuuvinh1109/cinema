import React, { FC } from 'react';
import { Container, Row } from 'react-bootstrap';
import MovieItem from '../MovieItem/MovieItem';
import { MovieItemType } from '../../type';
const data: MovieItemType = {
	id: 'love',
	name: 'Love',
	time: 100,
	image: 'https://occ-0-325-395.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeYCaYCxiiHV23O8_1HlRove7xyP7Ho3VqAUyGu36JgGKWGeq3LMWZu5fw0CsyWlNAEMIaM6LHHBvD0b1k79stOEZsIcUVxgXz9m-9sgvhHzpZkmh0ItKdvqcBSWsKTbPZ2eLyWBgT_g0-ywJej4ID3BNpYp1SOt2UVyjmHd0lKcBffO8Cy6qCCJd_V_iIYjntYqDBnNSvopFKN35dyoZ9SpFiXMFlfgCIzIEOSAO8_aMMiv7Y4JUzMEUz2WGK_7aSPB-Icm12w1ZBniJvAhUHI7_J6gbO-gzD4CXbHr-5aeyzD5yxGwdXdRDipO6CF8AJRkzbuReGAPo_EelhTD6WDTOQwQWydJYOh_QIXdZ-RpC-IoOscyMePu0nMjQVJidoK1FVfBBI_wRLbDLhGUcRM9p7uweKXTUtXPHCVCg_Q9xg0hlxrNRZxk9E8W7htkbzHSmA7j6-YUvMbAiPEX1oRDcTYdR17yho9vE01VsGXb79MrtLiUV6j9RbDwf6f8AA.jpg?r=c93',
	video: 'https://firebasestorage.googleapis.com/v0/b/moment-learning.appspot.com/o/videos%2Fcourse%2FDockerWhat%20is%20DOCKER?alt=media&token=8d7bd13e-aee7-45db-b6c2-1a373e8cb0db',
	top: 10,
	category: 'Movie'
}
const Carousel: FC = () => {
	return (
		<div>
			<Container>
				<Row>
					<MovieItem data={data} />
					<MovieItem data={data} />
					<MovieItem data={data} />
					<MovieItem data={data} />
					<MovieItem data={data} />
					<MovieItem data={data} />
					<MovieItem data={data} />
				</Row>
			</Container>
		</div>
	)
}

export default Carousel;