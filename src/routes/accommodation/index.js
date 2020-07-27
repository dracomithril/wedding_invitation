import { Header } from '../home/header';
import React from 'preact/compat';
import style from './style.scss';


const Accommodation = () => (
	<div className={style.base}>
		<Header />
		<div>
			<h1>Drodzy goście mamy dla was kilka informacji odnośnie noclegu</h1>
			<h2 style={{ color: 'green', fontWeight: 800 }}>SOBOTA 1.08</h2>
			<h3>Śniadanie od 9 do 11</h3>
			<h3>Wymeldowanie do 12</h3>
		</div>
	</div>);

export default Accommodation;
