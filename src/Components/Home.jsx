import homeBg from "../assets/img/banner-bg.png";
import homeImg from "../assets/img/header-img.svg";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { useState ,  useEffect } from "react";



export const Home = ()=>{

const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 2000;



  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  const scrollToSection = () => {
    const section = document.getElementById("Contact");
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

    return(
        
          <section className="min-h-screen py-[10rem] sm:py-[7rem] px-3 bg-homeBg bg-cover bg-no-repeat bg-center  w-full flex items-center justify-center" id="Home"  >
            <div className="container flex    justify-center items-center">
            <div className="left lg:w-[50%] w-[80%]  flex flex-col items-center md:items-start ">
                <div className=" flex flex-col items-center md:items-start">
                   
                     <h3 className= "inline-block bg-custom-gradient px-[15px] py-[8px] border-myGrey border-[1px] mt-[16px] text-white font-[500] tracking-[1px] text-[20px] " >Welcome to my Portfolio</h3>
                   
                   <h1 className="my-4 md:text-[75px] text-[60px] text-center md:text-left text-white leading-[5rem] font-bold" >{`Hi! i'am Roumi`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
               <p className="w-[96%] text-center md:text-left text-[15px] md:text-[18px] tracking-[0.8px] text-[#B8B8B8] " >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <button onClick={(e) => { e.preventDefault(); scrollToSection(); }} className="mt-[40px] transition-transform duration-300 ease-in-out hover:scale-95 " >
                    <a href="#Contact"className="flex items-center text-white font-semibold text-[20px] tracking-[0.8px] gap-2  ">
                       <span> let's connect</span>
                       <IoArrowForwardCircleOutline className=" text-[25px]  " />
                    </a>
                </button>
            </div>
            <div className="right hidden md:flex">
               <img src={homeImg} alt="home img" className="lg:w-[500px] w-[400px]  animate-updown " />
            </div>
            </div>
          </section>
        
    )
}