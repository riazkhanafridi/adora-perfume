import PageBanner from "@/components/banner";

function AboutPage() {
  return (
    <div className="bg-secondary">
      <PageBanner bannerImages="/banner/car.jpg" title="About us" />

      <div className="flex px-8 w-full ">
        <div className="w-[30%] shadow-md">
          <img
            src="/home-slider/spray3.jpg"
            alt=""
            className="w-[400px] h-[400px]"
          />
        </div>
        <div className="flex flex-col  shadow-lg px-8 w-[70%]">
          <h1 className="text-3xl text-primary font-semibold mt-4 border-b-2 border-b-gray-200 w-[15%]">About Us</h1>
          <p className="mt-4">
            {" "}
            Adore Perfume, we maintain exceptional quality by sourcing raw
            materials from internationally renowned suppliers known for their
            high quality and standards. Our motto, "Quality First," reflects our
            unwavering commitment to excellence, ensuring that every product we
            deliver meets the highest benchmarks. Customer satisfaction is at
            the heart of our operations, driving us to consistently exceed
            expectations.
          </p>
          <p className="mt-4">
            At Adore perfume, we believe that the growth of our company is
            intrinsically linked to the growth of our people, fostering a
            culture of continuous improvement and mutual success.
          </p>
        </div>
      </div>
      <div className="flex flex-col mt-16 px-8 w-full font-semibold">
        <h1 className="text-primary text-4xl border-b-2 border-b-gray-200 w-[12%]  mb-2">Our Stores</h1>
        <li>Our store is located</li>
        <li>Plot 5, Mussafah m-16, abu dhabi - united arab emirates</li>
        <li>+971524525401</li>
      </div>
    </div>
  );
}

export default AboutPage;
