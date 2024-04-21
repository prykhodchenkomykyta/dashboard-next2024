import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" fill alt="" />
        </div>
        IPhone
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder="IPhone 6s" />
          <label>Price</label>
          <input type="number" name="price" placeholder="$1000" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="30" />
          <label>Color</label>
          <input type="text" name="color" placeholder="Black" />
          <label>Size</label>
          <textarea type="text" name="size" placeholder="256GB" />
          <label>Category</label>
          <select name="cat" id="cat">
            <option value="kitchet">Kitchet</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder="Description"
          ></textarea>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
