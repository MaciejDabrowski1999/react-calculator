export default function Button({ handleClick, sign }) {
	let moduleClass = 'size-10 border-2 border-stone-300 hover:bg-stone-400'
	if (sign === '=') {
		moduleClass += ' size-10 w-[90px]'
	}
	return (
		<button onClick={handleClick} className={moduleClass}>
			{sign}
		</button>
	)
}
