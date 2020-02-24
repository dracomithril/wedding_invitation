import style from './home.css';
import { WeddingDirections } from './wedding_directions';
import { Header } from './header';
import { Invitation } from './invitation';
import { When } from '../../components/When';
import ChurchRoadmapIcon from '../../assets/svg/roadmap_church.svg';
import PartyRoadmapIcon from '../../assets/svg/roadmap_party.svg';
import Calendar from '../../assets/svg/calendar.svg';
import template from '../../template';
import { createLink } from '../../utils/googleCalendar';
import { decode } from '../../utils/encoder';
import { DEFAULT_GUEST_NAME } from '../../constants';

function getGuestInfo(guests) {
	try {
		return JSON.parse(decode(guests));
	}
	catch (e) {
		return {
			guestName: DEFAULT_GUEST_NAME,
			party: false
		};
	}
}

const handleAddToCalendar =(calendar) => () => {
	const url = createLink(calendar);
	window.open(url,'_blank');
};

const Home = ({ guests }) => {
	const { guestName, party } = getGuestInfo(guests);

	return (
		<div className={style.home}>
			<Header who={template.who} />
			<Invitation guests={guestName} goingToParty={party} />
			<section className={style.details}>
				<When when={template.when} />
				<hr className={style.vertical} />
				<div className={style.directions}>
					<div className={`${style.details_item} ${style.place}`}>
						<a href={template.locations.church.url} target="_blank" rel="noopener noreferrer">
							<ChurchRoadmapIcon style={{ height: 70 }} />
						</a>
						<div className={style.details_item} style={{ width: '100%' }}>
							<span>Kościół</span>
							<span>{template.locations.church.name}</span>
						</div>
					</div>
					{party && <div className={style.line_block}>
						<hr className={style.horizontal} />
						<span className={style.line_text}>Wesele</span>
					</div>}
					{party && <div className={`${style.details_item} ${style.place}`}>
						<a href={template.locations.party.url} target="_blank" rel="noopener noreferrer">
							<PartyRoadmapIcon style={{ height: 80 }} />
						</a>
						<div className={style.details_item} style={{ width: '100%' }}>
							{template.locations.party.name.split('\n').map((text) => <span>{text}</span>)}
						</div>
					</div>}
				</div>
			</section>
			<section className={style.details}>
				<WeddingDirections locations={template.locations} goingToParty={party} />
				<button
					type="button"
					className={style.directions__btn}
					onClick={handleAddToCalendar(template.calendar)}
				>
					<Calendar style={{ height: 100 }} />
					dodaj
				</button>
			</section>
			<h3>{template.motto}</h3>
		</div>
	);
};

export default Home;
