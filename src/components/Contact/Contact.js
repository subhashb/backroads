import React from "react"
import Title from "../Title"
import styles from "../../css/contact.module.css"
const Contact = () => {
  return (
    <section className={styles.contact}>
      <Title title="contact" subtitle="us"></Title>
      <div className={styles.center}>
        <form
          action="https://formspree.io/xqkypkya"
          method="POST"
          className={styles.form}
        >
          <div>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="john smith"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="email@email.com"
            />
          </div>
          <div>
            <input
              type="textarea"
              name="message"
              id="message"
              rows="10"
              className={styles.formControl}
              placeholder="hello there"
            />
          </div>
          <div>
            <input
              type="submit"
              value="submit here"
              className={styles.submit}
            />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
