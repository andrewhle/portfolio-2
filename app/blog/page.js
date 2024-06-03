import React from "react";
import BlogCard from "../components/BlogCard";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { IoIosWarning } from "react-icons/io";

const blogData = [
  {
    id: 1,
    title: "Blog demo title",
    description: "This is a demo blog title",
    image: "/images/projects/maintain.png",
  },
  {
    id: 2,
    title: "Blog demo title",
    description: "This is a demo blog title",
    image: "/images/projects/maintain.png",
  },
  {
    id: 3,
    title: "Blog demo title",
    description: "This is a demo blog title",
    image: "/images/projects/maintain.png",
  },
]

function Blog() {
  return (
    <div>
      <div className="flex w-full h-20 items-center mx-10">
        <Link href="/">
          <FaArrowLeft className="h-8 w-8"/>
        </Link>
      </div>
      <div className="flex flex-col w-full h-20 items-center justify-center">
        <h1 className="text-white text-4xl md:text-5xl font-bold">Blog</h1>
        <div className="flex items-center justify-center mt-5">
          <IoIosWarning />
          <p>Blog site is coming soon</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-24">
        {blogData.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            imgUrl={blog.image}
            description={blog.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Blog;
