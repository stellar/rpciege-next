import { forwardRef } from 'react';
import NextLink from 'next/link';
import clsx from 'clsx';

import styles from './styles.module.css';

export type LinkProps = React.ComponentPropsWithoutRef<typeof NextLink>;

export const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const isExternalLink =
    props.href.toString().startsWith('http') || props.href.toString().startsWith('//');

  const defaultProps = isExternalLink ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <NextLink
      ref={ref}
      {...defaultProps}
      {...props}
      className={clsx(styles.Link, props.className)}
    />
  );
});
