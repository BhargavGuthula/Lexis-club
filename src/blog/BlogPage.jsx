import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { APPROVED_AUTHORS, INITIAL_BLOG_POSTS } from './mockData';
import './BlogPage.css';

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState(INITIAL_BLOG_POSTS);
  const [isWriting, setIsWriting] = useState(false);
  const [newPost, setNewPost] = useState({ title: '', content: '', image: '' });
  
  // Mock authentication (replace with actual auth system)
  const currentUser = APPROVED_AUTHORS[0]; // For testing purposes
  const isApprovedAuthor = currentUser && APPROVED_AUTHORS.some(author => author.id === currentUser.id);

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      id: blogPosts.length + 1,
      ...newPost,
      author: currentUser.name,
      date: new Date().toISOString().split('T')[0]
    };
    setBlogPosts([post, ...blogPosts]);
    setNewPost({ title: '', content: '', image: '' });
    setIsWriting(false);
  };

  return (
    <div className="blog-page">
      <h1>Lexis Club Blog</h1>
      
      {isApprovedAuthor && (
        <div className="blog-actions">
          {!isWriting ? (
            <button 
              className="write-button"
              onClick={() => setIsWriting(true)}
            >
              Write New Post
            </button>
          ) : (
            <form className="bl og-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Post Title"
                value={newPost.title}
                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                required
              />
              <input
                type="url"
                placeholder="Image URL (optional)"
                value={newPost.image}
                onChange={(e) => setNewPost({ ...newPost, image: e.target.value })}
              />
              <textarea
                placeholder="Write your blog post..."
                value={newPost.content}
                onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                required
                rows="10"
              />
              <div className="form-actions">
                <button type="submit">Publish</button>
                <button 
                  type="button" 
                  className="cancel-button"
                  onClick={() => {
                    setIsWriting(false);
                    setNewPost({ title: '', content: '', image: '' });
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      )}

      <div className="blog-posts">
        {blogPosts.map(post => (
          <article key={post.id} className="blog-post">
            <Link to={`/blog/${post.id}`} className="blog-post-link">
              {post.coverImage && (
                <div className="post-image">
                  <img src={post.coverImage} alt={post.title} />
                </div>
              )}
              <div className="post-content">
                <h2>{post.title}</h2>
                <div className="post-meta">
                  <span className="author">By {post.author}</span>
                  <span className="date">{post.date}</span>
                </div>
                <p className="post-excerpt">
                  {post.content.length > 200 
                    ? `${post.content.substring(0, 200)}...` 
                    : post.content}
                </p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
