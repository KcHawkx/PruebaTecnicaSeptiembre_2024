import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";
import style from "../styles/DeleteFilterSegment.module.css";

type Props = {
  image: StaticImageData;
  width: number;
  height: number;
  onClick: () => void;
};

const ButtonImage = ({ image, width, height, onClick }: Props) => {
  return (
    <div className={style.DeleteFilterSegment}>
      <Image
        src={image}
        alt="Imagen"
        width={width}
        height={height}
        onClick={onClick}
      />
    </div>
  );
};

export default ButtonImage;
