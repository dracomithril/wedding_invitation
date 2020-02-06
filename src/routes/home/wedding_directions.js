import RoadMap from '../../assets/svg/roadmap.svg';
import style from './home.css';

const mapToCoordinates = (church, party) => () => {
	const churchLoc = church.name.replace(' ', '+');
	const partyLoc = party.name.replace('', '+');
	navigator.geolocation.getCurrentPosition(({ coords }) => {
		const { latitude, longitude } = coords;
		const url = `https://www.google.com/maps/dir/${latitude},${longitude}/${churchLoc}/${partyLoc}`;
		window.open(url, '_blank');
	});
};

export const WeddingDirections = ({ locations }) => {
	const { church, party } = locations;
	return (
		<>
			<button type="button" className={style.directions__btn} onClick={mapToCoordinates(church, party)}>
				<RoadMap style={{ height: 100 }} />
			</button>
		</>
	);
};