import React from "react";

const WorkCard = ({ img, name, description, links, onClick }) => {
  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
    >
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
        style={{ height: "600px" }}
      >
        <img
          alt={name}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
          src={img}
          onClick={onClick}
        ></img>
      </div>
      <h1
        className="mt-5 text-3xl font-medium"
        onClick={onClick}
      >
        {name ? name : "Project Name"}

      </h1>
      <h2 className="text-xl opacity-50">
        {description ? description : "Description"}
      </h2>
      <h2 className="text-xl opacity-50 ">
        {links &&
          links.map((link, index) => (
            <span key={link.name}>
              <a
                href={link.url}
                key={link.name}
                rel="noopener noreferrer"
                target="_blank"
                className="text-blue-500"
              >
                {link.name}
              </a>
              {index !== links.length - 1 && " | "}
            </span>
          ))
        }
      </h2>
    </div>
  );
};

export default WorkCard;
