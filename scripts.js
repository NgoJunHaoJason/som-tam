const main = () => {
  enableMenuButtons();
}

const enableMenuButtons = () => {
  const daytimeMenuButton = document.getElementById("daytime-menu-button");
  daytimeMenuButton.onclick = toggleDaytimeMenu;

  const eveningMenuButton = document.getElementById("evening-menu-button");
  eveningMenuButton.onclick = toggleEveningMenu;
}

const toggleDaytimeMenu = () => {
  activateMenuButton("daytime-menu-button");
  deactivateMenuButton("evening-menu-button");

  showMenu("daytime-menu")
  hideMenu("evening-menu");
}

const toggleEveningMenu = () => {
  activateMenuButton("evening-menu-button");
  deactivateMenuButton("daytime-menu-button");

  showMenu("evening-menu")
  hideMenu("daytime-menu");
}

const activateMenuButton = (buttonId) => {
  const menuButton = document.getElementById(buttonId);
  menuButton.style.backgroundColor = "#164577";
  menuButton.style.color = "white";
}

const deactivateMenuButton = (buttonId) => {
  const menuButton = document.getElementById(buttonId);
  menuButton.style.backgroundColor = "white";
  menuButton.style.color = "#164577";
}

const showMenu = (menuId) => {
  const menu = document.getElementById(menuId);
  menu.style.display = "flex";
}

const hideMenu = (menuId) => {
  const menu = document.getElementById(menuId);
  menu.style.display = "none";
}

main(); // code is ran here
