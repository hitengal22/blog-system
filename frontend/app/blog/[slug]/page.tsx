import CommentForm from "@/components/CommentForm";
import CommentList from "@/components/CommentList";
import TimeAgo from "@/components/TImeAgo";
import { getSignPost } from "@/lib/Network";
import { PostResponse } from "@/lib/types";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>
}): Promise<{ title: string, description: string, author: string, keywords: string }> {
    const { slug } = await params;
    const data = await getSignPost(slug);

    if (data.status !== 'success') { 
        return { 
            title: 'Something went wrong', 
            description: 'Something went wrong', 
            author: 'blog', 
            keywords: '' 
        } 
    }

    return {
        title: data.data.title,
        description: data.data.content,
        author: data.data.author,
        keywords: data.data.title.split(' ').join(','),
    };
}



export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    const data: PostResponse = await getSignPost(slug);

    if (data.status !== 'success') { return (<p>Something went wrong</p>) }

    return (
        <>
            <h1 className="text-4xl font-bold mt-10 border-b pb-2 ">{data.data.title}</h1>
            <p className="mt-4">{data.data.content}</p>
            <span className="text-xs text-gray-500">{data.data.author}</span>
            <span className="text-xs text-gray-500 block"><TimeAgo date={data.data.created_at} /></span>


            <div className="flex flex-col justify-center mt-10">
                <h3 className="text-2xl font-bold mb-4">Comments</h3>

                {/* Add comment form */}
                <CommentForm postId={data.data.id} />

                {/* Comment listing */}
                <CommentList postId={data.data.id} />
            </div>
        </>
    );
}