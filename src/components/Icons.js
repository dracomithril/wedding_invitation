
const icons = {
	church: '/assets/svg/church.svg',
	github: '/assets/svg/github.svg',
	roadmap: '/assets/svg/roadmap.svg',
	wine_glasses: '/assets/svg/wine_glasses.svg'
};

const Icon = ({ name, size = 50 }) => (<img alt={name} src={icons[name]} style={{ height: size }} />);

export default Icon;