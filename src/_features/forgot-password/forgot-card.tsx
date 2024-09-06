import { cn } from "@/tools/lib/utils";
import { Mail, Phone } from "lucide-react";

export type ForgotPasswordType = "email" | "sms";

type IProps = {
  active?: boolean;
  type: ForgotPasswordType;
  onSelect: () => void;
};

export default function ForgotPasswordCard({ type, onSelect, active }: IProps) {
  return (
    <article
      onClick={onSelect}
      className={cn(
        "flex gap-5 p-4 py-3 border transition-all duration-300 ease-in-out rounded-md lg:hover:cursor-pointer lg:hover:opacity-70",
        active ? "border-primary bg-primaryPastel" : "border-gray-200"
      )}
    >
      <div className="w-9 h-9 rounded-full bg-gray-100 grid place-items-center">
        {type === "email" ? (
          <Mail
            width={18}
            className={cn("text-gray-500", active && "text-primary")}
          />
        ) : (
          <Phone
            width={18}
            className={cn("text-gray-500", active && "text-primary")}
          />
        )}
      </div>

      <div className="space-y-1">
        <h4 className={cn("font-medium text-sm", active && "text-primary")}>
          Reset via {type === "sms" ? "SMS" : "email"}
        </h4>
        <p className="max-w-[220px] text-xs text-gray-500">
          Link reset will be send to your email address registered
        </p>
      </div>
    </article>
  );
}
