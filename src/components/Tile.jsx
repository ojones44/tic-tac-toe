import Nought from '../assets/nought.svg?react';
import Cross from '../assets/cross.svg?react';

const Tile = ({
	sprite,
	position,
	setBoard,
	xIsNext,
	setXIsNext,
	gameOver,
}) => {
	const handleClick = () => {
		if (sprite || gameOver) return;

		setBoard((prevValues) => {
			const newBoard = [...prevValues];
			newBoard[position] = xIsNext ? 'X' : 'O';
			return newBoard;
		});

		setXIsNext(!xIsNext);
	};

	return (
		<div onClick={handleClick} className='div-flex-centre tile'>
			{sprite && (sprite === 'X' ? <Cross /> : <Nought />)}
		</div>
	);
};
export default Tile;
