import Link from "next/link";
import { useRouter } from "next/router";

export const MenuItem = ({ href, title, icon = null }) => {
  const { asPath } = useRouter();

  return (
    <li
      className={`md:mx-5 md:my-4 transition-colors-200 ${
        asPath === href && "text-orange-primary"
      } hover:text-orange-primary`}
    >
      <Link href={href}>
        <a>
          {icon ?? "I"} {title}
        </a>
      </Link>
    </li>
  );
};
