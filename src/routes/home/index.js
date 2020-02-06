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

const Home = ({ guests }) => (
	<div className={style.home}>
		<Header who={template.who} />
		<Invitation guests={guests} />
		<section className={style.details}>
			<When {...template.when} />
			<hr className={style.vertical} />
			<div className={style.directions}>
				<div className={`${style.details_item} ${style.place}`}>
					<a href={template.locations.church.url} target="_blank" rel="noopener noreferrer">
						<ChurchRoadmapIcon style={{ height: 70 }} />
					</a>
					<div className={style.details_item}>
						<span>Kościół</span>
						<span>{template.locations.church.name}</span>
					</div>
				</div>
				<div className={style.line_block}>
					<hr className={style.horizontal} />
					<span className={style.line_text}>Wesele</span>
				</div>
				<div className={`${style.details_item} ${style.place}`}>
					<a href={template.locations.party.url} target="_blank" rel="noopener noreferrer">
						<PartyRoadmapIcon style={{ height: 80 }} />
					</a>
					<div className={style.details_item}>
						{template.locations.party.name.split('\n').map((text) => <span>{text}</span>)}
					</div>
					
				</div>
			</div>
		</section>
		<section className={style.details}>
			<WeddingDirections locations={template.locations} />
			<a href={createLink(template.calendar)} target="_blank" rel="noopener noreferrer">
				<Calendar style={{ height: 100 }} />
			</a>
		</section>

		<h3>{template.motto}</h3>
	</div>
);

export default Home;
