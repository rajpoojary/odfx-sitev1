import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 42 42' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M37.3333 0H4.66667C2.08833 0 0 2.08833 0 4.66667V37.3333C0 39.9117 2.08833 42 4.66667 42H37.3333C39.9117 42 42 39.9117 42 37.3333V4.66667C42 2.08833 39.9117 0 37.3333 0ZM14 32.6667H8.113V16.3333H14V32.6667ZM10.9527 13.3397C9.15367 13.3397 7.952 12.1403 7.952 10.5397C7.952 8.939 9.15133 7.73967 11.151 7.73967C12.95 7.73967 14.1517 8.939 14.1517 10.5397C14.1517 12.1403 12.9523 13.3397 10.9527 13.3397ZM35 32.6667H29.302V23.7393C29.302 21.2707 27.783 20.7013 27.2137 20.7013C26.6443 20.7013 24.745 21.0817 24.745 23.7393C24.745 24.1197 24.745 32.6667 24.745 32.6667H18.858V16.3333H24.745V18.613C25.5033 17.283 27.0223 16.3333 29.8713 16.3333C32.7203 16.3333 35 18.613 35 23.7393V32.6667Z'
      fill='url(#paint0_linear_802_21140)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_802_21140'
        x1={40.2529}
        y1={40.8708}
        x2={5.78807}
        y2={6.55454}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#6633F9' />
        <stop offset={1} stopColor='#8A33F9' />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
