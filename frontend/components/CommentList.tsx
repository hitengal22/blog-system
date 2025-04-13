import { getComments } from "@/lib/Network";
import TimeAgo from "./TImeAgo";
import { Comment, CommentResponse } from "@/lib/types";

export default async function CommentList({postId}: {postId: number}) {
    const comments: CommentResponse = await getComments(postId); // Replace with actual post ID
    if (comments.status !== 'success') { return (<p>Something went wrong</p>) }
    return (
        <div className="w-full shadow-md rounded-lg p-4">
            <ul>
                {comments.data.map((comment: Comment) => (
                    <li key={comment.id} className="mb-4">
                        <p className="text-sm"><strong>{comment.name}:</strong> {comment.comment}</p>
                        <span className="text-xs text-gray-500">Posted <TimeAgo date={comment.created_at} /></span>
                    </li>
                ))}
            </ul>
        </div>
    )
}