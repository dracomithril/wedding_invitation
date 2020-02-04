import { Component } from 'preact';
import { encode } from '../../utils/encoder';
import style from './guests.css';

const getGuestLink = (code) => `${location.origin}/${code}`;

class Guests extends Component {
	state = {
		guestList: [],
		href: '',
		hidden: true,
		result: []
	};
	
	handleDescriptionChange = ({ currentTarget }) => {
		const guestList = currentTarget.value.split('\n').filter(l => l!=='');
		this.setState({ guestList });
	};
	
	handleLinkCreation = () => {
		const { guestList } =this.state;
		const codes = guestList.map(guest => {
			const code = encode(guest);
			const link = getGuestLink(code);
			return [guest, code, link];
		});
		this.setState({
			result: codes
		});
	};

	render(props, state) {
		const { guestList, result } = state;
		return (
			<div>
				<span>
				lista gości oddzielona nowymi liniami
				</span>
				<textarea
					className={style.list}
					value={guestList.join('\n')}
					onChange={this.handleDescriptionChange}
				/>
				<span>🧾{guestList.length}</span>
				<button type="button" onClick={this.handleLinkCreation}>utwórz</button>
				<ol>
					{result.map(([guest, code, link]) => (
						<li key={code} >
							<span>{guest}</span>
							<a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
						</li>))}
				</ol>
			</div>);
	}
}

export default Guests;