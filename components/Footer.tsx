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
              <div className=" py-px justify-start items-start flex">
                <div className="text-center text-white/60 text-lg font-normal font-['Font Awesome 5 Brands'] leading-[18px]">
                  <svg
                    width="19"
                    height="15"
                    viewBox="0 0 19 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.6367 3.77344C16.6367 3.94922 16.6367 4.08984 16.6367 4.26562C16.6367 9.15234 12.9453 14.7422 6.16016 14.7422C4.05078 14.7422 2.11719 14.1445 0.5 13.0898C0.78125 13.125 1.0625 13.1602 1.37891 13.1602C3.10156 13.1602 4.68359 12.5625 5.94922 11.5781C4.33203 11.543 2.96094 10.4883 2.50391 9.01172C2.75 9.04688 2.96094 9.08203 3.20703 9.08203C3.52344 9.08203 3.875 9.01172 4.15625 8.94141C2.46875 8.58984 1.20312 7.11328 1.20312 5.32031V5.28516C1.69531 5.56641 2.29297 5.70703 2.89062 5.74219C1.87109 5.07422 1.23828 3.94922 1.23828 2.68359C1.23828 1.98047 1.41406 1.34766 1.73047 0.820312C3.55859 3.03516 6.30078 4.51172 9.35938 4.6875C9.28906 4.40625 9.25391 4.125 9.25391 3.84375C9.25391 1.80469 10.9062 0.152344 12.9453 0.152344C14 0.152344 14.9492 0.574219 15.6523 1.3125C16.4609 1.13672 17.2695 0.820312 17.9727 0.398438C17.6914 1.27734 17.1289 1.98047 16.3555 2.4375C17.0938 2.36719 17.832 2.15625 18.4648 1.875C17.9727 2.61328 17.3398 3.24609 16.6367 3.77344Z"
                      fill="white"
                      fillOpacity="0.6"
                    />
                  </svg>
                </div>
              </div>
              <div className=" pl-[0.63px] pr-[2.37px] py-px justify-start items-start flex">
                <div className="text-center text-white/60 text-lg font-normal font-['Font Awesome 5 Brands'] leading-[18px]">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.3799 0.554688C15.9775 0.554688 16.5049 1.08203 16.5049 1.71484V15.1797C16.5049 15.8125 15.9775 16.3047 15.3799 16.3047H1.84473C1.24707 16.3047 0.754883 15.8125 0.754883 15.1797V1.71484C0.754883 1.08203 1.24707 0.554688 1.84473 0.554688H15.3799ZM5.50098 14.0547V6.56641H3.18066V14.0547H5.50098ZM4.34082 5.51172C5.0791 5.51172 5.67676 4.91406 5.67676 4.17578C5.67676 3.4375 5.0791 2.80469 4.34082 2.80469C3.56738 2.80469 2.96973 3.4375 2.96973 4.17578C2.96973 4.91406 3.56738 5.51172 4.34082 5.51172ZM14.2549 14.0547V9.94141C14.2549 7.9375 13.7979 6.35547 11.4424 6.35547C10.3174 6.35547 9.54395 6.98828 9.22754 7.58594H9.19238V6.56641H6.97754V14.0547H9.29785V10.3633C9.29785 9.37891 9.47363 8.42969 10.7041 8.42969C11.8994 8.42969 11.8994 9.55469 11.8994 10.3984V14.0547H14.2549Z"
                      fill="white"
                      fillOpacity="0.6"
                    />
                  </svg>
                </div>
              </div>
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
                  Product
                </div>
              </div>
              <div className="flex-col justify-start items-center md:items-start gap-3 flex">
                <div className="self-stretch justify-start items-center flex-col md:items-start inline-flex">
                  <div className="justify-center items-center flex text-white/60 text-base font-normal font-['Inter'] leading-normal">
                    Product
                  </div>
                </div>
                <div className="self-stretch justify-start items-center flex-col md:items-start inline-flex">
                  <div className="justify-center items-center flex text-white/60 text-base font-normal font-['Inter'] leading-normal">
                    Changelog
                  </div>
                </div>
                <div className="self-stretch justify-start items-center flex-col md:items-start inline-flex">
                  <div className="justify-center items-center flex text-white/60 text-base font-normal font-['Inter'] leading-normal">
                    Guide
                  </div>
                </div>
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
                <div className="self-stretch justify-start items-center flex-col md:items-start inline-flex text-white/60 text-base font-normal font-['Inter'] leading-normal">
                  한국어
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-[40px] ">
          <div className="w-full border-t border-white/10"></div>
          <div className="pr-[0.19px] mt-[30px] flex-col md:flex-row gap-[10px] w-full flex items-center justify-between">
            <div className="text-white/60 text-[15px] font-normal font-['Inter'] leading-[18px] tracking-tight">
              © 2023 Pixelic, Inc. dba Relate.
            </div>
            <div className="text-white/60 md:pe-[70px] text-[15px] font-normal font-['Inter'] leading-[18px] tracking-tight">
              Backed by Y Combinator
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
