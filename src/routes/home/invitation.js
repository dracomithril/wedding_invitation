import style from './home.css';
import { decode } from '../../utils/encoder';

const Guests = ({ guests }) => {
	const names = guests ? decode(guests) : 'Szanownych Państwa';
	return (<div className={style.guests}>
		<span>{names}</span>
	</div>);
};

export function Invitation({ guests }) {
	return (<section className={style.invite}>
		<span>{'wraz z Rodzicami maja zaszczyt zaprosić'}</span>
		<Guests guests={guests} />
		<span>{'na ślub kościelny oraz przyjęcie weselne'}</span>
	</section>);
}
