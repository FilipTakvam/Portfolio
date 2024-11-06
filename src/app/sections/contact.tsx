import React, { useRef, useState, useEffect } from 'react';
import styles from '../styles/contact.module.scss';
import emailjs from '@emailjs/browser';
import { useAnimationControls, motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ClipLoader from "react-spinners/ClipLoader";

import { BiLogoBehance, BiLogoInstagram, BiLogoLinkedinSquare, BiLogoGithub } from 'react-icons/bi'
import { IoMdSend } from 'react-icons/io'

const Contact = () => {

  const [sent, setSent] = useState(true);
  const [sending, setSending] = useState<boolean>(false);

  const form = useRef<HTMLFormElement>(null);
  const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "none";
  const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "none";
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_USER_ID ?? "none";

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true); // Set sending state to true

    if (form.current) {
      try {
        // Await the email sending process
        await emailjs.sendForm(serviceID, templateID, form.current, publicKey);
        form.current.reset(); // Reset the form after sending
        setSent(true); // Indicate the email was sent successfully

        // Reset sent state after 3 seconds
        setTimeout(() => {
          setSent(false); // Reset sent state after 3 seconds
        }, 3000);
      } catch (error: any) {
        console.error("Email sending failed:", error.text); // Log the error
        // You might want to add additional error handling here if needed
      } finally {
        setSending(false); // Reset sending state whether successful or not
      }
    } else {
      console.error("Form reference is null."); // Log if form reference is null
      setSending(false); // Reset sending state if form is null
    }
  };


  const [inViewRef, isInView] = useInView({ threshold: 0.2 });
  const letsTalkControls = useAnimationControls();
  const formControls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      letsTalkControls.start({ opacity: 1, x: 0, transition: { duration: 1 } });
      formControls.start({ opacity: 1, transition: { delay: 0.5, duration: 1 } })
    }
  }, [isInView])

  return (
    <div className={`${styles.contactSection} acceleratedRendering`} ref={inViewRef} id="contact">
      <div className={`${styles.contactPage} wrapper`}>
        <motion.div animate={letsTalkControls} initial={{ opacity: 0, x: '-5rem' }} className={styles.contacttext}>
          <h2>Let&apos;s talk</h2>
          <p>Feel free to contact me <br />to ask anything or just say hi...</p>
        </motion.div>

        <motion.form animate={formControls} initial={{ opacity: 0 }} ref={form} onSubmit={sendEmail} className={styles.contact}>

          <div className={styles.inputrow}>
            <div className={styles.inputContainer}>
              <label>Name*</label>
              <input type="text" required name="user_name" />
            </div>
            <div className={styles.inputContainer}>
              <label>Email*</label>
              <input type="email" required name="user_email" />
            </div>
          </div>

          <div className={styles.inputrow}>
            <div className={styles.inputContainer}>
              <label>Phone</label>
              <input type="text" name="user_phone" />
            </div>
            <div className={styles.inputContainer}>
              <label>Organization</label>
              <input type="text" name="user_organization" />
            </div>
          </div>

          <div className={styles.inputContainer}>
            <label>Message*</label>
            <textarea required rows={5} name="message"></textarea>
          </div>
          <div>
            {!sending ? <button className={styles.sendbutton} type="submit">SEND <IoMdSend style={{ fontSize: "1.3rem" }} /></button> : <button className={styles.sendbutton} disabled type="submit">SENDING <ClipLoader color={'#ffffff'} size={'1.3rem'} /></button>}
          </div>
        </motion.form>
      </div>

      <footer className={styles.footer}>
        <div className={`${styles.footerContainer} wrapper`}>
          <p>© Copyright 2023 Filip Takvam</p>
          <div>
            <a href="https://behance.net/filiptakvam"><BiLogoBehance style={{ fontSize: "2rem" }} /></a>
            <a href="https://www.instagram.com/filiptakvam/"><BiLogoInstagram style={{ fontSize: "2rem" }} /></a>
            <a href="https://linkedin.com/in/filip-takvam-93208a155"><BiLogoLinkedinSquare style={{ fontSize: "2rem" }} /></a>
            <a href="https://github.com/FilipTakvam"><BiLogoGithub style={{ fontSize: "2rem" }} /></a>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Contact