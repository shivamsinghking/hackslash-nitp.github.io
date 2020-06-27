import React from 'react';
import { Link } from "gatsby";
import Layout from '../components/layout'
import bg1 from '../assets/images/about_us/about-bg-1.svg';
import bg2 from '../assets/images/about_us/about-bg-2.svg';
import bg4 from '../assets/images/about_us/about-bg-4.svg';
import contribution from '../assets/images/hall/contribution.svg';
import githubIcon from '../assets/images/hall/githubIcon.svg';
import linkedIn from '../assets/images/about_us/about-ic-linkedin.svg';
import insta from '../assets/images/about_us/about-ic-insta.svg';
import gitter from '../assets/images/about_us/about-ic-gitter.svg';
import facebook from '../assets/images/about_us/about-ic-facebook.svg';
import twitter from '../assets/images/about_us/about-ic-twitter.svg';
import mail from '../assets/images/about_us/about-ic-mail.svg';
import linkedinIcon from '../assets/images/hall/linkedinIcon.svg';
import dribble from '../assets/images/about_us/card-link-dribbble.svg';
import meadium from '../assets/images/about_us/card-link-medium.svg';

import {Col, Container, Row,Form,Button,Image} from "react-bootstrap";
import '../assets/scss/About.scss';


 const about= ()=> {

  const state = {
    leads: [
        {
            name: 'Tushar Anand',
            role: 'President',
            imageURL: 'https://avatars2.githubusercontent.com/u/34808961?s=400&u=5ec82d4c8670ebe14eae0038deeb7778347ce896&v=4',
            description: 'A well establish security researcher, currently a data security intern at OYO, he played a crucial role in setting up the club.',
            githubURL: 'https://github.com/anandtushar111',
            linkedinURL: 'https://www.linkedin.com/in/anandtushar111/'
        },
        {
            name: 'Saurabh Jha',
            role: 'Vice-President',
            imageURL: 'https://media-exp1.licdn.com/dms/image/C5103AQHP4D5-pFA3kQ/profile-displayphoto-shrink_200_200/0?e=1594252800&v=beta&t=rznoZ9GPSNzbl7Edm-F1DoDz3YMyfdlTfFUVlVB50WY',
            description: 'An expert web developer, and an active competitive programmer, and a machine learning enthusiast',
            githubURL: 'https://github.com/jhasaurabh312',
            linkedinURL: 'https://www.linkedin.com/in/saurabh-kumar-jha-358293150/'
        },
        {
            name: 'Insha Nadeem',
            role: 'Treasurer',
            imageURL: 'https://media-exp1.licdn.com/dms/image/C5603AQEStFGDnmQPFg/profile-displayphoto-shrink_200_200/0?e=1594252800&v=beta&t=RiP3vjshmG2D28rhlTrhSTT_FYGK_Ur6pAHXPCkuzjk',
            description: 'An excellent orator and a wonderful mentor. She helped organize and host all of the club\'s meetups. ',
            githubURL: '',
            linkedinURL: 'https://www.linkedin.com/in/inshanadeem/'
        },
        {
          name: 'Insha Nadeem',
          role: 'Treasurer',
          imageURL: 'https://media-exp1.licdn.com/dms/image/C5603AQEStFGDnmQPFg/profile-displayphoto-shrink_200_200/0?e=1594252800&v=beta&t=RiP3vjshmG2D28rhlTrhSTT_FYGK_Ur6pAHXPCkuzjk',
          description: 'An excellent orator and a wonderful mentor. She helped organize and host all of the club\'s meetups. ',
          githubURL: '',
          linkedinURL: 'https://www.linkedin.com/in/inshanadeem/'
      },
      {
        name: 'Insha Nadeem',
        role: 'Treasurer',
        imageURL: 'https://media-exp1.licdn.com/dms/image/C5603AQEStFGDnmQPFg/profile-displayphoto-shrink_200_200/0?e=1594252800&v=beta&t=RiP3vjshmG2D28rhlTrhSTT_FYGK_Ur6pAHXPCkuzjk',
        description: 'An excellent orator and a wonderful mentor. She helped organize and host all of the club\'s meetups. ',
        githubURL: '',
        linkedinURL: 'https://www.linkedin.com/in/inshanadeem/'
    }
    ]
  }
  return (
  <Layout>
  <Container className="upperhalf" fluid ={true} style={{marginLeft:'2vw'}}>
    <Row className="heading_1"><h1>About Us</h1></Row>
    <Row className="about_us_row"> 
    <Col xl={6} lg={6} md={6} className="paragraph">Vel magna est, quis elit a eget congue. Diam lobortis turpis sed sagittis, dui.
     Nisl, velit pellentesque quam eu at aliquet massa.Vel magna est, quis elit a eget congue. Diam lobortis turpis sed sagittis, dui. 
     Nisl, velit pellentesque quam eu at aliquet massa.Vel magna est, quis elit a eget congue. Diam lobortis turpis sed sagittis, dui.
     Gravida lectus velit scelerisque fermentum. Lectus dignissim enim justo, neque viverra bibendu</Col>
    <Col  xl={6} lg={6} md={6} className="bg1" style={{}}>
      <img className="people_img" src={bg1} alt="bg" style={{marginTop:-24, width:'35vw',float:'right'}} fluid/>
    </Col>
    </Row>
  </Container>
  {/* // second HALF */}
  <Container className="upperhalf" fluid ={true} style={{marginLeft:'2vw',marginTop:'4vh',marginBottom:'4vh'}}>
    
    <Row className="about_us_row"> 
    <Col  xl={6} lg={6} md={6} className="bg1" style={{}}>
      <img className="people_img" src={bg2} alt="bg" style={{marginTop:0, width:'30vw',float:'left'}} fluid/>
    </Col>
    <Col xl={6} lg={6} md={6} className="paragraph" style={{paddingRight:40}}>
     <h1>Our Story</h1><br />
     Vel magna est, quis elit a eget congue. Diam lobortis turpis sed sagittis, dui.
     Nisl, velit pellentesque quam eu at aliquet massa.Vel magna est, quis elit a eget congue. Diam lobortis turpis sed sagittis, dui. 
     Nisl, velit pellentesque quam eu at aliquet massa.Vel magna est, quis elit a eget congue. Diam lobortis turpis sed sagittis, dui.
     Gravida lectus velit scelerisque fermentum. Lectus dignissim enim justo, neque viverra bibendu</Col>
    </Row>
  </Container>
  <Container className="heading_Meet">
    <Row className="justify-content-center"><h1>Meet The Team</h1></Row>
  </Container>

  {/* cards of meet member */}
  <Container className="cards">
    <Row className="cards_row">
      {state.leads.map((member) => <MemberCard data={member} />)}
    </Row>
  </Container>
  <Container className="heading_Meet">
    <Row className="justify-content-center" style={{color:'skyblue'}}><h1>Contact Us</h1></Row>
  </Container>
  {/* //contact form */}
  {/* // here flex-direction : column was not working so i had use rows and col */}
  <div className="contact" style={{position:'relative'}}> 
  <form class="form-inline" action="/action_page.php">
  <Col>
 <Row xl={12} lg={12} md={12}> <input type="email"  placeholder="Email" name="email" /></Row>
 <Row><input type="password" id="pwd" placeholder="Enter password" name="pswd" /></Row>
 <Row> <input type="textArea" id="pwd" placeholder="Tell us about yourself" name="txt" /></Row>

<Button type="submit" className="primary" >Send</Button> 
  </Col>
</form>
  </div>

  {/* bottom_last_part  */}
 <div className="footer" style={{marginTop:'-3vh',zIndex:-8,position:'absolute'}}>
   <Image src={bg4} style={{zIndex:-4,position:'relative'}} fluid/>
   <div className="links" style={{marginTop:'-12vh',position:'absolute',backgroundColor:'',display:'flex',flexDirection:'column'}}>
     <div className="follow_txt">Follow us on</div>
     <div style={{display:'flex',flexDirection:'row',marginBottom:''}}>
     <Link to="#" className="link_tags">
       <Image src={githubIcon} fluid/>
     </Link>
     <Link to="#" className="link_tags">
       <Image src={linkedIn} fluid/>
     </Link>
     <Link to="#" className="link_tags">
       <Image src={insta} fluid/>
     </Link>
     <Link to="#" className="link_tags">
       <Image src={twitter} fluid/>
     </Link>
     <Link to="#" className="link_tags">
       <Image src={gitter} fluid/>
     </Link>
     <Link to="#" className="link_tags">
       <Image src={mail} fluid/>
     </Link>
     <Link to="#" className="link_tags">
       <Image src={facebook}  fluid={true}/>
     </Link>
     <Link to="#" className="link_tags">
       <Image src={dribble}  fluid={true}/>
     </Link>
     <Link to="#" className="link_tags">
       <Image src={meadium}  fluid={true}/>
     </Link>

     </div>
   </div>
 </div>
  </Layout>
  )
}



const MemberCard = (props) => {
  return (
      <div className="hall-leads-section">
          <div className="mb-3 hall-leads-detail">
              <div className="hall-leads-upper-div">
                  <div className="hall-lead-name">
                      <p className="hall-lead-name-para">{props.data.name}</p>
                  </div>
                  <div className="hall-lead-skill">
                      <p className="hall-lead-skill-para">{props.data.role}</p>
                  </div>

              </div>
              <div className="hall-lead-image-div">
                  <img alt={''} className="hall-lead-image"
                       src={props.data.imageURL}/>
              </div>
              <div className="hall-leads-lower-div">
                  <div className="hall-contrib-div">
                      <img alt={''} className="hall-contrib-image"
                           src={contribution}/>
                  </div>
                  <div className="hall-contrib-text-div">
                      <div className="hall-enclosing-div"><p
                          className="hall-contrib-text-para">{props.data.description}</p>
                      </div>
                  </div>
                  <div className="row hall-media-icons-div">
                      <div><a href={props.data.githubURL}><img alt={''} className="hall-media-image"
                                                               src={githubIcon}/></a></div>
                      <div><a href={props.data.linkedinURL}><img alt={''} className="hall-media-image"
                                                                 src={linkedinIcon}/></a></div>
                      {/*<div><img alt={''} className="hall-media-image" src={dribbleIcon}/></div>*/}
                      {/*<div><a href={props.data.mediumURL}><img alt={''} className="hall-media-image" src={mediumIcon}/></div>*/}
                      {/*<div><a href={props.data.devURL}><img alt={''} className="hall-media-image" src={devIcon}/></div>*/}
                  </div>
              </div>
          </div>
      </div>
  
  );
}
export default about;