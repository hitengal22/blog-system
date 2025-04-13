const db = require("../db");

async function PostSeed() {
    const posts = [
        ['First Blog Test', `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets`, 'John Doe', 'first-blog-test'],
        ['Second Blog Test', `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets`, 'John Doe', 'second-blog-test']
    ];
    try {
        
        await db.query(`INSERT INTO posts (title, content, author, slug) VALUES ?`, [posts]);
    } catch (error) {
        console.error('Error seeding posts:', error);
    }

}

PostSeed().then(() => {
    console.log('Post seeding completed successfully!');
}).catch((error) => {
    console.error('Error during post seeding:', error);
}).finally(() => {
    db.end(); // Close the database connection
})