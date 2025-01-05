"use client";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

interface MenuItem {
  title: string;
  link: string;
}

const Navbar = () => {
  const menuItems: MenuItem[] = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Services", link: "/services" },
    { title: "Projects", link: "/projects" },
    { title: "Blogs", link: "/blogs" },
    { title: "Contact", link: "/contact" },
  ];

  const [isOffcanvasMenuOpen, setOffcanvasMenuOpen] = useState(false);
  const shadowRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;

    if (shadowRef.current) {
      const rect = shadowRef.current.parentElement!.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      if (x >= 0 && y >= 0 && x <= rect.width && y <= rect.height) {
        shadowRef.current.style.display = "block";
        shadowRef.current.style.left = `${x}px`;
        shadowRef.current.style.top = `${y}px`;
      } else {
        shadowRef.current.style.display = "none";
      }
    }
  };

  const handleMenuToggle = () => setOffcanvasMenuOpen((prev) => !prev);

  useEffect(() => {
    const section = shadowRef.current?.parentElement;

    const handleMouseEnter = () => {
      document.addEventListener("mousemove", handleMouseMove);
    };

    const handleMouseLeave = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (shadowRef.current) {
        shadowRef.current.style.display = "none";
      }
    };

    section?.addEventListener("mouseenter", handleMouseEnter);
    section?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      section?.removeEventListener("mouseenter", handleMouseEnter);
      section?.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <header
      className="relative "
      style={{ backgroundImage: "url('/home/heroBg.png')" }}
    >
      <div className="w-full overflow-hidden relative pb-[100px]">
        <nav className="navbar bg-base-100 container pt-[16px] bg-transparent">
          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 z-10">
            <ul className="flex gap-[23px] items-center">
              {menuItems.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.link}
                    className="font-[inter] text-[14px] font-[500] text-white capitalize hover:text-[var(--primary-color)]"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`absolute top-0 left-0 w-full h-screen bg-[#AAA7A7] z-10 transform ${
              isOffcanvasMenuOpen ? "translate-x-0" : "translate-x-[-120%]"
            } transition-transform duration-300 ease-in-out md:hidden`}
          >
            <ul className="flex flex-col px-[20px] gap-[23px] items-center pt-[100px]">
              {menuItems.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.link}
                    className="font-[inter] text-[14px] font-[500] text-white capitalize hover:text-[var(--primary-color)]"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex-1 md:hidden z-20">
            <button
              aria-label={isOffcanvasMenuOpen ? "Close menu" : "Open menu"}
              onClick={handleMenuToggle}
              className="w-6 h-6 text-white"
            >
              {isOffcanvasMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  className="w-6 h-6"
                >
                  <path
                    fill="#fff"
                    d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 17 14"
                  className="w-6 h-6"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Contact Us Button */}
          <div className="flex-none z-10">
            <button className="bg-[var(--primary-color)] text-[16px] font-[inter] font-[500] capitalize rounded-[8px] w-[126px] h-[48px]">
              Contact Us
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="flex container mx-auto max-w-[930px] flex-col items-center justify-center z-10 relative mt-[200px]">
          <div className="border-[25px] border-transparent p-[20px] relative">
            <div
              className="absolute w-full h-full top-0 left-0"
              style={{
                borderRadius: "40px",
                border: "32px solid #00CE93",
                mixBlendMode: "screen",
                filter: "blur(112.5px)",
              }}
            ></div>
            <img className="" src="/siteLogo.png" alt="Logo" />
          </div>
          <div className="mt-[70px]">
            <h2 className="font-[800] text-[50px] text-[var(--primary-color)] text-center">
              Towards a distinctive digital future
            </h2>
            <p className="font-[400] text-[25px] text-white text-center">
              We provide innovative software solutions, website and application
              design that effectively achieve your business goals.
            </p>
          </div>
          <div className="flex items-center gap-[30px] mt-[50px]">
            <button className="bg-[var(--primary-color)] w-[193px] text-[20px] text-white h-[66px] rounded-[20px]">
              Contact us
            </button>
            <button className="border-[2px] border-[var(--primary-color)] w-[165px] text-[20px] text-white h-[66px] rounded-[20px]">
              Services
            </button>
          </div>
        </div>

        {/* moon image */}
        <div className="absolute top-0 right-0 rounded-full ">
          <div className="w-full relative">
            <img src="/home/heroMoon.png" alt="heroMoon" />
            <div
              className="w-[54%] h-full flex absolute top-[-110px] right-0 "
              style={{
                background: "radial-gradient(circle, #d9fff4, #ffffff)",
                filter: " blur(115px)",
                mixBlendMode: "screen",
              }}
            ></div>
          </div>
        </div>

        {/* Mouse Shadow */}
        <div
          ref={shadowRef}
          className="hidden sm:flex absolute translate-x-[-50%] translate-y-[-50%] z-0 w-[170px] h-[170px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, #00ce94, #ffffff)",
            filter: "blur(80px)",
            mixBlendMode: "screen",
          }}
        />
        {/* header bottom blur */}
        <div
          className="w-[200%] h-[80px] absolute bottom-[-30px] inset-x-[-20px] right-0 z-50 bg-white"
          style={{
            filter: "blur(5px)",
          }}
        ></div>
      </div>
    </header>
  );
};

export default Navbar;
