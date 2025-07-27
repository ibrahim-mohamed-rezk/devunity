const Footer = () => {
  return (
    <div className="w-full flex items-center justify-center mb-[clamp(2px,1.041665vw,20px)] ">
      <div
        className="container relative rounded-[clamp(10px,1.25vw,24px)] py-[40px] px-[60px]  "
        style={{
          backgroundImage: "url(/home/heroBg.png)",
        }}
      >
        {/* glow */}
        <div
          className="absolute z-0 rounded-full top-[50%] left-[50%] w-[60%] h-[30%] translate-x-[-50%] translate-y-[-50%] "
          style={{
            borderRadius: "40px",
            border: "32px solid #00CE93",
            mixBlendMode: "screen",
            filter: "blur(112.5px)",
          }}
        ></div>
        {/* footer content */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between relative z-20">
          <div className="flex flex-col items-start justify-start">
            <div className="flex items-center justify-center w-full flex-col md:items-start">
              <img
                className="w-[118px] h-[30px] "
                src="/siteLogo.png"
                alt="Logo"
              />
              <div className="text-[#ffffff7e] text-lg font-normal font-['Inter'] leading-relaxed">
                The Collaborative Sales CRM
              </div>
            </div>

            <div className="mt-[20px] justify-center w-full md:justify-start items-start gap-[22px] inline-flex">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/Devunitysoftware"
                target="_blank"
                rel="noopener noreferrer"
                className="py-px justify-start items-start flex"
              >
                <div className="text-center text-white/60 text-lg font-normal font-['Font Awesome 5 Brands'] leading-[18px]">
                  <svg width="19" height="19" fill="white" fillOpacity="0.6" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M279.14 288l14.22-92.66h-88.91V127.45c0-25.35 12.42-50.06 52.24-50.06H293V6.26S259.5 0 225.36 0C141.09 
        0 89.09 54.42 89.09 153.42v68.92H0V288h89.09v224h107.77V288z" />
                  </svg>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/devunity_software"
                target="_blank"
                rel="noopener noreferrer"
                className="py-px justify-start items-start flex"
              >
                <div className="text-center text-white/60 text-lg font-normal font-['Font Awesome 5 Brands'] leading-[18px]">
                  <svg width="19" height="19" fill="white" fillOpacity="0.6" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M224,202.66A53.34,53.34,0,1,0,277.34,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.38-30.38C292.91,122.58,224,122.58,224,122.58s-68.91,0-94.33,8.7a54,54,0,0,0-30.38,30.38C86.62,147.09,86.62,176,86.62,176s0,68.91,8.7,94.33a54,54,0,0,0,30.38,30.38c25.42,8.7,94.33,8.7,94.33,8.7s68.91,0,94.33-8.7a54,54,0,0,0,30.38-30.38c8.7-25.42,8.7-94.33,8.7-94.33S357.41,147.09,348.71,161.66ZM224,338a82,82,0,1,1,82-82A82,82,0,0,1,224,338Zm85.33-148.5a19.17,19.17,0,1,1,19.17-19.17A19.17,19.17,0,0,1,309.33,189.5Z" />
                  </svg>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/devunity-software/"
                target="_blank"
                rel="noopener noreferrer"
                className="py-px justify-start items-start flex"
              >
                <div className="text-center text-white/60 text-lg font-normal font-['Font Awesome 5 Brands'] leading-[18px]">
                  <svg width="19" height="19" fill="white" fillOpacity="0.6" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.7 0 54.5S24.09 1 53.79 1s53.8 24.4 53.8 
        53.5-24.09 53.6-53.8 53.6zM447.9 448h-92.4V302.4c0-34.7-.7-79.4-48.4-79.4-48.4 0-55.8 37.8-55.8 
        76.9V448h-92.5V148.9h88.9v40.8h1.3c12.4-23.4 42.5-48.4 87.4-48.4 93.5 0 110.7 61.5 110.7 
        141.3V448z"/>
                  </svg>
                </div>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/channel/UCzwAsr3xXh2XvUqZSUB-CoA"
                target="_blank"
                rel="noopener noreferrer"
                className="py-px justify-start items-start flex"
              >
                <div className="text-center text-white/60 text-lg font-normal font-['Font Awesome 5 Brands'] leading-[18px]">
                  <svg width="19" height="19" fill="white" fillOpacity="0.6" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M549.655 124.083c-6.281-23.65-24.854-42.213-48.5-48.5C465.03 64 288 64 288 
        64S110.97 64 74.845 75.583c-23.65 6.287-42.219 24.85-48.5 48.5C14.117 160.208 14.117 256 14.117 
        256s0 95.792 12.228 131.917c6.281 23.65 24.85 42.213 48.5 48.5C110.97 448 288 448 288 
        448s177.03 0 213.155-11.583c23.65-6.287 42.219-24.85 48.5-48.5C561.883 351.792 561.883 
        256 561.883 256s0-95.792-12.228-131.917zM232.1 338.096V173.904L361.818 256 232.1 338.096z"/>
                  </svg>
                </div>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@devunity_software"
                target="_blank"
                rel="noopener noreferrer"
                className="py-px justify-start items-start flex"
              >
                <div className="text-center text-white/60 text-lg font-normal font-['Font Awesome 5 Brands'] leading-[18px]">
                  <svg width="19" height="19" fill="white" fillOpacity="0.6" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M448,209.9v76.7c-34.5,0-66.4-10.8-92.5-29.2v120.4c0,74.7-60.7,135.4-135.4,135.4S84.7,452.5,84.7,377.8
        s60.7-135.4,135.4-135.4c5.5,0,10.9,0.4,16.2,1.2v78.4c-5.2-1.5-10.7-2.3-16.2-2.3c-31.5,0-57.2,25.6-57.2,57.2
        s25.6,57.2,57.2,57.2s57.2-25.6,57.2-57.2V0h76.6c0,58.1,47.1,105.2,105.3,105.2V209.9z"/>
                  </svg>
                </div>
              </a>
            </div>


            <div className="mt-[40px] justify-start items-start gap-2 inline-flex">
              <div className=" p-[15px] bg-white/10 rounded-xl shadow-[inset_0px_0px_0px_0px_rgba(0,153,255,1.00)] justify-start items-start flex">
                <input
                  placeholder="work@email.com"
                  className="text-white/60 w-[clamp(180px,15.104166vw,290px)] bg-transparent text-[15px] font-normal font-['Inter']"
                />
              </div>
              <button className="text-center text-nowrap justify-start items-start flex text-[#0f1f3d] text-[15px] font-semibold font-['Inter'] leading-[15px] px-[15px] py-[17px] bg-white/80 rounded-xl">
                Sign Up
              </button>
            </div>
          </div>

          <div className="pt-[44px] justify-center md:justify-start items-start gap-y-[30px] gap-x-[clamp(70px,5.208334vw,100px)] inline-flex flex-wrap ">
            <div className=" flex-col justify-start items-center md:items-start gap-[24px] inline-flex">
              <div className="justify-start items-center flex-col md:items-start flex">
                <div className="text-[#fcfcfc] text-base font-medium font-['Inter'] leading-none tracking-tight">
                  Main Pages
                </div>
              </div>
              <div className="flex-col justify-start items-center md:items-start gap-3 flex">
                <a href="/about" className="text-white/60 hover:text-white transition text-base font-normal font-['Inter'] leading-normal">
                  About Us
                </a>
                <a href="/contact" className="text-white/60 hover:text-white transition text-base font-normal font-['Inter'] leading-normal">
                  Contact Us
                </a>
                <a href="/services" className="text-white/60 hover:text-white transition text-base font-normal font-['Inter'] leading-normal">
                  Services
                </a>
                <a href="/projects" className="text-white/60 hover:text-white transition text-base font-normal font-['Inter'] leading-normal">
                  Projects
                </a>
              </div>

            </div>

            <div className="w-[44.25px] flex-col justify-start items-center md:items-start gap-[24px] inline-flex">
              <div className="text-[#fcfcfc] text-base font-medium font-['Inter'] leading-none tracking-tight justify-start items-center flex-col md:items-start inline-flex">
                Learn
              </div>
              <div className="justify-start items-center flex-col md:items-start inline-flex">
                <div className="self-stretch justify-center items-center inline-flex text-white/60 text-base font-normal font-['Inter'] leading-normal">
                  Blog
                </div>
              </div>
            </div>

            <div className="flex-col justify-start items-center md:items-start gap-[24px] inline-flex">
              <div className="text-[#fcfcfc] justify-start items-center flex-col md:items-start flex text-base font-medium font-['Inter'] leading-none tracking-tight">
                Company
              </div>

              <div className="flex-col justify-start items-center md:items-start gap-3 flex">
                <div className="self-stretch justify-start items-center flex-col md:items-start inline-flex text-white/60 text-base font-normal font-['Inter'] leading-normal">
                  Terms of Service
                </div>
                <div className="self-stretch justify-start items-center flex-col md:items-start inline-flex text-white/60 text-base font-normal font-['Inter'] leading-normal">
                  Privacy Policy
                </div>
                {/* <div className="self-stretch justify-start items-center flex-col md:items-start inline-flex text-white/60 text-base font-normal font-['Inter'] leading-normal">
                  한국어
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-[40px] ">
          <div className="w-full border-t border-white/10"></div>
          <div className="pr-[0.19px] mt-[30px] flex-col md:flex-row gap-[10px] w-full flex items-center justify-between">
            {/* <div className="text-white/60 text-[15px] font-normal font-['Inter'] leading-[18px] tracking-tight">
              © 2023 Pixelic, Inc. dba Relate.
            </div> */}
            <div className="text-white/60 md:pe-[70px] text-[15px] font-normal font-['Inter'] leading-[18px] tracking-tight">
              Powered by DevUnity Software
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
