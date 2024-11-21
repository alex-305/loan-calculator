type ImgCardProps = {
  src: string;
  blur?: number;
  className?: string;
  children?: React.ReactNode | null;
  imgClassName?: string;
};

function ImgCard({ src, className, children, blur, imgClassName }: ImgCardProps) {
  return (
    <div className={`relative ${className}`}>
      <img src={src} className={`${imgClassName} w-full h-full object-cover blur-[${blur ?? 0}px]`} />
      {children && <div className="absolute top-0 left-0 w-full h-full flex">{children}</div>}
    </div>
  );
}

export default ImgCard;
