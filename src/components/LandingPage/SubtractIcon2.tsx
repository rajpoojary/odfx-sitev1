import { memo, SVGProps } from 'react';

const SubtractIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 476 204' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M6.07399 0.878906H0.105469V69.098L6.45683 72.62C8.34515 79.4327 13.8373 85.977 22.9333 91.2286L200.141 193.54C223.099 206.794 260.321 206.794 283.279 193.54L452.049 96.1006C461.398 90.7029 466.94 83.9394 468.674 76.9226L475.39 73.2212V0.878906H469.237C469.753 9.93589 464.025 19.0895 452.05 26.0028L283.281 123.442C260.323 136.697 223.101 136.697 200.143 123.442L22.9351 21.1308C13.1099 15.4581 7.48951 8.27718 6.07399 0.878906Z'
      fill='url(#paint0_linear_802_21194)'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M6.07399 0.878906H0.105469V69.098L6.45683 72.62C8.34515 79.4327 13.8373 85.977 22.9333 91.2286L200.141 193.54C223.099 206.794 260.321 206.794 283.279 193.54L452.049 96.1006C461.398 90.7029 466.94 83.9394 468.674 76.9226L475.39 73.2212V0.878906H469.237C469.753 9.93589 464.025 19.0895 452.05 26.0028L283.281 123.442C260.323 136.697 223.101 136.697 200.143 123.442L22.9351 21.1308C13.1099 15.4581 7.48951 8.27718 6.07399 0.878906Z'
      fill='url(#paint1_linear_802_21194)'
      fillOpacity={0.6}
    />
    <defs>
      <linearGradient
        id='paint0_linear_802_21194'
        x1={14.9518}
        y1={47.8805}
        x2={469.937}
        y2={113.117}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#CFEBFB' />
        <stop offset={0.302083} stopColor='#DDE7FF' />
        <stop offset={0.625} stopColor='#D0C1FB' />
        <stop offset={1} stopColor='#D7B5FB' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_802_21194'
        x1={475.728}
        y1={19.0259}
        x2={31.5036}
        y2={11.5875}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#A589F3' />
        <stop offset={0.5} stopColor='#A88CF9' />
        <stop offset={0.619792} stopColor='#9077D9' stopOpacity={0.18} />
        <stop offset={1} stopColor='#8971CE' stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(SubtractIcon2);
export { Memo as SubtractIcon2 };
