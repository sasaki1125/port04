
// about
const targetElement = document.querySelectorAll(".animationTarget");
document.addEventListener("scroll",function() {
  for (let i = 0; i < targetElement.length; i++){
    const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * .9
    if (window.innerHeight > getElementDistance) {
      targetElement[i].classList.add("show");
    }
  }
})


gsap.from(".contentsText1",{
  scrollTrigger: {
      trigger: ".contentsText1",
      start: "top 50%", // ビューポートの設定
      end: 'top 50%',
      scrub: true,
      // markers: true
  },
  delay: 4,
  opacity: 0,
  duration: 8,
  x: "-100%",
});

gsap.from(".contentsText2",{
  scrollTrigger: {
      trigger: ".contentsText2",
      start: "top 50%", // ビューポートの設定
      end: 'top 50%',
      scrub: true,
      // markers: true
  },
  delay: 4,
  opacity: 0,
  duration: 8,
  x: "100%",
});

gsap.to(".concTitle",{
  scrollTrigger: {
      trigger: ".concTitle",
      start: "top 50%", // ビューポートの設定
      end: 'top 30%',
      scrub: true,
      // markers: true
  },
  delay: 2,
  opacity: 0,
  duration: 8,
  x: "100%",
});

// gsap.to(".box_c",{
//   scrollTrigger: {
//       trigger: ".box_c",
//       start: "top center",
//       end: "600px",
//       scrub: true, // 要素を追従させる
//       markers: true
//   },
//   rotation: 360,
//   duration: 3,
//   y: 600,
// });


// timelineを作成
const tl = gsap.timeline();
tl.from(".conB", {xPercent: -100})
  .from(".conC", {xPercent: 100})
  .from(".conD", {xPercent: -100});
 
ScrollTrigger.create({
    animation: tl,
    trigger: ".wrapper",
    start: "top",
    scrub: 1.5, // 1秒遅れて追従させる
    pin: true, // 要素を固定表示させる
    anticipatePin: 1, // ピン留めをどのくらい早く行うかを制御
});



// スライダー
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay:{
    delay: 2000
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// 文字
// const animationTargetElements = document.querySelectorAll(".textAnimation");
// for (let i = 0; i < animationTargetElements.length; i++){
//   const targetElement = animationTargetElements[i],
//         texts = targetElement.textContent, 
//         textsArray = [];
  
//   targetElement.textContent = "";

//   for (let j = 0; j < texts.split("").length; j++){
//     const t = texts.split("")[j]; 
//     if (t === "") {
//         textsArray.push("");
//       } else {
//         textsArray.push('<span style="animation-delay: ' + (j*0.3) + 's;">' + t + '</span>')
//       }
//   }

//   for (let k = 0; k < textsArray.length; k++){
//     targetElement.innerHTML += textsArray[k];
//   }
// }


gsap.from(".confimg1",{ // 動かす要素
  // y: 800,
  // scale:2,
  
  scrollTrigger: {
      trigger: ".confimg1", // この要素まできたらアニメーション開始
      start: "top 50%", // ビューポートの設定
      end: 'top 50%',
      scrub: true,
      // markers: true // 検証用のマーカーを表示
  },
  duration: 10,
  opacity: 0,
});

gsap.from(".confimg2",{ // 動かす要素
  // y: 800,
  // scale:2,
  
  scrollTrigger: {
      trigger: ".confimg2", // この要素まできたらアニメーション開始
      start: "top 40%", // ビューポートの設定
      end: 'top 40%',
      scrub: true,
      // markers: true // 検証用のマーカーを表示
  },
  // y: "-100%",
  duration: 10,
  opacity: 0,
});

gsap.from(".confimg3",{ // 動かす要素
  // y: 800,
  // scale:2,
  
  scrollTrigger: {
      trigger: ".confimg3", // この要素まできたらアニメーション開始
      start: "top 60%", // ビューポートの設定
      end: 'top 60%',
      scrub: true,
      // markers: true // 検証用のマーカーを表示
  },
  // y: "-100%",
  duration: 10,
  opacity: 0,
});

gsap.from(".confimg4",{ // 動かす要素
  // y: 800,
  // scale:2,
  
  scrollTrigger: {
      trigger: ".confimg4", // この要素まできたらアニメーション開始
      start: "top 50%", // ビューポートの設定
      end: 'top 50%',
      scrub: true,
      // markers: true // 検証用のマーカーを表示
  },
  // y: "-100%",
  duration: 10,
  opacity: 0,
});

// コンタクト

gsap.from(".contactImg",{ // 動かす要素

  scrollTrigger: {
      trigger: ".contactImg", // この要素まできたらアニメーション開始
      start: "top 50%", // ビューポートの設定
      end: 'top 50%',
      scrub: true,
      // markers: true // 検証用のマーカーを表示
  },
  // y: "50%",
  duration: 10,
  opacity: 0,
});
