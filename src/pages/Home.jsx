import Faq from "../Faq"
import Slider from "../Slider"
import Footer from "../Footer"


export default function Home() {
  return (
    <>
    <section className="w-max-7xl px-4 flex justify-center mb-20">
    <img src="/318 2.png" className=" w-7/12" alt="" />
    </section>
        <section className="relative w-full flex flex-col items-center justify-center  text-center text-white ">
      {/* Content */}
      <div className="z-10 max-w-4xl px-6">
        <h1 className="text-4xl md:text-6xl font-medium">
          <span className="block font-title ">REDEFINING CLASSIC</span>
          <span className="block font-title text-white/60">CAR CONVERSIONS</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-[#A61313]">
          THUNK reimagines that legacy with the <br /> Thunk3 EV conversion motor
        </p>
      </div>

      {/* Curved line at bottom */}
      <div className="absolute top-4 w-full">
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1728 278" fill="none">
<path d="M-124 278C-124 278 -124 278 -124 278C-95.4732 259.861 -64.4335 242.275 -34.3267 226.648C242.937 85.7131 553.895 16.981 863.659 15.5043C1173.58 14.1887 1483.2 88.6473 1760.46 229.077C1791.45 244.691 1821.44 260.705 1852 278C1852 278 1852 278 1852 278C1821.94 259.841 1792.4 242.983 1761.77 226.548C1487.95 78.6655 1175.97 -0.909466 863.628 0.504292C551.463 1.91802 238.415 75.6354 -35.6738 224.137C-65.4166 240.589 -96.0216 259.025 -124 278Z" fill="url(#paint0_linear_60_194)"/>
<defs>
<linearGradient id="paint0_linear_60_194" x1="-124" y1="143" x2="1852" y2="143" gradientUnits="userSpaceOnUse">
<stop stop-color="#666666"/>
<stop offset="0.331731"/>
<stop offset="0.697115"/>
<stop offset="1" stop-color="#666666"/>
</linearGradient>
</defs>
</svg>
      </div>
      <div className="h-32 border-l border-[#2F2F2F] mx-auto my-5"></div>

    </section>
 <section className="bg-black max-w-7xl text-white  px-6 flex flex-col items-center  pb-40">
      
      {/* Car Image */}
      <div className="shadow-[0_0_86px_26px_rgba(88,43,5,0.31)]">
        <img
          src="/Group 16.png"   // 👉 replace with your image path
          alt="Classic car"
          className="w-full"
        />
      </div>

      {/* Text Content */}
      <div className=" mt-12 text-center md:text-left">
        <div className=" flex items-end  ">


       
        {/* Heading */}
        <h2 className="font-title  text-4xl md:text-5xl leading-tight">
          <span className="block ">THUNK</span>
          <span className="block text-white/60">REIMAGINES</span>
        </h2>

        {/* Horizontal line + Button */}
        <div className="flex w-full items-center justify-center md:justify-end  mb-6">
          <div className="h-[1px] w-8/12 bg-[#2F2F2F] "></div>
          <button className="px-6 py-2 rounded-full border border-gray-400 text-sm font-body hover:bg-gray-200 hover:text-black transition">
            VIEW OUR PRODUCT •
          </button>
        </div>
        </div>
        {/* Paragraph */}
        <p className="font-body text-gray-300 text-base leading-relaxed">
          Every classic automobile carries history under its hood. THUNK reimagines that legacy with 
          the Thunk3 EV conversion motor and a compact, powerful system that transforms timeless machines 
          into high-performance electric vehicles. We love our classics but acknowledge the pain and challenges 
          of keeping decades-old technology on the road. THUNK is dedicated to preserving heritage while 
          eliminating the constant work, unreliability, and unsustainability of old ICE engines.
        </p>
      </div>
    </section>

<section className="text-white md:py-60 px-6 ">
      <div className="max-w-7xl px-6 mx-auto grid md:grid-cols-10 gap-7 items-center">
        
        {/* Left Column */}
        <div className="text-left md:col-span-7 ">
          {/* Title */}
          <h2 className="font-title text-4xl md:text-5xl mb-6">
            WHO ARE WE?
          </h2>

          {/* Paragraphs */}
          <p className="font-body text-gray-300 mb-4">
            The story of THUNK began with a passion for classic cars and a determination to keep them relevant in a changing world. 
            What started as a vision grew into the development of the Thunk3 motor,
             a solution that integrates modern engineering with respect for legacy.
          </p>
          <p className="font-body text-gray-300 mb-6">
          Our focus is on building products we can fully support.
           Our first product is the Thunk3 motor, 
           with future plans to add complementary products such as battery boxes.
          </p>

          {/* Button + Line */}
          <div className="flex items-center">
            <button className="px-6 py-2 rounded-full border border-gray-400 text-sm font-body hover:bg-gray-200 hover:text-black transition">
              MORE ABOUT US •
            </button>
            <div className="hidden md:block absolute w-7/12  h-[1px] flex-1 bg-[#2F2F2F] ml-4"></div>
          </div>
        </div>

        {/* Right Column (Image with vertical line) */}
        <div className="relative flex justify-center md:justify-end">
          {/* Vertical divider */}
<div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/3 h-70 w-[1px] bg-[#2F2F2F]"></div>
       
        </div>

       

          {/* Car Image */}
          <img
            src="/Group 19.png"   // 👉 replace with your transparent car image
            alt="Classic Car"
            className=" w-4/12 absolute right-0  md:pl-12"
          />
        
      </div>
    </section>

    <section className="relative max-w-7xl px-6">
      <div className="flex flex-col justify-center">
        <h3 className="font-title text-center uppercase text-4xl md:text-5xl leading-tight text-amber-50">
          Why Choose <br /> THUNK 3
        </h3>
        <p className="mt-6 text-center text-lg md:text-xl text-[#A61313]">As Your New EV Conversion Motor?</p>
      </div>
      <div>


        <div class="relative min-h-screen bg-black text-white   font-sans ">

    <div class="flex justify-center mb-12">
        <img src="/Group 15.png" alt="Thunk3 EV Motor" class="absolute w-9/12 h-auto z-12"/>
        
    </div>
   <div class="max-w-3xl mx-auto  flex items-end justify-around md:justify-between px-10 md:px-0 z-0">
        <div class="w-px h-70 bg-[#2F2F2F]"></div> 
        <div class="w-px h-48 bg-[#2F2F2F]"></div> 
        <div class="w-px h-140 mt-10 bg-[#2F2F2F]"></div> 
    </div>
  {/* <div className="hidden md:block my-6 w-[1px]  h-32 flex-1 bg-gray-600 ml-4"></div> */}
    <div class=" mx-auto bg-[#1C1C1C]/50  rounded-lg p-8 md:p-12 mb-12  shadow-xl">
        <h2 class="font-title text-3xl font-medium uppercase mb-4  ">
            Space Advantage
        </h2>
        <p class="text-lg  ">
            The biggest challenge of converting a classic car is where to place the batteries. Most EV conversion motors sit in the engine bay, taking up valuable space. The **Thunk3 motor** is designed to sit in the transmission tunnel, freeing up the engine bay for batteries and other critical components. Unlike rear-mounted motors that protrude into the gas tank area, the Thunk3 allows you to mount batteries in both the front (trunk!) and the rear. This creates **excellent balance and handling**—a benefit no other motor currently offers.
        </p>
    </div>

    <div class="   mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

        <div class="bg-[#1C1C1C]/50 p-6 rounded-lg shadow-2xl transition duration-300 ">
            <h3 class="font-title text-xl font-semibold uppercase mb-3 ">
                Reliability
            </h3>
            <p class="text-md ">
                Experience consistent performance with minimal maintenance, engineered for long-term dependability.
            </p>
        </div>

        <div class="bg-[#1C1C1C]/50 p-6 rounded-lg shadow-2xl transition duration-300 ">
            <h3 class="font-title text-xl font-semibold uppercase mb-3 tracking-wider">
                Preservation
            </h3>
            <p class="text-md  ">
                Extend the life of your classic while keeping its timeless beauty intact with electric EV motors.
            </p>
        </div>

        <div class="bg-[#1C1C1C]/50 p-6 rounded-lg shadow-2xl transition duration-300 ">
            <h3 class="font-title text-xl font-semibold uppercase mb-3 tracking-wider">
                Performance
            </h3>
            <p class="text-md text-gray-400 leading-relaxed">
                Instant torque and smooth acceleration deliver a driving experience beyond expectation.
            </p>
        </div>

    </div>

</div>
      </div>



        </section>
        <Faq>          </Faq>

     <section className="relative w-full  flex flex-col items-center justify-center text-center text-white ">
      {/* Content */}
      <div className="z-10 max-w-4xl px-6">
        <h1 className="text-4xl md:text-6xl font-medium">
          <span className="block font-title uppercase">Innovation in  <br />Electrification</span>
        
        </h1>
        <p className="mt-6 text-lg md:text-xl uppercase text-[#A61313]">
          Trendsetting EV Electric Motors for <br /> Yesterday’s Cars
        </p>
      </div>

      {/* Curved line at bottom */}
      <div className="absolute top-4 w-full">
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1728 278" fill="none">
<path d="M-124 278C-124 278 -124 278 -124 278C-95.4732 259.861 -64.4335 242.275 -34.3267 226.648C242.937 85.7131 553.895 16.981 863.659 15.5043C1173.58 14.1887 1483.2 88.6473 1760.46 229.077C1791.45 244.691 1821.44 260.705 1852 278C1852 278 1852 278 1852 278C1821.94 259.841 1792.4 242.983 1761.77 226.548C1487.95 78.6655 1175.97 -0.909466 863.628 0.504292C551.463 1.91802 238.415 75.6354 -35.6738 224.137C-65.4166 240.589 -96.0216 259.025 -124 278Z" fill="url(#paint0_linear_60_194)"/>
<defs>
<linearGradient id="paint0_linear_60_194" x1="-124" y1="143" x2="1852" y2="143" gradientUnits="userSpaceOnUse">
<stop stop-color="#666666"/>
<stop offset="0.331731"/>
<stop offset="0.697115"/>
<stop offset="1" stop-color="#666666"/>
</linearGradient>
</defs>
</svg>
      </div>
     
     <Slider/>
     <section className="relative max-w-5xl px-6 pb-40 flex flex-col items-center justify-center text-center text-white ">
    <div class="mx-auto grid grid-cols-10 gap-8 text-center">
    <div className="md:col-span-4">
      <h3 className="font-title uppercase text-4xl md:text-6xl font-medium">Upgrade <br /> Your Car</h3>
    </div>
    <div className="md:col-span-6 text-left">
      <p className="font-bold">“Instead of replacing the cars we love, we reimagine them for <br /> the electric future.”</p>
      <p className="font-light">With the Thunk3 motor, your classic becomes a future-ready electric machine. Driving an EV makes your classic perform like car you’ve always wanted!</p>
    </div>

    </div>


      </section>
    </section>

  <Footer></Footer>
    </>
  );
}