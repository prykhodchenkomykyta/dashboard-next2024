import Link from "next/link";
import styles from "./menuLink.module.css";

const MenuLink = ({ item }) => {
  return (
    <Link href={item.path}>
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
