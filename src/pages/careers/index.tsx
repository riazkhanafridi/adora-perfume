import PageBanner from "@/components/banner";


function CareersPage() {
  return (
    <div className="bg-secondary flex flex-col items-center">
      <PageBanner bannerImages="/banner/men.jpg" title="Careers" />

      <div className="flex flex-col shadow-lg   rounded-md w-[90%] border mt-10 gap-4 p-[40px] mb-20 ml-16 mr-16 ">
        <div className="px-4 mt-8">
          <p className="text-primary font-semibold text-3xl border-b-2 border-b-gray-200 w-[70%]">Join Adore Team – Your Career with an Upscale Perfume Brand</p>
          <p className="mt-2 py-2">
            Adore is a renowned perfume brand in UAE that offers an unparalleled
            experience to its customers through high-quality fragrances and
            innovative products. We offer more than just the best perfumes – we
            offer a challenging and rewarding career path for those looking to
            make their mark in the luxury scent industry. At Adore, you will
            find opportunities to grow professionally while working with some of
            the world’s top fragrance designers and specialists in this field.
            Our team thrives on innovation and creative problem-solving – making
            your workdays both enjoyable and stimulating. In addition to
            offering competitive salaries, we also provide generous benefits,
            including:
          </p>
        </div>
        <div className="flex flex-col px-8 mt-8 ">
        <li>Our store is located</li>
        <li>Plot 5, Mussafah m-16, abu dhabi - united arab emirates</li>
        <li>+971524525401</li>
       <div className="flex flex-col mt-4 mb-8">
       <p>So, if you are seeking an exciting career with a top perfume brand in the UAE, join us at Adore Perfumes!</p>
       <p>Send your CV to: careers info@adoreparfume.com</p>
       </div>
        </div>
   
      </div>
    </div>
  );
}

export default CareersPage;
