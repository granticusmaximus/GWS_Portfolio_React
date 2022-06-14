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


function Projects(props) {
  return (
    <div className='container'>
      <br />
      <div className='work'>
        <center>
          <h1>Projects</h1>
        </center>
        <Row>
          <div className='col-md-4'>
            <div className='portfolioCard'>
              <center><img src={reedy} alt="Reedville Goods Website" /></center>
              <div className='portfolioCard-header'>
                Project 1 (Reedyville Goods)
              </div>
              <div className='portfolioCard-content'>
                Garage Art Sales needed help with their administrative dashboard as well as their
                need for help with their ordering system used for drop shippers/wholesalers and
                other customers. The application uses PHP for the store and VUE.JS for the dashboard.
              </div>
              <a href='https://reedyvillegoods.com/' target="_blank" className='btn btn-success'>Demo</a>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='portfolioCard'>
            <center><img src={viral} alt="Viral Theme"/></center>
              <div className='portfolioCard-header'>
                Project 2 (Viral Theme)
              </div>
              <div className='portfolioCard-content'>
                This is an HTML and JavaScript theme. Some of the basic tools that I have utilized
                for this theme is Visual Studio code, basic HTML and JS syntax. I have deployed this
                theme to Netlify so that you can interact with it to see if flow.
              </div>
              <a href='https://viralhtmltheme.netlify.app/' target="_blank" className='btn btn-success'>Demo</a>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='portfolioCard'>
              <center center><img src={aros} alt="Aros Theme"/></center>
              <div className='portfolioCard-header'>
                Project 3 (Aros Theme)
              </div>
              <div className='portfolioCard-content'>
                This is an HTML and JavaScript theme. Some of the basic tools that I have utilized
                for this theme is Visual Studio code, basic HTML and JS syntax. I have deployed this
                theme to Netlify so that you can interact with it to see if flow.
              </div>
              <a href='https://aros-theme.netlify.app/index.html' target="_blank" className='btn btn-success'>Demo</a>
            </div>
          </div>
        </Row>
        <Row>
          <div className='col-md-4'>
            <div className='portfolioCard'>
              <center><img src={quizify} alt="Quizlify JS App"/></center>
              <div className='portfolioCard-header'>
                Project 4 (Quizify JS App)
              </div>
              <div className='portfolioCard-content'>
                A quiz taking application built with HTML5, CSS and JavaScript. Questions are provided by www.opendb.com.
              </div>
              <a href='https://quizlify.netlify.app/index.html' target="_blank" className='btn btn-success'>Demo</a>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='portfolioCard'>
            <center><img src={globalU} alt="Global U Theme"/></center>
              <div className='portfolioCard-header'>
                Project 5 (Global U)
              </div>
              <div className='portfolioCard-content'>
                This application was a theme built for WordPress. I needed to convert the
                Photoshop files to php to make this company’s dream come true.
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='portfolioCard'>
              <center center><img src={reactApp} /></center>
              <div className='portfolioCard-header'>
                Project 6 (React App)
              </div>
              <div className='portfolioCard-content'>
                It all begins with an idea. This idea began to teach myself more about ReactJS as well as
                to host a static javascript website to Netlify. I also learned with this project how to
                deploy in continuous integration with Github to Netlify.
              </div>
              <a href='https://lucid-lewin-e9e4a3.netlify.app/' target="_blank" className='btn btn-success'>Demo</a>
            </div>
          </div>
        </Row>
        <Row>
          <div className='col-md-4'>
            <div className='portfolioCard'>
              <center><img src={quizify} /></center>
              <div className='portfolioCard-header'>
                Project 7 (Quizify JS App)
              </div>
              <div className='portfolioCard-content'>
                A quiz taking application built with HTML5, CSS and JavaScript. Questions are provided by www.opendb.com.
              </div>
              <a href='https://quizlify.netlify.app/index.html' target="_blank" className='btn btn-success'>Demo</a>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='portfolioCard'>
            <center><img src={ultimate} /></center>
              <div className='portfolioCard-header'>
                Project 8 (Ultimate Power Truck)
              </div>
              <div className='portfolioCard-content'>
                UI/UX Design built while at Wayne Reaves Software
                Backend was Ruby on Rails/ Frontend tech used was HTML, jQuery, CSS, Ractive
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='portfolioCard'>
              <center center><img src={adelsa} /></center>
              <div className='portfolioCard-header'>
                Project 9 (Adelsa Auto)
              </div>
              <div className='portfolioCard-content'>
                UI/UX Design built while at Wayne Reaves Software
                Backend was Ruby on Rails/ Frontend tech used was HTML, jQuery, CSS, Ractive
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <div className='col-md-4'>
            <div className='portfolioCard'>
              <center><img src={crm} /></center>
              <div className='portfolioCard-header'>
                Project 10 (ASP.NET App)
              </div>
              <div className='portfolioCard-content'>
                A CRM app built in ASP.NET
                Backend was ASP.NET/ Frontend tech used was Razor, Vanilla JavaScript, CSS, HTML
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='portfolioCard'>
            <center><img src={carbud} /></center>
              <div className='portfolioCard-header'>
                Project 11 (Car Buddys)
              </div>
              <div className='portfolioCard-content'>
                UI/UX Design built while at Wayne Reaves Software
                Backend was Ruby on Rails/ Frontend tech used was HTML, jQuery, CSS, Ractive
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='portfolioCard'>
              <center center><img src={cycle} /></center>
              <div className='portfolioCard-header'>
                Project 12 (Cycle Exchange)
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
  )
}

export default Projects;