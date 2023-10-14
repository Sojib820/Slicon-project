
$(function() {
    $(window).on('scroll',function () {
        var scroll= $(window).scrollTop();
        if (scroll >= 50) {
            $('.hamburger').addClass('whenscrolled');
            $('nav').addClass('stickyadd');
            $('nav').removeClass('stick');
            
        }else {
            $('.hamburger').removeClass('whenscrolled');
            $('nav').removeClass('stickyadd');
            $('nav').addClass('stick');
            
        }
    });
    $('.navbar-nav a[href^="#"]').on('click', function(event){
        event.preventDefault();
        $('html,body').animate({

            scrollTop:$(this.hash).offset().top
        },1000)
    });

    // particlesJS 
    particlesJS.load ("particles-js","js/particles.json");
    particlesJS.load ("particle-js","js/particles.json");
    //Animate onscroll

    AOS.init();
})











// @import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,900&display=swap');
// :root {
   

//     box-sizing: border-box;
//     --blue-color:#5c84ec;
//     --pink-color:#f03c6d;
//     --paragraph-color:#707070;


// }

// ::-webkit-scrollbar{
//     width: 5px;
// }
// ::-webkit-scrollbar-thumb {
//     background: linear-gradient(var(--blue-color),var(--pink-color));
//     border-radius: 20px;
// }
// *,::before,::after {
//     box-sizing: inherit;
// }
// body {
//     font-family: 'Mulish', sans-serif;
//     background: #f9fbff;
  
// }
// html {
//     scroll-behavior: smooth;
// }
// h1 {
//     font-size: 2.8rem;
//     font-weight: 900;
//     letter-spacing: 3px;
    
// }
// h2 {
//     font-size: 1.75rem;
//     font-weight: 700;
    
// }
// p {
//     font-weight: 400;
//     font-size: 1rem;
//     color:var(--paragraph-color)
// }
// a {
//     font-size: 1rem;
//     color:black;
// }
// a:hover {
//     color:black;
// }
// .mt-100 {
//     margin-top: 100px;
// }
// .mt-70 {
//     margin-top: 70px;
// }

// /* navbar-section */
// .navbar-nav .nav-item {
//     margin: 0 10px;
// }
// nav.stickyadd {
//     background-color:tomato;
//     transition: all 0.5s;
// }
// nav.stickyadd .active {
//     border-bottom: 2.5px solid white;
// }
// nav.stickyadd .nav-item .nav-link {
//     color:white;

// }
// nav.stickyadd .navbar-brand {
//     color:white;
// }
// nav.stick {
//     transition: all 0.5s;
// }
// .hamburger {
//     color:#fff;
//     font-size: 1.5rem;
// }
// .hamburger.whenscrolled{
//     color: #000;
// }
// .hero {
//     height: 100vh;
//     width: 100%;
//     background-image:linear-gradient(rgba(92,132,236,0.8),rgba(92,132,236,0.8)) ,url(img/slide-2.jpg);
//     background-repeat: no-repeat;
//     background-size: cover;
//     background-position: center;

// }
// .hero-content {

//     color:#ffffff;
// }

// #particles-js {
//     height: 100vh;
//     width: 100%;
//     background-color: rgba(255,255,255,0.1);
//     position: absolute;
// }

// /* about-section */
// .about {
//     margin-top: -200px;
// }
// .about-content {
//     background: linear-gradient(135deg, var(--blue-color),var(--pink-color));
// }

// .wrapp {
//     margin-top: 40px;
//     padding:30px;

// }
// .wrapp h2,
// .wrapp p {
//     color:white;
// }
// .wrapp h2 {
//     margin-bottom: 20px;
// }

// /* service-section */
// .service-show {
//     text-align: center;
// }
// .service .card {
//     padding:25px;
//     margin-bottom: 30px;
// }
// .service i{
//     font-size: 50px;
//     background: linear-gradient(var(--pink-color),black);
//    -webkit-background-clip: text;
//    -webkit-text-fill-color: transparent;
// }

// /* 
// team section */

// .team {
//     z-index: 3;
//     padding:100px
// }
// .team img {
//     z-index: 2;
// }
// .team .bg-white {
// background: white;
// }
// .team-content {
//     padding:15px;
// }
// .team .box {
//     position: relative;
//     z-index: 1;
// }

// .team .box::before {
//     content:"";
//     position: absolute;
//     height: 100%;
//     width: 100%;
//     top:-20px;
//     left:-20px;

//     z-index: -1;
//     background: linear-gradient(135deg,var(--blue-color),var(--pink-color));
// }
// /* 

// project-section */

// .project i {
//     font-size: 50px;
//     background: linear-gradient(var(--pink-color),black);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     margin:20px 0 0px 0px;
   
// }
// .project .col-lg-3 {
//     padding:0;
// }
// .project .card {
//     margin-right: 10px;
// }

// /* contact-section */

// .contact .bg-contact{
//     height: 40vh;
//     width: 100%;
//     background: linear-gradient(rgba(74,118,237,0.8),rgba(74,118,237,0.8));
//     background-position: 200 200;
//     background-repeat: no-repeat
//     ;

// }
// .contact-content {
//     margin-top: -20vh;
// }
// .contact  form {
//     background-color: #fff;
//     padding:100px;
// }

// .contact .contact-addr  {
    
//     background:linear-gradient(135deg ,var(--blue-color),var(--pink-color));
//     padding:90px;
//     color:#fff;
// }
// .contact .contact-addr p {
//     color:#fff;
//     margin:20px 0;
   
// }
// .contact .social-icons {
//     display: table;
// }

// .contact  .social-icons i {
//     display: table-cell;
//     font-size: 20px;
//     justify-content: center;
//     display: flex;
//     transform: translateY(50%);

// }
// .contact .social-icons a {
//     text-decoration: none;
//     width: 40px;
//     height: 40px;
//     border-radius: 50%;
   
//     display: inline-block;
//     border:2px solid teal;
//     transition: 0.5s;
    
// }  
// .contact .social-icons a:hover  {
//     background-color: teal;
   

// }
// .contact .social-icons a .fa-facebook {
//     color: white;
// }
// .contact .social-icons a .fa-twitter {
//     color: #00acee;
// }

// .contact .social-icons a .fa-instagram {
//  color: #feda75;
// }
// .contact .social-icons a:hover {
//     color:white;
// }
// /* footer  */
// footer {
//     height: 80px;
//     line-height: 80px;
//     text-align: center;
//     background-color: #0c003e;
// }
// footer  p {
//     color:White;
// }

// @media (max-width:575.98px) {
//     h1 {
//         font-size: 1.5rem;
//         font-weight: 900;
//     }
//     h2 {
//         font-size: 1.2rem;
//         font-weight: 700;
//     }
//     .about {
//         margin-top: 0;
//     }
//     .service-content {
//         margin-bottom: 50px;
//     }.team .box {
       
//         margin-bottom: 30px;
//       }.project .card {
//         margin-right: 10px;
//         margin-bottom: 30px;
//       }
// }

// @media (max-width :414px){
//     .contact form {
       
//         padding: 45px;
//       }
//       .contact .contact-addr {
       
//         padding: 45px;
        
//       }.contact .social-icons i {
      
//         width: 45px;
//       }.team {
//         z-index: 3;
//         padding: 30px;
//       }
//       .contact .social-icons i {
//         display: table-cell;
//         font-size: 20px;
//         justify-content: center;
      
//         transform: translateY(50%);
//         text-align: center;
//       }  .project .card {
//         margin-right: 0px;
//         margin-bottom: 30px;
//       }
   
// }
