"use client"
import nextConfig from "../next.config";
import { auth } from "../shared/firebase/firebaseapi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import { Alert, Button, Card, Col, Nav, Tab } from "react-bootstrap";
import { useForm } from "react-hook-form"

export default function Home() {
  
    const [passwordshow, setpasswordshow] = useState(false);
    const [passwordshow1, setpasswordshow1] = useState(false);

  const [err, setError] = useState("");
  const [data, setData] = useState({
    "email": "adminnextjs@gmail.com",
    "password": "1234567890",
  });
  const { email, password } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setError("");
  };
  const Login = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then(
      user => { console.log(user); RouteChange(); }).catch(err => { setError(err.message); });
  };


 let {basePath} = nextConfig;
  const router = useRouter();
  const RouteChange = () => {
    let path = "/dashboards/sales";
    router.push(path);
  };
  
  const {
    register,
    handleSubmit,
    formState: { errors }, 
    reset,
  } = useForm({
    defaultValues: {
      email: "adminnextjs@gmail.com",
      password: "1234567890"
    },
  });

  const onSubmit = (data) =>{
    // console.log(data)
    if(data.email == "adminnextjs@gmail.com" && data.password == "1234567890"){
        return RouteChange()
    }
    else{
        reset()
        setError("the auction details does not matched")
        // setValue("email", "adminnextjs@gmail.com")
        // setValue("password", "1234567890")
    }
  }
 
  return (
    <Fragment>
<html>
    <body className="authentication-background">
        <div className="container">
            <div className="row justify-content-center align-items-center authentication authentication-basic h-100">
                <Col xxl={4} xl={5} lg={5} md={6} sm={8} className="col-12">
                    <div className="my-5 d-flex justify-content-center"> 
                        <Link scroll={false} href="#!"> 
                            <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/brand-logos/desktop-dark.png`} alt="logo" className="desktop-dark"/> 
                        </Link> 
                    </div>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="nextjs">
                        <Card className="custom-card my-4">
                        <Nav variant="pills" className="justify-content-center authentication-tabs">
                        <Nav.Item>
                                    <Nav.Link eventKey="nextjs">
                                        <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/brand-logos/nextjs.png`}
                                        alt="logo" className="desktop-logo" />
                                    </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="firebase">
                                        <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/brand-logos/firebase.png`}
                                        alt="logo" />
                                    </Nav.Link>
                                    </Nav.Item>
                        </Nav>
                        <Tab.Content>
                        <Tab.Pane eventKey="nextjs" className='border-0'>
                                <Card.Body className="p-5 py-4">
                                <form
                                        onSubmit={handleSubmit((onSubmit))}
                                        >
                                <p className="h4 mb-2 fw-semibold">Sign In</p>
                                <p className="mb-4 text-muted fw-normal">Welcome back Jhon !</p>
                                <div className="row gy-3">
                                {err && <Alert variant="danger">{err}</Alert>}
                                    <Col xl={12}>
                                        <label htmlFor="signin-username" className="form-label text-default">Email</label>
                                        <input  type="text"  {...register("email" , {required :
                                            {
                                            value:true,
                                            message:'Email is required'
                                            },
                                            pattern:
                                            {
                                                value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,   
                                                message: "This input is pattern only."
                                            }
                                            
                                            })}  className="form-control" />
                                             {errors.email && <p className="mt-2 text-danger">{errors.email?.message} </p>}
                                    </Col>
                                    <Col xl={12} className="mb-2">
                                        <label htmlFor="signin-password" className="form-label text-default d-block">Password<Link scroll={false} href="/authentication/resetpassword/reset-basic" className="float-end  link-danger op-5 fw-medium fs-12">Forget password ?</Link></label>
                                        <div className="position-relative">
                                        <input type={(passwordshow) ? 'text' : "password"}
                                                                {...register("password", {
                                                                    required:
                                                                    {
                                                                        value: true,
                                                                        message: 'Password is required'
                                                                    },
                                                                    maxLength: {
                                                                        value: 10,
                                                                        message: "This input must exceed 10 characters"
                                                                    }
                                                                })} className="form-control"
                                                            />
                                                            <Link href="#!" className="show-password-button text-muted"
                                                                onClick={() => setpasswordshow(!passwordshow)}
                                                                id="button-addon2"><i className={`${passwordshow ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></Link>
                                        </div>
                                        {errors.password && <p className="mt-2 text-danger">{errors.password?.message}</p>}
                                        <div className="mt-2">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="defaultCheck1"/>
                                                <label className="form-check-label text-muted fw-normal fs-12" htmlFor="defaultCheck1">
                                                    Remember password ?
                                                </label>
                                            </div>
                                        </div>
                                    </Col>
                                </div>
                                <div className="text-center my-3 authentication-barrier">
                                    <span className="fs-11">OR SignIn With</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between gap-3 mb-3 flex-wrap flex-xl-nowrap">
                                    <Button variant="" className="btn btn-light btn-w-lg border d-flex align-items-center justify-content-center flex-fill">
                                        <span className="avatar avatar-xs">
                                            <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/media/apps/google.png`} alt=""/>
                                        </span>
                                        <span className="lh-1 ms-2 fs-13 text-default fw-medium">Google</span>
                                    </Button>
                                    <Button variant="" className="btn btn-light btn-w-lg border d-flex align-items-center justify-content-center flex-fill">
                                        <span className="avatar avatar-xs">
                                            <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/media/apps/facebook.png`} alt=""/>
                                        </span>
                                        <span className="lh-1 ms-2 fs-13 text-default fw-medium">Facebook</span>
                                    </Button>
                                </div>
                                <div className="d-grid mt-4">
                                    <input type="submit" defaultValue="Sign In"  className="btn btn-primary" />
                                </div>
                                <div className="text-center">
                                    <p className="text-muted mt-3 mb-0">Dont have an account? <Link scroll={false} href="/authentication/signup/signup-basic/" className="text-primary">Sign Up</Link></p>
                                </div>
                                </form>
                                </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="firebase" className='border-0'>
                            <Card.Body className="p-5 py-4">
                                <p className="h4 mb-2 fw-semibold">Sign In</p>
                                <p className="mb-4 text-muted fw-normal">Welcome back Jhon !</p>
                                {err && <Alert variant="danger">{err}</Alert>}
                                <div className="row gy-3">
                                    <Col xl={12}>
                                        <label htmlFor="signin-username" className="form-label text-default">User Name</label>
                                        <input type="text" className="form-control" id="signin-username" placeholder="user name" name="email"
                                                            value={email}
                                                            onChange={changeHandler}
                                                            required   />
                                    </Col>
                                    <Col xl={12} className="mb-2">
                                        <label htmlFor="signin-password" className="form-label text-default d-block">Password<Link scroll={false} href="/authentication/resetpassword/reset-basic" className="float-end  link-danger op-5 fw-medium fs-12">Forget password ?</Link></label>
                                        <div className="position-relative">
                                        <input className="form-control" id="signin-password" placeholder="password" name="password"
                                                            type={(passwordshow1) ? "text" : "password"}
                                                            value={password}
                                                            onChange={changeHandler}
                                                            required />
                                                        <Link href="#!" className="show-password-button text-muted"
                                                            onClick={() => setpasswordshow1(!passwordshow1)}
                                                            id="button-addon2"><i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></Link>
                                        </div>
                                        <div className="mt-2">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="defaultCheck1"/>
                                                <label className="form-check-label text-muted fw-normal fs-12" htmlFor="defaultCheck1">
                                                    Remember password ?
                                                </label>
                                            </div>
                                        </div>
                                    </Col>
                                </div>
                                <div className="text-center my-3 authentication-barrier">
                                    <span className="fs-11">OR SignIn With</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between gap-3 mb-3 flex-wrap flex-xl-nowrap">
                                    <Button variant="" className="btn btn-light btn-w-lg border d-flex align-items-center justify-content-center flex-fill">
                                        <span className="avatar avatar-xs">
                                            <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/media/apps/google.png`} alt=""/>
                                        </span>
                                        <span className="lh-1 ms-2 fs-13 text-default fw-medium">Google</span>
                                    </Button>
                                    <Button variant="" className="btn btn-light btn-w-lg border d-flex align-items-center justify-content-center flex-fill">
                                        <span className="avatar avatar-xs">
                                            <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/media/apps/facebook.png`} alt=""/>
                                        </span>
                                        <span className="lh-1 ms-2 fs-13 text-default fw-medium">Facebook</span>
                                    </Button>
                                </div>
                                <div className="d-grid mt-4">
                                    <Link scroll={false} href="#!" className="btn btn-primary" onClick={Login}>Sign In</Link>
                                </div>
                                <div className="text-center">
                                    <p className="text-muted mt-3 mb-0">Dont have an account? <Link scroll={false} href="/authentication/signup/signup-basic/" className="text-primary">Sign Up</Link></p>
                                </div>
                            </Card.Body>
                        </Tab.Pane>
                        </Tab.Content>
                        </Card>
                    </Tab.Container>
                </Col>
            </div>
        </div>
    </body>
</html>
    </Fragment>
  );
}
