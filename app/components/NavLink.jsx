import Link from "next/link";

function NavLink({ path, title }) {
  return (
    <Link
      href={path}
      className="block py-2 pl-3 pr-4 text-slate-300 hover:text-white sm:text-xl rounded md:p-0 "
    >
      {title}
    </Link>
  );
}

export default NavLink;
