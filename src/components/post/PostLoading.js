import React from 'react';

function PostLoading() {
  return (
    <div className="bg-canvas-light border-[1px] border-post-border mb-[10px] flex rounded-[4px]cursor-pointer">
      {/* Fake Post Sidebar */}
      <div className="bg-post-sidebar min-w-[40px] flex flex-col items-center py-[8px] rounded-tl-[4px] rounded-bl-[4px]">
        <div className="flex items-center justify-items-center">
          <svg className="w-[24px] h-[24px] rounded-[2px]" viewBox="0 0 24 24">
            <path fill="currentColor" d="M16,13V21H8V13H2L12,3L22,13H16M7,11H10V19H14V11H17L12,6L7,11Z" />
          </svg>
        </div>

        <div className="my-[4px] h-[16px] text-[12px] leading-[16px] font-bold text-center" />
        
        <div className="flex items-center justify-items-center">
          <svg className="w-[24px] h-[24px] rounded-[2px]" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22,11L12,21L2,11H8V3H16V11H22M12,18L17,13H14V5H10V13H7L12,18Z" />
          </svg>
        </div>
      </div>

      {/* Fake Post Content */}
      <div className="animate-pulse w-full">
        <div className="h-[14px] w-[50%] bg-slate-100 rounded-[4px] mt-[8px] mx-[8px] mb-[16px]" />
        <div className="h-[24px] w-[60%] bg-slate-100 rounded-[4px] mt-[8px] mx-[8px] mb-[16px]" />
        <div className="h-[250px] w-[90%] bg-slate-100 rounded-[4px] mt-[8px] mx-[8px] mb-[16px]" />
        <div className="h-[24px] w-[25%] bg-slate-100 rounded-[4px] mt-[8px] mx-[8px] mb-[16px]" />
      </div>
    </div>
  );
}

export default PostLoading;
