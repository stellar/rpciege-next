import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import binderRings from '../assets/binder-rings.svg';
import binderSpine from '../assets/binder-spine.svg';

import { BinderPage } from './BinderPage';

type BinderGridViewProps = { children?: React.ReactNode };

const BinderGridViewBase = (props: BinderGridViewProps) => {
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

      <div className="grid grid-cols-fit-36 gap-x-5 gap-y-3 self-start lg:hidden">
        {props.children}
      </div>
    </>
  );
};

type ItemProps = { isActive?: boolean } & React.ComponentPropsWithoutRef<'img'>;

const Item = ({ isActive, ...props }: ItemProps) => {
  return (
    <img
      {...props}
      className={clsx(
        'rounded-md shadow-lg shadow-black/50 cursor-pointer w-full aspect-card object-cover bg-black',
        isActive && 'outline outline-4 outline-primary-red',
        props.className
      )}
    />
  );
};

const Loader = () => {
  return (
    <BinderGridViewBase>
      {Array.from({ length: 9 }, (_, index) => (
        <div key={index} className="w-full aspect-card bg-black/20 animate-pulse" />
      ))}
    </BinderGridViewBase>
  );
};

export const BinderGridView = Object.assign(BinderGridViewBase, { Item, Loader });
