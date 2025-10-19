import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

function Container({ children, className = "" }: Props) {
  return (
    <div
      className={`container h-screen max-w-3xl mx-auto shadow px-4${
        className ? ` ${className}` : ""
      }`}
    >
      {children}
    </div>
  );
}

export default Container;
