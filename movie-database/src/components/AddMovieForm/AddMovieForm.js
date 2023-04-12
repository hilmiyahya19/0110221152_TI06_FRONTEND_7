import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./AddMovieForm.module.css";

// Menangkap props
function AddMovieForm(props) {
  /**
   * Ini hanya snippet(potongan) code.
   * Kode yang lainnya tetap sama.
   */

  // Destructing props: state movies
  const { movies, setMovies } = props;

  // Membuat state title,date,poster,genre
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [poster, setPoster] = useState("");
  const [genre, setGenre] = useState("");

  // Membuat state: isTitleError, isDateError
  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);
  const [isPosterError, setIsPosterError] = useState(false);
  const [isGenreError, setIsGenreError] = useState(false);

  /**
   * Membuat fungsi handleTitle
   * Dijalankan ketika nilai input berubah
   */
  function handleTitle(e) {
    /**
     * Jalankan fungsi setTitile.
     * Set title nilai baru: input saat ini.
     */
    setTitle(e.target.value);
  }

  /**
   * Membuat fungsi handleDate
   * Dijalankan ketika nilai input berubah
   */
  function handleDate(e) {
    /**
     * Jalankan fungsi setDate.
     * Set date nilai baru: input saat ini.
     */
    setDate(e.target.value);
  }

  /**
   * Membuat fungsi handlePoster
   * Dijalankan ketika nilai input berubah
   */
  function handlePoster(e) {
    /**
     * Jalankan fungsi setPoster.
     * Set poster nilai baru: input saat ini.
     */
    setPoster(e.target.value);
  }

  /**
   * Membuat fungsi handleGenre
   * Dijalankan ketika nilai input berubah
   */
  function handleGenre(e) {
    /**
     * Jalankan fungsi setGenre.
     * Set genre nilai baru: input saat ini.
     */
    setGenre(e.target.value);
  }

  function handleSubmit(e) {
    /**
     * Mencegah perilaku default form.
     * Mencegah form direfresh ketika disubmit.
     */
    e.preventDefault();

    // Jika title kosong, set isTitleError true
    if (title === "") {
      setIsTitleError(true);
    }
    // Jika title kosong, set isTitleError true
    else if (date === "") {
      setIsDateError(true);
      setIsTitleError(false);
    }
    
    // Jika title kosong, set isTitleError true
    else if (poster === "") {
      setIsPosterError(true);
      setIsDateError(false);
    }
    // Jika title kosong, set isTitleError true
    else if (genre === "") {
      setIsGenreError(true);
      setIsPosterError(false);
    }
    // Jika tidak, maka push movie dan set error false
    else {
      const movie = {
        id: nanoid(),
        title: title,
        year: date,
        type: genre,
        poster: poster,
      };

      // SOLVED: HOW TO ADD MOVIE TO MOVIES :)
      setMovies([...movies, movie]);

      setIsTitleError(false);
      setIsDateError(false);
      setIsPosterError(false);
      setIsGenreError(false);
    }
  }

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img
            className={styles.form__image}
            src="https://picsum.photos/536/354"
            alt=""
          />
        </div>
        <div className={styles.form__right}>
          <h2 className={styles.form__title}>Add Movie Form</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.form__group}>
              <label htmlFor="title" className={styles.form__label}>
                Title
              </label>
              <input
                id="title"
                className={styles.form__input}
                type="text"
                name="title"
                // Memberikan value input: title
                value={title}
                // Memberikan event onChange
                onChange={handleTitle}
              />
              {/*
               * Menambahkan infline if: operator &&
               * Jika isTitleError true maka render error
               */}
              {isTitleError && <Alert>Title Wajib Diisi</Alert>}
            </div>
            <div className={styles.form__group}>
              <label htmlFor="date" className={styles.form__label}>
                Date
              </label>
              <input
                id="date"
                className={styles.form__input}
                type="text"
                name="date"
                // Memberikan value input: date
                value={date}
                // Memberikan event onChange
                onChange={handleDate}
              />
              {/*
               * Menambahkan infline if: operator &&
               * Jika isDateError true maka render error
               */}
              {isDateError && <Alert>Date Wajib Diisi</Alert>}
            </div>

            <div className={styles.form__group}>
              <label htmlFor="poster" className={styles.form__label}>
                Gambar
              </label>
              <input
                id="poster"
                className={styles.form__input}
                type="text"
                name="poster"
                // Memberikan value input: poster
                value={poster}
                // Memberikan event onChange
                onChange={handlePoster}
              />
              {/*
               * Menambahkan infline if: operator &&
               * Jika isPosterError true maka render error
               */}
              {isPosterError && <Alert>Link Gambar Wajib Diisi</Alert>}
            </div>

            <div className={styles.form__group}>
              <label htmlFor="genre" className={styles.form__label}>
                Genre
              </label>
              <select name="genre" id="genre" className={styles.form__input} value={genre} onChange={handleGenre}>
                <option value="drama">Drama</option>
                <option value="horror">Horror</option>
                <option value="action">Action</option>
                <option value="romance">Romance</option>
                <option value="comedy">Comedy</option>
                <option value="thriller">Thriller</option>
              </select>
              {/*
               * Menambahkan infline if: operator &&
               * Jika isGenreError true maka render error
               */}
              {isGenreError && <Alert>Genre Wajib Diisi</Alert>}
            </div>

            <div>
              <button className={styles.form__button}>Add Movie</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddMovieForm;
