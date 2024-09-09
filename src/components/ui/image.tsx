import { ImageProps, default as Photo } from "next/image";

type IProps = ImageProps & {
  size?: number | string;
};

export default function Image({
  className,
  src,
  width,
  height,
  alt = "",
  sizes,
  size,
  ...props
}: IProps) {
  return (
    <Photo
      width={0}
      height={0}
      src={src}
      style={{
        width: width ?? size,
        height: height ?? size,
      }}
      alt={alt}
      sizes={sizes ?? "100vw"}
      className={className}
      {...props}
    />
  );
}
