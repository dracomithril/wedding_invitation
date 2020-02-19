import style from './when.css';
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';

export const When = ({ when }) => {
	const date = new Date(when);
	return (
		<div className={`${style.block} ${style.time}`}>
			<span className={style.day}>{format(date, 'EEEE', { locale: pl })}</span>
			<span className={style.date}>{format(date, 'd.MM')}</span>
			<span className={style.year}>{format(date, 'yyyy')}</span>
			<span className={style.time}>{`godz. ${format(date, 'HH:mm')}`}</span>
		</div>);
};
