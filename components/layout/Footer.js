import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <hr className="mt-10 mb-5 shadow" />
      <footer>
        <ul className="mb-4 flex-center">
          <li className="mr-4 transition-colors-200 hover:text-orange-primary">
            <Link href="#">
              <a>IG</a>
            </Link>
          </li>
          <li className="mr-4 transition-colors-200 hover:text-orange-primary">
            <Link href="#">
              <a>IT</a>
            </Link>
          </li>
          <li className="mr-4 transition-colors- hover:text-orange-primary">
            <Link href="#">
              <a>II</a>
            </Link>
          </li>
          <li className="transition-colors-200 hover:text-orange-primary">
            <Link href="#">
              <a>IF</a>
            </Link>
          </li>
        </ul>
        <ul className="mb-4 flex-center text-sm font-semibold">
          <li className="mr-4 transition-colors-200 hover:text-orange-primary">
            <Link href="/characters">
              <a>PERSONAJES</a>
            </Link>
          </li>
          <li className="mr-4 transition-colors-200 hover:text-orange-primary">
            <Link href="/locations">
              <a>LUGARES</a>
            </Link>
          </li>
          <li className="transition-colors-200 hover:text-orange-primary">
            <Link href="/episodes">
              <a>EPISODIOS</a>
            </Link>
          </li>
        </ul>
        <p className="text-center text-sm">
          IC by{" "}
          <Link href="#">
            <a>
              <span className="text-base font-extrabold border-b-2 border-orange-primary mr-1 transition-colors-200 hover:border-transparent hover:text-orange-primary">
                Kerio
              </span>
            </a>
          </Link>
          {currentYear}
        </p>
      </footer>
    </>
  );
};
