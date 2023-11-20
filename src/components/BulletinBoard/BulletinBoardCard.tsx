type BulletinBoardCardProps = {
  date: string;
  title: string;
};

export const BulletinBoardCard = ({ date, title }: BulletinBoardCardProps) => {
  return (
    <div className="border border-neutral-gray">
      <div className="p-3 min-h-[10rem]">
        <p className="font-nanum font-bold uppercase text-neutral-gray">{date}</p>
        <p className="text-neutral-black">{title}</p>
      </div>

      <p className="font-nanum font-bold uppercase p-3 bg-primary-red text-neutral-gray border-t border-neutral-gray">
        Learn More
      </p>
    </div>
  );
};
