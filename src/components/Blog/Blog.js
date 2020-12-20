import React from 'react';
import BlogMainArea from '../BlogMainArea/BlogMainArea';
import HeroBlog from '../HeroBlog/HeroBlog';
import Navbar from '../Navbar/Navbar';
import FooterArea from '../FooterArea/FooterArea';
import './Blog.css';

const Blog = () => {
    return (
        <div>
            <Navbar />
            <HeroBlog />
            <BlogMainArea />
            <FooterArea />
        </div>
    );
};

export default Blog;