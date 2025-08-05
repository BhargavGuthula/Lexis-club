import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Layout from './elements/Layout'
import EventsPage from './EventsPags.jsx'
import BlogPage from './blog/BlogPage.jsx'
import BlogPostDetail from './blog/BlogPostDetail.jsx'
import { INITIAL_BLOG_POSTS } from './blog/mockData.js'

// Mock data for blog posts (this would come from your backend)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/blog" element={<BlogPage initialPosts={INITIAL_BLOG_POSTS} />} />
          <Route path="/blog/:id" element={<BlogPostDetail posts={INITIAL_BLOG_POSTS} />} />
          <Route path="/mymuse" element={<div>My Muse Page</div>} />
          <Route path="/podcast" element={<div>Podcast Page</div>} />
          <Route path="/achievements" element={<div>Achievements Page</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
