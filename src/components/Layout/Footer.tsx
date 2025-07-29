"use client";
import { Copyright, Mail, MessageCircleMore } from "lucide-react";
import { Separator } from "../ui/separator";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const Footer = () => {
  const router = useRouter();

  const handlePage = () => {
    window.open("https://portifolio-elcio-reis.netlify.app/");
  };
  return (
    <footer className="w-full text-center py-10">
      <Separator />
      <div className="w-max m-auto mt-7">
        <div className="flex gap-2 justify-center">
          <Copyright className="w-4" />
          <span
            className="font-bold cursor-pointer underline"
            onClick={handlePage}
          >
            ElcioServiçosOn
          </span>
        </div>
        <div className="flex flex-col text-xs text-gray-700 gap-3 m-auto mt-3">
          <div className="flex gap-7">
            <a
              href="mailto:7empresaelcio@gmail.com"
              className="flex items-center gap-1 text-blue-500 hover:underline m-auto"
              onClick={() =>
                window.open(`mailto:7empresaelcio@gmail.com`, "_blank")
              }
            >
              <Mail size={16} /> Enviar Email
            </a>
            <Link
              href="https://wa.me/5599996452760"
              target="_blank"
              className="flex items-center gap-1 text-blue-500 hover:underline"
            >
              <MessageCircleMore size={16} /> Fale comigo
            </Link>
          </div>
          <span
            className="underline text-gray-300 cursor-pointer"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/%C3%A9lcio-reis-6944352a7/"
              )
            }
          >
            Linkedin
          </span>{" "}
        </div>
      </div>
    </footer>
  );
};
