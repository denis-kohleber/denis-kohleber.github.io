"use strict";
const SideNavbar = {
    addFollowByScroll() {
        document.addEventListener('DOMContentLoaded', function () { 
            const navbarLinks = document.querySelectorAll('.navLinkMain'); 
            const sections = document.querySelectorAll('.section'); 


          
            window.addEventListener('scroll', function () { 
                const currentPos = window.scrollY; 
          
                sections.forEach(function (section) { 
                    const sectionTop = section.offsetTop - 300; 
                    const sectionHeight = section.offsetHeight; 
                    const sectionId = section.id; 
                    
                    if (currentPos >= sectionTop && currentPos < sectionTop + sectionHeight) { 
                        navbarLinks.forEach(function (navbarLink) { 
                            navbarLink.classList.remove('active'); 
                        }); 

                        // Activate Dropdown
                        SideNavbar.activateDropdown(sectionId);

                        document.querySelector('.' + sectionId + 'LinkMain').classList.add('active'); 
                    } 
                }); 
            }); 
        });
    },
    activateDropdown(sectionId) {
        const dropdownMenu = document.getElementById('dropdownMenu');
        const projectsSection = document.getElementById('projectsSectionNav');

        if(sectionId === 'chessArticle' || 
        sectionId === 'weatherAppArticle' ||
        sectionId === 'projectsSection') {
            dropdownMenu.classList.add('active');
            dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + "px";
            projectsSection.classList.add('active'); 
        } else {
            dropdownMenu.classList.remove('active');
            dropdownMenu.style.maxHeight = null;
        };
    },
};

const MainNavbar = {
    linkContainer: document.getElementById('linkContainer'),
    menuBtn: document.getElementById('menuBtn'),
    body: document.getElementById('body'),
    addNavbarEvent() {
        MainNavbar.removeClasses();
    },
    addClasses() {
        MainNavbar.linkContainer.classList.add('showNav');
        MainNavbar.body.classList.add('showNav');
        MainNavbar.switchEvents();
    },
    removeClasses() {
        MainNavbar.linkContainer.classList.remove('showNav');
        MainNavbar.body.classList.remove('showNav');
        MainNavbar.switchEventsReserve();
    },
    switchEvents() {
        MainNavbar.menuBtn.removeEventListener('click', MainNavbar.addClasses);
        MainNavbar.linkContainer.addEventListener('click', MainNavbar.removeClasses); 
        MainNavbar.menuBtn.addEventListener('click', MainNavbar.removeClasses);
        MainNavbar.changeImgCloseIcon();
    },
    switchEventsReserve() {
        MainNavbar.menuBtn.removeEventListener('click', MainNavbar.removeClasses);
        MainNavbar.linkContainer.removeEventListener('click', MainNavbar.removeClasses);
        MainNavbar.menuBtn.addEventListener('click', MainNavbar.addClasses);
        MainNavbar.changeImgMenuIcon();
    },
    changeImgCloseIcon() {
        MainNavbar.menuBtn.style.backgroundImage = "url('close.svg')";
    },
    changeImgMenuIcon() {
        MainNavbar.menuBtn.style.backgroundImage = "url('menu.svg')";
    },
};

const ServiceBox = {
    zoomedArticle: document.getElementById('zoomedArticle'),
    service: document.querySelectorAll('.service, .zoomedArticle'),
    addServiceEvent() {
        ServiceBox.service.forEach((service) => {
            service.addEventListener('click', ServiceBox.showArticle)
        });
    },
    showArticle(event) {
        const service = event.currentTarget;

        if(service.classList.contains('show')) {
            return ServiceBox.zoomedArticle.classList.remove('show');
        }

        if(!service.classList.contains('show')) {
            ServiceBox.zoomedArticle.classList.add('show');
            ServiceBox.updateZoomedArticle(service);
        } 
    },
    updateZoomedArticle(service) {
        ServiceBox.zoomedArticle.children[0].src = service.children[0].src;
        ServiceBox.zoomedArticle.children[1].textContent = service.children[1].textContent;
        ServiceBox.zoomedArticle.children[2].textContent = service.children[2].textContent;
    },
};

const Flower = {
    flower: document.getElementById('flower'),
    startAnimation() {
        let isScrolling;
        
        document.addEventListener('scroll', () => {
            Flower.flower.style.animationPlayState = 'running';
          
            // Remove timeout after new scroll
            window.clearTimeout(isScrolling);

            // Set timeout to run after scrolling ends
            isScrolling = setTimeout(() => {
              // Pause the animation when scrolling stops 
            Flower.flower.style.animationPlayState = 'paused';
            }, 100);
        });
    },
};

export { SideNavbar, MainNavbar, ServiceBox, Flower };