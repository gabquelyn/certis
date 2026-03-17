import clsx from "clsx";
import Image from "next/image";
import React from "react";

export default function Avatar({
  image,
  className,
}: {
  image: string;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "h-15 w-15 rounded-[50%] overflow-hidden border-2 border-white relative",
        className,
      )}
    >
      <Image src={image} alt="avatar" fill className="object-cover" />
    </div>
  );
}
