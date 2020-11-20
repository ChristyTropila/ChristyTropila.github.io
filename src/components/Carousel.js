import React from 'react'
import spotpotpic from '../assets/images/spotpotpic.PNG'
import sweaterweatherpic from '../assets/images/sweaterweatherpic.PNG'
import profilepic from '../assets/images/profilepic.jpg'
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
                    imgSrc: spotpotpic,
                    link: 'https://youtu.be/JngmKP10AZs',
                    selected: false
                },
                {
                    id:1,
                    title: "Christy Tropila",
                    subTitle: "Blog site",
                    imgSrc: profilepic,
                    link: 'https://tropila04.medium.com',
                    selected: false
                },
                {
                    id: 2,
                    title: "Sweaterweather",
                    subTitle: "An autumn pinterest clone made with a Ruby on Rails backend and vanilla JS frontend",
                    imgSrc: sweaterweatherpic,
                    link: 'https://youtu.be/7n6ZczMmwVo',
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
        return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
    })
}


render(){
    return(
        <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
    )
}

}

export default Carousel