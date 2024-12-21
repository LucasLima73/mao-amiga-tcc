"use client"
import React, { memo} from 'react'
import { connect } from 'react-redux';
import { ThemeChanger } from '../../shared/redux/action';

function Layout({children, local_varaiable, ThemeChanger}) {
  const customstyles =
  {
    ...(local_varaiable.colorPrimaryRgb !== '' && { '--primary-rgb': local_varaiable.colorPrimaryRgb }),
    ...(local_varaiable.colorPrimary !== '' && { '--primary': local_varaiable.colorPrimary }),
    ...(local_varaiable.bodyBg1 !== '' && { '--body-bg-rgb': local_varaiable.bodyBg1 }),
    ...(local_varaiable.bodyBg2 !== '' && { '--body-bg-rgb2': local_varaiable.bodyBg2 }),
    ...(local_varaiable.Light !== '' && { '--light-rgb': local_varaiable.bodyBg2 }),
    ...(local_varaiable.Formcontrol !== '' && { '--form-control-bg': `rgb(${local_varaiable.bodyBg2})` }),
    ...(local_varaiable.inputBorder !== '' && { '--input-border': `rgb(${local_varaiable.inputBorder})` }),
    ...(local_varaiable.Graycolor !== '' && { '--gray-3': `rgb(${local_varaiable.Graycolor})` }),
  };


  return (
    <>
         <html
            lang='en'
            suppressHydrationWarning={true} 
            dir={local_varaiable.dir}
            data-theme-mode={local_varaiable.dataThemeMode}
            data-header-styles={local_varaiable.dataHeaderStyles}
            data-vertical-style={local_varaiable.dataVerticalStyle}
            data-nav-layout={local_varaiable.dataNavLayout}
            data-menu-styles={local_varaiable.dataMenuStyles}
            data-toggled={local_varaiable.toggled}
            data-nav-style={local_varaiable.dataNavStyle}
            data-page-style={local_varaiable.dataPageStyle}
            data-width={local_varaiable.dataWidth}
            data-menu-position={local_varaiable.dataMenuPosition}
            data-header-position={local_varaiable.dataHeaderPosition}
            data-icon-overlay={local_varaiable.iconOverlay}
            data-bg-img={local_varaiable.bgImg}
            data-icon-text={local_varaiable.iconText}

            //Styles
            style={customstyles}>
              <head>
              <link href="https://cdn.jsdelivr.net/npm/dragula@3.7.3/dist/dragula.min.css" rel="stylesheet"/>
              <meta name="keywords" content="nextjs template, nextjs dashboard, nextjs admin template, admin template, admin, reactbootstrap, typescript, firebase nextjs, react bootstrap, dashboard, app router, nextjs, nextjs template, admin dashboard template, router admin" />
              </head>
             <body className={`${local_varaiable.body ? local_varaiable.body : ''}`}>
              {children}
              <script src="https://cdn.jsdelivr.net/npm/dragula@3.7.3/dist/dragula.min.js"></script>
             </body>
          </html>
    </>
  )
}

const mapStateToProps = (state) => ({
  local_varaiable: state
});

export default memo(connect(mapStateToProps, {ThemeChanger})(Layout));