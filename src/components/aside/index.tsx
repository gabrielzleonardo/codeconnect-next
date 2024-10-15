import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.svg";
const Aside = () => {
  return (
    <aside className="lg:rounded-lg hidden lg:flex lg:py-10 lg:px-4 lg:bg-gray-400 lg:gap-10 shrink-0">
      <Link href="/">
        <Image src={logo} alt="Logo da Code Connect" className="max-w-32" />
      </Link>
    </aside>
  );
};

export default Aside;
