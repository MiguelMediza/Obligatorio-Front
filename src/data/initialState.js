const initialState = {
    currentUser: null,
    places: [
        {
            id: 1,
            name: 'Café de la Plaza',
            address: 'Plaza Mayor, 1',
            image: 'https://via.placeholder.com/150',
            description: 'El mejor café de la plaza',
            location: "Montevideo, Uruguay",
            rating: 4.5,
            review: [{
                id: 1,
                userId: 1,
                username: 'John Doe',
                comment: 'Great place, I loved it!',
                rating: 4.5
            },
            {
                id: 2,
                userId: 2,
                username: 'Jane Doe',
                comment: 'Great place, I loved it!',
                rating: 4.5
            }],
        },
        {
            id: 2,
            name: 'Restaurant La Piazza',
            address: 'Avenida Italia, 123',
            image: 'https://via.placeholder.com/150',
            description: 'Delicious Italian cuisine',
            location: "Montevideo, Uruguay",
            rating: 4.2,
            review: [{
                id: 3,
                userId: 3,
                username: 'Alice Smith',
                comment: 'Amazing food and service!',
                rating: 4.8
            },
            {
                id: 4,
                userId: 4,
                username: 'Bob Johnson',
                comment: 'Highly recommended!',
                rating: 4.5
            }],
            events: [
                {
                  id: 1,
                  placeId: 1,
                  name: "Music Festival",
                  image: "https://via.placeholder.com/300",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
                  location: "Miami, FL",
                  date: "2023-05-27",
                  rating: 3.8,
                  comments: [
                    {
                      id: 3,
                      userId: 2,
                      username: "Jane Smith",
                      text: "Good music, but the crowd was too rowdy.",
                      rating: 3,
                    },
                    {
                      id: 4,
                      userId: 3,
                      username: "Bob Johnson",
                      text: "Had a blast at this festival, would definitely come back!",
                      rating: 4,
                    },
                  ],
                  reviews: [
                    {
                      id: 5,
                      userId: 2,
                      username: "Jane Smith",
                      comment: "Good music, but the crowd was too rowdy.",
                      rating: 3,
                    },
                    {
                      id: 6,
                      userId: 3,
                      username: "Bob Johnson",
                      comment:
                        "Had a blast at this festival, would definitely come back!",
                      rating: 4,
                    },
                  ],
                },
                {
                  id: 2,
                  placeId: 1,
                  name: "Art Exhibition",
                  image: "https://via.placeholder.com/300",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
                  location: "New York, NY",
                  date: "2023-07-15",
                  rating: 4.6,
                  comments: [],
                  reviews: [
                    {
                      id: 7,
                      userId: 1,
                      username: "John Doe",
                      comment: "Incredible artwork and a great atmosphere!",
                      rating: 5,
                    },
                    {
                      id: 8,
                      userId: 2,
                      username: "Jane Smith",
                      comment: "One of the best art exhibitions I've been to.",
                      rating: 5,
                    },
                  ],
                },
              ],
        },
        {
            id: 3,
            name: 'Bar The Tavern',
            address: 'Avenida Brasil, 456',
            image: 'https://via.placeholder.com/150',
            description: 'Great place for a drink',
            location: "Montevideo, Uruguay",
            rating: 4.0,
            review: [{
                id: 5,
                userId: 5,
                username: 'Charlie Brown',
                comment: 'Great place, I loved it!',
                rating: 4.5
            },
            {
                id: 6,
                userId: 6,
                username: 'Diana Smith',
                comment: 'Great place, I loved it!',
                rating: 4.5
            }]
        },
        {
            id: 4,
            name: 'Hotel The Grand',
            address: 'Avenida Libertador, 789',
            image: 'https://via.placeholder.com/150',
            description: 'Luxury hotel with great service',
            location: "Montevideo, Uruguay",
            rating: 4.5,
            review: [{
                id: 7,
                userId: 7,
                username: 'Eva Johnson',
                comment: 'Great place, I loved it!',
                rating: 4.5
            },
            {
                id: 8,
                userId: 8,
                username: 'Frank Brown',
                comment: 'Great place, I loved it!',
                rating: 4.5
            }]
        },
        {
            id: 5,
            name: 'Museum The Art House',
            address: 'Avenida Italia, 1011',
            image: 'https://via.placeholder.com/150',
            description: 'Great place to see art',
            location: "Montevideo, Uruguay",
            rating: 4.5,
            review: [{
                id: 9,
                userId: 9,
                username: 'George Smith',
                comment: 'Great place, I loved it!',
                rating: 4.5
            },
            {
                id: 10,
                userId: 10,
                username: 'Helen Johnson',
                comment: 'Great place, I loved it!',
                rating: 4.5
            }]
        },
    ]
}

export default initialState;