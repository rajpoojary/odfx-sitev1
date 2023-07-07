import { memo, SVGProps } from 'react';

const IntersectIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 476 142' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M475.39 4.79706L263.496 122.938C248.899 131.077 231.119 131.037 216.559 122.833L0.105469 0.873779V7.09806L6.45683 10.62C8.34515 17.4327 13.8373 23.977 22.9333 29.2286L200.141 131.54C223.099 144.794 260.321 144.794 283.279 131.54L452.049 34.1006C461.398 28.7029 466.94 21.9394 468.674 14.9226L475.39 11.2212V4.79706Z'
      fill='url(#paint0_linear_802_21199)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_802_21199'
        x1={0.10547}
        y1={15.6603}
        x2={471.97}
        y2={75.7631}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#8BD4FD' />
        <stop offset={0.25} stopColor='#DAE4FF' />
        <stop offset={0.5} stopColor='#769CFF' />
        <stop offset={0.796875} stopColor='#6633F9' />
        <stop offset={1} stopColor='#A16ED5' />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(IntersectIcon);
export { Memo as IntersectIcon };
