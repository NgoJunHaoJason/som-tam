const main = () => {
  enableMenuButtons();
}

const enableMenuButtons = () => {
  const daytimeMenuButton = document.getElementById("daytime-menu-button");
  daytimeMenuButton.onclick = toggleDaytimeMenu;

  const eveningMenuButton = document.getElementById("evening-menu-button");
  eveningMenuButton.onclick = toggleEveningMenu;

  const currentDate = new Date();
  const currentTime = currentDate.getTime();

  const switchoverDate = new Date();
  switchoverDate.setHours(15, 0, 0, 0); // 3pm
  const switchoverTime = switchoverDate.getTime();

  if (currentTime < switchoverTime) {
    toggleDaytimeMenu();
  } else {
    toggleEveningMenu();
  }
}

const toggleDaytimeMenu = () => {
  activateMenuButton("daytime-menu-button");
  deactivateMenuButton("evening-menu-button");

  showMenuHours("daytime-hours");
  hideMenuHours("evening-hours");

  showMenu("daytime-menu")
  hideMenu("evening-menu");
}

const toggleEveningMenu = () => {
  activateMenuButton("evening-menu-button");
  deactivateMenuButton("daytime-menu-button");

  showMenuHours("evening-hours");
  hideMenuHours("daytime-hours");

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

const showMenuHours = (menuHoursId) => {
  const menuHours = document.getElementById(menuHoursId);
  menuHours.style.display = "block";
}

const hideMenuHours = (menuHoursId) => {
  const menuHours = document.getElementById(menuHoursId);
  menuHours.style.display = "none";
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
