export default function Button({ children, ...props }) {
	return (
		<button {...props} className="size-10 border-2 border-stone-300">
			{children}
		</button>
	)
}
