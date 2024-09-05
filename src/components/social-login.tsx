import Image from "next/image";
import { face, google, x } from "../../public";

export default function SocialLogin() {
  return (
    <section className="mt-6 grid gap-6 grid-cols-3">
      <div className="border rounded-md grid place-items-center border-gray-200 h-10 hover:cursor-pointer hover:opacity-50">
        <Image width={0} height={0} alt="" src={google} />
      </div>

      <div className="border rounded-md grid place-items-center border-gray-200 h-10 hover:cursor-pointer hover:opacity-50">
        <Image width={0} height={0} alt="" src={face} />
      </div>

      <div className="border rounded-md grid place-items-center border-gray-200 h-10 hover:cursor-pointer hover:opacity-50">
        <Image width={0} height={0} alt="" src={x} />
      </div>
    </section>
  );
}
