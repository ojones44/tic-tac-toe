import { useState, useEffect } from 'react';

import Header from './components/Header';
import Board from './components/Board';
import Scoreboard from './components/Scoreboard';
import Picker from './components/Picker';
import Result from './components/Result';

function App() {
	const [startModal, setStartModal] = useState(true);
	const [xIsNext, setXIsNext] = useState(true);
	const [board, setBoard] = useState(Array.from(Array(9), () => null));
	const [player1, setPlayer1] = useState('X');
	const [gameOver, setGameOver] = useState(false);
	const [winner, setWinner] = useState('');

	const [xWinTotal, setXWinTotal] = useState(0);
	const [oWinTotal, setOWinTotal] = useState(0);
	const [ties, setTies] = useState(0);

	useEffect(() => {
		checkWinner();
	}, [board]);

	const nextRound = () => {
		setWinner('');
		setBoard(Array.from(Array(9), () => null));
		setGameOver(false);
	};

	const resetGame = () => {
		setWinner('');
		setOWinTotal(0);
		setXWinTotal(0);
		setXIsNext(true);
		setBoard(Array.from(Array(9), () => null));
		setGameOver(false);
		setStartModal(true);
	};

	const checkWinner = () => {
		if (board.every((value) => value !== null)) {
			setWinner('TIE');
			setTies(ties + 1);
			setGameOver(true);
			return;
		}

		const winningCombos = [
			[board[0], board[1], board[2]],
			[board[3], board[4], board[5]],
			[board[6], board[7], board[8]],
			[board[0], board[3], board[6]],
			[board[1], board[4], board[7]],
			[board[2], board[5], board[8]],
			[board[0], board[4], board[8]],
			[board[2], board[4], board[6]],
		];

		winningCombos.forEach((combo) => {
			if (
				combo.every((value) => value === 'X') ||
				combo.every((value) => value === 'O')
			) {
				if (xIsNext) {
					// noughts won
					setWinner(player1 === 'X' ? 'P2' : 'P1');
					setOWinTotal(oWinTotal + 1);
				} else if (!xIsNext) {
					// crosses won
					setWinner(player1 === 'X' ? 'P1' : 'P2');
					setXWinTotal(xWinTotal + 1);
				}
				setGameOver(true);
			}
		});
	};

	return (
		<>
			{startModal && (
				<Picker
					setStartModal={setStartModal}
					player1={player1}
					setPlayer1={setPlayer1}
				/>
			)}
			{!startModal && (
				<main className='container'>
					<Header
						xIsNext={xIsNext}
						setXIsNext={setXIsNext}
						setBoard={setBoard}
						setGameOver={setGameOver}
					/>
					<Board
						board={board}
						setBoard={setBoard}
						xIsNext={xIsNext}
						setXIsNext={setXIsNext}
						gameOver={gameOver}
					/>
					<Scoreboard xWinTotal={xWinTotal} oWinTotal={oWinTotal} ties={ties} />
				</main>
			)}
			{gameOver && (
				<Result winner={winner} nextRound={nextRound} resetGame={resetGame} />
			)}
		</>
	);
}

export default App;
