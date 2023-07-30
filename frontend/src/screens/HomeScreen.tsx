import  {Row,Col} from 'react-bootstrap'

import products from '../products'


export const HomeScreen = () => {
  return (
    <><h1>Latest Products</h1>
    <Row>
      {products.map((item)=>{
        return <Col sm={12} md={6} lg={4}>
          <h3>{item.name}</h3>
        </Col>
      })}
    </Row>
    </>
  )
}
