import { GridItemInterface } from "@/config/site-config";
import Image from "next/image";
import Link from "next/link";
import Icon from "./icon";
import Icon2 from "./Icon2";
import { Github, GithubIcon } from "lucide-react";
import { LucideGithub } from "lucide-react";
import { useRouter } from "next/navigation";

const Equipments2 = ({ item }: { item: GridItemInterface }) => {
  const router = useRouter();
  const { buttonLink } = item;
  return (
    <div className="flex flex-col items-end justify-end w-full h-full overflow-hidden rounded-3xl">
      {/* Overlay */}
      {/* <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-neutral-950/60 to-neutral-950/90" /> */}
      {/* Image */}
      <Image
        className="z-0 object-cover object-center w-full h-full"
        src={item.image ?? ""}
        alt="equipments"
        fill
      />
      {/* Content */}
      <div className="relative items-start z-20 w-full p-4 space-y-3 md:p-8 ">
        <div className="text-lg w-[200px]  px-2 font-medium  rounded-lg bg-white dark:bg-black/5 ">
          {item.title}
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className=" py-1 px-2 text-sm flex text-left items-center align-middle flex-col font-medium bg-white rounded-lg dark:bg-black/20 ">
            {item.description}
          </div>
          <div
            onClick={() => {
              router.push(buttonLink!);
              window.open(buttonLink, "_blank");
            }}
            className=" flex  px-3 cursor-pointer hover:bg-neutral-800  rounded-md flex-row  bg-neutral-900"
          >
            <button>
              <span>Project</span>
            </button>
            <div className=" p-2 z-10">
              <Github className="z-20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipments2;
