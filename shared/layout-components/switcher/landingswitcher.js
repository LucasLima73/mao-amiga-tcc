"use client"
import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { ThemeChanger } from "../../../shared/redux/action";
import Themeprimarycolor, * as switcherdata from "../../data/switcherdata/switcherdata";
import { Button } from "react-bootstrap";
const Landingswitcher = ({ local_varaiable, ThemeChanger }) => {

    useEffect(() => {
        switcherdata.LocalStorageBackup1(ThemeChanger)
    }, [])


    const customstyles = `
  ${local_varaiable.colorPrimaryRgb != '' ? `--primary-rgb:${local_varaiable.colorPrimaryRgb}` : ''};
  ${local_varaiable.colorPrimary != '' ? `--primary:${local_varaiable.colorPrimary}` : ''};
  `;

    const Switcherclose = () => {
        if (document.querySelector(".offcanvas-end")?.classList.contains("show")) {
            document.querySelector(".offcanvas-end")?.classList.remove("show");
            document.querySelector(".switcher-backdrop")?.classList.remove("d-block");
            document.querySelector(".switcher-backdrop")?.classList.add("d-none");
        }
    };
    return (
        <Fragment>
            <div className="switcher-backdrop d-none" onClick={() => { Switcherclose(); }}></div>
            {/* <!-- Start Switcher --> */}
            <div className="offcanvas offcanvas-end" tabIndex={-1} id="switcher-canvas" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header border-bottom">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">Switcher</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={() => { Switcherclose(); }}></button>
                </div>
                <div className="offcanvas-body">
                    <div className="">
                        <p className="switcher-style-head">Theme Color Mode:</p>
                        <div className="row switcher-style g-0">
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-light-theme">
                                        Light
                                    </label>
                                    <input className="form-check-input" type="radio" name="theme-style" id="switcher-light-theme"
                                        checked={local_varaiable.dataThemeMode !== "dark"} onChange={(_e) => { }}
                                        onClick={() => switcherdata.Light(ThemeChanger)} />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-dark-theme">
                                        Dark
                                    </label>
                                    <input className="form-check-input" type="radio" name="theme-style" id="switcher-dark-theme" checked={local_varaiable.dataThemeMode == "dark"} onChange={(_e) => { }}
                                        onClick={() => switcherdata.Dark(ThemeChanger)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <p className="switcher-style-head">Directions:</p>
                        <div className="row switcher-style g-0">
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-ltr">
                                        LTR
                                    </label>
                                    <input className="form-check-input" type="radio" name="direction" id="switcher-ltr" checked={local_varaiable.dir == "ltr"} onChange={(_e) => { }}
                                        onClick={() => { switcherdata.Ltr(ThemeChanger); }} />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-rtl">
                                        RTL
                                    </label>
                                    <input className="form-check-input" type="radio" name="direction" id="switcher-rtl" checked={local_varaiable.dir == "rtl"} onChange={(_e) => { }}
                                        onClick={() => { switcherdata.Rtl(ThemeChanger); }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="theme-colors">
                        <p className="switcher-style-head">Theme Primary:</p>
                        <div className="d-flex align-items-center switcher-style">
                            <div className="form-check switch-select me-3">
                                <input className="form-check-input color-input color-primary-1" type="radio"
                                    name="theme-primary" id="switcher-primary" checked={local_varaiable.colorPrimaryRgb == "13, 73, 159"} onChange={(_e) => { }}
                                    onClick={() => switcherdata.primaryColor1(ThemeChanger)} />
                            </div>
                            <div className="form-check switch-select me-3">
                                <input className="form-check-input color-input color-primary-2" type="radio"
                                    name="theme-primary" id="switcher-primary1" checked={local_varaiable.colorPrimaryRgb == "0, 128, 172"} onChange={(_e) => { }}
                                    onClick={() => switcherdata.primaryColor2(ThemeChanger)} />
                            </div>
                            <div className="form-check switch-select me-3">
                                <input className="form-check-input color-input color-primary-3" type="radio" name="theme-primary"
                                    id="switcher-primary2" checked={local_varaiable.colorPrimaryRgb == "100, 48, 124"} onChange={(_e) => { }}
                                    onClick={() => switcherdata.primaryColor3(ThemeChanger)} />
                            </div>
                            <div className="form-check switch-select me-3">
                                <input className="form-check-input color-input color-primary-4" type="radio" name="theme-primary"
                                    id="switcher-primary3" checked={local_varaiable.colorPrimaryRgb == "5, 154, 114"} onChange={(_e) => { }}
                                    onClick={() => switcherdata.primaryColor4(ThemeChanger)} />
                            </div>
                            <div className="form-check switch-select me-3">
                                <input className="form-check-input color-input color-primary-5" type="radio" name="theme-primary"
                                    id="switcher-primary4" checked={local_varaiable.colorPrimaryRgb == "177, 90, 17"} onChange={(_e) => { }}
                                    onClick={() => switcherdata.primaryColor5(ThemeChanger)} />
                            </div>
                            <div className="form-check switch-select ps-0 mt-1 color-primary-light">
                                <div className='theme-container-primary'>
                                    <button className="">nano</button>
                                </div>
                                <div className='pickr-container-primary'>
                                    <div className='pickr'>
                                        <Button className='pcr-button' onClick={(ele) => {
                                            if (ele.target.querySelector("input")) {
                                                ele.target.querySelector("input").click();
                                            }
                                        }}>
                                            <Themeprimarycolor theme={local_varaiable} actionfunction={ThemeChanger} />
                                        </Button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="switcher-style-head">reset:</p>
                        <div className="text-center">
                            <Button id="reset-all" className="btn btn-danger mt-3" onClick={() => switcherdata.Reset1(ThemeChanger)}>Reset</Button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Switcher --> */}

        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    local_varaiable: state
});

export default connect(mapStateToProps, { ThemeChanger })(Landingswitcher);
