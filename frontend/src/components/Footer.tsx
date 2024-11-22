import { FacebookIcon, LinkedInIcon, TikTokIcon, XIcon, YoutubeIcon } from "@/assets/icons";

type FooterLinkProps = {
    title: string
    link: string
}

function FooterLink({title, link}:FooterLinkProps) {

    return (
    <a className="text-2xl hover:text-emerald-400 inline-block leading-none" href={link}>
        {title}
    </a>
    );
}

type FooterTitleProps = {
    children?: React.ReactNode | null;
}

function FooterTitle({children}:FooterTitleProps) {
    return (
    <div className="text-3xl font-semibold tracking-wide uppercase pb-3 text-white">
        {children}
    </div>
    )

}

function Footer() {
  return (
  <div className="pt-10 pb-0 mb-0 px-10 flex flex-row flex-shrink-0 bg-slate-900">
    <div className="w-1/3">
        <FooterTitle>Lorem Ipsum Services</FooterTitle>
        <a href="tel:+13055555555">305-555-5555</a>
        <div className="flex flex-col leading-none text-gray-200 text-sm">
            <span>124 Conch St.</span> 
            <span>Bikini Bottom</span>
            <span>Pacific Ocean</span>
        </div>
    </div>
    <div className="w-1/3">
        <FooterTitle>Links</FooterTitle>
        <div className="flex flex-col space-y-1 items-start">
            <FooterLink title="Services" link=""/>
            <FooterLink title="About" link=""/>
            <FooterLink title="Careers" link=""/>
            <FooterLink title="Vendors Program" link=""/>
            <FooterLink title="News" link=""/>
            <FooterLink title="Contact Us" link=""/>
        </div>
    </div>
    <div className="w-1/3">
        <FooterTitle>Keep in touch</FooterTitle>
        <a href="mailto:lorem@ipsum.com">Contact us: lorem@ipsum.com</a>
        <div className="flex flex-row align-center space-x-3 size-96">
            <a href="">
                <YoutubeIcon/>
            </a>
            <a href="">
                <XIcon/>
            </a>
            <a href="">
                <TikTokIcon/>
            </a>
            <a href="">
                <FacebookIcon/>
            </a>
            <a href="">
                <LinkedInIcon/>
            </a>
        </div>
    </div>
  </div>
  );
}

export default Footer;
