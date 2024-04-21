import Pagination from "@/app/ui/dashboard/pagination/Pagination";
import Search from "@/app/ui/dashboard/search/Search";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Image from "next/image";
import Link from "next/link";

const ProductsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <td>Title</td>
              <td>Description</td>
              <td>Price</td>
              <td>Created At</td>
              <td>Stock</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={styles.product}>
                  <Image
                    src="/noavatar.png"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.productImg}
                  />
                  IPhone
                </div>
              </td>
              <td>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
                architecto!
              </td>
              <td>$1000</td>
              <td>20.04.2024</td>
              <td>30</td>
              <td>
                <div className={styles.buttons}>
                  <Link href="/dashboard/products/test">
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <Pagination />
      </div>
    </div>
  );
};

export default ProductsPage;
