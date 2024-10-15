import Image from "next/image";
import Button from "../button";
import SearchForm from "../search-form";
const Header = () => {
  return (
    <header className="grid place-items-center [&>*]:mb-12">
      <div className="space-y-10 md:space-y-0 md:flex md:justify-between md:w-full lg:hidden">
        <Image
          src="/logo.svg"
          alt="Logo da Code Connect"
          width={125}
          height={40}
          className="mx-auto md:mx-0"
        />
        <Button variant="secondary" className="w-[145px]">
          Publicar
        </Button>
      </div>
      <SearchForm />
    </header>
  );
};

export default Header;
