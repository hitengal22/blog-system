'use client';
import { addComment } from "@/lib/Network";
import Button from "./ui/Button";
import Input from "./ui/input";

export default function CommentForm({ postId }: { postId: number }) {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const comment = formData.get("comment") as string;
        console.log("Name:", name);
        console.log("Comment:", comment);
        // Call the API to add the comment
        addComment(postId, name, comment)
            .then((response) => {
                if (response.status === 'success') {
                    console.log("Comment added successfully:", response.data);
                    // Optionally, you can reset the form or update the UI
                    e.currentTarget.reset();
                } else {
                    console.error("Failed to add comment:", response.error as string);
                }
            })
            .catch((error) => {
                console.error("Error adding comment:", error);
            });
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col justify-center mb-10">
            <div className="flex items-center mb-4 gap-4">
                <Input type="text" name="name" placeholder="Add a name" />
                <Input type="text" name="comment" placeholder="Add a comment" />
                <Button type="submit">Submit</Button>
            </div>
        </form>
    )
}