import Link from "next/link";
import { Button } from "./ui/button";

//component imports
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 bg-pink-50/20"> 
      <div className="container mx-auto">
        {/* logo*/}
        <Link href='/'>
        <h1 className="text-4xl font-semibold">
            Rishab <span className="text-accent">.</span>
        </h1>
        </Link>
        {/* desktop nav  & hire me button*/}
        <div className="hidden xl:flex">
            <Nav/>
            <Link href="/contact">
                <Button>Hire me !</Button>
            </Link>

        </div>
      </div>
    </header>
  );
};

export default Header;
