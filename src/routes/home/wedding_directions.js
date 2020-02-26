import RoadMap from '../../assets/svg/roadmap.svg';
import style from './home.scss';

const mapToCoordinates = ({ church, party }) => () => {
	const churchLoc = church.name.replace(' ', '+');
	const partyLoc = party ? '/' + party.name.replace('', '+') : '';
	navigator.geolocation.getCurrentPosition(({ coords }) => {
		const { latitude, longitude } = coords;
		const url = `https://www.google.com/maps/dir/${latitude},${longitude}/${churchLoc}${partyLoc}`;
		window.open(url, '_blank');
	});
};

export const WeddingDirections = ({ locations, goingToParty, className='' }) => {
	const { church, party } = locations;
	return (
		<button type="button" className={`${style.directions__btn} ${className}`} onClick={mapToCoordinates({ church, party: goingToParty?party: undefined })}>
			<RoadMap style={{ height: 100 }} />
			prowadź
		</button>
	);
};
