import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline"
import BabushkaImg from "../../assets/images/babushka-s-telefonom.png"
import AbsoulteImg from "../../assets/images/floating-items.png"
import TgIcon from "../../assets/images/icons/tg-icon.png"

export default function ContactSection({className = ""}) {
    const baseListClass = "flex items-center gap-x-1 font-medium text-3xl";

    return <section className={`base-container ${className}`} id="contact">
        <div className="flex justify-between gap-6">
            <div className="relative bg-brand pt-6 flex-grow w-[50cqw] rounded-4xl h-[500px] box-border flex items-end justify-center">
                <img src={BabushkaImg} alt="" />
                <img src={AbsoulteImg} className="absolute top-6 max-w-[55cqw] blur-2xls" alt="" />
            </div>
            <div className="flex-grow w-[50cqw] pl-12 flex flex-col gap-y-9 justify-center">
                <h3 className="font-black text-5xl">Наши контакты</h3>
                <div className="flex gap-6 flex-col">
                    <a href="tel:88001234567" className={baseListClass}>
                        <PhoneIcon className="stroke-brand-button size-8"/>
                        <span>8 (800) 123-45-67</span>
                    </a>
                    <a href="mailto:support@otbabushki.ru" className={baseListClass}>
                        <EnvelopeIcon className="stroke-brand-button size-8"/>
                        <span>support@otbabushki.ru</span>
                    </a>
                    <a href="https://t.me/dostavkaotbabushki" className={baseListClass}>
                        <img src={TgIcon}></img>
                        <span>@dostavkaotbabushki</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
}