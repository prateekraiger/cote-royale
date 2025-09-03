import Image from "next/image";

export const Navbar = () => {
  return (
    <header>
      <div className="navbar">
        <div className="flex">
          <button className="p-2">Menu</button>
          <div className="absolute">
            <Image />
          </div>
        </div>
      </div>
    </header>
  );
};
