import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

import { ErrorCard } from './ErrorCard';
import { Modal } from '../Modal';

import { routes } from '@/constants';

export const ErrorFallback = (props: { children?: React.ReactNode }) => {
  return <ErrorBoundary FallbackComponent={Fallback}>{props.children}</ErrorBoundary>;
};

const Fallback = ({ error }: FallbackProps) => {
  return (
    <Modal open={!!error} onClose={() => location.replace(routes.HOME)}>
      <ErrorCard error={error}>Something went wrong</ErrorCard>
    </Modal>
  );
};
