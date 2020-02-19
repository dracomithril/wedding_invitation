import style from './home.css';

export function Invitation({ guests, goingToParty }) {
	return (
		<section className={style.invite}>
			<span>{'wraz z Rodzicami maja zaszczyt zaprosić'}</span>
			<div className={style.guests}>
				<span>{guests}</span>
			</div>
			<span>{`na ślub kościelny ${goingToParty?'oraz przyjęcie weselne':''}`}</span>
		</section>);
}
