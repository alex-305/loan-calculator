import { mdiFormatQuoteClose, mdiFormatQuoteOpen } from "@mdi/js";
import { Card, CardContent } from "../ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import Icon from "@mdi/react";

function Testimonials() {
  const clientTestimonials =
    "Lacus neque facilisi fringilla orci quis montes penatibus. Nulla eget iaculis a aliquam mauris mattis purus mus interdum. Nunc aliquet mauris vulputate, gravida nullam in. Senectus magnis primis vulputate vestibulum metus augue.";

  return (
    <Carousel className="w-full w-max-sm">
      <CarouselContent className="">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/3">
            <div className="p-1 ml-5">
              <Card className="select-none cursor-grab bg-emerald-950 text-white border-none">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="flex flex-col">
                    <span className="text-2xl font-semibold">
                      <Icon className="inline-block mr-1" size={1} path={mdiFormatQuoteOpen} />
                      {clientTestimonials}
                      <Icon className="inline-block ml-1" size={1} path={mdiFormatQuoteClose} />
                    </span>
                    <span className="text-slate-300">{"- Client " + (index + 1)}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="text-black absolute top-1/2 left-1 flex items-center justify-center">
        <CarouselPrevious className="relative left-0 translate-x-0 hover:translate-x-0 hover:bg-primary/90" />
      </div>
      <div className="text-black absolute top-1/2 right-1 flex items-center justify-center">
        <CarouselNext className="relative right-0 translate-x-0 hover:translate-x-0 hover:bg-primary/90" />
      </div>
    </Carousel>
  );
}

export default Testimonials;
