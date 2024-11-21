import Icon from "@mdi/react";
import ImgCard from "../ImgCard"

type ServiceCardProps = {
    src:string;
    title:string;
    description:string;
    icon:string;
}

function ServiceCard({src, title, description, icon}:ServiceCardProps) {

    return (
        <ImgCard className="w-1/4 h-1/4 p-5 group"  imgClassName="filter brightness-50 rounded-md" src={src} >
            <div className="p-10 text-white">
                <Icon path={icon}/>
                <div className="text-2xl">{title}</div>
                <div className="text-sm leading-tight hidden group-hover:flex">{description}</div>
            </div>
            <div>

            </div>
        </ImgCard>
    )
}

export default ServiceCard