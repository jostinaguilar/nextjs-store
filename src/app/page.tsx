import { Navbar } from '@/components/Navbar';
import { SliderHome } from '@/components/SliderHome';

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="w-full max-w-screen-lg mx-auto">
        <SliderHome />
      </section>
    </>
  );
}
