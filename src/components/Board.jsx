import Tile from './Tile';

const Board = ({ board, setBoard, xIsNext, setXIsNext, gameOver }) => {
	return (
		<section className='board'>
			{board.map((sprite, i) => {
				return (
					<Tile
						key={i}
						sprite={sprite}
						position={i}
						setBoard={setBoard}
						xIsNext={xIsNext}
						setXIsNext={setXIsNext}
						gameOver={gameOver}
					/>
				);
			})}
		</section>
	);
};

export default Board;
