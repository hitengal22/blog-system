export default function Page() {
    return (
        <div className="container mx-auto px-5 mb-10">
            <h1 className="text-4xl font-bold text-center mt-10">Blogs</h1>
            <p className="text-center mt-4">Welcome to the blog section!</p>
            <div className="flex justify-center mt-10">
                <button className="px-4 py-2 border rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200">
                    Create New Blog
                </button>
            </div>
        </div>
    );
}