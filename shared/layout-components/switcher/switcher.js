
"use client"
import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux';
import { ThemeChanger } from '../../redux/action';
import { Button, Col, Nav, OverlayTrigger, Tab, Tooltip } from 'react-bootstrap';
import Themeprimarycolor, * as switcherdata from "../../data/switcherdata/switcherdata";
import Link from 'next/link';

const Switcher = ({ local_varaiable, ThemeChanger }) => {


  useEffect(() => {
    switcherdata.LocalStorageBackup(ThemeChanger)
  }, [])

const Switcherclose = () => {
    if (document.querySelector(".offcanvas-end")?.classList.contains("show")) {
        document.querySelector(".offcanvas-end")?.classList.remove("show");
        document.querySelector(".switcher-backdrop")?.classList.remove("d-block");
        document.querySelector(".switcher-backdrop")?.classList.add("d-none");
    }
};

  return (
    <Fragment>
        <div className="switcher-backdrop d-none" onClick={() => { Switcherclose();}}></div>
        <div className="offcanvas offcanvas-end" tabIndex={-1} id="switcher-canvas" aria-labelledby="offcanvasRightLabel">
        <Tab.Container id="left-tabs-example" defaultActiveKey="themestyles">
          <div className="offcanvas-header border-bottom d-block p-0">
              <div className="d-flex align-items-center justify-content-between p-3">
                  <h5 className="offcanvas-title text-default" id="offcanvasRightLabel">Switcher</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={() => { Switcherclose();}}></button>
              </div>
              <nav className="border-top border-block-start-dashed">
                  <Nav variant="pills" className="nav nav-tabs nav-justified" id="switcher-main-tab" role="tablist">
                     <Nav.Item>
                       <Nav.Link className="p-0" eventKey="themestyles">
                            <button className="nav-link" id="switcher-home-tab" data-bs-toggle="tab" data-bs-target="#switcher-home"
                                type="button" role="tab" aria-controls="switcher-home" aria-selected="true">
                                    Theme Styles
                                    </button>
                        </Nav.Link>
                       </Nav.Item>
                   <Nav.Item>
                        <Nav.Link className="p-0" eventKey="themecolors">
                            <button className="nav-link" id="switcher-profile-tab" data-bs-toggle="tab" data-bs-target="#switcher-profile"
                                type="button" role="tab" aria-controls="switcher-profile" aria-selected="false">Theme Colors</button>
                          </Nav.Link>
                   </Nav.Item>
                  </Nav>
              </nav>
          </div>
        <div className="offcanvas-body">
            <Tab.Content className="" id="nav-tabContent">
                <Tab.Pane eventKey="themestyles" className="fade show border-0 p-0" id="switcher-home" role="tabpanel" aria-labelledby="switcher-home-tab"
                    tabIndex={0}>
                    <div className="">
                        <p className="switcher-style-head">Theme Color Mode:</p>
                        <div className="row switcher-style gx-0">
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-light-theme">
                                        Light
                                    </label>
                                    <input className="form-check-input" type="radio" name="theme-style" id="switcher-light-theme"
                                        checked={local_varaiable.dataThemeMode !== "dark"} onChange={(_e) => { }}
                                        onClick={() => switcherdata.Light(ThemeChanger)}/>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-dark-theme">
                                        Dark
                                    </label>
                                    <input className="form-check-input" type="radio" name="theme-style" id="switcher-dark-theme"  checked={local_varaiable.dataThemeMode == "dark"} onChange={(_e) => { }}
													onClick={() => switcherdata.Dark(ThemeChanger)}   />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <p className="switcher-style-head">Directions:</p>
                        <div className="row switcher-style gx-0">
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-ltr">
                                        LTR
                                    </label>
                                    <input className="form-check-input" type="radio" name="direction" id="switcher-ltr" checked={local_varaiable.dir == "ltr"} onChange={(_e) => { }}
													onClick={() => { switcherdata.Ltr(ThemeChanger); }}/>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-rtl">
                                        RTL
                                    </label>
                                    <input className="form-check-input" type="radio" name="direction" id="switcher-rtl"  checked={local_varaiable.dir == "rtl"} onChange={(_e) => { }}
													onClick={() => { switcherdata.Rtl(ThemeChanger); }}    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <p className="switcher-style-head">Navigation Styles:</p>
                        <div className="row switcher-style gx-0">
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-vertical">
                                        Vertical
                                    </label>
                                    <input className="form-check-input" type="radio" name="navigation-style" id="switcher-vertical"
                                        checked={local_varaiable.dataNavLayout == "vertical"} onChange={(_e) => { }}
                                        onClick={() => switcherdata.Vertical(ThemeChanger)}/>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-horizontal">
                                        Horizontal
                                    </label>
                                    <input className="form-check-input" type="radio" name="navigation-style"
                                        id="switcher-horizontal"   checked={local_varaiable.dataNavLayout == "horizontal"} onChange={(_e) => { }}
                                        onClick={() => switcherdata.HorizontalClick(ThemeChanger)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navigation-menu-styles">
                        <p className="switcher-style-head">Vertical & Horizontal Menu Styles:</p>
                        <div className="row switcher-style gx-0 pb-2 gy-2">
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-menu-click">
                                        Menu Click
                                    </label>
                                    <input className="form-check-input" type="radio" name="navigation-menu-styles"
                                        id="switcher-menu-click" checked={local_varaiable.dataNavStyle == "menu-click"} onChange={(_e) => { }}
                                        onClick={() => switcherdata.Menuclick(ThemeChanger)}  />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-menu-hover">
                                        Menu Hover
                                    </label>
                                    <input className="form-check-input" type="radio" name="navigation-menu-styles"
                                        id="switcher-menu-hover"  checked={local_varaiable.dataNavStyle == "menu-hover"} onChange={(_e) => { }}
                                        onClick={() => switcherdata.MenuHover(ThemeChanger)} />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-icon-click">
                                        Icon Click
                                    </label>
                                    <input className="form-check-input" type="radio" name="navigation-menu-styles"
                                        id="switcher-icon-click" checked={local_varaiable.dataNavStyle == "icon-click"} onChange={(_e) => { }}
                                        onClick={() => switcherdata.IconClick(ThemeChanger)}  />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-icon-hover">
                                        Icon Hover
                                    </label>
                                    <input className="form-check-input" type="radio" name="navigation-menu-styles"
                                        id="switcher-icon-hover" checked={local_varaiable.dataNavStyle == "icon-hover"} onChange={(_e) => { }}
                                        onClick={() => switcherdata.IconHover(ThemeChanger)}   />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sidemenu-layout-styles">
                        <p className="switcher-style-head">Sidemenu Layout Styles:</p>
                        <div className="row switcher-style gx-0 pb-2 gy-2">
                            <Col sm={6}>
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-default-menu">
                                        Default Menu
                                    </label>
                                    <input className="form-check-input" type="radio" name="sidemenu-layout-styles"
                                        id="switcher-default-menu" defaultChecked onClick={() => switcherdata.Defaultmenu(ThemeChanger)}/>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-closed-menu">
                                        Closed Menu
                                    </label>
                                    <input className="form-check-input" type="radio" name="sidemenu-layout-styles"
                                        id="switcher-closed-menu"  checked={local_varaiable.dataVerticalStyle == "closed"} onChange={(_e) => { }}
                                        onClick={() => switcherdata.Closedmenu(ThemeChanger)}  />
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-icontext-menu">
                                        Icon Text
                                    </label>
                                    <input className="form-check-input" type="radio" name="sidemenu-layout-styles"
                                        id="switcher-icontext-menu" checked={local_varaiable.toggled == "icon-text-close"} onChange={(_e) => { }}
                                        onClick={() => switcherdata.iconText(ThemeChanger)}   />
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-icon-overlay">
                                        Icon Overlay
                                    </label>
                                    <input className="form-check-input" type="radio" name="sidemenu-layout-styles"
                                        id="switcher-icon-overlay" checked={local_varaiable.toggled == "icon-overlay-close"} onChange={(_e) => { }}
                                        onClick={() => switcherdata.iconOverayFn(ThemeChanger)}   />
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-detached">
                                        Detached
                                    </label>
                                    <input className="form-check-input" type="radio" name="sidemenu-layout-styles"
                                        id="switcher-detached" checked={local_varaiable.toggled == "detached-close"} onChange={(_e) => { }}
                                        onClick={() => switcherdata.DetachedFn(ThemeChanger)}   />
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-double-menu">
                                        Double Menu
                                    </label>
                                    <input className="form-check-input" type="radio" name="sidemenu-layout-styles"
                                        id="switcher-double-menu"  checked={local_varaiable.dataVerticalStyle == "doublemenu"} onChange={(_e) => { }}
                                        onClick={() => switcherdata.DoubletFn(ThemeChanger)}   />
                                </div>
                            </Col>
                        </div>
                    </div>
                    <div className="">
                        <p className="switcher-style-head">Page Styles:</p>
                        <div className="row switcher-style gx-0">
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-regular">
                                        Regular
                                    </label>
                                    <input className="form-check-input" type="radio" name="page-styles" id="switcher-regular"
                                    checked={local_varaiable.dataPageStyle == "regular"} onChange={(_e) => { }}
                                    onClick={() => switcherdata.Regular(ThemeChanger)} />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-classic">
                                        Classic
                                    </label>
                                    <input className="form-check-input" type="radio" name="page-styles" id="switcher-classic"   checked={local_varaiable.dataPageStyle == "classic"} onChange={(_e) => { }}
													onClick={() => switcherdata.Classic(ThemeChanger)}  />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-modern">
                                        Modern
                                    </label>
                                    <input className="form-check-input" type="radio" name="page-styles" id="switcher-modern" checked={local_varaiable.dataPageStyle == "modern"} onChange={(_e) => { }}
													onClick={() => switcherdata.Modern(ThemeChanger)}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <p className="switcher-style-head">Layout Width Styles:</p>
                        <div className="row switcher-style gx-0">
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-default-width">
                                        Default
                                    </label>
                                    <input className="form-check-input" type="radio" name="layout-width" id="switcher-default-width"
                                         checked={local_varaiable.dataWidth == "default"} onChange={(_e) => { }}
                                        onClick={() => switcherdata.Defaultwidth(ThemeChanger)}   />
                                </div>
                            </div>
                            <div className="col-5">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-full-width">
                                        Full Width
                                    </label>
                                    <input className="form-check-input" type="radio" name="layout-width" id="switcher-full-width" checked={local_varaiable.dataWidth == "fullwidth"} onChange={(_e) => { }}
													onClick={() => switcherdata.Fullwidth(ThemeChanger)}  />
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-boxed">
                                        Boxed
                                    </label>
                                    <input className="form-check-input" type="radio" name="layout-width" id="switcher-boxed" checked={local_varaiable.dataWidth == "boxed"} onChange={(_e) => { }}
													onClick={() => switcherdata.Boxed(ThemeChanger)}   />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <p className="switcher-style-head">Menu Positions:</p>
                        <div className="row switcher-style gx-0">
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-menu-fixed">
                                        Fixed
                                    </label>
                                    <input className="form-check-input" type="radio" name="menu-positions" id="switcher-menu-fixed"
                                        checked={local_varaiable.dataMenuPosition == "fixed"} onChange={(_e) => { }}
                                        onClick={() => switcherdata.FixedMenu(ThemeChanger)}/>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-menu-scroll">
                                        Scrollable
                                    </label>
                                    <input className="form-check-input" type="radio" name="menu-positions" id="switcher-menu-scroll"  checked={local_varaiable.dataMenuPosition == "scrollable"} onChange={(_e) => { }}
													onClick={() => switcherdata.scrollMenu(ThemeChanger)}   />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <p className="switcher-style-head">Header Positions:</p>
                        <div className="row switcher-style gx-0">
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-header-fixed">
                                        Fixed
                                    </label>
                                    <input className="form-check-input" type="radio" name="header-positions"
                                        id="switcher-header-fixed" checked={local_varaiable.dataHeaderPosition == "fixed"} onChange={(_e) => { }}
                                        onClick={() => switcherdata.Headerpostionfixed(ThemeChanger)}/>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-header-scroll">
                                        Scrollable
                                    </label>
                                    <input className="form-check-input" type="radio" name="header-positions"
                                        id="switcher-header-scroll"  checked={local_varaiable.dataHeaderPosition == "scrollable"} onChange={(_e) => { }}
                                        onClick={() => switcherdata.Headerpostionscroll(ThemeChanger)}  />
                                </div>
                            </div>
                        </div>
                    </div>
                </Tab.Pane>
                <Tab.Pane eventKey="themecolors" className="fade border-0 p-0" id="switcher-profile" role="tabpanel" aria-labelledby="switcher-profile-tab" tabIndex={0}>
                    <div>
                        <div className="theme-colors">
                            <p className="switcher-style-head">Menu Colors:</p>
                            <div className="d-flex switcher-style pb-2">
                                <div className="form-check switch-select me-3">
                                <OverlayTrigger placement="top" overlay={<Tooltip>Light Menu</Tooltip>}>
                                    <input className="form-check-input color-input color-white" type="radio" name="menu-colors"
                                        id="switcher-menu-light"checked={local_varaiable.dataMenuStyles == "light"} onChange={_e => { }}
                                         onClick={() => switcherdata.lightMenu(ThemeChanger)}/>
                                 </OverlayTrigger>
                                </div>
                                <div className="form-check switch-select me-3">
                                <OverlayTrigger placement="top" overlay={<Tooltip>Dark Menu</Tooltip>}>
                                    <input className="form-check-input color-input color-dark"
                                        data-bs-placement="top" title="Dark Menu" type="radio" name="menu-colors"
                                        id="switcher-menu-dark"  checked={local_varaiable.dataMenuStyles == "dark"} onChange={_e => { }}
                                        onClick={() => switcherdata.darkMenu(ThemeChanger)} />
                                 </OverlayTrigger>
                                </div>
                                <div className="form-check switch-select me-3">
                                <OverlayTrigger placement="top" overlay={<Tooltip>Color Menu</Tooltip>}>
                                    <input className="form-check-input color-input color-primary"
                                        data-bs-placement="top" title="Color Menu" type="radio" name="menu-colors"
                                        id="switcher-menu-primary"    checked={local_varaiable.dataMenuStyles == "color"} onChange={_e => { }}
                                        onClick={() => switcherdata.colorMenu(ThemeChanger)}   />
                                </OverlayTrigger>
                                </div>
                                <div className="form-check switch-select me-3">
                                <OverlayTrigger placement="top" overlay={<Tooltip>Gradient Menu</Tooltip>}>
                                    <input className="form-check-input color-input color-gradient"
                                        data-bs-placement="top" title="Gradient Menu" type="radio" name="menu-colors"
                                        id="switcher-menu-gradient"    checked={local_varaiable.dataMenuStyles == "gradient"} onChange={_e => { }}
                                        onClick={() => switcherdata.gradientMenu(ThemeChanger)} />
                                </OverlayTrigger>
                                </div>
                                <div className="form-check switch-select me-3">
                                <OverlayTrigger placement="top" overlay={<Tooltip>Transparent Menu</Tooltip>}>
                                    <input className="form-check-input color-input color-transparent"
                                     data-bs-placement="top" title="Transparent Menu"
                                        type="radio" name="menu-colors" id="switcher-menu-transparent"  checked={local_varaiable.dataMenuStyles == "transparent"} onChange={_e => { }}
                                        onClick={() => switcherdata.transparentMenu(ThemeChanger)} />
                                 </OverlayTrigger>
                                </div>
                            </div>
                            <div className="px-4 pb-3 text-muted fs-11">Note:If you want to change color Menu dynamically change from below Theme Primary color picker</div>
                        </div>
                        <div className="theme-colors">
                            <p className="switcher-style-head">Header Colors:</p>
                            <div className="d-flex switcher-style pb-2">
                                <div className="form-check switch-select me-3">
                                <OverlayTrigger placement="top" overlay={<Tooltip>Light Header</Tooltip>}>
                                    <input className="form-check-input color-input color-white"
                                        data-bs-placement="top" title="Light Header" type="radio" name="header-colors"
                                        id="switcher-header-light"  checked={local_varaiable.dataHeaderStyles == "light"} onChange={_e => { }}
                                        onClick={() => switcherdata.lightHeader(ThemeChanger)} />
                                </OverlayTrigger>
                                </div>
                                <div className="form-check switch-select me-3">
                                <OverlayTrigger placement="top" overlay={<Tooltip>Dark Header</Tooltip>}>
                                    <input className="form-check-input color-input color-dark"
                                        data-bs-placement="top" title="Dark Header" type="radio" name="header-colors"
                                        id="switcher-header-dark"  checked={local_varaiable.dataHeaderStyles == "dark"} onChange={_e => { }}
                                        onClick={() => switcherdata.darkHeader(ThemeChanger)}/>
                                  </OverlayTrigger>
                                </div>
                                <div className="form-check switch-select me-3">
                                <OverlayTrigger placement="top" overlay={<Tooltip>Color Header</Tooltip>}>
                                    <input className="form-check-input color-input color-primary"
                                        data-bs-placement="top" title="Color Header" type="radio" name="header-colors"
                                        id="switcher-header-primary" checked={local_varaiable.dataHeaderStyles == "color"} onChange={_e => { }}
                                        onClick={() => switcherdata.colorHeader(ThemeChanger)} />
                                </OverlayTrigger>
                                </div>
                                <div className="form-check switch-select me-3">
                                <OverlayTrigger placement="top" overlay={<Tooltip>Gradient Header</Tooltip>}>
                                    <input className="form-check-input color-input color-gradient"
                                        data-bs-placement="top" title="Gradient Header" type="radio" name="header-colors"
                                        id="switcher-header-gradient" checked={local_varaiable.dataHeaderStyles == "gradient"} onChange={_e => { }}
                                        onClick={() => switcherdata.gradientHeader(ThemeChanger)}  />
                                  </OverlayTrigger>
                                </div>
                                <div className="form-check switch-select me-3">
                                <OverlayTrigger placement="top" overlay={<Tooltip>Transparent Header</Tooltip>}>
                                    <input className="form-check-input color-input color-transparent"
                                        data-bs-placement="top" title="Transparent Header" type="radio" name="header-colors"
                                        id="switcher-header-transparent"  checked={local_varaiable.dataHeaderStyles == "transparent"} onChange={_e => { }}
                                        onClick={() => switcherdata.transparentHeader(ThemeChanger)}/>
                                  </OverlayTrigger>
                                </div>
                            </div>
                            <div className="px-4 pb-3 text-muted fs-11">Note:If you want to change color Header dynamically change from below Theme Primary color picker</div>
                        </div>
                        <div className="theme-colors">
                            <p className="switcher-style-head">Theme Primary:</p>
                            <div className="d-flex flex-wrap align-items-center switcher-style">
                                <div className="form-check switch-select me-3">
                                    <input className="form-check-input color-input color-primary-1" type="radio"
                                        name="theme-primary" id="switcher-primary" checked={local_varaiable.colorPrimaryRgb == "106, 91, 204"} onChange={(_e) => { }}
                                        onClick={() => switcherdata.primaryColor1(ThemeChanger)}  />
                                </div>
                                <div className="form-check switch-select me-3">
                                    <input className="form-check-input color-input color-primary-2" type="radio"
                                        name="theme-primary" id="switcher-primary1"  checked={local_varaiable.colorPrimaryRgb == "100, 149, 237"} onChange={(_e) => { }}
                                        onClick={() => switcherdata.primaryColor2(ThemeChanger)}/>
                                </div>
                                <div className="form-check switch-select me-3">
                                    <input className="form-check-input color-input color-primary-3" type="radio" name="theme-primary"
                                        id="switcher-primary2"  checked={local_varaiable.colorPrimaryRgb == "0, 123, 167"} onChange={(_e) => { }}
                                        onClick={() => switcherdata.primaryColor3(ThemeChanger)}/>
                                </div>
                                <div className="form-check switch-select me-3">
                                    <input className="form-check-input color-input color-primary-4" type="radio" name="theme-primary"
                                        id="switcher-primary3"  checked={local_varaiable.colorPrimaryRgb == "10, 180, 255"} onChange={(_e) => { }}
                                        onClick={() => switcherdata.primaryColor4(ThemeChanger)}/>
                                </div>
                                <div className="form-check switch-select me-3">
                                    <input className="form-check-input color-input color-primary-5" type="radio" name="theme-primary"
                                        id="switcher-primary4" checked={local_varaiable.colorPrimaryRgb == "46, 81, 145"} onChange={(_e) => { }}
                                        onClick={() => switcherdata.primaryColor5(ThemeChanger)}/>
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
                        <div className="theme-colors">
                            <p className="switcher-style-head">Theme Background:</p>
                            <div className="d-flex flex-wrap align-items-center switcher-style">
                                <div className="form-check switch-select me-3">
                                    <input className="form-check-input color-input color-bg-1" type="radio"
                                        name="theme-background" id="switcher-background"  checked={local_varaiable.bodyBg1 == "49, 63, 141"}
                                        onClick={() => switcherdata.backgroundColor1(ThemeChanger)} onChange={(_e) => { }}/>
                                </div>
                                <div className="form-check switch-select me-3">
                                    <input className="form-check-input color-input color-bg-2" type="radio"
                                        name="theme-background" id="switcher-background1" checked={local_varaiable.bodyBg1 == "46, 94, 184"}
                                        onClick={() => switcherdata.backgroundColor2(ThemeChanger)} onChange={(_e) => { }}   />
                                </div>
                                <div className="form-check switch-select me-3">
                                    <input className="form-check-input color-input color-bg-3" type="radio" name="theme-background"
                                        id="switcher-background2" checked={local_varaiable.bodyBg1 == "23, 74, 105"}
                                        onClick={() => switcherdata.backgroundColor3(ThemeChanger)} onChange={(_e) => { }}  />
                                </div>
                                <div className="form-check switch-select me-3">
                                    <input className="form-check-input color-input color-bg-4" type="radio"
                                        name="theme-background" id="switcher-background3" onClick={() => switcherdata.backgroundColor4(ThemeChanger)} onChange={(_e) => { }}
                                        checked={local_varaiable.bodyBg1 == "34, 120, 174"}  />
                                </div>
                                <div className="form-check switch-select me-3">
                                    <input className="form-check-input color-input color-bg-5" type="radio"
                                        name="theme-background" id="switcher-background4" onClick={() => switcherdata.backgroundColor5(ThemeChanger)} onChange={(_e) => { }}
                                        checked={local_varaiable.bodyBg1 == "12, 23, 91"}  />
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
                                                <switcherdata.Themebackgroundcolor theme={local_varaiable} actionfunction={ThemeChanger} />
                                            </Button>

                                        </div>
                                    </div>
								</div>
                            </div>
                        </div>
                        <div className="menu-image mb-3">
                            <p className="switcher-style-head">Menu With Background Image:</p>
                            <div className="d-flex flex-wrap align-items-center switcher-style">
                                <div className="form-check switch-select m-2">
                                    <input className="form-check-input bgimage-input bg-img1" type="radio"
                                        name="menu-background" id="switcher-bg-img" checked={local_varaiable.bgImg == "bgimg1"} onChange={(_e) => { }} 
                                        onClick={() => switcherdata.bgImage1(ThemeChanger)}  />
                                </div>
                                <div className="form-check switch-select m-2">
                                    <input className="form-check-input bgimage-input bg-img2" type="radio"
                                        name="menu-background" id="switcher-bg-img1" checked={local_varaiable.bgImg == "bgimg2"} onChange={(_e) => { }}
                                        onClick={() => switcherdata.bgImage2(ThemeChanger)}  />
                                </div>
                                <div className="form-check switch-select m-2">
                                    <input className="form-check-input bgimage-input bg-img3" type="radio" name="menu-background" checked={local_varaiable.bgImg == "bgimg3"} onChange={(_e) => { }}
										onClick={() => switcherdata.bgImage3(ThemeChanger)}
                                        id="switcher-bg-img2"/>
                                </div>
                                <div className="form-check switch-select m-2">
                                    <input className="form-check-input bgimage-input bg-img4" type="radio" 
                                        name="menu-background" id="switcher-bg-img3" checked={local_varaiable.bgImg == "bgimg4"} onChange={(_e) => { }}
                                        onClick={() => switcherdata.bgImage4(ThemeChanger)}  />
                                </div>
                                <div className="form-check switch-select m-2">
                                    <input className="form-check-input bgimage-input bg-img5" type="radio"
                                        name="menu-background" id="switcher-bg-img4" checked={local_varaiable.bgImg == "bgimg5"} onChange={(_e) => { }}
                                        onClick={() => switcherdata.bgImage5(ThemeChanger)}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tab.Pane>
                </Tab.Content>
                <div className="d-flex justify-content-between canvas-footer flex-wrap"> 
                    <Link scroll={false} href="#!" id="reset-all" onClick={() => switcherdata.Reset(ThemeChanger)} className="w-100 btn btn-danger m-1">Reset</Link>
              </div>
        </div>
        </Tab.Container>
        </div>
    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  local_varaiable: state
})

export default connect(mapStateToProps, { ThemeChanger })(Switcher);