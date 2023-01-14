import Image from 'next/image';

interface LogoProps {
  width?: number;
  height?: number;
}

export const LogoText = ({ width, height }: LogoProps) => {
  return (
    <Image
      src="/logo-text.png"
      alt="Openomic Text Logo"
      width={width ?? 250}
      height={height ?? 68}
    />
  );
};

export const Logo = ({ width, height }: LogoProps) => {
  return (
    <Image
      src="/logo.svg"
      alt="Openomic Icon Logo"
      width={width ?? 90}
      height={height ?? 90}
    />
  );
};
