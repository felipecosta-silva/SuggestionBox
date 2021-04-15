import React from "react";

const Footer = () => {
  return (
    <div className="bg-green-500 p-4">
      <div className="container mx-auto text-center font-bold text-white">
        Projeto desenvolvido por:{" "}
        <a href="https://felipecosta-silva.github.io/" target="_blank">
          Felipe Costa
        </a>{" "}
        /
        <a
          href="https://www.linkedin.com/in/felipe-costa-087ab7161/"
          target="_blank"
        >
          Linkedin
        </a>{" "}
        /
        <a href="https://github.com/felipecosta-silva/" target="_blank">
          Github
        </a>
      </div>
    </div>
  );
};

export default Footer;
