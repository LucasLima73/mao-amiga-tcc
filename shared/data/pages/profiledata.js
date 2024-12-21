import { Fragment, useState } from "react";
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Link from "next/link";
import { Col, Row } from "react-bootstrap";


export const ProfileGallery = () => {

    const [open, setOpen] = useState(false);
    const value = true;
    const div = value.toString(); // Convert the value to a string
    return (
        <Fragment>
             <Row>
            <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
                <Link scroll={false}  href="#!" className="glightbox card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                    <img src="../../assets/images/media/media-40.jpg" alt="image" />
                </Link>
            </Col>
            <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
                <Link scroll={false}  href="#!" className="glightbox card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                    <img src="../../assets/images/media/media-41.jpg" alt="image" />
                </Link>
            </Col>
            <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
                <Link scroll={false}  href="#!" className="glightbox card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                    <img src="../../assets/images/media/media-42.jpg" alt="image" />
                </Link>
            </Col>
            <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
                <Link scroll={false}  href="#!" className="glightbox card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                    <img src="../../assets/images/media/media-43.jpg" alt="image" />
                </Link>
            </Col>
            <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
                <Link scroll={false}  href="#!" className="glightbox card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                    <img src="../../assets/images/media/media-44.jpg" alt="image" />
                </Link>
            </Col>
            <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
                <Link scroll={false}  href="#!" className="glightbox card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                    <img src="../../assets/images/media/media-45.jpg" alt="image" />
                </Link>
            </Col>
            <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
                <Link scroll={false}  href="#!" className="glightbox card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                    <img src="../../assets/images/media/media-46.jpg" alt="image" />
                </Link>
            </Col>
            <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
                <Link scroll={false}  href="#!" className="glightbox card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                    <img src="../../assets/images/media/media-60.jpg" alt="image" />
                </Link>
            </Col>
            <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
                <Link scroll={false}  href="#!" className="glightbox card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                    <img src="../../assets/images/media/media-26.jpg" alt="image" />
                </Link>
            </Col>
            <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
                <Link scroll={false}  href="#!" className="glightbox card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                    <img src="../../assets/images/media/media-32.jpg" alt="image" />
                </Link>
            </Col>
            <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
                <Link scroll={false}  href="#!" className="glightbox card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                    <img src="../../assets/images/media/media-30.jpg" alt="image" />
                </Link>
            </Col>
            <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
                <Link scroll={false}  href="#!" className="glightbox card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                    <img src="../../assets/images/media/media-31.jpg" alt="image" />
                </Link>
            </Col>
            <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
                <Link scroll={false}  href="#!" className="glightbox card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                    <img src="../../assets/images/media/media-46.jpg" alt="image" />
                </Link>
            </Col>
            <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
                <Link scroll={false}  href="#!" className="glightbox card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                    <img src="../../assets/images/media/media-59.jpg" alt="image" />
                </Link>
            </Col>
            <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
                <Link scroll={false}  href="#!" className="glightbox card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                    <img src="../../assets/images/media/media-61.jpg" alt="image" />
                </Link>
            </Col>
            <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
                <Link scroll={false}  href="#!" className="glightbox card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                    <img src="../../assets/images/media/media-42.jpg" alt="image" />
                </Link>
            </Col>
        </Row>
  

            <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]} zoom={{
                maxZoomPixelRatio: 10,
                scrollToZoom: true
            }}
            slides={[{ src: "../../assets/images/media/media-40.jpg" }, { src: "../../assets/images/media/media-41.jpg" }, { src: "../../assets/images/media/media-42.jpg" }, 
                { src: "../../assets/images/media/media-43.jpg" }, { src: "../../assets/images/media/media-44.jpg" }, { src: "../../assets/images/media/media-45.jpg" },
                 { src: "../../assets/images/media/media-46.jpg" },{ src: "../../assets/images/media/media-60.jpg" }, { src: "../../assets/images/media/media-26.jpg" },
                 { src: "../../assets/images/media/media-32.jpg" }, { src: "../../assets/images/media/media-30.jpg" } ,{ src: "../../assets/images/media/media-31.jpg" } ,
                 { src: "../../assets/images/media/media-46.jpg" },{ src: "../../assets/images/media/media-59.jpg" },{ src: "../../assets/images/media/media-61.jpg" },
                 { src: "../../assets/images/media/media-42.jpg" }
           
            ]}/>

        </Fragment>
    );
};

export const projectsdata =[
{id:1, src:"../../assets/images/faces/2.jpg", name:'Samantha May', mail:'samanthamay2912@gmail.com', role:'Team Member', color:'info' },
{id:2, src:"../../assets/images/faces/15.jpg", name:'Andrew Garfield', mail:'andrewgarfield98@gmail.com', role:'Team Lead', color:'success'  },
{id:3, src:"../../assets/images/faces/5.jpg", name:'Jessica Cashew', mail:'jessicacashew143@gmail.com', role:'Team Member', color:'info'},
{id:4, src:"../../assets/images/faces/11.jpg", name:'Simon Cowan', mail:'jessicacashew143@gmail.com', role:'Team Manager', color:'warning'},
{id:5, src:"../../assets/images/faces/7.jpg", name:'Amanda nunes', mail:'amandanunes45@gmail.com', role:'Team Member', color:'info'},
{id:6, src:"../../assets/images/faces/12.jpg", name:'Mahira Hose', mail:'mahirahose9456@gmail.com', role:'Team Member', color:'info'},
]


export const Languagedata=[
    {value:'Arabic', label:'Arabic'},
    {value:'Korean', label:'Korean'},
    {value:'Us English', label:'Us English'},
    {value:'Hindi', label:'Hindi'},
  
];

//Selectdata

export const Timezonedata=[
   {value:"(GMT-11:00) Midway Island, Samoa" , label:' (GMT-11:00) Midway Island, Samoa '},
   {value:"(GMT-10:00) Hawaii-Aleutian" , label:' (GMT-10:00) Hawaii-Aleutian '},
   {value:"(GMT-10:00) Hawaii" , label:' (GMT-10:00) Hawaii '},
   {value:"(GMT-09:30) Marquesas Islands" , label:' (GMT-09:30) Marquesas Islands '},
   {value:"(GMT-09:00) Gambier Islands" , label:' (GMT-09:00) Gambier Islands '},
   {value:"(GMT-09:00) Alaska" , label:' (GMT-09:00) Alaska '},
   {value:"(GMT-08:00) Tijuana, Baja California" , label:' (GMT-08:00) Tijuana, Baja California '},
   {value:" (GMT-08:00) Pitcairn Islands" , label:' (GMT-08:00) Pitcairn Islands '},
   {value:"(GMT-08:00) Pacific Time (US &amp; Canada)" , label:'(GMT-08:00) Pacific Time (US &amp; Canada) '},
   {value:"(GMT-07:00) Mountain Time (US &amp; Canada)" , label:' (GMT-07:00) Mountain Time (US &amp; Canada) '},
   {value:"(GMT-07:00) Chihuahua, La Paz, Mazatlan" , label:' (GMT-07:00) Chihuahua, La Paz, Mazatlan '},
   {value:"(GMT-07:00) Arizona" , label:'(GMT-07:00) Arizona '},
   {value:"(GMT-06:00) Saskatchewan, Central America" , label:' (GMT-06:00) Saskatchewan, Central America '},
   {value:"(GMT-06:00) Guadalajara, Mexico City, Monterrey" , label:' (GMT-06:00) Guadalajara, Mexico City, Monterrey  '},
   {value:"Chile/EasterIsland" , label:' (GMT-06:00) Easter Island '},
   {value:"(GMT-06:00) Easter Island" , label:' (GMT-06:00) Central Time (US &amp; Canada) '},
   {value:"(GMT-05:00) Eastern Time (US &amp; Canada)" , label:' (GMT-05:00) Eastern Time (US &amp; Canada) '},
   {value:"(GMT-05:00) Cuba" , label:' (GMT-05:00) Cuba '},
   {value:"(GMT-05:00) Bogota, Lima, Quito, Rio Branco" , label:' (GMT-05:00) Bogota, Lima, Quito, Rio Branco '},
   {value:"(GMT-04:30) Caracas" , label:' (GMT-04:30) Caracas '},
   {value:"(GMT-04:00) Santiago" , label:' (GMT-04:00) Santiago '},
   {value:"(GMT-04:00) La Paz" , label:' (GMT-04:00) La Paz '},
   {value:"(GMT-04:00) Faukland Islands" , label:' (GMT-04:00) Faukland Islands '},
   {value:"(GMT-04:00) Brazil" , label:'(GMT-04:00) Brazil '},
   {value:"America/Goose_Bay" , label:' (GMT-04:00) Atlantic Time (Goose Bay) '},
   {value:"(GMT-04:00) Atlantic Time (Goose Bay)" , label:' (GMT-04:00) Atlantic Time (Canada) '},
   {value:"(GMT-03:30) Newfoundland" , label:' (GMT-03:30) Newfoundland '},
   {value:"(GMT-03:00) UTC-3 " , label:' (GMT-03:00) UTC-3 '},
   {value:"(GMT-03:00) Montevideo" , label:' (GMT-03:00) Montevideo '},
   {value:"(GMT-03:00) Miquelon, St. Pierre" , label:' (GMT-03:00) Miquelon, St. Pierre '},
   {value:"(GMT-03:00) Greenland " , label:' (GMT-03:00) Greenland '},
   {value:"(GMT-03:00) Buenos Aires" , label:'(GMT-03:00) Buenos Aires'},
   {value:"(GMT-03:00) Brasilia" , label:' (GMT-03:00) Brasilia '},
   {value:"(GMT-02:00) Mid-Atlantic " , label:' (GMT-02:00) Mid-Atlantic '},
   {value:"(GMT-01:00) Cape Verde Is." , label:'(GMT-01:00) Cape Verde Is.'},
   {value:"(GMT-01:00) Azores" , label:' (GMT-01:00) Azores '},
   {value:"(GMT) Greenwich Mean Time : Belfast" , label:' (GMT) Greenwich Mean Time : Belfast '},
   {value:"(GMT) Greenwich Mean Time : Dublin " , label:'(GMT) Greenwich Mean Time : Dublin '},
   {value:"(GMT) Greenwich Mean Time : Lisbon" , label:'(GMT) Greenwich Mean Time : Lisbon '},
   {value:"(GMT) Greenwich Mean Time : London" , label:'(GMT) Greenwich Mean Time : London '},
   {value:"(GMT) Monrovia, Reykjavik" , label:' (GMT) Monrovia, Reykjavik '},
   {value:"(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna" , label:' (GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna '},
   {value:"(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague" , label:' (GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague '},
   {value:"(GMT+01:00) Brussels, Copenhagen, Madrid, Paris" , label:' (GMT+01:00) Brussels, Copenhagen, Madrid, Paris  '},
   {value:"(GMT+01:00) West Central Africa" , label:' (GMT+01:00) West Central Africa '},
   {value:"(GMT+01:00) Windhoek" , label:' (GMT+01:00) Windhoek '},
   {value:"(GMT+02:00) Beirut" , label:' (GMT+02:00) Beirut '},
   {value:"(GMT+02:00) Cairo" , label:' (GMT+02:00) Cairo '},
   {value:"(GMT+02:00) Gaza" , label:' (GMT+02:00) Gaza '},
   {value:"(GMT+02:00) Harare, Pretoria" , label:' (GMT+02:00) Harare, Pretoria '},
   {value:"(GMT+02:00) Jerusalem" , label:' (GMT+02:00) Jerusalem '},
   {value:"(GMT+02:00) Minsk" , label:' (GMT+02:00) Minsk '},
   {value:"(GMT+02:00) Syria" , label:' (GMT+02:00) Syria '},
   {value:"(GMT+03:00) Moscow, St. Petersburg, Volgograd" , label:' (GMT+03:00) Moscow, St. Petersburg, Volgograd  '},
   {value:"(GMT+03:00) Nairobi" , label:' (GMT+03:00) Nairobi '},
   {value:"(GMT+03:30) Tehran " , label:' (GMT+03:30) Tehran '},
   {value:"(GMT+04:00) Abu Dhabi, Muscat" , label:' (GMT+04:00) Abu Dhabi, Muscat '},
   {value:"(GMT+04:00) Yerevan" , label:' (GMT+04:00) Yerevan '},
   {value:"(GMT+04:30) Kabul" , label:' (GMT+04:30) Kabul '},
   {value:"(GMT+05:00) Ekaterinburg " , label:' (GMT+05:00) Ekaterinburg '},
   {value:"(GMT+05:00) Tashkent" , label:' (GMT+05:00) Tashkent '},
   {value:"(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi " , label:' (GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi  '},
   {value:"(GMT+05:45) Kathmandu " , label:' (GMT+05:45) Kathmandu '},
   {value:"(GMT+06:00) Astana, Dhaka " , label:' (GMT+06:00) Astana, Dhaka '},
   {value:"(GMT+06:00) Novosibirsk" , label:' (GMT+06:00) Novosibirsk '},
   {value:"(GMT+06:30) Yangon (Rangoon)" , label:' (GMT+06:30) Yangon (Rangoon) '},
   {value:"(GMT+07:00) Bangkok, Hanoi, Jakarta" , label:' (GMT+07:00) Bangkok, Hanoi, Jakarta '},
   {value:"(GMT+07:00) Krasnoyarsk " , label:' (GMT+07:00) Krasnoyarsk '},
   {value:"(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi" , label:' (GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi  '},
   {value:"(GMT+08:00) Irkutsk, Ulaan Bataar" , label:' (GMT+08:00) Irkutsk, Ulaan Bataar '},
   {value:"(GMT+08:00) Perth " , label:' (GMT+08:00) Perth '},
   {value:"(GMT+08:45) Eucla " , label:' (GMT+08:45) Eucla '},
   {value:"(GMT+09:00) Osaka, Sapporo, Tokyo" , label:' (GMT+09:00) Osaka, Sapporo, Tokyo '},
   {value:"(GMT+09:00) Seoul" , label:' (GMT+09:00) Seoul '},
   {value:"(GMT+09:00) Yakutsk" , label:' (GMT+09:00) Yakutsk '},
   {value:"(GMT+09:30) Adelaide" , label:' (GMT+09:30) Adelaide '},
   {value:"(GMT+09:30) Darwin" , label:' (GMT+09:30) Darwin '},
   {value:"(GMT+10:00) Brisbane" , label:' (GMT+10:00) Brisbane '},
   {value:"(GMT+10:00) Hobart " , label:' (GMT+10:00) Hobart '},
   {value:"(GMT+10:00) Vladivostok " , label:' (GMT+10:00) Vladivostok '},
   {value:"(GMT+10:30) Lord Howe Island " , label:'(GMT+10:30) Lord Howe Island  '},
   {value:"(GMT+11:00) Solomon Is., New Caledonia" , label:' (GMT+11:00) Solomon Is., New Caledonia '},
   {value:" (GMT+11:00) Magadan" , label:' (GMT+11:00) Magadan '},
   {value:"(GMT+11:30) Norfolk Island" , label:' (GMT+11:30) Norfolk Island '},
   {value:"(GMT+12:00) Anadyr, Kamchatka" , label:' (GMT+12:00) Anadyr, Kamchatka '},
   {value:"(GMT+12:00) Auckland, Wellington" , label:' (GMT+12:00) Auckland, Wellington'},
   {value:"(GMT+12:00) Fiji, Kamchatka, Marshall Is." , label:' (GMT+12:00) Fiji, Kamchatka, Marshall Is.'},
   {value:"(GMT+12:45) Chatham Islands" , label:' (GMT+12:45) Chatham Islands'},
   {value:"(GMT+13:00) Nuku alofa" , label:' (GMT+13:00) Nuku alofa'},
   {value:"(GMT+14:00) Kiritimati" , label:'(GMT+14:00) Kiritimati '}
]