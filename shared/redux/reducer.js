

let initialState = {
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
    colorPrimary: "",
    bodyBg1: "",
    bodyBg2: "",
    Light: "",
    Formcontrol:"",
    inputBorder: "",
    Graycolor: "",
    bgImg: "",
    iconText: "",
    body: "",

  };
  
  export default function reducer(state = initialState, action) {
    let { type, payload } = action;
  
    switch (type) {
  
      case "ThemeChanger":
        state = payload
        return state
      break;
          
          default:
          return state;
    }
  }

    