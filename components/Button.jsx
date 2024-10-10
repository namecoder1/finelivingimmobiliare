import Link from "next/link";

const Button = ({
	bgColor = 'bg-secondary',
  bgText = 'text-white',
	link,
	text
}) => {
	return (
		<Link
      href={link}
      rel="noopener noreferrer"
      className={`${bgColor} ${bgText} px-4 py-2 text-sm font-semibold rounded-md shadow-md hover:${bgColor} transition-all duration-300`}
    >
      {text}
    </Link>
	);
};

export default Button;