import style from './home.css';

export function Header({ who }) {
	return (
		<header className={style.header}>
			<div className={style.names}>
				<span>{who.bride}</span>
				<span>&</span>
				<span>{who.groom}</span>
			</div>

		</header>);
}
