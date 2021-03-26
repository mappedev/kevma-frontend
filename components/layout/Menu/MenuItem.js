import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export const MenuItem = ({ href, title, icon = null, alt = null }) => {
  const { asPath } = useRouter();

  return (
    <li
      className={`md:mx-5 md:my-4 transition-colors-200 ${
        asPath === href && "text-orange-primary"
      } hover:text-orange-primary`}
    >
      <Link href={href}>
        <a className="flex-start">
          {icon && alt && <Image src={icon} alt={alt} width={24} height={24} />}
          <span className="hidden md:block md:ml-2">{title}</span>
        </a>
      </Link>
    </li>
  );
};
