import { Container, Row } from "react-bootstrap"
import CarouselComponent from "../Components/CarouselComponent"
import CategoryCardComponent from "../Components/CategoryCardComponent"

export default function Homepage () {
    const categories =[
        "books",
        "tablets",
        "cameras",
        "Mobiles",
        "Articles",
        "accessories"
    ]
    return (
        <>
        <CarouselComponent />
        <Container>
          <Row xs={1} md={2} className="g-4 mt-5">
            {
              categories.map((category, idx) => <CategoryCardComponent 
                                                    key={idx} 
                                                    category={category} 
                                                    index={idx}/>)
            }
          </Row>
        </Container>
        </>
    )
}