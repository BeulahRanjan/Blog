import React from 'react';
import styles from "./cardList.module.css";
import Link from 'next/link'
import Image from 'next/image';

const CardList = () => {
  return (
    <div className={styles.container}>
    <div className={styles.imageContainer}>
      <Image src="/p1.jpeg" alt="" fill/>
    </div>
    <div className={styles.textContainer}>
      <div className={styles.detail}>
        <span className={styles.date}>11.02.2023-</span>
        <span className={styles.category}>CULTURE</span>
      </div>
    <Link href="/">
      <h1 className="header">Lorem Ipsum is simply dummy text of the printing.</h1>
    </Link>
    <p className="paragraph">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
    make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
    typesetting, remaining essentially unchanged.
    </p>
    <Link href="/">Read More</Link>
    </div>

    <div className={styles.imageContainer}>
      <Image src="/p1.jpeg" alt="" fill/>
    </div>
    <div className={styles.textContainer}>
      <div className={styles.detail}>
        <span className={styles.date}>11.02.2023-</span>
        <span className={styles.category}>CULTURE</span>
      </div>
    <Link href="/">
      <h1 className="header">Lorem Ipsum is simply dummy text of the printing.</h1>
    </Link>
    <p className="paragraph">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
    make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
    typesetting, remaining essentially unchanged.
    </p>
    <Link href="/">Read More</Link>
    </div>

    
   </div>
  )
}

export default CardList;
