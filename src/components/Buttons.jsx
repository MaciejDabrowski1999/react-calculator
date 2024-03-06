import Button from './Button'
import { useContext } from 'react'

import { signs } from '../utils/signs.js'
import { ContextResult } from '../utils/Context.js'

export default function Buttons() {
	const result = useContext(ContextResult)
	function handleClick(e) {
		const numberOne = e.target.innerHTML
		const prevNumOne = result.num1
		result.num1 = [prevNumOne, ...numberOne]
		console.log(result.num1)
	}
	return (
		<ul className="flex flex-wrap gap-2.5 w-[190px] h-64">
			{signs.flat().map((sign, index) => {
				return (
					<li key={index}>
						<Button sign={sign} handleClick={handleClick}></Button>
					</li>
				)
			})}
		</ul>
	)
}
