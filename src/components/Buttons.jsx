import Button from './Button'
import { useContext } from 'react'

import { signs } from '../utils/signs.js'
import { ContextResult } from '../utils/Context.js'

export default function Buttons({calc}) {
	const result = useContext(ContextResult)

	return (
		<ul className="flex flex-wrap gap-2.5 w-[190px] h-64">
			{signs.flat().map((sign, index) => {
				return (
					<li key={index}>
						<Button sign={sign} handleClick={calc}></Button>
					</li>
				)
			})}
		</ul>
	)
}
