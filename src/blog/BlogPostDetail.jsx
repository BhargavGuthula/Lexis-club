import {React , useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { INITIAL_BLOG_POSTS } from './mockData';
import './BlogPostDetail.css';

const BlogPostDetail = () => {
  const { id } = useParams();
  const post = INITIAL_BLOG_POSTS.find(post => post.id === parseInt(id));

    useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
   

  if (!post) {
    return (
      <div className="blog-post-detail not-found">
        <h2>Post not found</h2>
        <Link to="/blog">Back to Blog</Link>
      </div>
    );
  }

  return (
    <>

    <div className="blog-post-detail">
      <article>
        <h1>{post.title}</h1>
        <div className="post-meta">
          <span className="author">By {post.author}</span>
          <span className="date">{post.date}</span>
        </div>
        <div className="featured-image">
          <img src={post.coverImage} alt={post.title} />
        </div>

        <div className="post-content">
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
                  {post.additionalImages && post.additionalImages.length > 0 && (
          <div className="image-gallery">
            {post.additionalImages.map((image, index) => (
              <div key={index} className="gallery-image">
                <img src={image} alt={`${post.title} - Additional Image ${index + 1}`} />
              </div>
            ))}
          </div>
        )}
        <Link to="/blog" className="back-link">← Back to Blog</Link>
        </div>
      </article>
    </div>
    </>
  );
};

export default BlogPostDetail;
