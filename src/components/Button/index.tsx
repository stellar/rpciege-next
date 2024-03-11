import clsx from 'clsx';

import { PulseLoader } from '@/components/Icons';

export const Button = (props: ButtonProps) => {
  const {
    className,
    disabledText,
    isDisabled,
    isLoading,
    leftIcon,
    loadingText,
    rightIcon,
    spinnerPosition = 'left',
    ...restProps
  } = props;

  return (
    <button disabled={isDisabled || isLoading} className={clsx('', className)} {...restProps}>
      {isLoading ? spinnerPosition === 'left' && <PulseLoader /> : leftIcon}

      {isLoading && loadingText
        ? loadingText
        : isDisabled && disabledText
        ? disabledText
        : props.children}

      {isLoading ? spinnerPosition === 'right' && <PulseLoader /> : rightIcon}
    </button>
  );
};

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  disabledText?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  loadingText?: string;
  rightIcon?: React.ReactNode;
  spinnerPosition?: 'left' | 'right';
}
