import { Search } from '@/components/Icons';
import clsx from 'clsx';
import React from 'react';

type BinderSidePanelProps = {} & React.ComponentPropsWithoutRef<'div'>;

// TODO: Implement search functionality
export const BinderSidePanel = ({ children, ...props }: BinderSidePanelProps) => {
  return (
    <div {...props} className={clsx('border border-neutral-gray rounded-md', props.className)}>
      {/* <label className="flex gap-2 items-center p-4 border-b border-neutral-gray">
        <Search />

        <input
          placeholder="Search"
          className="flex-1 p-1 bg-transparent text-h6 font-nanum placeholder:uppercase placeholder:text-neutral-gray/60"
        />
      </label> */}

      {children}
    </div>
  );
};
