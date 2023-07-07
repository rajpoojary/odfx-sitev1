import { memo, SVGProps } from 'react';

const _1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M11 9H39L53 22V31V54H11V9Z' stroke='white' strokeWidth={4} strokeLinejoin='round' />
    <path d='M39 9V23.5H53' stroke='white' strokeWidth={4} strokeLinejoin='round' />
    <path
      d='M27 34L21.5 39.5L26.5 44.5L27 45'
      stroke='white'
      strokeWidth={4}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M36 34L41.5 39.5L36.5 44.5L36 45'
      stroke='white'
      strokeWidth={4}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(_1Icon);
export { Memo as _1Icon };
