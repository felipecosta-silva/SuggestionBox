import React from "react";

const Footer = () => {
  return (
    <div className="bg-green-700 p-4">
      <div className="container mx-auto text-center font-bold text-white">
        Projeto desenvolvido por:{"  "}
        <a
          className="hover:text-yellow-300"
          href="https://felipecosta-silva.github.io/"
          target="_blank"
        >
          Felipe Costa
        </a>{" "}
        /{" "}
        <a
          className="hover:text-blue-400"
          href="https://www.linkedin.com/in/felipe-costa-087ab7161/"
          target="_blank"
        >
          Linkedin
        </a>{" "}
        /{" "}
        <a
          className="hover:text-gray-400"
          href="https://github.com/felipecosta-silva/"
          target="_blank"
        >
          Github
        </a>
        <div className="my-2">
          <img className="inline px-4 mt-2" src="/logo_semana_fsm.png" />
          <img className="inline px-4 mt-2" src="/logo_devpleno.png" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
