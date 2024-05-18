import React from "react";
import Image from "next/image";

function Blog() {
    return (
        <div className="h-full w-full flex flex-col justify-center items-center">
          <h1 className="text-xl">Blog site is under construction</h1>
          <Image
            src="/images/projects/maintenance.png"
            alt="Site under construction"
            height={500}
            width={500}
          />
        </div>
      );
}

export default Blog;
