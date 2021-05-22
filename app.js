window.onload = function () {
  //Loader animation
  const loader = document.getElementById("loader-div");
  setTimeout(function () {
    loader.style.opacity = 0;
    loader.style.display = "none";
    //Typed js
    new Typed("#name", {
      strings: ["Aswin", "Gamer"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
      showCursor: false,
    });
    //Sal Init
    sal({
      threshold: 0.3,
      once: false,
    });
  }, 2000);
  //Navbar animation
  document.getElementById("menu-icon").onclick = handleNavOpen();
  document.getElementById("close-icon").onclick = handleNavClose();
  //Handle nav links
  document.getElementById("about-btn").onclick = handleLink("#about");
  document.getElementById("games-btn").onclick = handleLink("#games");
  document.getElementById("franchises-btn").onclick = handleLink("#franchises");
};
function handleLink(url) {
  return () => {
    window.location.href = url;
    document.getElementById("close-icon").click();
  };
}
function handleNavOpen() {
  return () => {
    let delay = 0;
    for (let i = 1; i <= 3; i++) {
      $(`.nav-item:nth-child(${i})`).css({
        opacity: "1",
        transform: "translateX(10px)",
        transition: `all 1s cubic-bezier(.8,-.5,.2,1.4) ${delay}s`,
      });
      delay += 0.1;
    }
    $("#nav-overlay").css({
      transform: "scaleX(1)",
      transition: "all 0.5s cubic-bezier(.8,-.5,.2,1.4)",
    });
  };
}
function handleNavClose() {
  return () => {
    $(".nav-item").css({
      opacity: "0",
      transform: "translateX(-10px)",
      transition: "all 0.3s ease-in",
    });
    $("#nav-overlay").css({
      transform: "scaleX(0)",
      transition: "all 0.5s cubic-bezier(.8,-.5,.2,1.4)",
    });
  };
}
