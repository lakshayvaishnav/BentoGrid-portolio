export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4"; // First number is width, second is height
export type GridItemType = "social" | "equipment" | "mentor" | "project";
export type EqiupmentItem = {
  title: string;
  link: string;
};

export interface GridItemInterface {
  layout: GridItemLayout;
  type: GridItemType;
  title: string;
  icon?: string;
  username?: string;
  description?: string;
  color?: string;
  buttonTitle?: string;
  buttonLink?: string;
  buttonSecondaryText?: string;
  /* Mentor */
  promotion?: string;
  price?: string;
  oldPrice?: string;
  /* Project */
  stars?: number;
  /* Equipments */
  equipments?: EqiupmentItem[];
  image?: string | null;
}

const GridItems: GridItemInterface[] = [
  {
    layout: "2x2",
    type: "social",
    title: "LinkedIn",
    icon: "linkedin",
    username: "@LakshayVaishnav",
    description: "Full-stack Developer | Blockchain Enthusiast |  ",
    color: "black",
    buttonTitle: "LinkedIn",
    buttonLink: "https://www.linkedin.com/in/lakshayvaishnav/",
    buttonSecondaryText: "1.1K",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Discord",
    icon: "discord",
    username: "@lakshayvaishnav",
    buttonTitle: "Join Server",
    buttonLink: "https://discord.gg/WWPRRcjc",
    buttonSecondaryText: "",
    color: "#5865F2",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Github",
    icon: "github",
    username: "@LakshayVaishnav",
    buttonTitle: "Follow",
    buttonSecondaryText: "🤖",
    buttonLink: "https://github.com/lakshayvaishnav",
    color: "#070707",
  },
  {
    layout: "2x4",
    type: "equipment",
    title: "Tech Stack",
    image: "/work.jpeg",
    equipments: [
      {
        title: "ReactJs",
        link: "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png",
      },
      {
        title: "Nginx",
        link: "https://user-images.githubusercontent.com/25181517/183345125-9a7cd2e6-6ad6-436f-8490-44c903bef84c.png",
      },
      {
        title: "tRPC",
        link: "https://github-production-user-asset-6210df.s3.amazonaws.com/25181517/297664473-1275d076-f047-432b-9084-308f88f8c176.png",
      },
      {
        title: "Express",
        link: "https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png",
      },
      {
        title: "NextJs",
        link: "https://github.com/marwin1991/profile-technology-icons/assets/136815194/5f8c622c-c217-4649-b0a9-7e0ee24bd704",
      },
      {
        title: "gRPC",
        link: "https://user-images.githubusercontent.com/25181517/192107855-e669c777-9172-49c5-b7e0-404e29df0fee.png",
      },
      {
        title: "NodeJS",
        link: "https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png",
      },
      {
        title: "MongoDB",
        link: "https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png",
      },
      {
        title: "PostgresSql",
        link: "https://user-images.githubusercontent.com/25181517/117208740-bfb78400-adf5-11eb-97bb-09072b6bedfc.png",
      },
      {
        title: "Redis",
        link: "https://user-images.githubusercontent.com/25181517/182884894-d3fa6ee0-f2b4-4960-9961-64740f533f2a.png",
      },
      {
        title: "Docker",
        link: "https://user-images.githubusercontent.com/25181517/117207330-263ba280-adf4-11eb-9b97-0ac5b40bc3be.png",
      },

      {
        title: "TypeScript",
        link: "https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png",
      },
    ],
  },
  {
    layout: "2x2",
    type: "social",
    title: "Twitter",
    icon: "twitter",
    username: "@lakshayvaishnav",
    buttonTitle: "Follow",
    buttonLink: "https://twitter.com/lakshayvaishnav",
    buttonSecondaryText: "279",
    color: "black",
    description:
      "Full-stack developer | Crafting scalable and robust web applications.",
  },

  {
    layout: "2x4",
    type: "project",
    title: "DigitalNexus",
    icon: "github",
    color: "#070707",
    buttonLink: "https://github.com/lakshayvaishnav/HippoByte",
    stars: 73,
    image: "/digitalAsset.png",
    description:
      "A Modern Digital Asset selling platform built using NextJs , tRPC , Strip and other ui Libraries",
  },
  {
    layout: "2x4",
    type: "project",
    title: "FreeSpeechVault",
    icon: "github",
    description:
      "A decentralized petition filling app that uses blockchain and deploys the contract on ethereum mainnet with the help of solidity and hardhat",

    image: "/freespeechvault.png",
    buttonLink: "https://github.com/lakshayvaishnav/FreeSpeechVault",
  },
  {
    layout: "2x4",
    type: "project",
    title: "IdeaHive",
    description:
      "a platform to share your prompts and to learn how better prompts are written for using ai tools",
    icon: "github",
    stars: 19,
    image: "/IdeaHive.png",
    color: "#070707",
    buttonLink: "https://github.com/lakshayvaishnav/IdeaHive-AI",
  },
  {
    layout: "2x4",
    type: "project",
    title: "OnePunchMan",
    description:
      "A website thath showcases horizontal scrolling with eye catchy animations",
    icon: "github",
    stars: 19,
    image: "/onepunchman.png",
    color: "#070707",
    buttonLink: "https://github.com/lakshayvaishnav/ONEPUNCHMAN-HZSCROLL",
  },
  {
    layout: "2x4",
    type: "project",
    title: "AnimeVault",
    description:
      "a platform to discover different genres of anime in which i had implemented infinite scrolling functionality",
    icon: "github",
    stars: 19,
    image: "/AnimeVault.png",
    color: "#070707",
    buttonLink: "https://github.com/lakshayvaishnav/AnimeVault-infiniteScroll",
  },
];

export const siteConfig = {
  creator: "Lakshay Vaishnav",
  title: "Web Application Developer",
  bio: "Full-stack developer with a focus on delivering high-quality digital products",
  location: "Jaipur , Rajasthan",
  locationLink:
    "https://www.google.com/maps/place/Kad%C4%B1k%C3%B6y%2F%C4%B0stanbul/@40.981133,29.063053,12z/data=!3m1!4b1!4m6!3m5!1s0x14cac790b17ba89d:0xd2d24ea0437a7ee2!8m2!3d40.981867!4d29.0576302!16zL20vMDV5cWY4?entry=ttu",
  email: "thelakshayvaishnav@gmail.com",
  items: GridItems,
} as const;
