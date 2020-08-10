export default () => {
  const rulesPage = document.querySelector(".screen--rules");
  const rulesItems = rulesPage.querySelectorAll(".rules__item");
  const lastRulesItem = rulesItems[rulesItems.length - 1];
  const rulesLink = rulesPage.querySelector(".rules__link");

  lastRulesItem.onanimationend = () => {
    rulesLink.classList.add("active");
  }
};
