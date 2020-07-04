import style from './home.scss';
import { WeddingDirections } from './wedding_directions';
import { Header } from './header';
import { Invitation } from './invitation';
import { When } from '../../components/When';
import ChurchRoadmapIcon from '../../assets/svg/roadmap_church.svg';
import PartyRoadmapIcon from '../../assets/svg/roadmap_party.svg';
import SpeakIcon from '../../assets/svg/speak.svg';
import Calendar from '../../assets/svg/calendar.svg';
import template from '../../template';
import guestsList from '../../guestsList.json';
import { decode } from '../../utils/encoder';
import { DEFAULT_GUEST_NAME } from '../../constants';
import { createLink, getFormLink } from '../../utils/links';

function getGuestInfo(guests) {
	try {
		return JSON.parse(decode(guests)).guestName;
	}
	catch (e) {
		return  DEFAULT_GUEST_NAME;
	}
}

const handleAddToCalendar =(calendar) => () => {
	const url = createLink(calendar);
	window.open(url,'_blank');
};

const confirmationFormRedirect = (url,guestName) => () => {
	const formUrl = getFormLink({ url,name: guestName });
	window.open(formUrl,'_blank');
};
const partyInvitation = true;

const Home = ({ guests ='', id ='' }) => {
	let guestName = DEFAULT_GUEST_NAME;
	try {
		if (guests){
			guestName = guestsList[guests.toLowerCase()] || getGuestInfo(guests);
		}
		if (id) {
			guestName = guestsList[id.toLowerCase()] || DEFAULT_GUEST_NAME;
		}
	}
	catch (e) {
		console.error(e.message);
		guestName = DEFAULT_GUEST_NAME;
	}


	return (
		<div className={style.home}>
			<Header who={template.who} />
			<Invitation guests={guestName} goingToParty={partyInvitation} />
			<section className={style.details}>
				<When when={template.when} />
				<hr className={style.vertical} />
				<div className={style.directions}>
					<a href={template.locations.church.url} target="_blank" rel="noopener noreferrer">
						<div className={`${style.details_item} ${style.place}`}>
							<ChurchRoadmapIcon style={{ height: 70 }} />
							<div className={style.details_item} style={{ width: '100%' }}>
								<span>Kościół</span>
								<span>{template.locations.church.name}</span>
							</div>
						</div>
					</a>
					{partyInvitation && <div className={style.line_block}>
						<hr className={style.horizontal} />
						<span className={style.line_text}>Wesele</span>
					</div>}
					{partyInvitation &&
						<a href={template.locations.party.url} target="_blank" rel="noopener noreferrer">
							<div className={`${style.details_item} ${style.place}`}>
								<PartyRoadmapIcon style={{ height: 80 }} />
								<div className={style.details_item} style={{ width: '100%', textDecorationLine: 'none' }}>
									{template.locations.party.name.split('\n').map((text) => <span>{text}</span>)}
								</div>
							</div>
						</a>
					}
				</div>
			</section>
			<section className={`${style.details} ${style.interactions}`}>
				<WeddingDirections locations={template.locations} goingToParty={partyInvitation} />
				<button
					type="button"
					className={style.directions__btn}
					onClick={handleAddToCalendar(template.calendar)}
				>
					<Calendar style={{ height: 100 }} />
					dodaj
				</button>
				{partyInvitation &&
				<button
					type="button"
					className={style.directions__btn}
					onClick={confirmationFormRedirect(template.confirmation_form.url, guestName)}
				>
				  <SpeakIcon style={{ height: 100 }} />
					daj nam znać
				</button>}
			</section>
			<span className={style.explanation}>{'Będzie nam niezmiernie miło jeśli pomimo wciąż panującej pandemii zechcecie nam towarzyszyć.'}</span>
			<span className={style.condition}>{`Prosimy o potwierdzenie przybycia do dnia 4.07.2020 roku`}</span>
			<span className={style.explanation}>{'W trosce o Wasze zdrowie postaramy się o rozsądek i zapewnienie środków bezpieczeństwa.'}</span>
			<h3>{template.motto}</h3>
		</div>
	);
};

export default Home;
