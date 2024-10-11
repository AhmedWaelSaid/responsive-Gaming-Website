const Hamburger = document.getElementById('Hamburger');
const closebtn = document.getElementById('closebtn');
const navmenu= document.getElementById('nav-menu');
const navlink = document.querySelectorAll(".nav-link")
const tabsiocns = document.querySelectorAll(".tabs-icons ul li")
Hamburger.addEventListener('click', () => {
    navmenu.classList.remove('hidden');
});
closebtn.addEventListener('click', () => {
    navmenu.classList.add('hidden');
});
navlink.forEach(item => {
    item.addEventListener('click', () => {
        navmenu.classList.add('hidden');
    });
});
const AllGames = document.querySelectorAll(".All-Games")
const Accounts = document.querySelectorAll(".Accounts")
const Currencies = document.querySelectorAll(".Currencies")
const Items = document.querySelectorAll(".Items")

tabsiocns.forEach(tab => {
   tab.addEventListener('click',() => {
        tabsiocns.forEach(tab => {
            tab.classList.remove('active')
        });
        tab.classList.add('active')
      const tabvalue =  tab.getAttribute("data-tabs")
      console.log(tabvalue);

      AllGames.forEach(item => {
        item.style.display = "none"
    });
    if (tabvalue == 'Accounts') {
    
        Accounts.forEach(item => {
            item.style.display = "block"
        });
    } else if (tabvalue == 'Currencies')  {
        Currencies.forEach(item => {
            item.style.display = "block"
        });
    }
    else if (tabvalue == 'Items')  {
        Items.forEach(item => {
            item.style.display = "block"
        });
    }
    else {
        AllGames.forEach(item => {
            item.style.display = "block"
        });
    }
    })
    
});
const scrollup =() => {
    const scrollupbtn = document.getElementById('scroll-up');
    if (this.scrollY >= 250) {
        scrollupbtn.classList.remove('-bottom-1/2');
        scrollupbtn.classList.add('bottom-4'); 
    }
else {
    scrollupbtn.classList.add('-bottom-1/2');
    scrollupbtn.classList.remove('bottom-4');
}
}


window.addEventListener('scroll', scrollup)

const headerborder =() => {
    const header = document.getElementById('header');
    if (this.scrollY >= 50) {
        header.classList.add('border-b-2' ,'border-y-secondaryColor'); 
    }
else {
    
    header.classList.remove('border-b-2' ,'border-y-secondaryColor');
}
}


window.addEventListener('scroll', headerborder)


///////////////////////////////////////
// Dark Mode<<<<<<<<<<<<<<<<<<<<<<<<<
const html = document.querySelector('html');
const toggleicon = document.getElementById('toggleicon');

const DarkMode = () => {
    html.classList.add('dark');
    toggleicon.classList.replace('ri-moon-fill' , 'ri-sun-fill');
    localStorage.setItem('mode', 'dark');
}
const LightMode = () => {
    html.classList.remove('dark');
    toggleicon.classList.replace('ri-sun-fill' , 'ri-moon-fill');
    localStorage.setItem('mode', 'light');
}


if (localStorage.getItem('mode') == 'dark') {
    DarkMode()
}
else{
     LightMode()   
}


toggleicon.addEventListener('click', () => {
    if (localStorage.getItem('mode') == 'light') {
        DarkMode()
    } else {
        LightMode()
    }

})


const activeLink = () => {
    const sections = document.querySelectorAll('section'); 
    const navLinks = document.querySelectorAll('.nav-link'); 
    let current = "home"; 

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop -60) { 
            current = section.getAttribute('id');
        }
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            current = 'contact'; 
        }
    });

    navLinks.forEach((item) => {
        item.classList.remove('text-secondaryColor');  
        if (item.href.includes(current)) { 
            item.classList.add('text-secondaryColor'); 
            
        }
    });
};

window.addEventListener('scroll', activeLink);


// scroll__animation >>>>>>>>>>>>>>>>>>>>>>>>>

const sr = ScrollReveal(
    {
        origin: 'top' ,
        distance: '60px' ,
        duration: 1700 ,
        delay: 200 
    }
)
sr.reveal('.home_image');
sr.reveal('.home__content' , {origin:'bottom'});
sr.reveal('.category__animate' , {interval:200});
sr.reveal('.promo-animate1' , {origin:'left'});
sr.reveal('.promo-animate2' , {origin:'right'});
sr.reveal('.about-animate' , {origin:'bottom'});
sr.reveal('.games-animate' , {origin:'bottom'});
sr.reveal('.review-animate' , {origin:'right'});
sr.reveal('.about-content' , {origin:'top'});
sr.reveal('.games-list' , {origin:'right'});
sr.reveal('.footer');

