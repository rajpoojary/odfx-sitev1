import { memo, SVGProps } from 'react';

const SubtractIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 46 46' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M7.3258 7.3258C11.4829 3.16874 17.121 0.833333 23 0.833333C28.879 0.833333 34.5171 3.16874 38.6742 7.3258C42.8313 11.4829 45.1667 17.121 45.1667 23C45.1667 28.879 42.8313 34.5171 38.6742 38.6742C34.5171 42.8313 28.879 45.1667 23 45.1667C17.121 45.1667 11.4829 42.8313 7.3258 38.6742C3.16874 34.5171 0.833333 28.879 0.833333 23C0.833333 17.121 3.16874 11.4829 7.3258 7.3258ZM31.7372 28.8751H26.0007V44.9401C25.0172 45.0731 24.0208 45.1664 23 45.1664C21.8707 45.1664 20.7705 45.0556 19.6843 44.8922V28.8751H14.1998V23.0476H19.6843V19.1707C19.6843 12.7517 22.8122 9.93425 28.1473 9.93425C30.6575 9.93425 32.0066 10.1167 32.6595 10.2049L32.6938 10.2096V15.2951H29.055C26.7905 15.2951 25.9995 17.4417 25.9995 19.8626V23.0476H32.6378L31.7372 28.8751Z'
      fill='url(#paint0_linear_802_21141)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_802_21141'
        x1={43.3225}
        y1={43.9748}
        x2={6.94296}
        y2={7.75202}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#6633F9' />
        <stop offset={1} stopColor='#8A33F9' />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(SubtractIcon);
export { Memo as SubtractIcon };
