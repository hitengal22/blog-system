import Link from "next/link";

export default function Posts() {
    return (
        <>
            <div className="container mx-auto px-5 mb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Array.from({ length: 9 }, (_, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg p-4">
                            <h2 className="text-xl font-bold mb-2"><Link href={`/blog/${`post-title-${index+1}`}`}>Post Title {index + 1}</Link></h2>
                            <p className="text-gray-700">This is a brief description of the post.</p>
                            <span className="text-xs text-gray-500">Willamm</span>
                            <span className="text-xs text-gray-500 block">Posted 2 hours ago</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}