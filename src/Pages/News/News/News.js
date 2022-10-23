import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaBookmark, FaEye, FaShareAlt, FaStar } from "react-icons/fa";

const News = () => {
    const data = useLoaderData()
    console.log(data)
    const { author, category_id, details, image_url, total_view, _id, title, rating } = data;
    return (
        <Card>
            <Card.Img variant="top" className='rounded rounded-0' src={image_url} />
            <Card.Title className="text-center mt-3">{title}</Card.Title>
            <Card.Text className='d-flex justify-content-between align-items-center'>
                <span className='mb-0 ms-2'><strong>Author: </strong>{author?.name}</span>
                <span className='mb-0'><strong>Published Date: </strong>{author?.published_date}</span>

                <div className='d-flex align-items-center'>
                    <FaStar className='text-warning' />
                    <span className='mb-0 mx-2'>{rating.number}</span>
                </div>
            </Card.Text>
                <span className='mx-2'>{details}</span>
        </Card>
    );
};

export default News;