import Link from "next/link";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    islink?: "true" | "false";
    href?: string;
    className?: string;
}
export default function Button({ children, className, ...props }: IProps) {
    const { islink, disabled } = props;
    return (
        <>
            {islink && !disabled ? (
                <Link
                    href={props.href as string}
                    className={`px-4 py-2 border rounded bg-white text-gray-700 hover:bg-foreground/90 hover:text-white hover:cursor-pointer transition-colors duration-200 ${className}`}
                >
                    {children}
                </Link>
            ) : (
                <button
                    className={`px-4 py-2 border rounded bg-white text-gray-700 hover:bg-foreground/90 hover:text-white hover:cursor-pointer transition-colors duration-200 ${className}`}
                    {...props}
                >
                    {children}
                </button>
            )}
        </>
    );
}