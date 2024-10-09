import Image from "next/image";
const Aside = () => {
  return (
    <aside className="rounded-lg py-10 px-4 bg-gray-400">
      <Image
        src="/logo.svg"
        alt="Logo da Code Connect"
        width={125}
        height={40}
      />
    </aside>
  );
};

export default Aside;
