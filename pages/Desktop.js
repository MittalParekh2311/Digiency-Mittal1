import React from "react";
import DeskHeader from "../component/DeskHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import DeskFooter from "../component/DeskFooter";
import DeskBanner from "../component/DeskBanner";
import DeskOurservice from "../component/DeskOurservice";
import DeskAbout from "../component/DeskAbout";
import DeskCasestudy from "../component/DeskCasestudy";
import DeskTestimonial from "../component/DeskTestimonial";
import DeskCapabilites from "../component/DeskCapabiltes";
import DeskBlog from "../component/DeskBlog";
import DeskNewsletter from "../component/DeskNewsletter";

const Desktop = () =>{
    return(
        <>
            {/* Header section start  */}
            <DeskHeader />
            {/* Header section end  */}

             {/* Banner section start  */}
             <DeskBanner />
            {/* Banner section end  */}

            {/* Service section start  */}
                <DeskOurservice/>
             {/* Service section end  */}

            {/* About section start  */}
             <DeskAbout/>
             {/* About section end  */}
             
            {/* Casestudy section start  */}
               <DeskCasestudy/>
             {/* Casestudy section end  */}

            {/* Testimonial section start  */}

            <DeskTestimonial />
            {/* Testimonial section start  */}

            {/* Our Capabilites section start  */}
            <DeskCapabilites />

            {/* Our Capabilites section start  */}

            {/* OurBlog section start  */}
            <DeskBlog />
            {/* OurBlog section start  */}

            {/* Newsletter section start  */}

            <DeskNewsletter />
             {/* Newsletter section start  */}

            {/* Footeer section satrt  */}
                <DeskFooter/>
            {/* Footeer section end  */}

           
        </>
    )

}
export default Desktop;