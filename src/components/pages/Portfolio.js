import React from 'react'
import { Row } from 'react-bootstrap'
import reedy from '../../assets/img/reedyville.png'
import viral from '../../assets/img/viralhtmlpage.png'
import aros from '../../assets/img/aros.png'
import quizify from '../../assets/img/jsQuiz.png'
import reactApp from '../../assets/img/reactTheme.png'
import globalU from '../../assets/img/globalu.png'
import ultimate from '../../assets/img/ultimatepower.jpeg'
import adelsa from '../../assets/img/adelsa.png'
import carbud from '../../assets/img/carbuddys.png'
import crm from '../../assets/img/crmasp.png'
import cycle from '../../assets/img/cycleexchange.jpeg'
import logo from '../../assets/img/logo.png'
import gwstodo from '../../assets/img/gwstodo.png'
import note from '../../assets/img/note_man.png'
import { ImageViewer } from "react-image-viewer-dv"
import {Helmet} from "react-helmet"

function Portfolio(props) {
  return (
    <>
    <Helmet>
        <title>GWS : Porfolio</title>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="csrf_token" content="" />
        <meta property="type" content="website" />
        <meta property="og:image" content={logo} data-react-helmet="true"/>
        <meta property="og:image:secure_url" content={logo} data-react-helmet="true"/>
     </Helmet>
    <div className='container'>
      <br />
      <div className='work'>
          <div class="sec-title">
            <div class="title">GWS Portfolio</div>
            <p>This is not an extensive list, but a few of the projects that I have worked on in the past </p>
          </div>
        <Row>
          <div className='col-md-4'>
            <div className='portfolioCard'>
              <center>
                <ImageViewer>
                  <img src={gwstodo} alt="React ToDo App" />
                </ImageViewer>
              </center>
              <div className='portfolioCard-header'>
                Project 1 (React ToDo App)
              </div>
              <div className='portfolioCard-content'>
                This ToDo application is built with React from the front end and Firebase for the database. 
              </div>
              &nbsp;<a href='http://todo.gwsapp.net/' target="_blank" className='btn btn-success'>Demo</a>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='portfolioCard'>
            <center>
              <ImageViewer>
                <img src={note} alt="React Notes App"/>
              </ImageViewer>
            </center>
              <div className='portfolioCard-header'>
                Project 2 (React Notes App)
              </div>
              <div className='portfolioCard-content'>
                This ToDo application is built with React from the front end and Firebase for the database. 
              </div>
              &nbsp;<a href='http://notes.gwsapp.net/' target="_blank" className='btn btn-success'>Demo</a>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='portfolioCard'>
            <center>
              <ImageViewer>
                <img src={viral} alt="Viral Theme"/>
              </ImageViewer>
            </center>
              <div className='portfolioCard-header'>
                Project 3 (Viral Theme)
              </div>
              <div className='portfolioCard-content'>
                This is an HTML and JavaScript theme. Some of the basic tools that I have utilized
                for this theme is Visual Studio code, basic HTML and JS syntax. I have deployed this
                theme to Netlify so that you can interact with it to see if flow.
              </div>
              &nbsp;<a href='https://viralhtmltheme.netlify.app/' target="_blank" className='btn btn-success'>Demo</a>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='portfolioCard'>
              <center center>
                <ImageViewer>
                  <img src={aros} alt="Aros Theme"/>
                </ImageViewer>
              </center>
              <div className='portfolioCard-header'>
                Project 4 (Aros Theme)
              </div>
              <div className='portfolioCard-content'>
                This is an HTML and JavaScript theme. Some of the basic tools that I have utilized
                for this theme is Visual Studio code, basic HTML and JS syntax. I have deployed this
                theme to Netlify so that you can interact with it to see if flow.
              </div>
              &nbsp;<a href='https://aros-theme.netlify.app/index.html' target="_blank" className='btn btn-success'>Demo</a>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='portfolioCard'>
              <center>
                <ImageViewer>
                  <img src={quizify} alt="Quizlify JS App"/>
                </ImageViewer>
              </center>
              <div className='portfolioCard-header'>
                Project 5 (Quizify JS App)
              </div>
              <div className='portfolioCard-content'>
                A quiz taking application built with HTML5, CSS and JavaScript. Questions are provided by www.opendb.com.
              </div>
              &nbsp;<a href='https://quizlify.netlify.app/index.html' target="_blank" className='btn btn-success'>Demo</a>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='portfolioCard'>
            <center>
              <ImageViewer>
                <img src={globalU} alt="Global U Theme"/>
              </ImageViewer>
            </center>
              <div className='portfolioCard-header'>
                Project 6 (Global U)
              </div>
              <div className='portfolioCard-content'>
                This application was a theme built for WordPress. I needed to convert the
                Photoshop files to php to make this company’s dream come true.
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='portfolioCard'>
              <center center>
                <ImageViewer>
                  <img src={reactApp} />
                </ImageViewer>
              </center>
              <div className='portfolioCard-header'>
                Project 7 (React Portfolio App)
              </div>
              <div className='portfolioCard-content'>
                It all begins with an idea. This idea began to teach myself more about ReactJS as well as
                to host a static javascript website to Netlify. I also learned with this project how to
                deploy in continuous integration with Github to Netlify.
              </div>
              &nbsp;<a href='https://lucid-lewin-e9e4a3.netlify.app/' target="_blank" className='btn btn-success'>Demo</a>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='portfolioCard'>
              <center>
                <ImageViewer>
                  <img src={quizify} />
                </ImageViewer>
              </center>
              <div className='portfolioCard-header'>
                Project 8 (Quizify JS App)
              </div>
              <div className='portfolioCard-content'>
                A quiz taking application built with HTML5, CSS and JavaScript. Questions are provided by www.opendb.com.
              </div>
              &nbsp;<a href='https://quizlify.netlify.app/index.html' target="_blank" className='btn btn-success'>Demo</a>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='portfolioCard'>
            <center>
              <ImageViewer>
                <img src={ultimate} />
              </ImageViewer>
            </center>
              <div className='portfolioCard-header'>
                Project 9 (Ultimate Power Truck)
              </div>
              <div className='portfolioCard-content'>
                UI/UX Design built while at Wayne Reaves Software
                Backend was Ruby on Rails/ Frontend tech used was HTML, jQuery, CSS, Ractive
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='portfolioCard'>
              <ImageViewer>
                  <img src={adelsa} />
              </ImageViewer>
              <div className='portfolioCard-header'>
                Project 10 (Adelsa Auto)
              </div>
              <div className='portfolioCard-content'>
                UI/UX Design built while at Wayne Reaves Software
                Backend was Ruby on Rails/ Frontend tech used was HTML, jQuery, CSS, Ractive
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='portfolioCard'>
              <center>
                <ImageViewer>
                  <img src={crm} />
                </ImageViewer>
              </center>
              <div className='portfolioCard-header'>
                Project 11 (ASP.NET App)
              </div>
              <div className='portfolioCard-content'>
                A CRM app built in ASP.NET
                Backend was ASP.NET/ Frontend tech used was Razor, Vanilla JavaScript, CSS, HTML
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='portfolioCard'>
            <center>
              <ImageViewer>
                <img src={carbud} />
              </ImageViewer>
            </center>
              <div className='portfolioCard-header'>
                Project 12 (Car Buddys)
              </div>
              <div className='portfolioCard-content'>
                UI/UX Design built while at Wayne Reaves Software
                Backend was Ruby on Rails/ Frontend tech used was HTML, jQuery, CSS, Ractive
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='portfolioCard'>
            <center>
              <ImageViewer>
                <img src={reedy} alt="Reedville Goods Website" />
              </ImageViewer>
            </center>
              <div className='portfolioCard-header'>
                Project 13 (Reedyville Goods)
              </div>
              <div className='portfolioCard-content'>
                Garage Art Sales needed help with their administrative dashboard as well as their
                need for help with their ordering system used for drop shippers/wholesalers and
                other customers. The application uses PHP for the store and VUE.JS for the dashboard.
              </div>
              &nbsp;<a href='https://reedyvillegoods.com/' target="_blank" className='btn btn-success'>Demo</a>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='portfolioCard'>
            <ImageViewer>
                <img src={cycle} alt="Cycle Exchange" />
              </ImageViewer>
              <div className='portfolioCard-header'>
                Project 14 (Cycle Exchange)
              </div>
              <div className='portfolioCard-content'>
                UI/UX Design built while at Wayne Reaves Software
                Backend was Ruby on Rails/ Frontend tech used was HTML, jQuery, CSS, Ractive
              </div>
            </div>
          </div>
        </Row>
        <hr />
      </div>
    </div>
    </>
  )
}

export default Portfolio;