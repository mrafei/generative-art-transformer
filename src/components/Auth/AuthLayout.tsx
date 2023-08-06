import Image from "next/image";
import type { FC, PropsWithChildren } from "react";

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <section className="gradient-form h-full bg-neutral-200 flex flex-1 flex-col justify-center items-center">
      <div className="container max-w-6xl mx-auto h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg">
              <div className="g-0 lg:flex lg:flex-wrap">
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="pt-4 md:mx-6 md:p-12">
                    <div className="text-center">
                      <Image
                        className="mx-auto mb-4"
                        width={48}
                        height={48}
                        src="/favicon.ico"
                        alt="logo"
                      />
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                        Generative Art Transformer
                      </h4>
                    </div>
                    {children}
                  </div>
                </div>

                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      Magic of Famous Artists
                    </h4>
                    <p className="text-sm">
                      Elevate your photography to a whole new level with our
                      cutting-edge AI technology. Turn your cherished memories
                      into timeless pieces of art, with each stroke and
                      brushstroke meticulously crafted to emulate the techniques
                      of legendary artists.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
