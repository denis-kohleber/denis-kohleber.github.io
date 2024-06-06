"use strict";
const Navbar = {
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
                        Navbar.activateDropdown(sectionId);

                        document.querySelector('.' + sectionId + 'LinkMain').classList.add('active'); 
                    } 
                }); 
            }); 
        });
    },
    activateDropdown(sectionId) {
        const dropdownMenu = document.getElementById('dropdownMenu');

        if(sectionId === 'chessArticle' || 
        sectionId === 'weatherAppArticle' ||
        sectionId === 'projectsSection') {
            dropdownMenu.classList.add('active');
            dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + "px";
        } else {
            dropdownMenu.classList.remove('active');
            dropdownMenu.style.maxHeight = null;
        };
    },
};

export default Navbar;