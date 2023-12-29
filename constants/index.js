export const categories = [
    {
        id: 1,
        name: 'Pizza',
        image: require('../assets/images/pizzaIcon.png'),
    },
    {
        id: 2,
        name: 'Burger',
        image: require('../assets/images/burger.jpeg'),
    },
    {
        id: 3,
        name: 'Italian',
        image: require('../assets/images/italian.jpg'),
    },
    {
        id: 4,
        name: 'Chinese',
        image: require('../assets/images/chinese.png'),
    },
    {
        id: 5,
        name: 'Noodles',
        image: require('../assets/images/noodles.png'),
    },
    {
        id: 6,
        name: 'Sweets',
        image: require('../assets/images/pizza.png'),
    },

]


export const featured = {
    id: 1,
    title: 'Hot and Spicy',
    description: 'soft and tender fried chicken',
    restaurants: [
        {
            id: 1,
            name: 'Papa Johns',
            image: require('../assets/images/pizza.png'),
            description: 'Hot and spicy pizzas',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                   id: 1,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/images/pizzaDish.png')
                },
                {
                   id: 2,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/images/pizzaDish.png')
                },
                {
                   id: 3,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/images/pizzaDish.png')
                },
            ]
    
        },
        {
            id: 2,
            name: 'Chicken Republic',
            image: require('../assets/images/ChickenRepublic.jpg'),
            description: 'Hot and spicy chicken',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                   id: 1,
                   name: 'Chicken Wings',
                   description: 'cheezy garlic chicken wings',
                   price: 10,
                   image:  require('../assets/images/restuarant2.jpeg')
                },
                {
                   id: 2,
                   name: 'Chicken Wings',
                   description: 'cheezy garlic chicken wings',
                   price: 10,
                   image:  require('../assets/images/restuarant2.jpeg')
                },
                {
                   id: 3,
                   name: 'Chicken Wings',
                   description: 'cheezy garlic chicken wings',
                   price: 10,
                   image:  require('../assets/images/restuarant2.jpeg')
                },
            ]
    
        },
        {
            id: 3,
            name: 'Papa Johns',
            image: require('../assets/images/restuarant4.webp'),
            description: 'Hot and spicy pizzas',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                   id: 1,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/images/pizzaDish.png')
                },
                {
                   id: 2,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/images/pizzaDish.png')
                },
                {
                   id: 3,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/images/pizzaDish.png')
                },
            ]
    
        }
    ]
}
