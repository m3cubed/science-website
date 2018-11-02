export const SIDE_MENU_TOGGLE = "SIDE_MENU_TOGGLE";
export const NAV_TITLE = "NAV_TITLE";

export function sideMenuToggle() {
	return {
		type: SIDE_MENU_TOGGLE
	};
}

export function handleNavTitle(title) {
	return {
		type: NAV_TITLE,
		title
	};
}
