import ImgCard from "@/components/ImgCard";
import { Button } from "@/components/ui/button";
import { mdiArrowRightCircleOutline } from "@mdi/js";
import Icon from "@mdi/react";

function Home() {
  return (
    <div>
      <ImgCard
        className="w-full h-96"
        blur={2}
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
    </div>
  );
}

export default Home;
