import { SIDE_MENU_TOGGLE } from "../../actions/FrameWork/framework";

export default function framework(state = { side_menu_open: false }, action) {
	switch (action.type) {
		case SIDE_MENU_TOGGLE: {
			return { side_menu_open: !state.side_menu_open };
		}

		default:
			return state;
	}
}
