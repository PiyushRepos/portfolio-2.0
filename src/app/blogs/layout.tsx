import Container from "@/components/container";
import React from "react";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Container className="max-h-full py-24">{children}</Container>;
}
