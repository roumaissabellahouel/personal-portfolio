import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import { useState } from "react";
import { ProjectCard } from "./ProjectCard";



    
export const ProjectSection = ()=>{

     const projects = [
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
      ];

    const [buttonIndex , setButtonIndex] = useState(0);

    const handleButtonClick = (index)=>{
           setButtonIndex(index);
    }

    return(
        <section id="Projects" className="bg-black flex justify-center py-[70px]">
            <div className="container w-[80%] flex flex-col items-center">
                <h2 className='text-white font-bold tracking-[.8px] text-[40px] mb-[16px] '>Projects</h2>
                <p className='text-[#B8B8B8] text-[18px] leading-[1.6rem] text-center lg:w-[60%] w-[90%] '>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>

                <nav className=" text-white lg:w-[80%] w-[90%]  px-0 mt-[16px]  rounded-[60px] flex bg-[#121212] border-[1px] border-gray-400  overflow-hidden   ">
                <button onClick={()=>{handleButtonClick(0)}} className={`nav-item z-[1] ${buttonIndex === 0 ? 'active' : ''} bg-transparent rounded-tl-[60px] rounded-bl-[60px] w-[33.3333%] py-[15px] relative `} ><a href="#" >item 1</a></button>
                <button onClick={()=>{handleButtonClick(1)}} className={`nav-item z-[1] ${buttonIndex === 1  ? 'active' : ''} bg-transparent w-[33.3333%] py-[15px] border-r-[1px] border-l-[1px] relative` }><a href="#" >item 2</a></button>
                <button onClick={()=>{handleButtonClick(2)}} className={`nav-item z-[1] ${buttonIndex === 2  ? 'active' : ''} bg-transparent rounded-tr-[60px] rounded-br-[60px] w-[33.3333%] py-15px] relative `}><a href="#" >item 3</a></button>
                </nav>

        {buttonIndex === 0 &&
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6  mt-[50px] w-[90%] ">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imgUrl={project.imgUrl}
            />
          ))}
        </div>}
        {buttonIndex === 1 &&
          <div className="mt-8">
            <p className="text-white">here are the projects of the items 2</p>
          </div>

        }
        {buttonIndex === 2 &&
          <div className="mt-8">
            <p className="text-white">here are the projects of the items 3</p>
          </div>

        }
            </div>
        </section>
    )
}