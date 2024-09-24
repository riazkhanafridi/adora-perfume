import PageBanner from "@/components/banner"


function ScentPage() {
  return (
    <div className="flex flex-col bg-secondary w-screen ">
      <PageBanner bannerImages="/public/banner/private.jpg"    title="Find your best signature scents"/> 
      <div className="flex   px-4  ">
       <div className="flex flex-col justify-center items-center mt-8 ">
       <img src="/images/fruit.jpg" alt="" className="w-[300px] h-[250px] shadow-md rounded-md overflow-hidden relative"/>
       
       <h1 className="absolute text-white text-4xl font-semibold">Fruity</h1>
       </div>
     
        </div> 
    </div>
  )
}

export default ScentPage