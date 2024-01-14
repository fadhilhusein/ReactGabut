import React, { useLayoutEffect, useRef } from "react";
import styles from "./index.module.css";
import { gsap } from "gsap";

function Home() {
  const el = useRef();

  useLayoutEffect(() => {

    let ctx = gsap.context(() => {
      gsap.to('.shadow', { height: "100%", duration: 0.6, delay: 0.6 });      
    }, el)

    return () => ctx.revert();

  }, []);

  return (
    <>
      <section className={styles.heroes} ref={el}>
        <div className={`${styles.blur} shadow`}>
          <h1>Make your home more<span>Alive</span></h1>
        </div>
      </section>
    </>
  );
}

export default Home;
