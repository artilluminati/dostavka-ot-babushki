import bannerImg from "../assets/images/banner.png";
import bannerVid from "../assets/videos/banner.mp4";
import { Button } from "../components/BrandButton";
import { NavLink } from "react-router";

export default function Banner() {
    return (
        <section>
            <div className="@container max-w-[1344px] mx-auto bg-brand rounded-b-4xl mb-[132px]">
                <div className="base-container flex justify-between relative">
                    <div className="w-[40cqw] py-[80px]">
                        <h1 className="text-5xl font-black">
                            Домашний уют за 15 минут
                        </h1>
                        <h3 className="text-[18px] font-medium max-w-[318px] mt-5 mb-6">
                            Доставляем свежие продукты, готовую еду и товары для
                            дома — с теплом и заботой, как у бабушки.
                        </h3>
                        <NavLink to={"/catalog"}>
                            <Button variant="brand" className="!font-bold">
                                Заказать доставку
                            </Button>
                        </NavLink>
                    </div>

                    <div className="w-[50cqw] aspect-[279/290] absolute right-0">
                        {/* <img className="w-full" src={bannerImg} alt="" /> */}
                        <video
                            className="w-full aspect-[279/290] object-cover object-center rounded-b-4xl"
                            src={bannerVid}
                            muted
                            autoPlay
                            loop
                        ></video>
                    </div>
                </div>
            </div>
        </section>
    );
}
