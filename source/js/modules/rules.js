export default () => {
  document.querySelector(".rules__item:last-child").onanimationend = () => {
    document.querySelector(".rules__link").classList.add("show-link");

    setTimeout(() => {
      document.querySelector(".rules__link").classList.remove("show-link");
    }, 1000);
  };
};
