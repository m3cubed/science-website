import { SIDE_MENU_TOGGLE, NAV_TITLE } from "../../actions/FrameWork/framework";

export default function framework(
	state = { side_menu_open: false, nav_title: "" },
	action
) {
	switch (action.type) {
		case SIDE_MENU_TOGGLE: {
			return { ...state, side_menu_open: !state.side_menu_open };
		}
		case NAV_TITLE: {
			return {
				nav_title: action.title
			};
		}
		default:
			return state;
	}
}
