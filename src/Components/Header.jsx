import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { useState, useEffect, useRef } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: 'Home' },
  { name: 'Skills', href: 'Skills' },
  { name: 'Projects', href: 'Projects' }
];

export const Header = () => {
  const MenuRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [ismenuOpen, setismenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setismenuOpen(false);
    }
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (event) => {
      if (MenuRef.current && !MenuRef.current.contains(event.target)) {
        setismenuOpen(false);
      }
    };

    if (ismenuOpen) {
      document.addEventListener('mousedown', handleClick);
    } else {
      document.removeEventListener('mousedown', handleClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [ismenuOpen]);

  useEffect(() => {
    const sections = navigation.map(item => document.getElementById(item.href));
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    let lastActiveSection = '';

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          lastActiveSection = entry.target.id;
          setActiveSection(entry.target.id);
        } else if (lastActiveSection === entry.target.id && !entry.isIntersecting) {
          setActiveSection('');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach(section => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <header className="">
      <div className={`flex justify-between items-center py-4 px-6 fixed w-full transition duration-300 ease-in-out top-0 z-10 ${scrolled ? 'bg-[#121212]' : 'bg-transparent'}`}>
        <a href="#">
          <img src={logo} alt="MyLogo" className="w-[110px]" />
        </a>
        <div className="lg:flex items-center gap-4 hidden">
          <nav className="flex">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={`#${item.href}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`text-gray-400  text-[18px] mr-4 font-sans font-400 hover:text-white cursor-pointer ${activeSection === item.href ? 'text-white ' : ''}`}
              >
                {item.name}
              </a>
            ))}
          </nav>
          <div className="social-icons flex gap-3 mx-5">
            <a href="#" className="rounded-[50%] h-[38px] w-[38px] inline-flex justify-center items-center relative border border-white-half-opacity p-2"><img src={navIcon1} alt="socialmedia Icon" /></a>
            <a href="#" className="rounded-[50%] h-[38px] w-[38px] inline-flex justify-center items-center relative border border-white-half-opacity p-2"><img src={navIcon2} alt="socialmedia Icon" /></a>
            <a href="#" className="rounded-[50%] h-[38px] w-[38px] inline-flex justify-center items-center relative border border-white-half-opacity p-2"><img src={navIcon3} alt="socialmedia Icon" /></a>
          </div>
          <button className="connect-btn border-2 text-white font-medium py-3 px-5">
            <a href="#Contact" onClick={(e) => { e.preventDefault(); scrollToSection('Contact'); }}>Let’s Connect</a>
          </button>
        </div>

        <div className="lg:hidden">
          <button onClick={() => { setismenuOpen(true); }} className="text-white rounded-md -m-2.5 p-2.5 active:text-grey-500">
            <Bars3Icon className="h-6 w-6" />
          </button>
          {ismenuOpen && (
            <div ref={MenuRef} className="bg-[#121212] h-[100vh] p-6 w-[320px] absolute top-0 right-0 transition duration-300 ease-in-out">
              <div className="py-2 flex justify-between items-center">
                <a href="#">
                  <img src={logo} alt="MyLogo" className="w-[50px]" />
                </a>
                <button
                  type="button"
                  onClick={() => setismenuOpen(false)}
                  className="rounded-md text-white active:text-gray-500"
                >
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
              <div className="divide-y divide-gray-100/50 mt-4">
                <div>
                  <div className="space-y-6 text-white flex flex-col py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={`#${item.href}`}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(item.href);
                        }}
                        className={`text-white opacity-75 text-16px mr-4 font-sans font-thin hover:opacity-1 cursor-pointer ${activeSection === item.href ? 'text-red-400 opacity-100' : ''}`}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="flex gap-3 mb-6">
                    <a href="#" className="h-[38px] w-[38px] p-2"><img src={navIcon1} alt="socialmedia Icon" /></a>
                    <a href="#" className="h-[38px] w-[38px] p-2"><img src={navIcon2} alt="socialmedia Icon" /></a>
                    <a href="#" className="h-[38px] w-[38px] p-2"><img src={navIcon3} alt="socialmedia Icon" /></a>
                  </div>
                </div>
                <div className="py-4">
                  <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('Contact'); }} className="text-white  font-medium mt-4 hover:opacity-1"><span>Let's connect</span></a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
