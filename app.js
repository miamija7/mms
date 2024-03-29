// LOADER
const loader = document.querySelector('#loading')
const load = () => { loader.style.visibility = 'visible'; document.body.style.visibility = 'hidden'}
const timeout = () => { loader.style.visibility = 'hidden'; document.body.style.visibility = 'visible'}
load();
window.onload = function() {timeout();};

// NAVBAR
document.addEventListener('DOMContentLoaded', () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger, .toggle'), 0);
    const $navbarButtons = document.querySelector('#contact-us');
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
            // Get the target from the "data-target" attribute
            el = document.querySelector('.navbar-burger');
            const target = document.querySelector('.navbar-burger').dataset.target;
            const $target = document.getElementById(target);
            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
        });
        $navbarButtons.addEventListener('click', () => {
            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);
            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
        })
    });
});

// NOTIFICATION
setTimeout(() => {
    (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
        const $notification = $delete.parentNode;
        $delete.addEventListener('click', () => {
            $notification.parentNode.removeChild($notification);
        });
    });
}, 1100);

// MODAL
document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
        $el.classList.add('is-active');
    }
    function closeModal($el) {
        $el.classList.remove('is-active');
    }
    function closeAllModals() {
        (document.querySelectorAll('.modal') || []).forEach(($modal) => {
            closeModal($modal);
        });
    }
    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
        const modal = $trigger.dataset.target;
        const $target = document.getElementById(modal);
        $trigger.addEventListener('click', () => {
            openModal($target);
        });
    });
    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
        const $target = $close.closest('.modal');
        $close.addEventListener('click', () => {
            closeModal($target);
        });
    });
    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
        const e = event || window.event;
        if (e.keyCode === 27) { // Escape key
            closeAllModals();
        }
    });
});

// CONTACT US FORM
let subjectField = document.querySelector("#subject");
let bodyField = document.querySelector(".textarea");

document.querySelector("#build-email").addEventListener('click', ()=> {
    let subject = subjectField.options[subjectField.selectedIndex].text;
    let body = bodyField.value.split(/\r?\n|\r|\n/g).join('%0D%0A');
    window.open(`mailto:mmiller@millermedicalstaffing.net?subject=${subject}&body=${body}`);
})

// ABOUT US
let aboutUsBtn = document.querySelector('.about-us-btn');
let aboutUsContent = document.querySelector('.about-us');
aboutUsBtn.addEventListener('click', () => {
    aboutUsContent.innerHTML = 'Michael Miller, founder of MMS, has served in Long Term Care and Assisted Living communities for over a decade. As CEO of a well-known senior living community, he faced the need for a quality medical staffing partner. <br><br>Noticing deficiencies in the quality of service that agencies provided, along with low compensation to their staff, he decided make a difference. He set course to build a medical staffing agency that does not just provide another \"warm body\" in the building, but rather an exceptional helping hand in time of need.<br><br>Miller Medical Staffing is raising the bar. We provide nothing less than exemplary services to our communities, and our staff receives great pay and exciting new opportunities!<br><br>"Nursing agencies are gouging Long Term Care and Assisted Living communities just to paying their employees less than half of what they charge. MMS is different. We pay well and do not gouge the communities that are taking care of our elders. We are committed to meeting all of your staffing needs, and go above and beyond to ensure you receive the best services available in the state of Kansas." <br><br>~ Michael Miller, Owner</span>'
    aboutUsBtn.style.display = 'none';
})

// CAREERS
let careers = document.querySelectorAll('.careers-btn, .apply-link');
careers.forEach(link => link.addEventListener('click', ()=>{
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdh5rgBn5a-d9ajzPp3habdmJ3njUh0QYk_1yhT7oR2IWx7sg/viewform', '_blank').focus();
}));
