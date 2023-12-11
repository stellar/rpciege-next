import NextLink from 'next/link';
import clsx from 'clsx';

import styles from './styles.module.css';

type LinkProps = React.ComponentPropsWithoutRef<typeof NextLink>;

export const Link = (props: LinkProps) => {
  const isExternalLink =
    props.href.toString().startsWith('http') || props.href.toString().startsWith('//');

  const defaultProps = isExternalLink ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return <NextLink {...defaultProps} {...props} className={clsx(styles.Link, props.className)} />;
};
