import React from 'react';

interface BrandLogoProps {
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  href?: string;
  size?: 'sm' | 'md';
}

export const BrandMarkSvg: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <rect
      x="1"
      y="1"
      width="38"
      height="38"
      rx="9"
      fill="#3B82F6"
      stroke="#F5CC4C"
      strokeWidth="1.75"
    />
    <path
      d="M8.5 19L20 9.5L31.5 19"
      stroke="#F5CC4C"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="16.2"
      cy="25"
      r="3.2"
      stroke="#F5CC4C"
      strokeWidth="2.2"
    />
    <path
      d="M19.4 25H28.5M25.2 25V28M28.5 25V27.6"
      stroke="#F5CC4C"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </svg>
);

export const BrandLogo: React.FC<BrandLogoProps> = ({
  onClick,
  href = '/',
  size = 'md',
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="inline-flex items-center gap-2.5 text-[#1E56A0] whitespace-nowrap shrink-0 group focus-visible:outline-2 focus-visible:outline-[#F5CC4C] rounded-md"
    >
      <BrandMarkSvg
        className={size === 'sm' ? 'w-8 h-8 shrink-0' : 'w-9 h-9 shrink-0'}
      />
      <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#1E56A0] group-hover:text-[#2563EB] transition-colors whitespace-nowrap shrink-0">
        RockyStay Suites
      </span>
    </a>
  );
};
