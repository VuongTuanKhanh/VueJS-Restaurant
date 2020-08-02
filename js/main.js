Vue.component("preloader", {
    template: `
    <!-- PRE LOADER -->
    <section class="preloader">
         <div class="spinner">
              <span class="spinner-rotate"></span>
         </div>
    </section>
    `
})

Vue.component("menubar", {
    template: `
    <!-- MENU -->
          <section class="navbar custom-navbar navbar-fixed-top" role="navigation">
               <div class="container">
                    <div class="navbar-header">
                         <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                              <span class="icon icon-bar"></span>
                              <span class="icon icon-bar"></span>
                              <span class="icon icon-bar"></span>
                         </button>

                         <!-- lOGO TEXT HERE -->
                         <a :href="homepage" class="navbar-brand">{{ store_Name }}</a>
                    </div>

                    <!-- MENU LINKS -->
                    <div class="collapse navbar-collapse">
                         <ul class="nav navbar-nav navbar-nav-first">
                              <li v-for="navbar_Item in navbar_Items"><a :href="navbar_Item.href" class="smoothScroll">{{ navbar_Item.name }}</a></li>
                         </ul>

                         <ul class="nav navbar-nav navbar-right">
                              <li><a href="#">{{ call_Now_Text }}<i class="fa fa-phone"></i> {{ phone }}</a></li>
                              <a href="#footer" class="section-btn">{{ book_text }}</a>
                         </ul>
                    </div>
               </div>
          </section>
    `,
    data() {
        return {
            homepage: "index.html",
            store_Name: "Lux Drill Cafe",
            phone: '010 020 0340',
            call_Now_Text: "Call Now ! ",
            book_text: "Reserve a table",
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
            ]
        }
    },
})

Vue.component("home", {
    template: `
    <!-- HOME -->
    <section id="home" class="slider" data-stellar-background-ratio="0.5">
         <div class="row">
              <div class="owl-carousel owl-theme">
                   <div v-for="slide_Show in slide_Shows" :class="slide_Show.class">
                        <div class="caption">
                             <div class="container">
                                  <div class="col-md-8 col-sm-12">
                                       <h3>{{ slide_Show.first_Title }}</h3>
                                       <h1>{{ slide_Show.second_Title }}</h1>
                                       <a :href="slide_Show.href"
                                            class="section-btn btn btn-default smoothScroll">{{ slide_Show.button_Text }}</a>
                                  </div>
                             </div>
                        </div>
                   </div>
              </div>
         </div>
    </section>
    `,
    data() {
        return {
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
            ]
        }
    },
})

Vue.component("about", {
    template: `
    <!-- ABOUT -->
    <section id="about" data-stellar-background-ratio="0.5">
         <div class="container">
              <div class="row">
                   <div class="col-md-6 col-sm-12">
                        <div class="about-info">
                             <div class="section-title wow fadeInUp" data-wow-delay="0.2s">
                                  <h4>{{ first_Title }}</h4>
                                  <h2>{{ second_Title }}</h2>
                             </div>

                             <div class="wow fadeInUp" data-wow-delay="0.4s">
                                  <p v-for="story in stories"> {{ story }}</p>
                             </div>
                        </div>
                   </div>

                   <div class="col-md-6 col-sm-12">
                        <div class="wow fadeInUp about-image" data-wow-delay="0.6s">
                             <img src="images/about-image.jpg" class="img-responsive" alt="">
                        </div>
                   </div>
              </div>
         </div>
    </section>
    `,
    data() {
        return {
            first_Title: "Read our story",
            second_Title: "We've been Making The Delicious Foods Since 1999",
            stories: [
                "After 30 years in business, we still serve the best Chinese food in the Sydney area. Peking specializes in authentic Chinese cuisine — try our delicious Cantonese and Szechwan dishes — as well as your favorite Chinese food. Our lunch and dinner menus offer an array of flavorful dishes that are sure to satisfy any appetite.",
                "For quality food, exceptional prices, and a clean and superb dining atmosphere, Peking is second to none. Whether you are looking for a quick lunch, a relaxing dinner, or an appetizer and cocktails, our experienced and courteous staff will make your visit a memorable one. If you prefer to dine at home, we offer a full take-out menu for pick-up or delivery."
            ]
        }
    },
})

Vue.component("team", {
    template: `
    <!-- TEAM -->
    <section id="team" data-stellar-background-ratio="0.5">
         <div class="container">
              <div class="row">
                   <div class="col-md-12 col-sm-12">
                        <div class="section-title wow fadeInUp" data-wow-delay="0.1s">
                             <h2>{{ first_Title }}</h2>
                             <h4>{{ second_Title }}</h4>
                        </div>
                   </div>

                   <div class="col-md-4 col-sm-4" v-for="chef in chefs">
                        <div class="team-thumb wow fadeInUp" data-wow-delay="0.4s">
                             <img :src="chef.img" class="img-responsive" alt="">
                             <div class="team-hover">
                                  <div class="team-item">
                                       <h4>{{ chef.hover_Text }}</h4>
                                       <ul class="social-icon">
                                            <li><a :href="chefs.linkedin" class="fa fa-instagram"></a></li>
                                            <li><a :href="chefs.email" class="fa fa-flickr"></a></li>
                                       </ul>
                                  </div>
                             </div>
                        </div>
                        <div class="team-info">
                             <h3>{{ chef.name }}</h3>
                             <p>{{ chef.position }}</p>
                        </div>
                   </div>
              </div>
         </div>
    </section>
    `,
    data() {
        return {
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
            ]
        }
    },
})

Vue.component("foodmenu", {
    template: `
    <!-- MENU-->
    <section id="menu" data-stellar-background-ratio="0.5">
         <div class="container">
              <div class="row">
                   <div class="col-md-12 col-sm-12">
                        <div class="section-title wow fadeInUp" data-wow-delay="0.1s">
                             <h2>{{ first_Title }}</h2>
                             <h4>{{ second_Title }}</h4>
                        </div>
                   </div>

                   <div class="col-md-4 col-sm-6" v-for="food_list in food_lists">
                        <!-- MENU THUMB -->
                        <div class="menu-thumb">
                             <a :href="food_list.img" class="image-popup" :title="food_list.name">
                                  <img :src="food_list.img" class="img-responsive" alt="">

                                  <div class="menu-info">
                                       <div class="menu-item">
                                            <h3>{{ food_list.name }}</h3>
                                            <p>{{ food_list.categories }}</p>
                                       </div>
                                       <div class="menu-price">
                                            <span>{{ food_list.price }}</span>
                                       </div>
                                  </div>
                             </a>
                        </div>
                   </div>
              </div>
         </div>
    </section>
    `,
    data() {
        return {
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
        }
    },
})

Vue.component("testimonial", {
    template: `
    <!-- TESTIMONIAL -->
    <section id="testimonial" data-stellar-background-ratio="0.5">
         <div class="overlay"></div>
         <div class="container">
              <div class="row">

                   <div class="col-md-12 col-sm-12">
                        <div class="section-title wow fadeInUp" data-wow-delay="0.1s">
                             <h2>{{ title }}</h2>
                        </div>
                   </div>

                   <div class="col-md-offset-2 col-md-8 col-sm-12">
                        <div class="owl-carousel owl-theme">
                             <div class="item" v-for="comment in comments">
                                  <p>{{ comment.text }}</p>
                                  <div class="tst-author">
                                       <h4>{{ comment.name }}</h4>
                                       <span>{{ comment.nationality }}</span>
                                  </div>
                             </div>
                        </div>
                   </div>
              </div>
         </div>
    </section>
    `,
    data() {
        return {
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
        }
    },
})

Vue.component("contact", {
    template: `
    <!-- CONTACT -->
    <section id="contact" data-stellar-background-ratio="0.5">
         <div class="container">
              <div class="row">
                   <div class="wow fadeInUp col-md-6 col-sm-12" data-wow-delay="0.4s">
                        <div id="google-map">
                             <iframe
                                  :src="map"
                                  allowfullscreen></iframe>
                        </div>
                   </div>

                   <div class="col-md-6 col-sm-12">

                        <div class="col-md-12 col-sm-12">
                             <div class="section-title wow fadeInUp" data-wow-delay="0.1s">
                                  <h2 class="popup" @mouseenter="show_Pop_Up()"">{{ form.title }}
                                  <h6 class="popuptext" id="myPopup">Send us your feelings !</h6></h2>
                             </div>
                        </div>

                        <!-- CONTACT FORM -->
                        <form action="#" method="post" class="wow fadeInUp" id="contact-form" role="form"
                             data-wow-delay="0.8s" @submit.prevent="onSubmit()">

                             <div class="col-md-6 col-sm-6">
                                  <input type="text" class="form-control" id="cf-name" name="name"
                                       :placeholder="form.placeholders.name" v-model="form.form_data.name">
                             </div>

                             <div class="col-md-6 col-sm-6">
                                  <input type="email" class="form-control" id="cf-email" name="email"
                                       :placeholder="form.placeholders.email" v-model="form.form_data.email">
                             </div>

                             <div class="col-md-12 col-sm-12">
                                  <input type="text" class="form-control" id="cf-subject" name="subject"
                                       :placeholder="form.placeholders.subject" v-model="form.form_data.subject">

                                  <textarea class="form-control" rows="6" id="cf-message" name="message"
                                       :placeholder="form.placeholders.content" v-model="form.form_data.content"></textarea>

                                  <button type="submit" class="form-control" id="cf-submit" name="submit">
                                  {{ form.button_text }}
                                  </button>
                             </div>
                        </form>
                   </div>
              </div>
         </div>
    </section>
    `,
    data() {
        return {
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.3030413476204!2d100.5641230193719!3d13.757206847615207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf51ce6427b7918fc!2sG+Tower!5e0!3m2!1sen!2sth!4v1510722015945",
            form: {
                title: "Contact Us",
                success: "Your message has been sent successfully.",
                invalid_mail: "E-mail must be valid and message must be longer than 1 character.",
                button_text: "Send Message",
                form_data: {
                    name: null,
                    email: null,
                    subject: null,
                    content: null
                },
                placeholders: {
                    name: "Full Name",
                    email: "Email address",
                    subject: "Subject",
                    content: "Tell us about your experience"
                }
            }
        }
    },
    methods: {
        show_Pop_Up() {
            var popup = document.getElementById("myPopup");
            popup.classList.toggle("show");
        },
        onSubmit() {
            console.log("Click");
            let review = {
                name: this.form.form_data.name,
                email: this.form.form_data.email,
                subject: this.form.form_data.subject,
                content: this.form.form_data.content
            };
            this.$emit("review_Summited", review);
            this.form.form_data.name = null;
            this.form.form_data.email = null;
            this.form.form_data.subject = null;
            this.form.form_data.content = null;
        }
    }
})

Vue.component("pagefooter", {
    template: `
    <!-- FOOTER -->
    <footer id="footer" data-stellar-background-ratio="0.5">
         <div class="container">
              <div class="row">
                   <div class="col-md-3 col-sm-8">
                        <div class="footer-info">
                             <div class="section-title">
                                  <h2 class="wow fadeInUp" data-wow-delay="0.2s">Find us</h2>
                             </div>
                             <address class="wow fadeInUp" data-wow-delay="0.4s">
                                  <p>{{ address }}</p>
                             </address>
                        </div>
                   </div>

                   <div class="col-md-3 col-sm-8">
                        <div class="footer-info">
                             <div class="section-title">
                                  <h2 class="wow fadeInUp" data-wow-delay="0.2s">{{ reservation }}</h2>
                             </div>
                             <address class="wow fadeInUp" data-wow-delay="0.4s">
                                  <p>{{ phone }}</p>
                                  <p><a href="mailto:info@company.com">{{ gmail }}</a></p>
                                  <p>LINE: KhanhVuong </p>
                             </address>
                        </div>
                   </div>

                   <div class="col-md-4 col-sm-8">
                        <div class="footer-info footer-open-hour">
                             <div class="section-title">
                                  <h2 class="wow fadeInUp" data-wow-delay="0.2s">{{ open_hours_text }}</h2>
                             </div>
                             <div class="wow fadeInUp" data-wow-delay="0.4s">
                                  <p>Monday: Closed</p>
                                  <div v-for="open_hour in open_hours">
                                       <strong>{{ open_hour.date }}</strong>
                                       <p>{{ open_hour.hours }}</p>
                                  </div>
                             </div>
                        </div>
                   </div>

                   <div class="col-md-2 col-sm-4">
                        <ul class="wow fadeInUp social-icon" data-wow-delay="0.4s">
                             <li><a href="#" class="fa fa-facebook-square" attr="facebook icon"></a></li>
                             <li><a href="#" class="fa fa-twitter"></a></li>
                             <li><a href="#" class="fa fa-instagram"></a></li>
                             <li><a href="#" class="fa fa-google"></a></li>
                        </ul>

                        <div class="wow fadeInUp copyright-text" data-wow-delay="0.8s">
                             <p><br>{{ copyright }}<br>{{ company_name }}

                                  <br><br>Design: Archius Vương</p>
                        </div>
                   </div>
              </div>
         </div>
    </footer>
    `,
    data() {
        return {
            address: "1261 Locust Street, Walnut, CA 94596, USA",
            reservation: "Reservation",
            phone: "090-080-0650 | 090-070-0430",
            gmail: "support@componentpro.com",
            open_hours_text: "Open Hours",
            copyright: "Copyright © 2018",
            company_name: "ComponentPro",
            open_hours: [{
                    date: "Tuesday to Friday",
                    hours: "7:00 AM - 9:00 PM"
                },
                {
                    date: "Saturday - Sunday",
                    hours: "11:00 AM - 10:00 PM"
                }
            ]
        }
    },
})

Vue.component("storefront", {
    template: `
    <div>
        <preloader />
        <menubar />
        <home />
        <about />
        <team />
        <foodmenu />
        <testimonial />
        <contact @review_Summited="add_Review" />
        <pagefooter />
        <div id="myModal" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>

                <div v-if="review">
                    <h3>Name: </h3>{{ review.name }}
                    <h3>Email: </h3>{{review.email }}
                    <h3>Subject: </h3>{{ review.subject }}
                    <h3>Content: </h3>{{ review.content }}
                </div>
            </div>
        </div>
     </div>
    `,
    data() {
        return {
            review: null
        }
    },
    methods: {
        add_Review(review) {
            this.review = review;
            var modal = document.getElementById("myModal");
            var span = document.getElementsByClassName("close")[0];
            modal.style.display = "block";
            span.onclick = function () {
                modal.style.display = "none";
            }
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        }
    }
})

let app = new Vue({
    el: "#app"
})