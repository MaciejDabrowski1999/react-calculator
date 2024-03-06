import { useState } from 'react'
import Screen from './components/Screen'
import Buttons from './components/Buttons'
import { ContextResult } from './utils/Context.js'

export default function App() {
	const [result, setResult] = useState({
		num1: null,
		sign: '',
		res: null,
	})

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
