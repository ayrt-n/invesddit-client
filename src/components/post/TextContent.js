import React from 'react';

function TextContent({ body }) {
  return (
    <div className="ml-[8px] mt-[12px] mb-[10px] pr-[16px]">
      <div className="text-[14px] leading-[21px] break-all whitespace-pre-line">
        {body}
      </div>
    </div>
  );
}

export default TextContent;
