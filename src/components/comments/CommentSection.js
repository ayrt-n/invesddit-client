import React, { useState, useEffect } from 'react';
import CommentController from './CommentController';
import CommentForm from './CommentForm';
import Comment from './Comment';
import { getComments } from '../../services/commentService';

function CommentSection({ postId }) {
  const [comments, setComments] = useState([]);
  const [sortBy, setSortBy] = useState('best');

  useEffect(() => {
    let searchParams = { sort_by: sortBy }

    getComments(postId, searchParams).then(data => setComments(data.data));
  }, [postId, sortBy]);

  return (
    <>
      <div className="my-[24px] mr-[40px] ml-[48px]">
        <CommentForm />
      </div>
      <div className="border-b-[1px] mx-[48px] mb-[4px] pr-[16px]">
        <CommentController sortBy={sortBy} setSortBy={setSortBy} />
      </div>
      <div className="pr-[16px] pb-[16px] mt-[16px] mr-[16px] ml-[10px]">
        {comments.map((comment) => {
          return (
            <div className="mt-[16px]" key={comment.id}>
              <Comment comment={comment} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CommentSection;
