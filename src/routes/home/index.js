import style from './home.css';
import { decode } from '../../utils/encoder';

const template = {
	title: 'Zaproszenie',
	bride: 'Paulina Grezel',
	groom: 'Michał Grezel',
	day: 'piątek',
	date: '1 maja 2020',
	hour: 'godz. 14:00',
	motto: '"Takich dwoje jak nas troje to nie ma ani jednego"'
};

const Guests = ({ guests }) => {
	const names = guests ? decode(guests): 'Szanownych Państwa';
	return (<div className={style.guests}>
		<span>{names}</span>
	</div>);
};

const mapToCoordinates = () => {
	navigator.geolocation.getCurrentPosition(({ coords }) => {
		const { latitude, longitude } = coords;
		const url = `https://www.google.com/maps/dir/${latitude},${longitude}/Ko%C5%9Bci%C3%B3%C5%82+NMP+Matki+Ko%C5%9Bcio%C5%82a+w+Bol%C4%99cinie,+Ko%C5%9Bcielna+12,+32-540+Trzebinia/Karpik,+32-640+Graboszyce+ul.+Szlachecka`;
		window.open(url, '_blank');
	});
};
const Location = () => (
	<div>
		<h4>🚘Trasa 🚘</h4>
		<button type="button" onClick={mapToCoordinates}>
			<img alt="mapa" className={style.image} src="/assets/icons/gmaps.png" />
		</button>
	</div>
);

function When() {
	return (<div className={`${style.details_item} ${style.time}`}>
		<span className={style.day}>{template.day}</span>
		<span>{template.date}</span>
		<span>{template.hour}</span>
	</div>);
}

const Home = ({ guests }) => (
	<div className={style.home}>
		<div className={style.stage1}>
			<span>{template.bride}</span>
			<span>i</span>
			<span>{template.groom}</span>
			<h5>{template.date}</h5>
		</div>
		<div className={style.invite}>
			<span>{'wraz z Rodzicami '}</span>
			<span>{'maja zaszczyt zaprosić'}</span>
			<Guests guests={guests} />
			<span>{'na ślub kościelny i wesele'}</span>
		</div>


		<h3>{template.motto}</h3>
		<div className={style.details}>
			<div className={style.details_item}>
				<span className={style.place_icon}>⛪</span>
				<a href="https://goo.gl/maps/FhKAcxccbxMYrvvz8" target="_blank" rel="noopener noreferrer">NMP
					Matki Kościoła w Bolęcinie</a>
			</div>
			<hr className={style.vertical} />
			<When />
			<hr className={style.vertical} />
			<div className={style.details_item}>
				<span className={style.place_icon}>🍽</span>
				<a href="https://goo.gl/maps/Rp54iZQ2bHR8CBSx5" target="_blank" rel="noopener noreferrer">'Karpik'
					Graboszyce, ul. Szlachecka 9</a>
			</div>
		</div>
		<Location />
		<h4>⛪ Kościół ⛪</h4>
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2558.174086542099!2d19.476809!3d50.120464299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716ef015efad38d%3A0xf6602d27b1fd790a!2zS2_Fm2Npw7PFgiBOTVAgTWF0a2kgS2_Fm2Npb8WCYSB3IEJvbMSZY2luaWU!5e0!3m2!1spl!2spl!4v1578694248955!5m2!1spl!2spl"
			width="400" height="300" frameBorder="0" style="border:0;" allowFullScreen=""
		/>
		<h4>🍽 Sala 🍽</h4>
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2567.192160343996!2d19.450263515803154!3d49.95149773107111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47168dd60d73146d%3A0x2c8679593bd60fc4!2sKarpik!5e0!3m2!1spl!2spl!4v1578696377935!5m2!1spl!2spl"
			width="400" height="300" frameBorder="0" style="border:0;" allowFullScreen=""
		/>
	</div>
);

export default Home;
