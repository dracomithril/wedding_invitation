import style from './home.scss';
import { genKey } from '../../utils/genKey';

export function Invitation({ guests, goingToParty }) {
	const names = guests.split('\\n');
	return (
		<section className={style.invite}>
			<span>{'wraz z Rodzicami maja zaszczyt zaprosić'}</span>
			<div className={style.guests}>
				{names.map(name => (<span key={genKey()}>{name.trimStart().trimEnd()}</span>))}
			</div>
			<span>{`na ślub kościelny ${goingToParty?'oraz przyjęcie weselne':''}`}</span>
		</section>);
}
