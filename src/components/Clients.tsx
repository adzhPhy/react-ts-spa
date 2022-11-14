import React from "react";
import { clients } from "../constants";
import styles from "../styles";

const Clients: React.FC = () => {
  return (
    <section className={`$styles.flexCenter my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((c) => (
          <div
            key={c.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] relative overflow-hidden bg-no-repeat bg-cover max-w-xs`}
          >
            <img
              src={c.logo}
              alt="c"
              className="sm:w-[192px] w-[100px]  object-contain max-w-xs hover:scale-110 transition duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
