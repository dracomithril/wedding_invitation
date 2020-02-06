import style from './footer.css';
import Github from '../../assets/svg/github.svg';

export const Footer = () => (
	<footer className={style.block}>
		<span>storzone przez Michał Grezel 2020©</span>
		<a href={'https://github.com/dracomithril'} target="_blank" rel="noopener noreferrer" >
			<Github className={style.icon} />
		</a>
	</footer>);