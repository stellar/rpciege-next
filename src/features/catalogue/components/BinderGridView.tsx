import React from 'react';
import Image from 'next/image';

import binderRings from '@/assets/binder-rings.svg';
import binderSpine from '@/assets/binder-spine.svg';

import { BinderPage } from './BinderPage';

type BinderGridViewProps = { children?: React.ReactNode };

export const BinderGridView = (props: BinderGridViewProps) => {
  return (
    <>
      <div className="relative max-lg:hidden">
        <Image
          src={binderSpine}
          alt=""
          className="pointer-events-none absolute top-1/2 -translate-y-1/2 -left-[40%] h-[115%] w-auto"
        />

        <BinderPage>
          {React.Children.map(props.children, (child) => (
            <BinderPage.Item>{child}</BinderPage.Item>
          ))}
        </BinderPage>

        <Image
          src={binderRings}
          alt=""
          className="pointer-events-none absolute top-1/2 -translate-y-1/2 -left-[40%] h-full w-auto"
        />
      </div>

      <div className="px-2 grid grid-cols-fit-36 gap-x-5 gap-y-3 self-start lg:hidden">
        {props.children}
      </div>
    </>
  );
};
