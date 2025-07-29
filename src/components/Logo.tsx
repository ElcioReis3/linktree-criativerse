import Image from "next/image";

export const Logo = () => {
  return (
    <>
      <Image
        src="/images/logo-dark.png"
        width={500}
        height={400}
        alt="logo-light"
        className="w-full h-full object-cover block dark:hidden"
      />
      <Image
        src="/images/logo.png"
        width={500}
        height={400}
        alt="logo-dark"
        className="w-full h-full object-cover hidden dark:block"
      />
    </>
  );
};
