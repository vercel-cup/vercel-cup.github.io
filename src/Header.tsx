import { HamburgerMenuIcon } from "@radix-ui/react-icons";

function Header() {
  return (
    <header className="container flex-initial py-4 shadow-md">
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl font-extrabold md:text-4xl">Vercel Cup</h1>
          <h2 className="text-sm font-light sm:text-base md:text-lg">
            Du 13 mai au 27 juin 2024
          </h2>
        </div>
        <button className="4xl">
          <HamburgerMenuIcon width={32} height={32}></HamburgerMenuIcon>
        </button>
      </div>
    </header>
  );
}

export default Header;
