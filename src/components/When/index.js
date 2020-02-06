import style from './when.css';

export const When = ({ day, date, year, hour }) => (
	<div className={`${style.block} ${style.time}`}>
		<span className={style.day}>{day}</span>
		<span className={style.date}>{date}</span>
		<span className={style.year}>{year}</span>
		<span className={style.time}>{hour}</span>
	</div>);
