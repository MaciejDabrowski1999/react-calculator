import Button from './Button'
import { useContext } from 'react'

import { signs } from '../utils/signs.js'
import { ContextResult } from '../utils/Context.js'

export default function Buttons() {
	const result = useContext(ContextResult)
	function handleClick(e) {
		let sign = e.target.innerHTML
		let numbers = '/([0-9])/g'

		if (sign === numbers) {
			result.num = sign
		} else if (sign === 'C') {
			;(result.res = null), (result.num = null), (result.sign = '')
		}

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
