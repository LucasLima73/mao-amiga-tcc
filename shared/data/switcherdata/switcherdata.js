import { useState } from "react";
import store from "../../redux/store";
import { MenuItems } from "../../../shared/layout-components/sidebar/nav";
export function Dark(actionfunction) {
	const theme = store.getState();
	actionfunction({
		...theme,
		"dataThemeMode": "dark",
		"dataMenuStyles": "dark",
		"dataHeaderStyles": "transparent",
		"bodyBg1": "",
		"bodyBg2": "",
		"Light": "",
		"inputBorder": "",
		"Graycolor": "",
		"Formcontrol": ""

	});
	localStorage.setItem("mamixdarktheme", "dark");
	localStorage.removeItem("mamixlighttheme");
	localStorage.removeItem("mamixMenu");
	localStorage.removeItem("mamixHeader");
	localStorage.removeItem("bodyBg1");
	localStorage.removeItem("bodyBg2");

}
export function Light(actionfunction) {
	const theme = store.getState();
	actionfunction({
		...theme,
		"dataThemeMode": "light",
		"dataHeaderStyles": "transparent",
		"dataMenuStyles": "light",
		"bodyBg1": "",
		"bodyBg2": "",
		"Light": "",
		"Formcontrol": "",
		"inputBorder": "",
		"Graycolor": "",

	});
	localStorage.setItem("mamixlighttheme", "light");
	localStorage.removeItem("mamixdarktheme");
	localStorage.removeItem("mamixHeader");
	localStorage.removeItem("mamixMenu");
	localStorage.removeItem("bodyBg1");
	localStorage.removeItem("bodyBg2");
}
export function Ltr(actionfunction) {
	const theme = store.getState();
	actionfunction({ ...theme, dir: "ltr" });
	localStorage.setItem("mamixltr", "ltr");
	localStorage.removeItem("mamixrtl");
}
export function Rtl(actionfunction) {
	const theme = store.getState();
	actionfunction({ ...theme, dir: "rtl" });
	localStorage.setItem("mamixrtl", "rtl");
	localStorage.removeItem("mamixltr");
}
export const HorizontalClick = (actionfunction) => {
	const theme = store.getState();
	actionfunction({
		...theme,
		"dataNavLayout": "horizontal",
		"dataVerticalStyle": "",
		"dataNavStyle": localStorage.mamixnavstyles ? localStorage.mamixnavstyles : "menu-click"
	});
	localStorage.setItem("mamixlayout", "horizontal");
	localStorage.removeItem("mamixverticalstyles");

	const Sidebar = document.querySelector(".main-menu");
	if (Sidebar) {
		Sidebar.style.marginInline = "0px";
	}
	closeMenuFn();
};
export const Vertical = (actionfunction) => {
	const theme = store.getState();
	actionfunction({
		...theme,
		"dataNavLayout": "vertical",
		"dataVerticalStyle": "overlay",
		"toggled": "",
		"dataNavStyle": ""
	});
	localStorage.setItem("mamixlayout", "vertical");
	// localStorage.removeItem("horizontal");
	localStorage.removeItem("mamixnavstyles");

};

export const Menuclick = (actionfunction) => {
	const theme = store.getState();
	actionfunction({
		...theme,
		"dataNavStyle": "menu-click",
		"dataVerticalStyle": "",
		"toggled": "menu-click-closed",
	});
	localStorage.setItem("mamixnavstyles", "menu-click");
	localStorage.removeItem("mamixverticalstyles");
	const Sidebar = document.querySelector(".main-menu");
	if (Sidebar) {
		Sidebar.style.marginInline = "0px";
	}
};
export const MenuHover = (actionfunction) => {
	const theme = store.getState();
	actionfunction({
		...theme,
		"dataNavStyle": "menu-hover",
		"dataVerticalStyle": "",
		"toggled": "menu-hover-closed",
	});
	localStorage.setItem("mamixnavstyles", "menu-hover");
	localStorage.removeItem("mamixverticalstyles");
	const Sidebar = document.querySelector(".main-menu");
	if (Sidebar) {
		Sidebar.style.marginInline = "0px";
	}
};
export const IconClick = (actionfunction) => {
	const theme = store.getState();
	actionfunction({
		...theme,
		"dataNavStyle": "icon-click",
		"dataVerticalStyle": "",
		"toggled": "icon-click-closed",
	});
	localStorage.setItem("mamixnavstyles", "icon-click");
	localStorage.removeItem("mamixverticalstyles");
	const Sidebar = document.querySelector(".main-menu");
	if (Sidebar) {
		Sidebar.style.marginInline = "0px";
	}
};
function closeMenuFn() {
	const closeMenuRecursively = (items) => {

		items?.forEach((item) => {
			item.active = false;
			closeMenuRecursively(item.children);
		});
	};
	closeMenuRecursively(MenuItems);
}
export const IconHover = (actionfunction) => {
	const theme = store.getState();
	actionfunction({
		...theme,
		"dataNavStyle": "icon-hover",
		"dataVerticalStyle": "",
		"toggled": "icon-hover-closed"
	});
	localStorage.setItem("mamixnavstyles", "icon-hover");
	localStorage.removeItem("mamixverticalstyles");
	const Sidebar = document.querySelector(".main-menu");
	if (Sidebar) {
		Sidebar.style.marginInline = "0px";
	}

	closeMenuFn();
};
export const Defaultwidth = (actionfunction) => {
	const theme = store.getState();
	actionfunction({
		...theme,
		"dataWidth": "default",
	});
	localStorage.setItem("mamixdefaultwidth", "Defaultwidth");
	localStorage.removeItem("mamixfullwidth");
	localStorage.removeItem("mamixboxed");

};
export const Fullwidth = (actionfunction) => {
	const theme = store.getState();
	actionfunction({
		...theme,
		"dataWidth": "fullwidth",
	});
	localStorage.setItem("mamixfullwidth", "Fullwidth");
	localStorage.removeItem("mamixdefaultwidth");
	localStorage.removeItem("mamixboxed");

};
export const Boxed = (actionfunction) => {
	const theme = store.getState();
	actionfunction({
		...theme,
		"dataWidth": "boxed",
	});
	localStorage.setItem("mamixboxed", "Boxed");
	localStorage.removeItem("mamixdefaultwidth");
	localStorage.removeItem("mamixfullwidth");
};
export const FixedMenu = (actionfunction) => {
	const theme = store.getState();
	actionfunction({
		...theme,
		"dataMenuPosition": "fixed",
	});
	localStorage.setItem("mamixmenufixed", "MenuFixed");
	localStorage.removeItem("mamixmenuscrollable");
};
export const scrollMenu = (actionfunction) => {
	const theme = store.getState();
	actionfunction({
		...theme,
		"dataMenuPosition": "scrollable",
	});
	localStorage.setItem("mamixmenuscrollable", "Menuscrolled");
	localStorage.removeItem("mamixmenufixed");
};
export const Headerpostionfixed = (actionfunction) => {
	const theme = store.getState();
	actionfunction({
		...theme,
		"dataHeaderPosition": "fixed",
	});
	localStorage.setItem("mamixheaderfixed", "FixedHeader");
	localStorage.removeItem("mamixheaderscrollable");
	localStorage.removeItem("mamixheaderrounded");
};
export const Headerpostionscroll = (actionfunction) => {
	const theme = store.getState();
	actionfunction({
		...theme,
		"dataHeaderPosition": "scrollable",
	});
	localStorage.setItem("mamixheaderscrollable", "ScrollableHeader");
	localStorage.removeItem("mamixheaderfixed");
	localStorage.removeItem("mamixheaderrounded");
};
export const Headerpostionrounded = (actionfunction) => {
	const theme = store.getState();
	actionfunction({
		...theme,
		"dataHeaderPosition": "rounded",
	});
	localStorage.setItem("mamixheaderrounded", "RoundedHeader");
	localStorage.removeItem("mamixheaderfixed");
	localStorage.removeItem("mamixheaderscrollable");
};
export const Regular = (actionfunction) => {
	const theme = store.getState();
	actionfunction({
		...theme,
		"dataPageStyle": "regular"
	});
	localStorage.setItem("mamixregular", "Regular");
	localStorage.removeItem("mamixclassic");
	localStorage.removeItem("mamixmodern");
};
export const Classic = (actionfunction) => {
	const theme = store.getState();
	actionfunction({
		...theme,
		"dataPageStyle": "classic",
	});
	localStorage.setItem("mamixclassic", "Classic");
	localStorage.removeItem("mamixregular");
	localStorage.removeItem("mamixmodern");
};
export const Modern = (actionfunction) => {
	const theme = store.getState();
	actionfunction({
		...theme,
		"dataPageStyle": "modern",
	});
	localStorage.setItem("mamixmodern", "Modern");
	localStorage.removeItem("mamixregular");
	localStorage.removeItem("mamixclassic");
};
export function Enable(actionfunction) {
	const theme = store.getState();
	actionfunction({ ...theme, loader: "enable" });
	localStorage.setItem("mamixloaderenable", "enable");
	localStorage.setItem("mamixloaderdisable", "enable");
}
export function Disable(actionfunction) {
	const theme = store.getState();
	actionfunction({ ...theme, loader: "disable" });
	localStorage.setItem("mamixloaderdisable", "disable");
	localStorage.removeItem("mamixloaderenable");
}
export const Defaultmenu = (actionfunction) => {
	const theme = store.getState();
	actionfunction({
		...theme,
		"dataVerticalStyle": "overlay",
		"dataNavLayout": "vertical",
		"toggled": "",
		"dataNavStyle": "",
	});
	localStorage.removeItem("mamixnavstyles");
	localStorage.setItem("mamixverticalstyles", "default");
	let icon = document.getElementById("switcher-default-menu");
	if (icon) {
		icon.checked = true;
	}

};
export const Closedmenu = (actionfunction) => {
	const theme = store.getState();
	actionfunction({
		...theme,
		"dataNavLayout": "vertical",
		"dataVerticalStyle": "closed",
		"toggled": "close-menu-close",
		"dataNavStyle": "",
	});
	localStorage.setItem("mamixverticalstyles", "closed");
	localStorage.removeItem("mamixnavstyles");

};

function icontextOpenFn() {
	let html = document.documentElement;
	if (html.getAttribute("data-toggled") === "icon-text-close") {
		html.setAttribute("data-icon-text", "open");
	}
}
function icontextCloseFn() {
	let html = document.documentElement;
	if (html.getAttribute("data-toggled") === "icon-text-close") {
		html.removeAttribute("data-icon-text");
	}
}
export const iconText = (actionfunction) => {
	const theme = store.getState();
	actionfunction({
		...theme,
		"dataNavLayout": "vertical",
		"dataVerticalStyle": "icontext",
		"toggled": "icon-text-close",
		"dataNavStyle": "",
	});
	localStorage.setItem("mamixverticalstyles", "icontext");
	localStorage.removeItem("mamixnavstyles");
	const MainContent = document.querySelector(".main-content");
	const appSidebar = document.querySelector(".app-sidebar");

	appSidebar?.addEventListener("click", () => {
		icontextOpenFn();
	});
	MainContent?.addEventListener("click", () => {
		icontextCloseFn();
	});
};
export const iconOverayFn = (actionfunction) => {
	const theme = store.getState();
	actionfunction({
		...theme,
		"dataNavLayout": "vertical",
		"dataVerticalStyle": "overlay",
		"toggled": "icon-overlay-close",
		"dataNavStyle": "",
	});
	localStorage.setItem("mamixverticalstyles", "overlay");
	localStorage.removeItem("mamixnavstyles");
	let icon = document.getElementById("switcher-icon-overlay");
	if (icon) {
		icon.checked = true;
	}
};
function DetachedOpenFn() {
	if (window.innerWidth > 992) {
		let html = document.documentElement;
		if (html.getAttribute("data-toggled") === "detached-close" || html.getAttribute("data-toggled") === "icon-overlay-close") {
			html.setAttribute("data-icon-overlay", "open");
		}
	}
}
function DetachedCloseFn() {
	if (window.innerWidth > 992) {
		let html = document.documentElement;
		if (html.getAttribute("data-toggled") === "detached-close" || html.getAttribute("data-toggled") === "icon-overlay-close") {
			html.removeAttribute("data-icon-overlay");
		}
	}
}
export const DetachedFn = (actionfunction) => {
	const theme = store.getState();
	actionfunction({
		...theme,
		"dataNavLayout": "vertical",
		"dataVerticalStyle": "detached",
		"toggled": "detached-close",
		"dataNavStyle": "",
	});
	localStorage.setItem("mamixverticalstyles", "detached");
	localStorage.removeItem("mamixnavstyles");
	const MainContent = document.querySelector(".main-content");
	const appSidebar = document.querySelector(".app-sidebar");

	appSidebar?.addEventListener("click", () => {
		DetachedOpenFn();
	});
	MainContent?.addEventListener("click", () => {
		DetachedCloseFn();
	});
};

export const DoubletFn = (actionfunction) => {
	const theme = store.getState();
	actionfunction({
		...theme,
		"dataNavLayout": "vertical",
		"dataVerticalStyle": "doublemenu",
		"toggled": "double-menu-open",
		"dataNavStyle": "",
	});
	localStorage.setItem("mamixverticalstyles", "doublemenu");
	localStorage.removeItem("mamixnavstyles");
	setTimeout(() => {
		if (!document.querySelector(".main-menu .has-sub.open")) {
			const theme = store.getState();
			actionfunction(
				{
					...theme,
					"toggled": "double-menu-close",
				}
			);
		}
	}, 100);

};
export const bgImage1 = (actionfunction) => {
	const theme = store.getState();
	actionfunction({
		...theme,
		"bgImg": "bgimg1"
	});
	localStorage.setItem("bgimage1", "bgimg1");
	localStorage.removeItem("bgimage2");
	localStorage.removeItem("bgimage3");
	localStorage.removeItem("bgimage4");
	localStorage.removeItem("bgimage5");
};
export const bgImage2 = (actionfunction) => {
	const theme = store.getState();
	actionfunction({
		...theme,
		"bgImg": "bgimg2"
	});
	localStorage.setItem("bgimage2", "bgimg2");
	localStorage.removeItem("bgimage1");
	localStorage.removeItem("bgimage3");
	localStorage.removeItem("bgimage4");
	localStorage.removeItem("bgimage5");
};
export const bgImage3 = (actionfunction) => {
	const theme = store.getState();
	actionfunction({
		...theme,
		"bgImg": "bgimg3"
	});
	localStorage.setItem("bgimage3", "bgimg3");
	localStorage.removeItem("bgimage1");
	localStorage.removeItem("bgimage2");
	localStorage.removeItem("bgimage4");
	localStorage.removeItem("bgimage5");
};
export const bgImage4 = (actionfunction) => {
	const theme = store.getState();
	actionfunction({
		...theme,
		"bgImg": "bgimg4"
	});
	localStorage.setItem("bgimage4", "bgimg4");
	localStorage.removeItem("bgimage1");
	localStorage.removeItem("bgimage2");
	localStorage.removeItem("bgimage3");
	localStorage.removeItem("bgimage5");
};
export const bgImage5 = (actionfunction) => {
	const theme = store.getState();
	actionfunction({
		...theme,
		"bgImg": "bgimg5"
	});
	localStorage.setItem("bgimage5", "bgimg5");
	localStorage.removeItem("bgimage1");
	localStorage.removeItem("bgimage2");
	localStorage.removeItem("bgimage3");
	localStorage.removeItem("bgimage4");
};

export const colorMenu = (actionfunction) => {
	const theme = store.getState();
	actionfunction({
		...theme,
		"dataMenuStyles": "color",
	});
	localStorage.setItem("mamixMenu", "color");
	localStorage.removeItem("gradient");
};

export const lightMenu = (actionfunction) => {
	const theme = store.getState();
	actionfunction({
		...theme,
		"dataMenuStyles": "light",
	});
	localStorage.setItem("mamixMenu", "light");
	localStorage.removeItem("dark");
};

export const darkMenu = (actionfunction) => {
	const theme = store.getState();
	actionfunction({
		...theme,
		"dataMenuStyles": "dark",
	});
	localStorage.setItem("mamixMenu", "dark");
	localStorage.removeItem("light");
};

export const gradientMenu = (actionfunction) => {
	const theme = store.getState();
	actionfunction({
		...theme,
		"dataMenuStyles": "gradient",
	});
	localStorage.setItem("mamixMenu", "gradient");
	localStorage.removeItem("color");
};
export const transparentMenu = (actionfunction) => {
	const theme = store.getState();
	actionfunction({
		...theme,
		"dataMenuStyles": "transparent",
	});
	localStorage.setItem("mamixMenu", "transparent");
	localStorage.removeItem("gradient");
};
export const lightHeader = (actionfunction) => {
	const theme = store.getState();
	actionfunction({
		...theme,
		"dataHeaderStyles": "light",
	});
	localStorage.setItem("mamixHeader", "light");
};

export const darkHeader = (actionfunction) => {
	const theme = store.getState();
	actionfunction({
		...theme,
		"dataHeaderStyles": "dark",
	});
	localStorage.setItem("mamixHeader", "dark");
};
export const colorHeader = (actionfunction) => {
	const theme = store.getState();
	actionfunction({
		...theme,
		"dataHeaderStyles": "color",
	});
	localStorage.setItem("mamixHeader", "color");
};
export const gradientHeader = (actionfunction) => {
	const theme = store.getState();
	actionfunction({
		...theme,
		"dataHeaderStyles": "gradient",
	});
	localStorage.setItem("mamixHeader", "gradient");
};
export const transparentHeader = (actionfunction) => {
	const theme = store.getState();
	actionfunction({
		...theme,
		"dataHeaderStyles": "transparent",
	});
	localStorage.setItem("mamixHeader", "transparent");
};

export const primaryColor1 = (actionfunction) => {
	const theme = store.getState();
	actionfunction({
		...theme,
		"colorPrimaryRgb": "106, 91, 204",
	});
	localStorage.setItem("primaryRGB", "106, 91, 204");

};
export const primaryColor2 = (actionfunction) => {
	const theme = store.getState();
	actionfunction({
		...theme,
		"colorPrimaryRgb": "100, 149, 237",
	});
	localStorage.setItem("primaryRGB", "100, 149, 237");
};
export const primaryColor3 = (actionfunction) => {
	const theme = store.getState();
	actionfunction({
		...theme,
		"colorPrimaryRgb": "0, 123, 167",
	});
	localStorage.setItem("primaryRGB", "0, 123, 167");
};
export const primaryColor4 = (actionfunction) => {
	const theme = store.getState();
	actionfunction({
		...theme,
		"colorPrimaryRgb": "10, 180, 255",
	});
	localStorage.setItem("primaryRGB", "10, 180, 255");
};
export const primaryColor5 = (actionfunction) => {
	const theme = store.getState();
	actionfunction({
		...theme,
		"colorPrimaryRgb": "46, 81, 145",
	});
	localStorage.setItem("primaryRGB", "46, 81, 145");
};

export const backgroundColor1 = (actionfunction) => {
	const theme = store.getState();
	actionfunction({
		...theme,
		"bodyBg1": "49, 63, 141",
		"bodyBg2": "54, 71, 146",
		"Light": "54, 71, 146",
		"Formcontrol": "54, 71, 146",
		"inputBorder": "255, 255, 255, 0.1",
		"Graycolor": "255, 255, 255, 0.1",
		"dataThemeMode": "dark",
		"dataMenuStyles": "dark",
		"dataHeaderStyles": "dark",
	});
	localStorage.setItem("bodyBg1", "49, 63, 141");
	localStorage.setItem("bodyBg2", "54, 71, 146");
	localStorage.removeItem("mamixdarktheme");
	localStorage.removeItem("mamixlighttheme");
	//localStorage.removeItem("mamixMenu");
	//localStorage.removeItem("mamixHeader");


};
export const backgroundColor2 = (actionfunction) => {
	const theme = store.getState();
	actionfunction({
		...theme,
		"bodyBg1": "46, 94, 184",
		"bodyBg2": "51, 102, 189",
		"Light": "51, 102, 189",
		"Formcontrol": "rgb(51, 102, 189)",
		"inputBorder": "255, 255, 255, 0.1",
		"Graycolor": "255, 255, 255, 0.1",
		"dataThemeMode": "dark",
		"dataMenuStyles": "dark",
		"dataHeaderStyles": "dark"
	});
	localStorage.setItem("bodyBg1", "46, 94, 184");
	localStorage.setItem("bodyBg2", "51, 102, 189");
	localStorage.removeItem("mamixdarktheme");
	localStorage.removeItem("mamixlighttheme");
	//localStorage.removeItem("mamixMenu");
	//localStorage.removeItem("mamixHeader");

};
export const backgroundColor3 = (actionfunction) => {
	const theme = store.getState();
	actionfunction({
		...theme,
		"bodyBg1": "23, 74, 105",
		"bodyBg2": "28, 82, 110",
		"Light": "28, 82, 110",
		"Formcontrol": "rgb(28, 82, 110)",
		"inputBorder": "255, 255, 255, 0.1",
		"Graycolor": "255, 255, 255, 0.1",
		"dataThemeMode": "dark",
		"dataMenuStyles": "dark",
		"dataHeaderStyles": "dark"
	});
	localStorage.setItem("bodyBg1", "23, 74, 105");
	localStorage.setItem("bodyBg2", "28, 82, 110");
	localStorage.removeItem("mamixdarktheme");
	localStorage.removeItem("mamixlighttheme");
	//localStorage.removeItem("mamixMenu");
	//localStorage.removeItem("mamixHeader");

};
export const backgroundColor4 = (actionfunction) => {
	const theme = store.getState();
	actionfunction({
		...theme,
		"bodyBg1": "34, 120, 174",
		"bodyBg2": "39, 128, 179",
		"Light": "39, 128, 179",
		"Formcontrol": "rgb(39, 128, 179)",
		"inputBorder": "255, 255, 255, 0.1",
		"Graycolor": "255, 255, 255, 0.1",
		"dataThemeMode": "dark",
		"dataMenuStyles": "dark",
		"dataHeaderStyles": "dark"
	});
	localStorage.setItem("bodyBg1", "34, 120, 174");
	localStorage.setItem("bodyBg2", "39, 128, 179");
	localStorage.removeItem("mamixdarktheme");
	localStorage.removeItem("mamixlighttheme");
	//localStorage.removeItem("mamixMenu");
	//localStorage.removeItem("mamixHeader");

};
export const backgroundColor5 = (actionfunction) => {
	const theme = store.getState();
	actionfunction({
		...theme,
		"bodyBg1": "12, 23, 91",
		"bodyBg2": "17, 31, 96",
		"Light": "17, 31, 96",
		"Formcontrol": "rgb(17, 31, 96)",
		"inputBorder": "255, 255, 255, 0.1",
		"Graycolor": "255, 255, 255, 0.1",
		"dataThemeMode": "dark",
		"dataMenuStyles": "dark",
		"dataHeaderStyles": "dark"
	});
	localStorage.setItem("bodyBg1", "12, 23, 91");
	localStorage.setItem("bodyBg2", "17, 31, 96");
	localStorage.removeItem("mamixdarktheme");
	localStorage.removeItem("mamixlighttheme");
	//localStorage.removeItem("mamixMenu");
	//localStorage.removeItem("mamixHeader");

};

const ColorPicker = (props) => {
	return (
		<div className="color-picker-input">
			<input type="color" {...props} />
		</div>
	);
};

function hexToRgb(hex) {
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? {
		r: parseInt(result[1], 16),
		g: parseInt(result[2], 16),
		b: parseInt(result[3], 16)
	} : null;
}
const Themeprimarycolor = ({ actionfunction }) => {
	const theme = store.getState();
	const [state, updateState] = useState("#FFFFFF");

	const handleInput = (e) => {
		const rgb = hexToRgb(e.target.value);

		if (rgb !== null) {
			const { r, g, b } = rgb;
			updateState(e.target.value);
			actionfunction({
				...theme,
				"colorPrimaryRgb": `${r} , ${g} , ${b}`,
			});
			localStorage.setItem("dynamiccolor", `${r}, ${g}, ${b}`);

		}
	};

	return (
		<div className="Themeprimarycolor theme-container-primary pickr-container-primary">
			<ColorPicker onChange={handleInput} value={state} />
		</div>
	);
};

export default Themeprimarycolor;

//themeBackground
export const Themebackgroundcolor = ({ actionfunction }) => {
	const theme = store.getState();
	const [state, updateState] = useState("#FFFFFF");
	const handleInput = (e) => {
		const { r, g, b } = hexToRgb(e.target.value);
		updateState(e.target.value);
		actionfunction({
			...theme,
			"bodyBg1": `${r}, ${g}, ${b}`,
			"bodyBg2": `${r + 14}, ${g + 14}, ${b + 14}`,
			"Light": `${r + 14}, ${g + 14}, ${b + 14}`,
			"Formcontrol": `${r + 14}, ${g + 14}, ${b + 14}`,
			"inputBorder": "255, 255, 255, 0.1",
			"Graycolor": "255, 255, 255, 0.1",
			"dataThemeMode": "dark",
			"dataHeaderStyles": "dark",
			"dataMenuStyles": "dark"
		});
		localStorage.setItem("bodyBg1", `${r}, ${g}, ${b}`);
		localStorage.setItem("bodyBg2", `${r + 14}, ${g + 14}, ${b + 14}`);
		localStorage.removeItem("mamixMenu");
		localStorage.removeItem("mamixHeader");
		localStorage.removeItem("mamixlighttheme");
		localStorage.removeItem("mamixdarktheme");


	};
	return (
		<div className="Themebackgroundcolor">
			<ColorPicker onChange={handleInput} value={state} />
		</div>
	);
};

export const Reset = (actionfunction) => {
	const theme = store.getState();
	Vertical(actionfunction);
	actionfunction({
		...theme,
		lang: "en",
		dir: "ltr",
		dataThemeMode: "light",
		dataMenuStyles: "light",
		dataNavLayout: "vertical",
		dataHeaderStyles: "transparent",
		dataVerticalStyle: "overlay",
		toggled: "",
		dataNavStyle: "",
		dataPageStyle: "regular",
		dataWidth: "default",
		dataMenuPosition: "fixed",
		dataHeaderPosition: "fixed",
		loader: "disable",
		iconOverlay: "",
		colorPrimaryRgb: "",
		bodyBg1: "",
		bodyBg2: "",
		Light: "",
		Formcontrol: "",
		inputBorder: "",
		Graycolor: "",
		bgImg: "",
		iconText: "",
		body: {
			class: ""
		}
	});
	localStorage.clear();
	var icon = document.getElementById("switcher-default-menu");
	if (icon) {
		icon.checked = true
	}
};
export const Reset1 = (actionfunction) => {
	const theme = store.getState();
	Vertical(actionfunction);
	actionfunction({
		...theme,
		lang: "en",
		dir: "ltr",
		dataThemeMode: "light",
		dataMenuStyles: "light",
		dataNavLayout: "horizontal",
		dataHeaderStyles: "transparent",
		dataVerticalStyle: "overlay",
		//toggled: "",
		dataNavStyle: "menu-hover",
		dataMenuPosition: "fixed",
		iconOverlay: "",
		colorPrimaryRgb: "",
		bgImg: "",
		iconText: "",
		bodyBg1: "",
		bodyBg2: "",
		Light: "",
		Formcontrol: "",
		inputBorder: "",
		Graycolor: "",

	});
	localStorage.clear();
	var icon = document.getElementById("switcher-default-menu");
	if (icon) {
		icon.checked = true
	}
};
export const LocalStorageBackup = (actionfunction) => {

	(localStorage.mamixltr) ? Ltr(actionfunction) : "";
	(localStorage.mamixrtl) ? Rtl(actionfunction) : "";
	(localStorage.mamixdarktheme) ? Dark(actionfunction) : "";
	(localStorage.mamixlighttheme) ? Light(actionfunction) : "";
	(localStorage.mamixregular) ? Regular(actionfunction) : "";
	(localStorage.mamixclassic) ? Classic(actionfunction) : "";
	(localStorage.mamixmodern) ? Modern(actionfunction) : "";
	(localStorage.mamixfullwidth) ? Fullwidth(actionfunction) : "";
	(localStorage.mamixboxed) ? Boxed(actionfunction) : "";
	(localStorage.mamixmenufixed) ? FixedMenu(actionfunction) : "";
	(localStorage.mamixmenuscrollable) ? scrollMenu(actionfunction) : "";
	(localStorage.mamixheaderfixed) ? Headerpostionfixed(actionfunction) : "";
	(localStorage.mamixheaderscrollable) ? Headerpostionscroll(actionfunction) : "";

	(localStorage.mamixloaderenable) ? Enable(actionfunction) : "";
	(localStorage.mamixloaderdisable) ? Disable(actionfunction) : "";

	(localStorage.mamixnavstyles === "menu-click") ? Menuclick(actionfunction) : "";
	(localStorage.mamixnavstyles === "menu-hover") ? MenuHover(actionfunction) : "";
	(localStorage.mamixnavstyles === "icon-click") ? IconClick(actionfunction) : "";
	(localStorage.mamixnavstyles === "icon-hover") ? IconHover(actionfunction) : "";

	(localStorage.bgimage1) ? bgImage1(actionfunction) : "";
	(localStorage.bgimage2) ? bgImage2(actionfunction) : "";
	(localStorage.bgimage3) ? bgImage3(actionfunction) : "";
	(localStorage.bgimage4) ? bgImage4(actionfunction) : "";
	(localStorage.bgimage5) ? bgImage5(actionfunction) : "";
	(localStorage.mamixlayout == "horizontal") && HorizontalClick(actionfunction);
	(localStorage.mamixlayout == "vertical") && Vertical(actionfunction);
	//primitive 
	if (
		localStorage.getItem("mamixltr") == null ||
		localStorage.getItem("mamixltr") == "ltr"
	)

		// Theme Primary: Colors: Start
		switch (localStorage.primaryRGB) {
			case "106, 91, 204":
				primaryColor1(actionfunction);

				break;
			case "100, 149, 237":
				primaryColor2(actionfunction);

				break;
			case "0, 123, 167":
				primaryColor3(actionfunction);

				break;
			case "10, 180, 255":
				primaryColor4(actionfunction);

				break;
			case "46, 81, 145":
				primaryColor5(actionfunction);

				break;
			default:
				break;
		}
	// Theme Primary: Colors: End

	switch (localStorage.bodyBg1) {
		case "49, 63, 141":
			backgroundColor1(actionfunction);

			break;
		case "46, 94, 184":
			backgroundColor2(actionfunction);

			break;
		case "23, 74, 105":
			backgroundColor3(actionfunction);

			break;
		case "34, 120, 174":
			backgroundColor4(actionfunction);

			break;
		case "12, 23, 91":
			backgroundColor5(actionfunction);

			break;
		default:
			break;
	}

	//layout
	if (localStorage.mamixverticalstyles) {
		const verticalStyles = localStorage.getItem("mamixverticalstyles");

		switch (verticalStyles) {
			case "default":
				Defaultmenu(actionfunction);
				break;
			case "closed":
				Closedmenu(actionfunction);
				break;
			case "icontext":
				iconText(actionfunction);
				break;
			case "overlay":
				iconOverayFn(actionfunction);
				break;
			case "detached":
				DetachedFn(actionfunction);
				break;
			case "doublemenu":
				DoubletFn(actionfunction);
				break;
		}
	}

	//Theme Primary:
	if (localStorage.dynamiccolor) {
		const theme = store.getState();
		actionfunction({
			...theme,
			"colorPrimaryRgb": localStorage.dynamiccolor,
		});
	}
	// Theme BAckground:
	if (localStorage.bodyBg1) {
		const theme = store.getState();
		actionfunction({
			...theme,
			"bodyBg1": localStorage.bodyBg1,
			"bodyBg2": localStorage.bodyBg2,
			"Light": localStorage.bodyBg2,
			"Formcontrol": localStorage.bodyBg2,
			"inputBorder": "255, 255, 255, 0.1",
			"Graycolor": "255, 255, 255, 0.1",
			"dataThemeMode": "dark",
			"dataHeaderStyles": localStorage.mamixHeader ? localStorage.mamixHeader : localStorage.mamixdarktheme ? "dark" : "dark",
			"dataMenuStyles": "dark",
		});
		// Dark(actionfunction);
	}
	switch (localStorage.mamixMenu) {
		case "light":
			lightMenu(actionfunction);
			break;
		case "dark":
			darkMenu(actionfunction);

			break;
		case "color":
			colorMenu(actionfunction);

			break;
		case "gradient":
			gradientMenu(actionfunction);

			break;
		case "transparent":
			transparentMenu(actionfunction);

			break;
		default:
			break;
	}
	// ThemeColor defauly Header Colors: start

	// ThemeColor Header Colors: start
	switch (localStorage.mamixHeader) {

		case "light":
			lightHeader(actionfunction);

			break;
		case "dark":
			darkHeader(actionfunction);

			break;
		case "color":
			colorHeader(actionfunction);

			break;
		case "gradient":
			gradientHeader(actionfunction);

			break;
		case "transparent":
			transparentHeader(actionfunction);

			break;
		default:
			break;
	}
};

export const LocalStorageBackup1 = (actionfunction) => {

	(localStorage.mamixltr) ? Ltr(actionfunction) : "";
	(localStorage.mamixrtl) ? Rtl(actionfunction) : "";
	(localStorage.mamixdarktheme) ? Dark(actionfunction) : "";
	(localStorage.mamixlighttheme) ? Light(actionfunction) : "";



	//primitive 
	if (
		localStorage.getItem("mamixltr") == null ||
		localStorage.getItem("mamixltr") == "ltr"
	)

		// Theme Primary: Colors: Start
		switch (localStorage.primaryRGB) {
			case "106, 91, 204":
				primaryColor1(actionfunction);

				break;
			case "100, 149, 237":
				primaryColor2(actionfunction);

				break;
			case "0, 123, 167":
				primaryColor3(actionfunction);

				break;
			case "10, 180, 255":
				primaryColor4(actionfunction);

				break;
			case "46, 81, 145":
				primaryColor5(actionfunction);

				break;
			default:
				break;
		}
	// Theme Primary: Colors: End

	switch (localStorage.bodyBg1) {
		case "49, 63, 141":
			backgroundColor1(actionfunction);

			break;
		case "46, 94, 184":
			backgroundColor2(actionfunction);

			break;
		case "23, 74, 105":
			backgroundColor3(actionfunction);

			break;
		case "34, 120, 174":
			backgroundColor4(actionfunction);

			break;
		case "12, 23, 91":
			backgroundColor5(actionfunction);

			break;
		default:
			break;
	}


	//Theme Primary:
	if (localStorage.dynamiccolor) {
		const theme = store.getState();
		actionfunction({
			...theme,
			"colorPrimaryRgb": localStorage.dynamiccolor,
		});
	}
	// Theme BAckground:
	if (localStorage.bodyBg1) {
		const theme = store.getState();
		actionfunction({
			...theme,
			"bodyBg1": localStorage.bodyBg1,
			"bodyBg2": localStorage.bodyBg2,
			"Light": localStorage.bodyBg2,
			"Formcontrol": localStorage.bodyBg2,
			"inputBorder": "255, 255, 255, 0.1",
			"Graycolor": "255, 255, 255, 0.1",
			"dataThemeMode": "dark",
			"dataHeaderStyles": localStorage.mamixHeader ? localStorage.mamixHeader : localStorage.mamixdarktheme ? "dark" : "dark",
			"dataMenuStyles": "dark",
		});
		// Dark(actionfunction);
	}




};
