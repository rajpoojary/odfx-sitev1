import { memo, SVGProps } from 'react';

const Vector76Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 224 403' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.548828 25.437V328.325L113.938 402.764L223.948 328.325V25.437L113.938 0.196289L0.548828 25.437Z'
      fill='url(#paint0_linear_802_21216)'
      fillOpacity={0.3}
    />
    <defs>
      <linearGradient
        id='paint0_linear_802_21216'
        x1={112.248}
        y1={122.391}
        x2={-24.4178}
        y2={322.388}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#7733F9' stopOpacity={0} />
        <stop offset={1} stopColor='#7733F9' />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(Vector76Icon);
export { Memo as Vector76Icon };
