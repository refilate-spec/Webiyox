<style>
/* Container ko flex banayein */
.tabs-container { 
    width: 100%; 
    max-width: 100%; /* Parent element se bahar na jaye */
    box-sizing: border-box;
}

/* Tab list ko flex-grow ke saath set karein */
.tab-list {  padding: 0px 2px;
    display: flex; 
    width: 100%; 
    background: linear-gradient(135deg, rgba(0, 40, 80, 0.9) 0%, rgba(0, 100, 150, 0.8) 100%);
    backdrop-filter: blur(12px);
    border-bottom: 2px solid #ddd;
}

/* Har tab barabar jagah legi */
.tab-link { 
    flex: 1; /* Ye sabhi tabs ko equal width dega */
    padding: 1px 4px; 
    cursor: pointer;  border:0.8px solid;
    border: 1px solid;  
    background: linear-gradient(
135deg,
#081018 0%,
#102235 25%,
#17344d 50%,
#1b4f6d 75%,
#2b7ea1 100%
);
    font-size: 15px;
    text-align: center;
    font-weight: 900;
    transition: 0.3s;
text-shadow:
0 1px 2px rgba(0,0,0,.20);
}

.tab-link.active{
    background: linear-gradient(
135deg,
#dce9f8 0%,
#cddff3 35%,
#bdd4ee 70%,
#aac6e7 100%
);

    color:#111827;

    border: 2px solid rgba(59,130,246,.75);
    border-radius:18px;

    box-shadow:
        0 1px 0 rgba(255,255,255,.9) inset,
        0 -1px 0 rgba(0,0,0,.05) inset,
        0 4px 10px rgba(59,130,246,.18),
        0 10px 24px rgba(59,130,246,.22),
        0 20px 40px rgba(0,0,0,.18);

    transform:translateY(-2px);

    transition:
        all .28s cubic-bezier(.4,0,.2,1);
}
.tab-link.active:hover{
    transform:translateY(-3px) scale(1.02);

    box-shadow:
        0 1px 0 rgba(255,255,255,.95) inset,
        0 8px 18px rgba(59,130,246,.22),
        0 18px 36px rgba(59,130,246,.28),
        0 30px 60px rgba(0,0,0,.22);
}
/* Content area */
.tab-content { 
    display: none; 
    padding: 0px; 
    width: 100%;
    box-sizing: border-box; /* Padding ko width ke andar rakhega */
}


</style>
<script>
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  
  // Hide all content
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
  // Remove active class
  tablinks = document.getElementsByClassName("tab-link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  
  // Show current tab and add active class
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

</script>

<!-- game card css -->

<style>
.qvtrax{
z-index: 1;
width:100%;
display:flex ;
align-items:center;

min-height:70px;

padding:8px 10px;

gap:10px;

box-sizing:border-box;


background:linear-gradient(145deg,#ffffff,#e7e7e7);

border-radius:14px;

border:1px solid #ddd;

z
box-shadow:

inset 1px 1px 5px #fff,
3px 5px 12px rgba(0,0,0,.18);


overflow:hidden;

}



/* Number */

.qvtrax{
position:relative;

overflow: hidden;
}


.numbex{

position:absolute;

top:3px;

left:3px;


width:22px;

height:32px;

display:flex;

align-items:center;

justify-content:center;


font-size:15px;

font-weight:bold;

color: #fff;
-webkit-backdrop-filter: blur(15px);
background:rgba(120,170,210,0.18);

border-radius:3px 25px;
backdrop-filter:blur(15px);

    


z-index: 2;

}



/* Logo */

.logix{

flex-shrink:0;

}


.cirvox{

width:70px;

height:70px;

border-radius:25%;
flex-shrink:0;


overflow:hidden;
box-shadow:

0 3px 8px rgba(0,0,0,.25);

}


.cirvox img{

width:100%;

height:100%;
display:block;
object-fit:cover;

}



/* Text Block */

.txtbox{

flex:1;

min-width:0;

display:block;

overflow:hidden;

}


.txtbox div{

display:flex;

align-items:center;

gap:4px;


font-size:15px;

font-weight:900;

line-height:18px;


white-space:nowrap;

overflow:hidden;

text-overflow:ellipsis;

}



.txtbox svg{

width:13px;

height:13px;

fill:currentColor;

flex-shrink:0;

}



/* Text Colors */

.name{

color:#000; 
font-size:16px;
}


.bonus{

color:green;

}


.withdraw{

color:#ff0000;

}


.rating{

color:#d4af37;

}

.down-2 {
  color: #050505;
  }

/* Button */

.btnzor{

flex-shrink:0;

}


.btnzor a{

text-decoration:none;

}


.btnzor button{

display:flex;

align-items:center;

gap:4px;


padding:8px 14px;


border:0;

border-radius:8px;


background:linear-gradient(135deg,#006400,#00a651);

color:white;


font-size:13px;

font-weight:bold;


box-shadow:

0 3px 7px rgba(0,0,0,.3);

}


.btnzor svg{

width:14px;

height:14px;

fill:white;

}
.btnzor :hover { background:linear-gradient(135deg,#0066ff,#7a00ff,#ff4da6); font-size: 16px;}

.dth-1 {  font-size:19px; !important}


/* Mobile */

@media(max-width:600px){


.qvtrax{

min-height:60px;

padding:7px;

gap:7px;

}



.cirvox{

width:65px;

height:65px;

}

.txtbox div{

font-size:11px;

line-height:15px;

}



.txtbox svg{

width:11px;

height:11px;

}



.btnzor button{

padding:5px 7px;

font-size:15px;

}

} </style>

<style>
/* =========================================================
   QVTRAX — CSS SVG ICON LOADER
   Icons inherit color from their parent element
========================================================= */

.qvtrax .name::before,
.qvtrax .bonus::before,
.qvtrax .withdraw::before,
.qvtrax .rating::before,
.qvtrax .down-2::before,
.qvtrax .btnzor button::before{
    content:"";
    display:inline-block;
    width:16px;
    height:16px;
    flex:0 0 16px;
    margin-right:6px;

    background-color:currentColor;

    -webkit-mask-position:center;
    -webkit-mask-repeat:no-repeat;
    -webkit-mask-size:contain;

    mask-position:center;
    mask-repeat:no-repeat;
    mask-size:contain;
}


/* 👑 NAME */
.qvtrax .name::before{
    -webkit-mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 640'%3E%3Cpath d='M372.2 116C372.2 136.9 359.8 155 342 163.2L448 256L552.4 235.1C547.1 227.4 544 218 544 208C544 181.5 565.5 160 592 160C618.5 160 640 181.5 640 208C640 234 619.4 255.1 593.6 256L481 506.3C470.7 529.3 447.8 544 422.6 544L217.4 544C192.2 544 169.4 529.2 159 506.3L46.4 256C20.6 255.1 0 234 0 208C0 181.5 21.5 160 48 160C74.5 160 96 181.5 96 208C96 218.1 92.9 227.4 87.6 235.1L192 256L298.1 163.1C280.4 154.8 268.1 136.8 268.1 116C268.1 87.3 291.4 64 320.1 64C348.8 64 372.1 87.3 372.1 116z'/%3E%3C/svg%3E");

    mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 640'%3E%3Cpath d='M372.2 116C372.2 136.9 359.8 155 342 163.2L448 256L552.4 235.1C547.1 227.4 544 218 544 208C544 181.5 565.5 160 592 160C618.5 160 640 181.5 640 208C640 234 619.4 255.1 593.6 256L481 506.3C470.7 529.3 447.8 544 422.6 544L217.4 544C192.2 544 169.4 529.2 159 506.3L46.4 256C20.6 255.1 0 234 0 208C0 181.5 21.5 160 48 160C74.5 160 96 181.5 96 208C96 218.1 92.9 227.4 87.6 235.1L192 256L298.1 163.1C280.4 154.8 268.1 136.8 268.1 116C268.1 87.3 291.4 64 320.1 64C348.8 64 372.1 87.3 372.1 116z'/%3E%3C/svg%3E");
}


/* 🎁 BONUS */
.qvtrax .bonus::before{
    -webkit-mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 640'%3E%3Cpath d='M344.1 108.5L320 149.5L295.9 108.5C279.7 80.9 250.1 64 218.2 64L216 64C167.4 64 128 103.4 128 152C128 166.4 131.5 180 137.6 192L96 192C78.3 192 64 206.3 64 224L64 256C64 273.7 78.3 288 96 288L544 288C561.7 288 576 273.7 576 256L576 224C576 206.3 561.7 192 544 192L502.4 192C508.5 180 512 166.4 512 152C512 103.4 472.6 64 424 64L421.8 64C389.9 64 360.3 80.9 344.1 108.4zM544 336L344 336L344 544L480 544C515.3 544 544 515.3 544 480L544 336zM296 336L96 336L96 480C96 515.3 124.7 544 160 544L296 544L296 336z'/%3E%3C/svg%3E");

    mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 640'%3E%3Cpath d='M344.1 108.5L320 149.5L295.9 108.5C279.7 80.9 250.1 64 218.2 64L216 64C167.4 64 128 103.4 128 152C128 166.4 131.5 180 137.6 192L96 192C78.3 192 64 206.3 64 224L64 256C64 273.7 78.3 288 96 288L544 288C561.7 288 576 273.7 576 256L576 224C576 206.3 561.7 192 544 192L502.4 192C508.5 180 512 166.4 512 152C512 103.4 472.6 64 424 64L421.8 64C389.9 64 360.3 80.9 344.1 108.4zM544 336L344 336L344 544L480 544C515.3 544 544 515.3 544 480L544 336zM296 336L96 336L96 480C96 515.3 124.7 544 160 544L296 544L296 336z'/%3E%3C/svg%3E");
}


/* 🏦 WITHDRAW */
.qvtrax .withdraw::before{
    -webkit-mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M271.9 20.2c-9.8-5.6-21.9-5.6-31.8 0l-224 128c-12.6 7.2-18.8 22-15.1 36S17.5 208 32 208l32 0 0 208-51.2 38.4C4.7 460.4 0 469.9 0 480 0 497.7 14.3 512 32 512l448 0c17.7 0 32-14.3 32-32 0-10.1-4.7-19.6-12.8-25.6L416 208l32 0c14.5 0 27.2-9.8 30.9-23.8s-2.5-28.8-15.1-36l-224-128zM400 208l0 208-64 0 0-208 64 0zm-112 0l0 208-64 0 0-208 64 0zm-112 0l0 208-64 0 0-208 64 0zM256 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64z'/%3E%3C/svg%3E");

    mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M271.9 20.2c-9.8-5.6-21.9-5.6-31.8 0l-224 128c-12.6 7.2-18.8 22-15.1 36S17.5 208 32 208l32 0 0 208-51.2 38.4C4.7 460.4 0 469.9 0 480 0 497.7 14.3 512 32 512l448 0c17.7 0 32-14.3 32-32 0-10.1-4.7-19.6-12.8-25.6L416 208l32 0c14.5 0 27.2-9.8 30.9-23.8s-2.5-28.8-15.1-36l-224-128zM400 208l0 208-64 0 0-208 64 0zm-112 0l0 208-64 0 0-208 64 0zm-112 0l0 208-64 0 0-208 64 0zM256 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64z'/%3E%3C/svg%3E");
}


/* ⭐ RATING */
.qvtrax .rating::before{
    -webkit-mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 17.3l6.2 3.7-1.6-7 5.4-4.7-7.1-.6L12 2 9.1 8.7 2 9.3l5.4 4.7-1.6 7z'/%3E%3C/svg%3E");

    mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 17.3l6.2 3.7-1.6-7 5.4-4.7-7.1-.6L12 2 9.1 8.7 2 9.3l5.4 4.7-1.6 7z'/%3E%3C/svg%3E");
}


/* ⬇ DOWNLOAD */
.qvtrax .down-2::before,
.qvtrax .btnzor button::before{
    -webkit-mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 640'%3E%3Cpath d='M352 96C352 78.3 337.7 64 320 64C302.3 64 288 78.3 288 96L288 306.7L246.6 265.3C234.1 252.8 213.8 252.8 201.3 265.3C188.8 277.8 188.8 298.1 201.3 310.6L297.3 406.6C309.8 419.1 330.1 419.1 342.6 406.6L438.6 310.6C451.1 298.1 451.1 277.8 438.6 265.3C426.1 252.8 405.8 252.8 393.3 265.3L352 306.7L352 96zM160 384C124.7 384 96 412.7 96 448L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 448C544 412.7 515.3 384 480 384L433.1 384L376.5 440.6C345.3 471.8 294.6 471.8 263.4 440.6L206.9 384L160 384zM464 440C477.3 440 488 450.7 488 464C488 477.3 477.3 488 464 488C450.7 488 440 477.3 440 464C440 450.7 450.7 440 464 440z'/%3E%3C/svg%3E");

    mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 640'%3E%3Cpath d='M352 96C352 78.3 337.7 64 320 64C302.3 64 288 78.3 288 96L288 306.7L246.6 265.3C234.1 252.8 213.8 252.8 201.3 265.3C188.8 277.8 188.8 298.1 201.3 310.6L297.3 406.6C309.8 419.1 330.1 419.1 342.6 406.6L438.6 310.6C451.1 298.1 451.1 277.8 438.6 265.3C426.1 252.8 405.8 252.8 393.3 265.3L352 306.7L352 96zM160 384C124.7 384 96 412.7 96 448L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 448C544 412.7 515.3 384 480 384L433.1 384L376.5 440.6C345.3 471.8 294.6 471.8 263.4 440.6L206.9 384L160 384zM464 440C477.3 440 488 450.7 488 464C488 477.3 477.3 488 464 488C450.7 488 440 477.3 440 464C440 450.7 450.7 440 464 440z'/%3E%3C/svg%3E");
}
</style>
<style>

/* =========================================================
   QVTRAX — SMOOTH ORIGINAL ICON ANIMATION
========================================================= */

.qvtrax .name::before,
.qvtrax .bonus::before,
.qvtrax .withdraw::before,
.qvtrax .rating::before,
.qvtrax .down-2::before,
.qvtrax .btnzor button::before{
    animation:qvIconWave 3.2s linear infinite;
    transform-origin:center;
    will-change:transform,filter;
}

@keyframes qvIconWave{

    0%{
        transform:scale(1) translateY(0);
        filter:brightness(1);
    }

    25%{
        transform:scale(1.08) translateY(-1px);
        filter:brightness(1.18);
    }

    50%{
        transform:scale(.96) translateY(1px);
        filter:brightness(1);
    }

    75%{
        transform:scale(1.05) translateY(-1px);
        filter:brightness(1.15);
    }

    100%{
        transform:scale(1) translateY(0);
        filter:brightness(1);
    }

}

</style>
<style>
.qvtrax .cirvox{
    position:relative;
    overflow:hidden;
}

.qvtrax .cirvox .nx-fallback-img{
    width:100% !important;
    height:100% !important;
    display:block !important;
    object-fit:cover;
}
</style>

<script>
(function(){

    const FALLBACK_IMAGE =
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjWUfJ4Qd4ssJj4B7-XN2mB083ZI9zn4QExxF52Lv-tVxHw5bq-frrDYQkXlyVvAbkII4CcnvQGYKgxduyuIqnQc0am9vMf5lK5J6SIksy-DPMcBepIQ27ncotscxF5v0zNJnqV_PKGHQYUAvQ_D6zsqzUgLdVhPf5GDFXrqjkhbs4xaep3Z8EEqZIIr9nq/s1600/logo%20%286%29.png";


    function checkCard(card){

        const box = card.querySelector(".cirvox");

        if(!box) return;

        const img = box.querySelector("img");

        /* Image already exists */
        if(img){

            const src = (img.getAttribute("src") || "").trim();

            /* Empty / # image */
            if(
                src === "" ||
                src === "#" ||
                src === "./#" ||
                src === "about:blank"
            ){
                img.remove();
                showFallback(box);
                return;
            }

            /* Real image but failed */
            img.onerror = function(){

                img.remove();
                showFallback(box);

            };

            return;
        }

        /* Image tag hi nahi hai */
        showFallback(box);
    }


    function showFallback(box){

        if(box.querySelector(".nx-fallback-img")) return;

        const fallback = document.createElement("img");

        fallback.className = "nx-fallback-img";
        fallback.src = FALLBACK_IMAGE;
        fallback.alt = "";

        box.appendChild(fallback);
    }


    function scan(){

        document.querySelectorAll(".qvtrax").forEach(checkCard);

    }


    /* First check */
    scan();


    /* Blogger / dynamic content ke liye */
    const observer = new MutationObserver(function(){

        scan();

    });

    observer.observe(document.body, {
        childList:true,
        subtree:true
    });


})();
</script>
<!-- banner code -->
<style>
.banner-top {
  width: 100%;
  padding: 3px 0 1px 0;
  display: block;
  border-bottom: 4px solid #0da805;
  border-top: 1px solid #0da805;
  border-radius: 0px;
  box-shadow: rgba(45, 35, 66, 0.4) 0px 1px 2px, rgba(45, 35, 66, 0.3) 0px 1px 3px -1px, rgba(58, 65, 111, 0.5) 0px -1px 0px inset;
}

.contener {
  padding: 0;
  width: 100%;
  background: none;
  display: flex;
  margin: 0px auto;
  border: 0px solid;
}

.top0-box-apk {
  background-color: #fff;
  color: #333333;
  font-family: "Microsoft Yahei", Arial, Tahoma, Helvetica, SimSun, "Hiragino Sans GB", sans-serif;
  font-size: 11.52px;
  margin: 0px;
  padding: 5px 2px;
  text-size-adjust: none;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
}

.apk-card {
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  flex: 1;
  min-width: 0;
  text-align: center;
  display: block;
  background: #fff;
  padding: 0 2px;
}

.apk-card-inner {
  position: relative;
  width: 100%;
  max-width: 115px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 1.5rem;
  box-sizing: border-box;
}

/* Badge Icon Common CSS */
.apk-badge-icon {
  position: absolute;
  top: -20px;
  left: 0px;
  right: 0px;
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  margin-left: auto;
  margin-right: auto;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #fff;
}

/* Badge Images for Each Card */
.badge-1 {
  background-image: url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh3ubI5vnk6CvIR4TJwasfrtCbakrvTEghbK50nvJRpZgyZragbMLyBxmOw4fhvzkA3plGEDxn0w8zJkNtHBLV3qvvfTBbq5VSKgIKqQSiwUr1PO8yFrNyjOczN9KwSPK9la4eXeKcDB3vxdCbVD8BolrqO8A_SNUOzPwLCTWAtI9b_ovFAoK3hvxH-zZED/s1600/20230731_153804%20%281%29.webp');
}

.badge-2 {
  background-image: url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiHIba3HO9pA2sqcrelv7CQyXwNGDM9QTO_gLFZlqiwxnigGVKaK5TE3pk2Ljpi9YLsP3biF5ESejU0MoXnXRBoZKhJCDloNsFqiFgh2vIFiZ5avpmVS5pHNNzLzheLsAg9qZRbN0Zjvg1ZGj0wCrEwYzgJRuHANeIaHACJATtfy-NO_dS_JzYPRmt2xW6x/s1600/20230731_153953.webp');
}

.badge-3 {
  background-image: url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg7t7T-VP49D7ckIpuuXUhsSy92m8LNYNS2KGxXUIjuJF1zg7-yeXLv5oXSenEPkH44nzKEO3673cnX3imQb3TIUV0yWVvnAddkuDO__m6eEWmLaag1uO-lKYV9Xsq5F9AIlkzIWvTqlhw7gtLZRKlIXIKKKgSdPArYzZPzmEUCgX4jX1fUXCLL00ZAzreu/s1600/20230731_154129.webp');
}

/* Rating Image CSS */
.apk-rating-img {
  display: block;
  height: 17.0625px;
  width: 80px;
  border-radius: 17px;
  margin-bottom: 0.5rem;
  margin-left: auto;
  margin-right: auto;
  background-image: url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTWEePDvOL3M143opVZULEQ8T1PZkfsceIB0F1d-wiFRtW73lRFM_qOXUUwoQ9V5JOYTzFtZhl6xn4R2A1dJoISH2S3hZrzwbY6H7FWaeCXtC74dOFfVkUpSGsJ07vA-oCT6CsXdBnt-ZAG2E6etsnvLTrqVtLKvNLxvR2j4hCcpRLFLMsTdgzS9oZailr/s1600/rummybonusapp_star_rating%20%281%29.gif');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.apk-main-img {
  width: 5rem;
  height: 5rem;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.apk-secure-text {
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(156, 163, 175);
  font-size: 10px;
  font-weight: 700;
  gap: 2px;
  margin-bottom: 0.5rem;
}

.apk-download-btn {
  border: 1px solid #00ffcc;
  background: #036605;
  padding: 3px 8px;
  color: #fff;
  border-radius: 8px;
  font-size: 15px;
  display: inline-block;
  text-decoration: none;
}
</style>




<!-- JavaScript Logic post script 2.0 -->
<script>

(function() {
  // Aapka Data Array (Ab direct link use hoga)
  

  // HTML Generator Function (data-link removed)
  function buildHTML(data) {
    if (!data || data.length === 0) return '<p style="padding:15px; text-align:center;">No Data Found</p>';
    let str = '';
    data.forEach((item, idx) => {
      str += `
      <div class="qvtrax">
        <div class="numbex">${idx + 1}</div>
        <div class="logix">
          <div class="cirvox">
            <img src="${item.image}" alt="${item.name}" />
          </div>
        </div>
        <div class="txtbox">
          <div class="name dth-1"><b>${item.name}</b></div>
          <div class="bonus">${item.bonus}</div>
          <div class="withdraw">${item.withdraw}</div>
          <div class="rating">${item.rating}</div>
          <div class="down-2">${item.downloads}</div>
        </div>
        <div class="btnzor">
          <a href="${item.link}" target="_blank" rel="noopener noreferrer">
            <button>Download</button>
          </a>
        </div>
      </div>`;
    });
    return str;
  }

  // Render Data into Tabs with Filtering
  function initTabs() {
    const t1 = document.getElementById('tab1');
    const t2 = document.getElementById('tab2');
    const t3 = document.getElementById('tab3');

    if (t1) t1.innerHTML = buildHTML(allCardsData);
    if (t2) t2.innerHTML = buildHTML(allCardsData.filter(i => i.category === 'new'));
    if (t3) t3.innerHTML = buildHTML(allCardsData.filter(i => i.category === 'apps'));
  }

  // Execute on load
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initTabs();
  } else {
    window.addEventListener('DOMContentLoaded', initTabs);
  }
})();
// Global Tab Switcher Function
function openTab(evt, tabId) {
  let contents = document.getElementsByClassName("tab-content");
  for (let c of contents) {
    c.style.display = "none";
  }
  let links = document.getElementsByClassName("tab-link");
  for (let l of links) {
    l.classList.remove("active");
  }
  let target = document.getElementById(tabId);
  if (target) target.style.display = "block";
  if (evt && evt.currentTarget) evt.currentTarget.classList.add("active");
}
</script>
<!-- post data 2.0 -->
<script>
  const allCardsData = [
    { name: "Games Rummy", category: "all", bonus: "₹200", withdraw: "₹100", rating: "4.8", downloads: "130M+", image: "img1.jpg", link: "https://gamesrummy.club/?code=Q6WA7QSCF8S" },
    { name: "Teen Patti Master", category: "new", bonus: "₹500", withdraw: "₹200", rating: "4.9", downloads: "50M+", image: "img2.jpg", link: "https://www.earntp.com/m/q1go0k" },
    { name: "Lucky Rummy", category: "apps", bonus: "₹300", withdraw: "₹150", rating: "4.7", downloads: "90M+", image: "img3.jpg", link: "#" },
    { name: "Rummy Gold", category: "all", bonus: "₹250", withdraw: "₹100", rating: "4.6", downloads: "110M+", image: "img4.jpg", link: "#" },
    { name: "Teen Patti Gold", category: "new", bonus: "₹400", withdraw: "₹200", rating: "4.8", downloads: "150M+", image: "img5.jpg", link: "#" }
  ];
  </script>


<a href='https://t.me/allyonoplay'>
  <div class='contener'>
    <img class='banner-top' alt='banner-top-allrummysafe' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgCnH06ifqW6vXr98QSSSoNPK-RxhY1YPFOg1k21bOfWjimjwxxIEioYLSRZ8PSx7k0s_VODCDvHog9xxkfeN27Gk2RpObvD21VGjL91V8R_xznUT1LZ6nrb7jiPSsGJJa4PqYFIWAT45_jhSP8VxkRpoqIVDZ8QCT_rnuKzAWAxJYzjgic-4fcNnN3pS6m/s1600/allrummysafe.com%20Download-All-yono-games.webp'/>
  </div>
</a>

<div class='top0-box-apk'>
  
  <!-- Item 1 -->
  <div class="apk-card py-2 order-2">
    <div class="apk-card-inner pt-6">
      <div class="apk-badge-icon badge-1"></div>
      
      <img alt="Rummy Guru" class="apk-main-img mb-2" loading="lazy" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifKm5Mbq1Pbej1Gxg0dgV840xN-lRDbOV7BAscZjI0ppQ7i2VpuSXmWQ3ovd4G6HkR9U9JjXfX1Jig3eVfEOmqSl2mu6EnWvJ2Dr9-lDlgri_qg1LmJ3nl-Qp4nF_8Decpj_aGuig7S_MugZgJZ1Kfs_Hc442p4O85Am5qX1PEG922ZyoHUlE1rIV80hbd/s1600/top-rummy.webp" />
      
      <div class="apk-rating-img"></div>
      
      <div class="apk-secure-text">
        <i style='color:#1e00ff; font-size: 12px;' class="bi bi-check-circle-fill"></i> 100% Safe &amp; Secure
      </div>
      
      <a class="apk-download-btn" href="https://www.allrummysafe.com/2025/06/Top-rummy.html">
        <b><i class="bi bi-cloud-arrow-down-fill mr-1"></i> Download</b>
      </a>
    </div>
  </div>

  <!-- Item 2 -->
  <div class="apk-card py-2 pt-0 order-1">
    <div class="apk-card-inner">
      <div class="apk-badge-icon badge-2" style="top:-44px;"></div>
      
      <img alt="Jaiho Spin" class="apk-main-img mb-2" style="width:6rem; height:6rem;" loading="lazy" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgATrFAWD4GNHqc43XTYq_77P5DOjhvHBh42SC_2X-TYsoLYN0aK29sCav29gL3NTMTLf3Le7s8ge6ZZ3bT-W1S_pqQWhbLS8Pe9u3aqfB3Hih2Ote9IZH1RIyyPy5D5AkxMoiqM37IZtlQaejvAmtR7fWnD09cYmVzQTw10f3nBbk3iOmIKYdTeelSFfTK/s1600/Jaiho%20Spin.webp" />
      
      <div class="apk-rating-img"></div>
      
      <div class="apk-secure-text">
        <i style='color:#1e00ff; font-size: 12px;' class="bi bi-check-circle-fill"></i> 200% Safe &amp; Secure
      </div>
      
      <a class="apk-download-btn" href="https://www.allrummysafe.com/2025/01/jaiho-spin.html">
        <b><i class="bi bi-cloud-arrow-down-fill mr-1 btnzor"></i> Download</b>
      </a>
    </div>
  </div>

  <!-- Item 3 -->
  <div class="apk-card py-2 order-3">
    <div class="apk-card-inner pt-6">
      <div class="apk-badge-icon badge-3"></div>
      
      <img alt="Jaiho Slots" class="apk-main-img mb-2" loading="lazy" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYJOp9ahCCUpbTa6INc8R0XHMmRMdYIUkuWMD94MQU0Tl5MnrBsGyb6WYqDFUpvUOF_2z_SA4v4_C06lTs6SxgQskctsD4oYj5hoAJp4vadhYCiEhxbLrXr3tdGAMQ-X4L8_ZomqmZHZS8_Jx1zNAvJtaf36Qav5Kxl3FXsOZHV4Wrnc9zSa3qSAfrSSx3/s1600/jaiho-slots.webp" />
      
      <div class="apk-rating-img"></div>
      
      <div class="apk-secure-text">
        <i style='color:#1e00ff; font-size: 12px;' class="bi bi-check-circle-fill"></i> 100% Safe &amp; Secure
      </div>
      
      <a class="apk-download-btn" href="https://www.allrummysafe.com/2025/06/Jaiho-slots.html">
        <b><i class="bi bi-cloud-arrow-down-fill mr-1"></i> Download</b>
      </a>
    </div>
  </div>

</div>
<!-- Tabs Container -->
<div class="tabs-container">
  <!-- Tab Headers -->
  <div class="tab-list">
    <button class="tab-link active" onclick="openTab(event, 'tab1')">All Games</button>
    <button class="tab-link" onclick="openTab(event, 'tab2')">New Games</button>
    <button class="tab-link" onclick="openTab(event, 'tab3')">Apps</button>
  </div>

  <!-- Tab Contents -->
  <div id="tab1" class="tab-content" style="display: block;"></div>
  <div id="tab2" class="tab-content" style="display: none;"></div>
  <div id="tab3" class="tab-content" style="display: none;"></div>
</div>





