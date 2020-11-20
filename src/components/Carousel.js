import React from 'react'
import image1 from '../assets/images/image1.png'
import image3 from '../assets/images/image3.png'
import profilepic from '../assets/images/profilepic.jpg'
import image8 from '../assets/images/image8.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from '../components/Card'

class Carousel extends React.Component{

    constructor(props){
        super(props);
        this.state={
            items:[
                {
                    id: 0,
                    title: "spot-a-potty",
                    subTitle: "A bathroom hosting application with a Ruby on Rails backend and React.js frontend",
                    imgSrc: image1,
                    link: 'https://youtu.be/JngmKP10AZs',
                    selected: false
                },
                {
                    id:1,
                    title: "Christy Tropila",
                    subTitle: "Blog site",
                    link: 'https://tropila04.medium.com',
                    imgSrc: profilepic,
                    subTitle2: "Linkedin",
                    link2: 'https://www.linkedin.com/in/christytropila/',
                    selected: false
                },
                {
                    id: 2,
                    title: "Sweaterweather",
                    subTitle: "An autumn pinterest clone made with a Ruby on Rails backend and vanilla JS frontend",
                    imgSrc: image3,
                    link: 'https://youtu.be/7n6ZczMmwVo',
                    selected: false
                },
                {
                    id: 3,
                    title: "Trick or Treat",
                    subTitle: "A NYC themed triva game made with a Ruby on Rails backend and React Frontend",
                    imgSrc: image8,
                    link: 'https://youtu.be/pzvWNdjSlNU',
                    selected: false
                },

            ]
        }
    }

 handleCardClick=(id, card) =>{
  let items=[...this.state.items];
  items[id].selected=items[id].selected ? false : true

  items.forEach(item => {
      if(item.id !==id){
          item.selected= false;
      }
  })
  
  this.setState({
      items
  });
}

makeItems = (items) => {
    return items.map(item => {
        return <Card border="dark" className="p-8" item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
    })
}


render(){
    return(
        <Container fluid={true} >
                <Row xs={2} md={4} lg={6} className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
    )
}

}

export default Carousel