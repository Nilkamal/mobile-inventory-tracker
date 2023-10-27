import React, { useState, useEffect } from "react";
import getBrands from "../../services/getBrands";
import saveMobile from "../../services/saveMobile";
import { useNavigate, useParams } from "react-router-dom";
import getMobile from "../../services/getMobile";
import styles from "./Create.module.css";

export default function Create() {
  const params = useParams();
  const navigator = useNavigate();
  const [brands, setBrands] = useState([]);
  const [formData, setFormData] = useState({
    brand: "",
    mobile: "",
    ram: "",
    storage: "",
    quantity: 0,
    id: 0,
  });

  useEffect(() => {
    const getBrandsData = async () => {
      setBrands(await getBrands());
    };
    getBrandsData();

    const getMobileData = async () => {
      debugger;
      if (params.id) {
        const data = await getMobile(params.id);
        setFormData(data);
      }
    };
    getMobileData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await saveMobile(formData);
    if (response?.id) {
      setFormData({ brand: "", mobile: "", ram: "", storage: "", quantity: 0 });
      navigator("/mobiles");
      alert("Data saved successfully!");
    }
  };
  return (
    <form onSubmit={handleSubmit} className={styles.mobileForm}>
      <h1 className={styles.heading}>Save Mobile Stock</h1>
      <div className={styles.formGroup}>
        <label htmlFor='brand'>
          Brand:
          <select
            id='brand'
            name='brand'
            placeholder='Select Brand'
            value={formData.brand}
            onChange={handleChange}
            className={`${styles.formControl} ${styles.formSelect}`}
          >
            {brands.map(({ id, brand }) => (
              <option value={id}>{brand}</option>
            ))}
          </select>
        </label>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor='mobile'>
          Mobile:
          <input
            type='text'
            id='mobile'
            value={formData.mobile}
            name='mobile'
            onChange={handleChange}
            className={styles.formControl}
          />
        </label>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor='ram'>
          RAM:
          <input
            type='number'
            id='ram'
            value={formData.ram}
            name='ram'
            onChange={handleChange}
            className={styles.formControl}
          />
        </label>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor='storage'>
          Storage:
          <input
            type='number'
            id='storage'
            value={formData.storage}
            name='storage'
            onChange={handleChange}
            className={styles.formControl}
          />
        </label>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor='quantity'>
          Quantity:
          <input
            type='number'
            id='quantity'
            value={formData.quantity}
            name='quantity'
            onChange={handleChange}
            className={styles.formControl}
            min={0}
          />
        </label>
      </div>
      <div className={styles.formGroup}>
        <button type='submit' className={styles.button}>
          Save
        </button>
      </div>
    </form>
  );
}
