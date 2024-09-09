import { cn } from "@/tools/lib/utils";
import { ImageProps } from "next/image";
import { default as Photo } from "next/image";

type IProps = ImageProps & {
  size?: number;
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
