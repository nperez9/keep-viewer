import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function HeroHome() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
      >
        <div className="bg-gradient-to-r from-background/50 to-background blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]" />
        <div className="bg-gradient-to-tl blur-3xl w-[90rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem] from-primary-foreground via-primary-foreground to-background" />
      </div>
      <div className="relative z-10">
        <div className="container py-10 lg:py-16">
          <div className="max-w-2xl text-center mx-auto">
            <p>Vizualize your notes in the best way</p>
            <div className="mt-5 max-w-2xl">
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Keep Viewer
              </h1>
            </div>
            <div className="mt-5 max-w-3xl">
              <h3 className="text-xl text-muted-foreground">
                A tool to vizualize, format, make graphs and more with your keep notes
              </h3>
            </div>
            <div className="mt-8 flex justify-center">
              <Link href="/login">
                <Button size="lg">Try it out </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
