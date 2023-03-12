import React from 'react';
import PostResult from './PostResult';

function PostsWidget({ posts, loading, searchTerm }) {
  if (loading) return null;

  return (
    <div className="rounded-[4px] bg-canvas-light max-w-full mt-[1px]">
      {posts.length > 0 ?
        posts.map(post => (
          <PostResult post={post} key={post.id} searchTerm={searchTerm} />
        )) :
        null
      }
    </div>
  );
}

export default PostsWidget;
