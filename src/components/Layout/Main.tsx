"use client";
import {
  BuildingIcon,
  CameraIcon,
  Globe,
  LightbulbIcon,
  MailIcon,
  PenToolIcon,
  RocketIcon,
  ShirtIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { Separator } from "../ui/separator";
import { DynamicButtons } from "../DynamicButtons";
import { Alert, AlertTitle } from "../ui/alert";
import { CustomIcon } from "../ui/customIconWhats";
import { InstagramIcon } from "../ui/instagramIcon";
import Image from "next/image";
import { Logo } from "../Logo";

type phoneType = {
  phoneOne: number;
  phoneTwo?: number;
};

export const Main = () => {
  const name: string = "@Criativerse_";
  const description: string = "Empresa de design digital.";
  const phone: phoneType[] = [{ phoneOne: 99996452760 }];
  const instagram: string = "criativerse_";
  const email: string | null = null;
  const message: string = `Olá! quero saber mais detalhes sobre um produto.`;
  const encodedMessage = encodeURIComponent(message);
  const pageSite: string | null = "https://criativerse.com.br/";

  const buttons = [
    {
      id: "site",
      show: !!pageSite,
      gradient: "from-blue-500 to-blue-700",
      label: "Acessar meu Site",
      icon: <Globe />,
      onClick: () => window.open(pageSite!, "_blank"),
    },
    {
      id: "whats-principal",
      show: !!phone[0]?.phoneOne,
      gradient: "from-green-500 to-green-700",
      label: "WhatsApp Principal",
      icon: <CustomIcon />,
      onClick: () =>
        window.open(
          `https://wa.me/55${phone[0].phoneOne}?text=${encodedMessage}`,
          "_blank"
        ),
    },
    {
      id: "whats-secundario",
      show: !!phone[0]?.phoneOne,
      gradient: "from-green-500 to-green-700",
      label: "WhatsApp do Grupo",
      icon: <CustomIcon />,
      onClick: () =>
        window.open(
          `https://chat.whatsapp.com/LahV9zfz5pmEA5ZGLQyd2NW`,
          "_blank"
        ),
    },
    {
      id: "instagram",
      show: !!instagram,
      gradient: "from-purple-500 to-purple-700",
      label: "Instagram",
      icon: <InstagramIcon />,
      onClick: () =>
        window.open(`https://instagram.com/${instagram}/`, "_blank"),
    },
    {
      id: "email",
      show: !!email,
      gradient: "from-blue-500 to-blue-700",
      label: "Enviar um Email",
      icon: <MailIcon />,
      onClick: () => window.open(`mailto:${email}`, "_blank"),
    },
  ];

  const publicos = [
    {
      titulo: "Empreendedores Criativos",
      icone: RocketIcon, // pessoas que precisam de identidade visual para seus projetos
    },
    {
      titulo: "Agências de Publicidade",
      icone: BuildingIcon, // empresas que contratam designers para demandas visuais
    },
    {
      titulo: "Influenciadores e Criadores de Conteúdo",
      icone: CameraIcon, // criadores que precisam de identidade para redes sociais
    },
    {
      titulo: "Lojas Virtuais e E-commerce",
      icone: ShoppingCartIcon, // e-commerces que demandam banners, logos e UI
    },
    {
      titulo: "Startups e Projetos Digitais",
      icone: LightbulbIcon, // inovação e design de interface
    },
    {
      titulo: "Profissionais Autônomos e Liberais",
      icone: PenToolIcon, // freelancers, coaches, terapeutas, etc.
    },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-300 dark:bg-black p-3">
      <div className="max-w-xl w-full bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl p-6 flex flex-col items-center gap-4">
        <div className="relative w-full flex flex-col items-center justify-center mb-7">
          {/* Banner fixo no topo */}
          <div className="w-full h-44 bg-black rounded-xl overflow-hidden">
            <Image
              src="/images/banner.png"
              width={1000}
              height={500}
              quality={100}
              alt="banner-marca"
              className="w-full h-fulll object-cover rounded-xl"
            />
          </div>

          {/* Logo abaixo do banner, centralizada */}
          <div className="-mt-10 md:-mt-16 z-10 w-40 h-40 rounded-full overflow-hidden object-cover bg-white shadow-lg">
            <Logo />
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-center dark:text-white">
            {name}
          </h1>
          <p className="text-center text-sm text-neutral-600 dark:text-neutral-300">
            {description}
          </p>
        </div>

        <Separator />
        <DynamicButtons buttons={buttons} />
        <Separator />

        <div className="w-full grid md:grid-cols-2 gap-x-2 gap-y-1 text-sm ml-4 xs:grid-cols-1">
          {publicos.map((item, index) => (
            <Alert
              key={index}
              className=" opacity-90 hover:opacity-100 active:opacity-100 flex items-center gap-2"
            >
              <item.icone className="w-4 h-4" />
              <AlertTitle>{item.titulo}</AlertTitle>
            </Alert>
          ))}
        </div>

        <Separator />

        <div className="flex flex-col gap-1 mt-4 font-bold text-muted-foreground text-center">
          <span>Faça já seu orçamento.</span>
        </div>
      </div>
    </div>
  );
};
