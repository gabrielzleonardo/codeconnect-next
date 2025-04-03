import Button from "../button";
import Input from "../input";
import { SearchIcon } from "lucide-react";

const SearchForm = () => {
  return (
    <form className="flex flex-col gap-2 w-full md:flex-row" action="/">
      <Input
        name="q"
        leftEl={<SearchIcon size={22} color="currentColor" />}
        variant="primary"
        className="grow w-full [&_input]:md:paragraph-lg md:[&_svg]:size-8"
        placeholder="Digite o que você procura"
      />
      <Button variant="primary" className="w-fit self-center">
        Buscar
      </Button>
    </form>
  );
};

export default SearchForm;
