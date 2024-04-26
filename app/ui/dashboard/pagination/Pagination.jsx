"use client";
import styles from "./pagination.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 2;
  const page = searchParams.get("page") || 1;

  return (
    <div className={styles.container}>
      <button className={styles.button} disabled>
        Next
      </button>
      <button className={styles.button}>Previous</button>
    </div>
  );
};

export default Pagination;
