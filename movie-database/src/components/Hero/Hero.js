import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>Lucifer</h2>
          <h3 className={styles.hero__genre}>
            Genre: Crime, Drama, Fantasy
          </h3>
          <p className={styles.hero__description}>
          Lucifer Morningstar, bosan dengan kehidupannya yang merajuk di neraka, datang untuk tinggal di Los Angeles. Sementara di sana, ia membantu umat manusia dengan kesengsaraannya melalui pengalaman dan kemampuan telepatinya untuk membawa keinginan dan pikiran terdalam orang dari mereka. Saat bertemu dengan seorang Detektif di klub malamnya (Lux), baku tembak yang melibatkannya dan Detektif membawanya untuk menjadi konsultan LAPD yang mencoba menghukum orang atas kejahatan mereka melalui hukum dan keadilan.
          </p>
          <button className={styles.hero__button}>Watch</button>
        </div>
        <div className="hero__right">
          <img
            className={styles.hero__image}
            src="https://picsum.photos/536/354"
            alt="placeholder"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
