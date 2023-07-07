import { memo, SVGProps } from 'react';

const Vector89Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 346 310' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M302.707 198.803L135.65 298.582C123.316 305.949 108.749 308.645 94.5961 306.182L24.2965 293.948L0 279.401L89.0871 0L304.167 144.785C323.626 157.884 322.845 186.775 302.707 198.803Z'
      fill='url(#paint0_linear_802_21103)'
      fillOpacity={0.6}
    />
    <defs>
      <linearGradient
        id='paint0_linear_802_21103'
        x1={255.5}
        y1={170.5}
        x2={183.896}
        y2={400.369}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#6633F9' stopOpacity={0.43} />
        <stop offset={1} stopColor='#6633F9' stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(Vector89Icon);
export { Memo as Vector89Icon };
