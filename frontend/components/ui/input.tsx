export default function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
    const { className, ...rest } = props;
    return (
        <input
            className={`border border-gray-500 rounded-md p-2 w-full bg-white text-gray-700 hover:bg-background/90 hover:text-forground hover:cursor-pointer transition-colors duration-200 ${className}`}
            {...rest}
        />
    );
}