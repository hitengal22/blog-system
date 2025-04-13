import Post from "./Post";

export default function Posts({ posts }: { posts: any[] }) {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {posts && posts.map((post) => <Post key={post.id} post={post} />)}
            </div>
        </>
    )
}