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
	function calculate(a,b){
		setResult(prevResult =>{
			if(result.sign === '+'){
				result.res === a + b
			} else if (result.sign === '-'){
				result.res = a - b
			} else if (result.sign === 'X'){
				result.res = a * b
			} else if(result.sign === '/'){
				result.res = a / b
			}
		})
	}

	return (
		<ContextResult.Provider value={result}>
			<div className="flex flex-col items-center">
				<h1 className="my-2 uppercase font-bold text-2xl">React calculator</h1>
				<Screen screenResult={result}></Screen>
				<Buttons></Buttons>
			</div>
		</ContextResult.Provider>
	)
}
