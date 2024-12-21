"use client"
// import Pageheader from "../../../../../shared/layout-components/page-header/pageheader";
// import Seo from "../../../../../shared/layout-components/seo/seo";
import React, { Fragment } from "react";
import { Accordion, Card, Col, Nav, Row, Tab } from "react-bootstrap";

const Faqs = () => {
return (
<Fragment>

                {/* Start:: row-1 */}
                <Row>
                    <Col xl={12}>
                        <div className="card custom-card card-bg-primary border-0 shadow-none faq-banner-card">
                            <div className="card-body p-4">
                                <Row>
                                    <Col xxl={7} xl={7} lg={7} md={7} sm={7} className="col-12 my-auto">
                                        <div className="faq-text lh-1 mb-3">FAQ's</div>
                                        <span className="d-block op-8">Welcome to our FAQ page, your go-to resource for answers to common queries and valuable information about our platform. Whether you're a newcomer or an experienced user, this section aims to address your most pressing questions and concerns.</span>
                                    </Col>
                                    <Col xxl={5} xl={5} lg={5} md={5} sm={5} className="d-sm-block d-none my-auto">
                                        <img src="../../assets/images/media/media-65.png" alt="" className="img-fluid"/>
                                    </Col>
                                </Row>
                            </div>
                        </div>  
                    </Col>
                </Row>
                {/* End:: row-1 */}

                {/* Start:: row-2 */}
                <Row>
                    <Tab.Container defaultActiveKey="first">
                        <Col xl={3}>
                            <Card className="custom-card">
                                <Card.Body>
                                    <Nav className="nav nav-tabs flex-column nav-tabs-header mb-0 d-sm-flex d-inline-block" role="tablist">
                                        <Nav.Item className="m-1" role="presentation">
                                            <Nav.Link eventKey="first" className="" data-bs-toggle="tab" role="tab" aria-current="page" href="#theme-customization" aria-selected="true">Theme Customization</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="m-1" role="presentation">
                                            <Nav.Link eventKey="second" className="" data-bs-toggle="tab" role="tab" aria-current="page" href="#user-management" aria-selected="false" tabIndex={-1}>User Management</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="m-1" role="presentation">
                                            <Nav.Link eventKey="third" className="" data-bs-toggle="tab" role="tab" aria-current="page" href="#data-export" aria-selected="false" tabIndex={-1}>Data Export and Reports</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="m-1" role="presentation">
                                            <Nav.Link eventKey="fourth" className="" data-bs-toggle="tab" role="tab" aria-current="page" href="#security-authentication" aria-selected="false" tabIndex={-1}>Security and Authentication</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="m-1" role="presentation">
                                            <Nav.Link eventKey="fifth" className="" data-bs-toggle="tab" role="tab" aria-current="page" href="#general-settings" aria-selected="false" tabIndex={-1}>General Settings</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="m-1" role="presentation">
                                            <Nav.Link eventKey="sixth" className="" data-bs-toggle="tab" role="tab" aria-current="page" href="#troubleshooting" aria-selected="false" tabIndex={-1}>Troubleshooting and Support</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Card.Body>
                            </Card>
                            <Card className="custom-card">
                                <div className="card-header">
                                    <div className="card-title">
                                        Subscribe To NewsLetter
                                    </div>
                                </div>
                                <Card.Body>
                                    <div className="text-center">
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Email Here" aria-label="blog-email" aria-describedby="blog-subscribe"/>
                                            <button className="btn btn-primary btn-wave waves-effect waves-light" type="button" id="blog-subscribe">Subscribe</button>
                                        </div>
                                        <label className="form-check-label text-muted fw-medium fs-13">
                                            Subscribe to get updates about latest News &amp; Posts
                                        </label>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={9}>
                            <Row>
                                <Col xl={12}>
                                    <Card className="custom-card">
                                        <Card.Body>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="first" className="show border-0 p-0" id="theme-customization"
                                                    role="tabpanel">
                                                    <Accordion defaultActiveKey="first" className="accordion accordion-customicon1 faq-accordion accordion-primary accordions-items-seperate" id="accordionFAQ1">
                                                        <Accordion.Item eventKey="first">
                                                            <Accordion.Header id="headingcustomicon2One">
                                                                    1. How can I change the color scheme of the admin template?
                                                            </Accordion.Header>
                                                                <Accordion.Body>
                                                                    Navigate to the "Theme Settings" page, where you'll find options to choose a primary color and accent color. Select your desired colors and save the changes.
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="second">
                                                            <Accordion.Header id="headingcustomicon2Two">
                                                                    2. Is it possible to upload a custom logo for my admin dashboard?
                                                            </Accordion.Header>
                                                                <Accordion.Body>
                                                                    Yes, you can upload a custom logo. Visit the "Logo & Branding" section and use the upload feature to replace the default logo with your own.
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="third">
                                                            <Accordion.Header id="headingcustomicon2Three">
                                                                    3. Are there predefined themes available, or can I create a custom theme?
                                                            </Accordion.Header>
                                                                <Accordion.Body>
                                                                    The admin template provides both predefined themes and the option to create custom themes. Explore the "Theme Gallery" for pre-made themes or use the "Customize Theme" feature for a personalized look.
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="fourth">
                                                            <Accordion.Header id="headingcustomicon2Four">
                                                                    4. Can I use my own CSS styles to override the default styles?
                                                            </Accordion.Header>
                                                                <Accordion.Body>
                                                                    Yes, you can add custom CSS styles. In the "Advanced Settings," find the "Custom CSS" section and enter your styles. Ensure compatibility and avoid conflicting with existing styles.
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="fifth">
                                                            <Accordion.Header id="headingcustomicon2Five">
                                                                    5. How do I enable or disable the dark mode?
                                                            </Accordion.Header>
                                                                <Accordion.Body>
                                                                    To toggle dark mode, go to the "Appearance" settings. Find the "Dark Mode" option and switch it on or off based on your preference.
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="second" className="border-0 p-0" id="user-management"
                                                    role="tabpanel">
                                                    <Accordion defaultActiveKey="first" className="accordion accordion-customicon1 faq-accordion accordion-primary accordions-items-seperate" id="accordionFAQ2">
                                                        <Accordion.Item eventKey="first">
                                                            <Accordion.Header id="headingcustomicon2Six">
                                                                    1. What are user roles, and how do they affect access permissions?
                                                            </Accordion.Header>
                                                                <Accordion.Body>
                                                                    User roles define the level of access. Visit "User Roles" in the admin settings to manage roles and customize permissions for each role.
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="second">
                                                            <Accordion.Header id="headingcustomicon2Seven">
                                                                    2. Can I reset a user's password as an administrator?
                                                            </Accordion.Header>
                                                                <Accordion.Body>
                                                                    Yes, as an administrator, you can reset a user's password. Go to the "User Management" page, select the user, and choose the "Reset Password" option.
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="third">
                                                            <Accordion.Header id="headingcustomicon2Eight">
                                                                    3.  Is there a way to import multiple users simultaneously?
                                                            </Accordion.Header>
                                                                <Accordion.Body>
                                                                    Yes, use the "Bulk Import" feature in the "User Management" section. Prepare a CSV file with user details and upload it for quick user creation.
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="fourth">
                                                            <Accordion.Header id="headingcustomicon2Nine">
                                                                    4. How can I view the login history of a specific user?
                                                            </Accordion.Header>
                                                                <Accordion.Body>
                                                                    Access the user's profile in the "User Management" area and navigate to the "Login History" tab to view a detailed log of their login activities.
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="fifth">
                                                            <Accordion.Header id="headingcustomicon2Ten">
                                                                    5. What happens if a user forgets their password?
                                                            </Accordion.Header>
                                                                <Accordion.Body>
                                                                    Users can reset their passwords by clicking on the "Forgot Password" link on the login page. An email with instructions for password reset will be sent to their registered email address.
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="third" className="border-0 p-0" id="data-export"
                                                    role="tabpanel">
                                                    <Accordion defaultActiveKey="first" className="accordion accordion-customicon1 faq-accordion accordion-primary accordions-items-seperate" id="accordionFAQ3">
                                                        <Accordion.Item eventKey="first">
                                                            <Accordion.Header id="headingcustomicon2Eleven">
                                                                    1. Can I schedule automatic data exports for specific intervals?
                                                            </Accordion.Header>
                                                                <Accordion.Body>
                                                                    Yes, you can schedule automatic exports. Explore the "Scheduled Exports" section to set up recurring exports and choose the data format and destination.
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="second">
                                                            <Accordion.Header id="headingcustomicon2Twelve">
                                                                    2. What types of data can be exported from the admin template?
                                                            </Accordion.Header>
                                                                <Accordion.Body>
                                                                    Most data tables in the admin template are exportable, including user data, reports, and custom datasets. Use the "Export" feature in the respective sections.
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="third">
                                                            <Accordion.Header id="headingcustomicon2Thirteen">
                                                                    3. Is there a limit to the size of exported files?
                                                            </Accordion.Header>
                                                                <Accordion.Body>
                                                                    The export file size limit varies depending on the configuration. Check the "Export Settings" to view and adjust the size limits if necessary.
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="fourth">
                                                            <Accordion.Header id="headingcustomicon2Fourteen">
                                                                    4. Can I customize the format of exported reports?
                                                            </Accordion.Header>
                                                                <Accordion.Body>
                                                                    Yes, you can customize export formats. In the "Export Settings," find options to choose the file format (CSV, Excel, etc.) and configure additional formatting options.
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="fifth">
                                                            <Accordion.Header id="headingcustomicon2Fifteen">
                                                                    5. How do I generate and download a quick summary report?
                                                            </Accordion.Header>
                                                                <Accordion.Body>
                                                                    Navigate to the "Reports" section and use the "Generate Summary Report" button. Once generated, click on the download link to get the summary report.
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="fourth" className="border-0 p-0" id="security-authentication"
                                                    role="tabpanel">
                                                    <Accordion defaultActiveKey="first" className="accordion accordion-customicon1 faq-accordion accordion-primary accordions-items-seperate" id="accordionFAQ4">
                                                        <Accordion.Item eventKey="first">
                                                            <Accordion.Header id="headingcustomicon2Sixteen">
                                                                    1. Are there security measures in place to protect against unauthorized access?
                                                            </Accordion.Header>
                                                                <Accordion.Body>
                                                                    Yes, the admin template includes robust security features, including encryption, secure password hashing, and session management. Regularly update the system and use strong passwords for enhanced security.
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="second">
                                                            <Accordion.Header id="headingcustomicon2Seventeen">
                                                                    2. Can I enable two-factor authentication for admin accounts?
                                                            </Accordion.Header>
                                                                <Accordion.Body>
                                                                    Yes, two-factor authentication is available. Access the "Security Settings" to enable and configure 2FA for added account security.
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="third">
                                                            <Accordion.Header id="headingcustomicon2Eighteen">
                                                                    3. What should I do if I suspect a security breach?
                                                            </Accordion.Header>
                                                                <Accordion.Body>
                                                                    In case of a security concern, immediately change your password and notify the system administrator. Check the "Security Logs" for any suspicious activities.
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="fourth">
                                                            <Accordion.Header id="headingcustomicon2Nineteen">
                                                                    4. How often should I update the admin template for security patches?
                                                            </Accordion.Header>
                                                                <Accordion.Body>
                                                                    It's advisable to regularly check for updates and apply security patches. Aim to update the admin template whenever a new version is released to ensure the latest security measures are in place.
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="fifth">
                                                            <Accordion.Header id="headingcustomicon2Twenty">
                                                                    5. Can I restrict access to certain features based on user roles?
                                                            </Accordion.Header>
                                                                <Accordion.Body>
                                                                    Yes, access restrictions can be set based on user roles. Utilize the "Role-based Access Control" (RBAC) settings to configure specific permissions for different user roles.
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="fifth" className="border-0 p-0" id="general-settings"
                                                    role="tabpanel">
                                                    <Accordion defaultActiveKey="first" className="accordion accordion-customicon1 faq-accordion accordion-primary accordions-items-seperate" id="accordionFAQ5">
                                                        <Accordion.Item eventKey="first">
                                                            <Accordion.Header id="headingcustomicon2TwentyOne">
                                                                    1. How do I rearrange the order of items in the navigation menu?
                                                            </Accordion.Header>
                                                                <Accordion.Body>
                                                                    Visit the "Menu Settings" page, where you can easily drag and drop menu items to rearrange their order. Save the changes to update the navigation menu.
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="second">
                                                            <Accordion.Header id="headingcustomicon2TwentyTwo">
                                                                    2. Is it possible to customize the dashboard layout?
                                                            </Accordion.Header>
                                                                <Accordion.Body>
                                                                    Yes, you can customize the dashboard layout. Use the "Dashboard Settings" to add or remove widgets, resize them, and arrange them according to your preferences.
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="third">
                                                            <Accordion.Header id="headingcustomicon2TwentyThree">
                                                                    3. Can I set a default landing page for users after login?
                                                            </Accordion.Header>
                                                                <Accordion.Body>
                                                                    Yes, you can set a default landing page. In the "User Settings" or "General Settings," find the option to specify the default page users will see upon login.
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="fourth">
                                                            <Accordion.Header id="headingcustomicon2TwentyFour">
                                                                    4. How do I enable or disable email notifications for certain events?
                                                            </Accordion.Header>
                                                                <Accordion.Body>
                                                                    Configure email notification settings in the "Notification Center" or "Email Settings" section. Specify the events for which you want to receive notifications.
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="fifth">
                                                            <Accordion.Header id="headingcustomicon2TwentyFive">
                                                                    5. Is there a search feature available to quickly find specific data or settings?
                                                            </Accordion.Header>
                                                                <Accordion.Body>
                                                                    Yes, a search feature is available. Look for the search bar in the header or navigation menu. Enter keywords to quickly locate specific data, settings, or pages.
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="sixth" className="border-0 p-0" id="troubleshooting"
                                                    role="tabpanel">
                                                    <Accordion defaultActiveKey="first" className="accordion accordion-customicon1 faq-accordion accordion-primary accordions-items-seperate" id="accordionFAQ6">
                                                        <Accordion.Item eventKey="first">
                                                            <Accordion.Header id="headingcustomicon2TwentySix">
                                                                    1. What should I do if the admin template is not loading correctly?
                                                            </Accordion.Header>
                                                                <Accordion.Body>
                                                                    If you encounter loading issues, try clearing your browser cache or accessing the admin template in an incognito/private browsing window. If the problem persists, check the browser compatibility in the documentation.
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="second">
                                                            <Accordion.Header id="headingcustomicon2TwentySeven">
                                                                    2. How can I report a bug or technical issue with the admin template?
                                                            </Accordion.Header>
                                                                <Accordion.Body>
                                                                    Report bugs through the "Support" or "Feedback" section. Provide detailed information about the issue, including your browser version and steps to reproduce the problem.
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="third">
                                                            <Accordion.Header id="headingcustomicon2TwentyEight">
                                                                    3. Are there known compatibility issues with certain browsers or devices?
                                                            </Accordion.Header>
                                                                <Accordion.Body>
                                                                    Check the documentation for any known compatibility issues. Ensure you are using the latest browser versions, and report any issues to the support team.
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="fourth">
                                                            <Accordion.Header id="headingcustomicon2TwentyNine">
                                                                    4. What do I do if I forget my username or encounter issues with login?
                                                            </Accordion.Header>
                                                                <Accordion.Body>
                                                                    If you forget your username, use the "Forgot Username" link on the login page. If login issues persist, contact your system administrator or support for assistance.
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="fifth">
                                                            <Accordion.Header id="headingcustomicon2Thirty">
                                                                    5. How do I check for updates and apply patches to fix issues?
                                                            </Accordion.Header>
                                                                <Accordion.Body>
                                                                    Visit the "Updates" section to check for the latest version. If updates are available, follow the prompts to apply patches. This can resolve known issues and enhance system stability.
                                                                </Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Card.Body>
                                    </Card>
                                    <Col xl={12}>
                                        <div className="card custom-card bg-primary-transparent border-0 shadow-none">
                                            <div className="card-body p-4">
                                                <div className="d-flex flex-wrap gap-3 align-items-center justify-content-between">
                                                    <div>
                                                        <h5 className="fw-semibold mb-2">Still Have questions</h5>
                                                        <span className="d-block fs-12 lh-1 fw-medium text-muted">You can post your questions here and our support team is always active</span>
                                                    </div>
                                                    <button className="btn btn-wave btn-secondary" data-bs-toggle="modal" data-bs-target="#contactus-modal">Contact US<i className="ti ti-arrow-narrow-right ms-2"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Col>
                            </Row>
                        </Col>               
                    </Tab.Container>
                </Row>
                {/* End:: row-2 */}
</Fragment>
);
};

export default Faqs;