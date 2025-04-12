const Post = require('../models/postModel');

// Get all posts with pagination
exports.getAllPosts = async (req, res) => {
    // Extract page and limit from query parameters, with default values
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const offset = (page - 1) * limit; // Calculate the starting point for fetching posts

    try {
        // Fetch posts and the total count of posts from the database
        const [posts] = await Post.getAllPosts(limit, offset);
        const [countResult] = await Post.getTotalPostCount();
        const total = countResult[0].total; // Total number of posts in the database

        // Respond with the posts, total count, current page, and total pages
        res.status(200).json({
            status: 'success',
            data: { posts, total, page, totalPages: Math.ceil(total / limit) }
        });
    } catch (err) {
        res.status(500).json({ success: 'false', error: 'Error fetching posts', data: err });
    }
};

// Get a single post by its ID
exports.getPostById = async (req, res) => {
    const { id } = req.params; // Extract the post ID from the request parameters

    try {
        // Fetch the post with the given ID
        const [post] = await Post.getPostById(id);

        // If no post is found, return a 404 error
        if (post.length === 0) return res.status(404).json({ error: 'Post not found' });

        // Respond with the post data
        res.status(200).json({
            status: 'success',
            data: post[0] // Return the first post object from the result
        });
    } catch (err) {
        res.status(500).json({ error: 'Error fetching post', details: err });
    }
};

// Search for posts based on a query string
exports.searchPosts = async (req, res) => {
    const { query } = req.params; // Extract the search query from the request parameters

    try {
        // Search for posts that match the query
        const [results] = await Post.searchPosts(query);

        // Respond with the search results
        res.json(results);
    } catch (err) {
        res.status(500).json({ error: 'Search failed', details: err });
    }
};
