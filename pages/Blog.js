import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BlogBanner from "../component/BlogBanner";
import BlogContent from "../component/BlogContent";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar"

const Blog = () => {
    return(
        <>
          <Header />
        
         
            {/* banner section start */}
             <BlogBanner />
             {/* banner section end */}

             {/* Blog content section start  */}
             
            <BlogContent />
             {/* Blog content section end  */}

            
             <Footer/>


        </>
    )
}
export default Blog;