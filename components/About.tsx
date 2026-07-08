import Image from 'next/image'
import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.section} id="about" aria-labelledby="about-heading">
      <div className={`${styles.container} container`}>
        {/* Visual Team Photo Wrapper */}
        <div className={styles.imageWrapper}>
          <div className={styles.bracketTopLeft} aria-hidden="true" />
          <Image
            src="/team.jpg"
            alt="murox.studio professional engineering team collaborating"
            width={600}
            height={400}
            className={styles.teamImage}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
          <div className={styles.bracketBottomRight} aria-hidden="true" />
        </div>

        {/* Content Section */}
        <div className={styles.content}>
          <span className={styles.eyebrow}>Our Team</span>
          <h2 className={styles.title} id="about-heading">
            Who We <span>Are</span>
          </h2>
          <p className={styles.desc}>
            At murox.studio, we are a group of passionate designers, engineers, and strategists dedicated to crafting futuristic and secure digital solutions. We combine advanced AI technology with top-tier cybersecurity practices to bring your visions to life safely and beautifully.
          </p>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statVal}>99%</span>
              <span className={styles.statLabel}>Client Sat</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statVal}>150+</span>
              <span className={styles.statLabel}>Projects</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statVal}>24/7</span>
              <span className={styles.statLabel}>Secured</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
