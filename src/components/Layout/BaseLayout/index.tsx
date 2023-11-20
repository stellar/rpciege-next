import { Navbar } from '../Navbar';
import { Footer } from '../Footer';

export const BaseLayout = ({ children, ...restProps }: React.ComponentPropsWithoutRef<'div'>) => {
  return (
    <div {...restProps} className="border-[6px] lg:border-[13px] border-neutral-gray">
      <div className="min-h-screen relative">
        <Navbar />
        {children}
      </div>

      <Footer />
    </div>
  );
};
