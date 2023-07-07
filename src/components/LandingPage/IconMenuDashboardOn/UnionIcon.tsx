import { memo, SVGProps } from 'react';

const UnionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M2 -0.75C0.481217 -0.75 -0.75 0.481217 -0.75 2V6C-0.75 7.51878 0.481217 8.75 2 8.75H6C7.51878 8.75 8.75 7.51878 8.75 6V2C8.75 0.481217 7.51878 -0.75 6 -0.75H2ZM0.75 2C0.75 1.30964 1.30964 0.75 2 0.75H6C6.69036 0.75 7.25 1.30964 7.25 2V6C7.25 6.69036 6.69036 7.25 6 7.25H2C1.30964 7.25 0.75 6.69036 0.75 6V2ZM2 9.1499C0.481217 9.1499 -0.75 10.3811 -0.75 11.8999V15.8999C-0.75 17.4187 0.481217 18.6499 2 18.6499H6C7.51878 18.6499 8.75 17.4187 8.75 15.8999V11.8999C8.75 10.3811 7.51878 9.1499 6 9.1499H2ZM0.75 11.8999C0.75 11.2095 1.30964 10.6499 2 10.6499H6C6.69036 10.6499 7.25 11.2095 7.25 11.8999V15.8999C7.25 16.5903 6.69036 17.1499 6 17.1499H2C1.30964 17.1499 0.75 16.5903 0.75 15.8999V11.8999ZM9.15015 2C9.15015 0.481217 10.3814 -0.75 11.9001 -0.75H15.9001C17.4189 -0.75 18.6501 0.481217 18.6501 2V6C18.6501 7.51878 17.4189 8.75 15.9001 8.75H11.9001C10.3814 8.75 9.15015 7.51878 9.15015 6V2ZM11.9001 0.75C11.2098 0.75 10.6501 1.30964 10.6501 2V6C10.6501 6.69036 11.2098 7.25 11.9001 7.25H15.9001C16.5905 7.25 17.1501 6.69036 17.1501 6V2C17.1501 1.30964 16.5905 0.75 15.9001 0.75H11.9001ZM11.9001 9.1499C10.3814 9.1499 9.15015 10.3811 9.15015 11.8999V15.8999C9.15015 17.4187 10.3814 18.6499 11.9001 18.6499H15.9001C17.4189 18.6499 18.6501 17.4187 18.6501 15.8999V11.8999C18.6501 10.3811 17.4189 9.1499 15.9001 9.1499H11.9001ZM10.6501 11.8999C10.6501 11.2095 11.2098 10.6499 11.9001 10.6499H15.9001C16.5905 10.6499 17.1501 11.2095 17.1501 11.8999V15.8999C17.1501 16.5903 16.5905 17.1499 15.9001 17.1499H11.9001C11.2098 17.1499 10.6501 16.5903 10.6501 15.8999V11.8999Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(UnionIcon);
export { Memo as UnionIcon };
