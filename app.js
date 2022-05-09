const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
    const linkHeight = links.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    
    
    if(containerHeight === 0){
        linksContainer.style.height= `${linkHeight}px`;
    }
    else{
        linksContainer.style.height = 0;
    }
});


const navbar = document.querySelector('#navbar');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll',function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    if(scrollHeight > navHeight){
        navbar.classList.add('fixed-nav');
    }
    else {
        navbar.classList.remove('fixed-nav');
    };
    if(scrollHeight> 500){
        topLink.style.visibility = 'visible';
        topLink.style.zIndex = '100'
    }
    else {
        topLink.style.visibility = 'hidden';
        topLink.style.zIndex = '-100'
    }
})

const scrollLinks = document.querySelectorAll('.scroll-link')


scrollLinks.forEach(function(link){
    link.addEventListener('click',function(e){
        const width = document.body.getBoundingClientRect().width;
  
        if(width >= 800){
           e.preventDefault();

        };

        const id = link.getAttribute('href').slice(1);
        

        const element = document.getElementById(id);
      
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height; 
        const fixedNav = navbar.classList.contains('fixed-nav') 
        let position = element.offsetTop -navHeight;
        
        if(!fixedNav){
            position = position - navHeight
        };
       
        
        window.scrollTo({
            left:0,
            top:position,
        });
        linksContainer.style.height = 0;
    })
})
// footer

let homedate = document.querySelector('.date');
homedate.innerHTML = new Date().getFullYear();


// About page
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];


const abouthours = document.querySelectorAll('.hours');
const aboutminutes = document.querySelectorAll('.minutes');
const aboutseconds = document.querySelectorAll('.seconds');
const closes = document.querySelectorAll('.close');


const aboutCurrentDate = new Date;
const aboutCurrentYear = aboutCurrentDate.getFullYear();
let aboutCurrentMonth = aboutCurrentDate.getMonth();
aboutCurrentMonth = months[aboutCurrentMonth];

let aboutCurrentDay = aboutCurrentDate.getDay();
aboutCurrentDay = days[aboutCurrentDay];

const aboutFutureDate = new Date(aboutCurrentYear,aboutCurrentDate.getMonth(),aboutCurrentDate.getDate(),22,0,0);



let aboutFutureTime = aboutFutureDate.getTime()


function getRemainingHours(){
    let today = new Date().getTime();
    let t =aboutFutureTime - today ;
 

    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;


    let hours = Math.floor(t/oneHour);
    let minutes = Math.floor((t % oneHour)/ oneMinute);
    let seconds = Math.floor((t%oneMinute) /1000);

    function format(item){
        if(item <10){
            return(item = `0${item}`)
        }
        return item
    }
    
    let values = [hours,minutes,seconds]; 

    abouthours.forEach(function(abouthour){
        abouthour.innerHTML = format(values[0])
    })
    aboutminutes.forEach(function(aboutmin){
        aboutmin.innerHTML = format(values[1])
    })
    aboutseconds.forEach(function(aboutsec){
        aboutsec.innerHTML = format(values[2])
    })

    if(t < 0){
      countdown = clearInterval(countdown)
      closes.forEach(function(close){

        close.innerHTML = `<h4>We are closed for the day</h4>`
      })

    };
    console.log(t);

};
let countdown = setInterval(getRemainingHours,1000)
getRemainingHours()





// Menu page

const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "/images/menu-1.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "/images/menu-2.jpg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "Bread and Egg",
      category: "breakfast",
      price: 6.99,
      img: "./images/menu-3.jpg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/menu-4.jpg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/menu-5.jpg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "breakfast",
      price: 18.99,
      img: "/images/menu-6.jpg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "/images/item-1.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "/images/item-2.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "/images/item-3.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "Egg",
      category: "dinner",
      price: 36.99,
      img: "/images/item-4.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 11,
      title: "Sandwich",
      category: "breakfast",
      price: 36.99,
      img: "/images/sandwich.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 12,
      title: "Sushi",
      category: "dinner",
      price: 36.99,
      img: "/images/sushi.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 13,
      title: "chicken",
      category: "lunch",
      price: 36.99,
      img: "/images/chicken.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 14,
      title: "Strawberry smoothie",
      category: "shakes",
      price: 36.99,
      img: "/images/strawberry.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 15,
      title: "Organic Smoothie",
      category: "shakes",
      price: 36.99,
      img: "/images/organic-shakes.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 16,
      title: "Chocolate smoothie",
      category: "shakes",
      price: 36.99,
      img: "/images/item-6.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 17,
      title: "Steak",
      category: "dinner",
      price: 36.99,
      img: "/images/stake.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 18,
      title: "Hamburger",
      category: "lunch",
      price: 36.99,
      img: "/images/item-5.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 19,
      title: "Galic Steak",
      category: "dinner",
      price: 36.99,
      img: "/images/item-10.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 20,
      title: "French fries",
      category: "dinner",
      price: 36.99,
      img: "/images/item-8.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];



const menuBtnContainer = document.querySelector('.menu-btns');
const menuContainer = document.querySelector('.menu-info-container');

window.addEventListener('DOMContentLoaded',function(){
    getMenuItems(menu);
    getButtonItems();
})


function getMenuItems(menuItem){
   let displayItem = menuItem.map(function(Item){
       return`<div class="menu-info">
                       
       <div class='menu-img' style="background: url(${Item.img}) no-repeat center/cover;"></div>
   <div class="menu-item">
       <header>
           <h4>${Item.title}</h4>
           <p class="price">$${Item.price}</p>
       </header>
       <div class="order-info">

           <p>${Item.desc}</p>
           <button class="page-btn order-btn  ">order now!</button>
       </div>
   </div>
</div>`
   });
   displayItem = displayItem.join('');
   menuContainer.innerHTML = displayItem
};

function getButtonItems(){
    const categories = menu.reduce(function(values,item){
        if(!values.includes(item.category)){
            values.push(item.category);
        }
        return values

    }, ['all'])
    const categoryBtns = categories.map(function(category){
        return `<button class="menu-btn" type="button" data-id= ${category}>${category}</button>`
    }).join('');
    menuBtnContainer.innerHTML = categoryBtns;
    const menuBtns = document.querySelectorAll('.menu-btn');

    menuBtns.forEach(function(menuBtn){
        menuBtn.addEventListener('click', function(e){
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function(categoryItem){
                if(categoryItem.category === category){
                   return categoryItem;
                };
            })
            if(category === 'all'){
                getMenuItems(menu);
            }
            else {
                getMenuItems(menuCategory)
            }


        })
    })
     
}


// Events

const news = [
  {
    id: 1,
    title: "60th Anniversary",
    guest: 100,
    img: "/images/birthday.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "Conference meeting",
    guest: 50,
    img: "/images/meeting.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "Graduation party",
    guest: 60,
    img: "./images/graduation.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "wedding",

    guest: 150,
    img: "./images/wedding.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "Eating competition",
    guest: 220,
    img: "./images/menu-5.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
];

const newsContainer = document.querySelector('.news-container');

window.addEventListener('DOMContentLoaded', function(){
  displayRecentNews(news);
});

function displayRecentNews(recentNews) {
  const displayNews = recentNews.map(function(info){
    return ` <div class="news">
    <div class='img-container news-img-container' style="background: url(${info.img}) no-repeat center/cover;"></div>
    <div class="news-info">
        <h3 class="event-title">${info.title}</h3>
        <p>${info.desc}</p>
        <h4>No of guest: <span class='guest' >${info.guest}</span></h4>
        
    </div>
</div>`
  }).join('');
  newsContainer.innerHTML = displayNews;
}


// reservation

const reservationLinks = document.querySelectorAll('.reservation-link');
const closeBtn = document.querySelector('.close-btn')
const popUp = document.querySelector('.pop-up');
const popupContainer = document.querySelector('.popup-container');
const submitBtn = document.querySelector('.submit-btn');
const inputs = document.querySelectorAll('.input');
const loginContainer = document.querySelector('.login-details');
const reservationBtn = document.querySelector('.reservation-btn');
const signupBtn = document.querySelector('.signup-btn');
const signup = document.querySelector('.sign-up');
const signupContainer = document.querySelector('.signup-details');

const signupPop = document.querySelector('.signup-pop');
reservationLinks.forEach(function(reservationLink){
  reservationLink.addEventListener('click',function(){
    popUp.classList.add('show-popup');
    reservationBtn.classList.add('hide-reservation');
    loginContainer.classList.remove('hide-login');
  });
});

closeBtn.addEventListener('click',function(){
    popUp.classList.remove('show-popup');
  
  
});
submitBtn.addEventListener('click',function(){
     inputs.forEach(function(input){
       input.value = '';
     });
     if(loginContainer.classList.contains('hide-login')){
       loginContainer.classList.remove('hide-login')
     }else{
       loginContainer.classList.add('hide-login');
     }
     if(reservationBtn.classList.contains('hide-reservation')){
       reservationBtn.classList.remove('hide-reservation')
      }else{
        reservationBtn.classList.add('hide-reservation');

      }
  
})

const signupCloseBtn = document.querySelector('.signup-close-btn')
const signupInputs = document.querySelectorAll('.signup-input');


signup.addEventListener('click',function(){
  signupPop.style.visibility = 'visible';
  popUp.classList.remove('show-popup')
  
  
})

signupCloseBtn.addEventListener('click',function(){
   signupPop.style.visibility = 'hidden';
})
  
  

signupBtn.addEventListener('click',function(){
     signupInputs.forEach(function(input){
       input.value = '';
     });
     if(signupContainer.classList.contains('hide-login')){
       signupContainer.classList.remove('hide-login')
     }else{
       signupContainer.classList.add('hide-login');
     }
     signupPop.style.visibility = 'hidden';
})



const details = document.querySelector('#branch');
const reserveLocations = document.querySelector('.show-location');
let locationInput =  document.querySelector('.location-button')
const reservationLocation = document.querySelectorAll('.reserve-location');
const reserveSubmitBtn = document.querySelector('.reserve-submit-btn');
const reserveInputs = document.querySelectorAll('.reserve-input');



details.addEventListener('click',function(){
  reservationLocation.forEach(function(reserveLocation){
    if( reserveLocation.style.display === 'none'){
    reserveLocation.style.display = 'block'
    }else{
        reserveLocation.style.display = 'none'
    }
    locationInput.value = ``;

})

})

reservationLocation.forEach(function(location){
    location.addEventListener('click',function(e){
        const message = e.currentTarget.innerHTML;
        locationInput.value= message;
        reservationLocation.forEach(function(reserveLocation){
            if( reserveLocation.style.display === 'none'){
            reserveLocation.style.display = 'block'
            }else{
                reserveLocation.style.display = 'none'
            }
        
        })
       
    })
    
})

reserveSubmitBtn.addEventListener('click',function(){
     reserveInputs.forEach(function(reserveInput){
         reserveInput.value = ``
     })
     reservationPage.style.display ='none'
})

const reservationPage = document.querySelector('.reservation-page');
const reserveCloseBtn = document.querySelector('.reserve-close-btn');

reservationBtn.addEventListener('click',function(){
  reservationPage.style.display = 'flex';
  popUp.classList.remove('show-popup');
  
})
reserveCloseBtn.addEventListener('click',function(){
    reservationPage.style.display = 'none'
})

