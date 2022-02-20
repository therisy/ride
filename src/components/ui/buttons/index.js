export default function Button({ className, children }) {
	return (
		<span
			className={
				className +
				" flex w-28 justify-center items-center text-white p-2 hover:duration-200 rounded-2xl text-center cursor-pointer text-xl"
			}
		>
			{children}
		</span>
	);
}
