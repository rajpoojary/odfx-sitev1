import { memo, SVGProps } from 'react';

const Vector79Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 460 516' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M459.898 0.17627L24.6384 253.663C13.9211 259.905 14.0728 275.439 24.9099 281.47L236.586 399.273C246.926 405.027 247.658 419.626 237.945 426.386L109.806 515.568'
      stroke='url(#paint0_linear_802_21191)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_802_21191'
        x1={652.56}
        y1={-20.0646}
        x2={480.794}
        y2={619.157}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopOpacity={0.13} />
        <stop offset={0.472242} stopOpacity={0.527758} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(Vector79Icon);
export { Memo as Vector79Icon };
