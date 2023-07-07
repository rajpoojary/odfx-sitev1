import { memo, SVGProps } from 'react';

const Vector83Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 4 168' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0V167.924' stroke='url(#paint0_linear_802_21235)' strokeWidth={4} />
    <defs>
      <linearGradient id='paint0_linear_802_21235' x1={0.5} y1={0} x2={0.5} y2={167.924} gradientUnits='userSpaceOnUse'>
        <stop stopColor='white' />
        <stop offset={1} stopColor='white' stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(Vector83Icon);
export { Memo as Vector83Icon };
