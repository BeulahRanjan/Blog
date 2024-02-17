import React from 'react';
import styles from "./menu.module.css";
import Image from 'next/image';
import Link from 'next/link';

const Menu = () => {
  return (
    <div className={styles.container}>
  <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>
            Travel
          </span>
          <h3 className={styles.postTitle}>Lorem Ipsum is simply dummy text of the printing.</h3>
        </div>
        <div className={styles.detail}>
          <span className={styles.username}>John Doe</span>
          <span className={styles.date}>10.03.2023</span>
        </div>
      </Link>
    </div>

    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>
            Travel
          </span>
          <h3 className={styles.postTitle}>Lorem Ipsum is simply dummy text of the printing.</h3>
        </div>
        <div className={styles.detail}>
          <span className={styles.username}>John Doe</span>
          <span className={styles.date}>10.03.2023</span>
        </div>
      </Link>
    </div>
    </div>

    
  )
}

export default Menu;
