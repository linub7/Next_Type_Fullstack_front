import { FC } from 'react';

interface Props {
  className?: string;
}

const Logo: FC<Props> = ({ className }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M30.72 0H1.28C0.572 0 0 0.572 0 1.28V30.72C0 31.428 0.572 32 1.28 32H30.72C31.428 32 32 31.428 32 30.72V1.28C32 0.572 31.428 0 30.72 0ZM16.044 16.244L8.364 22.684C8.156 22.86 7.84 22.712 7.84 22.44V19.932C7.84 19.84 7.884 19.748 7.956 19.688L12.348 16L7.956 12.312C7.91923 12.283 7.88965 12.2458 7.86954 12.2035C7.84941 12.1612 7.83931 12.1148 7.84 12.068V9.56C7.84 9.288 8.156 9.14 8.364 9.316L16.044 15.752C16.2 15.88 16.2 16.116 16.044 16.244ZM24.16 22.44C24.16 22.616 24.024 22.76 23.86 22.76H16.46C16.296 22.76 16.16 22.616 16.16 22.44V20.52C16.16 20.344 16.296 20.2 16.46 20.2H23.86C24.024 20.2 24.16 20.344 24.16 20.52V22.44Z" />
    </svg>
  );
};

export default Logo;
