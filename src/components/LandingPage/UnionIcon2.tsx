import { memo, SVGProps } from 'react';

const UnionIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 43 74' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0 24.6892L37.3445 15.7774L22.3193 31.1795L42.3523 42.7456L37.1121 51.8219L16.6398 40.0022L10.2573 62.6938L0 24.6892Z'
      fill='url(#paint0_linear_802_21245)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_802_21245'
        x1={-8.10978}
        y1={14.8347}
        x2={33.8615}
        y2={65.6018}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#8BD4FD' />
        <stop offset={0.25} stopColor='#F8FAFF' />
        <stop offset={1} stopColor='#0085FF' />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(UnionIcon2);
export { Memo as UnionIcon2 };
