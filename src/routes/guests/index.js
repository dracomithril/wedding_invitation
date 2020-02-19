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
		const guestList = currentTarget.value.split('\n').filter(l => l!=='').map((guest) => ({
			guestName: guest,
			party: false
		}));
		this.setState({ guestList });
	};

	handleLinkCreation = () => {
		const { guestList } =this.state;
		const codes = guestList.map(guest => {
			const code = encode(JSON.stringify(guest));
			const link = getGuestLink(code);
			return [guest.guestName, code, link];
		});
		this.setState({
			result: codes
		});
	};

	mapResults = ([guest, code, link]) => (
		<li key={code} >
			<span>{guest}</span>
			<a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
		</li>);

	handleChange = (id) => ({ currentTarget }) => {
		this.setState(({ guestList }) => {
			const newGuestList =  guestList.map((guest, index) => {
				if (index!==id){
					return guest;
				}
				return { ...guest, party: currentTarget.checked };
			});
			return { guestList: newGuestList };
		});
	};

	render(props, state) {
		const { guestList, result } = state;

		return (
			<div className={style.container}>
				<span>
				lista gości oddzielona nowymi liniami
				</span>
				<textarea
					className={style.list}
					value={guestList.map(({ guestName }) => guestName).join('\n')}
					onChange={this.handleDescriptionChange}
				/>
				<span>🧾{guestList.length}</span>
				<table>
					<thead>
						<tr>
							<th>id</th>
							<th>party</th>
							<th>goście</th>
						</tr>
					</thead>
					<tbody>
						{
							guestList.map(({ party, guestName }, id) => (
								<tr key={encode(guestName)}>
									<td>{id+1}</td>
									<td>
										<input
											type="checkbox"
											checked={party}
											onClick={this.handleChange(id)}
										/>
									</td>
									<td>{guestName}</td>
								</tr>))
						}
					</tbody>
				</table>
				<button type="button" onClick={this.handleLinkCreation}>utwórz</button>
				<ol>
					{result.map(this.mapResults)}
				</ol>
			</div>);
	}
}

export default Guests;
