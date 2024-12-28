const themeToggler=document.querySelector(".theme-toggler"),lightIcon=themeToggler.querySelectorAll("span")[0],darkIcon=themeToggler.querySelectorAll("span")[1],sideMenu=(themeToggler.addEventListener("click",()=>{document.body.classList.toggle("dark-mode"),document.body.classList.toggle("light-mode"),lightIcon.classList.toggle("active"),darkIcon.classList.toggle("active"),document.body.classList.contains("dark-mode")?localStorage.setItem("theme","dark"):localStorage.setItem("theme","light")}),"dark"===localStorage.getItem("theme")?(document.body.classList.add("dark-mode"),lightIcon.classList.remove("active"),darkIcon.classList.add("active")):(document.body.classList.add("light-mode"),lightIcon.classList.add("active"),darkIcon.classList.remove("active")),document.querySelector("aside")),menuBtn=document.querySelector("#menu_bar"),closeBtn=document.querySelector("#close_btn"),logo=document.querySelector(".logo");menuBtn.addEventListener("click",()=>{sideMenu.style.display="block",logo.style.backgroundColor="white"}),closeBtn.addEventListener("click",()=>{sideMenu.style.display="none"});