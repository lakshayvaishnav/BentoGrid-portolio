import { GridItemInterface } from "@/config/site-config";
import { Star } from "lucide-react";
import Link from "next/link";
import Icon from "../icon";
import Image from "next/image";

const Project = ({ item }: { item: GridItemInterface }) => {
  return (
    <div className="">
      <Link
        href={item.buttonLink ?? ""}
        className="flex items-center justify-between gap-4"
      >
        {item.icon && <Icon type={item.icon} color={item.color} />}
        <div className="w-full"></div>
        <div className="w-full @lg:text-lg  font-semibold">{item.title}</div>
        <div className="w-full @lg:text-sm  font-semibold">
          {item.description}
        </div>

        <div className="flex items-center gap-1">
          <div className="mt-[1px]">{item.stars}</div>
          <Star fill="currentColor" size={16} />
        </div>
      </Link>
    </div>
  );
};

export default Project;
