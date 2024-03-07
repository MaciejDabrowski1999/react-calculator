import { useState } from 'react'
import Screen from './components/Screen'
import Buttons from './components/Buttons'
import { ContextResult } from './utils/Context.js'

export default function App() {
	const [result, setResult] = useState({
		num: null,
		sign: '',
		res: null,
	})

	function clickNumHandler(e){
		let num= e.target.innerHTML
		setResult({...result,
		num: result.num === 0 && num === '0' ? '0' : result.num % 1 === 0 ? Number(result.num + num) : result.num + num, 
	res:  !result.sign ? '0' : result.res})
	}

	const signClickHandler = (e) => {
		e.preventDefault();
		const value = e.target.innerHTML;
	  
		setResult({
		  ...result,
		  sign: value,
		  res: !result.res && result.num ? result.num : result.res,
		  num: 0,
		});
	  };

	return (
		<ContextResult.Provider value={result}>
			<div className="flex flex-col items-center">
				<h1 className="my-2 uppercase font-bold text-2xl">React calculator</h1>
				<Screen screenResult={result}></Screen>
				<Buttons calc={clickNumHandler}></Buttons>
			</div>
		</ContextResult.Provider>
	)
}
