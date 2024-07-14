
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import metter1 from "../assets/img/meter1.svg";
import metter2 from "../assets/img/meter2.svg";
import metter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = ()=>{

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      
    return(
        <section id='Skills' className='flex justify-center relative bg-[#121212] pb-[50px] mt-0  ' >
            <div className="container mt-[-60px] w-[90%] bg-[#151515] rounded-[60px] py-[60px] px-[20px] flex flex-col items-center z-[1]  ">
                <h2 className='text-white font-bold tracking-[.8px] text-[40px] mb-[16px] '>Skills</h2>
                <p className='text-[#B8B8B8] text-[18px] leading-[1.6rem] text-center lg:w-[60%] w-[90%] '>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text.                </p>
                <div className=' lg:w-[80%] w-[80%] mt-[60px]  '>
                <Carousel responsive={responsive} >
                   <div className=' flex flex-col items-center' >
                     <img src={metter1} alt="metter 1" className='w-[140px] mb-4 ' />
                     <h5 className='text-white text-[20px] font-semibold text-center tracking-[.8px] leading-[1.2em] ' >Web Developement</h5>
                   </div>
                   <div className=' flex flex-col items-center'>
                     <img src={metter2} alt="metter 2" className='w-[140px] mb-4 ' />
                     <h5 className='text-white text-[20px] font-semibold text-center tracking-[.8px] leading-[1.2em] '>Web Design</h5>
                   </div>
                   <div className=' flex flex-col items-center'>
                     <img src={metter3} alt="metter 3" className='w-[140px] mb-4 ' />
                     <h5 className='text-white text-[20px] font-semibold text-center tracking-[.8px] leading-[1.2em] '>UI/UX Design</h5>
                   </div>
                </Carousel>
                </div>
            </div>
            <img className="w-[40%] absolute  bottom-0 top-[10%] left-0 " src={colorSharp} alt="Image"  />
        </section>
    )
}