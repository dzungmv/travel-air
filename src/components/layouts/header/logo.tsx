import Image from "next/image";
import { logo } from "../../../../public";

export default function HeaderLogo() {
  return (
    <figure className="flex items-center gap-2">
      <Image width={30} height={0} alt="" sizes="100vw" src={logo} />
      <figcaption className="text-lg font-semibold">Air Travel</figcaption>
    </figure>
  );
}
