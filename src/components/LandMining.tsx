/* eslint-disable quotes */
import {useState} from 'react';

let init = Array(4).fill(Array(4).fill(''));

function LandMining() {
	// eslint-disable-next-line prefer-spread
	let [matrix, setMatrix] = useState(init);

	const rndr = (
		<div>
			<span>
				{
					matrix.map((line, lIndex) => (<span key={`line-${lIndex}`}>{
						line.map((cell, cIndex) => (<div key={`cell-${lIndex}-${cIndex}`}>{lIndex + ', ' + cIndex}</div>))
					}</span>))}
			</span>
		</div>);

	return (
		<>
			<h1>
				Land Mines -
			</h1>
			{
				rndr
			}
		</>
	);
}

export default LandMining;
