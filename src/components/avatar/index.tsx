import Image from "next/image";

interface Avatar {
  name: string;
  imageSrc: string;
}
const Avatar = ({ name, imageSrc }: Avatar) => {
  return (
    <ul className="flex items-center py-[7.5px] gap-x-[4.5px] ml-auto">
      <li>
        <Image
          src={imageSrc}
          alt={"avatar de " + name}
          width={32}
          height={32}
        />
      </li>
      <li>{name}</li>
    </ul>
  );
};

export default Avatar;
