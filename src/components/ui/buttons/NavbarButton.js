export default function NavbarButton({ children }) {
	return (
		<span className="flex h-11 justify-center items-center p-2 border-2 border-[#fcee06] hover:duration-300 hover:text-black rounded-2xl text-center w-28 cursor-pointer hover:bg-[#fcee06]">
			{children}
		</span>
	);
}
