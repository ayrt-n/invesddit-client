import React from 'react';
import PillButton from '../PillButton';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/invesddit-logo.svg';

function AccountTooltip({ community }) {
  return (
    <div className="absolute top-full bg-canvas-light rounded-[4px] shadow-[0_1px_3px_0px_rgba(0,0,0,0.2)] max-w-[380px] min-w-[240px] z-50 cursor-auto">
      <div className="p-[12px]">
        <div className="w-full flex">
          <img src={logo} className="rounded-full h-[32px] w-[32px] mr-[8px] align-middle shrink-0" alt="invesddit logo" />
          <Link className="text-[16px] font-medium leading-[20px] items-center flex">
            {`c/${community.sub_dir}`}
          </Link>
        </div>
        <div className="py-[8px]">
          <div className="text-[16px] font-medium leading-[20px]">
            {community.memberships_count}
          </div>
          <div className="text-[12px] leading-[16px] text-meta-text">
            Members
          </div>
        </div>
        {community.description &&
          <div className="text-[12px] leading-[16px] break-words py-[8px]">
            {community.description}
          </div>
        }
        <PillButton as={Link} to={`/c/${community.sub_dir}`}>
          View Community
        </PillButton>
      </div>
    </div>
  );
}

export default AccountTooltip;
