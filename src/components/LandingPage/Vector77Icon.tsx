import { memo, SVGProps } from 'react';

const Vector77Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 223 435' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M222.446 361.289L110.187 434.764L0.546875 361.289V0.710327L222.446 48.2778V361.289Z'
      fill='url(#paint0_linear_802_21217)'
      fillOpacity={0.3}
    />
    <defs>
      <linearGradient
        id='paint0_linear_802_21217'
        x1={81.7479}
        y1={166.347}
        x2={205.233}
        y2={361.714}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#F933D9' stopOpacity={0} />
        <stop offset={1} stopColor='#9633F9' />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(Vector77Icon);
export { Memo as Vector77Icon };
