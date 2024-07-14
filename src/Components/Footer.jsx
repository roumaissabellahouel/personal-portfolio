import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = ()=>{
    return(
        <div className="bg-black sm:pt-[250px] pt-[350px] pb-[60px] flex  justify-center ">
        <div className="container w-[90%] flex sm:flex-row flex-col sm:gap-0 gap-4 justify-between  items-center">
            <div className="left">
                <img src={logo} alt="logo" className='w-[150px]' />
            </div>
            <div className="right flex flex-col items-center">
            <div className='social-icons flex gap-3 mx-5'>
                   <a href="#" className='rounded-[50%] h-[38px] w-[38px] inline-flex justify-center items-center relative border border-white-half-opacity p-2 '><img src={navIcon1} className='' alt="socialmedia Icon" /></a>
                    <a href="#" className='rounded-[50%] h-[38px] w-[38px] inline-flex justify-center items-center relative border border-white-half-opacity p-2 '><img src={navIcon2} alt="socialmedia Icon" /></a>
                    <a href="#" className='rounded-[50%] h-[38px] w-[38px] inline-flex justify-center items-center relative border border-white-half-opacity p-2 '><img src={navIcon3} alt="socialmedia Icon" /></a>
                 </div>
                 <p className='text-gray-300 mt-[4px] text-[14px] '>Copyright 2022. All Rights Reserved</p>
            </div>
        </div>
        </div>
    )
}