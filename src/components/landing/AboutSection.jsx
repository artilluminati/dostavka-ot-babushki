import sectionImg1 from "../../assets/images/about-section-img1.png";
import sectionImg2 from "../../assets/images/about-section-img2.png";
import sectionImg3 from "../../assets/images/about-section-img3.png";
import sectionVid1 from "../../assets/videos/about-section-vid1.mp4";
import AboutSectionCard from "./AboutSectionCard";

export default function AboutSection() {
    return (
        <section className="pt-[120px]" id="about">
            <h2 className="text-5xl font-black text-center mb-8">
                Как мы работаем?
            </h2>
            <div className="base-container">
                <div className="flex w-full justify-between bg-brand-card-bg rounded-4xl p-9 mt-[64px]">
                    <div className="w-[40cqw]">
                        <h3 className="text-2xl font-bold">
                            Домашний уют и мгновенный
                            <br /> сервис
                        </h3>
                        <p>
                            Мы объединили два самых дорогих чувства: домашний
                            уют и мгновенный сервис, чтобы каждая покупка дарила
                            тепло бабушкиного дома и скорость современного
                            сервиса
                        </p>
                    </div>
                    <div className="relative w-[50cqw] flex justify-end">
                        <img
                            src={sectionImg1}
                            className="absolute bottom-[-26px] h-[270px]"
                        />
                    </div>
                </div>
                <div className="flex gap-x-6 mt-6 justify-between">
                    {/* 1-я карточка (изначально широкая), фон-картинка, overlay черный */}
                    <AboutSectionCard
                        title="Склады-кухни в вашем районе"
                        description="Удобные пункты выдачи поблизости"
                        media={{ type: "image", src: sectionImg3 }}
                        overlay="black"
                    />

                    {/* 2-я карточка, фон-видео, overlay brand */}
                    <AboutSectionCard
                        title="Бережно выбираем товары"
                        description="Только свежие продукты от проверенных поставщиков"
                        media={{ type: "video", src: sectionVid1 }}
                        overlay="black"
                    />

                    {/* 3-я карточка, фон-картинка, overlay brand */}
                    <AboutSectionCard
                        title="Доставка от 15 минут"
                        description="Молниеносная скорость прямо к вашему порогу"
                        media={{ type: "image", src: sectionImg2 }}
                        overlay="brand"
                    />
                </div>
            </div>
        </section>
    );
}
