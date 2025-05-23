const PRODUCTS_DATA = {
    categories: [
        {
            id: 1,
            title: "Готовая еда",
            products: [
                {
                    id: 101,
                    name: "Драники картофельные",
                    description:
                        "Румяные картофельные драники, обжаренные до золотистой корочки.",
                    price: 150,
                    imageUrl: "/data/images/101.webp",
                    weight: "120г",
                    isNew: true,
                },
                {
                    id: 102,
                    name: "Яйца куриные отварные",
                    description:
                        "Отварные яйца, приготовленные вкрутую — идеальны для перекуса или салатов.",
                    price: 85,
                    imageUrl: "/data/images/102.webp",
                    weight: "100г",
                },
                {
                    id: 103,
                    name: "Щи из свежей капусты с курицей",
                    description:
                        "Ароматные домашние щи на курином бульоне со свежей капустой и зеленью.",
                    price: 132,
                    oldPrice: 189,
                    imageUrl: "/data/images/201.png",
                    weight: "250г",
                },
                {
                    id: 104,
                    name: "Блины с маслом",
                    description:
                        "Тонкие домашние блины, поданные с ароматным сливочным маслом.",
                    price: 97,
                    oldPrice: 139,
                    imageUrl: "/data/images/202.png",
                    weight: "200г",
                },
                {
                    id: 105,
                    name: "Котлета куриная с пюре",
                    description:
                        "Сытная куриная котлета с нежным картофельным пюре — классика домашнего обеда.",
                    price: 195,
                    oldPrice: 279,
                    imageUrl: "/data/images/203.png",
                    weight: "300г",
                },
            ],
        },
        {
            id: 2,
            title: "Овощи и зелень",
            products: [
                {
                    id: 301,
                    name: "Помидоры сливовидные",
                    description:
                        "Сочные помидоры сливовидной формы — сладкие и ароматные.",
                    price: 104,
                    oldPrice: 149,
                    imageUrl: "/data/images/301.png",
                    weight: "450г",
                },
                {
                    id: 302,
                    name: "Огурцы короткоплодные",
                    description:
                        "Свежие хрустящие огурцы, идеально подходят для салатов и закусок.",
                    price: 111,
                    imageUrl: "/data/images/302.png",
                    weight: "450г",
                },
            ],
        },
        {
            id: 3,
            title: "Варенье, мёд и пасты",
            products: [
                {
                    id: 401,
                    name: "Варенье клубничное",
                    description:
                        "Ароматное варенье из спелой клубники — вкус лета в каждой ложке.",
                    price: 265,
                    imageUrl: "/data/images/401.png",
                    weight: "450г",
                },
                {
                    id: 402,
                    name: "Паста ореховая Nutella с какао",
                    description:
                        "Знаменитая орехово-шоколадная паста Nutella — идеально к тостам и блинам.",
                    price: 480,
                    oldPrice: 689,
                    imageUrl: "/data/images/402.png",
                    weight: "450г",
                },
            ],
        },
    ],
};

export default PRODUCTS_DATA;
