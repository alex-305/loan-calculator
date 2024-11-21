import Icon from "@mdi/react";
import ImgCard from "../ImgCard";

type ServiceCardProps = {
  src: string;
  title: string;
  description: string;
  icon: string;
};

function ServiceCard({ src, title, description, icon }: ServiceCardProps) {
  return (
    <ImgCard
      className="w-1/4 hover:w-2/4 h-64 p-5 group transition-all duration-300 ease-in-out"
      imgClassName="filter brightness-50 rounded-md"
      src={src}>
      <div className="flex flex-row p-10">
        <div>
          <Icon size={5} path={icon} />
          <div className="text-2xl">{title}</div>
        </div>
        <div className="text-sm pl-5 blur-sm opacity-0 invisible delay-300 group-hover:opacity-100 group-hover:blur-none group-hover:visible transition-opacity duration-50 ease-in-out">{description}</div>
      </div>
      <div></div>
    </ImgCard>
  );
}

export default ServiceCard;
