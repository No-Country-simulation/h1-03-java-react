import React from "react";
import { useNavigate } from "react-router-dom";

export default function index({ icon, alt, title, path }) {
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
        alt={alt}
        aria-label={alt}
        title={alt}
        width={100}
        height={100}
        loading="lazy"
      />
      <p className="text-center whitespace-nowrap">{title}</p>
    </div>
  );
}
