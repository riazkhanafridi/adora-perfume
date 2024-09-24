import Button from "@/components/ui/button";
import Input from "@/components/ui/input";

function ReviewsPage() {
  return (
    <div className="bg-secondary w-full ">
      <div className="flex flex-col items-center justify-center    ">
        <h1 className="text-primary font-semibold text-3xl mt-10 ">
          Add Reviews
        </h1>
        <div className="flex flex-col shadow-lg border w-[700px] h-[300px] gap-4 px-10 mt-8 rounded-md py-8">
          <div className="flex gap-x-2 mt-4  ">
            <Input type="text" placeholder="First name " className="w-full" />
            <Input placeholder="Email" className="w-full" />
          </div>
          <Input type="text" placeholder="Subject" />
          <Input placeholder="Message" className="h-40" />
          <Button className="bg-primary">Add Review</Button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-8 mt-12  ">
    <h1 className="text-3xl text-primary font-semibold ">    what our clients says</h1>
        <p >
          our clients are our first priority to provide them quality products
        </p>
      </div>
  
    <div className="shadow lg border w-[80vw] h-[40vh] ml-36 mt-16  rounded-md p-8 bg-[#F1F5F9] ">
        <p className="text-xl ">
          The "Our Customers Say..." page is a testament to the satisfaction of
          our customers. Here, you can read genuine feedback from our customers
          about their experiences with our products and services. We take pride
          in the quality of our products, from the handcrafted perfumes made
          from natural ingredients to the excellent customer service we provide.
          You can trust that each review is authentic, as we believe in
          transparency and honesty. Our aim is to create a community of happy
          customers who feel confident in their purchases and satisfied with
          their overall experience with us. Read through the reviews and
          discover how our products have transformed the lives and routines of
          our valued customers.
        </p>
      </div>
   
    </div>
  );
}

export default ReviewsPage;
