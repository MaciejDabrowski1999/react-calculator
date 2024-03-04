export default function Button({ onClick, sign }) {
	let moduleClass = 'size-10 border-2 border-stone-300'
	if (sign === '=') {
		moduleClass += ' size-10 w-[90px]'
	}
	return (
		<button onClick={onClick} className={moduleClass}>
			{sign}
		</button>
	)
}
