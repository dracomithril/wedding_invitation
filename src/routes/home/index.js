import style from './home.css';
import { WeddingDirections } from './wedding_directions';
import { Header } from './header';
import { Invitation } from './invitation';
import Icon from  '../../components/Icons';

const template = {
	title: 'Zaproszenie',
	who: {
		bride: 'Paulina Grezel',
		groom: 'Michał Grezel'
	},
	when: {
		day: 'piątek',
		date: '1 maja 2020',
		hour: 'godz. 14:00'
	},
	motto: '"Takich dwoje jak nas troje to nie ma ani jednego"',
	locations: {
		church: {
			url: 'https://goo.gl/maps/bBNCYv6WXwHhY3Y4A',
			name: 'Kościół NMP Matki Kościoła w Bolęcinie'
		},
		party: {
			url: 'https://goo.gl/maps/vkJxrxgSt5t4pxYHA',
			name: '\'Karpik\' Graboszyce, ul. Szlachecka 9'
		}
	}
};

function When({ day, date, hour }) {
	return (<div className={`${style.details_item} ${style.time}`}>
		<span className={style.day}>{day}</span>
		<span>{date}</span>
		<span>{hour}</span>
	</div>);
}
const Place = ({ place, name }) => (
	<div className={style.details_item}>
		<a href={place.url} target="_blank" rel="noopener noreferrer"><Icon name={name} /></a>
		<span>{place.name}</span>
	</div>
);

const Home = ({ guests }) => (
	<div className={style.home}>
		<Header who={template.who} />
		<Invitation guests={guests} />
		<section className={style.details}>
			<When day={template.when.day} date={template.when.date} hour={template.when.hour} />
			<hr className={style.vertical} />
			<div>
				<Place place={template.locations.church} name={'church'} />
				<hr className={style.horizontal} />
				<Place place={template.locations.party} name={'wine_glasses'} />
			</div>
		
		</section>
		<WeddingDirections locations={template.locations} />
		<h3>{template.motto}</h3>
	</div>
);

export default Home;
