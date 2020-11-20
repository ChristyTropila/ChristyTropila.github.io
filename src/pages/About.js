import React from 'react'
import Content from '../components/Content'
import Hero from '../components/Hero'

function About(props){


    return(
      <div>
          <Hero title={props.title}/>
          <Content>
            <p>Small town girl who took a chance at the age of 27 to change my future. I packed up my bags and found an attic in Bedstuy off craigslist for $450 a month. </p>
            <p>  While living my fairy tale life up in that small attic, I graduated from a Java Bootcamp in 2019 and a JavaScript/Rails Bootcamp in 2020.</p>
             <p> I want to be part of something meaningful. I enjoy dark humour and craft beers. I love techno music, chicken wings, and outer space. </p>
               <p>If there is anyway I can make someone laugh or smile, I want in. I am currently looking for my first career in tech. </p> <p> While searching for a job, I will be spicing up my toolbox and studying deeper into frontend frameworks. I am diving into Redux and brushing up on my Ruby. I would love to eventually get into animation and virtual reality.
             </p> <p>   Please take a look at some of my projects and reach out to me with any opportunities.
            </p>
            <p>Thank you :)</p>
            <p>Christy</p>
              
          </Content>

      </div>
    );
}

export default About