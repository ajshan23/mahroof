import React from 'react'

import Skill from '../components/Skill/Skill'
import html from '../images/html.png'
import react from '../images/react.png'
import haml from '../images/haml.png'


import css from '../images/css3.png'
import sass from '../images/sass.png'
import bootstrap from '../images/bootstrap.png'

import js from '../images/javascript.png'
import jquery from '../images/jquery.png'
import angular from '../images/angular.png'
import node1 from '../images/nodejs.png'
import ionic from '../images/ionic.png'

import mdb from '../images/mongodb.png'
import psql from '../images/postgresql.png'


import webpack from '../images/webpack.png'
import gulp from '../images/gulp.png'
import grunt from '../images/grunt.png'
import bower from '../images/bower.png'

import github from '../images/github.png'
import heroku from '../images/heroku.png'
import photoshop from '../images/photoshop.png'
import fpcx from '../images/fcpx.png'

const Skills = () => {
    const obj1={
        img1:html,
        img2:react,
        img3:haml,
        h1:"HTML",
        h2:"JSX",
        h3:"HAML"
    }
    const obj2={
        img1:css,
        img2:sass,
        img3:bootstrap,
        h1:"CSS3",
        h2:"SASS",
        h3:"Bootstrap"
    }
    const obj3={
        img1:react,
        img2:js,
        img3:jquery,
        img4:angular,
        img5:node1,
        img6:ionic,
        h1:"React",
        h2:"Javascript",
        h3:"jQuery",
        h4:"Angular",
        h5:"NodeJs",
        h6:"Ionic",
    }
    const obj4={
        img1:mdb,
        img2:psql,
        h1:"MongoDB",
        h2:"PostgreSQL",
    }
    const obj5={
        img1:webpack,
        img2:gulp,
        img3:grunt,
        img4:bower,
        h1:"Webpack",
        h2:"Gulp",
        h3:"Grunt",
        h4:"Bower",
       
    }

    const obj6={
        img1:github,
        img2:heroku,
        img3:photoshop,
        img4:fpcx,
        h1:"Github",
        h2:"Heroku",
        h3:"Photoshop",
        h4:"Final Cut Pro",
       
    }
  return (
    <div className='flex flex-col justify-center items-center py-16 gap-y-10'>
          <Skill title="HTML" img1={obj1.img1} img2={obj1.img2} img3={obj1.img3} h1={obj1.h1} h2={obj1.h2} h3={obj1.h3} />
          <Skill title="CSS" img1={obj2.img1} img2={obj2.img2} img3={obj2.img3} h1={obj2.h1} h2={obj2.h2} h3={obj2.h3} />
          <Skill title="Javascript" img1={obj3.img1} img2={obj3.img2} img3={obj3.img3} img4={obj3.img4} img5={obj3.img5} img6={obj3.img6} h1={obj3.h1} h2={obj3.h2} h3={obj3.h3} h4={obj3.h4} h5={obj3.h5} h6={obj3.h6} />
          <Skill title="Back-End" img1={obj4.img1} img2={obj4.img2}  h1={obj4.h1} h2={obj4.h2} />
          <Skill title="Build Tools" img1={obj5.img1} img2={obj5.img2} img3={obj5.img3} img4={obj5.img4} h1={obj5.h1} h2={obj5.h2} h3={obj5.h3} h4={obj5.h4} />
          <Skill title="Other" img1={obj6.img1} img2={obj6.img2} img3={obj6.img3} img4={obj6.img4} h1={obj6.h1} h2={obj6.h2} h3={obj6.h3} h4={obj6.h4} />

    </div>
  )
}

export default Skills
