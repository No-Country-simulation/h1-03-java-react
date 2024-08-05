import React from "react";
import { useNavigate } from "react-router-dom";

export default function index({ icon, title, path }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(path);
  };

  return (
    <div
      className="flex flex-col justify-center items-center p-4 gap-6 cursor-pointer"
      onClick={handleNavigate}
    >
      <img
        src={icon}
        alt=""
        aria-label=""
        title=""
        width={100}
        height={100}
        loading="lazy"
      />
      <p className="text-center">{title}</p>
    </div>
  );
}
