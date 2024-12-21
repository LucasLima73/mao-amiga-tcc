export const alert1 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<Alert variant='warning' className="alert-dismissible fade show" role="alert" show={show} onClick={toggleShow}>
<strong>Holy guacamole!</strong> You should check in on some of those fields
below.
<Button variant='' type="button" className="btn-close" data-bs-dismiss="alert"
aria-label="Close"><i className="bi bi-x"></i></Button>
</Alert>
// End Prism Code//`;

export const alert2 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
   {alerts.map((alert:any) => (
    <Alert key={alert.id} variant="success" className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Nice, </strong> you triggered this alert message!
        <Button variant="" type="button" className="btn-close" aria-label="Close" onClick={() => handleCloseAlert(alert.id)}>
            <i className="bi bi-x"></i>
        </Button>
    </Alert>
))}
<Button type="button" className='mt-2' onClick={handleShowAlert}>
Show live alert
</Button>
// End Prism Code//`;

export const alert3 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  {roundedoutlinealert.map((idx) => (
    <Alert variant={idx.class} className="alert rounded-pill alert-dismissible fade show" key={Math.random()}>
        {idx.text}
        <Button variant='' type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"
            onClick={() => handleRemove4(idx.id)}><i className="bi bi-x"></i></Button>
    </Alert>
))}
// End Prism Code//`;

export const alert4 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 {shadowsolidalert.map((idx) => (
<Alert variant={idx.class} className={"alert shadow-{idx.size} alert-dismissible fade show"} key={Math.random()}>
    {idx.text}
    <Button variant='' type="button" className="btn-close" data-bs-dismiss="alert"
        onClick={() => handleRemove2(idx.id)}
        aria-label="Close"><i className="bi bi-x"></i></Button>
</Alert>
))}
// End Prism Code//`;

export const alert5 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 {Defaultsolidalerts.map((idx) => (
<Alert variant={idx.class} className={"alert shadow-{idx.size}"} key={Math.random()}>A simple primary alert with small shadow—check it out!</Alert>
))}
// End Prism Code//`;

export const alert6 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  {Defaultalerts.map((idx) => (
    <Alert variant={idx.class} role="alert" key={Math.random()}>
        {idx.text}
    </Alert>
))}
// End Prism Code//`;

export const alert7 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  {Linkalerts.map((idx) => (
    <Alert variant={idx.class} role="alert" key={Math.random()}>
        {idx.text1} <Link href="#!" className="alert-link">{idx.text2}</Link>{idx.text3}
    </Alert>
))}
// End Prism Code//`;

export const alert8 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  {solidalert.map((idx) => (
<Alert variant={idx.class} className={"alert-dismissible fade show {idx.color}"} key={Math.random()}>
    {idx.text}
    <Button variant='' type="button" className={btn-close {idx.color}} data-bs-dismiss="alert" aria-label="Close"
        onClick={() => handleRemove(idx.id)}><i className="bi bi-x"></i></Button>
</Alert>
))}
// End Prism Code//`;

export const alert9 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
{roundedsolidalert.map((idx) => (
<Alert variant={idx.class} className="alert  rounded-pill alert-dismissible fade show" key={Math.random()}>
    {idx.text}
    <Button variant='' type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"
        onClick={() => handleRemove3(idx.id)}>
        <i className="bi bi-x"></i></Button>
</Alert>
))}
// End Prism Code//`;

export const alert10 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
{roundedoutlinealert.map((idx) => (
<Alert variant={idx.class} className="alert rounded-pill alert-dismissible fade show" key={Math.random()}>
    {idx.text}
    <Button variant='' type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"
        onClick={() => handleRemove4(idx.id)}><i className="bi bi-x"></i></Button>
</Alert>
))}
// End Prism Code//`;

export const alert11 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
{roundeddefaultalert.map((idx) => (
<Alert variant={idx.class} className="alert rounded-pill alert-dismissible fade show" key={Math.random()}>
    {idx.text}
    <Button variant='' type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"
        onClick={() => handleRemove5(idx.id)}
    ><i className="bi bi-x"></i></Button>
</Alert>
))}
// End Prism Code//`;

export const alert12 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
   {roundedwithbtnalert.map((idx) => (
<Alert variant={idx.class} className="alert rounded-pill alert-dismissible custom-rounded-alerts fade show" key={Math.random()}>
    {idx.text}
    <Button variant='' type="button" className="btn-close custom-close" data-bs-dismiss="alert" aria-label="Close"
        onClick={() => handleRemove6(idx.id)}>
        <i className="bi bi-x"></i></Button>
</Alert>
))}
// End Prism Code//`;

export const alert13 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 {customized1alert.map((idx) => (
<Alert variant={idx.color} className={alert alert-dismissible fade show custom-alert-icon shadow-sm svg-{idx.color} } role="alert" key={Math.random()}>
    <svg className="me-2" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
        <path d="M0 0h24v24H0z" fill="none" /><path d={idx.class1} /></svg>
    A customized {idx.color} alert with an icon
    <Button variant='' type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => handleRemove12(idx.id)}><i className="bi bi-x"></i></Button>
</Alert>
))}
// End Prism Code//`;

export const alert14 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<Alert variant='primary' className="alert d-flex align-items-center svg-primary" role="alert">
<svg className="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
<div>
An example alert with an icon
</div>
</Alert>
<Alert variant='success' className="alert  d-flex align-items-center svg-success" role="alert">
<svg className="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" /><path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" /></svg>
<div>
An example success alert with an icon
</div>
</Alert>
<Alert variant='warning' className="alert  d-flex align-items-center svg-warning" role="alert">
<svg className="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24" /></g><g><g><g><path d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z" /><polygon points="13,16 11,16 11,18 13,18" /><polygon points="13,10 11,10 11,15 13,15" /></g></g></g></svg>
<div>
An example warning alert with an icon
</div>
</Alert>
<Alert variant='danger' className="alert  d-flex align-items-center svg-danger" role="alert">
<svg className="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24" /></g><g><g><g><path d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z" /><rect height="6" width="2" x="11" y="7" /><rect height="2" width="2" x="11" y="15" /></g></g></g></svg>
<div>
An example danger alert with an icon
</div>
</Alert>
// End Prism Code//`;

export const alert15 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 {imagesalert.map((idx) => (
    <Alert variant={idx.color} className="alert alert-img alert-dismissible fase show rounded-pill flex-wrap" role="alert" key={Math.random()}>
        <div className="avatar avatar-sm me-3 avatar-rounded">
            <img src={idx.src1} alt="img" />
        </div>
        <div>A simple {idx.color} alert with image—check it out!</div>
        <Button variant='' type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => handleRemove8(idx.id)}
        ><i className="bi bi-x  {idx.class}"></i></Button>
    </Alert>
))}
// End Prism Code//`;

export const alert16 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
{avataralert.map((idx) => (
<Alert variant={idx.color} className="alert alert-img alert-dismissible fase show flex-wrap" role="alert" key={Math.random()}>
    <div className="avatar avatar-{idx.class} me-3">
        <img src={idx.src1} alt="img" />
    </div>
    <div>A simple {idx.color} alert with image—check it out!</div>
    <Button variant='' type="button" className="btn-close" data-bs-dismiss="alert"
        aria-label="Close" onClick={() => handleRemove9(idx.id)}><i className="bi bi-x {idx.class1}"></i></Button>
</Alert>
))}
// End Prism Code//`;

export const alert17 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <Row className="gy-3">
{additionalcontentalert.map((idx) => (
    <Col xl={6} key={Math.random()}>
        <Alert variant={idx.class} className="overflow-hidden p-0" role="alert">
            <div className="p-3 bg-{idx.class} text-fixed-white d-flex justify-content-between">
                <h6 className="aletr-heading mb-0 text-fixed-white">Thank you for reporting this.</h6>
                <Button type="button" variant='' className="btn-close p-0 text-fixed-white"
                    onClick={() => handleRemove7(idx.id)}
                    data-bs-dismiss="alert" aria-label="Close"><i className="bi bi-x"></i></Button>
            </div>
            <hr className="my-0" />
            <div className="p-3">
                <p className="mb-0">{idx.text2} <Link href="#!" className="fw-semibold text-decoration-underline">
                    {idx.text3}</Link></p>
            </div>
        </Alert>
    </Col>
))}
</Row>
// End Prism Code//`;



// Badges

export const badges1 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
{badgesdata.map((badge) => (
    <Badge key={Math.random()} bg={badge.color} className={badge bg-{badge.color} {badge.class}}>{badge.heading}</Badge>
))}
// End Prism Code//`;

export const badges2 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
   {Outlinebadgesdata.map((badge) => (
    <Badge key={Math.random()} bg={badge.color} className={badge bg-{badge.color}-transparent {badge.class}}>{badge.heading}</Badge>
))}
// End Prism Code//`;

export const badges3 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 {badgesdata.map((badge) => (
    <Badge key={Math.random()} bg={badge.color} className={badge bg-{badge.color} {badge.class} rounded-pill}>{badge.heading}</Badge>
))}
// End Prism Code//`;

export const badges4 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 {Outlinebadgesdata.map((badge) => (
<Badge key={Math.random()} bg={badge.color} className={badge bg-{badge.color}-transparent {badge.class} rounded-pill}>{badge.heading}</Badge>
))}
// End Prism Code//`;

export const badges5 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 {badges1.map((badge1) => (
    <Badge key={Math.random()} bg={badge1.color} className={badge bg-{badge1.color}-gradient}>{badge1.heading}</Badge>
))}
// End Prism Code//`;

export const badges6 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 {badges1.map((badge1) => (
<Badge key={Math.random()} bg={badge1.color} className={badge bg-{badge1.color}-gradient rounded-pill}>{badge1.heading}</Badge>
))}
// End Prism Code//`;

export const badges7 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
{Outlinebadgesdata.map((badge) => (
    <Badge key={Math.random()} bg={outline-{badge.color}} className={badge outline-{badge.color}-transparent {badge.class}}>{badge.heading}</Badge>
))}
// End Prism Code//`;

export const badges8 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
{Outlinebadgesdata.map((badge) => (
    <Badge key={Math.random()} bg={outline-{badge.color}} className={badge outline-{badge.color}-transparent {badge.class} rounded-pill}>{badge.heading}</Badge>
))}
// End Prism Code//`;

export const badges9 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
    <Button  variant='danger' type="button" className="my-1 me-2">
        Notifications <Badge bg="white" className=" ms-2 text-danger">777</Badge>
    </Button>
    <Button  variant='primary' type="button" className="my-1 me-2">
        Notifications <Badge bg="white" className=" ms-2 text-primary">4</Badge>
    </Button>
    <Button  variant='info' type="button" className="my-1 me-2">
        Notifications <Badge bg="white" className=" ms-2 text-info">32</Badge>
    </Button>
    <Button  variant='warning' type="button" className="my-1 me-2">
        Notifications <Badge bg="white" className=" ms-2 text-warning">7</Badge>
    </Button>
    <Button  variant='success' type="button" className="my-1 me-2">
        Notifications <Badge bg="white" className=" ms-2 text-success">12</Badge>
    </Button>
    <Button  variant='secondary' type="button" className="my-1 me-2">
        Notifications <Badge bg="white" className=" ms-2 text-secondary">7</Badge>
    </Button>
// End Prism Code//`;

export const badges10 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
    <Button variant='outline-primary' type="button" className="btn  my-1 me-2">
        Notifications <Badge bg="" className="badge ms-2">4</Badge>
    </Button>
    <Button variant='outline-secondary' type="button" className="btn  my-1 me-2">
        Notifications <Badge bg="" className="badge ms-2">7</Badge>
    </Button>
    <Button variant='outline-success' type="button" className="btn  my-1 me-2">
        Notifications <Badge bg="" className="badge ms-2">12</Badge>
    </Button>
    <Button variant='outline-info' type="button" className="btn  my-1 me-2">
        Notifications <Badge bg="" className="badge ms-2">32</Badge>
    </Button>
// End Prism Code//`;

export const badges11 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 	<span className="avatar">
    <img src="../../../assets/images/faces/15.jpg" alt="img"/>
    <span className="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light   rounded-circle">
        <span className="visually-hidden">New alerts</span>
    </span>
</span>
<span className="avatar">
    <img src="../../../assets/images/faces/2.jpg" alt="img"/>
    <span
        className="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
        <span className="visually-hidden">New alerts</span>
    </span>
</span>
<span className="avatar avatar-rounded">
    <img src="../../../assets/images/faces/10.jpg" alt="img"/>
    <span className="position-absolute top-0 start-100 translate-middle badge bg-secondary rounded-pill shadow-lg">1000+
        <span className="visually-hidden">New alerts</span>
    </span>
</span>
<Button variant='secondary' type="button" className="position-relative">
        Profile
    <span
        className="position-absolute top-0 start-100 translate-middle p-2 bg-success border border-light rounded-circle">
        <span className="visually-hidden">New alerts</span>
    </span>
</Button>
<Button variant='outline-info' type="button" className="btn  position-relative">
        Inbox
    <span
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger text-fixed-white">
            99+
        <span className="visually-hidden">unread messages</span>
    </span>
</Button>
// End Prism Code//`;

export const badges12 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
    <p className="mb-xxl-0 badge bg-outline-info custom-badge fs-15 me-5">
    <i className="ti ti-home me-1 d-inline-flex"></i>Home</p>
    <p className="mb-xxl-0 badge bg-success custom-badge fs-15 me-5">
        <i className="ti ti-home me-1 d-inline-flex"></i>Home</p>
    <p className="mb-xxl-0 icon-badge me-5">
        <svg className="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>
        <span className="badge rounded-pill bg-success">14</span>
    </p>
    <p className="mb-xxl-0 badge border bg-light text-default custom-badge me-5"><i className="fe fe-eye me-1 d-inline-flex"></i>13.2k</p>
    <p className="mb-xxl-0 text-badge me-5">
        <span className="text fs-18">Inbox</span>
        <Badge className="badge rounded-pill bg-success">32</Badge>
    </p>
// End Prism Code//`;

export const badges13 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
    <h1>Example heading <Badge bg="primary" className="badge">New</Badge></h1>
    <h2>Example heading <Badge bg="primary" className="badge">New</Badge></h2>
    <h3>Example heading <Badge bg="primary" className="badge">New</Badge></h3>
    <h4>Example heading <Badge bg="primary" className="badge">New</Badge></h4>
    <h5>Example heading <Badge bg="primary" className="badge">New</Badge></h5>
    <h6>Example heading <Badge bg="primary" className="badge">New</Badge></h6>
// End Prism Code//`;

//Buttons

export const buttons1 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="btn-list">
    {DefaultButtons.map((idx) => (
        <Button variant={idx.class} type="button" className="btn-wave waves-effect waves-light me-2" key={Math.random()}>{idx.text}</Button>
    ))}
</div>
// End Prism Code//`;

export const buttons2 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="btn-list">
    {DefaultButtons.map((idx) => (
        <Button variant={idx.class} type="button" className="rounded-pill btn-wave me-2" key={Math.random()}>{idx.text}</Button>
    ))}
</div>
// End Prism Code//`;

export const buttons3 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="btn-list">
{LightButtons.map((idx) => (
    <Button type="button" variant={idx.class} className="btn btn-wave me-2" key={Math.random()}>{idx.text}</Button>
))}
</div>
// End Prism Code//`;

export const buttons4 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="btn-list">
{LightButtons.map((idx) => (
    <Button type="button" variant={idx.class} className="btn rounded-pill btn-wave me-2" key={Math.random()}>{idx.text}</Button>
))}
</div>
// End Prism Code//`;

export const buttons5 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="btn-list">
{OutlineButtons.map((idx) => (
    <Button type="button" variant={idx.class} className="btn  btn-wave me-2" key={Math.random()}>{idx.text}</Button>
))}
</div>
// End Prism Code//`;

export const buttons6 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="btn-list">
{OutlineButtons.map((idx) => (
    <Button type="button" variant={idx.class} className="btn rounded-pill btn-wave me-2" key={Math.random()}>{idx.text}</Button>
))}
</div>
// End Prism Code//`;

export const buttons7 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="btn-list">
    {GradientButtons.map((idx) => (
        <Button type="button" variant={idx.class} className="btn btn-wave me-2" key={Math.random()}>{idx.text}</Button>
    ))}
    </div>
// End Prism Code//`;

// End Prism Code//
export const buttons8 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="btn-list">
{GradientButtons.map((idx) => (
    <Button type="button" variant={idx.class} className="btn rounded-pill btn-wave me-2" key={Math.random()}>{idx.text}</Button>
))}
</div>
// End Prism Code//`;

export const buttons9 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  <div className="btn-list">
{GhostButtons.map((idx) => (
    <Button type="button" variant={idx.class} className="btn btn-wave me-2" key={Math.random()}>{idx.text}</Button>
))}
</div>
// End Prism Code//`;

export const buttons10 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="btn-list">
    <Button variant='primary' className="btn  btn-wave" href="#!" role="button">Link</Button>
    <Button variant='secondary' className="btn  btn-wave" type="submit">Button</Button>
    <Button variant='info' as="input" className="btn " type="button" value="Input" />
    <Button variant='warning' as="input" className="btn" type="submit" value="Submit" />
    <Button variant='success' as="input" className="btn " type="reset" value="Reset" />
</div>
// End Prism Code//`;

export const buttons11 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="btn-list">
<div className="mb-4">
    <Button type="button" variant='primary' className="btn" disabled>Primary
        button</Button>
    <Button type="button" variant='secondary' className="btn" disabled>Button</Button>
    <Button type="button" variant='outline-primary' className="btn b" disabled>Primary
        button</Button>
    <Button type="button" variant='outline-secondary' className="btn " disabled>Button</Button>
</div>

<div>
    <Button variant='primary'disabled className="btn" role="button">Primary
        link</Button>
    <Button variant='secondary' disabled className="btn" role="button">Link</Button>
</div>
</div>
// End Prism Code//`;

export const buttons12 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="btn-list">
<div className="mb-4">
    <Button type="button" variant='primary' className="btn btn-wave"
    >Toggle button</Button>
    <Button type="button" variant='secondary' active className="btn  btn-wave">
        Active toggle button</Button>
    <Button type="button" variant='teal' className="btn btn-wave" disabled>Disabled toggle
        button</Button>
</div>
<div>
    <Button variant='primary' href="#!" className="btn btn-wave" role="button" >Toggle
        link</Button>
    <Button href="#!" variant='secondary' active className="btn btn-wave" role="button">
        Active toggle link</Button>
    <Button variant='teal' className="btn  btn-wave" role="button" disabled>Disabled toggle link</Button>
</div>
</div>
// End Prism Code//`;

export const buttons13 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="btn-list">
    <Button variant='primary' disabled className="btn" tabIndex={-1} role="button">Primary link</Button>
    <Button variant='secondary' disabled className="btn" tabIndex={-1} role="button">Link</Button>
</div>
// End Prism Code//`;

export const buttons14 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="btn-list d-md-flex flex-wrap">
<Button variant='primary' className="btn  btn-loader">
    <span className="me-2">Loading</span>
    <span className="loading"><i className="ri-loader-2-fill fs-16"></i></span>
</Button>
<Button variant='outline-secondary' className="btn btn-loader">
    <span className="me-2">Loading</span>
    <span className="loading"><i className="ri-loader-2-fill fs-16"></i></span>
</Button>
<Button variant='info-transparent' className="btn  btn-loader">
    <span className="me-2">Loading</span>
    <span className="loading"><i className="ri-loader-4-line fs-16"></i></span>
</Button>
<Button variant='warning-transparent' className="btn  btn-loader">
    <span className="me-2">Loading</span>
    <span className="loading"><i className="ri-loader-5-line fs-16"></i></span>
</Button>
<Button variant='success' className="btn btn-loader" disabled>
    <span className="me-2">Disabled</span>
    <span className="loading"><i className="ri-refresh-line fs-16"></i></span>
</Button>
</div>
// End Prism Code//`;

export const buttons15 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="btn-list d-md-flex d-block">
    <div className="mb-md-0 mb-2">
        <Button variant="primary" className="btn btn-icon  btn-wave">
            <i className="ri-bank-fill"></i>
        </Button>
        <Button variant="info" className="btn btn-icon  btn-wave">
            <i className="ri-medal-line"></i>
        </Button>
        <Button variant="danger" className="btn btn-icon  btn-wave">
            <i className="ri-archive-line"></i>
        </Button>
        <Button variant="warning" className="btn btn-icon  btn-wave me-5">
            <i className="ri-calendar-2-line"></i>
        </Button>
    </div>
    <div className="mb-md-0 mb-2">
        <Button variant="primary-transparent" className="btn btn-icon rounded-pill btn-wave">
            <i className="ri-home-smile-line"></i>
        </Button>
        <Button variant="secondary-transparent" className="btn btn-icon  rounded-pill btn-wave">
            <i className="ri-delete-bin-line"></i>
        </Button>
        <Button variant="success-transparent" className="btn btn-icon  rounded-pill btn-wave">
            <i className="ri-notification-3-line"></i>
        </Button>
        <Button variant="danger-transparent" className="btn btn-icon  rounded-pill btn-wave me-5">
            <i className="ri-chat-settings-line"></i>
        </Button>
    </div>
    <div className="">
        <Button variant="outline-primary" className="btn btn-icon  rounded-pill btn-wave">
            <i className="ri-phone-line"></i>
        </Button>
        <Button variant="outline-teal" className="btn btn-icon  rounded-pill btn-wave">
            <i className="ri-customer-service-2-line"></i>
        </Button>
        <Button variant="outline-success" className="btn btn-icon  rounded-pill btn-wave">
            <i className="ri-live-line"></i>
        </Button>
        <Button variant="outline-secondary" className="btn btn-icon  rounded-pill btn-wave">
            <i className="ri-save-line"></i>
        </Button>
    </div>
</div>
// End Prism Code//`;

export const buttons16 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  <div className="btn-list d-md-flex d-block">
<div className="mb-md-0 mb-2">
    <Button variant="" className="btn btn-sm btn-icon btn-primary btn-wave">
        <i className="ri-bank-fill"></i>
    </Button>
    <Button variant="" className="btn btn-icon btn-info btn-wave">
        <i className="ri-medal-line"></i>
    </Button>
    <Button variant="" className="btn btn-lg btn-icon btn-danger btn-wave">
        <i className="ri-archive-line"></i>
    </Button>
</div>
<div className="mb-md-0 mb-2">
    <Button variant="" className="btn btn-sm btn-icon btn-primary-light rounded-pill btn-wave">
        <i className="ri-home-smile-line"></i>
    </Button>
    <Button variant="" className="btn btn-icon btn-secondary-light rounded-pill btn-wave">
        <i className="ri-delete-bin-line"></i>
    </Button>
    <Button variant="" className="btn btn-lg btn-icon btn-success-light rounded-pill btn-wave">
        <i className="ri-notification-3-line"></i>
    </Button>
</div>
<div className="">
    <Button variant="" className="btn btn-sm btn-icon btn-outline-primary rounded-pill btn-wave">
        <i className="ri-phone-line"></i>
    </Button>
    <Button variant="" className="btn btn-icon btn-outline-teal rounded-pill btn-wave">
        <i className="ri-customer-service-2-line"></i>
    </Button>
    <Button variant="" className="btn btn-lg btn-icon btn-outline-success rounded-pill btn-wave">
        <i className="ri-live-line"></i>
    </Button>
</div>
</div>
// End Prism Code//`;

export const buttons17 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
{SocialIconButtons.map((idx) => (
<Button variant={idx.class} className="btn btn-icon btn-wave waves-effect waves-light m-1" key={Math.random()}>
    <i className={ri-{idx.class}-line}></i>
</Button>
))}
// End Prism Code//`;

export const buttons18 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="btn-list">
    <Button type="button" variant='primary' className="btn  btn-sm btn-wave">Small
        button</Button>
    <Button type="button" variant='secondary' className="btn  btn-wave">Default
        button</Button>
    <Button type="button" variant='success' className="btn  btn-lg btn-wave">Large
        button</Button>
</div>
// End Prism Code//`;

export const buttons19 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="btn-list">
    <Button type="button" variant='primary' className="btn btn-w-xs btn-wave">XS</Button>
    <Button type="button" variant='secondary' className="btn btn-w-sm btn-wave">SM</Button>
    <Button type="button" variant='warning' className="btn btn-w-md btn-wave">MD</Button>
    <Button type="button" variant='info' className="btn btn-w-lg btn-wave">LG</Button>
</div>
// End Prism Code//`;

export const buttons20 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="btn-list d-flex">
    <div className="me-5">
        <Button variant='primary' className="btn  shadow-sm btn-wave">Button</Button>
        <Button variant='primary' className="btn btn-primary shadow btn-wave">Button</Button>
        <Button variant='primary' className="btn btn-primary shadow-lg btn-wave">Button</Button>
    </div>
    <div>
        <Button variant='secondary' className="btn  btn-sm shadow-sm btn-wave">Button</Button>
        <Button variant='info' className="btn  shadow btn-wave">Button</Button>
        <Button variant='success' className="btn btn-lg  shadow-lg btn-wave">Button</Button>
    </div>
</div>
// End Prism Code//`;

export const buttons21 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
   <div className="btn-list">
    {ColoredButtons.map((idx) => (
        <Button variant={idx.class} className={btn shadow-{idx.class} btn-wave} key={Math.random()}>Button</Button>
    ))}
</div>
// End Prism Code//`;

export const buttons22 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="btn-list">
    {ColoredButtons.map((idx) => (
        <Button variant={idx.class} className="btn  btn-raised-shadow btn-wave" key={Math.random()}>Button</Button>
    ))}
</div>
// End Prism Code//`;

export const buttons23 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  <div className="btn-list">
    <Button className="btn btn-primary label-btn">
        <i className="ri-chat-smile-line label-btn-icon me-2"></i>
        Primary
    </Button>
    <Button className="btn btn-secondary label-btn">
        <i className="ri-settings-4-line label-btn-icon me-2"></i>
        Secondary
    </Button>
    <Button className="btn btn-warning label-btn rounded-pill">
        <i className="ri-spam-2-line label-btn-icon me-2 rounded-pill"></i>
        Warning
    </Button>
    <Button className="btn btn-info label-btn rounded-pill">
        <i className="ri-phone-line label-btn-icon me-2 rounded-pill"></i>
        Info
    </Button>
    <Button className="btn btn-success label-btn label-end">
        Success
        <i className="ri-thumb-up-line label-btn-icon ms-2"></i>
    </Button>
    <Button className="btn btn-danger label-btn label-end rounded-pill">
        Cancel
        <i className="ri-close-line label-btn-icon ms-2 rounded-pill"></i>
    </Button>
</div>
// End Prism Code//`;

export const buttons24 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
   <div className="btn-list">
    <Button variant='info' className="btn  custom-button rounded-pill">
        <span className="custom-btn-icons"><i className="ri-twitter-line text-info"></i></span>
        Twitter
    </Button>
    <Button variant='teal-light' className="btn  btn-border-down">Border</Button>
    <Button variant='secondary-light' className="btn  btn-border-start">Border</Button>
    <Button variant='purple-light' className="btn  btn-border-end">Border</Button>
    <Button variant='warning-light' className="btn  btn-border-top">Border</Button>
    <Button variant='secondary' className="btn  btn-glare"><span>Glare Button</span></Button>
    <Button variant='danger' className="btn  btn-hover btn-hover-animate">Like</Button>
    <Button variant='success' className="btn  btn-darken-hover">Hover</Button>
    <Button variant='orange' className="btn  btn-custom-border">Hover</Button>
    </div>
// End Prism Code//`;

export const buttons25 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="btn-list">
    <div className="d-grid gap-2 mb-4">
        <Button variant='primary' className="btn  btn-wave" type="button">Button</Button>
        <Button variant='secondary' className="btn  btn-wave" type="button">Button</Button>
    </div>
    <div className="d-grid gap-2 d-md-block">
        <Button variant='info' className="btn  btn-wave" type="button">Button</Button>
        <Button variant='success' className="btn  btn-wave" type="button">Button</Button>
    </div>
    <div className="d-grid gap-2 col-6 mx-auto">
        <Button variant='danger' className="btn  btn-wave" type="button">Button</Button>
        <Button variant='warning' className="btn  btn-wave" type="button">Button</Button>
    </div>
    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <Button variant='teal' className="btn me-md-2 btn-wave" type="button">Button</Button>
        <Button variant='purple' className="btn  btn-wave" type="button">Button</Button>
    </div>
</div>
// End Prism Code//`;

//Button Groups

export const btngroup1 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<ButtonGroup className="btn-group" role="group" aria-label="Basic example">
    <Button variant="info" type="button" className="btn btn-wave"><i className="bi bi-skip-backward"></i></Button>
    <Button variant="info" type="button" className="btn btn-wave"><i className="bi bi-pause"></i></Button>
    <Button variant="info" type="button" className="btn btn-wave"><i className="bi bi-skip-forward"></i></Button>
</ButtonGroup>
// End Prism Code//`;

export const btngroup2 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<ButtonGroup className="btn-group">
    <Button variant='primary' active href="#" className="btn  active btn-wave" aria-current="page">Active
        link</Button>
    <Button variant='primary' href="#" className="btn">Link</Button>
    <Button variant='primary' href="#" className="btn ">Link</Button>
</ButtonGroup>
// End Prism Code//`;

export const btngroup3 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <ButtonGroup className="btn-group" role="group" aria-label="Basic mixed styles example">
    <Button variant="danger" type="button" className="btn btn-wave">Left</Button>
    <Button variant="warning" type="button" className="btn btn-wave">Middle</Button>
    <Button variant="success" type="button" className="btn btn-wave">Right</Button>
</ButtonGroup>
// End Prism Code//`;

export const btngroup4 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<ButtonGroup className="btn-group1" role="group" aria-label="Basic outlined example">
    <Button variant="outline-primary" type="button" className="btn btn-wave">Left</Button>
    <Button variant="outline-primary" type="button" className="btn btn-wave">Middle</Button>
    <Button variant="outline-primary" type="button" className="btn btn-wave">Right</Button>
</ButtonGroup>
// End Prism Code//`;

export const btngroup5 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<ButtonGroup className="btn-group2" role="group" aria-label="Basic checkbox toggle button group">
    <input type="checkbox" className="btn-check" id="btncheck1" />
    <label className="btn btn-outline-primary" htmlFor="btncheck1">Checkbox 1</label>

    <input type="checkbox" className="btn-check" id="btncheck2" />
    <label className="btn btn-outline-primary" htmlFor="btncheck2">Checkbox 2</label>

    <input type="checkbox" className="btn-check" id="btncheck3" />
    <label className="btn btn-outline-primary" htmlFor="btncheck3">Checkbox 3</label>
</ButtonGroup>
// End Prism Code//`;

export const btngroup6 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <ButtonGroup className="btn-group2" role="group" aria-label="Basic radio toggle button group">
    <input type="radio" className="btn-check" name="btnradio" id="btnradio1"
    defaultChecked />
    <label className="btn btn-outline-primary" htmlFor="btnradio1">Radio 1</label>

    <input type="radio" className="btn-check" name="btnradio" id="btnradio2"
    />
    <label className="btn btn-outline-primary" htmlFor="btnradio2">Radio 2</label>

    <input type="radio" className="btn-check" name="btnradio" id="btnradio3"
    />
    <label className="btn btn-outline-primary" htmlFor="btnradio3">Radio 3</label>
    </ButtonGroup>
// End Prism Code//`;

export const btngroup7 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<ButtonGroup className="btn-group btn-group-lg my-1 me-1" role="group" aria-label="Large button group">
    <Button variant="outline-success" type="button" className="btn">Left</Button>
    <Button variant="outline-success" type="button" className="btn">Middle</Button>
    <Button variant="outline-success" type="button" className="btn">Right</Button>
</ButtonGroup>
<ButtonGroup className="btn-group my-1 me-1" role="group" aria-label="Default button group">
    <Button variant="outline-success" type="button" className="btn">Left</Button>
    <Button variant="outline-success" type="button" className="btn">Middle</Button>
    <Button variant="outline-success" type="button" className="btn">Right</Button>
</ButtonGroup>
<ButtonGroup className="btn-group btn-group-sm my-1 me-1" role="group" aria-label="Small button group">
    <Button variant="outline-success" type="button" className="btn">Left</Button>
    <Button variant="outline-success" type="button" className="btn">Middle</Button>
    <Button variant="outline-success" type="button" className="btn">Right</Button>
</ButtonGroup>
// End Prism Code//`;

export const btngroup8 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  <ButtonToolbar className="mb-4" role="toolbar"
    aria-label="Toolbar with button groups">
    <ButtonGroup className="btn-group me-2 my-1" role="group" aria-label="First group">
        <Button variant="primary" type="button" className="btn">1</Button>
        <Button variant="primary" type="button" className="btn">2</Button>
        <Button variant="primary" type="button" className="btn">3</Button>
        <Button variant="primary" type="button" className="btn">4</Button>
    </ButtonGroup>
    <ButtonGroup className="btn-group me-2 my-1" role="group" aria-label="Second group">
        <Button variant="secondary" type="button" className="btn">5</Button>
        <Button variant="secondary" type="button" className="btn">6</Button>
        <Button variant="secondary" type="button" className="btn">7</Button>
    </ButtonGroup>
    <ButtonGroup className="btn-group my-1" role="group" aria-label="Third group">
        <Button variant="info" type="button" className="btn btn-info">8</Button>
    </ButtonGroup>
</ButtonToolbar>
<ButtonToolbar className="mb-3" role="toolbar"
    aria-label="Toolbar with button groups">
    <ButtonGroup className="btn-group me-2 my-1" role="group" aria-label="First group">
        <Button variant="outline-secondary" type="button" className="btn">1</Button>
        <Button variant="outline-secondary" type="button" className="btn">2</Button>
        <Button variant="outline-secondary" type="button" className="btn">3</Button>
        <Button variant="outline-secondary" type="button" className="btn">4</Button>
    </ButtonGroup>
    <InputGroup>
        <InputGroup.Text id="btnGroupAddon">@</InputGroup.Text>
        <Form.Control type="text"
            placeholder="Input group example"
            aria-label="Input group example"
            aria-describedby="btnGroupAddon" />
    </InputGroup>
</ButtonToolbar>
<ButtonToolbar className="justify-content-between" role="toolbar"
    aria-label="Toolbar with button groups">
    <ButtonGroup className="btn-group my-1" role="group" aria-label="First group">
        <Button variant="outline-secondary" type="button" className="btn">1</Button>
        <Button variant="outline-secondary" type="button" className="btn">2</Button>
        <Button variant="outline-secondary" type="button" className="btn">3</Button>
        <Button variant="outline-secondary" type="button" className="btn">4</Button>
    </ButtonGroup>
    <InputGroup>
        <InputGroup.Text id="btnGroupAddon2">@</InputGroup.Text>
        <Form.Control type="text"
            placeholder="Input group example"
            aria-label="Input group example"
            aria-describedby="btnGroupAddon2" />
    </InputGroup>
</ButtonToolbar>
// End Prism Code//`;


export const btngroup9 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<ButtonGroup className="btn-group" role="group"
    aria-label="Button group with nested dropdown">
    <Button variant="" type="button" className="btn btn-primary">1</Button>
    <Button variant="" type="button" className="btn btn-primary">2</Button>

    <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
    </DropdownButton>
    </ButtonGroup>
// End Prism Code//`;


export const btngroup10 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  <div className="row gap-2">
    <Col sm={3}>
        <ButtonGroup vertical role="group" aria-label="Vertical button group">
            <Button variant="primary" type="button" className="btn ">Button</Button>
            <Button variant="primary" type="button" className="btn ">Button</Button>
            <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
                <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
            </DropdownButton>
            <Button variant="primary" type="button" className="btn ">Button</Button>
            <Button variant="primary" type="button" className="btn ">Button</Button>
            <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
                <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
            </DropdownButton>
            <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
                <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
            </DropdownButton>
            <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
                <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
            </DropdownButton>
        </ButtonGroup>
    </Col>
    <Col sm={3}>
        <ButtonGroup vertical role="group" aria-label="Vertical button group">
            <Button variant="" type="button" className="btn btn-info">Button</Button>
            <Button variant="" type="button" className="btn btn-info">Button</Button>
            <Button variant="" type="button" className="btn btn-info">Button</Button>
            <Button variant="" type="button" className="btn btn-info">Button</Button>
            <Button variant="" type="button" className="btn btn-info">Button</Button>
            <Button variant="" type="button" className="btn btn-info">Button</Button>
        </ButtonGroup>
    </Col>
    <Col sm={3}>
        <ButtonGroup vertical role="group"
            aria-label="Vertical radio toggle button group">
            <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio1"
                defaultChecked />
            <label className="btn btn-outline-danger" htmlFor="vbtn-radio1">Radio 1</label>
            <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio2"
            />
            <label className="btn btn-outline-danger" htmlFor="vbtn-radio2">Radio 2</label>
            <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio3"
            />
            <label className="btn btn-outline-danger" htmlFor="vbtn-radio3">Radio 3</label>
        </ButtonGroup>
    </Col>
</div>
// End Prism Code//`;


export const btngroup11 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
   <ButtonGroup className="btn-group" role="group" aria-label="Basic example">
        {SocialIconButtons.map((idx) => (
            <Button variant={idx.class} className="btn btn-icon btn-wave" key={Math.random()}>
                <i className={ri-{idx.class}-line}></i>
            </Button>
        ))}
    </ButtonGroup>
// End Prism Code//`;



//Images & Figures

export const image1 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <p className="card-title mb-3">Use <code> .img-fluid </code>class to the img tag to get responsive image.</p>
    <div className="text-center">
        <img src="../../../assets/images/media/media-48.jpg" className="img-fluid" alt="..."/>
    </div>
// End Prism Code//`;

export const image2 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  <p className="card-title mb-3">Use <code>.rounded</code> class along with <code>.img-fluid</code> to get border radius.</p>
    <div className="text-center">
        <img src="../../../assets/images/media/media-49.jpg" className="img-fluid rounded" alt="..."/>
    </div>
// End Prism Code//`;

export const image3 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <p className="card-title mb-3">Use <code>.rounded-pill</code> class to <code>img</code> tag to get rounded image.</p>
  <div className="text-center">
      <img src="../../../assets/images/media/media-50.jpg" className="img-fluid rounded-pill" alt="..."/>
  </div>
// End Prism Code//`;

export const image4 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<img className="rounded float-start" src="../../../assets/images/media/media-53.jpg" alt="..."/>
// End Prism Code//`;

export const image5 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<img className="rounded mx-auto d-block" src="../../../assets/images/media/media-55.jpg" alt="..."/>
// End Prism Code//`;

export const image6 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <img className="rounded float-end" src="../../../assets/images/media/media-54.jpg" alt="..."/>
// End Prism Code//`;

export const image7 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  <figure className="figure">
    <img className="bd-placeholder-img figure-img img-fluid rounded card-img"
     src="../../../assets/images/media/media-56.jpg" alt="..."/>
    <figcaption className="figure-caption">A caption for the above image.
    </figcaption>
</figure>
<figure className="figure float-end">
    <img className="bd-placeholder-img figure-img img-fluid rounded card-img" 
    src="../../../assets/images/media/media-57.jpg" alt="..."/>
    <figcaption className="figure-caption text-end">A caption for the above image.
    </figcaption>
</figure>
// End Prism Code//`;

export const image8 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <p className="card-title mb-3">Use <code> .img-thumbnail </code>to give an image a rounded 1px border.</p>
    <div className="text-center">
        <img src="../../../assets/images/media/media-51.jpg" className="img-thumbnail" alt="..."/>
    </div>
// End Prism Code//`;

export const image9 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  <p className="card-title mb-3">Use <code> .rounded-pill </code>along with <code> .img-thummbnail </code> to get radius.</p>
    <div className="text-center">
        <img src="../../../assets/images/media/media-52.jpg" className="img-thumbnail rounded-pill" alt="..."/>
    </div>
// End Prism Code//`;

//List Group

export const listgroup1 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<ListGroup as="ul">
{BasicButtons.map((idx) => (
    <ListGroup.Item as="li" key={Math.random()}>
        <div className="d-flex align-items-center">
            <span className="avatar avatar-sm">
                <img src={idx.src} alt="img" />
            </span>
            <div className="ms-2 fw-semibold">
                {idx.text}
            </div>
        </div>
    </ListGroup.Item>
))}
</ListGroup>
// End Prism Code//`;

export const listgroup2 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<ListGroup as="ul">
    {ActiveButtons.map((idx) => (
        <ListGroup.Item as="li" className={list-group-item {idx.class1}} aria-current="true" key={Math.random()}>
            <div className="d-flex align-items-center">
                <div>
                    <span className="avatar avatar-sm bg-white text-default avatar-rounded ">
                        <i className={bi bi-{idx.class}}></i>
                    </span>
                </div>
                <div className="ms-2">
                    {idx.text}
                </div>
            </div>
        </ListGroup.Item>
    ))}
</ListGroup>
// End Prism Code//`;

export const listgroup3 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <ListGroup as="ul">
    <ListGroup.Item as="li" disabled className="" aria-disabled="true">A disabled item meant to be disabled
    </ListGroup.Item>
    <ListGroup.Item as="li">Simply dummy text of the printing</ListGroup.Item>
    <ListGroup.Item as="li">There are many variations of passages</ListGroup.Item>
    <ListGroup.Item as="li">All the Lorem Ipsum generators</ListGroup.Item>
    <ListGroup.Item as="li">All the Lorem Ipsum generators</ListGroup.Item>
    <ListGroup.Item as="li">Written in 45 BC. This book is a treatise on the theory</ListGroup.Item>
    </ListGroup>
// End Prism Code//`;

export const listgroup4 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <ListGroup variant='flush' className="">
<ListGroup.Item className="fw-semibold"><i className="bi bi-envelope align-middle me-2 text-muted"></i>Asish Trivedhi<span className="ms-1 text-muted fw-normal d-inline-block">(+1023-84534)</span></ListGroup.Item>
<ListGroup.Item className="fw-semibold"><i className="bi bi-tiktok align-middle me-2 text-muted"></i>Alezander Russo<span className="ms-1 text-muted fw-normal d-inline-block">(+7546-12342)</span></ListGroup.Item>
<ListGroup.Item className="fw-semibold"><i className="bi bi-whatsapp align-middle me-2 text-muted"></i>Karem Smith<span className="ms-1 text-muted fw-normal d-inline-block">(+9944-56632)</span></ListGroup.Item>
<ListGroup.Item className="fw-semibold"><i className="bi bi-facebook align-middle me-2 text-muted"></i>Melissa Brien<span className="ms-1 text-muted fw-normal d-inline-block">(+1023-34323)</span></ListGroup.Item>
<ListGroup.Item className="fw-semibold"><i className="bi bi-instagram align-middle me-2 text-muted"></i>Kamala Harris<span className="ms-1 text-muted fw-normal d-inline-block">(+91-63421)</span></ListGroup.Item>
</ListGroup>
// End Prism Code//`;

export const listgroup5 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<ListGroup className="list-group">
    {LinksButtons.map((idx) => (
        <ListGroup.Item action className={list-group-item-action {idx.class1}} key={Math.random()}
            aria-current="true">
            <div className="d-flex align-items-center">
                <div>
                    <span className={avatar avatar-xs bg-{idx.class} text-{idx.color} avatar-rounded}>
                        {idx.text1}
                    </span>
                </div>
                <div className="ms-2">{idx.text}</div>
            </div>
        </ListGroup.Item>
    ))}
</ListGroup>
// End Prism Code//`;

export const listgroup6 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <ListGroup className="list-group">
    <ListGroup.Item type="button" className="list-group-item-action active" aria-current="true">Simply dummy text of the printing<span className="badge float-end bg-primary">243</span></ListGroup.Item>
    <ListGroup.Item type="button" className="list-group-item-action">There are many variations of passages<span className="badge float-end bg-secondary-transparent">35</span></ListGroup.Item>
    <ListGroup.Item type="button" className="list-group-item-action">All the Lorem Ipsum generators<span className="badge float-end bg-info-transparent">132</span></ListGroup.Item>
    <ListGroup.Item type="button" className="list-group-item-action">All the Lorem Ipsum generators<span className="badge float-end bg-success-transparent">2525</span></ListGroup.Item>
    <ListGroup.Item type="button" className="list-group-item-action" disabled>A disabled item meant to be disabled<span className="badge float-end bg-danger-transparent">21</span></ListGroup.Item>
</ListGroup>
// End Prism Code//`;

export const listgroup7 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <ListGroup as="ul">
    {ContextualButtons.map((idx) => (
        <ListGroup.Item as="li" variant={idx.class} key={Math.random()}>{idx.text}</ListGroup.Item>
    ))}
</ListGroup>
// End Prism Code//`;

export const listgroup8 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <ListGroup>
    {ContextualButtons.map((idx) => (
        <ListGroup.Item variant={idx.class} action className=" list-group-item-action" key={Math.random()}>{idx.text}</ListGroup.Item>
    ))}
</ListGroup>
// End Prism Code//`;

export const listgroup9 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<ListGroup as="ul">
{ContextualButtons.map((idx) => (
    <ListGroup.Item className={list-item-solid-{idx.class} {idx.class1}} as="li" key={Math.random()}>{idx.text}</ListGroup.Item>
))}

</ListGroup>
// End Prism Code//`;

export const listgroup10 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<ListGroup className="list-group">
        {CustomButtons.map((idx) => (
            <ListGroup.Item action className={list-group-item-action {idx.class1}} key={Math.random()}
                aria-current="true">
                <div className="d-flex w-100 justify-content-between gap-1">
                    <h6 className="mb-1 fw-semibold">{idx.heading}</h6>
                    <small className={idx.class2}>{idx.text1}</small>
                </div>
                <p className="mb-1">{idx.text2}</p>
                <small>{idx.text3}.</small>
            </ListGroup.Item>
        ))}
    </ListGroup>
// End Prism Code//`;

export const listgroup11 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <ListGroup as="ol" numbered>
    {SubheadingsButtons.map((idx) => (
        <ListGroup.Item as="li" className="list-group-item d-flex justify-content-between align-items-start" key={Math.random()}>
            <div className="ms-2 me-auto text-muted">
                <div className="fw-semibold fs-14 text-default">{idx.text1}</div>
                {idx.text2}
            </div>
            <Badge bg={idx.class}>{idx.text3}</Badge>
        </ListGroup.Item>
    ))}
</ListGroup>
// End Prism Code//`;

export const listgroup12 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  <ListGroup as="ol" numbered>
    <ListGroup.Item as="li">Simply dummy text of the printing.</ListGroup.Item>
    <ListGroup.Item as="li">There are many variations of passages.</ListGroup.Item>
    <ListGroup.Item as="li">All the Lorem Ipsum generators.</ListGroup.Item>
    <ListGroup.Item as="li">Written in 45 BC. This book is a treatise on the theory.</ListGroup.Item>
    <ListGroup.Item as="li">Randomised words which don't look.</ListGroup.Item>
    <ListGroup.Item as="li">Always free from repetition, injected humour.</ListGroup.Item>
</ListGroup>
// End Prism Code//`;

export const listgroup13 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<ListGroup as="ul">
    <ListGroup.Item as="li">
        <input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
            aria-label="..." defaultChecked />
        Accurate information at any given point.
    </ListGroup.Item>
    <ListGroup.Item as="li">
        <input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
            aria-label="..." />
        Hearing the information and responding.
    </ListGroup.Item>
    <ListGroup.Item as="li">
        <input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
            aria-label="..." defaultChecked />
        Setting up and customizing your own sales.
    </ListGroup.Item>
    <ListGroup.Item as="li">
        <input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
            aria-label="..." defaultChecked />
        New Admin Launched.
    </ListGroup.Item>
    <ListGroup.Item as="li">
        <input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
            aria-label="..." />
        To maximize profits and improve productivity.
    </ListGroup.Item>
    <ListGroup.Item as="li">
        <input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
            aria-label="..." />
        To have a complete 360° overview of sales information, having.
    </ListGroup.Item>
</ListGroup>
// End Prism Code//`;

export const listgroup14 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <ListGroup className="list-group">
    <ListGroup.Item className="list-group-item">
        <input className="form-check-input me-1" type="radio" value=""
            name="list-radio" defaultChecked />
        Accurate information at any given point.
    </ListGroup.Item>
    <ListGroup.Item className="list-group-item">
        <input className="form-check-input me-1" type="radio" value=""
            name="list-radio" defaultChecked />
        Hearing the information and responding.
    </ListGroup.Item>
    <ListGroup.Item className="list-group-item">
        <input className="form-check-input me-1" type="radio" value=""
            name="list-radio" defaultChecked />
        Setting up and customizing your own sales.
    </ListGroup.Item>
    <ListGroup.Item className="list-group-item">
        <input className="form-check-input me-1" type="radio" value=""
            name="list-radio" />
        New Admin Launched.
    </ListGroup.Item>
    <ListGroup.Item className="list-group-item">
        <input className="form-check-input me-1" type="radio" value=""
            name="list-radio" />
        To maximize profits and improve productivity.
    </ListGroup.Item>
    <ListGroup.Item className="list-group-item">
        <input className="form-check-input me-1" type="radio" value=""
            name="list-radio" />
        To have a complete 360° overview of sales information, having.
    </ListGroup.Item>
</ListGroup>
// End Prism Code//`;

export const listgroup15 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<ListGroup as="ul">
    {ListbadgesButtons.map((idx) => (
        <ListGroup.Item key={Math.random()}
            className="list-group-item d-flex justify-content-between align-items-center fw-semibold">
            {idx.text1}
            <Badge bg={idx.class} className={idx.color}>{idx.text2}</Badge>
        </ListGroup.Item>
    ))}
</ListGroup>
// End Prism Code//`;

export const listgroup16 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 {HorizontalButtons.map((idx) => (
    <ListGroup as="ul" className={list-group-horizontal{idx.class} mb-3} key={Math.random()}>
        <ListGroup.Item as="li">An item</ListGroup.Item>
        <ListGroup.Item as="li">A second item</ListGroup.Item>
        <ListGroup.Item as="li">A third item</ListGroup.Item>
    </ListGroup>
))}
// End Prism Code//`;


//Link&interactions
export const interactions1 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<p className="user-select-all">This paragraph will be entirely selected when clicked by the user.</p>
<p className="user-select-auto">This paragraph has default select behavior.</p>
<p className="user-select-none mb-0">This paragraph will not be selectable when clicked by the user.</p>
// End Prism Code//`;
export const interactions2 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<p><a href="#!" className="pe-none text-primary fw-medium text-decoration-underline" tabIndex={-1}>This link</a> can not be clicked.</p>
<p><a href="#!" className="pe-auto text-primary fw-medium text-decoration-underline">This link</a> can be clicked (this is default behavior).</p>
<p className="pe-none mb-0"><a href="#!" tabIndex={-1} className="text-primary fw-medium text-decoration-underline">This link</a> can not be clicked because the <code>pointer-events</code> property is inherited from its parent. However, <a href="#!" className="pe-auto">this link</a> has a <code>pe-auto</code> class and can be clicked.</p>
// End Prism Code//`;
export const interactions3 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
    <p><a className="link-opacity-10" href="#!">Link opacity 10</a></p>
    <p><a className="link-opacity-25" href="#!">Link opacity 25</a></p>
    <p><a className="link-opacity-50" href="#!">Link opacity 50</a></p>
    <p><a className="link-opacity-75" href="#!">Link opacity 75</a></p>
    <p className="mb-0"><a className="link-opacity-100" href="#!">Link opacity 100</a></p>
// End Prism Code//`;
export const interactions4 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  <a className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover text-decoration-underline" href="#!">
    Underline opacity 0
</a>
// End Prism Code//`;
export const interactions5 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
    <p><a href="#!" className="link-underline-primary text-decoration-underline">Primary underline</a></p>
    <p><a href="#!" className="link-underline-secondary text-decoration-underline">Secondary underline</a></p>
    <p><a href="#!" className="link-underline-success text-decoration-underline">Success underline</a></p>
    <p><a href="#!" className="link-underline-danger text-decoration-underline">Danger underline</a></p>
    <p><a href="#!" className="link-underline-warning text-decoration-underline">Warning underline</a></p>
    <p><a href="#!" className="link-underline-info text-decoration-underline">Info underline</a></p>
    <p><a href="#!" className="link-underline-light text-decoration-underline">Light underline</a></p>
    <p className="mb-0"><a href="#!" className="link-underline-dark text-decoration-underline">Dark underline</a></p>
// End Prism Code//`;

export const interactions6 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<p><a href="#!" className="text-decoration-underline">Default link</a></p>
<p><a className="link-offset-1 text-decoration-underline" href="#!">Offset 1 link</a></p>
<p><a className="link-offset-2 text-decoration-underline" href="#!">Offset 2 link</a></p>
<p className="mb-0"><a className="link-offset-3 text-decoration-underline" href="#!">Offset 3 link</a></p>
// End Prism Code//`;
export const interactions7 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<p><a className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-0" href="#!">Underline opacity 0</a></p>
<p><a className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-10" href="#!">Underline opacity 10</a></p>
<p><a className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-25" href="#!">Underline opacity 25</a></p>
<p><a className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-50" href="#!">Underline opacity 50</a></p>
<p><a className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-75" href="#!">Underline opacity 75</a></p>
<p><a className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-100" href="#!">Underline opacity 100</a></p>
// End Prism Code//`;
export const interactions8 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
    <p><a className="link-opacity-10-hover" href="#!">Link hover opacity 10</a></p>
    <p><a className="link-opacity-25-hover" href="#!">Link hover opacity 25</a></p>
    <p><a className="link-opacity-50-hover" href="#!">Link hover opacity 50</a></p>
    <p><a className="link-opacity-75-hover" href="#!">Link hover opacity 75</a></p>
    <p className="mb-0"><a className="link-opacity-100-hover" href="#!">Link hover opacity 100</a></p>
// End Prism Code//`;
export const interactions9 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
    <p><a href="#!" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Primary link</a></p>
    <p><a href="#!" className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Secondary link</a></p>
    <p><a href="#!" className="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Success link</a></p>
    <p><a href="#!" className="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Danger link</a></p>
    <p><a href="#!" className="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Warning link</a></p>
    <p><a href="#!" className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Info link</a></p>
    <p><a href="#!" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Light link</a></p>
    <p><a href="#!" className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Dark link</a></p>
    <p><a href="#!" className="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover text-decoration-underline">Emphasis link</a></p>
// End Prism Code//`;





//Link&interactions
//Pagination

export const pagination1 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<nav aria-label="Page navigation">
    <Pagination className="pagination mb-0">
        <Pagination.Item  disabled className="disabled" href="#!">Previous</Pagination.Item>
        <Pagination.Item  href="#!">1</Pagination.Item>
        <Pagination.Item  href="#!">2</Pagination.Item>
        <Pagination.Item  href="#!">Next</Pagination.Item>
    </Pagination>
</nav>
// End Prism Code//`;

export const pagination2 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <nav aria-label="Page navigation">
    <Pagination className="pagination mb-0">
    <Pagination.Item className="page-item"  href="#!" aria-label="Previous">
    <span  ><i className="bi bi-caret-left"></i></span></Pagination.Item>
    <Pagination.Item  href="#!">1</Pagination.Item>
    <Pagination.Item  href="#!">2</Pagination.Item>
    <Pagination.Item  href="#!">3</Pagination.Item>
    <Pagination.Item  className="page-item" href="#!" aria-label="Next">
    <span  >
    <i className="bi bi-caret-right"></i></span>
    </Pagination.Item>
    </Pagination>
</nav>
// End Prism Code//`;

export const pagination3 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  <nav aria-label="...">
<Pagination  className="pagination pagination-sm mb-2 mb-sm-0">
    <Pagination.Item  active aria-current="page">
        1
    </Pagination.Item>
    <Pagination.Item  href="#!">2</Pagination.Item>
    <Pagination.Item  href="#!">3</Pagination.Item>
</Pagination>
</nav>
<nav aria-label="...">
<Pagination  className="pagination  mb-2 mb-sm-0">
    <Pagination.Item  active aria-current="page">
        1
    </Pagination.Item>
    <Pagination.Item  href="#!">2</Pagination.Item>
    <Pagination.Item  href="#!">3</Pagination.Item>
</Pagination>
</nav>
<nav aria-label="...">
<Pagination className="pagination pagination-lg mb-2 mb-sm-0">
    <Pagination.Item  className=" active" aria-current="page">
        1
    </Pagination.Item>
    <Pagination.Item  href="#!">2</Pagination.Item>
    <Pagination.Item  href="#!">3</Pagination.Item>
</Pagination>
</nav>
// End Prism Code//`;

export const pagination4 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<nav aria-label="Page navigation">
    <Pagination className="justify-content-center">
        <Pagination.Item disabled>Previous
        </Pagination.Item>
        <Pagination.Item href="#!">1</Pagination.Item>
        <Pagination.Item href="#!">2</Pagination.Item>
        <Pagination.Item href="#!">3</Pagination.Item>
        <Pagination.Item href="#!">Next
        </Pagination.Item>
    </Pagination>
</nav>
<nav aria-label="Page navigation">
    <Pagination className="justify-content-end mb-0">
        <Pagination.Item disabled >Previous
        </Pagination.Item>
        <Pagination.Item href="#!">1</Pagination.Item>
        <Pagination.Item href="#!">2</Pagination.Item>
        <Pagination.Item href="#!">3</Pagination.Item>
        <Pagination.Item href="#!">Next
        </Pagination.Item>
    </Pagination>
</nav>
// End Prism Code//`;

export const pagination5 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <nav aria-label="..." className="me-3">
    <Pagination className="pagination">
        <Pagination.Item disabled>Previous
        </Pagination.Item>
        <Pagination.Item href="#!">1</Pagination.Item>
        <Pagination.Item active aria-current="page" href="#!">2
        </Pagination.Item>
        <Pagination.Item href="#!">Next
        </Pagination.Item>
    </Pagination>
</nav>
<nav aria-label="...">
    <Pagination className="pagination">
        <Pagination.Item disabled>Previous
        </Pagination.Item>
        <Pagination.Item href="#!">1</Pagination.Item>
        <Pagination.Item active aria-current="page">2
        </Pagination.Item>
        <Pagination.Item href="#!">Next
        </Pagination.Item>
    </Pagination>
</nav>
// End Prism Code//`;

export const pagination6 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  <nav aria-label="Page navigation" className="pagination-style-1">
    <Pagination className="pagination mb-0">
        <Pagination.Item disabled href="#!">
            <i className="ri-arrow-left-s-line align-middle"></i>
        </Pagination.Item>
        <Pagination.Item href="#!">1</Pagination.Item>
        <Pagination.Item active href="#!">2</Pagination.Item>
        <Pagination.Item href="#!"><i className="bi bi-three-dots"></i>
        </Pagination.Item>
        <Pagination.Item href="#!">21</Pagination.Item>
        <Pagination.Item href="#!">
            <i className="ri-arrow-right-s-line align-middle"></i>
        </Pagination.Item>
    </Pagination>
</nav>
// End Prism Code//`;

export const pagination7 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  <nav aria-label="Page navigation" className="pagination-style-2">
    <Pagination className="mb-0 flex-wrap">
        <Pagination.Item disabled href="#!">Prev
        </Pagination.Item>
        <Pagination.Item  active href="#!">1</Pagination.Item>
        <Pagination.Item  href="#!">2</Pagination.Item>
        <Pagination.Item >
            <i className="bi bi-three-dots"></i>
        </Pagination.Item>
        <Pagination.Item  href="#!">17</Pagination.Item>
        <Pagination.Item  className='pagination-next' href="#!">
            next
        </Pagination.Item>
    </Pagination>
    </nav>
// End Prism Code//`;

export const pagination8 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <nav aria-label="Page navigation" className="pagination-style-3">
<Pagination className=" mb-0 flex-wrap">
    <Pagination.Item  disabled>Prev
    </Pagination.Item>
    <Pagination.Item  active href="#!">1</Pagination.Item>
    <Pagination.Item  href="#!">2</Pagination.Item>
    <Pagination.Item  href="#!">
        <i className="bi bi-three-dots"></i>
    </Pagination.Item>
    <Pagination.Item  href="#!">16</Pagination.Item>
    <Pagination.Item  className="pagination-next" href="#!">next </Pagination.Item>
</Pagination>
</nav>
// End Prism Code//`;

export const pagination9 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
   <nav aria-label="Page navigation" className="pagination-style-4">
    <Pagination className="mb-0 flex-wrap">
        <Pagination.Item  disabled href="#!">
            Prev
        </Pagination.Item>
        <Pagination.Item  active href="#!">1</Pagination.Item>
        <Pagination.Item  href="#!">2</Pagination.Item>
        <Pagination.Item  href="#!">
            <i className="bi bi-three-dots"></i>

        </Pagination.Item>
        <Pagination.Item  href="#!">16</Pagination.Item>
        <Pagination.Item  href="#!">17</Pagination.Item>
        <Pagination.Item  className="pagination-next" href="#!">
            next
        </Pagination.Item>
    </Pagination>
    </nav>
// End Prism Code//`;

//progress

export const progress1 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
    <ProgressBar variant="primary" now={0} className="progress mb-3" />
    <ProgressBar variant="primary" now={25} className="progress mb-3" />
    <ProgressBar variant="primary" now={50} className="progress mb-3" />
    <ProgressBar variant="primary" now={75} className="progress mb-3" />
    <ProgressBar variant="primary" now={100} className="progress mb-0" />
// End Prism Code//`;

export const progress2 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
    <ProgressBar variant='secondary' now={20} className="progress mb-3" />
    <ProgressBar variant='warning' now={40} className="progress mb-3" />
    <ProgressBar variant='info' now={60} className="progress mb-3" />
    <ProgressBar variant='success' now={80} className="progress mb-3" />
    <ProgressBar variant='danger' now={100} className="progress mb-0" />
// End Prism Code//`;

export const progress3 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
    <ProgressBar striped variant='primary' now={10} className="progress mb-3" />
    <ProgressBar striped variant='secondary' now={25} className="progress mb-3" />
    <ProgressBar striped variant='success' now={50} className="progress mb-3" />
    <ProgressBar striped variant='info' now={75} className="progress mb-3" />
    <ProgressBar striped variant='warning' now={100} className="progress mb-0" />
// End Prism Code//`;

export const progress4 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
    <ProgressBar variant='primary' now={10} className="progress progress-xs mb-3" />
    <ProgressBar variant='primary' now={25} className="progress progress-sm mb-3" />
    <ProgressBar variant='primary' now={50} className="progress  mb-3" />
    <ProgressBar variant='primary' now={75} className="progress progress-lg mb-3" />
    <ProgressBar variant='primary' now={100} className="progress progress-xl mb-0" />
// End Prism Code//`;

export const progress5 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
ProgressBar variant='primary' now={10} label={${10}%} className="progress mb-3" />
<ProgressBar variant='secondary' now={20} label={${20}%} className="progress mb-3" />
<ProgressBar variant='success' now={40} label={${40}%} className="progress mb-3" />
<ProgressBar variant='info' now={60} label={${60}%} className="progress mb-3" />
<ProgressBar variant='warning' now={80} label={${80}%} className="progress mb-0" />
// End Prism Code//`;

export const progress6 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
   {Multipleprogress.map((idx) => (
    <ProgressBar className={progress-stacked progress-{idx.size} mb-3} key={Math.random()}>
        <ProgressBar variant={idx.class1} now={idx.now1} key={1} />
        <ProgressBar variant={idx.class2} now={idx.now2} key={2} />
        <ProgressBar variant={idx.class3} now={idx.now3} key={3} />
    </ProgressBar>
))}
// End Prism Code//`;

export const progress7 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
    <ProgressBar variant='primary' className="progress mb-3" animated now={10} />
    <ProgressBar variant='secondary' className="progress mb-3" animated now={20} />
    <ProgressBar variant='success' className="progress mb-3" animated now={40} />
    <ProgressBar variant='info' className="progress mb-3" animated now={60} />
    <ProgressBar variant='warning' className="progress" animated now={80} />
// End Prism Code//`;

export const progress8 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
    <ProgressBar variant='primary-gradient' className="progress mb-3" animated now={10} />
    <ProgressBar variant='secondary-gradient' className="progress mb-3" animated now={20} />
    <ProgressBar variant='success-gradient' className="progress mb-3" animated now={40} />
    <ProgressBar variant='info-gradient' className="progress mb-3" animated now={60} />
    <ProgressBar variant='warning-gradient' className="progress" animated now={80} />
// End Prism Code//`;

export const progress9 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
    <ProgressBar variant='primary-gradient' className="progress mb-3 progress-animate" now={10} />
    <ProgressBar variant='secondary-gradient' className="progress mb-3 progress-animate" now={20} />
    <ProgressBar variant='success-gradient' className="progress mb-3 progress-animate" now={40} />
    <ProgressBar variant='info-gradient' className="progress mb-3 progress-animate" now={60} />
    <ProgressBar variant='warning-gradient' className="progress  progress-animate" now={80} />
// End Prism Code//`;

export const progress10 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="progress progress-sm progress-custom mb-5 progress-animate">
        <h6 className="progress-bar-title">Mobiles</h6>
        <ProgressBar variant="primary" className="w-100 custom-height1" now={50} />
    </div>
    <div className="progress progress-sm progress-custom mb-5 progress-animate">
        <h6 className="progress-bar-title bg-secondary">Watches</h6>
        <ProgressBar variant="secondary" className="w-100 custom-height1" now={60} />
    </div>
    <div className="progress progress-sm progress-custom progress-animate">
        <h6 className="progress-bar-title bg-success">Shirts</h6>
        <ProgressBar variant="success" className="w-100 custom-height1" now={70} />
    </div>
// End Prism Code//`;

export const progress11 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 {CustomProgress2data.map((idx) => (
    <div className="progress progress-bar progress-sm mb-4" key={Math.random()} >
    <div className={progress-item-1 bg-{idx.class}}></div>
    <div className={progress-item-2 bg-{idx.class2}}></div>
    <div className={progress-item-3 bg-{idx.class1}}></div>
    <ProgressBar variant={idx.class} now={idx.now} />
    </div>
    ))}
// End Prism Code//`;

export const progress12 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="progress progress-lg mb-5 custom-progress-3 progress-animate" role="progressbar">
    <div className="progress-bar bg-primary" style={{width: "50%"}}>
        <div className="progress-bar-value">50%</div>
    </div>
</div>
<div className="progress progress-lg mb-5 custom-progress-3 progress-animate"  role="progressbar">
    <div className="progress-bar bg-secondary" style={{width: "60%"}}>
        <div className="progress-bar-value secondary">60%</div>
    </div>
</div>
<div className="progress progress-lg custom-progress-3 progress-animate" role="progressbar" >
    <div className="progress-bar bg-success" style={{width: "70%"}}>
        <div className="progress-bar-value success">70%</div>
    </div>
</div>
// End Prism Code//`;

export const progress13 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
   <div className="progress progress-xl mb-3 progress-animate custom-progress-4" role="progressbar">
    <div className="progress-bar bg-primary-gradient" style={{width: "10%"}}></div>
    <div className="progress-bar-label">10%</div>
</div>
<div className="progress progress-xl mb-3 progress-animate custom-progress-4 secondary" role="progressbar" >
    <div className="progress-bar bg-secondary-gradient" style={{width: "20%"}}></div>
    <div className="progress-bar-label">20%</div>
</div>
<div className="progress progress-xl mb-3 progress-animate custom-progress-4 success" role="progressbar">
    <div className="progress-bar bg-success-gradient" style={{width: "40%"}}></div>
    <div className="progress-bar-label">40%</div>
</div>
<div className="progress progress-xl mb-3 progress-animate custom-progress-4 info" role="progressbar">
    <div className="progress-bar bg-info-gradient" style={{width: "60%"}}></div>
    <div className="progress-bar-label">60%</div>
</div>
<div className="progress progress-xl mb-3 progress-animate custom-progress-4 warning" role="progressbar">
    <div className="progress-bar bg-warning-gradient" style={{width: "80%"}}></div>
    <div className="progress-bar-label">80%</div>
</div>
<div className="progress progress-xl progress-animate custom-progress-4 danger" role="progressbar">
    <div className="progress-bar bg-danger-gradient" style={{width: "100%"}}></div>
    <div className="progress-bar-label text-fixed-white">100%</div>
</div>
// End Prism Code//`;

export const progress14 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
   <h6 className="fw-semibold mb-2">Project Dependencies</h6>
    <ProgressBar className="progress-stacked progress-xl mb-5" >
        <ProgressBar variant="primary" now={25} label={${25}%} key={1} />
        <ProgressBar variant="secondary" now={35} label={${35}%} key={2} />
        <ProgressBar variant="danger" now={40} label={${40}%} key={3} />
    </ProgressBar>
    <Row className="justify-content-center">
        <Col xl={5}>
            <div className="border p-3">
                <p className="fs-12 fw-semibold mb-0 text-muted">Html<span className="float-end fs-10 fw-normal">25%</span></p>
                <ProgressBar className="progress progress-xs mb-4 progress-animate" variant="primary" now={25} />
                <p className="fs-12 fw-semibold mb-0 text-muted">Css<span className="float-end fs-10 fw-normal">35%</span></p>
                <ProgressBar className="progress progress-xs mb-4 progress-animate" variant="secondary" now={35} />
                <p className="fs-12 fw-semibold mb-0 text-muted">Js<span className="float-end fs-10 fw-normal">40%</span></p>
                <ProgressBar className="progress progress-xs progress-animate" variant="danger" now={40} />
            </div>
        </Col>
    </Row>
// End Prism Code//`;


//

// export const pagination15 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
//  <div className="box-body flex flex-wrap justify-between gap-2"><nav aria-label="...">
//  <ul className="ti-pagination pagination-sm mb-0"> 
//  <li className="page-item " aria-current="page"> 
//  <span className="page-link  active px-3 py-[0.375rem]">1</span> 
//  </li> 
//  <li className="page-item">
//  <Link className="page-link px-3 py-[0.375rem]" href="#">2</Link>
//  </li> 
//  <li className="page-item">
//  <Link className="page-link px-3 py-[0.375rem]" href="#">3</Link>
//  </li> 
//  </ul>
//  </nav>
//  <nav aria-label="...">
//   <ul className="ti-pagination mb-0">
//    <li className="page-item " aria-current="page"> 
//    <span className="page-link  active px-3 py-[0.375rem]">1</span> </li>
//     <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#">2</Link></li>
//      <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#">3</Link></li>
//       </ul>
//       </nav>
//       <nav aria-label="...">
//        <ul className="ti-pagination pagination-lg mb-0">
//         <li className="page-item " aria-current="page"> <span className="page-link active px-3 py-[0.375rem]">1</span> </li>
//          <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#">2</Link></li> 
//          <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#">3</Link></li> <
//          /ul>
// </nav></div>
// // End Prism Code//`;

// export const pagination16 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
//   <div className="box-body flex flex-wrap">
// <nav aria-label="..." className="me-4"><ul className="ti-pagination">
// <li className="page-item disabled"><Link href="#" className="page-link px-3 py-[0.375rem]">Previous</Link></li>
// <li className="page-item">
// <Link className="page-link px-3 py-[0.375rem]" href="#">1</Link></li>
// <li className="page-item " aria-current="page"><Link className="page-link active px-3 py-[0.375rem]" href="#">2</Link></li>
// <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#">Next</Link></li>
// </ul>
// </nav>
// <nav aria-label="...">
// <ul className="ti-pagination">
// <li className="page-item disabled">
// <span className="page-link px-3 py-[0.375rem]">Previous</span></li>
// <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#">1</Link></li>
// <li className="page-item " aria-current="page"><span className="page-link px-3 active py-[0.375rem]">2</span></li>
// <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#">Next</Link></li>
// </ul>
// </nav>
// </div>
// // End Prism Code//`;

//Spinners

export const spinner1 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="spinner-border  text-primary" role="status">
    <span className="visually-hidden">Loading...</span>
</div>
// End Prism Code//`;

export const spinner2 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  <div className="spinner-grow text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
  </div>
// End Prism Code//`;

export const spinner3 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  {Colorspinner.map((idx) => (
      <div className={spinner-grow me-1 text-{idx.color}} role="status" key={Math.random()}>
          <span className="visually-hidden">Loading...</span>
      </div>
  ))}
// End Prism Code//`;

export const spinner4 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 {Colorspinner.map((idx) => (
      <div className={spinner-grow me-1 text-{idx.color}} role="status" key={Math.random()}>
          <span className="visually-hidden">Loading...</span>
      </div>
  ))}
// End Prism Code//`;

export const spinner5 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="d-flex justify-content-center mb-4">
      <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
      </div>
  </div>
  <div className="d-flex align-items-center">
      <strong>Loading...</strong>
      <div className="spinner-border text-primary ms-auto" role="status"  ></div>
  </div>
// End Prism Code//`;

export const spinner6 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="clearfix mb-4">
    <div className="spinner-border text-primary float-end" role="status">
        <span className="visually-hidden">Loading...</span>
    </div>
</div>
<div className="clearfix">
    <div className="spinner-border text-primary float-start" role="status">
        <span className="visually-hidden">Loading...</span>
    </div>
</div>
// End Prism Code//`;

export const spinner7 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  <div className="text-center">
  <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
  </div>
</div>
// End Prism Code//`;

export const spinner8 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="spinner-border text-primary spinner-border-sm me-4" role="status">
    <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-primary spinner-grow-sm me-4" role="status">
    <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-border text-primary me-4" style={{ width: "3rem", height: "3rem" }}
    role="status">
    <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
    <span className="visually-hidden">Loading...</span>
</div>
// End Prism Code//`;

export const spinner9 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="spinner-border text-primary m-5" role="status">
      <span className="visually-hidden">Loading...</span>
  </div>
// End Prism Code//`;

export const spinner10 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="btn-list">
<Button variant='primary-light' className="btn" type="button" disabled>
<span className="spinner-border spinner-border-sm align-middle" role="status"
     ></span>
<span className="visually-hidden"> Loading...</span>
</Button>
<Button variant='primary-light' className="btn" type="button" disabled>
<span className="spinner-border spinner-border-sm align-middle" role="status"
     ></span>
Loading...
</Button>
<Button variant='primary-light' className="btn" type="button" disabled>
<span className="spinner-grow spinner-grow-sm align-middle" role="status"
     ></span>
<span className="visually-hidden"> Loading...</span>
</Button>
{Buttonspinner.map((idx) => (
<Button variant={idx.color} className="" type="button" disabled key={Math.random()}>
    <span className="spinner-grow spinner-grow-sm align-middle" role="status"
         ></span>
    Loading...
</Button>
))}
</div>
// End Prism Code//`;

//Toasts

export const toast1 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<Button type="button" className="btn btn-primary btn-wave" id="liveToastBtn" onClick={() => setShow(true)}>Show live
toast</Button>
<ToastContainer className="toast-container position-fixed top-0 end-0 p-3">
<Toast id="liveToast" className="toast fade show" role="alert" aria-live="assertive" aria-atomic="true" onClose={() => setShow(false)} show={show} delay={3000} autohide>
    <Toast.Header className="text-default">
        <img className="bd-placeholder-img rounded me-2" src="../../../../assets/images/brand-logos/fav.ico" alt="..." />
        <strong className="me-auto">Mamix</strong> <small>11 mins ago</small>
    </Toast.Header>
    <Toast.Body className=""> Hello, world! This is a toast message. </Toast.Body>
</Toast>
</ToastContainer>
// End Prism Code//`;

export const toast2 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<Toast className="toast align-items-center text-bg-primary border-0 fade show mb-4" show={showC}>
<div className="d-flex">
<Toast.Body className=" text-fixed-white" >Hello, world! This is Primary toast message. </Toast.Body>
<CloseButton aria-label="Close"  className="btn-close btn-close-white me-2 m-auto" onClick={toggleShowC}></CloseButton>
</div></Toast>

<Toast className="toast align-items-center text-bg-secondary border-0 fade show mb-4" show={showD}>
<div className="d-flex">
<Toast.Body className=" text-fixed-white" >Hello, world! This is Secondary toast message. </Toast.Body>
<CloseButton aria-label="Close"  className="btn-close btn-close-white me-2 m-auto" onClick={toggleShowD}></CloseButton>
</div></Toast>

<Toast className="toast align-items-center text-bg-success border-0 fade show mb-4" show={showE}>
<div className="d-flex">
<Toast.Body className=" text-fixed-white" >Hello, world! This is Success toast message. </Toast.Body>
<CloseButton aria-label="Close"  className="btn-close btn-close-white me-2 m-auto" onClick={toggleShowE}></CloseButton>
</div></Toast>

<Toast className="toast align-items-center text-bg-info border-0 fade show mb-4" show={showF}>
<div className="d-flex">
<Toast.Body className=" text-fixed-white" >Hello, world! This is info toast message. </Toast.Body>
<CloseButton aria-label="Close"  className="btn-close btn-close-white me-2 m-auto" onClick={toggleShowF}></CloseButton>
</div></Toast>
// End Prism Code//`;

export const toast3 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<Toast show={showA} onClose={toggleShowA} className="toast show"
role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
<Toast.Header className="text-default">
    <img src="../../../assets/images/brand-logos/fav.ico" alt="" className="me-2" height="18" />
    <strong className="me-auto">Mamix</strong>
    <small>11 mins ago</small>
</Toast.Header>
<Toast.Body> Hello, world! This is a toast message.</Toast.Body>
</Toast>
// End Prism Code//`;

export const toast4 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  <ToastContainer className="toast-container position-static">
<Toast show={showG} onClose={toggleShowG} className="toast fade show">
<Toast.Header className="toast-header text-default">
    <img src="../../../assets/images/brand-logos/fav.ico" alt="" className="me-2" height="18" />
    <strong className="me-auto">Mamix</strong>
    <small>just now</small>
</Toast.Header>
<Toast.Body> See? Just like this.</Toast.Body>
</Toast>
<Toast show={showH} onClose={toggleShowH} className="toast fade show">
<Toast.Header className="toast-header text-default">
    <img src="../../../assets/images/brand-logos/fav.ico" alt="" className="me-2" height="18" />
    <strong className="me-auto">Mamix</strong>
    <small>2 seconds ago</small>
</Toast.Header>
<Toast.Body> Heads up, toasts will stack automatically</Toast.Body>
</Toast>
</ToastContainer>
// End Prism Code//`;

export const toast5 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <Toast show={showB} onClose={toggleShowB} className="toast show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
<Toast.Header className="text-default">
    <img src="../../../assets/images/brand-logos/fav.ico" alt="" className="me-2" height="18" />
    <strong className="me-auto">Mamix</strong>
    <small>11 mins ago</small>
</Toast.Header>
<Toast.Body> Hello, world! This is a toast message.</Toast.Body>
</Toast>
// End Prism Code//`;

export const toast6 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  <Toast role="alert" className="toast align-items-center fade show mb-3" show={showI}>
<div className="d-flex">
    <Toast.Body className=" text-dark" > Hello, world! This is a toast message.</Toast.Body>
    <CloseButton type="button" className="btn-close me-2 m-auto" onClick={toggleShowI}>
    </CloseButton>
</div>
</Toast>
<div>
<span className="my-4 text-muted">
    Alternatively, you can also add additional controls and components to
    toasts.
</span>
</div>
<Toast className="toast fade show mt-2" role="alert" aria-live="assertive" show={showJ}>
<Toast.Body>
    Hello, world! This is a toast message.
    <div className="mt-2 pt-2 border-top">
        <Button type="button" className="btn btn-primary btn-sm btn-wave me-2">Take
            action</Button>
        <Button type="button" className="btn btn-secondary btn-sm btn-wave" onClick={toggleShowJ}>Close</Button>
    </div>
</Toast.Body>
</Toast>
// End Prism Code//`;
export const toast7 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
    <div className="btn-list">
<Button type="button" variant='primary-light' className="btn me-2 btn-wave" id="primaryToastBtn" onClick={() => setShow1(true)}>Primary</Button>
<Button variant='secondary-light' type="button" className="btn me-2 btn-wave" id="secondaryToastBtn" onClick={() => setShow2(true)}>secondary</Button>
<Button variant='warning-light' type="button" className="btn  me-2 btn-wave" id="warningToastBtn" onClick={() => setShow3(true)}>warning</Button>
<Button variant='info-light' type="button" className="btn  me-2 btn-wave" id="infoToastBtn" onClick={() => setShow4(true)}>info</Button>
<Button variant='success-light' type="button" className="btn  me-2 btn-wave" id="successToastBtn" onClick={() => setShow5(true)}>success</Button>
<Button variant='danger-light' type="button" className="btn me-2 btn-wave" id="dangerToastBtn" onClick={() => setShow6(true)}>danger</Button>
</div>
<ToastContainer className="toast-container position-fixed top-0 end-0 p-3">
<Toast id="primaryToast" bg="primary-transparent" className="toast colored-toast"
onClose={() => setShow1(false)} show={show1} delay={3000} autohide
aria-atomic="true">
<Toast.Header className="toast-header bg-primary text-fixed-white">
    <img className="bd-placeholder-img rounded me-2" src="../../../assets/images/brand-logos/toggle-dark.png" alt="..." />
    <strong className="me-auto">Mamix</strong>
</Toast.Header>
<Toast.Body>
    Your,toast message here.
</Toast.Body>
</Toast>
<Toast id="secondaryToast" className="toast colored-toast bg-secondary-transparent" role="alert" aria-live="assertive"
aria-atomic="true" onClose={() => setShow2(false)} show={show2} delay={3000} autohide>
<Toast.Header className="toast-header bg-secondary text-fixed-white">
    <img className="bd-placeholder-img rounded me-2" src="../../../assets/images/brand-logos/toggle-dark.png" alt="..." />
    <strong className="me-auto">Mamix</strong>
</Toast.Header>
<Toast.Body>
    Your,toast message here.
</Toast.Body>
</Toast>
<Toast id="warningToast" className="toast colored-toast bg-warning-transparent" role="alert" aria-live="assertive"
onClose={() => setShow3(false)} show={show3} delay={3000} autohide
aria-atomic="true">
<Toast.Header className="toast-header bg-warning text-fixed-white">
    <img className="bd-placeholder-img rounded me-2" src="../../../assets/images/brand-logos/toggle-dark.png" alt="..." />
    <strong className="me-auto">Mamix</strong>
</Toast.Header>
<Toast.Body>
    Your,toast message here.
</Toast.Body>
</Toast>
<Toast id="infoToast" className="toast colored-toast bg-info-transparent" role="alert" aria-live="assertive"
onClose={() => setShow4(false)} show={show4} delay={3000} autohide
aria-atomic="true">
<Toast.Header className="bg-info text-fixed-white">
    <img className="bd-placeholder-img rounded me-2" src="../../../assets/images/brand-logos/toggle-dark.png" alt="..." />
    <strong className="me-auto">Mamix</strong>
</Toast.Header>
<Toast.Body>
    Your,toast message here.
</Toast.Body>
</Toast>
<Toast id="successToast" className="toast colored-toast bg-success-transparent" role="alert" aria-live="assertive"
onClose={() => setShow5(false)} show={show5} delay={3000} autohide
aria-atomic="true">
<Toast.Header className="bg-success text-fixed-white">
    <img className="bd-placeholder-img rounded me-2" src="../../../assets/images/brand-logos/toggle-dark.png" alt="..." />
    <strong className="me-auto">Mamix</strong>
</Toast.Header>
<Toast.Body>
    Your,toast message here.
</Toast.Body>
</Toast>
<Toast id="dangerToast" className="toast colored-toast bg-danger-transparent" role="alert" aria-live="assertive"
onClose={() => setShow6(false)} show={show6} delay={3000} autohide
aria-atomic="true">
<Toast.Header className="toast-header bg-danger text-fixed-white">
    <img className="bd-placeholder-img rounded me-2" src="../../../assets/images/brand-logos/toggle-dark.png" alt="..." />
    <strong className="me-auto">Mamix</strong>
</Toast.Header>
<Toast.Body className="toast-body">
    Your,toast message here.
</Toast.Body>
</Toast>
</ToastContainer>
// End Prism Code//`;
export const toast8 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
     <div className="btn-list">
<Button variant='primary' type="button" className="btn btn-primary me-2 btn-wave" id="solidprimaryToastBtn" onClick={() => setShow7(true)}>Primary</Button>
<Button variant='secondary' type="button" className="btn btn-secondary me-2 btn-wave" id="solidsecondaryToastBtn" onClick={() => setShow8(true)}>secondary</Button>
<Button variant='warning' type="button" className="btn btn-warning me-2 btn-wave" id="solidwarningToastBtn" onClick={() => setShow9(true)}>warning</Button>
<Button variant='info' type="button" className="btn btn-info me-2 btn-wave" id="solidinfoToastBtn" onClick={() => setShow10(true)}>info</Button>
<Button variant='success' type="button" className="btn btn-success me-2 btn-wave" id="solidsuccessToastBtn" onClick={() => setShow11(true)}>success</Button>
<Button variant='danger' type="button" className="btn btn-danger me-2 btn-wave" id="soliddangerToastBtn" onClick={() => setShow12(true)}>danger</Button>
</div>
<ToastContainer className="toast-container position-fixed top-0 end-0 p-3">
<Toast id="solid-primaryToast" className="toast colored-toast bg-primary text-fixed-white"
onClose={() => setShow7(false)} show={show7} delay={3000} autohide>
<Toast.Header className="toast-header bg-primary text-fixed-white">
    <img className="bd-placeholder-img rounded me-2" src="../../../assets/images/brand-logos/toggle-dark.png" alt="..." />
    <strong className="me-auto">Mamix</strong>
</Toast.Header>
<Toast.Body>
    Your,toast message here.
</Toast.Body>
</Toast>
<Toast id="solid-secondaryToast" className="toast colored-toast bg-secondary text-fixed-white"
onClose={() => setShow8(false)} show={show8} delay={3000} autohide
aria-atomic="true">
<Toast.Header className="toast-header bg-secondary text-fixed-white">
    <img className="bd-placeholder-img rounded me-2" src="../../../assets/images/brand-logos/toggle-dark.png" alt="..." />
    <strong className="me-auto">Mamix</strong>
</Toast.Header>
<Toast.Body>
    Your,toast message here.
</Toast.Body>
</Toast>
<Toast id="solid-warningToast" className="toast colored-toast bg-warning text-fixed-white"
onClose={() => setShow9(false)} show={show9} delay={3000} autohide>
<Toast.Header className="toast-header bg-warning text-fixed-white">
    <img className="bd-placeholder-img rounded me-2" src="../../../assets/images/brand-logos/toggle-dark.png" alt="..." />
    <strong className="me-auto">Mamix</strong>
</Toast.Header>
<Toast.Body>
    Your,toast message here.
</Toast.Body>
</Toast>
<Toast id="solid-infoToast" className="toast colored-toast bg-info text-fixed-white"
onClose={() => setShow10(false)} show={show10} delay={3000} autohide>
<Toast.Header className="toast-header bg-info text-fixed-white">
    <img className="bd-placeholder-img rounded me-2" src="../../../assets/images/brand-logos/toggle-dark.png" alt="..." />
    <strong className="me-auto">Mamix</strong>
</Toast.Header>
<Toast.Body>
    Your,toast message here.
</Toast.Body>
</Toast>
<Toast id="solid-successToast" className="toast colored-toast bg-success text-fixed-white"
onClose={() => setShow11(false)} show={show11} delay={3000} autohide>
<Toast.Header className="toast-header bg-success text-fixed-white">
    <img className="bd-placeholder-img rounded me-2" src="../../../assets/images/brand-logos/toggle-dark.png" alt="..." />
    <strong className="me-auto">Mamix</strong>
</Toast.Header>
<Toast.Body>
    Your,toast message here.
</Toast.Body>
</Toast>
<Toast id="solid-dangerToast" className="toast colored-toast bg-danger text-fixed-white"
onClose={() => setShow12(false)} show={show12} delay={3000} autohide>
<Toast.Header className="toast-header bg-danger text-fixed-white">
    <img className="bd-placeholder-img rounded me-2" src="../../../assets/images/brand-logos/toggle-dark.png" alt="..." />
    <strong className="me-auto">Mamix</strong>
</Toast.Header>
<Toast.Body>
    Your,toast message here.
</Toast.Body>
</Toast>
</ToastContainer>
// End Prism Code//`;
export const toast9 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="btn-list">
    <Button variant='outline-primary' type="button" onClick={() => setShow13(true)} className="btn  me-2 btn-wave" id="topleftToastBtn">Top Left</Button>
</div>
<ToastContainer className="toast-container position-fixed top-0 start-0 p-3">
    <Toast id="topleft-Toast" className="toast colored-toast bg-primary-transparent text-primary"
        onClose={() => setShow13(false)} show={show13} delay={3000} autohide>
        <Toast.Header className="toast-header bg-primary text-fixed-white">
            <img className="bd-placeholder-img rounded me-2" src="../../../assets/images/brand-logos/toggle-dark.png" alt="..." />
            <strong className="me-auto">Mamix</strong>
            <button type="button" className="btn-close" data-bs-dismiss="toast"
                aria-label="Close"></button>
        </Toast.Header>
        <Toast.Body className="toast-body">
            Your,toast message here.
        </Toast.Body>
    </Toast>
</ToastContainer>
// End Prism Code//`;
export const toast10 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
   <div className="bd-example bg-light bd-example-toasts d-flex p-0">
<div aria-live="polite" aria-atomic="true"
className="d-flex justify-content-center align-items-center w-100">
<Toast show={showK} onClose={toggleShowK}  className="toast fade show shadow-lg" role="alert" aria-live="assertive"
        aria-atomic="true">
<Toast.Header className="text-default">
<img className="bd-placeholder-img rounded me-2" src="../../../assets/images/brand-logos/toggle-dark.png" alt="..." />
    <strong className="me-auto">Mamix</strong>
    <small>11 mins ago</small>
</Toast.Header>
<Toast.Body> Hello, world! This is a toast message.</Toast.Body>
</Toast>
</div>
</div>
// End Prism Code//`;


//Tooltip

export const tooltip1 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="btn-list">
{Tooltipdirtooltip.map((idx: any) => (
<OverlayTrigger placement={idx.text} overlay={<Tooltip>Tooltip on {idx.text} </Tooltip>} key={Math.random()}>
    <Button type="button" className="btn btn-primary btn-wave">
        Tooltip on {idx.text}
    </Button>
</OverlayTrigger>
))}
</div>
// End Prism Code//`;

export const tooltip2 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
   <div className="btn-list">
<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-primary'>Primary Tooltip </Tooltip>}>
    <Button type="button" variant='primary' className="btn  btn-wave">
        Primary Tooltip
    </Button>
</OverlayTrigger>
<OverlayTrigger placement="right" overlay={<Tooltip className='tooltip-secondary'>Secondary Tooltip </Tooltip>}>
    <Button type="button" variant='secondary' className="btn  btn-wave">
        Secondary Tooltip
    </Button>
</OverlayTrigger>
<OverlayTrigger placement="bottom" overlay={<Tooltip className='tooltip-warning'>Warning Tooltip </Tooltip>}>
    <Button type="button" variant='warning' className="btn  btn-wave">
        Warning Tooltip
    </Button>
</OverlayTrigger>

<OverlayTrigger placement="bottom" overlay={<Tooltip className='tooltip-info'>Info Tooltip </Tooltip>}>
    <Button type="button" variant='info' className="btn  btn-wave">
        Info Tooltip
    </Button>
</OverlayTrigger>
<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-success'>Success Tooltip </Tooltip>}>
    <Button type="button" variant='success' className="btn  btn-wave">
        Success Tooltip
    </Button>
</OverlayTrigger>
<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-danger'>Danger Tooltip </Tooltip>}>
    <Button type="button" variant='danger' className="btn  btn-wave">
        Danger Tooltip
    </Button>
</OverlayTrigger>
<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-light'>Light Tooltip </Tooltip>}>
    <Button type="button" variant='light' className="btn  btn-wave">
        Light Tooltip
    </Button>
</OverlayTrigger>
<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-dark'>Dark Tooltip </Tooltip>}>
    <Button type="button" variant='dark' className="btn  btn-wave">
        Dark Tooltip
    </Button>
</OverlayTrigger>
 </div>
// End Prism Code//`;

export const tooltip3 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <p className="text-muted mb-0">
Hover on the link to view the
<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-primary'>Link Tooltip </Tooltip>}>
    <Link href="#!" className="text-primary ms-1 d-inline-flex">Tooltip</Link>
</OverlayTrigger>
</p>
// End Prism Code//`;

export const tooltip4 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  {SVGtooltip.map((idx) => (
<OverlayTrigger key={Math.random()} placement="top" overlay={<Tooltip className={tooltip-{idx.color}}>{idx.text} </Tooltip>}>
    <a href="#!" className={me-3 svg-{idx.color}} >
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <path d="M0 0h24v24H0V0z" fill="none" /><path
                d={idx.class} /></svg>
    </a>
</OverlayTrigger>
))}
// End Prism Code//`;

export const tooltip5 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Disabled tooltip</Tooltip>}>
<span className="d-inline-block">
    <Button disabled style={{ pointerEvents: "none" }}>
        Disabled button
    </Button>
</span>
</OverlayTrigger>
// End Prism Code//`;

export const tooltip6 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-primary">Alex Carey</Tooltip>}>
<Link href="#!"
    className="avatar avatar-md me-2 online avatar-rounded">
    <img src="../../../assets/images/faces/12.jpg" alt="img" />
</Link>
</OverlayTrigger>

<OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-primary">Marina Kai</Tooltip>}>
<Link href="#!"
    className="avatar avatar-lg me-2 online avatar-rounded">
    <img src="../../../assets/images/faces/3.jpg" alt="img" />
</Link>
</OverlayTrigger>
<OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-primary">Tim Cook</Tooltip>}>
<Link href="#!"
    className="avatar avatar-xl me-2 online avatar-rounded">
    <img src="../../../assets/images/faces/15.jpg" alt="img" />
</Link>
</OverlayTrigger>
// End Prism Code//`;



//dropdowns

export const dropdown1 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="btn-list d-flex align-items-center flex-wrap">
<Dropdown className="dropdown">
    <Dropdown.Toggle variant='' className="btn btn-primary dropdown-toggle" type="button"
        id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown button
    </Dropdown.Toggle>
    <Dropdown.Menu as="ul" className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
        <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
        <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
<Dropdown className="dropdown">
    <Dropdown.Toggle className="btn btn-secondary dropdown-toggle" href="#!" role="button"
        id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown link
    </Dropdown.Toggle>
    <Dropdown.Menu as="ul" className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
        <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
        <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
</div>
// End Prism Code//`;

export const dropdown2 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="btn-list">
{SingleButtons.map((idx) => (
    <div className="btn-group" key={Math.random()}>
        <Dropdown>
            <Dropdown.Toggle type="button" variant={idx.class} className="btn"
                data-bs-toggle="dropdown" aria-expanded="false">
                Action
            </Dropdown.Toggle>
            <Dropdown.Menu as="ul">
                <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
))}
</div>
// End Prism Code//`;

export const dropdown3 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="btn-list">
{SingleButtons.map((idx) => (
    <div className="btn-group" key={Math.random()}>
        <Dropdown>
            <Dropdown.Toggle variant={idx.class} type="button" className="btn dropdown-toggle rounded-pill"
                data-bs-toggle="dropdown" aria-expanded="false">
                Action
            </Dropdown.Toggle>
            <Dropdown.Menu as="ul">
                <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
))}
</div>
// End Prism Code//`;

export const dropdown4 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  <div className="btn-list">
{OutlineButtons.map((idx) => (
    <div className="btn-group me-0" key={Math.random()}>
        <Dropdown>
            <Dropdown.Toggle variant={idx.class} type="button" className="btn  dropdown-toggle"
                data-bs-toggle="dropdown" aria-expanded="false">
                Action
            </Dropdown.Toggle>
            <Dropdown.Menu as="ul">
                <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
))}
</div>
// End Prism Code//`;

export const dropdown5 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  <div className="btn-list">
{OutlineButtons.map((idx) => (
<div className="btn-group me-0" key={Math.random()}>
<Dropdown>
    <Dropdown.Toggle variant={idx.class} type="button" className="btn dropdown-toggle rounded-pill"
        data-bs-toggle="dropdown" aria-expanded="false">
        Action
    </Dropdown.Toggle>
    <Dropdown.Menu as="ul">
        <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
        <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
        <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
        <Dropdown.Divider className="dropdown-divider" />
        <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
</div>
))}
</div>
// End Prism Code//`;

export const dropdown6 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <ShowCode title="Split buttons" customCardClass="custom-card" customCardBodyClass="" code={dropdown6}>
{SplitButtonsdata.map((idx) => (
    <SplitButton key={Math.random()} className='me-2 my-1'
        variant={idx.class}
        title="Action"
    >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3" active>
                Active Item
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </SplitButton>
))}
// End Prism Code//`;

export const dropdown7 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="btn-group my-1 me-2">
<Dropdown>
<Dropdown.Toggle variant='' className="btn btn-primary btn-lg dropdown-toggle" type="button"
    data-bs-toggle="dropdown" aria-expanded="false">
    Large button
</Dropdown.Toggle>
<Dropdown.Menu as="ul">
    <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
    <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
    <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
    <Dropdown.Divider className="dropdown-divider" />
    <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
</div>
<div className="btn-group my-1 me-2">
<Dropdown as={ButtonGroup}>
<Button variant="light">Large split button</Button>
<Dropdown.Toggle split variant="light" id="dropdown-split-basic" />
<Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    <Dropdown.Divider className="dropdown-divider" />
    <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
</div>
<div className="btn-group my-1 me-2">
<Dropdown>
<Dropdown.Toggle size="sm" variant='' className="btn btn-primary dropdown-toggle" type="button"
    data-bs-toggle="dropdown" aria-expanded="false">
    Small button
</Dropdown.Toggle>
<Dropdown.Menu as="ul">
    <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
    <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
    <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
    <Dropdown.Divider className="dropdown-divider" />
    <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
</div>
<div className="btn-group my-1 me-2">
<Dropdown as={ButtonGroup}>
<Button size='sm' variant="light">Small split button</Button>
<Dropdown.Toggle split variant="light" id="dropdown-split-basic" />
<Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    <Dropdown.Divider className="dropdown-divider" />
    <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
</div>
// End Prism Code//`;

export const dropdown8 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  <Dropdown drop="up" className="btn-group dropup my-1 me-2">
<Dropdown.Toggle variant='' type="button" className="btn btn-primary dropdown-toggle"
    data-bs-toggle="dropdown" aria-expanded="false">
    Dropup
</Dropdown.Toggle>
<Dropdown.Menu as="ul">
    <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
    <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
    <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
    <Dropdown.Divider className="dropdown-divider" />
    <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
<Dropdown drop="up" className="btn-group dropup my-1">
<Button variant='' type="button" className="btn btn-info">
    Split dropup
</Button>
<Dropdown.Toggle variant='' type="button"
    className="btn btn-info dropdown-toggle dropdown-toggle-split"
    data-bs-toggle="dropdown" aria-expanded="false">
    <span className="visually-hidden">Toggle Dropdown</span>
</Dropdown.Toggle>
<Dropdown.Menu as="ul">
    <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
    <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
    <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
    <Dropdown.Divider className="dropdown-divider" />
    <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
// End Prism Code//`;

export const dropdown9 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  <Dropdown className="btn-group dropend my-1 me-2" drop="end">
    <Dropdown.Toggle variant='' type="button" className="btn btn-primary dropdown-toggle"
        data-bs-toggle="dropdown" aria-expanded="false">
        Dropright
    </Dropdown.Toggle>
    <Dropdown.Menu as="ul">
        <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
        <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
        <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
        <Dropdown.Divider className="dropdown-divider" />
        <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
<Dropdown drop="end" className="btn-group dropend my-1">
    <Button variant='' type="button" className="btn btn-info">
        Split dropend
    </Button>
    <Dropdown.Toggle variant='' type="button"
        className="btn btn-info dropdown-toggle dropdown-toggle-split"
        data-bs-toggle="dropdown" aria-expanded="false">
        <span className="visually-hidden">Toggle Dropright</span>
    </Dropdown.Toggle>
    <Dropdown.Menu as="ul">
        <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
        <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
        <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
        <Dropdown.Divider className="dropdown-divider" />
        <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
// End Prism Code//`;

export const dropdown10 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <Dropdown>
<Dropdown.Toggle variant='' type="button" className="btn btn-primary dropdown-toggle"
    data-bs-toggle="dropdown" aria-expanded="false">
    Dropstart
</Dropdown.Toggle>
<Dropdown.Menu as="ul">
    <Dropdown.Item as="li" href="#!">Regular link</Dropdown.Item>
    <Dropdown.Item className="dropdown-item active" href="#!" aria-current="true">Active
        link
    </Dropdown.Item>
    <Dropdown.Item as="li" href="#!">Another link</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
// End Prism Code//`;

export const dropdown11 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  <Dropdown className="btn-group dropstart my-1 me-2" drop="start">
<Dropdown.Toggle variant='' type="button" className="btn btn-primary dropdown-toggle"
    data-bs-toggle="dropdown" aria-expanded="false">
    Dropstart
</Dropdown.Toggle>
<Dropdown.Menu as="ul">
    <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
    <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
    <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
    <Dropdown.Divider className="dropdown-divider" />
    <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
<div className="btn-group">
<Dropdown className="btn-group dropstart my-1" role="group" drop="start">
    <Dropdown.Toggle variant='' type="button"
        className="btn btn-info dropdown-toggle dropdown-toggle-split"
        data-bs-toggle="dropdown" aria-expanded="false">
        <span className="visually-hidden">Toggle Dropstart</span>
    </Dropdown.Toggle>
    <Dropdown.Menu as="ul">
        <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
        <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
        <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
        <Dropdown.Divider className="dropdown-divider" />
        <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
<Button variant='' type="button" className="btn btn-info my-1">
    Split dropstart
</Button>
</div>
// End Prism Code//`;

export const dropdown12 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<Dropdown>
<Dropdown.Toggle variant='' type="button" className="btn btn-primary dropdown-toggle"
    data-bs-toggle="dropdown" aria-expanded="false">
    Dropstart
</Dropdown.Toggle>
<Dropdown.Menu as="ul">
    <Dropdown.Item as="li" href="#!">Regular link</Dropdown.Item>
    <Dropdown.Item className="dropdown-item disabled" href="#!" aria-current="true">Active
        link</Dropdown.Item>
    <Dropdown.Item as="li" href="#!">Another link</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
// End Prism Code//`;

export const dropdown13 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="btn-list">
{AutocloseButtons.map((idx) => (
    <div className="btn-group" key={Math.random()}>
        <Dropdown>
            <Dropdown.Toggle variant={idx.class} className="btn btn-primary dropdown-toggle" type="button"
                id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true"
                aria-expanded="false">
                {idx.text}
            </Dropdown.Toggle>
            <Dropdown.Menu as="ul" aria-labelledby="defaultDropdown">
                <Dropdown.Item as="li" href="#!">Menu item</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Menu item</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Menu item</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
))}
</div>
// End Prism Code//`;

export const dropdown14 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  <Dropdown>
<Dropdown.Toggle variant='' className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2"
data-bs-toggle="dropdown" aria-expanded="false">
Dropdown
</Dropdown.Toggle>
<Dropdown.Menu className="dropdown-menu">
<Form className="px-4 py-3">
    <div className="mb-3">
        <Form.Label htmlFor="exampleDropdownFormEmail1" className="form-label">Email
            address</Form.Label>
        <Form.Control type="email" className="form-control" id="exampleDropdownFormEmail1"
            placeholder="email@example.com" />
    </div>
    <div className="mb-3">
        <Form.Label htmlFor="exampleDropdownFormPassword1"
            className="form-label">Password</Form.Label>
        <Form.Control type="password" className="form-control"
            id="exampleDropdownFormPassword1" placeholder="Password" />
    </div>
    <div className="mb-3">
        <div className="form-check">
            <input type="checkbox" className="form-check-input" id="dropdownCheck" />
            <label className="form-check-label" htmlFor="dropdownCheck">
                Remember me
            </label>
        </div>
    </div>
    <Button variant='' type="submit" className="btn btn-primary">Sign in</Button>
</Form>
<div className="dropdown-divider"></div>
<Dropdown.Item as="li" href="#!">New around here? Sign up</Dropdown.Item>
<Dropdown.Item as="li" href="#!">Forgot password?</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
// End Prism Code//`;

export const dropdown15 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  <p className="card-title mb-3">Use <code>.dropdown-center</code> on the parent element.
                                </p>
<Dropdown className="dropdown-center">
    <Dropdown.Toggle variant='' className="btn btn-primary dropdown-toggle" type="button"
        id="dropdownCenterBtn" data-bs-toggle="dropdown" aria-expanded="false">
        Centered dropdown
    </Dropdown.Toggle>
    <Dropdown.Menu as="ul" aria-labelledby="dropdownCenterBtn">
        <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
        <Dropdown.Item as="li" href="#!">Action two</Dropdown.Item>
        <Dropdown.Item as="li" href="#!">Action three</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
// End Prism Code//`;

export const dropdown16 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <p className="card-title mb-3">Use <code>.dropup-center</code>
on the parent element.
</p>
<Dropdown className="dropup-center dropup" drop="up">
<Dropdown.Toggle variant='' className="btn btn-secondary dropdown-toggle" type="button"
    id="dropupCenterBtn" data-bs-toggle="dropdown" aria-expanded="false">
    Centered dropup
</Dropdown.Toggle>
<Dropdown.Menu as="ul" aria-labelledby="dropupCenterBtn">
    <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
    <Dropdown.Item as="li" href="#!">Action two</Dropdown.Item>
    <Dropdown.Item as="li" href="#!">Action three</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
// End Prism Code//`;

export const dropdown17 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<p className="card-title mb-3">You can use <code>&lt;a&gt;</code> or <code>&lt;button&gt;</code> as
dropdown items.</p>
<Dropdown className="dropdown">
<Dropdown.Toggle variant='' className="btn btn-info dropdown-toggle" type="button"
id="dropdownMenu1" data-bs-toggle="dropdown" aria-expanded="false">
Dropdown
</Dropdown.Toggle>
<Dropdown.Menu as="ul" aria-labelledby="dropdownMenu1">
<Dropdown.Item>Action</Dropdown.Item>
<Dropdown.Item>Another action
</Dropdown.Item>
<Dropdown.Item>Something else
here
</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
// End Prism Code//`;

export const dropdown18 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  <p className="card-title mb-3">Use <code>data-bs-offset</code> or <code>data-bs-reference</code> to change
the location of the dropdown.</p>
<div className="d-flex align-items-center flex-wrap">
<Dropdown className="dropdown me-1 mt-1">
<Dropdown.Toggle variant='' type="button" className="btn btn-primary dropdown-toggle"
    id="dropdownMenuOffset" data-bs-toggle="dropdown" aria-expanded="false"
    data-bs-offset="10,20">
    Offset
</Dropdown.Toggle>
<Dropdown.Menu as="ul" aria-labelledby="dropdownMenuOffset">
    <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
    <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
    <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>

<Dropdown drop="up" className="btn-group dropup my-1">
<Button variant='' type="button" className="btn btn-info">
Reference
</Button>
<Dropdown.Toggle variant='' type="button"
    className="btn btn-info dropdown-toggle dropdown-toggle-split"
    data-bs-toggle="dropdown" aria-expanded="false">
    <span className="visually-hidden">Reference</span>
</Dropdown.Toggle>
<Dropdown.Menu as="ul">
    <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
    <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
    <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
    <Dropdown.Divider className="dropdown-divider" />
    <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
</div>
// End Prism Code//`;

export const dropdown19 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="btn-list">
{AlignmentButtons.map((idx:any) => (
<div className="btn-group" key={Math.random()}>
<Dropdown drop={idx.dir}>
    <Dropdown.Toggle variant={idx.class} className="btn btn-primary dropdown-toggle mb-0" type="button"
        id="dropdownMenuButton" data-bs-toggle="dropdown"
        aria-expanded="false">
        {idx.text}
    </Dropdown.Toggle>
    <Dropdown.Menu as="ul" aria-labelledby="dropdownMenuButton">
        <Dropdown.Item as="li" href="#!">Menu item</Dropdown.Item>
        <Dropdown.Item as="li" href="#!">Menu item</Dropdown.Item>
        <Dropdown.Item as="li" href="#!">Menu item</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
</div>
))}
</div>
// End Prism Code//`;

export const dropdown20 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<Dropdown>
<Dropdown.Toggle variant='' className="btn btn-dark dropdown-toggle" type="button"
    id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
</Dropdown.Toggle>
<Dropdown.Menu as="ul" className="dropdown-menu dropdown-menu-dark">
    <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
    <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
    <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
// End Prism Code//`;

export const dropdown21 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <Dropdown>
<Dropdown.Toggle variant='' type="button" className="btn btn-primary dropdown-toggle"
    data-bs-toggle="dropdown" aria-expanded="false">
        Right-aligned menu example
</Dropdown.Toggle>
<Dropdown.Menu className="dropdown-menu dropdown-menu-end">
    <Dropdown.Item>Action
    </Dropdown.Item>
    <Dropdown.Item>Another
            action</Dropdown.Item>
    <Dropdown.Item>Something else
            here
    </Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
// End Prism Code//`;

export const dropdown22 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="btn-group">
<DropdownButton variant="secondary" as={ButtonGroup} align={{ lg: "end" }} title="Left-aligned but right
 aligned when large screen" id="dropdown-menu-align-responsive-1" className="text-wrap">
<Dropdown.Item href="#!">Action</Dropdown.Item>
    <Dropdown.Item href="#!">Another action</Dropdown.Item>
    <Dropdown.Item href="#!">Something else here
    </Dropdown.Item>
</DropdownButton>
</div>
// End Prism Code//`;
export const dropdown23 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="btn-group">
<DropdownButton variant="info" as={ButtonGroup} align={{ lg: "start" }} title="Left-aligned but right 
aligned when large screen" className="text-wrap" id="dropdown-menu-align-responsive-1">
<Dropdown.Item href="#!">Action</Dropdown.Item>
    <Dropdown.Item href="#!">Another action</Dropdown.Item>
    <Dropdown.Item href="#!">Something else here
    </Dropdown.Item>
</DropdownButton>
</div>
// End Prism Code//`;
export const dropdown24 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="btn-list">
{CustomButtons.map((idx) => (
<div className="btn-group" key={Math.random()}>
<Dropdown>
    <Dropdown.Toggle variant={idx.class} className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        {idx.text}
    </Dropdown.Toggle>
    <Dropdown.Menu className={dropdown-menu-{idx.class} dropdown-{idx.class1} dropmenu}}>
        <li>
            <Dropdown.Item as="a" className="dropdown-item" href="#!">Action</Dropdown.Item>
        </li>
        <li>
            <Dropdown.Item as="a" className="dropdown-item" href="#!">Another action</Dropdown.Item>
        </li>
        <li>
            <Dropdown.Item as="a" className="dropdown-item" href="#!">Something else here</Dropdown.Item>
        </li>
    </Dropdown.Menu>
</Dropdown>
</div>
))}
</div>
// End Prism Code//`;
export const dropdown25 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
   <div className="btn-list">
{GhostButtons.map((idx) => (
<div className="btn-group" key={Math.random()}>
    <Dropdown>
    <Dropdown.Toggle variant={idx.class} type="button" className="btn btn-primary-ghost dropdown-toggle"
        data-bs-toggle="dropdown" aria-expanded="false">
        {idx.text}
    </Dropdown.Toggle>
    <Dropdown.Menu>
        <Dropdown.Item className="dropdown-item" href="#!">Action</Dropdown.Item>
        <Dropdown.Item className="dropdown-item" href="#!">Another action</Dropdown.Item>
        <Dropdown.Item className="dropdown-item" href="#!">Something else here</Dropdown.Item>
        <Dropdown.Divider className="dropdown-divider" />
        <Dropdown.Item className="dropdown-item" href="#!">Separated link</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
</div>
))}
</div>
// End Prism Code//`;
export const dropdown26 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<p className="card-title mb-3">Use <code>.dropdown-item-text.</code> to create non-interactive dropdown items.</p>
<div className="bd-example">
<Dropdown.Menu className="dropdown-menu" show>
<Dropdown.Item><span className="dropdown-item-text px-0">Dropdown item text</span>
</Dropdown.Item>
<Dropdown.Item href="#!">Action</Dropdown.Item>
<Dropdown.Item href="#!">Another action</Dropdown.Item>
<Dropdown.Item href="#!">Something else here
</Dropdown.Item>
</Dropdown.Menu>
</div>
// End Prism Code//`;
export const dropdown27 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <p className="card-titlte mb-3">Add a <code>.dropdown-header</code> to label sections of actions in any dropdown menu.</p>
<div className="bd-example">
<Dropdown.Menu show>
    <Dropdown.Header>
        <h6 className="dropdown-header px-0">Dropdown header</h6>
    </Dropdown.Header>
    <Dropdown.Item className="dropdown-item" href="#!">Action</Dropdown.Item>
    <Dropdown.Item className="dropdown-item" href="#!">Another action</Dropdown.Item>
    <Dropdown.Item className="dropdown-item" href="#!">Something else here</Dropdown.Item>
</Dropdown.Menu>
</div>
// End Prism Code//`;
export const dropdown28 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="bd-example">
<Dropdown.Menu className="dropdown-menu" show>
    <Dropdown.Header>Heading</Dropdown.Header>
    <Dropdown.Item className="dropdown-item" href="#!">Action</Dropdown.Item>
    <Dropdown.Item className="dropdown-item" href="#!">Another action</Dropdown.Item>
    <Dropdown.Item className="dropdown-item" href="#!">Something else here</Dropdown.Item>
    <Dropdown.Divider className="dropdown-divider" />
    <Dropdown.Item className="dropdown-item" href="#!">Separated link</Dropdown.Item>
</Dropdown.Menu>
</div>
// End Prism Code//`;
export const dropdown29 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="bd-example">
<Dropdown.Menu show className="dropdown-menu p-4 text-muted" style={{ maxWidth: 200 }}>
<p>
Some example text that's free-flowing within the dropdown menu.
</p>
<p className="mb-0">
And this is more example text.
</p>
</Dropdown.Menu>
</div>
// End Prism Code//`;

//Object Fit

export const object1 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<img src="../../../assets/images/media/media-28.jpg" className="object-fit-contain border rounded" alt="..." />
// End Prism Code//`;

export const object2 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<img src="../../../assets/images/media/media-28.jpg" className="object-fit-cover border rounded" alt="..."/>
// End Prism Code//`;

export const object3 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <img src="../../../assets/images/media/media-28.jpg" className="object-fit-fill border rounded" alt="..."/>
// End Prism Code//`;

export const object4 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  <img src="../../../assets/images/media/media-28.jpg" className="object-fit-scale border rounded" alt="..."/>
// End Prism Code//`;

export const object5 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<img src="../../../assets/images/media/media-28.jpg" className="object-fit-none border rounded" alt="..."/>
// End Prism Code//`;

export const object6 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <img src="../../../assets/images/media/media-28.jpg" className="object-fit-sm-contain border rounded" alt="..."/>
// End Prism Code//`;

export const object7 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <img src="../../../assets/images/media/media-28.jpg" className="object-fit-md-contain border rounded" alt="..."/>
// End Prism Code//`;

export const object8 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <img src="../../../assets/images/media/media-28.jpg" className="object-fit-lg-contain border rounded" alt="..."/>
// End Prism Code//`;

export const object9 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<img src="../../../assets/images/media/media-28.jpg" className="object-fit-xl-contain border rounded" alt="..."/>
// End Prism Code//`;

export const object10 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<img src="../../../assets/images/media/media-28.jpg" className="object-fit-xxl-contain border rounded" alt="..."/>
// End Prism Code//`;

export const object11 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <video src="../../../assets/video/1.mp4" className="object-fit-contain rounded border" autoPlay loop muted></video>
// End Prism Code//`;

export const object12 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
       <video src="../../../assets/video/1.mp4" className="object-fit-contain rounded border" autoPlay loop muted></video>
// End Prism Code//`;

export const object13 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <video src="../../../assets/video/1.mp4" className="object-fit-contain rounded border" autoPlay loop muted></video>
// End Prism Code//`;

export const object14 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<video src="../../../assets/video/1.mp4" className="object-fit-contain rounded border" autoPlay loop muted></video>
// End Prism Code//`;

export const object15 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
   <video src="../../../assets/video/1.mp4" className="object-fit-contain rounded border" autoPlay loop muted></video>
// End Prism Code//`;

//Popovers

export const popover1 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  <div className="btn-list">
  {Defaultpopovers.map((idx:any) => (
    <OverlayTrigger trigger="click" placement={idx.class} key={Math.random()}
        overlay={<Popover>
            <Popover.Header as="h3"> Popover {idx.text}</Popover.Header>
            <Popover.Body>
                And here's some amazing content. It's very engaging. Right?
            </Popover.Body>
        </Popover>}>
        <Button variant='' href="#!" className="btn btn-outline-primary btn-wave">Popover {idx.text}</Button>
    </OverlayTrigger>
))}
</div>
// End Prism Code//`;

export const popover2 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
   <div className="btn-list">
{Colorheaderpopovers.map((idx:any) => (
<OverlayTrigger trigger="click" placement={idx.class} key={Math.random()}
    // autoclose='true' 
    overlay={<Popover className={header-{idx.color1} {idx.color2}}>
        <Popover.Header as="h3" data-bs-custom-class={header-{idx.color1}}> Color Header</Popover.Header>
        <Popover.Body>
        Popover with primary header.
        </Popover.Body>
    </Popover>}>
    <Button variant={idx.color} href="#!" className="btn btn-wave">Header {idx.text}</Button>
</OverlayTrigger>
))}
</div>
// End Prism Code//`;

export const popover3 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  <div className="btn-list">
  {Colredpopovers.map((idx:any) => (
      <OverlayTrigger key={Math.random()} placement={idx.class} trigger="click" 
      overlay={<Popover className={popover-{idx.color1}}>
          <Popover.Header as="h3">Color Background</Popover.Header>
          <Popover.Body>Popover with {idx.text} background.</Popover.Body>
      </Popover>}>
          <Button variant={idx.color1}>{idx.text} </Button>
      </OverlayTrigger>
  ))}
</div>
// End Prism Code//`;

export const popover4 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
   <div className="btn-list">
      {Colredpopovers.map((idx:any) => (
          <OverlayTrigger key={Math.random()} placement={idx.class} trigger="click" 
          overlay={<Popover className={popover-{idx.color1}-light} id="tooltip-disabled">
              <Popover.Header as="h3">Light Background</Popover.Header>
              <Popover.Body>Popover with light {idx.text} background.</Popover.Body>
          </Popover>}>
              <Button variant='' className={btn btn-{idx.color1}-light btn-wave}>{idx.text} </Button>
          </OverlayTrigger>
      ))}
  </div>
// End Prism Code//`;

export const popover5 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  {Dismissiblepopovers.map((idx:any) => (
    <OverlayTrigger rootClose={true} trigger="click" placement={idx.class} key={Math.random()}
        overlay={<Popover>
            <Popover.Header as="h3"> Dismissible Popover</Popover.Header>
            <Popover.Body>
                And here's some amazing content. It's very engaging. Right?
            </Popover.Body>
        </Popover>}>
        <Button variant={idx.color} className="btn  btn-wave m-1">Popover Dismiss</Button>
    </OverlayTrigger>
))}
// End Prism Code//`;

export const popover6 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<OverlayTrigger placement='right' overlay={<Popover id="tooltip-disabled">
    <Popover.Body>Disabled Popover!</Popover.Body>
</Popover>}>
    <span className="d-inline-block mb-3 mb-sm-1 me-2">
        <Button variant="primary" disabled>
            Disabled button
        </Button>
    </span>
</OverlayTrigger>
<OverlayTrigger placement='right' overlay={<Popover id="tooltip-disabled">
    <Popover.Body>Disabled Popover!</Popover.Body>
</Popover>}>
    <span className="d-inline-block mb-3 mb-sm-1 me-2">
        <Button variant="info" disabled>
            Disabled button
        </Button>
    </span>
</OverlayTrigger>
<OverlayTrigger placement='right' overlay={<Popover id="tooltip-disabled">
    <Popover.Body>Disabled Popover!</Popover.Body>
</Popover>}>
    <span className="d-inline-block">
        <Button variant="light" disabled>
            Disabled button
        </Button>
    </span>
</OverlayTrigger>
// End Prism Code//`;

export const popover7 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<OverlayTrigger placement='top' trigger="click" overlay={<Popover className='popover-secondary only-body' id="tooltip-disabled">
    <Popover.Body>This popover is used to provide details about this icon.</Popover.Body>
</Popover>}>
    <Link className="me-4" href="#!">
        <svg xmlns="http://www.w3.org/2000/svg" className="svg-secondary" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <path d="M0 0h24v24H0V0z" fill="none" /><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" /></svg>
    </Link>
</OverlayTrigger>
// End Prism Code//`;


//Blackquotes

export const blackquote1 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <blockquote className="relative">
<svg className="absolute top-0 ltr:left-0 rtl:right-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-100 dark:text-white/10"
    width="16" height="16" viewBox="0 0 16 16" fill="none"
    xmlns="http://www.w3.org/2000/svg"  >
    <path
        d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
        fill="currentColor"></path>
</svg>
<div className="relative z-10">
    <p className="text-gray-800 sm:text-xl dark:text-white"><em>
            I just wanted to say that I'm very happy with my purchase so far. The
            documentation is outstanding - clear and
            detailed.</em>
    </p>
</div>
</blockquote>
// End Prism Code//`;

export const blackquote2 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  <blockquote className="relative">
<svg className="absolute top-0 ltr:left-0 rtl:right-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-100 dark:text-white/10"
    width="16" height="16" viewBox="0 0 16 16" fill="none"
    xmlns="http://www.w3.org/2000/svg"  >
    <path
        d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
        fill="currentColor"></path>
</svg>

<div className="relative z-10">
    <p className="text-gray-800 dark:text-white">
        <em>
            I just wanted to say that I'm very happy with my purchase so far. The
            documentation is outstanding - clear and detailed.
        </em>
    </p>
</div>
</blockquote>
// End Prism Code//`;

export const blackquote3 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<blockquote className="relative">
<svg className="absolute top-0 ltr:left-0 rtl:right-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-100 dark:text-white/10"
    width="16" height="16" viewBox="0 0 16 16" fill="none"
    xmlns="http://www.w3.org/2000/svg"  >
    <path
        d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
        fill="currentColor"></path>
</svg>

<div className="relative z-10">
    <p className="text-gray-800 sm:text-xl dark:text-white"><em>
            I just wanted to say that I'm very happy with my purchase so far. The
            documentation is outstanding - clear and detailed.</em>
    </p>
</div>
</blockquote>
// End Prism Code//`;

export const blackquote4 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <blockquote className="relative">
<svg className="absolute top-0 ltr:left-0 rtl:right-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-100 dark:text-white/10"
    width="16" height="16" viewBox="0 0 16 16" fill="none"
    xmlns="http://www.w3.org/2000/svg"  >
    <path
        d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
        fill="currentColor"></path>
</svg>

<div className="relative z-10">
    <p className="text-xl text-gray-800 md:text-3xl md:leading-normal dark:text-white">
        <em>
            I just wanted to say that I'm very happy with my purchase so far. The
            documentation is outstanding - clear and detailed.</em>
    </p>
</div>
</blockquote>
// End Prism Code//`;

export const blackquote5 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<blockquote className="relative text-center max-w-lg mx-auto">
<div className="relative z-10">
    <p className="text-xl text-gray-800">
        <em className="relative">
            <svg className="absolute top-0 ltr:left-0 rtl:right-0 transform -translate-x-8 -translate-y-8 h-16 w-16 text-gray-100 sm:h-24 sm:w-24 dark:text-white/10"
                width="16" height="16" viewBox="0 0 16 16" fill="none"
                xmlns="http://www.w3.org/2000/svg"  >
                <path
                    d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                    fill="currentColor"></path>
            </svg>
            <span className="relative z-10 dark:text-white">I just wanted to say that
                I'm very happy with my purchase so far. The documentation is
                outstanding - clear and detailed.</span>
        </em>
    </p>
</div>
</blockquote>
// End Prism Code//`;

export const blackquote6 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <blockquote className="relative text-end">
<div className="relative z-10">
    <p className="text-xl text-gray-800">
        <em className="relative">
            <svg className="absolute top-0 ltr:left-0 rtl:right-0 transform -translate-x-8 -translate-y-8 h-16 w-16 text-gray-100 sm:h-24 sm:w-24 dark:text-white/10"
                width="16" height="16" viewBox="0 0 16 16" fill="none"
                xmlns="http://www.w3.org/2000/svg"  >
                <path
                    d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                    fill="currentColor"></path>
            </svg>
            <span className="relative z-10 dark:text-white">I just wanted to say that
                I'm very happy with my purchase so far. The documentation is
                outstanding - clear and detailed.</span>
        </em>
    </p>
</div>
</blockquote>
// End Prism Code//`;

export const blackquote7 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <blockquote className="relative">
<svg className="absolute top-0 ltr:left-0 rtl:right-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-100 dark:text-white/10"
    width="16" height="16" viewBox="0 0 16 16" fill="none"
    xmlns="http://www.w3.org/2000/svg"  >
    <path
        d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
        fill="currentColor"></path>
</svg>

<div className="relative z-10">
    <p className="text-gray-800 sm:text-xl dark:text-white"><em>
            I just wanted to say that I'm very happy with my purchase so far. The
            documentation is outstanding - clear and detailed.</em>
    </p>
</div>

<footer className="mt-6">
    <div className="text-base font-semibold text-gray-800 dark:text-white/70">Josh
        Grazioso</div>
</footer>
</blockquote>
// End Prism Code//`;

export const blackquote8 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <blockquote className="relative">
<svg className="absolute top-0 ltr:left-0 rtl:right-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-100 dark:text-white/10"
    width="16" height="16" viewBox="0 0 16 16" fill="none"
    xmlns="http://www.w3.org/2000/svg"  >
    <path
        d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
        fill="currentColor"></path>
</svg>

<div className="relative z-10">
    <p className="text-gray-800 sm:text-xl dark:text-white"><em>
            I just wanted to say that I'm very happy with my purchase so far. The
            documentation is outstanding - clear and detailed.</em>
    </p>
</div>

<footer className="mt-6">
    <div className="flex items-center">
        <div className="flex-shrink-0">
            <img className="h-10 w-10 rounded-full" src="../../assets/images/faces/1.jpg"
                alt="Image Description"/>
        </div>
        <div className="ltr:ml-4 rtl:mr-4">
            <div className="text-base font-semibold text-gray-800 dark:text-white/70">
                Josh Grazioso</div>
            <div className="text-xs text-gray-500 dark:text-white/70">Source title</div>
        </div>
    </div>
</footer>
</blockquote>
// End Prism Code//`;

export const blackquote9 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <blockquote
className="relative ltr:border-l-4 rtl:border-r-4 ltr:pl-4 rtl:pr-4 ltr:sm:pl-6 rtl:sm:pr-6 dark:border-white/10">
<p className="text-gray-800 sm:text-xl dark:text-white"><em>
        I just wanted to say that I'm very happy with my purchase so far. The
        documentation is outstanding - clear and detailed.</em>
</p>

<footer className="mt-4">
    <div className="flex items-center">
        <div className="flex-shrink-0">
            <img className="h-10 w-10 rounded-full" src="../../assets/images/faces/1.jpg"
                alt="Image Description"/>
        </div>
        <div className="ltr:ml-4 rtl:mr-4">
            <div className="text-base font-semibold text-gray-800 dark:text-white/70">
                Josh Grazioso</div>
            <div className="text-xs text-gray-500 dark:text-white/70">Source title</div>
        </div>
    </div>
</footer>
</blockquote>
// End Prism Code//`;

//Typography

export const typography1 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
    <h1 className="mb-3">h1. Bootstrap heading</h1>
    <h2 className="mb-3">h2. Bootstrap heading</h2>
    <h3 className="mb-3">h3. Bootstrap heading</h3>
    <h4 className="mb-3">h4. Bootstrap heading</h4>
    <h5 className="mb-3">h5. Bootstrap heading</h5>
    <h6 className="mb-0">h6. Bootstrap heading</h6>
// End Prism Code//`;

export const typography2 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
    <p className="h1 mb-3">h1. Bootstrap heading</p>
    <p className="h2 mb-3">h2. Bootstrap heading</p>
    <p className="h3 mb-3">h3. Bootstrap heading</p>
    <p className="h4 mb-3">h4. Bootstrap heading</p>
    <p className="h5 mb-3">h5. Bootstrap heading</p>
    <p className="h6 mb-0">h6. Bootstrap heading</p>
// End Prism Code//`;

export const typography3 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
    <h1 className="display-1">Display 1</h1>
    <h1 className="display-2">Display 2</h1>
    <h1 className="display-3">Display 3</h1>
    <h1 className="display-4">Display 4</h1>
    <h1 className="display-5">Display 5</h1>
    <h1 className="display-6">Display 6</h1>
// End Prism Code//`;

export const typography4 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<h3>
    Fancy display heading
    <small className="text-muted">With faded secondary text</small>
</h3>
// End Prism Code//`;

export const typography5 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <p>You can use the mark tag to <mark>highlight</mark> text.</p>
    <p><del>This line of text is meant to be treated as deleted text.</del>
    </p>
    <p><s>This line of text is meant to be treated as no longer
            accurate.</s>
    </p>
    <p><ins>This line of text is meant to be treated as an addition to the
            document.</ins></p>
    <p><u>This line of text will render as underlined.</u></p>
    <p><small>This line of text is meant to be treated as fine
            print.</small>
    </p>
    <p><strong>This line rendered as bold text.</strong></p>
    <p className="mb-0"><em>This line rendered as italicized text.</em></p>
// End Prism Code//`;

export const typography6 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <p className="fs-1 mb-2">.fs-1 text</p>
<p className="fs-2 mb-2">.fs-2 text</p>
<p className="fs-3 mb-2">.fs-3 text</p>
<p className="fs-4 mb-2">.fs-4 text</p>
<p className="fs-5 mb-2">.fs-5 text</p>
<p className="fs-6 mb-0">.fs-6 text</p>
// End Prism Code//`;

export const typography7 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <p className="lead mb-0">
<b>This is a lead paragraph. It stands out from regular paragraphs</b>.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
</p>
// End Prism Code//`;

export const typography8 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <figure className="blockquote-container">
<blockquote className="blockquote mb-2">
    <h6>The greatest glory in living lies not in never falling, but in rising every time we fall.</h6>
</blockquote>
<figcaption className="blockquote-footer mt-0 mb-0 text-muted op-7"><cite title="Source Title">Nelson Mandela</cite>
</figcaption>
</figure>
// End Prism Code//`;
export const typography9 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  <figure className="blockquote-container text-end">
<blockquote className="blockquote mb-2">
<h6>The greatest glory in living lies not in never falling, but in rising every time we fall.</h6>
</blockquote>
<figcaption className="blockquote-footer mt-0 mb-0 text-muted op-7"><cite title="Source Title">Nelson Mandela</cite>
</figcaption>
</figure>
// End Prism Code//`;
export const typography10 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <blockquote className="blockquote custom-blockquote primary mb-0 text-center">
<h6>The future belongs to those who believe in the beauty of their dreams..</h6>
<footer className="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
<span className="quote-icon"><i className="ri-information-line"></i></span>
</blockquote>
// End Prism Code//`;
export const typography11 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  <blockquote className="blockquote custom-blockquote secondary mb-0 text-center">
    <h6>The future belongs to those who believe in the beauty of their dreams..</h6>
    <footer className="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
    <span className="quote-icon"><i className="ri-information-line"></i></span>
</blockquote>
// End Prism Code//`;
export const typography12 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<blockquote className="blockquote custom-blockquote warning mb-0 text-center">
<h6>The future belongs to those who believe in the beauty of their dreams..</h6>
<footer className="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
<span className="quote-icon"><i className="ri-information-line"></i></span>
</blockquote>
// End Prism Code//`;
export const typography13 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<blockquote className="blockquote custom-blockquote success mb-0 text-center">
<h6>The future belongs to those who believe in the beauty of their dreams..</h6>
<footer className="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
<span className="quote-icon"><i className="ri-information-line"></i></span>
</blockquote>
// End Prism Code//`;
export const typography14 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <blockquote className="blockquote custom-blockquote info mb-0 text-center">
<h6>The future belongs to those who believe in the beauty of their dreams..</h6>
<footer className="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
<span className="quote-icon"><i className="ri-information-line"></i></span>
</blockquote>
// End Prism Code//`;
export const typography15 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<blockquote className="blockquote custom-blockquote danger mb-0 text-center">
<h6>The future belongs to those who believe in the beauty of their dreams..</h6>
<footer className="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
<span className="quote-icon"><i className="ri-information-line"></i></span>
</blockquote>
// End Prism Code//`;
export const typography16 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <dl className="row mb-0">
<dt className="col-sm-3">Description lists</dt>
<dd className="col-sm-9">A description list is perfect for defining terms.</dd>

<dt className="col-sm-3">Term</dt>
<dd className="col-sm-9">
    <p>Definition for the term.</p>
    <p>And some more placeholder definition text.</p>
</dd>

<dt className="col-sm-3">Another term</dt>
<dd className="col-sm-9">This definition is short, so no extra paragraphs or
    anything.</dd>

<dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
<dd className="col-sm-9">This can be useful when space is tight. Adds an
    ellipsis at
    the end.</dd>

<dt className="col-sm-3">Nesting</dt>
<dd className="col-sm-9 mb-0">
    <dl className="row mb-0">
        <dt className="col-sm-4">Nested definition list</dt>
        <dd className="col-sm-8 mb-0">I heard you like definition lists. Let me put a
            definition list inside your definition list.</dd>
    </dl>
</dd>
</dl>
// End Prism Code//`;
export const typography17 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <ul className="list-unstyled">
<li>This is a list.</li>
<li>It appears completely unstyled.</li>
<li>Structurally, it's still a list.</li>
<li>However, this style only applies to immediate child elements.</li>
<li className="mb-2">Nested lists:
    <ul>
        <li>are unaffected by this style</li>
        <li>will still show a bullet</li>
        <li>and have appropriate left margin</li>
    </ul>
</li>
<li>This may still come in handy in some situations.</li>
</ul>
// End Prism Code//`;
export const typography18 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  <p><abbr title="attribute">attr</abbr></p>
<p className="mb-0"><abbr title="HyperText Markup Language" className="initialism">HTML</abbr></p>
// End Prism Code//`;
export const typography19 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  <ul className="list-inline mb-0">
    <li className="list-inline-item">This is a list item.</li>
    <li className="list-inline-item">And another one.</li>
    <li className="list-inline-item">But they're displayed inline.</li>
</ul>
// End Prism Code//`;
export const typography20 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <p className="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolorem fuga iste obcaecati natus eos officiis adipisci voluptatibus ipsum, architecto veniam delectus vel dolor magni a vero sunt ut harum.</p>
<div className="text-success">
<hr/>
</div>
<p className=" mb-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto perspiciatis, magni numquam quos perferendis nulla magnam odit amet excepturi quisquam provident.</p>

<hr className="text-danger border-2 opacity-50"/>
<p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aliquid consequatur aut doloremque assumenda voluptatem, id qui vero adipisci! Nostrum ipsam praesentium!</p>
<hr className="border-primary border-3 opacity-75"/>
// End Prism Code//`;
export const typography21 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <p className="text-lowercase">Lowercased text.</p>
<p className="text-uppercase">Uppercased text.</p>
<p className="text-capitalize mb-0">CapiTaliZed text.</p>
// End Prism Code//`;
export const typography22 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<p className="text-decoration-underline">This text has a line underneath it.
</p>
<p className="text-decoration-line-through">This text has a line going
through
it.
</p>
<a href="#!" className="text-decoration-none">This link has its text
decoration
removed
</a>
// End Prism Code//`;
export const typography23 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<p className="fw-bold">Bold text.</p>
<p className="fw-bolder">Bolder weight text (relative to the parent element).</p>
<p className="fw-medium">Semibold weight text.</p>
<p className="fw-normal">Normal weight text.</p>
<p className="fw-light">Light weight text.</p>
<p className="fw-lighter">Lighter weight text (relative to the parent element).</p>
<p className="fst-italic">Italic text.</p>
<p className="fst-normal mb-0">Text with normal font style</p>
// End Prism Code//`;
export const typography24 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  <p className="lh-1">This is a long paragraph written to show how the line-height of
    an
    element is affected by our utilities. Classes are applied to the element
    itself
    or sometimes the parent element. These classes can be customized as needed
    with
    our utility API.
</p>
<p className="lh-sm">This is a long paragraph written to show how the line-height of
    an
    element is affected by our utilities. Classes are applied to the element
    itself
    or sometimes the parent element. These classes can be customized as needed
    with
    our utility API.
</p>
<p className="lh-base">This is a long paragraph written to show how the line-height
    of
    an element is affected by our utilities. Classes are applied to the element
    itself or sometimes the parent element. These classes can be customized as
    needed with our utility API.
</p>
<p className="lh-lg mb-0">This is a long paragraph written to show how the
    line-height
    of an
    element is affected by our utilities. Classes are applied to the element
    itself
    or sometimes the parent element. These classes can be customized as needed
    with
    our utility API.
</p>
// End Prism Code//`;
export const typography25 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<p className="font-monospace mb-0">This is in monospace</p>
// End Prism Code//`;
export const typography26 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  <p className="text-muted mb-0">
    Muted text with a <a href="#!" className="text-reset text-decoration-underline text-dark">reset link</a>.
</p>
// End Prism Code//`;
export const typography27 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
   <p className="visible mb-0">This is visible text</p>
// End Prism Code//`;
export const typography28 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <p className="invisible mb-0">This is invisible text</p>
// End Prism Code//`;
export const typography29 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
owCode title="Text alignment" customCardClass="custom-card" customCardBodyClass="" code={typography29}>
<p className="text-start">Start aligned text on all viewport sizes.</p>
<p className="text-center">Center aligned text on all viewport sizes.</p>
<p className="text-end">End aligned text on all viewport sizes.</p>

<p className="text-sm-start">Start aligned text on viewports sized SM (small) or
    wider.
</p>
<p className="text-md-start">Start aligned text on viewports sized MD (medium) or
    wider.
</p>
<p className="text-lg-start">Start aligned text on viewports sized LG (large) or
    wider.
</p>
<p className="text-xl-start">Start aligned text on viewports sized XL (extra-large)
    or
    wider.</p>
// End Prism Code//`;
export const typography30 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="badge bg-primary text-wrap mb-3" style={{width: "6rem"}}>
    This text should wrap.
</div>
<p className="text-muted mb-2"> use class <code>.text-nowrap</code> to prevent text from wrapping</p>
<div className="text-nowrap bg-light border" style={{width: "8rem"}}>
    This text should overflow the parent.
</div>
// End Prism Code//`;
export const typography31 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <p className="text-break mb-0">
    mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
</p>
// End Prism Code//`;




//breadcrumb

export const breadcrumb1 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<Breadcrumb>
    <Breadcrumb.Item active aria-current="page">Home</Breadcrumb.Item>
</Breadcrumb>

<nav aria-label="breadcrumb">
    <Breadcrumb>
        <Breadcrumb.Item href="#!">Home</Breadcrumb.Item>
        <Breadcrumb.Item active aria-current="page">Library</Breadcrumb.Item>
    </Breadcrumb>
</nav>

<nav aria-label="breadcrumb">
    <Breadcrumb className="mb-0">
        <Breadcrumb.Item href="#!">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#!">Library</Breadcrumb.Item>
        <Breadcrumb.Item active aria-current="page">Data</Breadcrumb.Item>
    </Breadcrumb>
</nav>
// End Prism Code//`;

export const breadcrumb2 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<nav aria-label="breadcrumb">
    <Breadcrumb className="breadcrumb-example1">
        <Breadcrumb.Item active aria-current="page">Home</Breadcrumb.Item>
    </Breadcrumb>
</nav>

<nav aria-label="breadcrumb">
    <Breadcrumb className="breadcrumb-example1">
        <Breadcrumb.Item href="#!">Home</Breadcrumb.Item>
        <Breadcrumb.Item active aria-current="page">Library</Breadcrumb.Item>
    </Breadcrumb>
</nav>

<nav aria-label="breadcrumb">
    <Breadcrumb className="breadcrumb-example1 mb-0">
        <Breadcrumb.Item href="#!">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#!">Library</Breadcrumb.Item>
        <Breadcrumb.Item active aria-current="page">Data</Breadcrumb.Item>
    </Breadcrumb>
</nav>
// End Prism Code//`;

export const breadcrumb3 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  <nav
    aria-label="breadcrumb" className='divider-breadcrumb'>
    <Breadcrumb className="mb-0">
        <Breadcrumb.Item href="#!">Home</Breadcrumb.Item>
        <Breadcrumb.Item active className="active" aria-current="page">Library</Breadcrumb.Item>
    </Breadcrumb>
</nav>
// End Prism Code//`;

export const breadcrumb4 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  <nav
    aria-label="breadcrumb" className='svg-breadcrumb'>
    <Breadcrumb className=" mb-0">
        <Breadcrumb.Item href="#!">Home</Breadcrumb.Item>
        <Breadcrumb.Item active className="active embedded-breadcrumb" aria-current="page">Library</Breadcrumb.Item>
    </Breadcrumb>
</nav>
// End Prism Code//`;

export const breadcrumb5 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<nav aria-label="breadcrumb">
    <Breadcrumb className="breadcrumb breadcrumb-style1 mb-0">
        <Breadcrumb.Item href="#!">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#!">Library</Breadcrumb.Item>
        <Breadcrumb.Item active className="active" aria-current="page">Data</Breadcrumb.Item>
    </Breadcrumb>
</nav>
// End Prism Code//`;

export const breadcrumb6 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <nav aria-label="breadcrumb">
    <Breadcrumb className="breadcrumb breadcrumb-style2 mb-0">
        <Breadcrumb.Item href="#!"><i className="ti ti-home-2 me-1 fs-15 d-inline-block"></i>Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#!"><i className="ti ti-apps me-1 fs-15 d-inline-block"></i>About</Breadcrumb.Item>
        <Breadcrumb.Item active className="active" aria-current="page">Services</Breadcrumb.Item>
    </Breadcrumb>
</nav>
// End Prism Code//`;
