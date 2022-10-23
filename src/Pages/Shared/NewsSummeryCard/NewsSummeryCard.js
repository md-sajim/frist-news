import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaBookmark, FaEye, FaShareAlt, FaStar } from "react-icons/fa";

const NewsSummeryCard = ({ news }) => {
    const { author, details, image_url, total_view, _id, title,rating } = news;
    return (
        <Card className='mb-3'>
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                    <Image
                        className='me-2'
                        roundedCircle
                        src={author?.img}
                        style={{ height: "60px" }}
                    >
                    </Image>
                    <div>
                        <span className='mb-0'>{author?.name}</span>
                        <span className='mb-0'>{author?.published_date}</span>
                    </div>
                </div>
                <div>
                    <FaBookmark className='me-2' />
                    <FaShareAlt />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title className="text-center">{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length > 250 ?
                            <p>{details.slice(0, 250) + "..."}<Link to={`/news/${_id}`}>Read More</Link> </p> :
                            <p>{details}</p>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                    <FaStar className='text-warning' />
                    <span className='mb-0 ms-2'>{rating.number}</span>
                </div>
                <div className='d-flex align-items-center'>
                    <FaEye/>
                    <span className='mb-0 ms-2'>{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummeryCard;