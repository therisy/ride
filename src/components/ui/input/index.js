export default function Input({ name, id, placeholder, type = "text" }) {
	return (
		<input
			className="p-2"
			type={type}
			name={name}
			id={id}
			placeholder={placeholder}
		></input>
	);
}
