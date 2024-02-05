import { Caret } from '@/components/Icons';
import { Dialog } from '@headlessui/react';

type BinderModalProps = React.ComponentPropsWithoutRef<'div'> &
  React.ComponentPropsWithoutRef<typeof Dialog>;

export const BinderModal = ({ children, ...props }: BinderModalProps) => {
  return (
    <Dialog {...props}>
      <Dialog.Panel className="fixed inset-0 bg-neutral-white py-6 px-4 overflow-y-auto">
        <button
          className="text-body-lg font-bold text-neutral-black flex items-center gap-4"
          onClick={props.onClose as any}
        >
          <Caret className="rotate-90" /> Back
        </button>

        {children}
      </Dialog.Panel>
    </Dialog>
  );
};
