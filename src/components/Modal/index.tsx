import { Dialog } from '@headlessui/react';

import { Close } from '@/components/Icons';

type ModalProps = React.ComponentPropsWithoutRef<'div'> &
  React.ComponentPropsWithoutRef<typeof Dialog>;

export const Modal = ({ children, ...props }: ModalProps) => {
  return (
    <Dialog {...props}>
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

      <div className="fixed inset-0 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-xl w-full">
            <button
              className="block ml-auto mb-2"
              onClick={props.onClose as any}
              aria-label="close"
            >
              <Close className="size-8 text-neutral-white" />
            </button>

            <div className="overflow-y-auto p-8 text-neutral-white bg-neutral-black rounded-xl">
              {children}
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};
