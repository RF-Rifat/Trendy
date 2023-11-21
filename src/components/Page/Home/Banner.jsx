import { Button } from "@material-tailwind/react";

const Banner = () => {
  return (
    <>
      <section>
        <div
          style={{
            background: 'URL("https://source.unsplash.com/featured/?clothes")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
          className="bg-violet-400 rounded"
        >
          <div className="flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 rounded md:py-32 md:px-10 lg:px-32 text-gray-900 top-0 mt-0 pt-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] w-full">
            <h1 className="text-5xl font-bold sm:text-6xl xl:max-w-3xl text-secondary">
              Swap, Share, and Style!
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-white">
              Join our community of fashion enthusiasts to swap clothes, share
              your style, and make a positive impact on the environment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="gradient"
              >
                Get started
              </Button>
              <Button
                variant="gradient" 
                color="blue"
              >
                Shop Now
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mx-10 p-6 lg:py-12 mb-12 -mt-20 rounded-lg shadow-md lg:-mt-20 bg-primary dark:bg-violet-400 dark:text-gray-900">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <h2 className="text-center text-5xl font-bold">
                Up to
                <br className="sm:hidden" />
                50% Off
              </h2>
              <div className="space-x-2 text-center py-2 lg:py-0 select-none">
                <span>Plus free shipping! Use code:</span>
                <span className="font-bold text-lg">TRENDY</span>
              </div>
              <a
                href="#"
                rel="noreferrer noopener"
                className="px-4 mt-4 lg:mt-0 py-2 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
