import React from 'react';
import EmptyFeed from './EmptyFeed';
import PillButton from './PillButton';
import { Link } from 'react-router-dom';

function EmptyHomeFeed() {
  return (
    <EmptyFeed>
      <div className="m-[16px] text-[18px] font-medium leading-[22px]">
        Invesddit gets better when you join communities. Explore all posts and find some that you love!
      </div>
      <PillButton as={Link} to="/?filter=all" additionalClasses="mx-[16px]">
        Browse Popular Posts
      </PillButton>
    </EmptyFeed>
  );
}

export default EmptyHomeFeed;
