const Input = ({ 
	type,
	name,
	placeholder = '',
	required = false
}) => {
	return (
		<input required type={type} name={name} placeholder={placeholder} className="py-2 px-3 rounded-md border-2 border-gray-400 w-full" />
	);
};

export default Input;