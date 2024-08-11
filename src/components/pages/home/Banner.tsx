import { bannerImageThree, bannerImageTwo } from "@/assets";
import Container from "@/components/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

const getData = async () => {
  const response = await fetch(`${process.env.API_URL}api/products`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

const Banner = async () => {
  const { banner } = await getData();

  return (
    <div className="">
      <div className="bg-[#115061] py-20 text-themeWhite">
        <Container className="flex items-center justify-between">
          <div className="flex flex-col gap-5">
            <p className="text-base font-semibold">{banner?.priceText}</p>
            <h2 className="text-5xl font-bold max-w-[500px]">
              {banner?.title}
            </h2>
            <p className="text-lg font-bold">
              {banner?.textOne}{" "}
              <span className="text-lightYellow mx-1">
                {banner?.offerPrice}
              </span>
              {banner?.textTwo}
            </p>
            <Button
              href={banner?.buttonLink}
              className="flex items-center gap-1 bg-themeWhite text-black rounded-md w-32 px-0 justify-center text-sm font-semibold hover:bg-transparent hover:text-themeWhite py-3 border border-transparent hover:border-white/40 duration-200"
            >
              Shop Now <GoArrowRight className="text-lg" />
            </Button>
          </div>
          <div>
            <Image src={banner?.image} alt="bannerImageOne" />
          </div>
        </Container>
      </div>
      <div className="">
        <Container>
          <div className="flex gap-10 py-20">
            <div className="relative">
              <Image
                src={bannerImageTwo}
                alt="bannerImageTwo"
                className="rounded-xl"
              />
              <div className="absolute top-16 left-16">
                <p>Sale 20% off all store</p>
                <h2 className="w-2/3 text-3xl font-semibold mt-2 mb-2">
                  Smartphone BLU G91 Pro 2022
                </h2>
                <p className="flex items-center gap-2 text-sm hover:text-themeColor font-semibold duration-200">
                  Shop Now <GoArrowRight />
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src={bannerImageThree}
                alt="bannerImageThree"
                className="rounded-xl"
              />
              <div className="absolute top-10 left-10">
                <h2 className="text-xl font-semibold w-2/3 mb-2">
                  HyperX Cloud II Wireless
                </h2>
                <p className="font-semibold">Sale 35% off</p>
                <p className="flex items-center gap-2 text-sm hover:text-themeColor mt-6 font-semibold hover:text-gap-2 duration-200">
                  Shop Now <GoArrowRight />
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
