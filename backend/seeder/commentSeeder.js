const db = require("../db");

async function CommentSeed() {
    const comments = [
        [1, 'John Doe', 'This is a comment on the first blog post.'],
        [1, 'Jane Smith', 'Great insights! I really enjoyed reading this.'],
        [2, 'Alice Johnson', 'Looking forward to more posts like this!'],
        [2, 'Bob Brown', 'Interesting perspective on the topic.']
    ];
    try {
        await db.query(`INSERT INTO comments (post_id, name, comment) VALUES ?`, [comments]);
    } catch (error) {
        console.error('Error seeding comments:', error);
    }
}

CommentSeed().then(() => {
    console.log('Comment seeding completed successfully!');
}).catch((error) => {
    console.error('Error during comment seeding:', error);
}).finally(() => {
    db.end(); // Close the database connection
})