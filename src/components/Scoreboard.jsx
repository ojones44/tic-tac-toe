const Scoreboard = ({ xWinTotal, oWinTotal, ties }) => {
	return (
		<section className='scoreboard'>
			<div>
				<p>X</p>
				<h3>{xWinTotal}</h3>
			</div>
			<div>
				<p>TIES</p>
				<h3>{ties}</h3>
			</div>
			<div>
				<p>O</p>
				<h3>{oWinTotal}</h3>
			</div>
		</section>
	);
};

export default Scoreboard;
