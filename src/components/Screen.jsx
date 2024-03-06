import { useContext } from 'react'
import { ContextResult } from '../utils/Context.js'

export default function Screen() {
	const result = useContext(ContextResult)
	return (
		<h2 className="w-40 h-8 text-center my-2 mx-3 uppercase font-bold text-xl border-4 border-stone-500 ">
			{result.res}
		</h2>
	)
}
