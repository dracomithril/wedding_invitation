import style from './home.css';

export function When({ day, date, hour }) {
	return (<div className={`${style.details_item} ${style.time}`}>
		<span className={style.day}>{day}</span>
		<span>{date}</span>
		<span>{hour}</span>
	</div>);
}