import { memo, SVGProps } from 'react';

const Vector81Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1084 631' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0.726562 0.0834961L1083.99 630.548' stroke='url(#paint0_linear_802_21172)' />
    <defs>
      <linearGradient
        id='paint0_linear_802_21172'
        x1={14.2205}
        y1={0.0834223}
        x2={995.526}
        y2={550.709}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopOpacity={0.13} />
        <stop offset={0.472242} stopOpacity={0.527758} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(Vector81Icon);
export { Memo as Vector81Icon };
