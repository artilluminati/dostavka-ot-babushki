const PRODUCTS_DATA = {
    categories: [
        {
            id: 1,
            title: "Готовая еда",
            products: [
                {
                    id: 101,
                    name: "Дра­ни­ки кар­то­фель­ные",
                    description: "Суп-пюре из шампиньонов",
                    price: 150,
                    imageUrl: "/data/images/101.webp",
                    weight: "120г",
                    isNew: true,
                },
                {
                    id: 102,
                    name: "Яйца куриные отварные От Бабушки",
                    price: 85,
                    imageUrl: "/data/images/102.webp",
                    weight: "100г",
                },
            ],
        },
        {
            id: 2,
            title: "Основное меню",
            products: [
                {
                    id: 201,
                    name: "Суп-пюре из шампиньонов",
                    price: 285,
                    imageUrl: "/data/images/mushroom-soup.jpg",
                    weight: "450г",
                },
                {
                    id: 202,
                    name: "Лазанья по-домашнему",
                    price: 420,
                    imageUrl: "/data/images/lasagna.jpg",
                    weight: "600г",
                },
            ],
        },
    ],
};

export default PRODUCTS_DATA;
