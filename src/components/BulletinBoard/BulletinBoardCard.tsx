import { Link, LinkProps } from '../Link';

export type BulletinBoardCardProps = {
  date: string;
  title: string;
} & LinkProps;

export const BulletinBoardCard = (props: BulletinBoardCardProps) => {
  const { date, title, ...restProps } = props;

  return (
    <Link className="block border border-neutral-gray" {...restProps}>
      <div className="p-3 min-h-[10rem]">
        <p className="font-nanum font-bold uppercase text-neutral-gray">{date}</p>
        <p className="text-neutral-black">{title}</p>
      </div>

      <p className="font-nanum font-bold uppercase p-3 bg-primary-red text-neutral-gray border-t border-neutral-gray">
        Learn More
      </p>
    </Link>
  );
};
