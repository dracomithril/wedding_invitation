import style from './home.css';
import Icon from '../../components/Icons';

export const Place = ({ place, name }) => (
	<div className={style.details_item}>
		<a href={place.url} target="_blank" rel="noopener noreferrer"><Icon name={name} /></a>
		<span>{place.name}</span>
	</div>
);