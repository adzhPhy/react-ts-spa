import React from "react";
import styles from "../styles";
import { card } from "../assets";
import { layout } from "../styles";

const CardDeal: React.FC = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa officia,
        quis neque sit qui dignissimos nihil quaerat totam. Nihil, autem.
      </p>
      <button
        type="button"
        className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}
      >
        Get Started
      </button>
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
