import { Link } from "@inertiajs/react";
import React from "react";

function Pagination({ links }) {
  return (
    <>
      <nav className="text-center mt-4">
        {links.map((link) => (
          <Link
            href={link.url || "#"}
            key={link.label}
            className={
              "inline-block py-2 px-3 mx-1 mb-2 rounded-lg text-gray-700 text-xs " +
              (link.active ? "bg-gray-950 !text-gray-200 " : " ") +
              (!link.url
                ? "!text-gray-500 cursor-not-allowed "
                : " hover:bg-gray-950 hover:text-gray-200")
            }
            dangerouslySetInnerHTML={{ __html: link.label }}
          ></Link>
        ))}
      </nav>
    </>
  );
}

export default Pagination;
