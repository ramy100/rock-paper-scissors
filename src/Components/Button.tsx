import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type Props = { title: string; outline?: boolean } & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
const Button: React.FunctionComponent<React.PropsWithChildren<Props>> = ({
  title,
  outline,
  className,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={
        'rounded-md px-7 py-1 active:scale-90 duration-75 text-center ' +
        (className ? className : '') +
        (outline ? ' outline outline-2' : '')
      }>
      {title}
    </button>
  );
};

export default Button;
