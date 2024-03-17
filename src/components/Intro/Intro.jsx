"use client";

import { useEffect, useState } from "react";
import ButtonRed from "../ButtonRed/ButtonRed";
import ButtonWhite from "../ButtonWhite/ButtonWhite";
import Header from "../Header/Header";
import Title from "../Title/Title";
import s from "./Intro.module.scss";
import servicesStyle from '../../app/services/page.module.scss'
import Location from "../Location/Loctaion";
import { usePathname } from "next/navigation";
import { Link as ScrollLink } from "react-scroll";
import MobileItem from "../Header/MobileItem/MobileItem";
import Link from "next/link";

export default function Intro({ title, articles, isService, children, sendData, paths, buttonText, scrollTo }) {

    let intros = [
        {
            title: title?.text,
            text: "Наша компания предлагает полный комплекс услуг по резке цветного металлопроката в размер: Правка и резка алюминиевых листов всех сплавов, в том числе на карточки; Резка плит в размер по чертежам, резка прутков; Резка рулонного алюминия и его сплавов на листы в том числе в нестандартный раскрой по ширине и длине.",
            videoUrl: "/videos/services.mp4",
            style: title?.style,
            path: 'Резка металлопроката'
        },
        {
            title: "ОКАЗЫВАЕМ КОМПЛЕКС УСЛУГ ПО ТЕРМООБРАБОТКЕ МЕТАЛЛОПРОКАТА",
            text: "Мы предлагаем полный комплекс услуг по термической обработке алюминиевых полуфабрикатов. Наши специалисты готовы выполнить работы любой сложности «под ключ» в рамках серийного изготовления или индивидуального заказа",
            videoUrl: "/videos/services2.mp4",
            style: {marginTop: 34, maxWidth: 930},
            path: 'Термообработка'
        },
        {
            title: "ОКАЗЫВАЕМ КОМПЛЕКС УСЛУГ ПО БРАШИРОВАНИЮ МЕТАЛЛОПРОКАТА",
            text: "Наша упаковка обеспечивает полную сохранность продукции при транспортировке и хранении. Мы соблюдаем требования ГОСТ на упаковку 9.519-93.",
            videoUrl: "/videos/about.mp4",
            style: {marginTop: 36, maxWidth: 871},
            path: 'Браширование'
        }

    ]

    const [currentIntro, setCurrentIntro] = useState(intros[0]);

    return (
        <section className={s.intro} style={{ height: "97vh" }}>
            <div className="container">
                <video className={"video"} autoPlay
                        muted
                        loop preload="auto">
                <source src={currentIntro.videoUrl} type="video/mp4"  />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="wrapper">
                <Header data={articles} sendData={sendData} />
                <div className="container">
                    <Location paths={isService ? [...paths,  currentIntro.path] : paths} />
                    <Title style={...currentIntro.style}>{currentIntro.title}</Title>  
                    {children}
                    {!isService && <div className={s.button}>
                        <ScrollLink
                            activeClass="active"
                            to={scrollTo}
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1000}
                        >
                            <ButtonRed>
                                {buttonText}
                            </ButtonRed>
                        </ScrollLink>
                    </div>}
                    {isService && <p className={ servicesStyle.services__text}>
                        {currentIntro.text}
                    </p>}
                    {isService && (
                        <div className={s.services__buttons}>
                            {currentIntro.videoUrl ===
                            "/videos/services.mp4" ? (
                                <ButtonRed
                                    style={{ fontSize: 14 }}
                                    onClick={() =>
                                        setCurrentIntro(intros[0])
                                    }
                                >
                                    Резка металлопроката
                                </ButtonRed>
                            ) : (
                                <ButtonWhite
                                    style={{ fontSize: 14 }}
                                    onClick={() =>
                                        setCurrentIntro(intros[0])
                                    }
                                >
                                    Резка металлопроката
                                </ButtonWhite>
                            )}
                            {currentIntro.videoUrl ===
                            "/videos/services2.mp4" ? (
                                <ButtonRed
                                    style={{ fontSize: 14 }}
                                    onClick={() =>
                                        setCurrentIntro(intros[1])
                                    }
                                >
                                    Тремоообработка металлопроката
                                </ButtonRed>
                            ) : (
                                <ButtonWhite
                                    style={{ fontSize: 14 }}
                                    onClick={() =>
                                        setCurrentIntro(intros[1])
                                    }
                                >
                                    Тремоообработка металлопроката
                                </ButtonWhite>
                            )}
                            {currentIntro.videoUrl === "/videos/about.mp4" ? (
                                <ButtonRed
                                    style={{ fontSize: 14 }}
                                    onClick={() =>
                                        setCurrentIntro(intros[2])
                                    }
                                >
                                    БРАШИРОВАНИЕ ПОВЕРХНОСТИ
                                </ButtonRed>
                            ) : (
                                <ButtonWhite
                                    style={{ fontSize: 14 }}
                                    onClick={() =>
                                        setCurrentIntro(intros[2])
                                    }
                                >
                                    БРАШИРОВАНИЕ ПОВЕРХНОСТИ
                                </ButtonWhite>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
