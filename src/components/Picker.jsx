import Nought from '../assets/nought.svg?react';
import Cross from '../assets/cross.svg?react';

const Picker = ({ setStartModal, player1, setPlayer1 }) => {
	return (
		<section className='picker'>
			<div className=''>
				<Cross />
				<Nought />
			</div>
			<div className='player-selection'>
				<p>PICKER PLAYER 1&apos;s MARK</p>
				<div>
					<div
						onClick={() => setPlayer1('X')}
						className={player1 === 'X' ? 'active' : 'inactive'}
					>
						<Cross />
					</div>
					<div
						onClick={() => setPlayer1('O')}
						className={player1 !== 'X' ? 'active' : 'inactive'}
					>
						<Nought />
					</div>
				</div>
				<p>REMEMBER: X GOES FIRST</p>
			</div>

			<button onClick={() => setStartModal(false)}>START GAME</button>
		</section>
	);
};
export default Picker;
