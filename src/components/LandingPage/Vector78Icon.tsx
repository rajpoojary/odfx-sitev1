import { memo, SVGProps } from 'react';

const Vector78Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 392 192' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.464844 58.7826V0.309082L228.362 132.624L391.788 38.5418V96.6405L228.362 191.473L0.464844 58.7826Z'
      fill='url(#paint0_linear_802_21215)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_802_21215'
        x1={196.126}
        y1={0.309082}
        x2={196.126}
        y2={191.473}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#7733F9' stopOpacity={0.08} />
        <stop offset={1} stopColor='#D9D9D9' stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(Vector78Icon);
export { Memo as Vector78Icon };
