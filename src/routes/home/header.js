import style from './home.scss';
import template from '../../template';

const { who } = template;

export function Header() {
	return (
		<header className={style.header}>
			<div className={style.names}>
				<span>{who.bride}</span>
				<span>&</span>
				<span>{who.groom}</span>
			</div>

		</header>);
}
