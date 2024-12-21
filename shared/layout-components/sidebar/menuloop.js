import { ThemeChanger } from "../../redux/action";
import Link from "next/link";
import { Fragment } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { connect } from "react-redux";

function Menuloop({ local_varaiable ,MenuItems, toggleSidemenu, level , HoverToggleInnerMenuFn}) {

  const handleClick = (event) => {
		// Your logic here
		event.preventDefault(); // Prevents the default anchor behavior (navigation)
		// ... other logic you want to perform on click
	};
  function icontextCloseFn() {
    let html = document.documentElement;
    if (html.getAttribute("data-toggled") === "icon-text-close") {
      html.removeAttribute("data-icon-text");
    }
  }
  return (
    <Fragment>
      <Link href="#!" scroll={false} className={`side-menu__item ${MenuItems?.selected ? "active" : ""}`}
        onClick={(event) => { event.preventDefault(); toggleSidemenu(event, MenuItems); }} onMouseEnter={ (event) =>HoverToggleInnerMenuFn(event, MenuItems)}>
          <i className="ri-arrow-down-s-line side-menu__angle"></i>
           <OverlayTrigger placement="right"  overlay={<Tooltip id="button-tooltip" >{MenuItems.title}</Tooltip>}>
              <div className={`${local_varaiable?.dataVerticalStyle == 'doublemenu' ? '' : 'd-none'}`}>
                {MenuItems.icon}
              </div>
              </OverlayTrigger>
            
            {local_varaiable?.dataVerticalStyle != "doublemenu" ? MenuItems.icon :""}
          <span className={`${level == 1 ? "side-menu__label" : ""}`}> {MenuItems.title} {MenuItems.badgetxt ? (<span className={MenuItems.class}> {MenuItems.badgetxt} </span>
        ) : (
          ""
        )}
        </span>
      </Link>
      <ul className={`slide-menu child${level}  ${MenuItems.active ? 'double-menu-active' : ''} ${MenuItems?.dirchange ? "force-left" : ""} `} style={MenuItems.active ? { display: "block" } : { display: "none" }} onClick={icontextCloseFn}>
        {level <= 1 ? <li className="slide side-menu__label1">
          <Link href="#!" scroll={false}>{MenuItems.title}</Link>
        </li> : ""}
        {MenuItems.children.map((firstlevel, index) =>
          <li className={`${firstlevel.menutitle ? 'slide__category' : ''} ${firstlevel?.type == 'empty' ? 'slide' : ''} ${firstlevel?.type == 'link' ? 'slide' : ''} ${firstlevel?.type == 'sub' ? 'slide has-sub' : ''} ${firstlevel?.active ? 'open' : ''} ${firstlevel?.selected ? 'active' : ''}`} key={index}>
            {firstlevel.type === "link" ?
              <Link href={firstlevel.path} className={`side-menu__item ${firstlevel.selected ? 'active' : ''}`}>{firstlevel.icon}
                <span className=""> {firstlevel.title} {firstlevel.badgetxt ? (<span className={firstlevel.class}> {firstlevel.badgetxt}</span>
                ) : (
                  ""
                )}
                </span>
              </Link>
              : ""}
            {firstlevel.type === "empty" ?
              <Link href="#!" className='side-menu__item' onClick={handleClick}> {firstlevel.icon}<span className=""> {firstlevel.title} {firstlevel.badgetxt ? (<span className={firstlevel.class}> {firstlevel.badgetxt} </span>
              ) : (
                ""
              )}
              </span>
              </Link>
              : ""}
            {firstlevel.type === "sub" ?
              <Menuloop MenuItems={firstlevel} toggleSidemenu={toggleSidemenu} HoverToggleInnerMenuFn={HoverToggleInnerMenuFn} level={level + 1} />
              : ''}

          </li>
        )}

      </ul>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
	local_varaiable: state
});

export default connect(mapStateToProps, { ThemeChanger })(Menuloop);
