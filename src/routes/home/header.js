import style from './home.css';

export function Header({ who }) {
	return (
		<header className={style.stage1}>
			<span>{who.bride}</span>
			<span>i</span>
			<span>{who.groom}</span>
		</header>);
}