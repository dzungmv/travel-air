import { HTMLAttributes } from "react";

type IProps = HTMLAttributes<HTMLDivElement> & {
  title: string;
  description: string;
};

export default function AuthLabel({
  className,
  title,
  description,
  ...props
}: IProps) {
  return (
    <section className={className} {...props}>
      <h2 className="text-3xl font-semibold text-center">{title}</h2>
      <p className="mt-4 text-sm text-gray-500 text-center">{description}</p>
    </section>
  );
}
