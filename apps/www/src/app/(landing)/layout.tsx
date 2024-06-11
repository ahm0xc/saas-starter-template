import React from "react";
import Navbar from "./_components/navbar";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
