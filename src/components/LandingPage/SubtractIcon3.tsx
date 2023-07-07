import { memo, SVGProps } from 'react';

const SubtractIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 602 240' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0.999989 0.482427L0.999989 27.4339L1.04919 27.4621C0.316699 36.6633 6.03541 46.0038 18.2053 53.0301L323.536 229.313C346.495 242.568 383.717 242.568 406.675 229.313L584.771 126.489C598.187 118.744 603.763 108.186 601.5 98.1032V77.6063C599.89 84.7787 594.314 91.711 584.771 97.2205L406.675 200.045C383.717 213.299 346.495 213.299 323.536 200.045L18.2053 23.7615C7.04387 17.3175 1.30876 8.92688 0.999989 0.482427Z'
      fill='url(#paint0_linear_802_21210)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_802_21210'
        x1={0.986818}
        y1={25.5923}
        x2={601.94}
        y2={82.5908}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#8BD4FD' />
        <stop offset={0.25} stopColor='#DAE4FF' />
        <stop offset={0.5} stopColor='#769CFF' />
        <stop offset={0.796875} stopColor='#6633F9' />
        <stop offset={1} stopColor='#A16ED5' />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(SubtractIcon3);
export { Memo as SubtractIcon3 };
