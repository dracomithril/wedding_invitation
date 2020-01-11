import { h } from 'preact';
import style from './style.css';

const template = {
	title: 'Zaproszenie',
	date: '1/05/2020',
	get invite() {
		return `W opinii tego świata zawarcie małżeństwa
jest uwieńczeniem wszystkiego jak w komedii.
Prawda jednak jest dokładnie odwrotna:
małżeństwo to początek wszystkiego.


Dlatego też z wielką radością zapraszamy
na uroczystość zawarcia przez nas
Związku Małżeńskiego, która odbędzie się
dnia ${this.date}. roku o godzinie ..........
w kościele NMP Matki Kościoła w Bolęcinie`;
	} };

const Home = () => (
	<div className={style.home}>
		<h1 className={style.inviteTitle}>{template.title}</h1>
		<p className={style.invite}>{template.invite}</p>
		<a href="https://goo.gl/maps/8oP6fMBocAbWc28JA" ><img alt="mapa" className={style.image} src="/assets/icons/gmaps.png" /></a>
		<h4>Kościół ⛪</h4>
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2558.174086542099!2d19.476809!3d50.120464299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716ef015efad38d%3A0xf6602d27b1fd790a!2zS2_Fm2Npw7PFgiBOTVAgTWF0a2kgS2_Fm2Npb8WCYSB3IEJvbMSZY2luaWU!5e0!3m2!1spl!2spl!4v1578694248955!5m2!1spl!2spl"
			width="400" height="300" frameBorder="0" style="border:0;" allowFullScreen=""
		/>
		<h4>Sala 🍽</h4>
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2567.192160343996!2d19.450263515803154!3d49.95149773107111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47168dd60d73146d%3A0x2c8679593bd60fc4!2sKarpik!5e0!3m2!1spl!2spl!4v1578696377935!5m2!1spl!2spl"
			width="400" height="300" frameBorder="0" style="border:0;" allowFullScreen=""
		/>
	</div>
);

export default Home;
