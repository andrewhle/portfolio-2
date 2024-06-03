import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function BlogCard({title, imgUrl, description}) {
    return (
        <div>
          <div class="bg-slate-600 shadow-md rounded-lg max-w-sm mb-5">
            <Link href="#">
              <Image
                width={500}
                height={500}
                class="rounded-t-lg"
                src={imgUrl}
              />
            </Link>
            <div class="p-5">
              <Link href="#">
                <h5 class="text-gray-100 font-bold text-2xl tracking-tight mb-2">
                  {title}
                </h5>
              </Link>
              <p class="font-normal text-gray-300 mb-3">
                {description}
              </p>
              <Link
                class="text-white bg-orange-600/80 hover:bg-orange-800 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                href="#"
              >
                View Full Article
              </Link>
            </div>
          </div>
        </div>
      );
}

export default BlogCard