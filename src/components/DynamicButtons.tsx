"use client";
import { Button } from "./ui/button";

type ButtonItem = {
  id: string;
  show: boolean;
  gradient: string;
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
};

type Props = {
  buttons: ButtonItem[];
};

export const DynamicButtons = ({ buttons }: Props) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      {buttons
        .filter((btn) => btn.show)
        .map((btn) => (
          <div
            key={btn.id}
            className={`bg-gradient-to-r ${btn.gradient} text-white rounded-xl p-1 `}
          >
            <Button
              className="w-full justify-start cursor-pointer text-base "
              onClick={btn.onClick}
            >
              {btn.icon} {btn.label}
            </Button>
          </div>
        ))}
    </div>
  );
};
