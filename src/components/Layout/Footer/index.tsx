import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';

import styles from './styles.module.css';

export const Footer = (props: any) => {
  return (
    <div
      {...props}
      className={clsx(
        'flex flex-col items-center justify-between lg:flex-row gap-6 pb-7 px-6 leading-[18px]',
        props.className
      )}
    >
      <FooterSection>
        <p>© 2023 Stellar</p>

        <Link href="/">Privacy Policy</Link>

        <Link href="/">Terms and Conditions</Link>
      </FooterSection>

      <div className="border-t border-neutral-black self-stretch lg:hidden" />

      <FooterSection>
        <Link href="/">Play the Game</Link>

        <Link href="/">Learn about Soroban</Link>

        <Link href="/">Join the Discord</Link>

        <Link href="/">Follow on Twitter</Link>
      </FooterSection>
    </div>
  );
};

type FooterSectionProps = React.ComponentPropsWithoutRef<'div'>;

const FooterSection = ({ className, children, ...restProps }: FooterSectionProps) => {
  return (
    <div
      {...restProps}
      className={clsx('flex flex-wrap justify-center items-center gap-x-2.5 gap-y-1.5', className)}
    >
      {React.Children.map(children, (child) => (
        <>
          {child}
          <Divider />
        </>
      ))}
    </div>
  );
};

const Divider = (props: any) => {
  return (
    <div
      className={clsx(
        'border-2 border-neutral-black self-stretch last:hidden',
        styles.Divider,
        props.className
      )}
    />
  );
};
