import { useState } from 'react'
import Screen from './components/Screen'
import Buttons from './components/Buttons'

export default function App() {
	const [result, setResult] = useState(null)

  

	return (
		<div className="flex flex-col items-center">
			<h1 className="my-2 uppercase font-bold text-2xl">React calculator</h1>
			<Screen result={result}></Screen>
			<Buttons></Buttons>
		</div>
	)
}
