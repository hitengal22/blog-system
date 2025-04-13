export default function Label(props: React.LabelHTMLAttributes<HTMLLabelElement>) {
    const { className, children, ...rest } = props;
    return (
        <label
            className={`block text-sm font-medium text-gray-700 ${className}`}
            {...rest}
        >
            {children}
        </label>
    );
}