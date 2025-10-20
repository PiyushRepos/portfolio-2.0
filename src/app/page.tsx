import React from "react";
import Container from "@/components/container";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import File from "@/icons/file";

function page() {
  return (
    <Container>
      <Hero />
      <section className="mt-8">
        <div className="space-x-5">
          <Button
            variant="outline"
            className="cursor-pointer shadow-md transition-transform hover:scale-105"
          >
            <span>
              <File className="size-4 rotate-6" />
            </span>
            Get In Touch
          </Button>
          <Button className="cursor-pointer shadow-md transition-transform hover:scale-105 hover:rotate-2">
            <span>
              <File className="size-4 rotate-6" />
            </span>
            Resume
          </Button>
        </div>
      </section>
    </Container>
  );
}

export default page;
