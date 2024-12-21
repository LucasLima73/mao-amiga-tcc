export const input1 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="row gy-4">
<Col xl={4} lg={6} md={6} sm={12}>
<p className="mb-2 text-muted">Basic Input:</p>
<Form.Control type="text" id="input" />
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
<Form.Label htmlFor="input-label">Form Input With Label</Form.Label>
<Form.Control type="text" id="input-label" />
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
<Form.Label htmlFor="input-placeholder">Form Input With Placeholder</Form.Label>
<Form.Control type="text" id="input-placeholder" placeholder="Placeholder" />
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
<Form.Label htmlFor="input-text">Type Text</Form.Label>
<Form.Control type="text" id="input-text" placeholder="Text" />
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
<Form.Label htmlFor="input-number">Type Number</Form.Label>
<Form.Control type="number" id="input-number" placeholder="Number" />
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
<Form.Label htmlFor="input-password">Type Password</Form.Label>
<Form.Control type="password" id="input-password" placeholder="Password" />
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
<Form.Label htmlFor="input-email">Type Email</Form.Label>
<Form.Control type="email" id="input-email" placeholder="Email@xyz.com" />
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
<Form.Label htmlFor="input-tel">Type Tel</Form.Label>
<Form.Control type="tel" id="input-tel" placeholder="+1100-2031-1233" />
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
<Form.Label htmlFor="input-date">Type Date</Form.Label>
<Form.Control type="date" id="input-date" />
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
<Form.Label htmlFor="input-week">Type Week</Form.Label>
<Form.Control type="week" className="form-control" id="input-week" />
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
<Form.Label htmlFor="input-month">Type Month</Form.Label>
<Form.Control type="month" id="input-month" />
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
<Form.Label htmlFor="input-time">Type Time</Form.Label>
<Form.Control type="time" id="input-time" />
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
<Form.Label htmlFor="input-datetime-local">Type datetime-local</Form.Label>
<Form.Control type="datetime-local" id="input-datetime-local" />
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
<Form.Label htmlFor="input-search">Type Search</Form.Label>
<Form.Control type="search" id="input-search" placeholder="Search" />
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
<Form.Label htmlFor="input-submit">Type Submit</Form.Label>
<Form.Control type="submit" id="input-submit" defaultValue="Submit" />
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
<Form.Label htmlFor="input-reset">Type Reset</Form.Label>
<Form.Control type="reset" id="input-reset" />
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
<Form.Label htmlFor="input-button">Type Button</Form.Label>
<Form.Control type="button" className="form-control btn btn-primary" id="input-button" defaultValue="Button" />
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
<Row>
    <Col xl={3}>
        <Form.Label>Type Color</Form.Label>
        <Form.Control className="form-control form-input-color m-0" type="color" defaultValue="#136bd0" />
    </Col>
    <Col xl={5}>
        <div className="ps-0">
            <p className="mb-3 px-0 text-muted">Type Checkbox</p>
            <Form.Check className="ms-2" type="checkbox"
                defaultValue="" defaultChecked />
        </div>

    </Col>
    <Col xl={4}>
        <div className="ps-0">
            <p className="mb-3 px-0 text-muted">Type Radio</p>
            <Form.Check
                className="ms-2" type="radio" defaultChecked />
        </div>
    </Col>
</Row>
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
<Form.Label htmlFor="input-file">Type File</Form.Label>
<Form.Control type="file" id="input-file" />
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
<Form.Label>Type Url</Form.Label>
<Form.Control type="url" name="website" placeholder="http://example.com" />
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
<Form.Label htmlFor="input-disabled">Type Disabled</Form.Label>
<Form.Control type="text" id="input-disabled" placeholder="Disabled input" disabled />
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
<Form.Label htmlFor="input-readonlytext">Input Readonly Text</Form.Label>
<Form.Control type="text" readOnly className="form-control-plaintext border" id="input-readonlytext" defaultValue="email@example.com" />
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
<Form.Label htmlFor="disabled-readonlytext">Disabled Readonly Input</Form.Label>
<Form.Control type="text" defaultValue="Disabled readonly input" id="disabled-readonlytext" aria-label="Disabled input example" disabled readOnly />
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
<Form.Label>Type Readonly Input</Form.Label>
<Form.Control type="text" defaultValue="Readonly input here..." aria-label="readonly input example" readOnly />
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
<Form.Label htmlFor="text-area">Textarea</Form.Label>
<Form.Control as="textarea" id="text-area" rows={1} />
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
<Form.Label htmlFor="input-DataList">Datalist example</Form.Label>
<Form.Control list="datalistOptions" id="input-DataList" placeholder="Type to search..." />
<datalist id="datalistOptions">
    <option defaultValue="San Francisco">
    </option>
    <option defaultValue="New York">
    </option>
    <option defaultValue="Seattle">
    </option>
    <option defaultValue="Los Angeles">
    </option>
    <option defaultValue="Chicago">
    </option>
</datalist>
</Col>
</div>
// End Prism Code//`;

export const input2 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="row gy-3">
<Col xl={12}>
    <Form.Label htmlFor="input-noradius">Input With No Radius</Form.Label>
    <Form.Control type="text" className="form-control rounded-0" id="input-noradius" placeholder="No Radius" />
</Col>
<Col xl={12}>
    <Form.Label htmlFor="input-rounded">Input With Radius</Form.Label>
    <Form.Control type="text" id="input-rounded" placeholder="Default Radius" />
</Col>
<Col xl={12}>
    <Form.Label htmlFor="input-rounded-pill">Rounded Input</Form.Label>
    <Form.Control type="text" className="form-control rounded-pill" id="input-rounded-pill" placeholder="Rounded" />
</Col>
</div>
// End Prism Code//`;

export const input3 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="row gy-3">
<Col xl={12}>
    <Form.Label htmlFor="input-rounded1">Default</Form.Label>
    <Form.Control type="text" id="input-rounded1" placeholder="Default" />
</Col>
<Col xl={12}>
    <Form.Label htmlFor="input-rounded2">Dotted Input</Form.Label>
    <Form.Control type="text" className="form-control border-dotted" id="input-rounded2" placeholder="Dotted" />
</Col>
<Col xl={12}>
    <Form.Label htmlFor="input-rounded3">Dashed Input</Form.Label>
    <Form.Control type="text" className="form-control border-dashed" id="input-rounded3" placeholder="Dashed" />
</Col>
</div>
// End Prism Code//`;

export const input4 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
    <Form.Control className="form-control-sm mb-3" type="text"
    placeholder=".form-control-sm" aria-label=".form-control-sm example" />
    <Form.Control className="mb-3" type="text" placeholder="Default input/"
    aria-label="default input example" />
    <Form.Control className="form-control-lg" type="text"
    placeholder=".form-control-lg" aria-label=".form-control-lg example" />
// End Prism Code//`;

export const input5 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <Form>
<div className="mb-3">
    <Form.Label htmlFor="exampleInputEmail1">Email
        address</Form.Label>
    <Form.Control type="email" id="exampleInputEmail1/"
        aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll
        never share your email
        with
        anyone else.</div>
</div>
<div className="mb-3">
    <Form.Label htmlFor="exampleInputPassword1">Password</Form.Label>
    <Form.Control type="password" id="exampleInputPassword1" />
</div>
<div className="mb-3">
    <Form.Check type="checkbox" label="Check me out" className="" id="exampleCheck1" />
</div>
<Button variant='primary' type="submit" className="">Submit</Button>
</Form>
// End Prism Code//`

export const input6 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
    <Form.Label htmlFor="inputPassword5">Password</Form.Label>
    <Form.Control type="password" id="inputPassword5" className="form-control/"
        aria-describedby="passwordHelpBlock" />
    <div id="passwordHelpBlock" className="form-text">
        Your password must be 8-20 characters long, contain letters and
        numbers,
        and
        must not contain spaces, special characters, or emoji.
    </div>
// End Prism Code//`

export const input7 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="row g-3 align-items-center">
<div className="col-auto">
    <Form.Label htmlFor="inputPassword6" className="col-form-label">Password</Form.Label>
</div>
<div className="col-auto">
    <Form.Control type="password" id="inputPassword6"
        aria-describedby="passwordHelpInline" />
</div>
<div className="col-auto">
    <span id="passwordHelpInline" className="form-text">
        Must be 8-20 characters long.
    </span>
</div>
</div>
// End Prism Code//`


export const input8 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<Form>
<fieldset disabled>
<legend>Disabled fieldset example</legend>
<div className="mb-3">
    <Form.Label htmlFor="disabledTextInput">Disabled
        input</Form.Label>
    <Form.Control type="text" id="disabledTextInput"
        placeholder="Disabled input" />
</div>
<div className="mb-3">
    <Form.Label htmlFor="disabledSelect">Disabled select
        menu</Form.Label>
    <select id="disabledSelect" className="form-select">
        <option>Disabled select</option>
    </select>
</div>
<div className="mb-3">
    <div className="">
        <Form.Check type="checkbox" label="Can't check this" />
    </div>
</div>
<Button variant='' type="submit" className="btn btn-primary">Submit</Button>
</fieldset>
</Form>

// End Prism Code//`


//Checks & Radios

export const radio1 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<Form.Check label="Default checkbox" />
<Form.Check defaultChecked label="Checked checkbox" />
// End Prism Code//`

export const radio2 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <Form.Check disabled label="Disabled checkbox" />
 <Form.Check disabled defaultChecked label="Disabled checked checkbox" />
// End Prism Code//`

export const radio3 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<Form.Check type="radio" label="Default radio" name="example-radios1" />
<Form.Check type="radio" defaultChecked label="Default checked radio" name="example-radios1" />
// End Prism Code//`

export const radio4 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <Form.Check type="radio" disabled label="Disabled radio" />
<Form.Check type="radio" disabled defaultChecked label="Disabled checked radio" />
// End Prism Code//`

export const radio5 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
    <Form.Check label="Default checkbox" />
    <Form.Check disabled label="Disabled checkbox" />
    <Form.Check type="radio" defaultChecked label="Default radio" />
    <Form.Check type="radio" disabled label="Disabled radio" />
// End Prism Code//`

export const radio6 =`<div className="form-check form-switch">
    <Form.Check type="switch" label="Default switch checkbox input" />
    <Form.Check type="switch" defaultChecked label="Checked switch checkbox input" />
    <Form.Check type="switch" disabled label="Disabled switch checkbox input" />
    <Form.Check type="switch" disabled defaultChecked label="Disabled checked switch checkbox input" />
// End Prism Code//`;

export const radio7 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<Form.Check type="checkbox" defaultChecked label="Default" />
<Form.Check className="form-check-md d-flex align-items-center"
type="checkbox" defaultChecked id="checkebox-md" label="Medium" />
<Form.Check className="form-check-lg d-flex align-items-center"
type="checkbox" defaultChecked id="checkebox-lg" label="Large" />
// End Prism Code//`

export const radio8 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
    <Form.Check type="radio" label="Default" name="example-radios" />
    <Form.Check type="radio" className="form-check-md" id="Radio-md" name="example-radios" label="Medium" />
    <Form.Check type="radio" className="form-check-lg" name="example-radios"
        defaultChecked id="Radio-lg" label="Large" />
// End Prism Code//`

export const radio9 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<Form.Check type="switch" label="Default" />
<Form.Check type="switch" className="form-check-md form-switch" id="switch-md" label="Medium" />
<Form.Check type="switch" className="form-check-lg form-switch"
id="switch-lg" label="Large" />
// End Prism Code//`

export const radio10 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<Form.Check className="form-check-inline" type="checkbox" label="1" />
<Form.Check className="form-check-inline" type="checkbox" label="2" />
<Form.Check className="form-check-inline" disabled type="checkbox" label="3 (disabled)" />
<Form.Check className="form-check-inline" type="radio" label="1" name='radio1' />
<Form.Check className="form-check-inline" type="radio" label="2" name='radio1' />
<Form.Check className="form-check-inline" disabled type="radio" label="3 (disabled)" />
// End Prism Code//`

export const radio11 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="d-flex">
    <Form.Check className="me-4" type="checkbox" />
    <Form.Check className="" type="radio" />
</div>
// End Prism Code//`

export const radio12 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<Form.Check className="form-check-reverse mb-3" type="checkbox" label="Reverse checkbox" />
<Form.Check className="form-check-reverse mb-3" type="checkbox" disabled label="Disabled reverse checkbox" />
<Form.Check className="form-check-reverse mb-3" type="switch" label="Reverse switch checkbox input" />
// End Prism Code//`

export const radio13 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <Form.Control type="checkbox" className="btn-check" id="btn-check-outlined" />
<Button variant='outline-primary' className="mb-3">Single toggle</Button><br />
<Form.Check type="checkbox" className="btn-check" id="btn-check-2-outlined" defaultChecked />
<Button variant='outline-secondary' className=" mb-3">Checked</Button><br />
<Form.Check type="radio" className="btn-check" name="options-outlined" id="success-outlined"
    defaultChecked />
<Button variant='outline-success' className="m-1">Checked success
    radio</Button>
<Form.Check type="radio" className="btn-check" name="options-outlined" id="danger-outlined"
/>
<Button variant='outline-danger' className="m-1" >Danger radio</Button>
// End Prism Code//`

export const radio14 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <Form.Check type="radio" className="btn-check" name="options" id="option1" defaultChecked />
<Button className="btn btn-primary m-1">Checked</Button>
<Form.Check type="radio" className="btn-check" name="options" id="option2" />
<Button className="btn btn-primary m-1">Radio</Button>
<Form.Check type="radio" className="btn-check" name="options" id="option3" disabled />
<Button disabled className="btn btn-primary m-1">Disabled</Button>
<Form.Check type="radio" className="btn-check" name="options" id="option4" />
<Button className="btn btn-primary m-1">Radio</Button>
// End Prism Code//`

export const radio15 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<Form.Check type="checkbox" className="btn-check" id="btn-check" />
<Button className="btn btn-primary m-1">Single toggle</Button>
<Form.Check type="checkbox" className="btn-check" id="btn-check-2" defaultChecked />
<Button className="btn btn-primary m-1">Checked</Button>
<Form.Check type="checkbox" className="btn-check" id="btn-check-3" disabled />
<Button disabled className="btn btn-primary m-1">Disabled</Button>
// End Prism Code//`

export const radio16 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 {Checkdata1.map((idx) => (
<div className={"form-check {idx.class1}"} key={Math.random()}>
    <input id={idx.id} className={"form-check-input form-checked-{idx.class2}"}
        type="checkbox" defaultChecked />
    <label className=''>{idx.text}</label>
</div>
))}
// End Prism Code//`

export const radio17 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
{Checkdata1.map((idx) => (
<div className={"form-check {idx.class1}"} key={Math.random()}>
    <input id={idx.id} className={"form-check-input form-checked-outline form-checked-{idx.class2}"}
        type="checkbox" defaultChecked />
    <label className=''>{idx.text}</label>
</div>
))}
// End Prism Code//`

export const radio18 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
{Checkdata1.map((idx) => (
<div className={"form-check {idx.class1}"} key={Math.random()}>
    <input id={idx.id} className={"form-check-input form-checked form-checked-{idx.class2}}
        type="radio" defaultChecked />
    <label className=''>{idx.text}</label>
</div>
))}
// End Prism Code//`

export const radio19 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 {Checkdata1.map((idx) => (
<div className={"form-check {idx.class1}"} key={Math.random()}>
<input id={idx.id} className={"form-check-input form-checked-outline form-checked-{idx.class2}"}
type="radio" defaultChecked />
<label className=''>{idx.text}</label>
</div>
))}
// End Prism Code//`

export const radio20 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
  {Checkdata1.map((idx) => (
    <div className={"form-check form-switch {idx.class1}"} key={Math.random()}>
        <input id={idx.id} className={"form-check-input form-checked-{idx.class2}"}
            type="checkbox" defaultChecked />
        <label className=''>{idx.text}</label>
    </div>
))}
// End Prism Code//`

export const radio21 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <Row className="row gy-1">
<Col xl={4}>
    <div className={toggle  {primary1}} onClick={() => { primary1 == "on" ? setprimary1("off") : setprimary1("on"); }}>
        <span></span>
    </div>
</Col>
<Col xl={4}>
    <div className={toggle mb-3  toggle-secondary {secondary1}} onClick={() => { secondary1 == "on" ? setsecondary1("off") : setsecondary1("on"); }}>
        <span></span>
    </div>
</Col>
<Col xl={4}>
    <div className={toggle mb-3  toggle-warning {warning1}} onClick={() => { warning1 == "on" ? setwarning1("off") : setwarning1("on"); }} >
        <span></span>
    </div>
</Col>
<Col xl={4}>
    <div className={toggle mb-3  toggle-info {info1}} onClick={() => { info1 == "on" ? setinfo1("off") : setinfo1("on"); }} >
        <span></span>
    </div>
</Col>
<Col xl={4}>
    <div className={toggle mb-3  toggle-success {success1}} onClick={() => { success1 == "on" ? setsuccess1("off") : setsuccess1("on"); }} >
        <span></span>
    </div>
</Col>
<Col xl={4}>
    <div className={toggle mb-3  toggle-danger {danger1}} onClick={() => { danger1 == "on" ? setdanger1("off") : setdanger1("on"); }} >
        <span></span>
    </div>
</Col>
<Col xl={4}>
    <div className={toggle mb-3  toggle-light {light1}} onClick={() => { light1 == "on" ? setlight1("off") : setlight1("on"); }} >
        <span></span>
    </div>
</Col>
<Col xl={4}>
    <div className={toggle ms-sm-2  toggle-dark {dark1}} onClick={() => { dark1 == "on" ? setdark1("off") : setdark1("on"); }}>
        <span></span>
    </div>
</Col>
</Row>
// End Prism Code//`

export const radio22 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="row gy-1">
<Col xl={4}>
    <div className="custom-toggle-switch d-flex align-items-center mb-4">
        <Form.Control id="toggleswitchPrimary" name="toggleswitch001" type="checkbox" defaultChecked />
        <Form.Label htmlFor="toggleswitchPrimary" className="m-0 label-primary"></Form.Label><span className="ms-3">Primary</span>
    </div>
</Col>
<Col xl={4}>
    <div className="custom-toggle-switch d-flex align-items-center mb-4">
        <Form.Control id="toggleswitchSecondary" name="toggleswitch001" type="checkbox" defaultChecked />
        <Form.Label htmlFor="toggleswitchSecondary" className="m-0 label-secondary"></Form.Label><span className="ms-3">Secondary</span>
    </div>
</Col>
<Col xl={4}>
    <div className="custom-toggle-switch d-flex align-items-center mb-4">
        <Form.Control id="toggleswitchWarning" name="toggleswitch001" type="checkbox" defaultChecked />
        <Form.Label htmlFor="toggleswitchWarning" className="m-0 label-warning"></Form.Label><span className="ms-3">Warning</span>
    </div>
</Col>
<Col xl={4}>
    <div className="custom-toggle-switch d-flex align-items-center mb-4">
        <Form.Control id="toggleswitchInfo" name="toggleswitch001" type="checkbox" defaultChecked />
        <Form.Label htmlFor="toggleswitchInfo" className="m-0 label-info"></Form.Label><span className="ms-3">Info</span>
    </div>
</Col>
<Col xl={4}>
    <div className="custom-toggle-switch d-flex align-items-center mb-4">
        <Form.Control id="toggleswitchSuccess" name="toggleswitch001" type="checkbox" defaultChecked />
        <Form.Label htmlFor="toggleswitchSuccess" className="m-0 label-success"></Form.Label><span className="ms-3">Success</span>
    </div>
</Col>
<Col xl={4}>
    <div className="custom-toggle-switch d-flex align-items-center mb-4">
        <Form.Control id="toggleswitchDanger" name="toggleswitch001" type="checkbox" defaultChecked />
        <Form.Label htmlFor="toggleswitchDanger" className="m-0 label-danger"></Form.Label><span className="ms-3">Danger</span>
    </div>
</Col>
<Col xl={4}>
    <div className="custom-toggle-switch d-flex align-items-center mb-4">
        <Form.Control id="toggleswitchLight" name="toggleswitch001" type="checkbox" defaultChecked />
        <Form.Label htmlFor="toggleswitchLight" className="m-0 label-light"></Form.Label><span className="ms-3">Light</span>
    </div>
</Col>
<Col xl={4}>
    <div className="custom-toggle-switch d-flex align-items-center mb-4">
        <Form.Control id="toggleswitchDark" name="toggleswitch001" type="checkbox" defaultChecked />
        <Form.Label htmlFor="toggleswitchDark" className="m-0 label-dark"></Form.Label><span className="ms-3">Dark</span>
    </div>
</Col>
</div>
// End Prism Code//`


export const radio23 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="d-flex align-items-center flex-wrap mb-3">
    <div className=""> <p className="text-muted m-0">Small size toggle switch <code>toggle-sm</code></p></div>

    <div className={"toggle  toggle-sm mb-0 {primary2}"} onClick={() => { primary2 == "on" ? setprimary2("off") : setprimary2("on"); }}>
        <span></span>
    </div>
</div>
<div className="d-flex align-items-center flex-wrap mb-3">
    <div className=""> <p className="text-muted m-0">Default toggle switch <code></code></p></div>

    <div className={"toggle mb-0  toggle-secondary {secondary2}"} onClick={() => { secondary2 == "on" ? setsecondary2("off") : setsecondary2("on"); }}>
        <span></span>
    </div>
</div>
<div className="d-flex align-items-center flex-wrap">
    <div className=""> <p className="text-muted m-0">Large size toggle switch <code>toggle-lg</code></p></div>

    <div className={"toggle toggle-lg mb-0  toggle-success {success2}"} onClick={() => { success2 == "on" ? setsuccess2("off") : setsuccess2("on"); }} >
        <span></span>
    </div>
</div>
// End Prism Code//`

export const radio24 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="d-flex align-items-center flex-wrap mb-4">
<div className=""><p className="text-muted m-0">Small size toggle switch <code>toggle-sm</code></p></div>
<div className="custom-toggle-switch toggle-sm ms-2">
    <Form.Control id="size-sm" name="toggleswitchsize" type="checkbox" defaultChecked />
    <Form.Label htmlFor="size-sm" className="label-primary m-0"></Form.Label>
</div>
</div>
<div className="d-flex align-items-center flex-wrap mb-4">
<div className=""><p className="text-muted m-0">Default toggle switch</p></div>
<div className="custom-toggle-switch ms-2">
    <Form.Control id="size-default" name="toggleswitchsize" type="checkbox" defaultChecked />
    <Form.Label htmlFor="size-default" className="label-secondary mb-1"></Form.Label>
</div>
</div>
<div className="d-sm-flex d-block align-items-center flex-wrap">
<div className="mb-sm-0 mb-2"><p className="text-muted m-0">Large size toggle switch <code>toggle-lg</code></p></div>
<div className="custom-toggle-switch toggle-lg ms-sm-2 ms-0">
    <Form.Control id="size-lg" name="toggleswitchsize" type="checkbox" defaultChecked />
    <Form.Label htmlFor="size-lg" className="label-success mb-2"></Form.Label>
</div>
</div>
// End Prism Code//`

//Range Sliders

export const range1 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<input type="range" className="form-range" id="customRange1">
// End Prism Code//`

export const range2 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<input type="range" className="form-range" id="disabledRange" disabled>
// End Prism Code//`

export const range3 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <input type="range" className="form-range" min="0" max="5" id="customRange2">
// End Prism Code//`

export const range4 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<input type="range" className="form-range" min="0" max="5" step="0.5" id="customRange3">
// End Prism Code//`;

//Color Picker

export const colorpicker1 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <input type="color" className="form-control form-control-color border-0"
  id="exampleColorInput" value="#136ad0" title="Choose your color"/>
// End Prism Code//`


// Form-Layouts

export const layout1 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="mb-3">
    <Form.Label htmlFor="form-text" className=" fs-14 text-dark">Enter name</Form.Label>
    <Form.Control type="text" className="" id="form-text" placeholder="first name" />
</div>
<div className="mb-3">
    <Form.Label htmlFor="form-password" className="fs-14 text-dark">Enter
        Password</Form.Label>
    <Form.Control type="password" className="" id="form-password" placeholder="password" />
</div>
<Form.Check className="mb-3" type="checkbox" value="" id="invalidCheck" label="Accept Policy"
    required />
<Button variant='primary' className="" type="submit">Submit</Button>
// End Prism Code//`

export const layout2 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
  <form>
<div className="row mb-3">
<Form.Label htmlFor="inputEmail3"
    className="col-sm-2 col-form-label">Email</Form.Label>
<Col sm={10}>
    <Form.Control type="email" className="form-control" id="inputEmail3" />
</Col>
</div>
<div className="row mb-3">
<Form.Label htmlFor="inputPassword3"
    className="col-sm-2 col-form-label">Password</Form.Label>
<Col sm={10}>
    <Form.Control type="password" className="form-control" id="inputPassword3" />
</Col>
</div>
<fieldset className="row mb-3">
<legend className="col-form-label col-sm-2 pt-0">Qualified</legend>
<Col sm={10}>
    <Form.Check type='radio' label='Prelims' defaultChecked />
    <Form.Check type='radio' label='Mains' disabled />
    <Form.Check type='checkbox' label='Certified' />
</Col>
</fieldset>
<Button variant='primary' type="submit" className="">Sign in</Button>
</form>
// End Prism Code//`

export const layout3 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="mb-3">
<Form.Label htmlFor="form-text1" className="fs-14 text-dark">Enter name</Form.Label>
<InputGroup>
    <InputGroup.Text className=""><i className="ri-user-line"></i></InputGroup.Text>
    <Form.Control type="text" className="" id="form-text1" placeholder="" />
</InputGroup>
</div>
<div className="mb-3">
<Form.Label htmlFor="form-password1" className="fs-14 text-dark">Enter
    Password</Form.Label>
<InputGroup>
    <InputGroup.Text className=""><i className="ri-lock-line"></i></InputGroup.Text>
    <Form.Control type="password" className="" id="form-password1" placeholder="" />
</InputGroup>
</div>
<Form.Check className='mb-3' type="checkbox" label="Accept Policy" />
<Button variant='primary' className="" type="submit">Submit</Button>
// End Prism Code//`

export const layout4 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
   <Form>
<Row className="mb-3">
    <label htmlFor="inputEmail1"
        className="col-sm-2 col-form-label">Email</label>
    <Col sm={10}>
        <InputGroup>
            <Form.Control type="email" className="form-control" id="inputEmail1" />
            <InputGroup.Text className="input-group-text">
                <i className="ri-mail-line"></i>
            </InputGroup.Text>
        </InputGroup>
    </Col>
</Row>
<Row className="row mb-3">
    <label htmlFor="inputPassword1"
        className="col-sm-2 col-form-label">Password</label>
    <Col sm={10}>
        <InputGroup>
            <Form.Control type="password" className="form-control" id="inputPassword1" />
            <InputGroup.Text className="input-group-text">
                <i className="ri-lock-line"></i>
            </InputGroup.Text>
        </InputGroup>
    </Col>
</Row>
<fieldset className="row mb-3">
    <legend className="col-form-label col-sm-2 pt-0">Qualified</legend>
    <Col sm={10}>
        <Form.Check defaultChecked type="radio" label="Prelims" name="formHorizontalRadios" id="formHorizontalRadios1" />
        <Form.Check disabled type="radio" label="Mains" name="formHorizontalRadios" id="formHorizontalRadios2" />
        <Form.Check type="checkbox" label="Certified" name="formHorizontalRadios" id="formHorizontalRadios3" />
    </Col>
</fieldset>
<Button variant='' type="submit" className="btn btn-primary">Sign in</Button>
</Form>
// End Prism Code//`

export const layout5 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <Form className="row row-cols-lg-auto g-3 align-items-center">
<div className="col-12">
<label className="visually-hidden"
    htmlFor="inlineFormInputGroupUsername">Username</label>
<InputGroup>
    <InputGroup.Text className="input-group-text">@</InputGroup.Text>
    <Form.Control type="text" className="form-control"
        id="inlineFormInputGroupUsername" placeholder="Username" />
</InputGroup>
</div>
<div className="col-12">
<label className="visually-hidden"
    htmlFor="inlineFormSelectPref">Preference</label>
<Form.Select className="form-select" id="inlineFormSelectPref" defaultValue="Choose...">
    <option >Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</Form.Select>
</div>
<div className="col-12">
<Form.Check type='checkbox' label="Remember me" />
</div>

<div className="col-12">
<Button type="submit" variant='primary' className="">Submit</Button>
</div>
</Form>
// End Prism Code//`

export const layout6 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<Row className="g-3">
<Col sm={7} className="">
<Form.Control type="text" className="" placeholder="City"
aria-label="City" />
</Col>
<div className="col-sm">
<Form.Control type="text" className="" placeholder="State"
aria-label="State" />
</div>
<div className="col-sm">
<Form.Control type="text" className="" placeholder="Zip"
aria-label="Zip" />
</div>
</Row>
// End Prism Code//`

export const layout7 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="mb-3">
<Form.Label htmlFor="formGroupExampleInput" className="">Example label</Form.Label>
<Form.Control type="text" className="" id="formGroupExampleInput"
    placeholder="Example input placeholder" />
</div>
<div className="mb-1">
<Form.Label htmlFor="formGroupExampleInput2" className="">Another label</Form.Label>
<Form.Control type="text" className="" id="formGroupExampleInput2"
    placeholder="Another input placeholder" />
</div>
// End Prism Code//`

export const layout8 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <Row className="mb-3">
<Form.Label htmlFor="colFormLabelSm" column="sm" sm={2}
className="col-sm-2 col-form-label col-form-label-sm">Email</Form.Label>
<Col sm={10}>
<Form.Control type="email" className="form-control-sm" size="sm"
    id="colFormLabelSm" placeholder="col-form-label-sm" />
</Col>
</Row>
<Row className="mb-3">
<Form.Label column="sm" sm={2} htmlFor="colFormLabel" className="col-sm-2 col-form-label">Email</Form.Label>
<Col sm={10}>
<Form.Control type="email" className="" id="colFormLabel"
    placeholder="col-form-label" />
</Col>
</Row>
<Row>
<label htmlFor="colFormLabelLg"
className="col-sm-2 col-form-label col-form-label-lg">Email</label>
<Col sm={10}>
<Form.Control type="email" className="form-control-lg" size="lg"
    id="colFormLabelLg" placeholder="col-form-label-lg" />
</Col>
</Row>
// End Prism Code//`

export const layout9 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
  <Form className="row gy-2 gx-3 align-items-center mb-4">
<Col xs="auto">
<Form.Label htmlFor="inlineFormInput" visuallyHidden>
    Name
</Form.Label>
<Form.Control
    className="mb-2"
    id="inlineFormInput"
    placeholder="Jane Doe"
/>
</Col>
<Col xs="auto">
<Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
    Username
</Form.Label>
<InputGroup className="mb-2">
    <InputGroup.Text>@</InputGroup.Text>
    <Form.Control id="inlineFormInputGroup" placeholder="Username" />
</InputGroup>
</Col>
<Col className="col-auto">
<label className="visually-hidden"
    htmlFor="autoSizingSelect">Preference</label>
<Form.Select className="form-select" id="autoSizingSelect">
    <option >Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</Form.Select>
</Col>
<Col xs="auto">
<Form.Check
    type="checkbox"
    id="autoSizingCheck"
    className="mb-2"
    label="Remember me"
/>
</Col>
<Col xs="auto">
<Button type="submit" className="mb-2">
    Submit
</Button>
</Col>
</Form>
<span className="fw-semibold mb-1 text-muted">You can then remix that once again with size-specific column
classes.</span>
<Form className="row gx-3 gy-2 align-items-center mt-0">
<Col sm={3} className="">
<label className="visually-hidden"
    htmlFor="specificSizeInputName">Name</label>
<Form.Control type="text" className="form-control" id="specificSizeInputName"
    placeholder="Jane Doe" />
</Col>
<Col sm={3} className="">
<label className="visually-hidden"
    htmlFor="specificSizeInputGroupUsername">Username</label>
<InputGroup>
    <InputGroup.Text className="input-group-text">@</InputGroup.Text>
    <Form.Control type="text" className="form-control"
        id="specificSizeInputGroupUsername" placeholder="Username" />
</InputGroup>
</Col>
<Col sm={3} className="">
<label className="visually-hidden"
    htmlFor="specificSizeSelect">Preference</label>
<Form.Select className="form-select" id="specificSizeSelect">
    <option >Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</Form.Select>
</Col>
<div className="col-auto">
<Form.Check
    type="checkbox"
    id="autoSizingCheck"
    className="mb-2"
    label="Remember me"
/>
</div>
<div className="col-auto">
<Button type="submit" className="btn btn-primary">Submit</Button>
</div>
</Form>
// End Prism Code//`

export const layout10 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<Row>
<Col md={6} className="mb-3">
<Form.Label className="">First Name</Form.Label>
<Form.Control type="text" className="form-control" placeholder="First name"
    aria-label="First name" />
</Col>
<Col md={6} className="mb-3">
<Form.Label className="">Last Name</Form.Label>
<Form.Control type="text" className="form-control" placeholder="Last name"
    aria-label="Last name" />
</Col>
<Col md={6} className="mb-3">
<Form.Label className="">Address</Form.Label>
<Row>
    <Col xl={12} className="mb-3">
        <Form.Control type="text" className="" placeholder="Street"
            aria-label="Street" />
    </Col>
    <Col xl={12} className="mb-3">
        <Form.Control type="text" className="" placeholder="Landmark"
            aria-label="Landmark" />
    </Col>
    <Col xl={6} className="mb-3">
        <Form.Control type="text" className="" placeholder="City"
            aria-label="City" />
    </Col>
    <Col xl={6} className="mb-3">
        <Form.Select id="inputState1" className="form-select">
            <option>State</option>
            <option>...</option>
        </Form.Select>
    </Col>
    <Col xl={6} className="mb-3">
        <Form.Control type="text" className="" placeholder="Postal/Zip code"
            aria-label="Postal/Zip code" />
    </Col>
    <Col xl={6} className="mb-3">
        <Form.Select id="inputCountry" className="form-select">
            <option>Country</option>
            <option>...</option>
        </Form.Select>
    </Col>
</Row>
</Col>
<Col md={6} className="mb-3">
<Row>
    <Col xl={12} className="mb-3">
        <Form.Label className="">Email</Form.Label>
        <Form.Control type="email" className="" placeholder="Email"
            aria-label="email" />
    </Col>
    <Col xl={12} className="mb-3">
        <Form.Label className="">D.O.B</Form.Label>
        <Form.Control type="date" className=""
            aria-label="dateofbirth" />
    </Col>
    <Col xl={12} className="mb-3">
        <Row>
            <Form.Label className=" mb-1">Maritial Status</Form.Label>
            <Col xl={6}>
                <Form.Check name="example-radios" type="radio" label="Married" />
            </Col>
            <Col xl={6}>
                <Form.Check name="example-radios" type="radio" label="Single" />
            </Col>
        </Row>
    </Col>
    <Col xl={12}>

    </Col>
</Row>
</Col>
<Col md={6} className="mb-3">
<Form.Label className="">Contact Number</Form.Label>
<Form.Control type="number" className="" placeholder="Phone number"
    aria-label="Phone number" />
</Col>
<Col md={6} className="mb-3">
<Form.Label className="">Alternative Contact</Form.Label>
<Form.Control type="number" className="" placeholder="Phone number"
    aria-label="Phone number" />
</Col>
<Col md={12} className="">
<Form.Check className='mb-3' type="checkbox" label="Check me out" />
</Col>
<Col md={12}>
<Button type="submit" variant='primary' className="">Sign in</Button>
</Col>
</Row>
// End Prism Code//`

export const layout11 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <Form className="row g-3 mt-0">
<Col md={6}>
    <Form.Label className="">First Name</Form.Label>
    <Form.Control type="text" className="" placeholder="First name"
        aria-label="First name" />
</Col>
<Col md={6}>
    <Form.Label className="">Last Name</Form.Label>
    <Form.Control type="text" className="" placeholder="Last name"
        aria-label="Last name" />
</Col>
<Col md={6}>
    <Form.Label htmlFor="inputEmail4" className="">Email</Form.Label>
    <Form.Control type="email" className="" id="inputEmail4" />
</Col>
<Col md={6}>
    <Form.Label htmlFor="inputPassword4" className="">Password</Form.Label>
    <Form.Control type="password" className="" id="inputPassword4" />
</Col>
<div className="col-12">
    <Form.Label htmlFor="inputAddress" className="">Address</Form.Label>
    <Form.Control type="text" className="" id="inputAddress"
        placeholder="1234 Main St" />
</div>
<div className="col-12">
    <Form.Label htmlFor="inputAddress2" className="">Address 2</Form.Label>
    <Form.Control type="text" className="" id="inputAddress2"
        placeholder="Apartment, studio, or floor" />
</div>
<Col md={6}>
    <Form.Label htmlFor="inputCity" className="">City</Form.Label>
    <Form.Control type="text" className="" id="inputCity" />
</Col>
<Col md={4}>
    <Form.Label htmlFor="inputState" className="">State</Form.Label>
    <Form.Select id="inputState" className="form-select-lg">
        <option>Choose...</option>
        <option>...</option>
    </Form.Select>
</Col>
<Col md={2}>
    <Form.Label htmlFor="inputZip" className="">Zip</Form.Label>
    <Form.Control type="text" className="form-control" id="inputZip" />
</Col>
<div className="col-12">
    <Form.Check type="checkbox" label="Check me out" />
</div>
<div className="col-12">
    <Button variant='primary' type="submit" className="">Sign in</Button>
</div>
</Form>
// End Prism Code//`

//
export const input9 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="relative">
<input type="email" className="peer py-3 pe-0 ps-8 ti-form-input rounded-none bg-transparent !border-t-transparent border-b !border-x-transparent border-b-gray-200 focus:!border-t-transparent focus:!border-x-transparent focus:!border-b-primary focus:!ring-0 focus:!ring-offset-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-white/10 dark:focus:!ring-transparent !shadow-none dark:focus:border-b-white/10" placeholder="Enter name"/>
<div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
  <svg className="flex-shrink-0 size-4 text-gray-500 dark:text-white/50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
</div>
</div>

<div className="relative">
<input type="password" className="peer py-3 pe-0 ps-8 ti-form-input rounded-none bg-transparent !border-t-transparent border-b !border-x-transparent border-b-gray-200 focus:!border-t-transparent focus:!border-x-transparent focus:!border-b-primary focus:!ring-0 focus:!ring-offset-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-white/10 dark:focus:!ring-transparent !shadow-none dark:focus:border-b-white/10" placeholder="Enter password"/>
<div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
  <svg className="flex-shrink-0 size-4 text-gray-500 dark:text-white/50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"/><circle cx="16.5" cy="7.5" r=".5"/></svg>
</div>
</div>
<textarea className="py-3 px-0 ti-form-input rounded-none bg-transparent !border-t-transparent border-b !border-x-transparent border-b-gray-200 text-sm focus:!border-t-transparent focus:!border-x-transparent  focus:!border-b-primary focus:!ring-0 focus:!ring-offset-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-white/10 dark:focus:!ring-transparent !shadow-none dark:focus:border-b-white/10" rows={3} placeholder="This is a textarea placeholder"></textarea>
// End Prism Code//`
export const input10 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="relative">
<input type="email" id="hs-floating-input-email" className="peer p-4 ti-form-input placeholder:!text-transparent focus:!border-primary focus:!ring-primary disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2" placeholder="you@email.com"/>
<label htmlFor="hs-floating-input-email" className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
peer-focus:text-xs
peer-focus:-translate-y-1.5
peer-focus:text-gray-500 dark:peer-focus:text-white/70
peer-[:not(:placeholder-shown)]:text-xs
peer-[:not(:placeholder-shown)]:-translate-y-1.5
peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-white/70">Email</label>
</div>
<div className="relative">
<input type="password" id="hs-floating-input-passowrd" className="peer p-4 ti-form-input placeholder:!text-transparent focus:!border-primary focus:!ring-primary disabled:opacity-50 disabled:pointer-events-none
focus:pt-6
focus:pb-2
[&:not(:placeholder-shown)]:pt-6
[&:not(:placeholder-shown)]:pb-2
autofill:pt-6
autofill:pb-2" placeholder="********"/>
<label htmlFor="hs-floating-input-passowrd" className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
    peer-focus:text-xs
    peer-focus:-translate-y-1.5
    peer-focus:text-gray-500 dark:peer-focus:text-white/70
    peer-[:not(:placeholder-shown)]:text-xs
    peer-[:not(:placeholder-shown)]:-translate-y-1.5
    peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-white/70">Password</label>
</div>
<div className="relative">
<textarea id="hs-floating-textarea" className="peer p-4 ti-form-input placeholder:!text-transparent focus:!border-primary focus:!ring-primary disabled:opacity-50 disabled:pointer-events-non
focus:pt-6
focus:pb-2
[&:not(:placeholder-shown)]:pt-6
[&:not(:placeholder-shown)]:pb-2
autofill:pt-6
autofill:pb-2" placeholder="This is a textarea placeholder"></textarea>
<label htmlFor="hs-floating-textarea" className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
peer-focus:text-xs
peer-focus:-translate-y-1.5
peer-focus:text-gray-500 dark:peer-focus:text-white/70
peer-[:not(:placeholder-shown)]:text-xs
peer-[:not(:placeholder-shown)]:-translate-y-1.5
peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-white/70">Comment</label>
</div>
// End Prism Code//`

export const input11 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
  <div className="relative">
<input type="email" id="hs-floating-gray-input-email" className="peer p-4 ti-form-input bg-gray-100 border-transparent placeholder:!text-transparent focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg2 rounded-md dark:border-transparent
focus:pt-6
focus:pb-2
[&:not(:placeholder-shown)]:pt-6
[&:not(:placeholder-shown)]:pb-2
autofill:pt-6
autofill:pb-2" placeholder="you@email.com"/>
<label htmlFor="hs-floating-gray-input-email" className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
peer-focus:text-xs
peer-focus:-translate-y-1.5
peer-focus:text-gray-500 dark:peer-focus:text-white/70
peer-[:not(:placeholder-shown)]:text-xs
peer-[:not(:placeholder-shown)]:-translate-y-1.5
peer-[:not(:placeholder-shown)]:text-gray-500  dark:peer-[:not(:placeholder-shown)]:text-white/70">Email</label>
</div>
<div className="relative">
<input type="password" id="hs-floating-gray-input-passowrd" className="peer p-4 ti-form-input bg-gray-100 border-transparent placeholder:!text-transparent focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg2 rounded-lg dark:border-transparent
focus:pt-6
focus:pb-2
[&:not(:placeholder-shown)]:pt-6
[&:not(:placeholder-shown)]:pb-2
autofill:pt-6
autofill:pb-2" placeholder="********"/>
<label htmlFor="hs-floating-gray-input-passowrd" className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
    peer-focus:text-xs
    peer-focus:-translate-y-1.5
    peer-focus:text-gray-500  dark:peer-focus:text-white/70
    peer-[:not(:placeholder-shown)]:text-xs
    peer-[:not(:placeholder-shown)]:-translate-y-1.5
    peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-white/70">Password</label>
</div>
<div className="relative">
<textarea id="hs-floating-textarea-gray" className="peer p-4 ti-form-input bg-gray-100 border-transparent placeholder:!text-transparent focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg2 rounded-lg dark:border-transparent
focus:pt-6
focus:pb-2
[&:not(:placeholder-shown)]:pt-6
[&:not(:placeholder-shown)]:pb-2
autofill:pt-6
autofill:pb-2" placeholder="This is a textarea placeholder"></textarea>
<label htmlFor="hs-floating-textarea-gray" className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
peer-focus:text-xs
peer-focus:-translate-y-1.5
peer-focus:text-gray-500  dark:peer-focus:text-white/70
peer-[:not(:placeholder-shown)]:text-xs
peer-[:not(:placeholder-shown)]:-translate-y-1.5
peer-[:not(:placeholder-shown)]:text-gray-500  dark:peer-[:not(:placeholder-shown)]:text-white/70">Comment</label>
</div>
// End Prism Code//`

export const input12 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="relative">
<input type="email" id="hs-floating-underline-input-email" className="peer py-4 px-0 ti-form-input rounded-none bg-transparent 
!border-t-transparent border-b !border-x-transparent border-b-gray-200 placeholder:!text-transparent focus:!border-t-transparent 
focus:!border-x-transparent focus:!border-b-primary focus:!ring-0 focus:!ring-offset-0 disabled:opacity-50 disabled:pointer-events-none
 dark:border-b-white/10 dark:focus:!ring-transparent !shadow-none
focus:pt-6
focus:pb-2
[&:not(:placeholder-shown)]:pt-6
[&:not(:placeholder-shown)]:pb-2
autofill:pt-6
autofill:pb-2" placeholder="you@email.com"/>
<label htmlFor="hs-floating-underline-input-email" className="absolute top-0 start-0 py-4 px-0 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
peer-focus:text-xs
peer-focus:-translate-y-1.5
peer-focus:text-gray-500  dark:peer-focus:text-white/70
peer-[:not(:placeholder-shown)]:text-xs
peer-[:not(:placeholder-shown)]:-translate-y-1.5
peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-white/70">Email</label>
</div>
<div className="relative">
<input type="password" id="hs-floating-underline-input-passowrd" className="peer py-4 px-0 ti-form-input rounded-none bg-transparent !border-t-transparent border-b !border-x-transparent border-b-gray-200 placeholder:!text-transparent focus:!border-t-transparent focus:!border-x-transparent focus:!border-b-primary focus:!ring-0 focus:!ring-offset-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-white/10 dark:focus:!ring-transparent !shadow-none dark:focus:border-b-white/10
focus:pt-6
focus:pb-2
[&:not(:placeholder-shown)]:pt-6
[&:not(:placeholder-shown)]:pb-2
autofill:pt-6
autofill:pb-2" placeholder="********"/>
<label htmlFor="hs-floating-underline-input-passowrd" className="absolute top-0 start-0 py-4 px-0 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
peer-focus:text-xs
peer-focus:-translate-y-1.5
peer-focus:text-gray-500  dark:peer-focus:text-white/70
peer-[:not(:placeholder-shown)]:text-xs
peer-[:not(:placeholder-shown)]:-translate-y-1.5
peer-[:not(:placeholder-shown)]:text-gray-500  dark:peer-[:not(:placeholder-shown)]:text-white/70">Password</label>
</div>
<div className="relative">
<textarea id="hs-floating-textarea-underline" className="peer py-4 px-0 ti-form-input rounded-none bg-transparent !border-t-transparent border-b !border-x-transparent border-b-gray-200 placeholder:!text-transparent focus:!border-t-transparent focus:!border-x-transparent focus:!border-b-primary focus:!ring-0 focus:!ring-offset-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-white/10 dark:focus:!ring-transparent !shadow-none dark:focus:border-b-white/10
focus:pt-6
focus:pb-2
[&:not(:placeholder-shown)]:pt-6
[&:not(:placeholder-shown)]:pb-2
autofill:pt-6
autofill:pb-2" placeholder="This is a textarea placeholder"></textarea>
<label htmlFor="hs-floating-textarea-underline" className="absolute top-0 start-0 py-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
peer-focus:text-xs
peer-focus:-translate-y-1.5
peer-focus:text-gray-500  dark:peer-focus:text-white/70
peer-[:not(:placeholder-shown)]:text-xs
peer-[:not(:placeholder-shown)]:-translate-y-1.5
peer-[:not(:placeholder-shown)]:text-gray-500  dark:peer-[:not(:placeholder-shown)]:text-white/70">Comment</label>
</div>
// End Prism Code//`

export const input13 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<input type="text" className="ti-form-input px-5 rounded-full" placeholder="Input text"/>
<textarea className="ti-form-input px-5 rounded-md" rows={3} placeholder="This is a textarea placeholder"></textarea>
// End Prism Code//`


export const input14 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="">
<label htmlFor="input-email-label" className="sr-only">Email</label>
<input type="email" id="input-email-label" className="ti-form-input" placeholder="you@site.com"/>
</div>
<div className="">
<label htmlFor="textarea-email-label" className="sr-only">Comment</label>
<textarea id="textarea-email-label" className="ti-form-input" rows={3} placeholder="Say hi..."></textarea>
</div>
// End Prism Code//`

export const input15 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="">
<label htmlFor="input-label" className="ti-form-label">Email</label>
<input type="email" id="input-label1" className="ti-form-input" placeholder="you@site.com"/>
</div>
<div>
<label htmlFor="textarea-label" className="ti-form-label">Comment</label>
<textarea id="textarea-label" className="ti-form-input" rows={3} placeholder="Say hi..."></textarea>
</div>
// End Prism Code//`


export const input16 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div>
<label htmlFor="input-label-with-helper-text" className="ti-form-label">Email</label>
<input type="email" id="input-label-with-helper-text" className="ti-form-input" placeholder="you@site.com" aria-describedby="hs-input-helper-text"/>
<p className="text-xs text-gray-500 mt-2 dark:text-white/70" id="hs-input-helper-text">We'll never share your details.</p>
</div>
<div>
<label htmlFor="textarea-label-with-helper-text" className="ti-form-label">Leave your question</label>
<textarea id="textarea-label-with-helper-text" className="ti-form-input" rows={2} placeholder="Say hi, we'll be happy to chat with you." aria-describedby="hs-textarea-helper-text"></textarea>
<p className="text-xs text-gray-500 mt-2 dark:text-white/70" id="hs-textarea-helper-text">We'll get back to you soon.</p>
</div>
// End Prism Code//`


export const input17 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
  <div className="sm:inline-flex sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 w-full rtl:space-x-reverse">
<label htmlFor="inline-input-label-with-helper-text" className="ti-form-label">Email</label>
<input type="email" id="inline-input-label-with-helper-text" className="ti-form-input" placeholder="you@site.com" aria-describedby="hs-inline-input-helper-text"/>
<p className="text-xs text-gray-500 mt-2 dark:text-white/70" id="hs-inline-input-helper-text">We'll never share your details.</p>
</div>
<div className="sm:inline-flex sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 w-full rtl:space-x-reverse">
<label htmlFor="inline-textarea-label-with-helper-text" className="ti-form-label">Leave your question</label>
<textarea id="inline-textarea-label-with-helper-text" className="ti-form-input" rows={3} placeholder="Say hi, we'll be happy to chat with you." aria-describedby="hs-textarea-helper-text"></textarea>
<p className="text-xs text-gray-500 mt-2 dark:text-white/70" id="hs-inline-textarea-helper-text">We'll get back to you soon.</p>
</div>
// End Prism Code//`



export const input18 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div>
<div className="flex justify-between items-center">
    <label htmlFor="with-corner-hint" className="ti-form-label">Email</label>
    <span className="block text-xs text-gray-500 mb-2 dark:text-white/70">Optional</span>
</div>
<input type="email" id="with-corner-hint" className="ti-form-input" placeholder="you@site.com"/>
</div>
<div>
<div className="flex justify-between items-center">
    <label htmlFor="hs-textarea-with-corner-hint" className="ti-form-label">Contact us</label>
    <span className="block text-xs text-gray-500 mb-2 dark:text-white/70">100 characters</span>
</div>
<textarea id="hs-textarea-with-corner-hint" className="ti-form-input" rows={3} placeholder="Say hi..."></textarea>
</div>
// End Prism Code//`


export const input19 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="space-y-3">
<div>
    <label htmlFor="hs-validation-name-error" className="ti-form-label">Email</label>
    <div className="relative">
      <input type="text" id="hs-validation-name-error" name="hs-validation-name-error" className="ti-form-input !border-danger focus:border-danger focus:ring-danger" required aria-describedby="hs-validation-name-error-helper"/>
      <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
        <svg className="h-5 w-5 text-danger" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"  >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
        </svg>
      </div>
    </div>
    <p className="text-sm text-red-600 mt-2" id="hs-validation-name-error-helper">Please enter a valid email address.</p>
  </div>

  <div>
    <label htmlFor="hs-validation-name-success" className="ti-form-label">Email</label>
    <div className="relative">
      <input type="text" id="hs-validation-name-success" name="hs-validation-name-success" className="ti-form-input !border-success focus:border-success focus:ring-success" required aria-describedby="hs-validation-name-success-helper"/>
      <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
        <svg className="h-5 w-5 text-success" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
        </svg>
      </div>
    </div>
    <p className="text-sm text-green-600 mt-2" id="hs-validation-name-success-helper">Looks good!</p>
  </div>
</div>
// End Prism Code//`


export const input20 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="space-y-3">
<input type="text" className="py-2 px-3 ti-form-input" placeholder="Small size"/>
<input type="text" className="ti-form-input" placeholder="Default size"/>
<input type="text" className="ti-form-input sm:p-5" placeholder="Large size"/>
</div>
// End Prism Code//`


export const input21 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="space-y-3">
<textarea className="py-2 px-3 ti-form-input" rows={2}
    placeholder="Small size"></textarea>
<textarea className="py-3 px-4 ti-form-input" rows={2}
    placeholder="Default size"></textarea>
<textarea className="sm:p-5 py-3 px-4 ti-form-input" rows={2}
    placeholder="Large size"></textarea>
</div>
// End Prism Code//`


export const input22 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="relative">
<textarea id="hs-textarea-ex-1" className="p-4 pb-12 ti-form-input focus:!ring-primary"
    placeholder="Ask me anything..."></textarea>

<div className="absolute bottom-px inset-x-px p-2 rounded-b-md bg-white dark:bg-bodybg">
    <div className="flex justify-between items-center">
        
        <div className="flex items-center">
            <button type="button"
                className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 dark:text-white/70 hover:text-primary focus:z-10 focus:outline-none focus:ring-0 shadow-none focus:ring-primary dark:hover:text-primary dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-gray-600">
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <line x1="9" x2="15" y1="15" y2="9"></line>
                </svg>
            </button>
            <button type="button"
                className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 dark:text-white/70 hover:text-primary focus:z-10 focus:outline-none focus:ring-0 shadow-none focus:ring-primary dark:hover:text-primary dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-gray-600">
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round">
                    <path
                        d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48">
                    </path>
                </svg>
            </button>
        </div>
        <div className="flex items-center gap-x-1">
           
            <button type="button"
                className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 dark:text-white/70 hover:text-primary focus:z-10 focus:outline-none focus:ring-0 shadow-none focus:ring-primary dark:hover:text-primary dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-gray-600">
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z">
                    </path>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    <line x1="12" x2="12" y1="19" y2="22"></line>
                </svg>
            </button>
            <button type="button"
                className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-sm text-white bg-primary hover:bg-primary focus:z-10 focus:outline-none focus:ring-0 shadow-none focus:ring-primary dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-gray-600">
                <svg className="flex-shrink-0 size-3.5"
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    fill="currentColor" viewBox="0 0 16 16">
                    <path
                        d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z">
                    </path>
                </svg>
            </button>
        </div>
    </div>
</div>
</div>
<div className="relative">
<textarea id="hs-textarea-ex-2"
    className="p-4 pb-12 ti-form-input focus:!ring-primary bg-gray-100 dark:bg-bodybg"
    placeholder="Ask me anything..."></textarea>

<div
    className="absolute bottom-px inset-x-px p-2 rounded-b-md bg-gray-100 dark:bg-bodybg">
    <div className="flex justify-between items-center">
       
        <div className="flex items-center">
            <button type="button"
                className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 dark:text-white/70 hover:text-primary focus:z-10 focus:outline-none focus:ring-0 shadow-none focus:ring-primary dark:hover:text-primary dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-gray-600">
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <line x1="9" x2="15" y1="15" y2="9"></line>
                </svg>
            </button>
            <button type="button"
                className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 dark:text-white/70 hover:text-primary focus:z-10 focus:outline-none focus:ring-0 shadow-none focus:ring-primary dark:hover:text-primary dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-gray-600">
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round">
                    <path
                        d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48">
                    </path>
                </svg>
            </button>
        </div>
        <div className="flex items-center gap-x-1">
            <button type="button"
                className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 dark:text-white/70 hover:text-primary focus:z-10 focus:outline-none focus:ring-0 shadow-none focus:ring-primary dark:hover:text-primary dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-gray-600">
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z">
                    </path>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    <line x1="12" x2="12" y1="19" y2="22"></line>
                </svg>
            </button>
            <button type="button"
                className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-sm text-white bg-primary hover:bg-primary focus:z-10 focus:outline-none focus:ring-0 shadow-none focus:ring-primary dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-gray-600">
                <svg className="flex-shrink-0 size-3.5"
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    fill="currentColor" viewBox="0 0 16 16">
                    <path
                        d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z">
                    </path>
                </svg>
            </button>
        </div>
    </div>
</div>
</div>
// End Prism Code//`


export const input23 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<label htmlFor="hs-autoheight-textarea" className="ti-form-label">Contact us</label>
<textarea id="hs-autoheight-textarea" className="ti-form-input" rows={3}
    placeholder="Say hi..."></textarea>
// End Prism Code//`


export const input24 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <form>
<div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email
        address</label>
    <input type="email" className="form-control" id="exampleInputEmail1"
        aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll
        never share your email
        with
        anyone else.</div>
</div>
<div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
</div>
<div className="mb-3 form-check !ps-0">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label ps-2" htmlFor="exampleCheck1">Check
        me out</label>
</div>
<button type="submit" className="ti-btn ti-btn-primary-full">Submit</button>
</form>
// End Prism Code//`


export const input25 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <label htmlFor="inputPassword5" className="form-label">Password</label>
<input type="password" id="inputPassword5" className="form-control"
    aria-describedby="passwordHelpBlock"/>
<div id="passwordHelpBlock" className="form-text">
    Your password must be 8-20 characters long, contain letters and
    numbers,
    and
    must not contain spaces, special characters, or emoji.
</div>
// End Prism Code//`


export const input26 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="flex flex-wrap gap-4 items-center">
<div className="">
    <label htmlFor="inputPassword6" className="col-form-label">Password</label>
</div>
<div className="">
    <input type="password" id="inputPassword6" className="form-control"
        aria-describedby="passwordHelpInline"/>
</div>
<div className="">
    <span id="passwordHelpInline" className="form-text">
        Must be 8-20 characters long.
    </span>
</div>
</div>
// End Prism Code//`

export const input27 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <form>
<fieldset disabled>
    <legend className="text-2xl">Disabled fieldset example</legend>
    <div className="mb-3">
        <label htmlFor="disabledTextInput" className="form-label">Disabled
            input</label>
        <input type="text" id="disabledTextInput" className="form-control"
            placeholder="Disabled input"/>
    </div>
    <div className="mb-3">
        <label htmlFor="disabledSelect" className="form-label">Disabled select
            menu</label>
        <select id="disabledSelect" className="form-select">
            <option>Disabled select</option>
        </select>
    </div>
    <div className="mb-3">
        <div className="form-check !ps-0">
            <input className="form-check-input" type="checkbox"
                id="disabledFieldsetCheck" disabled/>
            <label className="form-check-label ps-2" htmlFor="disabledFieldsetCheck">
                Can't check this
            </label>
        </div>
    </div>
    <button type="submit"
        className="ti-btn ti-btn-primary-full opacity-[0.6]">Submit</button>
</fieldset>
</form>
// End Prism Code//`



//
export const switch1 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<input type="checkbox" id="hs-basic-usage" className="ti-switch"/>
<label htmlFor="hs-basic-usage" className="sr-only">Toggle switch</label>
// End Prism Code//`

export const switch2 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="hs-tooltip flex items-center">
<input type="checkbox" id="hs-tooltip-example" className="hs-tooltip-toggle ti-switch shrink-0"/>
<label htmlFor="hs-tooltip-example" className="text-sm text-gray-500 ms-3 dark:text-white/70">Allow push
  notifications</label>
<div
  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-sm shadow-sm dark:bg-slate-700"
  role="tooltip">
  Enable push notifications
</div>
</div>
// End Prism Code//`

export const switch3 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="space-y-4">
<div className="flex items-center">
  <input type="checkbox" id="hs-basic-with-description-unchecked" className="ti-switch"/>
  <label htmlFor="hs-basic-with-description-unchecked"
    className="text-sm text-gray-500 ms-3 dark:text-white/70">Unchecked</label>
</div>

<div className="flex items-center">
  <input type="checkbox" id="hs-basic-with-description-checked" className="ti-switch" checked/>
  <label htmlFor="hs-basic-with-description-checked"
    className="text-sm text-gray-500 ms-3 dark:text-white/70">Checked</label>
</div>

<div className="flex items-center">
  <label className="text-sm text-gray-500 me-3 dark:text-white/70">On</label>
  <input type="checkbox" id="hs-basic-with-description" className="ti-switch"/>
  <label className="text-sm text-gray-500 ms-3 dark:text-white/70">Off</label>
</div>
</div>
// End Prism Code//`


export const switch4 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="space-y-4">
<div className="flex items-center opacity-70">
  <input type="checkbox" id="hs-basic-disabled-with-description-unchecked"
    className="ti-switch shrink-0 pointer-events-none" disabled/>
  <label htmlFor="hs-basic-disabled-with-description-unchecked"
    className="text-sm text-gray-500 ms-3 dark:text-white/70">Unchecked</label>
</div>

<div className="flex items-center opacity-70">
  <input type="checkbox" id="hs-basic-disabled-with-description-checked"
    className="ti-switch shrink-0 pointer-events-none" checked disabled/>
  <label htmlFor="hs-basic-disabled-with-description-checked"
    className="text-sm text-gray-500 ms-3 dark:text-white/70">Checked</label>
</div>

<div className="flex items-center opacity-70">
  <label className="text-sm text-gray-500 me-3 dark:text-white/70">On</label>
  <input type="checkbox" id="hs-basic-disabled-with-description"
    className="ti-switch shrink-0 pointer-events-none" disabled/>
  <label className="text-sm text-gray-500 ms-3 dark:text-white/70">Off</label>
</div>
</div>
// End Prism Code//`

export const switch5 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="space-y-4">
<div className="flex items-center">
  <input type="checkbox" id="hs-xs-switch"
    className="ti-switch shrink-0 !w-[35px] !h-[21px] before:size-4"/>
  <label htmlFor="hs-xs-switch" className="text-sm text-gray-500 ms-3 dark:text-white/70">Extra small</label>
</div>

<div className="flex items-center">
  <input type="checkbox" id="hs-small-switch" className="ti-switch shrink-0 !w-11 !h-6 before:size-5"/>
  <label htmlFor="hs-small-switch" className="text-sm text-gray-500 ms-3 dark:text-white/70">Small</label>
</div>


<div className="flex items-center">
  <input type="checkbox" id="hs-medium-switch" className="ti-switch shrink-0"/>
  <label htmlFor="hs-medium-switch" className="text-sm text-gray-500 ms-3 dark:text-white/70">Medium</label>
</div>

<div className="flex items-center">
  <input type="checkbox" id="hs-large-switch"
    className="ti-switch shrink-0 !w-[4.25rem] !h-9 before:w-8 before:h-8"/>
  <label htmlFor="hs-large-switch" className="text-sm text-gray-500 ms-3 dark:text-white/70">Large</label>
</div>
</div>
// End Prism Code//`

export const switch6 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="space-y-4">
<div className="flex items-center">
  <input type="checkbox" id="hs-valid-toggle-switch" className="ti-switch shrink-0 checked:bg-none checked:bg-green-600 checked:hover:bg-green-600 checked:focus:bg-green-600 focus:border-green-600 focus:ring-green-600 dark:checked:bg-green-600

                checked:before:bg-green-200 dark:checked:before:bg-green-200" checked/>
  <label htmlFor="hs-valid-toggle-switch" className="text-sm text-gray-500 ms-3 dark:text-white/70">Valid
    toggle switch</label>
</div>

<div className="flex items-center">
  <input type="checkbox" id="hs-invalid-toggle-switch" className="ti-switch shrink-0 checked:bg-none checked:bg-red-600 checked:hover:bg-red-600 
  checked:focus:bg-red-600 focus:border-red-600 focus:ring-red-600 dark:checked:bg-red-600

                checked:before:bg-red-200 dark:checked:before:bg-red-200" checked/>
  <label htmlFor="hs-invalid-toggle-switch" className="text-sm text-gray-500 ms-3 dark:text-white/70">Invalid
    toggle switch</label>
</div>
</div>
// End Prism Code//`

export const switch7 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="space-x-4 rtl:space-x-reverse">
<div className="relative inline-block">
  <input type="checkbox" id="hs-xs-solid-switch"
    className="ti-switch shrink-0 !w-[35px] !h-[21px] before:size-4"/>
  <label htmlFor="hs-xs-solid-switch" className="sr-only">Extra small</label>
</div>

<div className="relative inline-block">
  <input type="checkbox" id="hs-small-solid-switch"
    className="ti-switch shrink-0 !w-11 !h-6 before:size-5"/>
  <label htmlFor="hs-small-solid-switch" className="sr-only">Small</label>
</div>


<div className="relative inline-block">
  <input type="checkbox" id="hs-medium-solid-switch" className="ti-switch shrink-0"/>
  <label htmlFor="hs-medium-solid-switch" className="sr-only">Medium</label>
</div>

<div className="relative inline-block">
  <input type="checkbox" id="hs-large-solid-switch"
    className="ti-switch shrink-0 !w-[4.25rem] !h-9 before:w-8 before:h-8"/>
  <label htmlFor="hs-large-solid-switch" className="sr-only">Large</label>
</div>
</div>
// End Prism Code//`

export const switch8 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="space-x-4 rtl:space-x-reverse">
<div className="relative inline-block">
  <input type="checkbox" id="hs-small-solid-switch-with-icons" className="peer relative shrink-0 w-11 h-6 p-px bg-gray-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-primary disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-primary checked:border-primary focus:checked:border-primary dark:bg-bodybg dark:border-white/10 dark:checked:bg-primary dark:checked:border-primary dark:focus:ring-offset-gray-600

  before:inline-block before:size-5 before:bg-white checked:before:bg-white before:translate-x-0 checked:before:translate-x-full rtl:checked:before:-translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-black/20 dark:checked:before:bg-white"
  />
  <label htmlFor="hs-small-solid-switch-with-icons" className="sr-only">switch</label>
  <span className="peer-checked:text-white text-gray-500 dark:text-white/70 size-5 absolute top-[3px] start-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200">
    <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
  </span>
  <span className="peer-checked:text-primary text-gray-500 dark:text-white/70 size-5 absolute top-[3px] end-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200">
    <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
  </span>
</div>
<div className="relative inline-block">
  <input type="checkbox" id="hs-default-solid-switch-with-icons" className="peer relative w-[3.25rem] h-7 p-px bg-gray-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-primary disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-primary checked:border-primary focus:checked:border-primary dark:bg-bodybg dark:border-white/10 dark:checked:bg-primary dark:checked:border-primary dark:focus:ring-offset-gray-600

  before:inline-block before:size-6 before:bg-white checked:before:bg-white before:translate-x-0 checked:before:translate-x-full rtl:checked:before:-translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-black/20 dark:checked:before:bg-white" />
  <label htmlFor="hs-default-solid-switch-with-icons" className="sr-only">switch</label>
  <span className="peer-checked:text-white text-gray-500 dark:text-white/70 size-6 absolute top-0.5 start-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200">
    <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
  </span>
  <span className="peer-checked:text-primary text-gray-500 dark:text-white/70 size-6 absolute top-0.5 end-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200">
    <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
  </span>
</div>
<div className="relative inline-block">
  <input type="checkbox" id="hs-large-solid-switch-with-icons" className="peer relative shrink-0 w-[4.25rem] h-9 p-px bg-gray-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-primary disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-primary checked:border-primary focus:checked:border-primary dark:bg-bodybg dark:border-white/10 dark:checked:bg-primary dark:checked:border-primary dark:focus:ring-offset-gray-600

  before:inline-block before:w-8 before:h-8 before:bg-white checked:before:bg-white before:translate-x-0 checked:before:translate-x-full rtl:checked:before:-translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-black/20 dark:checked:before:bg-white" />
  <label htmlFor="hs-large-solid-switch-with-icons" className="sr-only">switch</label>
  <span className="peer-checked:text-white text-gray-500 dark:text-white/70 size-8 absolute top-0.5 start-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200">
    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
  </span>
  <span className="peer-checked:text-primary text-gray-500 dark:text-white/70 size-8 absolute top-0.5 end-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200">
    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
  </span>
</div>
</div>
// End Prism Code//`

export const switch9 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="space-x-4 rtl:space-x-reverse">
<div className="relative inline-block">
  <input type="checkbox" id="hs-xs-soft-switch"
    className="ti-switch checked:!bg-primary/10 checked:!text-primary/10 checked:!border-primary/20 focus:checked:!border-primary/10 checked:before:!bg-primary dark:checked:before:bg-primary shrink-0 !w-[35px] !h-[21px] before:size-4"/>
  <label htmlFor="hs-xs-soft-switch" className="sr-only">Extra small</label>
</div>

<div className="relative inline-block">
  <input type="checkbox" id="hs-small-soft-switch"
    className="ti-switch checked:!bg-primary/10 checked:!text-primary/10 checked:!border-primary/20 focus:checked:!border-primary/10 checked:before:!bg-primary dark:checked:before:bg-primary shrink-0 !w-11 !h-6 before:size-5"/>
  <label htmlFor="hs-small-soft-switch" className="sr-only">Small</label>
</div>


<div className="relative inline-block">
  <input type="checkbox" id="hs-medium-soft-switch"
    className="ti-switch checked:!bg-primary/10 checked:!text-primary/10 checked:!border-primary/20 focus:checked:!border-primary/10 checked:before:!bg-primary dark:checked:before:bg-primary shrink-0"/>
  <label htmlFor="hs-medium-soft-switch" className="sr-only">Medium</label>
</div>

<div className="relative inline-block">
  <input type="checkbox" id="hs-large-soft-switch"
    className="ti-switch checked:!bg-primary/10 checked:!text-primary/10 checked:!border-primary/20 focus:checked:!border-primary/10 checked:before:!bg-primary dark:checked:before:bg-primary shrink-0 !w-[4.25rem] !h-9 before:w-8 before:h-8"/>
  <label htmlFor="hs-large-soft-switch" className="sr-only">Large</label>
</div>
</div>
// End Prism Code//`

export const switch10 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="space-x-4 rtl:space-x-reverse">
<div className="relative inline-block">
  <input type="checkbox" id="hs-small-switch-soft-with-icons" className="peer relative shrink-0 w-11 h-6 p-px bg-gray-100 border border-gray-200 text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-primary disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-primary/30 checked:border-primary/50 checked:hover:!bg-primary/10 checked:hover:!text-primary/10 checked:hover:!border-primary/30 checked:focus:!border-primary/30 checked:focus:!bg-primary/10 checked:focus:!text-primary/10 focus:checked:border-primary/50 dark:bg-bodybg dark:border-white/10 dark:checked:bg-primary/30 dark:checked:border-primary dark:focus:ring-offset-gray-600
  before:inline-block before:size-5 before:bg-white checked:before:bg-primary before:translate-x-0 checked:before:translate-x-full rtl:checked:before:-translate-x-full before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-black/20 dark:checked:before:bg-primary"/>
  <label htmlFor="hs-small-switch-soft-with-icons" className="sr-only">switch</label>
  <span className="peer-checked:text-primary text-gray-500 dark:text-white/70 size-5 absolute top-[3px] start-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200">
    <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
  </span>
  <span className="peer-checked:text-white  size-5 absolute top-[3px] end-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200">
    <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
  </span>
</div>
<div className="relative inline-block">
  <input type="checkbox" id="hs-default-switch-soft-with-icons" className="peer relative w-[3.25rem] h-7 p-px bg-gray-100 border border-gray-200 text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-primary disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-primary/30 checked:border-primary/50 checked:hover:!bg-primary/10 checked:hover:!text-primary/10 checked:hover:!border-primary/30 checked:focus:!border-primary/30 checked:focus:!bg-primary/10 checked:focus:!text-primary/10  focus:checked:border-primary/50 dark:bg-bodybg dark:border-white/10 dark:checked:bg-primary/30 dark:checked:border-primary dark:focus:ring-offset-gray-600
  before:inline-block before:size-6 before:bg-white checked:before:bg-primary before:translate-x-0 checked:before:translate-x-full rtl:checked:before:-translate-x-full before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-black/20 dark:checked:before:bg-primary"/>
  <label htmlFor="hs-default-switch-soft-with-icons" className="sr-only">switch</label>
  <span className="peer-checked:text-primary text-gray-500 dark:text-white/70 size-6 absolute top-0.5 start-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200">
    <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
  </span>
  <span className="peer-checked:text-white size-6 absolute top-0.5 end-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200">
    <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
  </span>
</div>
<div className="relative inline-block">
  <input type="checkbox" id="hs-large-switch-soft-with-icons" className="peer relative shrink-0 w-[4.25rem] h-9 p-px bg-gray-100 border border-gray-200 text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-primary disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-primary/30 checked:hover:!bg-primary/10 checked:hover:!text-primary/10 checked:hover:!border-primary/30 checked:focus:!border-primary/30 checked:focus:!bg-primary/10 checked:focus:!text-primary/10  checked:border-primary/50 focus:checked:border-primary/50 dark:bg-bodybg dark:border-white/10 dark:checked:bg-primary/30 dark:checked:border-primary dark:focus:ring-offset-gray-600

  before:inline-block before:w-8 before:h-8 before:bg-white checked:before:bg-primary before:translate-x-0 checked:before:translate-x-full rtl:checked:before:-translate-x-full before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-black/20 dark:checked:before:bg-primary"/>
  <label htmlFor="hs-large-switch-soft-with-icons" className="sr-only">switch</label>
  <span className="peer-checked:text-primary text-gray-500 dark:text-white/70 size-8 absolute top-0.5 start-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200">
    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
  </span>
  <span className="peer-checked:text-white size-8 absolute top-0.5 end-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200">
    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
  </span>
</div>
</div>
// End Prism Code//`


//InputNumber


export const inputnumber1 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="py-2 px-3 bg-gray-100 rounded-sm dark:bg-bodybg2" data-hs-input-number>
<div className="w-full flex justify-between items-center gap-x-5">
    <div className="grow">
        <input
            className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 dark:text-white"
            type="text" value="1" data-hs-input-number-input/>
    </div>
    <div className="flex justify-end items-center gap-x-1.5">
        <button type="button"
            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white dark:bg-bodybg text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-white/10 dark:text-white dark:hover:bg-bgdark/80 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10"
            data-hs-input-number-decrement>
            <i className="ri-subtract-line"></i>
        </button>
        <button type="button"
            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white dark:bg-bodybg text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-white/10 dark:text-white dark:hover:bg-bgdark/80 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10"
            data-hs-input-number-increment>
            <i className="ri-add-line"></i>
        </button>
    </div>
</div>
</div>
// End Prism Code//`


export const inputnumber2 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="bg-white border border-gray-200 rounded-sm dark:bg-bodybg dark:border-white/10"
data-hs-input-number>
<div className="w-full flex justify-between items-center gap-x-1 overflow-hidden">
    <div className="grow py-2 px-3">
        <span className="block text-xs text-gray-500 dark:text-white/70">
            Select quantity
        </span>
        <input
            className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 dark:text-white"
            type="text" value="1" data-hs-input-number-input/>
    </div>
    <div
        className="flex flex-col -gap-y-px divide-y divide-gray-200 border-s border-gray-200 dark:divide-white/10 dark:border-white/10">
        <button type="button"
            className="size-7 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-se-lg bg-gray-50 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:text-white dark:hover:bg-bgdark/70 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10"
            data-hs-input-number-decrement>
            <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M5 12h14" />
            </svg>
        </button>
        <button type="button"
            className="size-7 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-lg bg-gray-50 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:text-white dark:hover:bg-bgdark/70 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10"
            data-hs-input-number-increment>
            <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5v14" />
            </svg>
        </button>
    </div>
</div>
</div>
// End Prism Code//`

export const inputnumber3 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="bg-white border border-gray-200 rounded-sm dark:bg-bodybg dark:border-white/10"
data-hs-input-number>
<div className="w-full flex justify-between items-center gap-x-1 overflow-hidden">
    <div className="grow py-2 px-3">
        <input
            className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 dark:text-white"
            type="text" value="1" data-hs-input-number-input/>
    </div>
    <div
        className="flex items-center -gap-y-px divide-x divide-gray-200 border-s border-gray-200 dark:divide-white/10 dark:border-white/10">
        <button type="button"
            className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-medium last:rounded-e-sm bg-white text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:text-white dark:hover:bg-bgdark/70 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10"
            data-hs-input-number-decrement>
            <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M5 12h14" />
            </svg>
        </button>
        <button type="button"
            className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-medium last:rounded-e-sm bg-white text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:text-white dark:hover:bg-bgdark/70 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10"
            data-hs-input-number-increment>
            <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5v14" />
            </svg>
        </button>
    </div>
</div>
</div>
// End Prism Code//`


export const inputnumber4 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="py-2 px-3 inline-block bg-white border border-gray-200 rounded-sm dark:bg-bodybg dark:border-white/10"
data-hs-input-number>
<div className="flex items-center gap-x-1.5">
    <button type="button"
        className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white dark:bg-bodybg text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none  dark:border-white/10 dark:text-white dark:hover:bg-bgdark/80 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10"
        data-hs-input-number-decrement>
        <i className="ri-subtract-line"></i>
    </button>
    <input
        className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 dark:text-white"
        type="text" value="0" data-hs-input-number-input/>
    <button type="button"
        className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white dark:bg-bodybg text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-white/10 dark:text-white dark:hover:bg-bgdark/80 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10"
        data-hs-input-number-increment>
        <i className="ri-add-line"></i>
    </button>
</div>
</div>
// End Prism Code//`

export const inputnumber5 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="py-2 px-3 bg-white border border-gray-200 rounded-sm dark:bg-bodybg dark:border-white/10"
data-hs-input-number>
<div className="w-full flex justify-between items-center gap-x-3">
    <div>
        <span className="block font-medium text-sm text-gray-800 dark:text-white">
            Additional seats
        </span>
        <span className="block text-xs text-gray-500 dark:text-white/70">
            $39 monthly
        </span>
    </div>
    <div className="flex items-center gap-x-1.5">
        <button type="button"
            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white dark:bg-bodybg text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-white/10 dark:text-white dark:hover:bg-bgdark/80 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10"
            data-hs-input-number-decrement>
            <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M5 12h14" />
            </svg>
        </button>
        <input
            className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 dark:text-white"
            type="text" value="0" data-hs-input-number-input/>
        <button type="button"
            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white dark:bg-bodybg text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-white/10 dark:text-white dark:hover:bg-bgdark/80 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10"
            data-hs-input-number-increment>
            <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5v14" />
            </svg>
        </button>
    </div>
</div>
</div>
// End Prism Code//`


export const inputnumber6 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="py-2 px-3 bg-white border border-gray-200 rounded-sm dark:bg-bodybg dark:border-white/10"
data-hs-input-number>
<div className="w-full flex justify-between items-center gap-x-3">
    <input
        className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 dark:text-white"
        type="text" value="10" data-hs-input-number-input disabled/>
    <div className="flex justify-end items-center gap-x-1.5">
        <button type="button"
            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:hover:bg-bgdark/80 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10"
            data-hs-input-number-decrement>
            <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M5 12h14" />
            </svg>
        </button>
        <button type="button"
            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:hover:bg-bgdark/80 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10"
            data-hs-input-number-increment>
            <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5v14" />
            </svg>
        </button>
    </div>
</div>
</div>
// End Prism Code//`

export const inputnumber7 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="py-2 px-3 bg-white border border-gray-200 rounded-sm dark:bg-bodybg dark:border-white/10"
data-hs-input-number>
<div className="w-full flex justify-between items-center gap-x-3">
    <input
        className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 dark:text-white"
        type="text" value="10" data-hs-input-number-input disabled/>
    <div className="flex justify-end items-center gap-x-1.5">
        <button type="button"
            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:hover:bg-bgdark/80 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10"
            data-hs-input-number-decrement disabled>
            <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M5 12h14" />
            </svg>
        </button>
        <button type="button"
            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:hover:bg-bgdark/80 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10"
            data-hs-input-number-increment>
            <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5v14" />
            </svg>
        </button>
    </div>
</div>
</div>
// End Prism Code//`


export const inputnumber8 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="py-2 px-3 bg-white border border-danger rounded-sm dark:bg-bodybg"
data-hs-input-number>
<div className="w-full flex justify-between items-center gap-x-3">
    <div className="relative w-full">
        <input id="hs-validation-name-error"
            className="w-full p-0 pe-7 bg-transparent border-0 text-gray-800 focus:ring-0 dark:text-white"
            type="text" value="10" data-hs-input-number-input
            aria-describedby="hs-validation-name-error-helper"/>
        <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none">
            <svg className="flex-shrink-0 size-4 text-danger"
                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" x2="12" y1="8" y2="12" />
                <line x1="12" x2="12.01" y1="16" y2="16" />
            </svg>
        </div>
    </div>
    <div className="flex justify-end items-center gap-x-1.5">
        <button type="button"
            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:hover:bg-bgdark/80 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10"
            data-hs-input-number-decrement>
            <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M5 12h14" />
            </svg>
        </button>
        <button type="button"
            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:hover:bg-bgdark/80 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10"
            data-hs-input-number-increment>
            <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5v14" />
            </svg>
        </button>
    </div>
</div>
</div>

<p className="text-sm text-danger mt-2" id="hs-validation-name-error-helper">Out of limit
</p>
// End Prism Code//`

export const inputnumber9 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="py-2 px-3 bg-gray-100 rounded-sm dark:bg-bodybg2" data-hs-input-number>
<div className="w-full flex justify-between items-center gap-x-5">
    <div className="grow">
        <span className="block text-xs text-gray-500 dark:text-white/70">
            Select quantity
        </span>
        <input
            className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 dark:text-white"
            type="text" defaultValue="1" data-hs-input-number-input/>
    </div>
    <div className="flex justify-end items-center gap-x-1.5">
        <button type="button"
            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white dark:bg-bodybg text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none  dark:border-white/10 dark:text-white dark:hover:bg-bgdark/80 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10"
            data-hs-input-number-decrement>
            <i className="ri-subtract-line"></i>
        </button>
        <button type="button"
            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white dark:bg-bodybg text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none  dark:border-white/10 dark:text-white dark:hover:bg-bgdark/80 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10"
            data-hs-input-number-increment>
            <i className="ri-add-line"></i>
        </button>
    </div>
</div>
</div>
// End Prism Code//`

//Form Passwords

export const password1 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="flex">
<div className="flex-1">
    <input type="password" id="hs-strong-password-base"
        className="dark:placeholder:text-white/50 py-3 px-4 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-white/10"
        placeholder="Enter password"/>
    <div data-hs-strong-password='{
    "target": "#hs-strong-password-base",
    "stripClasses": "hs-strong-password:opacity-100 hs-strong-password-accepted:bg-success h-2 flex-auto rounded-full bg-primary/70 opacity-50 mx-1"
    }' className="flex mt-3 -mx-1"></div>
</div>
</div>
// End Prism Code//`

export const password2 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="flex">
<div className="relative flex-1">
    <input type="password"
        id="hs-strong-password-api-with-indicator-and-hint-in-popover"
        className="dark:placeholder:text-white/50 py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-white/10"
        placeholder="Enter password"/>
    <div id="hs-strong-password-api"
        className="hidden absolute z-10 w-full bg-white shadow-md rounded-sm p-4 dark:bg-bodybg dark:border dark:border-white/10 dark:divide-white/10">
        <div id="hs-strong-password-api-in-popover" data-hs-strong-password='{
            "target": "#hs-strong-password-api-with-indicator-and-hint-in-popover",
            "hints": "#hs-strong-password-api",
            "stripClasses": "hs-strong-password:opacity-100 hs-strong-password-accepted:bg-success h-2 flex-auto rounded-full bg-primary/70 opacity-50 mx-1",
            "mode": "popover",
            "checksExclude": ["lowercase", "min-length"],
            "specialCharactersSet": "&!@"
        }' className="flex mt-2 -mx-1">
        </div>
        <h4 className="mt-3 text-sm font-semibold text-gray-800 dark:text-white">
            Your password must contain:
        </h4>
        <ul className="space-y-1 text-sm text-gray-500 dark:text-white/70">
            <li data-hs-strong-password-hints-rule-text="uppercase"
                className="hs-strong-password-active:text-success flex items-center gap-x-2">
                <span className="hidden" data-check>
                    <svg className="flex-shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                </span>
                <span data-uncheck>
                    <svg className="flex-shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                    </svg>
                </span>
                Should contain uppercase.
            </li>
            <li data-hs-strong-password-hints-rule-text="numbers"
                className="hs-strong-password-active:text-success flex items-center gap-x-2">
                <span className="hidden" data-check>
                    <svg className="flex-shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                </span>
                <span data-uncheck>
                    <svg className="flex-shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                    </svg>
                </span>
                Should contain numbers.
            </li>
            <li data-hs-strong-password-hints-rule-text="special-characters"
                className="hs-strong-password-active:text-success flex items-center gap-x-2">
                <span className="hidden" data-check>
                    <svg className="flex-shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                </span>
                <span data-uncheck>
                    <svg className="flex-shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                    </svg>
                </span>
                Should contain special characters (available chars: &!@).
            </li>
        </ul>
    </div>
</div>
</div>
// End Prism Code//`

 export const password3 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
   <div className="flex-1">
 <input type="password" id="hs-strong-password-with-minLength"
     className="dark:placeholder:text-white/50 py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-white/10"
     placeholder="Enter password"/>
 <div id="hs-strong-password-minLength" data-hs-strong-password='{
     "target": "#hs-strong-password-with-minLength",
     "stripClasses": "hs-strong-password:opacity-100 hs-strong-password-accepted:bg-success h-2 flex-auto rounded-full bg-primary/70 opacity-50 mx-1",
     "minLength": "8"
     }' className="flex mt-3 -mx-1">
 </div>
</div>
// End Prism Code//`

 export const password4 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
  <div className="flex">
 <div className="relative flex-1">
     <input type="password"
         id="hs-strong-password-with-indicator-and-hint-in-popover"
         className="dark:placeholder:text-white/50 py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-white/10"
         placeholder="Enter password"/>
     <div id="hs-strong-password-popover"
         className="hidden absolute z-10 w-full bg-white shadow-md rounded-sm p-4 dark:bg-bodybg dark:border dark:border-white/10 dark:divide-white/10">
         <div id="hs-strong-password-in-popover" data-hs-strong-password='{
         "target": "#hs-strong-password-with-indicator-and-hint-in-popover",
         "hints": "#hs-strong-password-popover",
         "stripClasses": "hs-strong-password:opacity-100 hs-strong-password-accepted:bg-success h-2 flex-auto rounded-full bg-primary/70 opacity-50 mx-1",
         "mode": "popover"
     }' className="flex mt-2 -mx-1">
         </div>

         <h4 className="mt-3 text-sm font-semibold text-gray-800 dark:text-white">
             Your password must contain:
         </h4>

         <ul className="space-y-1 text-sm text-gray-500 dark:text-white/70">
             <li data-hs-strong-password-hints-rule-text="min-length"
                 className="hs-strong-password-active:text-success flex items-center gap-x-2">
                 <span className="hidden" data-check>
                     <svg className="flex-shrink-0 size-4"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         strokeWidth="2" strokeLinecap="round"
                         strokeLinejoin="round">
                         <polyline points="20 6 9 17 4 12" />
                     </svg>
                 </span>
                 <span data-uncheck>
                     <svg className="flex-shrink-0 size-4"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         strokeWidth="2" strokeLinecap="round"
                         strokeLinejoin="round">
                         <path d="M18 6 6 18" />
                         <path d="m6 6 12 12" />
                     </svg>
                 </span>
                 Minimum number of characters is 6.
             </li>
             <li data-hs-strong-password-hints-rule-text="lowercase"
                 className="hs-strong-password-active:text-success flex items-center gap-x-2">
                 <span className="hidden" data-check>
                     <svg className="flex-shrink-0 size-4"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         strokeWidth="2" strokeLinecap="round"
                         strokeLinejoin="round">
                         <polyline points="20 6 9 17 4 12" />
                     </svg>
                 </span>
                 <span data-uncheck>
                     <svg className="flex-shrink-0 size-4"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         strokeWidth="2" strokeLinecap="round"
                         strokeLinejoin="round">
                         <path d="M18 6 6 18" />
                         <path d="m6 6 12 12" />
                     </svg>
                 </span>
                 Should contain lowercase.
             </li>
             <li data-hs-strong-password-hints-rule-text="uppercase"
                 className="hs-strong-password-active:text-success flex items-center gap-x-2">
                 <span className="hidden" data-check>
                     <svg className="flex-shrink-0 size-4"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         strokeWidth="2" strokeLinecap="round"
                         strokeLinejoin="round">
                         <polyline points="20 6 9 17 4 12" />
                     </svg>
                 </span>
                 <span data-uncheck>
                     <svg className="flex-shrink-0 size-4"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         strokeWidth="2" strokeLinecap="round"
                         strokeLinejoin="round">
                         <path d="M18 6 6 18" />
                         <path d="m6 6 12 12" />
                     </svg>
                 </span>
                 Should contain uppercase.
             </li>
             <li data-hs-strong-password-hints-rule-text="numbers"
                 className="hs-strong-password-active:text-success flex items-center gap-x-2">
                 <span className="hidden" data-check>
                     <svg className="flex-shrink-0 size-4"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         strokeWidth="2" strokeLinecap="round"
                         strokeLinejoin="round">
                         <polyline points="20 6 9 17 4 12" />
                     </svg>
                 </span>
                 <span data-uncheck>
                     <svg className="flex-shrink-0 size-4"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         strokeWidth="2" strokeLinecap="round"
                         strokeLinejoin="round">
                         <path d="M18 6 6 18" />
                         <path d="m6 6 12 12" />
                     </svg>
                 </span>
                 Should contain numbers.
             </li>
             <li data-hs-strong-password-hints-rule-text="special-characters"
                 className="hs-strong-password-active:text-success flex items-center gap-x-2">
                 <span className="hidden" data-check>
                     <svg className="flex-shrink-0 size-4"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         strokeWidth="2" strokeLinecap="round"
                         strokeLinejoin="round">
                         <polyline points="20 6 9 17 4 12" />
                     </svg>
                 </span>
                 <span data-uncheck>
                     <svg className="flex-shrink-0 size-4"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         strokeWidth="2" strokeLinecap="round"
                         strokeLinejoin="round">
                         <path d="M18 6 6 18" />
                         <path d="m6 6 12 12" />
                     </svg>
                 </span>
                 Should contain special characters.
             </li>
         </ul>
     </div>
 </div>
</div>
// End Prism Code//`


 export const password5 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
  <div className="flex mb-2">
 <div className="flex-1">
     <input type="password" id="hs-strong-password-with-indicator-and-hint"
         className="dark:placeholder:text-white/50 py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-white/10"
         placeholder="Enter password"/>
     <div id="hs-strong-password" data-hs-strong-password='{
         "target": "#hs-strong-password-with-indicator-and-hint",
         "hints": "#hs-strong-password-hints",
         "stripClasses": "hs-strong-password:opacity-100 hs-strong-password-accepted:bg-success h-2 flex-auto rounded-full bg-primary/70 opacity-50 mx-1"
     }' className="flex mt-3 -mx-1"></div>
 </div>
</div>
<div id="hs-strong-password-hints" className="">
 <div>
     <span className="text-sm text-gray-800 dark:text-gray-200">Level:</span>
     <span
         data-hs-strong-password-hints-weakness-text='["Empty", "Weak", "Medium", "Strong", "Very Strong", "Super Strong"]'
         className="text-sm font-semibold text-gray-800 dark:text-gray-200"></span>
 </div>

 <h4 className="my-2 text-sm font-semibold text-gray-800 dark:text-white">
     Your password must contain:
 </h4>

 <ul className="space-y-1 text-sm text-gray-500 dark:text-white/70">
     <li data-hs-strong-password-hints-rule-text="min-length"
         className="hs-strong-password-active:text-success flex items-center gap-x-2">
         <span className="hidden" data-check>
             <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                 width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                 strokeLinejoin="round">
                 <polyline points="20 6 9 17 4 12" />
             </svg>
         </span>
         <span data-uncheck>
             <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                 width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                 strokeLinejoin="round">
                 <path d="M18 6 6 18" />
                 <path d="m6 6 12 12" />
             </svg>
         </span>
         Minimum number of characters is 6.
     </li>
     <li data-hs-strong-password-hints-rule-text="lowercase"
         className="hs-strong-password-active:text-success flex items-center gap-x-2">
         <span className="hidden" data-check>
             <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                 width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                 strokeLinejoin="round">
                 <polyline points="20 6 9 17 4 12" />
             </svg>
         </span>
         <span data-uncheck>
             <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                 width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                 strokeLinejoin="round">
                 <path d="M18 6 6 18" />
                 <path d="m6 6 12 12" />
             </svg>
         </span>
         Should contain lowercase.
     </li>
     <li data-hs-strong-password-hints-rule-text="uppercase"
         className="hs-strong-password-active:text-success flex items-center gap-x-2">
         <span className="hidden" data-check>
             <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                 width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                 strokeLinejoin="round">
                 <polyline points="20 6 9 17 4 12" />
             </svg>
         </span>
         <span data-uncheck>
             <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                 width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                 strokeLinejoin="round">
                 <path d="M18 6 6 18" />
                 <path d="m6 6 12 12" />
             </svg>
         </span>
         Should contain uppercase.
     </li>
     <li data-hs-strong-password-hints-rule-text="numbers"
         className="hs-strong-password-active:text-success flex items-center gap-x-2">
         <span className="hidden" data-check>
             <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                 width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                 strokeLinejoin="round">
                 <polyline points="20 6 9 17 4 12" />
             </svg>
         </span>
         <span data-uncheck>
             <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                 width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                 strokeLinejoin="round">
                 <path d="M18 6 6 18" />
                 <path d="m6 6 12 12" />
             </svg>
         </span>
         Should contain numbers.
     </li>
     <li data-hs-strong-password-hints-rule-text="special-characters"
         className="hs-strong-password-active:text-success flex items-center gap-x-2">
         <span className="hidden" data-check>
             <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                 width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                 strokeLinejoin="round">
                 <polyline points="20 6 9 17 4 12" />
             </svg>
         </span>
         <span data-uncheck>
             <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                 width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                 strokeLinejoin="round">
                 <path d="M18 6 6 18" />
                 <path d="m6 6 12 12" />
             </svg>
         </span>
         Should contain special characters.
     </li>
 </ul>
</div>
// End Prism Code//`

export const password6 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<label className="block text-sm mb-2 dark:text-white">Password</label>
<div className="relative">
    <input id="hs-toggle-password" type="password"
        className="dark:placeholder:text-white/50 py-3 px-4 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:focus:ring-primary"
        placeholder="Enter password" value="12345qwerty"/>
    <button type="button" data-hs-toggle-password='{
    "target": "#hs-toggle-password"
    }'
        className="absolute top-0 end-0 p-3.5 rounded-e-md dark:focus:outline-none dark:focus:ring-0 dark:shadow-none dark:focus:ring-transparent">
        <svg className="flex-shrink-0 size-3.5 text-gray-400 dark:text-white" width="24"
            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path className="hs-password-active:hidden"
                d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
            <path className="hs-password-active:hidden"
                d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
            <path className="hs-password-active:hidden"
                d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
            <line className="hs-password-active:hidden" x1="2" x2="22" y1="2" y2="22" />
            <path className="hidden hs-password-active:block"
                d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
            <circle className="hidden hs-password-active:block" cx="12" cy="12" r="3" />
        </svg>
    </button>
</div>
// End Prism Code//`


export const password7 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
  <div className="mb-5">
<label htmlFor="hs-toggle-password-with-checkbox" className="block text-sm mb-2 dark:text-white">Current password</label>
<input id="hs-toggle-password-with-checkbox" type="text" className="dark:placeholder:text-white/50 py-3 px-4 block w-full border-gray-200
 rounded-sm text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg2
  dark:border-white/10 dark:text-white/70 dark:focus:ring-primary" placeholder="Enter current password" value="12345qwerty"/>

<div className="flex mt-4">
    <input data-hs-toggle-password="{
        &quot;target&quot;: &quot;#hs-toggle-password-with-checkbox&quot;
    }" id="hs-toggle-password-checkbox" type="checkbox" className="ti-form-checkbox mt-0.5 pointer-events-none active"/>
    <label htmlFor="hs-toggle-password-checkbox" className="text-sm text-gray-500 ms-2 dark:text-white/70">Show password</label>
</div>
</div>
// End Prism Code//`

export const password8 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="space-y-5" data-hs-toggle-password-group>
                                    
<label htmlFor="hs-toggle-password-multi-toggle-np"
    className="block text-sm mb-2 dark:text-white">New password</label>
<div className="relative">
    <input id="hs-toggle-password-multi-toggle-np" type="password"
        className="dark:placeholder:text-white/50 py-3 px-4 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:focus:ring-primary"
        placeholder="Enter new password"/>
    <button type="button" data-hs-toggle-password='{
        "target": ["#hs-toggle-password-multi-toggle", "#hs-toggle-password-multi-toggle-np"]
    }'
        className="absolute top-0 end-0 p-3.5 rounded-e-md dark:focus:outline-none dark:focus:ring-0 dark:shadow-none dark:focus:ring-transparent">
        <svg className="flex-shrink-0 size-3.5 text-gray-400 dark:text-white" width="24"
            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path className="hs-password-active:hidden"
                d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
            <path className="hs-password-active:hidden"
                d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
            <path className="hs-password-active:hidden"
                d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
            <line className="hs-password-active:hidden" x1="2" x2="22" y1="2" y2="22" />
            <path className="hidden hs-password-active:block"
                d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
            <circle className="hidden hs-password-active:block" cx="12" cy="12" r="3" />
        </svg>
    </button>
</div>
<label htmlFor="hs-toggle-password-multi-toggle"
    className="block text-sm mb-2 dark:text-white">Current password</label>
<div className="relative">
    <input id="hs-toggle-password-multi-toggle" type="password"
        className="dark:placeholder:text-white/50 py-3 px-4 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:focus:ring-primary"
        placeholder="Enter current password" value="12345qwerty"/>
    <button type="button" data-hs-toggle-password='{
        "target": ["#hs-toggle-password-multi-toggle", "#hs-toggle-password-multi-toggle-np"]
    }'
        className="absolute top-0 end-0 p-3.5 rounded-e-md dark:focus:outline-none dark:focus:ring-0 dark:shadow-none dark:focus:ring-transparent">
        <svg className="flex-shrink-0 size-3.5 text-gray-400 dark:text-white" width="24"
            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path className="hs-password-active:hidden"
                d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
            <path className="hs-password-active:hidden"
                d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
            <path className="hs-password-active:hidden"
                d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
            <line className="hs-password-active:hidden" x1="2" x2="22" y1="2" y2="22" />
            <path className="hidden hs-password-active:block"
                d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
            <circle className="hidden hs-password-active:block" cx="12" cy="12" r="3" />
        </svg>
    </button>
</div>
</div>
// End Prism Code//`

export const password9 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="flex space-x-3 rtl:space-x-reverse" data-hs-pin-input>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    data-hs-pin-input-item autoFocus/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    data-hs-pin-input-item/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    data-hs-pin-input-item/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    data-hs-pin-input-item/>
</div>
// End Prism Code//`


export const password10 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="flex space-x-3 rtl:space-x-reverse" data-hs-pin-input>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item/>
</div>
// End Prism Code//`

export const password11 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="flex space-x-3 rtl:space-x-reverse" data-hs-pin-input>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center bg-gray-100 border-transparent rounded-md text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg2 dark:border-transparent dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center bg-gray-100 border-transparent rounded-md text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg2 dark:border-transparent dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center bg-gray-100 border-transparent rounded-md text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg2 dark:border-transparent dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center bg-gray-100 border-transparent rounded-md text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg2 dark:border-transparent dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item/>
</div>
// End Prism Code//`

export const password12 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="flex space-x-3 rtl:space-x-reverse" data-hs-pin-input>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-primary focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-white/10 dark:text-white dark:focus:ring-primary dark:focus:border-b-primary"
    placeholder="⚬" data-hs-pin-input-item/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-primary focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-white/10 dark:text-white dark:focus:ring-primary dark:focus:border-b-primary"
    placeholder="⚬" data-hs-pin-input-item/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-primary focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-white/10 dark:text-white dark:focus:ring-primary dark:focus:border-b-primary"
    placeholder="⚬" data-hs-pin-input-item/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-primary focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-white/10 dark:text-white dark:focus:ring-primary dark:focus:border-b-primary"
    placeholder="⚬" data-hs-pin-input-item/>
</div>
// End Prism Code//`

export const password13 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="flex space-x-3 rtl:space-x-reverse" data-hs-pin-input>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm focus:scale-110 focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item />
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm focus:scale-110 focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item />
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm focus:scale-110 focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item />
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm focus:scale-110 focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item />
</div>
// End Prism Code//`

export const password14 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="flex space-x-3 rtl:space-x-reverse" data-hs-pin-input='{"availableCharsRE": "^[0-9]+$"}'>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item />
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item />
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item />
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item />
</div>
// End Prism Code//`

export const password15 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="flex space-x-3 rtl:space-x-reverse" data-hs-pin-input='{"availableCharsRE": "^[0-3]+$"}'>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item />
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item />
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item />
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item />
</div>
// End Prism Code//`

export const password16 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="flex space-x-3 rtl:space-x-reverse" data-hs-pin-input='{"availableCharsRE": "^[0-3]+$"}'>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item />
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item />
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item />
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item />
</div>
// End Prism Code//`

export const password17 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="flex space-x-3 rtl:space-x-reverse" data-hs-pin-input>
<input
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    type="tel" placeholder="⚬" data-hs-pin-input-item/>
<input
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    type="tel" placeholder="⚬" data-hs-pin-input-item/>
<input
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    type="tel" placeholder="⚬" data-hs-pin-input-item/>
<input
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    type="tel" placeholder="⚬" data-hs-pin-input-item/>
</div>
// End Prism Code//`

export const password18 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="flex space-x-3 rtl:space-x-reverse" data-hs-pin-input>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item disabled/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item disabled/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item disabled/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item disabled/>
</div>
// End Prism Code//`

export const password19 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
  <div className="flex space-x-3 rtl:space-x-reverse" data-hs-pin-input>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item/>
</div>
<div className="flex space-x-3 rtl:space-x-reverse" data-hs-pin-input>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item/>
</div>
<div className="flex space-x-3 rtl:space-x-reverse" data-hs-pin-input>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item/>
</div>
// End Prism Code//`

export const password20 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="flex space-x-3 rtl:space-x-reverse " data-hs-pin-input>
<input type="text" className="dark:placeholder:text-white/50 block size-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary" placeholder="⚬" data-hs-pin-input-item/>
<input type="text" className="dark:placeholder:text-white/50 block size-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary" placeholder="⚬" data-hs-pin-input-item/>
<input type="text" className="dark:placeholder:text-white/50 block size-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary" placeholder="⚬" data-hs-pin-input-item/>
<input type="text" className="dark:placeholder:text-white/50 block size-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary" placeholder="⚬" data-hs-pin-input-item/>
</div>

<div className="flex space-x-3  rtl:space-x-reverse" data-hs-pin-input>
<input type="text" className="dark:placeholder:text-white/50 block size-[46px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary" placeholder="⚬" data-hs-pin-input-item/>
<input type="text" className="dark:placeholder:text-white/50 block size-[46px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary" placeholder="⚬" data-hs-pin-input-item/>
<input type="text" className="dark:placeholder:text-white/50 block size-[46px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary" placeholder="⚬" data-hs-pin-input-item/>
<input type="text" className="dark:placeholder:text-white/50 block size-[46px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary" placeholder="⚬" data-hs-pin-input-item/>
</div>

<div className="flex space-x-3 rtl:space-x-reverse " data-hs-pin-input>
<input type="text" className="dark:placeholder:text-white/50 block sm:size-[62px] size-[50px] text-center border-gray-200 rounded-md text-lg [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary" placeholder="⚬" data-hs-pin-input-item/>
<input type="text" className="dark:placeholder:text-white/50 block sm:size-[62px] size-[50px] text-center border-gray-200 rounded-md text-lg [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary" placeholder="⚬" data-hs-pin-input-item/>
<input type="text" className="dark:placeholder:text-white/50 block sm:size-[62px] size-[50px] text-center border-gray-200 rounded-md text-lg [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary" placeholder="⚬" data-hs-pin-input-item/>
<input type="text" className="dark:placeholder:text-white/50 block sm:size-[62px] size-[50px] text-center border-gray-200 rounded-md text-lg [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary" placeholder="⚬" data-hs-pin-input-item/>
</div>
// End Prism Code//`

//Form Counter

export const counter1 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="flex justify-end mb-3">
<div id="toggle-count" className="p-0.5 inline-block bg-gray-100 rounded-sm dark:bg-bodybg2">
<label htmlFor="toggle-count-monthly" className="relative inline-block py-2 px-3">
    <span className="inline-block relative z-10 text-sm font-medium text-gray-800 cursor-pointer dark:text-gray-200">
    Monthly
    </span>
    <input id="toggle-count-monthly" name="toggle-count" type="radio" className="absolute top-0 end-0 size-full border-transparent bg-transparent dark:bg-bodybg bg-none text-transparent rounded-sm cursor-pointer before:absolute before:inset-0 before:size-full before:rounded-sm focus:ring-offset-0 checked:before:bg-white checked:before:shadow-sm checked:bg-none focus:ring-transparent dark:checked:before:bg-bodybg dark:focus:ring-offset-transparent"/>
</label>
<label htmlFor="toggle-count-annual" className="relative inline-block py-2 px-3 dark:bg-bodybg2">
    <span className="inline-block relative z-10 text-sm font-medium text-gray-800 cursor-pointer dark:text-gray-200">
    Annual
    </span>
    <input id="toggle-count-annual" name="toggle-count" type="radio" className="absolute top-0 end-0 size-full border-transparent bg-transparent bg-none text-transparent rounded-sm cursor-pointer before:absolute before:inset-0 before:size-full before:rounded-sm focus:ring-offset-0 checked:before:bg-white checked:before:shadow-sm checked:bg-none focus:ring-transparent dark:checked:before:bg-bodybg2 dark:focus:ring-offset-transparent" checked/>
</label>
</div>
</div>

<div className="grid sm:grid-cols-3 lg:items-center border border-gray-200 rounded-sm dark:border-white/10">

<div className="flex flex-col p-4">
<h4 className="text-gray-800 mb-1 dark:text-white">Startup</h4>
<div className="flex gap-x-1">
    <span className="text-xl font-normal text-gray-800 dark:text-white">$</span>
    <p data-hs-toggle-count='{
        "target": "#toggle-count",
        "min": 19,
        "max": 29
    }' className="text-gray-800 font-semibold text-3xl dark:text-white">
    19
    </p>
</div>
</div>
<div className="flex flex-col p-4">
<div className="flex justify-between">
    <h4 className="text-gray-800 mb-1 dark:text-gray-200">Team</h4>
</div>
<div className="flex gap-x-1">
    <span className="text-xl font-normal text-gray-800 dark:text-gray-200">$</span>
    <p data-hs-toggle-count='{
        "target": "#toggle-count",
        "min": 89,
        "max": 99
    }' className="text-gray-800 font-semibold text-3xl dark:text-gray-200">
    89
    </p>
</div>
</div>
<div className="flex flex-col p-4">
<h4 className="text-gray-800 mb-1 dark:text-gray-200">Enterprise</h4>
<div className="flex gap-x-1">
    <span className="text-xl font-normal text-gray-800 dark:text-gray-200">$</span>
    <p data-hs-toggle-count='{
        "target": "#toggle-count",
        "min": 129,
        "max": 149
    }' className="text-gray-800 font-semibold text-3xl dark:text-gray-200">
    129
    </p>
</div>
</div>
</div>
// End Prism Code//`
export const counter2 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="flex justify-center mb-4">
<div>
    <label htmlFor="toggle-count-switch" className="inline-block p-2">
        <span className="inline-block text-sm text-gray-800 cursor-pointer dark:text-white">
            Monthly
        </span>
    </label>
    <input id="toggle-count-switch" name="toggle-count-switch" type="checkbox" className="ti-switch"/>
    <label htmlFor="toggle-count-switch" className="inline-block p-2">
        <span className="inline-block text-sm text-gray-800 cursor-pointer dark:text-white">
            Annual
        </span>
    </label>
</div>
</div>
<div className="grid sm:grid-cols-3 lg:items-center border border-gray-200 rounded-sm dark:border-white/10">

<div className="flex flex-col p-4">
    <h4 className="text-gray-800 mb-1 dark:text-white">Startup</h4>
    <div className="flex gap-x-1">
    <span className="text-xl font-normal text-gray-800 dark:text-white">$</span>
    <p data-hs-toggle-count='{
        "target": "#toggle-count-switch",
        "min": 19,
        "max": 29
        }' className="text-gray-800 font-semibold text-3xl dark:text-white">
        19
    </p>
    </div>
</div>
<div className="flex flex-col p-4">
    <div className="flex justify-between">
    <h4 className="text-gray-800 mb-1 dark:text-white">Team</h4>
    </div>
    <div className="flex gap-x-1">
    <span className="text-xl font-normal text-gray-800 dark:text-white">$</span>
    <p data-hs-toggle-count='{
        "target": "#toggle-count-switch",
        "min": 89,
        "max": 99
        }' className="text-gray-800 font-semibold text-3xl dark:text-white">
        89
    </p>
    </div>
</div>
<div className="flex flex-col p-4">
    <h4 className="text-gray-800 mb-1 dark:text-white">Enterprise</h4>
    <div className="flex gap-x-1">
    <span className="text-xl font-normal text-gray-800 dark:text-white">$</span>
    <p data-hs-toggle-count='{
        "target": "#toggle-count-switch",
        "min": 129,
        "max": 149
        }' className="text-gray-800 font-semibold text-3xl dark:text-white">
        129
    </p>
    </div>
</div>
</div>
// End Prism Code//`

export const counter3 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div id="hs-wrapper-for-copy" className="space-y-3">
<input id="hs-content-for-copy" type="text" className="dark:placeholder:text-white/50 py-3 px-4 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:focus:ring-primary" placeholder="Enter Name"/>
</div>

<p className="mt-3 text-end">
<button type="button" data-hs-copy-markup='{
    "targetSelector": "#hs-content-for-copy",
    "wrapperSelector": "#hs-wrapper-for-copy",
    "limit": 10
}' id="hs-copy-content" className="py-1.5 px-2 inline-flex items-center gap-x-1 text-xs font-medium rounded-full border border-dashed border-gray-200 bg-white text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:hover:bg-bgdark dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-primary">
<svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
Add Name
</button>
</p>
// End Prism Code//`
export const counter4 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
  <div id="hs-wrapper-select-for-copy" className="space-y-3">
<div id="hs-content-select-for-copy" className="relative">
<select data-hs-select='{
    "placeholder": "Select option...",
    "toggleTag": "<button type=\"button\"></button>",
    "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-sm text-start text-sm focus:border-primary focus:ring-primary before:absolute before:inset-0 before:z-[1] dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-primary",
    "dropdownClasses": "mt-2 z-50 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-sm overflow-hidden overflow-y-auto dark:bg-bodybg dark:border-white/10",
    "optionClasses": "cursor-pointer py-2 px-4 w-full text-sm text-gray-800 hover:bg-gray-100 rounded-sm focus:outline-none focus:bg-gray-100 dark:bg-bodybg dark:hover:bg-bodybg dark:text-gray-200 dark:focus:bg-bodybg",
    "optionTemplate": "<div class=\"flex justify-between w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-4 text-primary\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" viewBox=\"0 0 16 16\"><path d=\"M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z\"/></svg></span></div>"
    }'>
    <option value="">Select Option ...</option>
    <option>Name</option>
    <option>Email address</option>
    <option>Description</option>
    <option>User ID</option>
</select>

<div className="absolute top-1/2 end-3 -translate-y-1/2">
    <svg className="flex-shrink-0 size-3.5 text-gray-500 dark:text-white/70" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/></svg>
</div>
</div>
</div>
<p className="mt-3 text-end">
<button type="button" data-hs-copy-markup='{
        "targetSelector": "#hs-content-select-for-copy",
        "wrapperSelector": "#hs-wrapper-select-for-copy",
        "limit": 3
    }' id="hs-copy-select-content" className="py-1.5 px-2 inline-flex items-center gap-x-1 text-xs font-medium rounded-full border border-dashed border-gray-200 bg-white text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:hover:bg-bgdark dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-primary">
    <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
    Add Option
</button>
</p>
// End Prism Code//`

// Form Advanvced select



export const advanvcedselect1 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="relative">
<select data-hs-select='{
    "placeholder": "Select option...",
    "toggleTag": "<button type=\"button\"></button>",
    "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-sm text-start text-sm focus:border-primary focus:ring-primary before:absolute before:inset-0 before:z-[1] dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-primary",
    "dropdownClasses": "mt-2 z-40 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-sm overflow-hidden overflow-y-auto dark:bg-bodybg dark:border-white/10",
    "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-sm focus:outline-none focus:bg-gray-100 dark:bg-bodybg dark:hover:bg-bodybg dark:text-gray-200 dark:focus:bg-bodybg",
    "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-3.5 text-primary dark:text-primary\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
}' className="hidden">
    <option value="">Choose</option>
    <option>Name</option>
    <option>Email address</option>
    <option>Description</option>
    <option>User ID</option>
</select>
<div className="absolute top-1/2 end-3 -translate-y-1/2">
    <svg className="flex-shrink-0 size-3.5 text-gray-500 dark:text-white/70"
        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round">
        <path d="m7 15 5 5 5-5" />
        <path d="m7 9 5-5 5 5" />
    </svg>
</div>
</div>
// End Prism Code//`

export const advanvcedselect2 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="relative">
<select data-hs-select='{
    "placeholder": "<span class=\"inline-flex items-center\"><svg class=\"flex-shrink-0 size-3.5 me-2\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><polygon points=\"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3\"/></svg> Filter</span>",
    "toggleTag": "<button type=\"button\"></button>",
    "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-sm text-start text-sm focus:border-primary focus:ring-primary before:absolute before:inset-0 before:z-[1] dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-primary",
    "dropdownClasses": "mt-2 z-40 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-sm overflow-hidden overflow-y-auto dark:bg-bodybg dark:border-white/10",
    "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-sm focus:outline-none focus:bg-gray-100 dark:bg-bodybg dark:hover:bg-bodybg dark:text-gray-200 dark:focus:bg-bodybg",
    "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-3.5 text-primary dark:text-primary\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
}' className="hidden">
    <option value="">Choose</option>
    <option>Name</option>
    <option>Email address</option>
    <option>Description</option>
    <option>User ID</option>
</select>
<div className="absolute top-1/2 end-3 -translate-y-1/2">
    <svg className="flex-shrink-0 size-3.5 text-gray-500 dark:text-white/70"
        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round">
        <path d="m7 15 5 5 5-5" />
        <path d="m7 9 5-5 5 5" />
    </svg>
</div>
</div>
// End Prism Code//`


export const advanvcedselect3 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="relative">
<select multiple data-hs-select='{
    "placeholder": "Select multiple options...",
    "toggleTag": "<button type=\"button\"></button>",
    "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-sm text-start text-sm focus:border-primary focus:ring-primary before:absolute before:inset-0 before:z-[1] dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-primary",
    "dropdownClasses": "mt-2 z-40 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-sm overflow-hidden overflow-y-auto dark:bg-bodybg dark:border-white/10",
    "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-sm focus:outline-none focus:bg-gray-100 dark:bg-bodybg dark:hover:bg-bodybg dark:text-gray-200 dark:focus:bg-bodybg",
    "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-3.5 text-primary dark:text-primary\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
}' className="hidden">
    <option value="">Choose</option>
    <option>Name</option>
    <option>Email address</option>
    <option>Description</option>
    <option>User ID</option>
</select>

<div className="absolute top-1/2 end-3 -translate-y-1/2">
    <svg className="flex-shrink-0 size-3.5 text-gray-500 dark:text-white/70"
        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round">
        <path d="m7 15 5 5 5-5" />
        <path d="m7 9 5-5 5 5" />
    </svg>
</div>
</div>
// End Prism Code//`


export const advanvcedselect4 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="relative">
<select multiple data-hs-select='{
    "placeholder": "Select multiple options...",
    "toggleTag": "<button type=\"button\"></button>",
    "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-sm text-start text-sm focus:border-primary focus:ring-primary before:absolute before:inset-0 before:z-[1] dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-primary",
    "toggleCountText": "selected",
    "dropdownClasses": "mt-2 z-40 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-sm overflow-hidden overflow-y-auto dark:bg-bodybg dark:border-white/10",
    "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-sm focus:outline-none focus:bg-gray-100 dark:bg-bodybg dark:hover:bg-bodybg dark:text-gray-200 dark:focus:bg-bodybg",
    "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-3.5 text-primary dark:text-primary\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
}' className="hidden">
    <option value="">Choose</option>
    <option>Name</option>
    <option>Email address</option>
    <option>Description</option>
    <option>User ID</option>
</select>

<div className="absolute top-1/2 end-3 -translate-y-1/2">
    <svg className="flex-shrink-0 size-3.5 text-gray-500 dark:text-white/70"
        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round">
        <path d="m7 15 5 5 5-5" />
        <path d="m7 9 5-5 5 5" />
    </svg>
</div>
</div>
// End Prism Code//`


export const advanvcedselect5 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="relative">
<select data-hs-select='{
  "hasSearch": true,
  "searchPlaceholder": "Search...",
  "searchClasses": "block w-full text-sm border-gray-200 rounded-sm focus:border-primary focus:ring-primary before:absolute before:inset-0 before:z-[1] dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-primary py-2 px-3 dark:placeholder:text-white/50",
  "searchWrapperClasses": "bg-white p-2 -mx-1 sticky top-0 dark:bg-bodybg",
  "placeholder": "Select country...",
  "toggleTag": "<button type=\"button\"><span class=\"me-2\" data-icon></span><span class=\"text-gray-800 dark:text-gray-200\" data-title></span></button>",
  "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-sm text-start text-sm focus:border-primary focus:ring-primary before:absolute before:inset-0 before:z-[1] dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-primary",
  "dropdownClasses": "mt-2 max-h-72 pb-1 px-1 space-y-0.5 z-20 w-full bg-white border border-gray-200 rounded-sm overflow-hidden overflow-y-auto dark:bg-bodybg dark:border-white/10",
  "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-sm focus:outline-none focus:bg-gray-100 dark:bg-bodybg dark:hover:bg-bodybg dark:text-gray-200 dark:focus:bg-bodybg",
  "optionTemplate": "<div><div class=\"flex items-center\"><div class=\"me-2\" data-icon></div><div class=\"text-gray-800 dark:text-gray-200\" data-title></div></div></div>"
}' className="hidden">
    <option value="">Choose</option>
    <option value="Us"
        data-hs-select-option='{
  "icon": "<img class=\"inline-block size-4 rounded-full\" src=\"../../assets/images/flags/us_flag.jpg\" alt=\"USA\" />"}'>
        USA
    </option>
    <option value="ar"
        data-hs-select-option='{
  "icon": "<img class=\"inline-block size-4 rounded-full\" src=\"../../assets/images/flags/argentina_flag.jpg\" alt=\"Argentina\" />"}'>
        Argentina
    </option>
    <option value="ca"
        data-hs-select-option='{
  "icon": "<img class=\"inline-block size-4 rounded-full\" src=\"../../assets/images/flags/canada_flag.jpg\" alt=\"Canada\" />"}'>
        Canada
    </option>
    <option value="fr"
        data-hs-select-option='{
  "icon": "<img class=\"inline-block size-4 rounded-full\" src=\"../../assets/images/flags/india_flag.jpg\" alt=\"India\" />"}'>
        France
    </option>
    <option value="gr"
        data-hs-select-option='{
  "icon": "<img class=\"inline-block size-4 rounded-full\" src=\"../../assets/images/flags/germany_flag.jpg\" alt=\"Germany\" />"}'>
        Germany
    </option>
    <option value="it"
        data-hs-select-option='{
  "icon": "<img class=\"inline-block size-4 rounded-full\" src=\"../../assets/images/flags/italy_flag.jpg\" alt=\"Italy\" />"}'>
        Italy
    </option>
</select>
<div className="absolute top-1/2 end-3 -translate-y-1/2">
    <svg className="flex-shrink-0 size-3.5 text-gray-500 dark:text-white/70"
        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round">
        <path d="m7 15 5 5 5-5" />
        <path d="m7 9 5-5 5 5" />
    </svg>
</div>
</div>
// End Prism Code//`

export const advanvcedselect6 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="relative">
<select multiple data-hs-select='{
  "placeholder": "Select option...",
  "toggleTag": "<button type=\"button\"></button>",
  "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-sm text-start text-sm focus:border-primary focus:ring-primary dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-primary",
  "dropdownClasses": "mt-2 z-40 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-sm overflow-hidden overflow-y-auto dark:bg-bodybg dark:border-white/10",
  "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-sm focus:outline-none focus:bg-gray-100 dark:bg-bodybg dark:hover:bg-bodybg dark:text-gray-200 dark:focus:bg-bodybg",
  "mode": "tags",
  "tagsClasses": "relative ps-0.5 pe-9 min-h-[46px] flex items-center flex-wrap text-nowrap w-full border border-gray-200 rounded-sm text-start text-sm focus:border-primary focus:ring-primary dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-primary",
  "tagsItemTemplate": "<div class=\"flex flex-nowrap items-center relative z-10 bg-white border border-gray-200 rounded-full p-1 m-1 dark:bg-bodybg dark:border-white/10\"><div class=\"size-6 me-1\" data-icon></div><div class=\"whitespace-nowrap\" data-title></div><div class=\"inline-flex flex-shrink-0 justify-center items-center size-5 ms-2 rounded-full text-gray-800 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-white/70 text-sm dark:bg-bodybg/50 dark:hover:bg-bodybg dark:text-white/70 cursor-pointer\" data-remove><svg class=\"flex-shrink-0 size-3\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><path d=\"M18 6 6 18\"/><path d=\"m6 6 12 12\"/></svg></div></div>",
  "tagsInputClasses": "absolute inset-0 w-full py-3 px-4 pe-9 flex-1 text-sm rounded-sm focus-visible:ring-0 !border-0 dark:bg-bodybg dark:text-white/70 dark:placeholder:text-white/50",
  "optionTemplate": "<div class=\"flex items-center\"><div class=\"size-8 me-2\" data-icon></div><div><div class=\"text-sm font-semibold text-gray-800 dark:text-gray-200\" data-title></div><div class=\"text-xs text-gray-500 dark:text-white/70\" data-description></div></div><div class=\"ms-auto\"><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-4 text-primary\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" viewBox=\"0 0 16 16\"><path d=\"M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z\"/></svg></span></div></div>"
}' className="hidden">
    <option value="">Choose</option>
    <option selected value="1" data-hs-select-option='{
    "description": "chris",
    "icon": "<img class=\"inline-block rounded-full\" src=\"../../assets/images/faces/1.jpg\" />"
  }'>Christina</option>
    <option value="2" data-hs-select-option='{
    "description": "david",
    "icon": "<img class=\"inline-block rounded-full\" src=\"../../assets/images/faces/9.jpg\" />"
  }'>David</option>
    <option value="3" data-hs-select-option='{
    "description": "alex27",
    "icon": "<img class=\"inline-block rounded-full\" src=\"../../assets/images/faces/10.jpg\" />"
  }'>Alex</option>
    <option value="4" data-hs-select-option='{
    "description": "samia_samia",
    "icon": "<img class=\"inline-block rounded-full\" src=\"../../assets/images/faces/2.jpg\" />"
  }'>Samia</option>
</select>

<div className="absolute top-1/2 end-3 -translate-y-1/2">
    <svg className="flex-shrink-0 size-3.5 text-gray-500 dark:text-white/70"
        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round">
        <path d="m7 15 5 5 5-5" />
        <path d="m7 9 5-5 5 5" />
    </svg>
</div>
</div>
// End Prism Code//`
export const advanvcedselect7 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="relative">
<select data-hs-select='{
  "placeholder": "Select option...",
  "toggleTag": "<button type=\"button\"><span class=\"me-2\" data-icon></span><span class=\"text-gray-800 dark:text-gray-200\" data-title></span></button>",
  "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex items-center text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-sm text-start text-sm focus:border-primary focus:ring-primary before:absolute before:inset-0 before:z-[1] dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-primary",
  "dropdownClasses": "mt-2 z-40 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-sm overflow-hidden overflow-y-auto dark:bg-bodybg dark:border-white/10",
  "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-sm focus:outline-none focus:bg-gray-100 dark:bg-bodybg dark:hover:bg-bodybg dark:text-gray-200 dark:focus:bg-bodybg",
  "optionTemplate": "<div><div class=\"flex items-center\"><div class=\"me-2\" data-icon></div><div class=\"font-semibold text-gray-800 dark:text-gray-200\" data-title></div></div><div class=\"mt-1.5 text-sm text-gray-500 dark:text-white/70\" data-description></div></div>"
}' className="hidden">
    <option value="">Choose</option>
    <option value="1" selected data-hs-select-option='{
    "description": "Visible to anyone who van view your content.",
    "icon": "<svg class=\"flex-shrink-0 size-4 text-gray-800 dark:text-gray-200\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\" class=\"lucide lucide-globe-2\"><path d=\"M21.54 15H17a2 2 0 0 0-2 2v4.54\"/><path d=\"M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17\"/><path d=\"M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05\"/><circle cx=\"12\" cy=\"12\" r=\"10\"/></svg>"
  }'>Anyone</option>

    <option value="2" data-hs-select-option='{
    "description": "Only visible to you.",
    "icon": "<svg class=\"flex-shrink-0 size-4 text-gray-800 dark:text-gray-200\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\" class=\"lucide lucide-lock\"><rect width=\"18\" height=\"11\" x=\"3\" y=\"11\" rx=\"2\" ry=\"2\"/><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"/></svg>"
  }'>Only you</option>
</select>

<div className="absolute top-1/2 end-3 -translate-y-1/2">
    <svg className="flex-shrink-0 size-3.5 text-gray-500 dark:text-white/70"
        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round">
        <path d="m7 15 5 5 5-5" />
        <path d="m7 9 5-5 5 5" />
    </svg>
</div>
</div>
// End Prism Code//`
export const advanvcedselect8 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="relative">
<select data-hs-select='{
  "placeholder": "Select assignee",
  "toggleTag": "<button type=\"button\"><span class=\"me-2\" data-icon></span><span class=\"text-gray-800 dark:text-gray-200\" data-title></span></button>",
  "toggleClasses": "hs-select-disabled:pointer-events-none items-center hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-sm text-start text-sm focus:border-primary focus:ring-primary before:absolute before:inset-0 before:z-[1] dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-primary",
  "dropdownClasses": "mt-2 max-h-72 p-1 space-y-0.5 z-20 w-full bg-white border border-gray-200 rounded-sm overflow-hidden overflow-y-auto dark:bg-bodybg dark:border-white/10",
  "optionClasses": "py-2 px-3 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-sm focus:outline-none focus:bg-gray-100 dark:bg-bodybg dark:hover:bg-bodybg dark:text-gray-200 dark:focus:bg-bodybg",
  "optionTemplate": "<div class=\"flex items-center\"><div class=\"me-2\" data-icon></div><div><div class=\"hs-selected:font-semibold text-sm text-gray-800 dark:text-gray-200\" data-title></div></div><div class=\"ms-auto\"><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-4 text-primary\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" viewBox=\"0 0 16 16\"><path d=\"M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z\"/></svg></span></div></div>"
}' className="hidden">
    <option value="">Choose</option>
    <option selected value="1"
        data-hs-select-option='{
    "icon": "<img class=\"inline-block size-6 rounded-full\" src=\"../../assets/images/faces/10.jpg\" alt=\"James Collins\" />"}'>
        James Collins
    </option>

    <option value="2"
        data-hs-select-option='{
    "icon": "<img class=\"inline-block size-6 rounded-full\" src=\"../../assets/images/faces/1.jpg\" alt=\"Amanda Harvey\" />"}'>
        Amanda Harvey
    </option>

    <option value="3"
        data-hs-select-option='{
    "icon": "<img class=\"inline-block size-6 rounded-full\" src=\"../../assets/images/faces/11.jpg\" alt=\"Costa Quinn\" />"}'>
        Costa Quinn
    </option>
</select>

<div className="absolute top-1/2 end-3 -translate-y-1/2">
    <svg className="flex-shrink-0 size-3.5 text-gray-500 dark:text-white/70"
        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round">
        <path d="m7 15 5 5 5-5" />
        <path d="m7 9 5-5 5 5" />
    </svg>
</div>
</div>
// End Prism Code//`
export const advanvcedselect9 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="space-y-3">
                                    
<div className="relative">
    <select data-hs-select='{
        "placeholder": "Select option...",
        "toggleTag": "<button type=\"button\"></button>",
        "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-2 px-3 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-sm text-start text-sm focus:border-primary focus:ring-primary before:absolute before:inset-0 before:z-[1] dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-primary",
        "dropdownClasses": "mt-2 z-40 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-sm overflow-hidden overflow-y-auto dark:bg-bodybg dark:border-white/10",
        "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-sm focus:outline-none focus:bg-gray-100 dark:bg-bodybg dark:hover:bg-bodybg dark:text-gray-200 dark:focus:bg-bodybg",
        "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-3.5 text-primary dark:text-primary\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
    }' className="hidden">
        <option value="">Choose</option>
        <option>Name</option>
        <option>Email address</option>
        <option>Description</option>
        <option>User ID</option>
    </select>
    <div className="absolute top-1/2 end-3 -translate-y-1/2">
        <svg className="flex-shrink-0 size-3.5 text-gray-500 dark:text-white/70"
            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round">
            <path d="m7 15 5 5 5-5" />
            <path d="m7 9 5-5 5 5" />
        </svg>
    </div>
</div>



<div className="relative">
    <select data-hs-select='{
        "placeholder": "Select option...",
        "toggleTag": "<button type=\"button\"></button>",
        "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-sm text-start text-sm focus:border-primary focus:ring-primary before:absolute before:inset-0 before:z-[1] dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-primary",
        "dropdownClasses": "mt-2 z-40 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-sm overflow-hidden overflow-y-auto dark:bg-bodybg dark:border-white/10",
        "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-sm focus:outline-none focus:bg-gray-100 dark:bg-bodybg dark:hover:bg-bodybg dark:text-gray-200 dark:focus:bg-bodybg",
        "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-3.5 text-primary dark:text-primary\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
        }' className="hidden">
        <option value="">Choose</option>
        <option>Name</option>
        <option>Email address</option>
        <option>Description</option>
        <option>User ID</option>
    </select>
    <div className="absolute top-1/2 end-3 -translate-y-1/2">
        <svg className="flex-shrink-0 size-3.5 text-gray-500 dark:text-white/70"
            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round">
            <path d="m7 15 5 5 5-5" />
            <path d="m7 9 5-5 5 5" />
        </svg>
    </div>
</div>



<div className="relative">
    <select data-hs-select='{
        "placeholder": "Select option...",
        "toggleTag": "<button type=\"button\"></button>",
        "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative sm:p-5 p-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-sm text-start text-sm focus:border-primary focus:ring-primary before:absolute before:inset-0 before:z-[1] dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-primary",
        "dropdownClasses": "mt-2 z-40 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-sm overflow-hidden overflow-y-auto dark:bg-bodybg dark:border-white/10",
        "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-sm focus:outline-none focus:bg-gray-100 dark:bg-bodybg dark:hover:bg-bodybg dark:text-gray-200 dark:focus:bg-bodybg",
        "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-3.5 text-primary dark:text-primary\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
        }' className="hidden">
        <option value="">Choose</option>
        <option>Name</option>
        <option>Email address</option>
        <option>Description</option>
        <option>User ID</option>
    </select>
    <div className="absolute top-1/2 end-3 -translate-y-1/2">
        <svg className="flex-shrink-0 size-3.5 text-gray-500 dark:text-white/70"
            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round">
            <path d="m7 15 5 5 5-5" />
            <path d="m7 9 5-5 5 5" />
        </svg>
    </div>
</div>

</div>
// End Prism Code//`
export const advanvcedselect10 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="relative">
<select data-hs-select='{
  "placeholder": "Select option...",
  "toggleTag": "<button type=\"button\"></button>",
  "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-sm text-start text-sm focus:border-primary focus:ring-primary before:absolute before:inset-0 before:z-[1] dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-primary",
  "dropdownClasses": "mt-2 z-40 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-sm overflow-hidden overflow-y-auto dark:bg-bodybg dark:border-white/10",
  "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-sm focus:outline-none focus:bg-gray-100 dark:bg-bodybg dark:hover:bg-bodybg dark:text-gray-200 dark:focus:bg-bodybg",
  "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-3.5 text-primary dark:text-primary\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
}' className="hidden" disabled>
    <option value="">Choose</option>
    <option>Name</option>
    <option>Email address</option>
    <option>Description</option>
    <option>User ID</option>
</select>

<div className="absolute top-1/2 end-3 -translate-y-1/2">
    <svg className="flex-shrink-0 size-3.5 text-gray-500 dark:text-white/70"
        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round">
        <path d="m7 15 5 5 5-5" />
        <path d="m7 9 5-5 5 5" />
    </svg>
</div>
</div>
// End Prism Code//`
export const advanvcedselect11 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div>
                                    
<div className="relative">
    <select data-hs-select='{
    "placeholder": "Select option...",
    "toggleTag": "<button type=\"button\"></button>",
    "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-danger rounded-sm text-start text-sm focus:border-danger focus:ring-danger before:absolute before:inset-0 before:z-[1] dark:bg-bodybg dark:text-white/70 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-primary",
    "dropdownClasses": "mt-2 z-40 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-sm overflow-hidden overflow-y-auto dark:bg-bodybg dark:border-white/10",
    "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-sm focus:outline-none focus:bg-gray-100 dark:bg-bodybg dark:hover:bg-bodybg dark:text-gray-200 dark:focus:bg-bodybg",
    "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-3.5 text-primary dark:text-primary\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
    }' className="hidden">
        <option value="">Choose</option>
        <option>Name</option>
        <option>Email address</option>
        <option>Description</option>
        <option>User ID</option>
    </select>

    <div className="absolute top-1/2 end-8 -translate-y-1/2">
        <svg className="flex-shrink-0 size-4 text-danger"
            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" x2="12" y1="8" y2="12" />
            <line x1="12" x2="12.01" y1="16" y2="16" />
        </svg>
    </div>

    <div className="absolute top-1/2 end-3 -translate-y-1/2">
        <svg className="flex-shrink-0 size-3.5 text-gray-500 dark:text-white/70"
            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round">
            <path d="m7 15 5 5 5-5" />
            <path d="m7 9 5-5 5 5" />
        </svg>
    </div>
</div>

<p className="text-xs text-danger mt-2">Please select a valid state.</p>
</div>

<div>

<div className="relative">
    <select data-hs-select='{
    "placeholder": "Select option...",
    "toggleTag": "<button type=\"button\"></button>",
    "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-success rounded-sm text-start text-sm focus:border-success focus:ring-success before:absolute before:inset-0 before:z-[1] dark:bg-bodybg dark:text-white/70 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-primary",
    "dropdownClasses": "mt-2 z-40 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-sm overflow-hidden overflow-y-auto dark:bg-bodybg dark:border-white/10",
    "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-sm focus:outline-none focus:bg-gray-100 dark:bg-bodybg dark:hover:bg-bodybg dark:text-gray-200 dark:focus:bg-bodybg",
    "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-3.5 text-primary dark:text-primary\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
    }' className="hidden">
        <option value="">Choose</option>
        <option>Name</option>
        <option>Email address</option>
        <option>Description</option>
        <option>User ID</option>
    </select>

    <div className="absolute inset-y-0 end-8 flex items-center pointer-events-none">
        <svg className="flex-shrink-0 size-4 text-success"
            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
        </svg>
    </div>

    <div className="absolute top-1/2 end-3 -translate-y-1/2">
        <svg className="flex-shrink-0 size-3.5 text-gray-500 dark:text-white/70"
            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round">
            <path d="m7 15 5 5 5-5" />
            <path d="m7 9 5-5 5 5" />
        </svg>
    </div>
</div>

<p className="text-xs text-success mt-2">Looks good!</p>
</div>
// End Prism Code//`
export const advanvcedselect12 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
  <div className="space-y-3">
<div id="validation-target" className="mb-4">
    
    <div className="relative">
        <select data-hs-select='{
        "placeholder": "Select option...",
        "toggleTag": "<button type=\"button\"></button>",
        "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border hs-error:border-danger hs-success:border-success rounded-sm text-start text-sm hs-error:focus:border-danger hs-success:focus:border-success hs-error:focus:ring-danger hs-success:focus:ring-success before:absolute before:inset-0 before:z-[1] dark:bg-bodybg dark:text-white/70 dark:focus:outline-none dark:focus:ring-1 dark:border-white/10 dark:focus:ring-primary",
        "dropdownClasses": "mt-2 z-40 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-sm overflow-hidden overflow-y-auto dark:bg-bodybg dark:border-white/10",
        "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-sm focus:outline-none focus:bg-gray-100 dark:bg-bodybg dark:hover:bg-bodybg dark:text-gray-200 dark:focus:bg-bodybg",
        "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-3.5 text-primary dark:text-primary\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
        }' className="hidden">
            <option value="">Choose</option>
            <option>Name</option>
            <option>Email address</option>
            <option>Description</option>
            <option>User ID</option>
        </select>
        <div className="hidden hs-error:block absolute top-1/2 end-8 -translate-y-1/2">
            <svg className="flex-shrink-0 size-4 text-danger"
                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" x2="12" y1="8" y2="12" />
                <line x1="12" x2="12.01" y1="16" y2="16" />
            </svg>
        </div>
        <div
            className="hidden hs-success:flex absolute inset-y-0 end-8 items-center pointer-events-none">
            <svg className="flex-shrink-0 size-4 text-success"
                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
            </svg>
        </div>
        <div className="absolute top-1/2 end-3 -translate-y-1/2">
            <svg className="flex-shrink-0 size-3.5 text-gray-500 dark:text-white/70"
                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m7 15 5 5 5-5" />
                <path d="m7 9 5-5 5 5" />
            </svg>
        </div>
    </div>
    
    <p className="hidden hs-error:block text-sm text-danger mt-2">Please select a valid
        state.</p>
    <p className="hidden hs-success:flex text-sm text-success mt-2">Looks good!</p>
</div>
<div className="flex flex-wrap gap-2">
    <button type="button" id="trigger-success"
        className="py-1 px-2 text-sm font-medium rounded-md border border-success/30 bg-success/10 dark:bg-success/25 text-success dark:text-success hover:bg-success/20 dark:hover:bg-success/50">
        Success
    </button>
    <button type="button" id="trigger-error"
        className="py-1 px-2 text-sm font-medium rounded-md border border-danger/30 bg-danger/10 dark:bg-danger/25 text-danger dark:text-danger hover:bg-danger/20 dark:hover:bg-danger/50">
        Error
    </button>
    <button type="button" id="trigger-clear"
        className="py-1 px-2 text-sm font-medium rounded-md border dark:border-white/10 bg-gray-100 dark:bg-gray-800/25 text-gray-600 dark:text-white hover:bg-gray-200 dark:hover:bg-bodybg/50">
        Clear
    </button>
</div>
</div>
// End Prism Code//`
export const advanvcedselect13 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="max-w-sm space-y-3">
                                    
<div className="relative">
    <select id="hs-select-with-dynamic-options" data-hs-select='{
        "placeholder": "Select assignee",
        "toggleTag": "<button type=\"button\"><span class=\"me-2\" data-icon></span><span class=\"text-gray-800 dark:text-gray-200\" data-title></span></button>",
        "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-sm text-start text-sm focus:border-primary focus:ring-primary before:absolute before:inset-0 before:z-[1] dark:bg-bodybg dark:border-white/10 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-primary",
        "dropdownClasses": "mt-2 max-h-72 p-1 space-y-0.5 z-20 w-full bg-white border border-gray-200 rounded-sm overflow-hidden overflow-y-auto dark:bg-bodybg dark:border-white/10",
        "optionClasses": "py-2 px-3 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-sm focus:outline-none focus:bg-gray-100 dark:bg-bodybg dark:hover:bg-bodybg dark:text-gray-200 dark:focus:bg-bodybg",
        "optionTemplate": "<div class=\"flex items-center\"><div class=\"me-2\" data-icon></div><div><div class=\"hs-selected:font-semibold text-sm text-gray-800 dark:text-gray-200\" data-title></div></div><div class=\"ms-auto\"><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-4 text-primary\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" viewBox=\"0 0 16 16\"><path d=\"M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z\"/></svg></span></div></div>"
        }' className="hidden">
        <option value="">Choose</option>
        <option value="1"
            data-hs-select-option='{
        "icon": "<img class=\"inline-block size-6 rounded-full\" src=\"../../assets/images/faces/1.jpg\" alt=\"James Collins\" />"}'>
            James Collins
        </option>
        <option value="2"
            data-hs-select-option='{
        "icon": "<img class=\"inline-block size-6 rounded-full\" src=\"../../assets/images/faces/2.jpg\" alt=\"Amanda Harvey\" />"}'>
            Amanda Harvey
        </option>
        <option value="3"
            data-hs-select-option='{
        "icon": "<img class=\"inline-block size-6 rounded-full\" src=\"../../assets/images/faces/10.jpg\" alt=\"Costa Quinn\" />"}'>
            Costa Quinn
        </option>
    </select>
    <div className="absolute top-1/2 end-3 -translate-y-1/2">
        <svg className="flex-shrink-0 size-3.5 text-gray-500 dark:text-white/70"
            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round">
            <path d="m7 15 5 5 5-5" />
            <path d="m7 9 5-5 5 5" />
        </svg>
    </div>
</div>


<div className="flex flex-wrap gap-2">
    <button type="button" id="add-option"
        className="py-1 px-2 text-sm font-medium rounded-md border border-success/30 bg-success/10 dark:bg-success/25 text-success dark:text-success hover:bg-success/20 dark:hover:bg-success/50">
        Add Option
    </button>
    <button type="button" id="add-options"
        className="py-1 px-2 text-sm font-medium rounded-md border border-success/30 bg-success/10 dark:bg-success/25 text-success dark:text-success hover:bg-success/20 dark:hover:bg-success/50">
        Add three Options
    </button>
    <button type="button" id="remove-option"
        className="py-1 px-2 text-sm font-medium rounded-md border dark:border-white/10 bg-gray-100 dark:bg-gray-800/25 text-gray-600 dark:text-white hover:bg-gray-200 dark:hover:bg-bodybg/50">
        Remove Option with value 4
    </button>
    <button type="button" id="remove-options"
        className="py-1 px-2 text-sm font-medium rounded-md border dark:border-white/10 bg-gray-100 dark:bg-gray-800/25 text-gray-600 dark:text-white hover:bg-gray-200 dark:hover:bg-bodybg/50">
        Remove Options with values 5, 6, 7
    </button>
</div>
</div>
// End Prism Code//`

export const advanvcedselect14 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="max-w-sm space-y-3">
                                    
<div className="relative">
    <select id="hs-select-temporary" data-hs-select='{
        "placeholder": "Select assignee",
        "toggleTag": "<button type=\"button\"><span class=\"me-2\" data-icon></span><span class=\"text-gray-800 dark:text-gray-200\" data-title></span></button>",
        "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-sm text-start text-sm focus:border-primary focus:ring-primary before:absolute before:inset-0 before:z-[1] dark:bg-bodybg dark:border-white/10 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-primary",
        "dropdownClasses": "mt-2 max-h-72 p-1 space-y-0.5 z-20 w-full bg-white border border-gray-200 rounded-sm overflow-hidden overflow-y-auto dark:bg-bodybg dark:border-white/10",
        "optionClasses": "py-2 px-3 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-sm focus:outline-none focus:bg-gray-100 dark:bg-bodybg dark:hover:bg-bodybg dark:text-gray-200 dark:focus:bg-bodybg",
        "optionTemplate": "<div class=\"flex items-center\"><div class=\"me-2\" data-icon></div><div><div class=\"hs-selected:font-semibold text-sm text-gray-800 dark:text-gray-200\" data-title></div></div><div class=\"ms-auto\"><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-4 text-primary\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" viewBox=\"0 0 16 16\"><path d=\"M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z\"/></svg></span></div></div>"
        }' className="hidden">
        <option value="">Choose</option>
        <option value="1"
            data-hs-select-option='{
        "icon": "<img class=\"inline-block size-6 rounded-full\" src=\"../../assets/images/faces/1.jpg\" alt=\"James Collins\" />"}'>
            James Collins
        </option>
        <option value="2"
            data-hs-select-option='{
        "icon": "<img class=\"inline-block size-6 rounded-full\" src=\"../../assets/images/faces/2.jpg\" alt=\"Amanda Harvey\" />"}'>
            Amanda Harvey
        </option>
        <option value="3"
            data-hs-select-option='{
        "icon": "<img class=\"inline-block size-6 rounded-full\" src=\"../../assets/images/faces/10.jpg\" alt=\"Costa Quinn\" />"}'>
            Costa Quinn
        </option>
    </select>
    <div id="hs-select-temporary-toggle-icon"
        className="absolute top-1/2 end-3 -translate-y-1/2">
        <svg className="flex-shrink-0 size-3.5 text-gray-500 dark:text-white/70"
            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round">
            <path d="m7 15 5 5 5-5" />
            <path d="m7 9 5-5 5 5" />
        </svg>
    </div>
</div>

<div className="flex flex-wrap gap-2">
    <button type="button" id="destroy"
        className="py-1 px-2 text-sm font-medium rounded-md border border-danger/30 bg-danger/10 dark:bg-danger/25 text-danger dark:text-danger hover:bg-danger/20 dark:hover:bg-danger/50">
        Destroy Select
    </button>
    <button type="button" id="reinit"
        className="py-1 px-2 text-sm font-medium rounded-md border dark:border-white/10 bg-gray-100 dark:bg-gray-800/25 text-gray-600 dark:text-white hover:bg-gray-200 dark:hover:bg-bodybg/50">
        Reinitialize Select
    </button>
</div>
</div>
// End Prism Code//`

//floating lables

export const floating1=`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <FloatingLabel
controlId="floatingInput"
label="Email address"
className="mb-3">
<Form.Control type="email" placeholder="name@example.com" />
</FloatingLabel>
<FloatingLabel controlId="floatingPassword" label="Password">
<Form.Control type="password" placeholder="Password" />
</FloatingLabel>
// End Prism Code//`

export const floating2=`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <Form.Floating className="mb-3">
<Form.Control type="email" readOnly
className="form-control-plaintext"
    id="floatingEmptyPlaintextInput" placeholder="name@example.com"/>
<Form.Label htmlFor="floatingEmptyPlaintextInput">Empty input</Form.Label>
</Form.Floating>
<Form.Floating className="">
<Form.Control type="email"  readOnly
 className="form-control-plaintext"
    id="floatingPlaintextInput" placeholder="name@example.com"
    defaultValue="name@example.com"/>
<Form.Label htmlFor="floatingPlaintextInput">Input with value</Form.Label>
</Form.Floating>
// End Prism Code//`


export const floating3=`//<!-- Prism Code: This code is only used for showcode purpose -->//
<Form.Floating className="my-3">
<Form.Control type="email" className="form-control" id="floatingInputValue"
    placeholder="name@example.com" defaultValue="test@example.com"/>
<Form.Label htmlFor="floatingInputValue">Input with value</Form.Label>
</Form.Floating>
<form className="form-flotin">
<Form.Control type="email" className="is-invalid"
    id="floatingInputInvalid" placeholder="name@example.com"
    defaultValue="test@example.com"/>
<Form.Label htmlFor="floatingInputInvalid">Invalid input</Form.Label>
</form>
// End Prism Code//`


export const floating4=`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <FloatingLabel
controlId="floatingInput"
label="Email address"
className="mb-3">
<Form.Control type="email" placeholder="name@example.com" />
</FloatingLabel>
<FloatingLabel controlId="floatingPassword" label="Password">
<Form.Control type="password" placeholder="Password" />
</FloatingLabel>
// End Prism Code//`


export const floating5=`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <FloatingLabel controlId="floatingSelect" label="Works with selects">
<Form.Select aria-label="Floating label select example">
    <option>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</Form.Select>
</FloatingLabel>
// End Prism Code//`


export const floating6=`//<!-- Prism Code: This code is only used for showcode purpose -->//
  <div className="row g-2">
<div className="col-md">
    <Form.Floating className="">
        <Form.Control type="email" className="form-control" id="floatingInputGrid"
            placeholder="name@example.com" defaultValue="mdo@example.com"/>
        <Form.Label htmlFor="floatingInputGrid">Email address</Form.Label>
    </Form.Floating>
</div>
<div className="col-md">
<FloatingLabel controlId="floatingSelect" label="Works with selects">
    <Form.Select aria-label="Floating label select example" className='form-select'>
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </Form.Select>
    </FloatingLabel>
</div>
</div>
// End Prism Code//`

export const floating7=`//<!-- Prism Code: This code is only used for showcode purpose -->//
<Row className="gy-4">
<Col xl={4} className="">
    <Form.Floating className="mb-4 floating-primary">
        <Form.Control type="email" className="" id="floatingInputprimary" placeholder="name@example.com"/>
        <Form.Label htmlFor="floatingInputprimary">primary</Form.Label>
    </Form.Floating>
</Col>
<Col xl={4} className="">
    <Form.Floating className="mb-4 floating-secondary">
        <Form.Control type="email" className="" id="floatingInputsecondary" placeholder="name@example.com"/>
        <Form.Label htmlFor="floatingInputsecondary">secondary</Form.Label>
    </Form.Floating>
</Col>
<Col xl={4} className="">
    <Form.Floating className="mb-4 floating-warning">
        <Form.Control type="email" className="" id="floatingInputwarning" placeholder="name@example.com"/>
        <Form.Label htmlFor="floatingInputwarning">warning</Form.Label>
    </Form.Floating>
</Col>
<Col xl={4} className="">
    <Form.Floating className="mb-4 floating-info">
        <Form.Control type="email" className="" id="floatingInputinfo" placeholder="name@example.com"/>
        <Form.Label htmlFor="floatingInputinfo">info</Form.Label>
    </Form.Floating>
</Col>
<Col xl={4} className="">
    <Form.Floating className="mb-4 floating-success">
        <Form.Control type="email" className="" id="floatingInputsuccess" placeholder="name@example.com"/>
        <Form.Label htmlFor="floatingInputsuccess">success</Form.Label>
    </Form.Floating>
</Col>
<Col xl={4} className="">
    <Form.Floating className="mb-4 floating-danger">
        <Form.Control type="email" className="" id="floatingInputdanger" placeholder="name@example.com"/>
        <Form.Label htmlFor="floatingInputdanger">danger</Form.Label>
    </Form.Floating>
</Col>
</Row>
// End Prism Code//`
//

///Validation

export const validation1=`//<!-- Prism Code: This code is only used for showcode purpose -->//
  <Form noValidate validated={validated} onSubmit={handleSubmit} className="needs-validation">
<Row className="mb-3">
    <Form.Group as={Col} md="4" id="validationCustom01">
        <Form.Label>First name</Form.Label>
        <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    </Form.Group>
    <Form.Group as={Col} md="4" id="validationCustom02">
        <Form.Label>Last name</Form.Label>
        <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    </Form.Group>
    <Form.Group as={Col} md="4" id="validationCustomUsername">
        <Form.Label>Username</Form.Label>
        <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
            />
            <Form.Control.Feedback type="invalid">
                Please choose a username.
            </Form.Control.Feedback>
        </InputGroup>
    </Form.Group>
</Row>
<Row className="mb-3 ">
    <Form.Group as={Col} md="6" id="validationCustom03">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="City" required />
        <Form.Control.Feedback type="invalid">
            Please provide a valid city.
        </Form.Control.Feedback>
    </Form.Group>
    <Form.Group as={Col} md="3" id="validationCustom04">
        <Form.Label>State</Form.Label>
        <Form.Select className="" id="validationCustom04" required defaultValue="Choose...">
            <option disabled>Choose...</option>
            <option>...</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
            Please select a valid state.
        </Form.Control.Feedback>
    </Form.Group>
    <Form.Group as={Col} md="3" id="validationCustom05">
        <Form.Label>Zip</Form.Label>
        <Form.Control type="text" placeholder="Zip" required />
        <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
        </Form.Control.Feedback>
    </Form.Group>
</Row>
<Form.Group className="mb-3 ">
    <Form.Check
        required
        label="Agree to terms and conditions"
        feedback="You must agree before submitting."
        feedbackType="invalid"
    />
</Form.Group>
<Button type="submit">Submit form</Button>
</Form>
// End Prism Code//`

export const validation2=`//<!-- Prism Code: This code is only used for showcode purpose -->//
  <Form className="row g-3">
    <Col md={4}>
        <Form.Label htmlFor="validationDefault01">First name</Form.Label>
        <Form.Control type="text" id="validationDefault01"
            defaultValue="Mark" required />
    </Col>
    <Col md={4}>
        <Form.Label htmlFor="validationDefault02">Last name</Form.Label>
        <Form.Control type="text" id="validationDefault02"
            defaultValue="Otto" required />
    </Col>
    <Col md={4}>
        <Form.Label htmlFor="validationDefaultUsername">Username</Form.Label>
        <InputGroup>
            <InputGroup.Text className="" id="inputGroupPrepend2">@</InputGroup.Text>
            <Form.Control type="text" id="validationDefaultUsername"
                aria-describedby="inputGroupPrepend2" required />
        </InputGroup>
    </Col>
    <Col md={6}>
        <Form.Label htmlFor="validationDefault03">City</Form.Label>
        <Form.Control type="text" id="validationDefault03" required />
    </Col>
    <Col md={3}>
        <Form.Label htmlFor="validationDefault04">State</Form.Label>
        <Form.Select className="" id="validationDefault04" required defaultValue="Choose...">
            <option disabled >Choose...</option>
            <option>...</option>
        </Form.Select>
    </Col>
    <Col md={3}>
        <Form.Label htmlFor="validationDefault05">Zip</Form.Label>
        <Form.Control type="text" id="validationDefault05" required />
    </Col>
    <div className="col-12">
        <Form.Check type="checkbox" label="Agree to terms and conditions" required />
    </div>
    <div className="col-12">
        <Button variant='primary' className="btn " type="submit">Submit form</Button>
    </div>
</Form>
// End Prism Code//`

export const validation3=`//<!-- Prism Code: This code is only used for showcode purpose -->//
  <Form className="row g-3">
<Col md={4}>
    <Form.Label htmlFor="validationServer01">First
        name</Form.Label>
    <Form.Control type="text" className="form-control is-valid"
        id="validationServer01" defaultValue="Mark" required />
    <Form.Control.Feedback>
        Looks good!
    </Form.Control.Feedback>
</Col>
<Col md={4}>
    <Form.Label htmlFor="validationServer02">Last
        name</Form.Label>
    <Form.Control type="text" className="form-control is-valid"
        id="validationServer02" defaultValue="Otto" required />
    <Form.Control.Feedback>
        Looks good!
    </Form.Control.Feedback>
</Col>
<Col md={4}>
    <Form.Label htmlFor="validationServerUsername"
    >Username</Form.Label>
    <InputGroup className="has-validation">
        <InputGroup.Text className="input-group-text" id="inputGroupPrepend3">@</InputGroup.Text>
        <Form.Control type="text" className="form-control is-invalid"
            id="validationServerUsername"
            aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
            required />
    </InputGroup>
    <Form.Control.Feedback id="validationServerUsernameFeedback" className="invalid-feedback d-block">
        Please choose a username.
    </Form.Control.Feedback>
</Col>
<Col md={6}>
    <Form.Label htmlFor="validationServer03">City</Form.Label>
    <Form.Control type="text" className="form-control is-invalid"
        id="validationServer03"
        aria-describedby="validationServer03Feedback" required />
    <Form.Control.Feedback id="validationServer03Feedback" className="invalid-feedback">
        Please provide a valid city.
    </Form.Control.Feedback>
</Col>
<Col md={3}>
    <Form.Label htmlFor="validationServer04">State</Form.Label>
    <Form.Select className="form-select is-invalid" id="validationServer04" defaultValue="Choose..."
        aria-describedby="validationServer04Feedback" required>
        <option disabled >Choose...</option>
        <option>...</option>
    </Form.Select>
    <Form.Control.Feedback id="validationServer04Feedback" className="invalid-feedback">
        Please select a valid state.
    </Form.Control.Feedback>
</Col>
<Col md={3}>
    <Form.Label htmlFor="validationServer05">Zip</Form.Label>
    <Form.Control type="text" className="form-control is-invalid"
        id="validationServer05"
        aria-describedby="validationServer05Feedback" required />
    <Form.Control.Feedback id="validationServer05Feedback" className="invalid-feedback">
        Please provide a valid zip.
    </Form.Control.Feedback>
</Col>
<div className="col-12">
    <Form.Check required isInvalid label="Agree to terms and conditions" feedback="You must agree before submitting." feedbackType="invalid" />
</div>
<div className="col-12">
    <Button className="btn btn-primary" type="submit">Submit
        form</Button>
</div>
</Form>
// End Prism Code//`

export const validation4=`//<!-- Prism Code: This code is only used for showcode purpose -->//
  <Formik
    validationSchema={schema}
    onSubmit={console.log}
    initialValues={{
    firstName: "Mark",
    lastName: "Otto",
    username: "",
    city: "",
    state: "",
    zip: "",
    file: null,
    terms: false,
    }}
    >
    {({ handleSubmit, handleChange, values, touched, errors }) => (
    <Form noValidate onSubmit={handleSubmit}>
        <Row className="mb-3">
            <Form.Group
                as={Col}
                md="4"
                id="validationFormik101"
                className="position-relative"
            >
                <Form.Label>First name</Form.Label>
                <Form.Control
                    type="text"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    isValid={touched.firstName && !errors.firstName}
                />
                <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
                as={Col}
                md="4"
                id="validationFormik102"
                className="position-relative"
            >
                <Form.Label>Last name</Form.Label>
                <Form.Control
                    type="text"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    isValid={touched.lastName && !errors.lastName}
                />

                <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" id="validationFormikUsername2">
                <Form.Label>Username</Form.Label>
                <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                        type="text"
                        placeholder="Username"
                        aria-describedby="inputGroupPrepend"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                        isInvalid={!!errors.username}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                        {errors.username}
                    </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>
        </Row>
        <Row className="mb-3 ">
            <Form.Group
                as={Col}
                md="6"
                id="validationFormik103"
                className="position-relative"
            >
                <Form.Label>City</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="City"
                    name="city"
                    value={values.city}
                    onChange={handleChange}
                    isInvalid={!!errors.city}
                />

                <Form.Control.Feedback type="invalid" tooltip>
                    {errors.city}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
                as={Col}
                md="3"
                id="validationFormik104"
                className="position-relative"
            >
                <Form.Label htmlFor="validationTooltip04">State</Form.Label>
                <Form.Select className="form-select" id="validationTooltip04" name="state"
                    value={values.state}
                    onChange={handleChange}
                    isInvalid={!!errors.state} required>
                    <option disabled defaultValue="">Choose...</option>
                    <option>...</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid" tooltip>
                    {errors.state}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
                as={Col}
                md="3"
                id="validationFormik105"
                className="position-relative"
            >
                <Form.Label>Zip</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Zip"
                    name="zip"
                    value={values.zip}
                    onChange={handleChange}
                    isInvalid={!!errors.zip}
                />

                <Form.Control.Feedback type="invalid" tooltip>
                    {errors.zip}
                </Form.Control.Feedback>
            </Form.Group>
        </Row>
        <Button type="submit">Submit form</Button>
    </Form>
    )}
    </Formik>
// End Prism Code//`

export const validation5=`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <Form className="was-validated">
<div className="mb-3">
    <Form.Label htmlFor="validationTextarea">Textarea</Form.Label>
    <Form.Control as="textarea" isInvalid className="" id="validationTextarea"
        placeholder="Required example textarea" required></Form.Control>
    <Form.Control.Feedback>
        Please enter a message in the textarea.
    </Form.Control.Feedback>
</div>
<Form.Check type="checkbox" className="form-check mb-3" id="validationFormCheck1"
    required isInvalid label="Check this checkbox" feedback="Example invalid feedback text" feedbackType='invalid' />
<Form.Check type="radio" className="" id="validationFormCheck2" name="radio-stacked"
    required isInvalid label="Toggle this radio" />
<Form.Check type="radio" className="form-check mb-3" id="validationFormCheck3" name="radio-stacked"
    required isInvalid label="Or toggle this other radio" feedback="More example invalid feedback textt" feedbackType='invalid' />
<Form.Group className="mb-3" >
    <Form.Select className="" required aria-label="select example" isInvalid>
        <option>Open this select menu</option>
        <option defaultValue="1">One</option>
        <option defaultValue="2">Two</option>
        <option defaultValue="3">Three</option>
    </Form.Select>
    <Form.Control.Feedback type="invalid">Example invalid select feedback</Form.Control.Feedback>
</Form.Group>

<div className="mb-3">
    <Form.Control type="file" aria-label="file example" isInvalid
        required />
    <Form.Control.Feedback type="invalid">Example invalid form file feedback</Form.Control.Feedback>
</div>

<div className="mb-3">
    <Button variant='primary' className="btn " type="submit" disabled>Submit
        form</Button>
</div>
</Form>
// End Prism Code//`


export const validation6=`//<!-- Prism Code: This code is only used for showcode purpose -->//
  <div className="row g-2">
<div className="col-md">
    <Form.Floating className="">
        <Form.Control type="email" className="form-control" id="floatingInputGrid"
            placeholder="name@example.com" defaultValue="mdo@example.com"/>
        <Form.Label htmlFor="floatingInputGrid">Email address</Form.Label>
    </Form.Floating>
</div>
</div>
// End Prism Code//`

export const validation7=`//<!-- Prism Code: This code is only used for showcode purpose -->//
  <div className="row g-2">
<div className="col-md">
    <Form.Floating className="">
        <Form.Control type="email" className="form-control" id="floatingInputGrid"
            placeholder="name@example.com" defaultValue="mdo@example.com"/>
        <Form.Label htmlFor="floatingInputGrid">Email address</Form.Label>
    </Form.Floating>
</div>
</div>
// End Prism Code//`

export const validation8=`//<!-- Prism Code: This code is only used for showcode purpose -->//
  <div className="row g-2">
<div className="col-md">
    <Form.Floating className="">
        <Form.Control type="email" className="form-control" id="floatingInputGrid"
            placeholder="name@example.com" defaultValue="mdo@example.com"/>
        <Form.Label htmlFor="floatingInputGrid">Email address</Form.Label>
    </Form.Floating>
</div>
</div>
// End Prism Code//`

//

////Form select

export const formselect1=`//<!-- Prism Code: This code is only used for showcode purpose -->//
<Form.Select aria-label="Default select example">
<option>Open this select menu</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</Form.Select>
// End Prism Code//`  

export const formselect2=`//<!-- Prism Code: This code is only used for showcode purpose -->//
<Form.Select aria-label="Default select example" disabled={true}>
<option>Open this select menu</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</Form.Select>
// End Prism Code//` 

export const formselect3=`//<!-- Prism Code: This code is only used for showcode purpose -->//
<Form.Select className="form-select rounded-pill" aria-label="Default select example">
    <option>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</Form.Select>
// End Prism Code//`  
export const formselect4=`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <Form.Select multiple className="form-select" aria-label="multiple select example">
<option className='selected'>Open this select menu</option>
<option defaultValue="1">One</option>
<option defaultValue="2">Two</option>
<option defaultValue="3">Three</option>
</Form.Select>
// End Prism Code//`  

export const formselect5=`//<!-- Prism Code: This code is only used for showcode purpose -->//
<Form.Select className="form-select" htmlSize={4} aria-label="size 3 select example">
<option className='selected'>Open this select menu</option>
<option defaultValue="1">One</option>
<option defaultValue="2">Two</option>
<option defaultValue="3">Three</option>
<option defaultValue="4">Four</option>
<option defaultValue="5">Five</option>
</Form.Select>
// End Prism Code//`  

export const formselect6=`//<!-- Prism Code: This code is only used for showcode purpose -->//
  <Form.Select size="sm" className="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
    <option>Open this select menu</option>
    <option defaultValue="1">One</option>
    <option defaultValue="2">Two</option>
    <option defaultValue="3">Three</option>
    </Form.Select>
    <Form.Select className="form-select mb-3" aria-label="Default select">
    <option>Open this select menu
    </option>
    <option defaultValue="1">One</option>
    <option defaultValue="2">Two</option>
    <option defaultValue="3">Three</option>
    </Form.Select>
    <Form.Select size="lg" className="form-select form-select-lg"
    aria-label=".form-select-lg example">
    <option>Open this select menu</option>
    <option defaultValue="1">One</option>
    <option defaultValue="2">Two</option>
    <option defaultValue="3">Three</option>
    </Form.Select>
// End Prism Code//` 

///Form select


// fileuploads

export const fileupload1=`//<!-- Prism Code: This code is only used for showcode purpose -->//
<Form.Group controlId="formFile" className="mb-3">
<Form.Label>Default file input example</Form.Label>
<Form.Control type="file" />
</Form.Group>
<Form.Group controlId="formFileMultiple" className="mb-3">
<Form.Label>Multiple files input example</Form.Label>
<Form.Control type="file" multiple />
</Form.Group>
<Form.Group controlId="formFileDisabled" className="mb-3">
<Form.Label>Disabled file input example</Form.Label>
<Form.Control type="file" disabled />
</Form.Group>
<Form.Group controlId="formFileSm" className="mb-3">
<Form.Label>Small file input example</Form.Label>
<Form.Control type="file" size="sm" />
</Form.Group>
<Form.Group controlId="formFileLg" className="mb-3">
<Form.Label>Large file input example</Form.Label>
<Form.Control type="file" size="lg" />
</Form.Group>
// End Prism Code//`
//
//Rangeslider
export const rangeslider1=`//<!-- Prism Code: This code is only used for showcode purpose -->//
<Form.Range className="" id="customRange1" />
// End Prism Code//`


export const rangeslider2=`//<!-- Prism Code: This code is only used for showcode purpose -->//
<Form.Range className="" id="disabledRange" disabled />
// End Prism Code//`


export const rangeslider3=`//<!-- Prism Code: This code is only used for showcode purpose -->//
<Form.Range className="" min="0" max="5" id="customRange2" />
// End Prism Code//`


export const rangeslider4=`//<!-- Prism Code: This code is only used for showcode purpose -->//
<Form.Range className="" min="0" max="5" step="0.5" id="customRange3" />
// End Prism Code//`

//

export const inputgroup1=`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <InputGroup className="mb-3">
<InputGroup.Text className="" id="basic-addon1">@</InputGroup.Text>
<Form.Control type="text" className="" placeholder="Username"
    aria-label="Username" aria-describedby="basic-addon1" />
</InputGroup>
<InputGroup className="mb-3">
<Form.Control type="text" className="" placeholder="Recipient's username"
    aria-label="Recipient's username" aria-describedby="basic-addon2" />
<InputGroup.Text className="" id="basic-addon2">@example.com</InputGroup.Text>
</InputGroup>
<Form.Label htmlFor="basic-url" className="form-label">Your vanity URL</Form.Label>
<InputGroup className="mb-3">
<InputGroup.Text className=""
    id="basic-addon3">https://example.com/users/</InputGroup.Text>
<Form.Control type="text" className="" id="basic-url"
    aria-describedby="basic-addon3" />
</InputGroup>
<InputGroup className="mb-3">
<InputGroup.Text className="">$</InputGroup.Text>
<Form.Control type="text" className=""
    aria-label="Amount (to the nearest dollar)" />
<InputGroup.Text className="">.00</InputGroup.Text>
</InputGroup>
<InputGroup className="mb-3">
<Form.Control type="text" className="" placeholder="Username"
    aria-label="Username" />
<InputGroup.Text className="">@</InputGroup.Text>
<Form.Control type="text" className="" placeholder="Server"
    aria-label="Server" />
</InputGroup>
<InputGroup>
<InputGroup.Text className="">With textarea</InputGroup.Text>
<Form.Control as="textarea" className="" aria-label="With textarea" />
</InputGroup>
// End Prism Code//`

export const inputgroup2=`//<!-- Prism Code: This code is only used for showcode purpose -->//
<InputGroup>
    <InputGroup.Text className="">First and last name</InputGroup.Text>
    <Form.Control type="text" aria-label="First name" className="" />
    <Form.Control type="text" aria-label="Last name" className="" />
</InputGroup>
// End Prism Code//`

export const inputgroup3=`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <InputGroup className="mb-3">
<InputGroup.Text className="">
    <Form.Check className=" mt-0" type="checkbox" value=""
        aria-label="Checkbox for following text input" />
</InputGroup.Text>
<Form.Control type="text" className=""
    aria-label="Text input with checkbox" />
</InputGroup>
<InputGroup>
<InputGroup.Text className="">
    <Form.Check className=" mt-0" type="radio" value=""
        aria-label="Radio button for following text input" />
</InputGroup.Text>
<Form.Control type="text" className=""
    aria-label="Text input with radio button" />
</InputGroup>
// End Prism Code//`

export const inputgroup4=`//<!-- Prism Code: This code is only used for showcode purpose -->//
<InputGroup className="mb-3">
<InputGroup.Text className="">
    <Form.Check className="mt-0" type="checkbox" value=""
        aria-label="Checkbox for following text input" />
</InputGroup.Text>
<Form.Control type="text" className=""
    aria-label="Text input with checkbox" />
</InputGroup>
<InputGroup>
<InputGroup.Text className="">
    <Form.Check className="mt-0" type="radio" value=""
        aria-label="Radio button for following text input" />
</InputGroup.Text>
<Form.Control type="text" className=""
    aria-label="Text input with radio button" />
</InputGroup>
// End Prism Code//`

export const inputgroup5=`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <InputGroup className="mb-3">
<Button variant='primary' type="button" className="">Action</Button>
<Dropdown>
    <Dropdown.Toggle type="button"
        className="btn btn-primary dropdown-toggle dropdown-toggle-split"
        data-bs-toggle="dropdown" aria-expanded="false">
        <span className="visually-hidden">Toggle Dropdown</span>
    </Dropdown.Toggle>
    <Dropdown.Menu className="">
        <Dropdown.Item href="#">Action</Dropdown.Item>
        <Dropdown.Item href="#">Another action</Dropdown.Item>
        <Dropdown.Item href="#">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#">Separated link</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
<Form.Control type="text" className=""
    aria-label="Text input with segmented dropdown button" />
</InputGroup>
<InputGroup>
<Form.Control type="text" className=""
    aria-label="Text input with segmented dropdown button" />
<Button type="button" className="btn btn-primary">Action</Button>
<Dropdown>
    <Dropdown.Toggle variant='' type="button"
        className="btn btn-primary dropdown-toggle dropdown-toggle-split"
        data-bs-toggle="dropdown" aria-expanded="false">
        <span className="visually-hidden">Toggle Dropdown</span>
    </Dropdown.Toggle>
    <Dropdown.Menu className="dropdown-menu-end">
        <Dropdown.Item href="#">Action</Dropdown.Item>
        <Dropdown.Item href="#">Another action</Dropdown.Item>
        <Dropdown.Item href="#">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#">Separated link</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
</InputGroup>
// End Prism Code//`

export const inputgroup6=`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <InputGroup className="mb-3">
<label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
<Form.Select className="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
    <option>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</Form.Select>
</InputGroup>
<InputGroup className="mb-3">
<Form.Select className="form-select" id="inputGroupSelect02">
    <option >Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</Form.Select>
<label className="input-group-text" htmlFor="inputGroupSelect02">Options</label>
</InputGroup>
<InputGroup className="mb-3">
<Button variant='' className="btn btn-primary" type="button">Button</Button>
<Form.Select className="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
    <option>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</Form.Select>
</InputGroup>
<InputGroup>
<Form.Select className="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
    <option>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</Form.Select>
<Button variant='' className="btn btn-primary" type="button">Button</Button>
</InputGroup>
// End Prism Code//`

export const inputgroup7=`//<!-- Prism Code: This code is only used for showcode purpose -->//
   <InputGroup className="input-group-sm mb-3">
<InputGroup.Text className="" id="inputGroup-sizing-sm">Small</InputGroup.Text>
<Form.Control type="text" className="form-control"
    aria-label="Sizing example input"
    aria-describedby="inputGroup-sizing-sm" />
</InputGroup>
<InputGroup className="mb-3">
<InputGroup.Text className=""
    id="inputGroup-sizing-default">Default</InputGroup.Text>
<Form.Control type="text" className="form-control"
    aria-label="Sizing example input"
    aria-describedby="inputGroup-sizing-default" />
</InputGroup>
<InputGroup className="input-group-lg">
<InputGroup.Text className="" id="inputGroup-sizing-lg">Large</InputGroup.Text>
<Form.Control type="text" className="form-control"
    aria-label="Sizing example input"
    aria-describedby="inputGroup-sizing-lg" />
</InputGroup>
// End Prism Code//`

export const inputgroup8=`//<!-- Prism Code: This code is only used for showcode purpose -->//
  <InputGroup className="mb-3">
    <Button variant='primary' className="" type="button"
        id="button-addon1">Button</Button>
    <Form.Control type="text" className="" placeholder=""
        aria-label="Example text with button addon"
        aria-describedby="button-addon1" />
</InputGroup>
<InputGroup className="mb-3">
    <Form.Control type="text" className="" placeholder="Recipient's username"
        aria-label="Recipient's username" aria-describedby="button-addon2" />
    <Button variant='primary' className="" type="button"
        id="button-addon2">Button</Button>
</InputGroup>
<InputGroup className="mb-3">
    <Button variant='primary' className="" type="button">Button</Button>
    <Button variant='primary' className="" type="button">Button</Button>
    <Form.Control type="text" className="" placeholder=""
        aria-label="Example text with two button addons" />
</InputGroup>
<InputGroup>
    <Form.Control type="text" className="" placeholder="Recipient's username"
        aria-label="Recipient's username with two button addons" />
    <Button variant='primary' className="" type="button">Button</Button>
    <Button variant='primary' className="" type="button">Button</Button>
</InputGroup>
// End Prism Code//`

export const inputgroup9=`//<!-- Prism Code: This code is only used for showcode purpose -->//
<InputGroup className="mb-3">
<Dropdown>
<Dropdown.Toggle variant='' className="btn btn-primary dropdown-toggle" type="button"
    data-bs-toggle="dropdown" aria-expanded="false">Dropdown</Dropdown.Toggle>
<Dropdown.Menu className="">
    <Dropdown.Item href="#">Action</Dropdown.Item>
    <Dropdown.Item href="#">Another action</Dropdown.Item>
    <Dropdown.Item href="#">Something else here</Dropdown.Item>
    <Dropdown.Divider>
    </Dropdown.Divider>
    <Dropdown.Item href="#">Separated link</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
<Form.Control type="text" className="form-control"
aria-label="Text input with dropdown button" />
</InputGroup>
<InputGroup className="mb-3">
<Form.Control type="text" className="form-control"
aria-label="Text input with dropdown button" />
<Dropdown>
<Dropdown.Toggle variant='' className="btn btn-outline-primary dropdown-toggle" type="button"
    data-bs-toggle="dropdown" aria-expanded="false">Dropdown</Dropdown.Toggle>
<Dropdown.Menu className="" align="end">
    <Dropdown.Item href="#">Action</Dropdown.Item>
    <Dropdown.Item href="#">Another action</Dropdown.Item>
    <Dropdown.Item href="#">Something else here</Dropdown.Item>
    <Dropdown.Divider>
    </Dropdown.Divider>
    <Dropdown.Item href="#">Separated link</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
</InputGroup>
<InputGroup className="flex-nowrap">
<Dropdown>
<Dropdown.Toggle variant='' className="btn btn-primary-transparent dropdown-toggle" type="button"
    data-bs-toggle="dropdown" aria-expanded="false">Dropdown</Dropdown.Toggle>
<Dropdown.Menu className="">
    <Dropdown.Item href="#">Action</Dropdown.Item>
    <Dropdown.Item href="#">Another action</Dropdown.Item>
    <Dropdown.Item href="#">Something else here</Dropdown.Item>
    <Dropdown.Divider>
    </Dropdown.Divider>
    <Dropdown.Item href="#">Separated link</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
<Form.Control type="text" className=""
aria-label="Text input with 2 dropdown buttons" />
<Dropdown>
<Dropdown.Toggle variant='' className="btn btn-primary-transparent dropdown-toggle" type="button"
    data-bs-toggle="dropdown" aria-expanded="false">Dropdown</Dropdown.Toggle>
<Dropdown.Menu className="" align="end">
    <Dropdown.Item href="#">Action</Dropdown.Item>
    <Dropdown.Item href="#">Another action</Dropdown.Item>
    <Dropdown.Item href="#">Something else here</Dropdown.Item>
    <Dropdown.Divider>
    </Dropdown.Divider>
    <Dropdown.Item href="#">Separated link</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
</InputGroup>
// End Prism Code//`

export const inputgroup10=`//<!-- Prism Code: This code is only used for showcode purpose -->//
<InputGroup className="mb-3">
    <label className="input-group-text" htmlFor="inputGroupFile01">Upload</label>
    <Form.Control type="file" className="form-control" id="inputGroupFile01" />
</InputGroup>

<InputGroup className="mb-3">
    <Form.Control type="file" className="form-control" id="inputGroupFile02" />
    <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
</InputGroup>

<InputGroup className="mb-3">
    <Button variant='' className="btn btn-primary" type="button"
        id="inputGroupFileAddon03">Button</Button>
    <Form.Control type="file" className="form-control" id="inputGroupFile03"
        aria-describedby="inputGroupFileAddon03" aria-label="Upload" />
</InputGroup>

<InputGroup>
    <Form.Control type="file" className="form-control" id="inputGroupFile04"
        aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
    <Button variant='' className="btn btn-primary" type="button"
        id="inputGroupFileAddon04">Button</Button>
</InputGroup>
// End Prism Code//`

export const inputgroup11=`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <InputGroup className="flex-nowrap">
    <InputGroup.Text className="" id="addon-wrapping">@</InputGroup.Text>
    <Form.Control type="text" className="" placeholder="Username"
        aria-label="Username" aria-describedby="addon-wrapping" />
</InputGroup>
// End Prism Code//`