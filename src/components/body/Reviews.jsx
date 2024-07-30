import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css"; // Assuming you have a Testimonial.css file for component-specific styles

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Display one slide at a time
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    centerMode: true, // Center the current slide
    centerPadding: "0px", // Adjust as needed
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div>
      {/* For large screen  */}
      <div className="hidden md:block">
        <section className="text-gray-600 body-font mb-10">
          <div className="container px-5 py-10 mx-auto flex flex-col justify-center items-center">
            <h1 className="text-center text-3xl font-bold text-black">
              Testimonial
            </h1>
            <h2 className="text-center text-2xl font-semibold mb-10 text-black">
              What our <span className="text-red-600">customers</span> are
              saying
            </h2>

            <div className="w-[600px]">
              <Slider {...settings}>
                <div className="testimonial-slide relative pt-16 px-[110px] md:px-0">
                  <p className="absolute top-0 left-0 text-[120px] text-[#daa88c] opacity-25 px-[110px] md:px-0">
                    ❛❛
                  </p>
                  <div className="h-full text-center p-4 rounded-3xl">
                    <p className="leading-relaxed">
                      The selection of raw cloth wholesalers is fantastic! I
                      found high-quality fabrics at great prices. The designers
                      listed are incredibly talented, and I was able to get a
                      custom outfit made that exceeded my expectations
                    </p>
                    <span className="inline-block h-1 w-10 rounded bg-red-600 mt-6 mb-4" />
                    <h2 className="text-gray-500 font-medium title-font tracking-wider text-sm uppercase">
                      Amit
                    </h2>
                  </div>
                </div>

                <div className="testimonial-slide relative pt-16 px-[110px] md:px-0">
                  <p className="absolute top-0 left-0 text-[120px] text-[#daa88c] opacity-25 px-[110px] md:px-0">
                    ❛❛
                  </p>
                  <div className="h-full text-center p-4 rounded-3xl">
                    <p className="leading-relaxed">
                      I was skeptical at first, but this site made my shopping
                      experience seamless. The variety of fabrics available is
                      impressive, and the designer I chose was very innovative.
                      The tailoring service was quick and precise
                    </p>
                    <span className="inline-block h-1 w-10 rounded bg-red-600 mt-6 mb-4" />
                    <h2 className="text-gray-500 font-medium title-font tracking-wider text-sm uppercase">
                      Deepak
                    </h2>
                  </div>
                </div>

                <div className="testimonial-slide relative pt-16 px-[110px] md:px-0">
                  <p className="absolute top-0 left-0 text-[120px] text-[#daa88c] opacity-25 px-[110px] md:px-0">
                    ❛❛
                  </p>
                  <div className="h-full text-center p-4 rounded-3xl">
                    <p className="leading-relaxed">
                      Amazing experience! The website offers a wide range of raw
                      materials that are perfect for my boutique. The designers
                      are skilled and offer unique designs. Finding a reliable
                      tailor was easy, and the final product was flawless. I’m
                      very satisfied with the services provided
                    </p>
                    <span className="inline-block h-1 w-10 rounded bg-red-600 mt-6 mb-4" />
                    <h2 className="text-gray-500 font-medium title-font tracking-wider text-sm uppercase">
                      Hitesh
                    </h2>
                  </div>
                </div>

                <div className="testimonial-slide relative pt-16 px-[110px] md:px-0">
                  <p className="absolute top-0 left-0 text-[120px] text-[#daa88c] opacity-25 px-[110px] md:px-0">
                    ❛❛
                  </p>
                  <div className="h-full text-center p-4 rounded-3xl">
                    <p className="leading-relaxed">
                      I discovered this website while searching for raw fabric
                      and was blown away by the variety and quality. The
                      designers on the platform are very creative, and I found a
                      tailor who did an excellent job with my custom dress
                    </p>
                    <span className="inline-block h-1 w-10 rounded bg-red-600 mt-6 mb-4" />
                    <h2 className="text-gray-500 font-medium title-font tracking-wider text-sm uppercase">
                      Harsh
                    </h2>
                  </div>
                </div>

                <div className="testimonial-slide relative pt-16 px-[110px] md:px-0">
                  <p className="absolute top-0 left-0 text-[120px] text-[#daa88c] opacity-25 px-[110px] md:px-0">
                    ❛❛
                  </p>
                  <div className="h-full text-center p-4 rounded-3xl">
                    <p className="leading-relaxed">
                      Starting my own clothing line seemed daunting until I
                      found this website. The selection of raw cloth wholesalers
                      is vast and diverse, allowing me to find unique fabrics
                      that match my vision. The designers were incredibly
                      helpful in bringing my ideas to life, and the tailoring
                      services were top-notch. This platform is a must for
                      anyone in the fashion startup scene!
                    </p>
                    <span className="inline-block h-1 w-10 rounded bg-red-600 mt-6 mb-4" />
                    <h2 className="text-gray-500 font-medium title-font tracking-wider text-sm uppercase">
                      Siddhart
                    </h2>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </section>
      </div>
      {/* For small screen  */}
      <div className="block md:hidden">
      <section className="text-gray-600 body-font mb-10">
        <div className="container px-5 py-10 mx-auto flex flex-col justify-center items-center">
            <h1 className="text-center text-3xl font-bold text-black">
              Testimonial
            </h1>
            <h2 className="text-center text-2xl font-semibold mb-10 text-black">
              What our <span className="text-red-600">customers</span> are
              saying
            </h2>

          <div className="flex flex-wrap -m-4">
            {/* Testimonial 1 */}
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <p className="leading-relaxed">
                The selection of raw cloth wholesalers is fantastic! I
                      found high-quality fabrics at great prices. The designers
                      listed are incredibly talented, and I was able to get a
                      custom outfit made that exceeded my expectations
                </p>
                <span className="inline-block h-1 w-10 rounded bg-red-600 mt-6 mb-4" />
                <h2 className="text-gray-500 font-medium title-font tracking-wider text-sm uppercase">
                  Hitesh
                </h2>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                
                <p className="leading-relaxed">
                I was skeptical at first, but this site made my shopping
                      experience seamless. The variety of fabrics available is
                      impressive, and the designer I chose was very innovative.
                      The tailoring service was quick and precise
                </p>
                <span className="inline-block h-1 w-10 rounded bg-red-600 mt-6 mb-4" />
                <h2 className="text-gray-500 font-medium title-font tracking-wider text-sm uppercase">
                  Deepak
                </h2>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                
                <p className="leading-relaxed">
                I discovered this website while searching for raw fabric
                      and was blown away by the variety and quality. The
                      designers on the platform are very creative, and I found a
                      tailor who did an excellent job with my custom dress
                </p>
                <span className="inline-block h-1 w-10 rounded bg-red-600 mt-6 mb-4" />
                <h2 className="text-gray-500 font-medium title-font tracking-wider text-sm uppercase">
                  Amit
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

// Custom arrow components for React Slick
const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i className="fas fa-chevron-left text-black"></i>
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i className="fas fa-chevron-right text-black"></i>
    </div>
  );
};

export default Testimonial;
