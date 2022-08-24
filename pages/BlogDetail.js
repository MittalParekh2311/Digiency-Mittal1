import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../component/Header";
import BlogDetailBanner from "../component/BlogDetailBanner";
import BlogDetailContent from "../component/BlogDetailContent";
import Footer from "../component/Footer";
import Blogcomment from "../component/BlogComment";

const BlogDetail = () => {
    return(
        <>

        <Header />
        <BlogDetailBanner />

        <BlogDetailContent />

        <Blogcomment />

        <Footer/>
        </>
    )

}
export default BlogDetail;