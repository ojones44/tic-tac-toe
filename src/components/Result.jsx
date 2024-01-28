const Result = ({ winner, nextRound, resetGame }) => {
	const possibleResults = {
		P1: 'Player 1 Wins',
		P2: 'Player 2 Wins',
		TIE: "It's a tie",
	};

	return (
		<div className='result'>
			<p>{possibleResults[winner]}!</p>
			<p>ROUND OVER</p>
			<div className='result-buttons'>
				<button type='button' onClick={nextRound}>
					NEXT ROUND
				</button>
				<button type='button' onClick={resetGame}>
					QUIT
				</button>
			</div>
		</div>
	);
};
export default Result;
