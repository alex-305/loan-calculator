import ServiceCard from "@/components/Home/ServiceCard";
import Testimonials from "@/components/Home/Testimonials";
import ImgCard from "@/components/ImgCard";
import { Button } from "@/components/ui/button";
import {
  mdiArrowRightCircleOutline,
  mdiFoodAppleOutline,
  mdiOfficeBuildingOutline,
  mdiSproutOutline,
  mdiTreeOutline,
} from "@mdi/js";
import Icon from "@mdi/react";

type Service = {
  imgSrc: string;
  title: string;
  description: string;
  icon: string;
};

const services: Service[] = [
  {
    imgSrc: "https://fastly.picsum.photos/id/107/600/600.jpg?hmac=-Iree9HQI8zIhC2oSuJoO8GS0t7xtZkHSy3WOCiLG0o",
    title: "Agriculture",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce cursus cras cras in pulvinar montes. Facilisis viverra dolor feugiat sollicitudin montes lobortis. Taciti accumsan iaculis primis nunc scelerisque dui rhoncus.",
    icon: mdiSproutOutline,
  },
  {
    imgSrc: "https://fastly.picsum.photos/id/678/600/600.jpg?hmac=FdE4SYvKTkXi1NYiuqrRLy1JDVvqAevf3GKWQkmotR0",
    title: "Adventure",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce cursus cras cras in pulvinar montes. Facilisis viverra dolor feugiat sollicitudin montes lobortis. Taciti accumsan iaculis primis nunc scelerisque dui rhoncus.",
    icon: mdiTreeOutline,
  },
  {
    imgSrc: "https://fastly.picsum.photos/id/522/600/600.jpg?hmac=hMsiSZIkns7dauzjEFb9aY8qUIOVK-FFDRvBha1ggkc",
    title: "Real Estate",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce cursus cras cras in pulvinar montes. Facilisis viverra dolor feugiat sollicitudin montes lobortis. Taciti accumsan iaculis primis nunc scelerisque dui rhoncus.",
    icon: mdiOfficeBuildingOutline,
  },
  {
    imgSrc: "https://fastly.picsum.photos/id/395/600/600.jpg?hmac=8u3zF1QpKB47mek1n5s8uiE96B12cw6H967hGe1fRrE",
    title: "Food Industry",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce cursus cras cras in pulvinar montes. Facilisis viverra dolor feugiat sollicitudin montes lobortis. Taciti accumsan iaculis primis nunc scelerisque dui rhoncus.",
    icon: mdiFoodAppleOutline,
  },
];

function Home() {
  return (
    <div>
      <ImgCard
        className="w-full h-96"
        blur={3}
        src="https://fastly.picsum.photos/id/257/1920/1080.jpg?hmac=fnui8efiPPJGYp59XHBzwvxXlEwX4Zokt9-SnkmnxPI">
        <div className="p-20 text-white w-2/5">
          <div className="text-3xl font-bold">Lorem Ipsum Services</div>
          <div>
            Amet dis aliquet imperdiet; dignissim taciti maximus fringilla iaculis fermentum. Ultrices fringilla montes
            id himenaeos curabitur est hendrerit placerat volutpat.
          </div>
          <Button variant="outline" className="text-black mt-4">
            Learn More
            <Icon path={mdiArrowRightCircleOutline} />
          </Button>
        </div>
      </ImgCard>
      <div className="flex justify-center align-center p-5 text-3xl font-semibold tracking-wide uppercase">
        Our Services
      </div>
      <div className="flex flex-row overflow-hidden">
        {services.map((s) => (
          <ServiceCard src={s.imgSrc} title={s.title} icon={s.icon} description={s.description} />
        ))}
      </div>
      <div className="mb-10">
        <div className="flex justify-center align-center text-3xl font-semibold mb-3">Our clients say...</div>
        <Testimonials />
      </div>
    </div>
  );
}

export default Home;
