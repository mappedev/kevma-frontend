import Link from "next/link";

export const CardAddOneMore = () => (
  <li className="card p-0 w-full sm:max-w-xl 2xl:max-w-none">
    <Link href="#">
      <a className="h-full flex-center flex-col transition-colors-200 hover:text-orange-primary">
        <span>I+</span>
        <p>Agregar unos más</p>
      </a>
    </Link>
  </li>
);
