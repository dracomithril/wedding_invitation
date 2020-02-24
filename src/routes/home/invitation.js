import style from './home.css';
import { encode } from '../../utils/encoder';

export function Invitation({ guests, goingToParty }) {
	const names = guests.split('\\n');
	return (
		<section className={style.invite}>
			<span>{'wraz z Rodzicami maja zaszczyt zaprosić'}</span>
			<div className={style.guests}>
				{names.map(name => (<span key={encode(name)}>{name.trimStart().trimEnd()}</span>))}
			</div>
			<span>{`na ślub kościelny ${goingToParty?'oraz przyjęcie weselne':''}`}</span>
		</section>);
}
