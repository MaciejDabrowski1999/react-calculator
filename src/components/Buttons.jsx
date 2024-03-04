import Button from './Button'

import { signs } from '../utils/signs.js'

export default function Buttons() {
	return (
		<ul className="flex flex-wrap gap-2.5 w-[190px] h-64">
			{signs.flat().map((sign, index) => {
				return (
					<li key={index}>
						<Button sign={sign}></Button>
					</li>
				)
			})}
		</ul>
	)
}
