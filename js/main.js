let app = new Vue({
    el: "#app",
    data: {
        storefront: {
            homepage: "index.html",
            store_Name: "Lux Drill Cafe",
            phone: '010 020 0340',
            call_Now_Text: "Call Now ! ",
            book_text: "Reserve a table"
        },
        navbar_Items: [{
                name: "Home",
                href: "#home"
            },
            {
                name: "About",
                href: "#about"
            },
            {
                name: "Chef",
                href: "#team"
            },
            {
                name: "Menu",
                href: "#menu"
            },
            {
                name: "Contact",
                href: "#contact"
            }
        ],
        slide_Shows: [{
                class: {
                    'item': true,
                    'item-first': true
                },
                first_Title: "Lux Drill Cafe Restaurant",
                second_Title: "Our mission is to provide an unforgettable experience",
                button_Text: "Meet our chef",
                href: "#team"
            },
            {
                class: {
                    'item': true,
                    'item-second': true
                },
                first_Title: "Your Perfect Breakfast",
                second_Title: "The best dinning quality can be here too!",
                button_Text: "Discover menu",
                href: "#menu"
            },
            {
                class: {
                    'item': true,
                    'item-third': true
                },
                first_Title: "New Restaurant in Town",
                second_Title: "Enjoy our special menus every Sunday and Friday",
                button_Text: "Reservation",
                href: "#contact"
            }
        ],
        about_Info: {
            first_Title: "Read our story",
            second_Title: "We've been Making The Delicious Foods Since 1999",
            stories: [
                "After 30 years in business, we still serve the best Chinese food in the Sydney area. Peking specializes in authentic Chinese cuisine — try our delicious Cantonese and Szechwan dishes — as well as your favorite Chinese food. Our lunch and dinner menus offer an array of flavorful dishes that are sure to satisfy any appetite.",
                "For quality food, exceptional prices, and a clean and superb dining atmosphere, Peking is second to none. Whether you are looking for a quick lunch, a relaxing dinner, or an appetizer and cocktails, our experienced and courteous staff will make your visit a memorable one. If you prefer to dine at home, we offer a full take-out menu for pick-up or delivery."
            ]
        },
        team: {
            first_Title: "Meet our chefs",
            second_Title: "They are nice & friendly",
            chefs: [{
                    img: "images/team-image1.jpg",
                    hover_Text: "20 years master of Seafood",
                    linkedin: "#",
                    email: "#",
                    name: "New Catherine",
                    position: "Kitchen Officer"
                },
                {
                    img: "images/team-image2.jpg",
                    hover_Text: "Owner of 4 Sushi restaurent in Japan",
                    linkedin: "#",
                    email: "#",
                    name: "Lindsay Perlen",
                    position: "Owner Manager"
                },
                {
                    img: "images/team-image3.jpg",
                    hover_Text: "Genuine Chef from French with 3 Michelline Stars",
                    linkedin: "",
                    email: "",
                    name: "Isabella Grace",
                    position: "Pizza Specialist"
                }
            ],
        },
        menu: {
            first_Title: "Our Menus",
            second_Title: "Tea Time & Dinning",
            food_lists: [{
                    img: "images/menu-image1.jpg",
                    name: "American Breakfast",
                    categories: "Tomato / Eggs / Sausage",
                    price: "$25"
                },
                {
                    img: "images/menu-image2.jpg",
                    name: "Self-made Salad",
                    categories: "Green / Fruits /Healthy",
                    price: "$18"
                },
                {
                    img: "images/menu-image3.jpg",
                    name: "Chinese Noodle",
                    categories: "Pepper / Chicken / Vegetables",
                    price: "$34"
                },
                {
                    img: "images/menu-image4.jpg",
                    name: "Rice Soup",
                    categories: "Green / Chicken",
                    price: "$28"
                },
                {
                    img: "images/menu-image5.jpg",
                    name: "Deli Burger",
                    categories: "Beef / Fried Potatoes",
                    price: "$46"
                },
                {
                    img: "images/menu-image6.jpg",
                    name: "Big Flat Fried",
                    categories: "Pepper / Crispy",
                    price: "$30"
                },
            ]
        },
        testimonials: {
            title: "Testimonials",
            comments: [{
                    text: "My wife and I, vacationing in SD from Chicago, had lunch Fri 17th at TFG and we were both absolutely pleased with everything at your place. Your wait staff was so pleasant and helpfull. Your menu is classic French executed authentically. Do not change a thing!! The kitchen, the staff, the menu, the wine list, the bakery (I couldn’t eat another bite so I took a raspberry tart to go) are all the finest. I will recommend to everyone The French Gourmet. Don’t change a thing! You are spot on!",
                    name: "Digital Carlson",
                    nationality: "England"
                },
                {
                    text: "We were at The French Gourmet a few weeks ago with some clients from Texas . I am finally getting back to tell you that we had a wonderful evening! The food, the service, the host, EVERYTHING was perfect! Thank you again for making TFG such a special place to be. We hope to see you again soon. Keep up the good work !",
                    name: "Johnny Stephen",
                    nationality: "United State of America"
                },
                {
                    text: "Thank you for dinner last night. It was amazing!! I have to say it’s the best meal I have had in quite some time. You will definitely be seeing more of me eating at your establishment. My husband was very impressed and we can’t wait for our parents to come visit so that we can share our new favorite place with them.",
                    name: "Jessie White",
                    nationality: "British"
                }
            ]
        },
        contact: {
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.3030413476204!2d100.5641230193719!3d13.757206847615207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf51ce6427b7918fc!2sG+Tower!5e0!3m2!1sen!2sth!4v1510722015945",
            form: {
                title: "Contact Us",
                success: "Your message has been sent successfully.",
                invalid_mail: "E-mail must be valid and message must be longer than 1 character.",
                button_text: "Send Message",
                placeholders: {
                    name: "Full Name",
                    email: "Email address",
                    subject: "Subject",
                    content: "Tell us about your experience"
                }
            }
        },
        footer: {
            address: "1261 Locust Street, Walnut, CA 94596, USA",
            reservation: "Reservation",
            phone: "090-080-0650 | 090-070-0430",
            gmail: "support@componentpro.com",
            open_hours_text: "Open Hours",
            copyright: "Copyright © 2018",
            company_name: "ComponentPro",
            open_hours: [
                {
                    date: "Tuesday to Friday",
                    hours: "7:00 AM - 9:00 PM"
                },
                {
                    date: "Saturday - Sunday",
                    hours: "11:00 AM - 10:00 PM"
                }
            ]
        }
    }
})