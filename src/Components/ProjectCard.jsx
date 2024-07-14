
export const ProjectCard = ({title , description,imgUrl })=>{
    return(
        <div className="projectCard m-0 transition delay-300 ease-in-out relative rounded-[20px] overflow-hidden  ">
            <img src={imgUrl} alt={title} />
            <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center opacity-0 transition delay-300 ease-in-out hover:opacity-[1]  ">
                <h4 className="text-white text-[25px] tracking-[.8px] font-semibold ">{title}</h4>
                <p className="text-white text-[16px] font-medium  ">{description}</p>
            </div>
        </div>
    )
}