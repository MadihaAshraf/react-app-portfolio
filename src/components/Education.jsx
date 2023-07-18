import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[200px]`}
      >
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Education.</h2>
        </motion.div>
      </div>
      <div
       className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <form
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4 py-4 px-6">
              MSC. COMPUTER-SCIENCE, NATIONAL UNIVERSITY OF MODERN LANGUAGES,
              2020 – 2023
            </span>
            <p className="bg-tertiary py-4 px-6 text-white rounded-lg outline-none border-none font-medium">
              Completed MSc. Computer Science from NUML with CGPA 2.8, FYP is
              based on dotnet MVC with C# along with MS SQL Server{" "}
            </p>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4 py-4 px-6">
              BSC. COMPUTER-SCIENCE, QUAID E AZAM UNIVERSITY ISLAMABAD,
              2019
            </span>
            <p className="bg-tertiary py-4 px-6 text-white rounded-lg outline-none border-none font-medium">
            Completed BSc. Computer science from Quaid-e-Azam University, Islamabad scored 58.9 percent.
            </p>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4 py-4 px-6">
            INTERMEDIATE COMPUTER SCIENCE, ICG F-6/2 ISLAMABAD,
              2017
            </span>
            <p className="bg-tertiary py-4 px-6 text-white rounded-lg outline-none border-none font-medium">
            Completed Intermediate in Computer Science from ICG, F-6/2 Islamabad scored 57.62 percent. 
            </p>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4 py-4 px-6">
            INTERMEDIATE in COMPUTER SCIENCE, ICG F-6/2 ISLAMABAD,
              2017
            </span>
            <p className="bg-tertiary py-4 px-6 text-white rounded-lg outline-none border-none font-medium">
            Completed Intermediate in Computer Science from ICG, F-6/2 Islamabad scored 57.62 percent. 
            </p>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4 py-4 px-6">
            MATRICULATION in SCIENCE, ICG F-6/2 ISLAMABAD,
              2017
            </span>
            <p className="bg-tertiary py-4 px-6 text-white rounded-lg outline-none border-none font-medium">
            Completed matric Science from ICG, F-6/2 Islamabad scored 81 percent. 
            </p>
          </label>
        </form>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
