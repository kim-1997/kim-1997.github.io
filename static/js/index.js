let typingBool = false;
let typingIdx = 0;
let liIndex = 0;
let liLength = $(".text-typing > .text").length;

var typingTxt = $(".text-typing > .text").eq(liIndex).text();
typingTxt = typingTxt.split("");
if (typingBool == false) {
  typingBool = true;
  var tyInt = setInterval(typing, 120);
}

function typing() {
  $(".typing .text").removeClass("on");
  $(".typing .text").eq(liIndex).addClass("on");
  if (typingIdx < typingTxt.length) {
    $(".typing .text").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다.
    typingIdx++;
  } else {
    if (liIndex < liLength - 1) {
      liIndex++;
      typingIdx = 0;
      typingBool = false;
      typingTxt = $(".text-typing > .text").eq(liIndex).text();

      clearInterval(tyInt);

      setTimeout(function () {
        tyInt = setInterval(typing, 120);
      }, 100);
    } else if (liIndex == liLength - 1) {
      clearInterval(tyInt);
    }
  }
}
let headerWrap = document.querySelector(".header-wrap");
let header = document.querySelector("#header");
let li = document.querySelectorAll("nav ul li");
window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    headerWrap.style.maxWidth = "700px";
    headerWrap.style.borderBottom = "2px solid #f19b3e";
    header.style.backdropFilter = "blur(10px)";
    headerWrap.style.color = "#fff";
    li.forEach((li) => {
      li.style.padding = "7px 20px";
      li.style.background = "#fff";
      li.style.borderRadius = "20px";
      li.style.color = "#f19b3e";
      li.style.fontSize = "18px";
      li.addEventListener("mouseover", () => {
        li.style.background = "#f19b3e";
        li.style.color = "#fff";
      });
      li.addEventListener("mouseleave", () => {
        li.style.background = "#fff";
        li.style.color = "#f19b3e";
      });
    });
  } else {
    headerWrap.style.maxWidth = "1200px";
    headerWrap.style.borderBottom = "2px solid #ccc";
    header.style.borderBottom = "none";
    header.style.backdropFilter = "none";
    headerWrap.style.color = "#ccc";
    li.forEach((li) => {
      li.style.padding = "0px 20px";
      li.style.background = "none";
      li.style.borderRadius = "0px";
      li.style.color = "#ccc";
      li.style.fontSize = "20px";
      li.addEventListener("mouseover", () => {
        li.style.background = "";
        li.style.color = "#fff";
      });
      li.addEventListener("mouseleave", () => {
        li.style.background = "";
        li.style.color = "#ccc";
      });
    });
  }
});

/* 스크롤 */
let srollBtn = document.querySelectorAll(".scroll_btn");

srollBtn.forEach((item) => {
  item.addEventListener("click", () => {
    const targetId = item.getAttribute("data-target");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

const sections = document.querySelectorAll(".scrollSection");
const buttons = document.querySelectorAll(".scroll_btn");

window.addEventListener("scroll", () => {
  // 현재 스크롤 위치
  const scrollY = window.scrollY;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (scrollY === 0) {
      document
        .querySelector(`[data-target="container"]`)
        .classList.remove("active");
    }
    // 스크롤 위치에 따라 클래스 조작
    if (sectionTop <= 10 && sectionTop >= -section.clientHeight) {
      // 해당 섹션이 화면에 보일 때
      buttons.forEach((btn) => {
        btn.classList.remove("active");
      });

      // 해당 섹션에 대응하는 버튼에 클래스 추가
      const targetButton = document.querySelector(
        `[data-target="${section.id}"]`
      );
      if (targetButton) {
        targetButton.classList.add("active");
      }
    }
  });
});

let icon = document.querySelectorAll(".skill_container > div");
let hideExplain = document.querySelectorAll(".hide_explain");
let hideExplain_text = document.querySelectorAll(".hide_explain > span");
let skillStatus = document.querySelector(".skill_status");

icon.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.children[1].style.width = "100%";
    setTimeout(() => {
      item.children[1].children[0].style.opacity = 1;
    }, 150);
  });
  item.addEventListener("mouseleave", () => {
    item.children[1].style.width = "0%";
    item.children[1].children[0].style.opacity = 0;
  });
});

let count = 0;
skillStatus.addEventListener("click", () => {
  if (count === 0) {
    hideExplain.forEach((item) => {
      item.style.width = "100%";
      setTimeout(() => {
        item.children[0].style.opacity = 1;
      }, 150);
    });
    skillStatus.innerHTML = "닫기";
    skillStatus.style.background = "rgb(235, 86, 86)";
    skillStatus.style.color = "#fff";
    skillStatus.style.border = "none";
    skillStatus.addEventListener("mouseover", () => {
      skillStatus.style.background = "rgb(235, 86, 86)";
      skillStatus.style.color = "#fff";
    });
    skillStatus.addEventListener("mouseleave", () => {
      skillStatus.style.background = "#fff";
      skillStatus.style.color = "rgb(235, 86, 86)";
      skillStatus.style.border = "2px solid rgb(235, 86, 86)";
    });
    count++;
  } else if (count === 1) {
    hideExplain.forEach((item) => {
      item.style.width = "0%";
      item.children[0].style.opacity = 0;
    });
    skillStatus.innerHTML = "스킬 역량 보기";
    skillStatus.style.background = "#fff";
    skillStatus.style.color = "#f19b3e";
    skillStatus.style.border = "2px solid #f19b3e";
    skillStatus.addEventListener("mouseover", () => {
      skillStatus.style.background = "#f19b3e";
      skillStatus.style.color = "#fff";
    });
    skillStatus.addEventListener("mouseleave", () => {
      skillStatus.style.background = "#fff";
      skillStatus.style.color = "#f19b3e";
      skillStatus.style.border = "2px solid #f19b3e";
    });
    count = 0;
  }
});
$(".port_contents").slick({
  dots: true,
  dotsClass: "custom-dots",
  // autoplay: true,
  // autoplaySpeed: 3000,
});
document
  .querySelectorAll(".custom-dots > li > button")
  .forEach((button) => (button.innerHTML = ""));
document
  .querySelectorAll(".slick-arrow")
  .forEach((button) => (button.innerHTML = ""));

let slideItem = document.querySelectorAll(".item_wrap");
let bFilter = document.querySelectorAll(".filter_black");
let ex = document.querySelectorAll(".ex");
slideItem.forEach((item) => {
  console.log(item.children[0]);
  item.addEventListener("mouseover", () => {
    item.children[0].children[2].style.visibility = "visible";
    item.children[0].children[2].style.opacity = 1;
    item.children[0].children[1].style.visibility = "visible";
    item.children[0].children[1].style.opacity = 1;
  });
  item.addEventListener("mouseleave", () => {
    item.children[0].children[2].style.visibility = "hidden";
    item.children[0].children[2].style.opacity = 0;
    item.children[0].children[1].style.visibility = "hidden";
    item.children[0].children[1].style.opacity = 0;
  });
});

function checkScreenWidth() {
  var screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  if (screenWidth <= 350) {
    li.forEach((li) => {
      li.style.padding = "0px 5px";
    });
  }
  // 화면 너비가 570px 이하인 경우
  if (screenWidth <= 570) {
    li.forEach((li) => {
      // li.style.padding = "7px 20px";
      // li.style.borderRadius = "20px";
      li.style.fontSize = "13px";
      if (window.scrollY > 0) {
        li.style.padding = "0px 5px";
        li.style.margin = "0px 5px";
      } else {
        li.style.margin = "0 5px";
      }
    });
  } else {
    li.forEach((li) => {
      li.style.fontSize = "20px";
      // li.style.margin = "0 20px";
    });
  }
}

window.addEventListener("resize", checkScreenWidth);
window.addEventListener("scroll", checkScreenWidth);
window.addEventListener("load", checkScreenWidth);
