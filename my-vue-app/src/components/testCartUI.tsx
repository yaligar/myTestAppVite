import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface Prodobj {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}
const TestCart = () => {

    const [data, setData] = useState<any>([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((value) => value.json())
            .then(val => setData((val)))
    }, [])
    console.log(data)
    return (

        data && data.map((item: any) => {
            return (
                <span style={{ alignItems: "center" }}>
                    <Card style={{ width: '18rem', height: "18rem" }}>
                        <Card.Img
                            variant="top"
                            src={item.image}
                            style={{ height: "180px", objectFit: "contain", padding: "10px" }}
                        />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                {item.description}
                            </Card.Text>
                            <Button variant="primary">ADD</Button>
                        </Card.Body>
                    </Card>
                </span>
            )

        })

    )
}
export default TestCart