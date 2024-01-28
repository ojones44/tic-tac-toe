import Nought from '../assets/nought.svg?react';
import Cross from '../assets/cross.svg?react';
import Replay from '../assets/replay.svg?react';

const Header = ({ xIsNext, setXIsNext, setBoard, setGameOver }) => {
	const handleClick = () => {
		setBoard(Array.from(Array(9), () => null));
		setGameOver(false);
		setXIsNext(true);
	};

	return (
		<section className='header'>
			<div className='div-flex-centre players'>
				<Cross />
				<Nought />
			</div>
			<div className='div-flex-centre turn'>
				{xIsNext ? <Cross /> : <Nought />}
				<p>TURN</p>
			</div>
			<div onClick={handleClick} className=' div-flex-centre replay'>
				<Replay />
			</div>
		</section>
	);
};

export default Header;
