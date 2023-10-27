import React, { useState, useEffect } from "react";
import getMobiles from "../../services/getMobiles";
import { Link } from "react-router-dom";
import styles from "./mobiles.module.css";
import Search from "../../components/Search";
import searchMobiles from "../../services/searchMobiles";

export default function Home() {
  const [mobiles, setMobiles] = useState([]);

  const getData = async () => {
    const data = await getMobiles();
    setMobiles(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const renderMobiles = () => {
    return mobiles.map(({ mobile, ram, storage, quantity, brand, id }) => (
      <div class={styles.row}>
        <div className={styles.col}>{brand}</div>
        <div className={styles.col}>{mobile}</div>
        <div className={styles.col}>
          {ram} / {storage} - GB
        </div>
        <div className={styles.col}>{quantity}</div>
        <div className={styles.col}>
          <Link to={`/mobiles/create/${id}`}>Edit </Link>
        </div>
      </div>
    ));
  };

  const onSearch = async (formData) => {
    console.log(formData);
    setMobiles(await searchMobiles(formData));
  };
  const onClear = () => {
    console.log("onClear");
    getData();
  };
  return (
    <main>
      <h1>Mobile List</h1>
      <Search onSearch={onSearch} onClear={onClear} />
      <section>
        <header className={styles.header}>
          <div className={styles.col}>Brand</div>
          <div className={styles.col}>Mobile</div>
          <div className={styles.col}>Ram / Storage</div>
          <div className={styles.col}>Quantity</div>
          <div className={styles.col}>Actions</div>
        </header>
        {mobiles.length === 0 ? (
          <div className='row'>
            <div className={`${styles.col} ${styles.noResult}`}>
              No Result Found!
            </div>
          </div>
        ) : (
          renderMobiles()
        )}
      </section>
    </main>
  );
}
