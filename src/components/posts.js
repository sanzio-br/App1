import axios from "axios"
import { useState } from "react";
import { Card } from "react-bootstrap";
export default function Posts() {
    const [post, setPost] = useState([])
    const Url = "https://jsonplaceholder.typicode.com/posts"
    axios.get(Url).then((res) => {
        setPost(res.data)
    })
    return (
        <div className="container mt-5">
            <div className="row">
                {
                    post.map(({ id, title, body }) => {
                        return (
                            <div className="col-md-4">
                                <Card style={{ width: '18rem' }} key={id}>
                                    <Card.Img variant="top" src="https://image.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-260nw-1029506242.jpg" />
                                    <Card.Body>
                                        <Card.Title>{title}</Card.Title>
                                        <Card.Text>{body}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}