import { memo, SVGProps } from 'react';

const UnionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 324 180' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M6.8653 92.3811H0.195312V8.41914H122.61C144.694 -2.70741 177.748 -2.70743 199.831 8.41914H323.674V92.3811H318.015C317.3 100.48 311.586 108.458 300.873 114.644L205.068 169.956C182.11 183.211 144.888 183.211 121.93 169.956L23.847 113.328C13.7143 107.478 8.05371 100.024 6.8653 92.3811Z'
      fill='url(#paint0_linear_802_21206)'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M6.8653 92.3811H0.195312V8.41914H122.61C144.694 -2.70741 177.748 -2.70743 199.831 8.41914H323.674V92.3811H318.015C317.3 100.48 311.586 108.458 300.873 114.644L205.068 169.956C182.11 183.211 144.888 183.211 121.93 169.956L23.847 113.328C13.7143 107.478 8.05371 100.024 6.8653 92.3811Z'
      fill='url(#paint1_linear_802_21206)'
      fillOpacity={0.6}
    />
    <defs>
      <linearGradient
        id='paint0_linear_802_21206'
        x1={10.2997}
        y1={41.7914}
        x2={322.554}
        y2={76.1227}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#CFEBFB' />
        <stop offset={0.302083} stopColor='#DDE7FF' />
        <stop offset={0.625} stopColor='#D0C1FB' />
        <stop offset={1} stopColor='#D7B5FB' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_802_21206'
        x1={323.904}
        y1={16.181}
        x2={21.5299}
        y2={12.2985}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#886ADD' />
        <stop offset={0.5} stopColor='#9379DC' />
        <stop offset={0.619792} stopColor='#9077D9' stopOpacity={0.18} />
        <stop offset={1} stopColor='#8971CE' stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(UnionIcon);
export { Memo as UnionIcon };
