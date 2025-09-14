import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <h2>QR Component Tracker</h2>
        <div className={styles.hamburger} tabIndex={0} onClick={() => {
          document.getElementById('menu').classList.toggle(styles.show);
        }}>
          <span>&#9776;</span>
        </div>
      </header>
      <nav id="menu" className={`${styles.menu}`}>
        <a href="#">Login</a>
        <a href="#">Profile</a>
        <a href="#">Settings</a>
        <a href="#">Logout</a>
      </nav>

      {/* Main Buttons */}
      <main className={styles.main}>
        <div className={styles.buttons}>
          <button className={styles.circleBtn} onClick={() => alert('QR Scanner placeholder')}>
            <span role="img" aria-label="QR">&#128441;</span>
            <span className={styles.btnText}>QR Scan</span>
          </button>
          <button className={styles.circleBtn} onClick={() => alert('Search placeholder')}>
            <span role="img" aria-label="Search">&#128269;</span>
            <span className={styles.btnText}>Search</span>
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        Powered by Suntech
      </footer>
    </div>
  )
}
