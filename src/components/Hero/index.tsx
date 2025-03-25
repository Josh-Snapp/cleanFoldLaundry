const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[200px] dark:bg-gray-dark md:pb-[50px] md:pt-[150px] xl:pb-[50px] xl:pt-[180px] 2xl:pb-[50px] 2xl:pt-[210px]"
      >
        {
          <div className="container">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="mx-auto max-w-[800px] text-center">
                  <h1 className="mb-5 text-3xl font-bold leading-tight  text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                    Clean Fold Laundry
                  </h1>
                  <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">
                    As your local, premier laundry pickup-and-delivery service,
                    let us help you “take a load off” by doing laundry for you.
                    We offer full-service, reliable pickup and delivery to homes
                    and businesses. Unlike our competitors who use 3rd-party
                    processors, we are proudly family-owned and operated which
                    means you know exactly who is doing your laundry every step
                    of the way. We offer one-time servicing, as well as
                    discounted recurring service for those who find they enjoy
                    having their time back!
                    <br />
                    <br />
                    <b>
                      Use promo code “TRY10” to save 10% off your first order
                      today!
                    </b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        }
        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
          {/* <img src="/images/3d-mockup.jpg" alt="" /> */}
        </div>
      </section>
    </>
  );
};

export default Hero;
