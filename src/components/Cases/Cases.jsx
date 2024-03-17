"use client";

import classNames from "classnames";
import BlockTitle from "../BlockTitle/BlockTitle";
import s from "./Cases.module.scss";
import { motion } from "framer-motion";

export default function Cases() {
    return (
        <section className={s.cases}>
            <video
                className={s.cases__video}
                src="/videos/cases.mp4"
                autoPlay
                muted
                loop
            ></video>
            <div className="container">
                max-width: 1063px; margin-top: 100px; font-size: 35px;
                line-height: 46px; font-weight: 600; margin-bottom: 100px;
                <div className="wrapper">
                    <BlockTitle
                        style={{
                            maxWidth: 1063,
                            marginTop: 100,
                            marginBottom: 100,
                        }}
                    >
                        ООО "АЛКАМ ПЛЮС" - ЭТО СОВРЕМЕННОЕ ПРЕДПРИЯТИЕ ПО
                        ПРОИЗВОДСТВУ АЛЮМИНИЕВЫХ ПОЛУФАБРИКАТОВ
                    </BlockTitle>
                    <div className={s.cases__items}>
                        <motion.div
                            initial={{ opacity: 0, y: -200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 1 }}
                            viewport={{ once: true }}
                            className={classNames(s.cases__item)}
                        >
                            <div className={s.cases__item_number}>
                                <span>01</span>
                            </div>
                            <div className={s.cases__item_line}></div>
                            <h4 className={s.cases__item_title}>
                                22 года на рынке металлопроката
                            </h4>
                            <p className={s.cases__item_text}>
                                "АЛКАМ плюс" успешно осуществляет свою
                                деятельность на рынке изготовления
                                полуфабрикатов из цветных и черных металлов с
                                2002 года.{" "}
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.3, duration: 1 }}
                            viewport={{ once: true }}
                            className={s.cases__item}
                        >
                            <div className={s.cases__item_number}>
                                <span>02</span>
                            </div>
                            <div className={s.cases__item_line}></div>
                            <h4 className={s.cases__item_title}>
                                Общая площадь производства 12000 кв.м
                            </h4>
                            <p className={s.cases__item_text}>
                                "АЛКАМ плюс" успешно осуществляет свою
                                деятельность на рынке изготовления
                                полуфабрикатов из цветных и черных металлов с
                                2002 года.{" "}
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.6, duration: 1 }}
                            viewport={{ once: true }}
                            className={s.cases__item}
                        >
                            <div className={s.cases__item_number}>
                                <span>03</span>
                            </div>
                            <div className={s.cases__item_line}></div>
                            <h4 className={s.cases__item_title}>
                                Более 2000 тонн металлопродукции в год
                            </h4>
                            <p className={s.cases__item_text}>
                                "АЛКАМ плюс" успешно осуществляет свою
                                деятельность на рынке изготовления
                                полуфабрикатов из цветных и черных металлов с
                                2002 года.{" "}
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.9, duration: 1 }}
                            viewport={{ once: true }}
                            className={s.cases__item}
                        >
                            <div className={s.cases__item_number}>
                                <span>04</span>
                            </div>
                            <div className={s.cases__item_line}></div>
                            <h4 className={s.cases__item_title}>
                                Более 2000 тонн металлопродукции в год
                            </h4>
                            <p className={s.cases__item_text}>
                                "АЛКАМ плюс" успешно осуществляет свою
                                деятельность на рынке изготовления
                                полуфабрикатов из цветных и черных металлов с
                                2002 года.{" "}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
