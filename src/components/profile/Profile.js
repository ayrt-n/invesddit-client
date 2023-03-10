import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FeedController from '../FeedController';
import PostPreview from '../post/PostPreview';
import BackToTopWidget from '../BackToTopWidget';
import { usePostFeed } from '../../hooks/usePostFeed';
import { getAccount } from '../../services/accountService';
import ProfileWidget from './ProfileWidget';
import EmptyProfileFeed from './EmptyProfileFeed';
import PostLoading from '../post/PostLoading';

function Profile() {
  let { username } = useParams();
  const [account, setAccount] = useState(null);
  const {posts, setPosts, isLoading} = usePostFeed(`api/v1/accounts/${username}/posts`);

  useEffect(() => {
    getAccount(username).then(data => {
      setAccount(data.data);
    })
  }, [username])

  const updatePostVoteStatus = (id, status, changeInScore) => {
    setPosts((prev) => (
      prev.map((post) => {
        if (post.id === id) {
          const updatedScore = parseInt(post.score) + changeInScore;
          return { ...post, vote_status: status, score: updatedScore };
        } else {
          return post;
        }
      })
    ));
  };

  return (
    <div className="py-[20px] px-[24px]">
      <div className="mx-auto max-w-min flex">
        {/* Main Post Feed */}
        <div className="w-[640px]">
          <FeedController />

          {isLoading ?
            <>
              <PostLoading />
              <PostLoading />
              <PostLoading />
            </> :
            posts.length > 0 ?
            posts.map((post) => (
                <PostPreview post={post} key={post.id} updatePostVoteStatus={updatePostVoteStatus} />
            )) :
            <EmptyProfileFeed username={username} />
          }
        </div>

        {/* Feed Sidebar */}
        <div className="w-[312px] ml-[24px] hidden md:block">
          <ProfileWidget account={account} />
          <div className="sticky top-[calc(100vh-8px)] translate-y-[-100%]">
            <BackToTopWidget />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;
