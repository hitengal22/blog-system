import { Post as PostType } from "@/lib/types";
import Link from "next/link";
import TimeAgo from "./TImeAgo";

export default function Post({ post }: { post: PostType }) {
    return (
        <div key={post.id} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-bold mb-2"><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
            <p className="text-gray-700">{post.content.substr(0,100)}</p>
            <span className="text-xs text-gray-500">{post.author}</span>
            <span className="text-xs text-gray-500 block">Posted <TimeAgo date={post.created_at} /></span>
        </div>
    )
}