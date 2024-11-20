type ImgCardProps = {
  src: string;
  blur?: number;
  className?: string;
  children?: React.ReactNode | null;
};

function ImgCard({ src, className, children, blur }: ImgCardProps) {
  return (
    <div className={`relative ${className}`}>
      <img src={src} className={`w-full h-full object-cover blur-[${blur ?? 0}px]`} />
      {children && <div className="absolute top-0 left-0 w-full h-full flex">{children}</div>}
    </div>
  );
}

export default ImgCard;
