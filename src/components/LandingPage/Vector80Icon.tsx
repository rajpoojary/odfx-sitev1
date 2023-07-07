import { memo, SVGProps } from 'react';

const Vector80Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 411 246' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0.0332031 245.493L410.847 0.354126' stroke='url(#paint0_linear_802_21192)' />
    <defs>
      <linearGradient
        id='paint0_linear_802_21192'
        x1={583.081}
        y1={-9.27316}
        x2={537.408}
        y2={310.187}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopOpacity={0.13} />
        <stop offset={0.472242} stopOpacity={0.527758} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(Vector80Icon);
export { Memo as Vector80Icon };
