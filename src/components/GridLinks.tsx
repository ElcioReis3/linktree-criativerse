"use client";
import { Globe, Link2, MessageSquareMore, SendHorizontal } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

type LinkType = {
  label: string;
  url: string;
  icon?: React.ReactNode;
};

const links: LinkType[] = [
  {
    label: "NOSSO SITE",
    url: "https://erycklima77.lojavirtualnuvem.com.br/",
    icon: <Globe className="w-5 h-5" />,
  },
  {
    label: "WHATSAPP DO GRUPO",
    url: "https://chat.whatsapp.com/LahV9zfz5pmEA5ZGLQy2NW",
    icon: <MessageSquareMore className="w-5 h-5" />,
  },
  {
    label: "WHATSAPP ADMINISTRATIVO",
    url: "https://wa.me/5599982742942",
    icon: <SendHorizontal className="w-5 h-5" />,
  },
];

export const GridLinks = () => {
  const handleLink = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="w-full max-w-3xl flex flex-col p-1 gap-3 mt-36 m-auto ">
      <Separator />
      {links.map((link) => (
        <Button
          key={link.label}
          className="p-5 flex justify-between font-bold shadow-lg rounded-xl"
          onClick={() => handleLink(link.url)}
        >
          {link.icon}
          {link.label}
          <Link2 />
        </Button>
      ))}
      <Separator />
    </div>
  );
};
