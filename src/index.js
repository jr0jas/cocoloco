import './styles.css';

/* This IIFE (Immediately Invoked Function Expression) is used to encapsulate the entire code block. 
    Encapsulation helps prevent polluting the global scope with variables and functions defined within 
    this block, ensuring they don't conflict with other scripts or libraries. Additionally, it provides 
    a way to execute the code immediately without waiting for external calls. */

/* Mobile Nav Functionality */
(() => {
  'use strict';

  // Debounce function to limit the rate at which a function can fire
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  // Use the DOMContentLoaded event to ensure the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', () => {

    // Select DOM elements
    const menuBtn = document.querySelector('#menu-btn'); 
    const closeMenuBtn = document.querySelector('#close-mobile-menu-btn');
    const menu = document.querySelector('#menu');


    // Check if necessary elements exist to avoid errors in the console
    if (!menuBtn || !closeMenuBtn || !menu) {
      console.error('One or more navigation elements are missing.');
      return; // Stop execution if essential elements are missing
    }

    // Function to toggle the navigation's visibility
    const toggleNavigation = (forceClose = false) => {
      if (forceClose) {
        // Directly hide the menu if forceClose is true
        menu.classList.add('hidden');
        menu.classList.remove('flex');
        menuBtn.classList.remove('open'); 
      } else {
        // Toggle the menu's visibility
        menu.classList.toggle('flex'); 
        menu.classList.toggle('hidden'); 
        menuBtn.classList.toggle('open'); 
      }
    };

    // Attach click event listeners
    menuBtn.addEventListener('click', () => toggleNavigation());
    closeMenuBtn.addEventListener('click', () => toggleNavigation(true)); // Explicitly force close

    // Apply debounce to the window resize event listener
    window.addEventListener('resize', debounce(() => {
      if (window.innerWidth >= 768) {
        toggleNavigation(true);
      }
    }, 250)); // Debounce delay 250ms
  });
})();

/* Accordion Functionality */
(function() {
  'use strict';

  /* Wait for the DOM to be fully loaded before executing JavaScript */
  document.addEventListener('DOMContentLoaded', function() {
    // Validate if the accordion container exists
    const accordion = document.querySelector('.accordion');
    if (!accordion) {
      console.error('Accordion container not found.');
      return;
    }

    // Validate if the accordion headers exist
    const headers = accordion.querySelectorAll('.accordion-header');
    if (headers.length === 0) {
      console.error('No accordion headers found.');
      return;
    }

    headers.forEach(header => {
      header.addEventListener('click', function(event) {
        const content = header.nextElementSibling;
        if (!content) {
          console.error('Content for accordion header not found.');
          return;
        }

        content.classList.toggle('hidden');

        const icon = header.querySelector('span');
        if (icon) {
          icon.classList.toggle('fa-chevron-down');
          icon.classList.toggle('fa-chevron-up');
        } else {
          console.error('Icon for accordion header not found.');
        }
      });
    });
  });
})();

