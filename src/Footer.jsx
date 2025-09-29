import { Icon } from "@iconify/react";
const Footer = () => {
  return (
    <> 
       <section className="relativew w-full bg-[#A61313] px-6  flex flex-col items-center justify-center text-center text-white ">

 <div class="max-w-7xl  mx-auto flex  items-center text-center">
    <div className="text-left w-7/12  ">
      <h3 className="font-title uppercase text-xl md:text-5xl font-medium">Taking Pre- <br />Orders Now!</h3>
    </div>
        <div className="h-32 border-l border-white mx-10 my-5"></div>
    <div className="flex flex-col gap-5 text-left">
      <p className="font-bold ">Lock in your custom EV motor and be one of the first to experience the Thunk3 advantage.</p>
     <button className="w-fit px-6 py-2 rounded-full border border-gray-400 text-sm font-body hover:bg-gray-200 hover:text-black transition">
              MORE ABOUT US •
            </button>
    </div>

    </div>

    </section>
    <footer className="bg-black w-full text-gray-400 py-10 mt-16 flex flex-col justify-center items-center">
      <div className="w-full max-w-7xl px-6 flex  justify-between ">
        
        {/* Left Section */}
        <div className="">
          <h2 className="text-4xl font-title uppercase font-medium text-white mb-3 tracking-wider">Stay Updated</h2>
          <p className=" leading-relaxed">
           We promise not to flood your inbox.
          </p>
          <form action="" className="flex flex-col gap-3 py-4">
          <input type="text" placeholder="Enter your email" className="border-b  border-white  focus:border-b active:border-b focus-visible:border-b outline-0" />
   <button className="px-6 py-2 rounded-full border uppercase border-gray-400 text-sm font-body hover:bg-gray-200 hover:text-black transition">
              Submit now  •
            </button>
          </form>
        </div>
<div className=" flex gap-20">
        {/* Middle Section (Links) */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-title uppercase font-medium text-white mb-2">Quick Links</h3>
          <a href="#" className="hover:text-white transition">Home</a>
          <a href="#" className="hover:text-white transition">About US</a>
          <a href="#" className="hover:text-white transition">Services</a>
            <a href="#" className="hover:text-white transition">Products</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </div>

        {/* Right Section (Socials) */}
        <div className="flex flex-col gap-6 ">
              <div className="flex  gap-20">
                 <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-title uppercase font-medium text-white mb-2">Media</h3>
          <a href="#" className="hover:text-white transition">News</a>
          <a href="#" className="hover:text-white transition">Gallery</a>
          <a href="#" className="hover:text-white transition">Videos</a>
        
        </div>
            
            
              <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-title uppercase font-medium text-white mb-2">Legal</h3>
          <a href="#" className="hover:text-white transition">Terms & Condition</a>
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
       
        </div>
</div>

            <div>
         
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white p-2 border bg-[#666666]/28 border-[#DDDDDD] rounded-full transition"><Icon icon="jam:linkedin" className="text-white w-4 h-4 md:w-4 md:h-4" /></a>
            <a href="#" className="hover:text-white p-2 border bg-[#666666]/28 border-[#DDDDDD] rounded-full transition"><Icon icon="mdi:instagram" className="text-white w-4 h-4 md:w-4 md:h-4" /></a>
            <a href="#" className="hover:text-white p-2 border bg-[#666666]/28 border-[#DDDDDD] rounded-full transition"><Icon icon="ic:round-tiktok" className="text-white w-4 h-4 md:w-4 md:h-4" /></a>
            <a href="#" className="hover:text-white p-2 border bg-[#666666]/28 border-[#DDDDDD] rounded-full transition"><Icon icon="mdi:facebook" className="text-white w-4 h-4 md:w-4 md:h-4" /></a>
            <a href="#" className="hover:text-white p-2 border bg-[#666666]/28 border-[#DDDDDD] rounded-full transition"><Icon icon="mdi:youtube" className="text-white w-4 h-4 md:w-4 md:h-4" /></a>
            <a href="#" className="hover:text-white p-2 border bg-[#666666]/28 border-[#DDDDDD] rounded-full transition"><Icon icon="mingcute:pinterest-fill" className="text-white w-4 h-4 md:w-4 md:h-4" /></a>

          </div>
        </div>





        </div>
      </div>
 </div>
      <div className="mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} CarShowcase. All rights reserved.
      </div>
    </footer>
    </>
  );
};

export default Footer;
