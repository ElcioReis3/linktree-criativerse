import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Linktree Criativerse",
  description: "Conheça nossas redes sociais",

  openGraph: {
    title: "Página de links",
    description: "Clique em nossos links e conheça-nos.",
    url: "https://criativerse-design-cx.netlify.app/",
    siteName: "Criativerse Design",
    images: [
      {
        url: "https://criativerse-design-cx.netlify.app/_next/image?url=%2Fimages%2Flogo.png&w=640&q=75", // imagem de destaque
        width: 1200,
        height: 630,
        alt: "Imagem de capa para compartilhamento",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // ajuste os pesos que você vai usar
  variable: "--font-poppins", // opcional, se quiser usar como uma CSS variable
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={poppins.className}>
      <body className="bg-gradient-to-b from-white to-gray-400 dark:bg-black dark:from-black dark:to-black">
        {" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
