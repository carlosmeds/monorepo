"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ className }: ButtonProps) => {
  return (
    <button type="submit" className={className}>
      Submit!
    </button>
  );
};
