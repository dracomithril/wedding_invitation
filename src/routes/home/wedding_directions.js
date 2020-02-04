import Icon from '../../components/Icons';

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
		<div>
			<button type="button" onClick={mapToCoordinates(church, party)}>
				<Icon name={'roadmap'} />
			</button>
		</div>
	);
};