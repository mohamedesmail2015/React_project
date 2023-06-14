import React, { Component } from 'react'

import '../../assets/css/SideBar.css'
import Cat1 from '../../assets/images/Hyper 10 logo-01.png'

export class HomeSideBar extends Component {
  constructor() {
    super()
    this.Menu = this.Menu.bind(this)
  }

  componentDidMount() {
    this.Menu()
  }

  Menu() {
    var acc = document.getElementsByClassName('accordion')
    var accNum = acc.length
    var i
    for (i = 0; i < accNum; i++) {
      acc[i].addEventListener('click', function () {
        this.classList.toggle('active')
        var panel = this.nextElementSibling
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px'
        }
      })
    }
  }
  render() {
    return (
      <>
        <div className="accordionMenuDiv">
          <button className="accordion">
            <img className="accordionMenuIcon" src={Cat1} /> Living Room
          </button>
          <div className="panel">
            <ul>
              <li>
                <a href="#" className="accordionItem">
                  {' '}
                  Sofa
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  {' '}
                  Beds
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  {' '}
                  Tv Units{' '}
                </a>
              </li>
            </ul>
          </div>
          <button className="accordion">
            <img className="accordionMenuIcon" src={Cat1} /> Living Room
          </button>
          <div className="panel">
            <ul>
              <li>
                <a href="#" className="accordionItem">
                  {' '}
                  Sofa
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  {' '}
                  Beds
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  {' '}
                  Tv Units{' '}
                </a>
              </li>
            </ul>
          </div>

          <button className="accordion">
            <img className="accordionMenuIcon" src={Cat1} /> Living Room
          </button>
          <div className="panel">
            <ul>
              <li>
                <a href="#" className="accordionItem">
                  {' '}
                  Sofa
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  {' '}
                  Beds
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  {' '}
                  Tv Units{' '}
                </a>
              </li>
            </ul>
          </div>
          <button className="accordion">
            <img className="accordionMenuIcon" src={Cat1} /> Living Room
          </button>
          <div className="panel">
            <ul>
              <li>
                <a href="#" className="accordionItem">
                  {' '}
                  Sofa
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  {' '}
                  Beds
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  {' '}
                  Tv Units{' '}
                </a>
              </li>
            </ul>
          </div>

          <button className="accordion">
            <img className="accordionMenuIcon" src={Cat1} /> Living Room
          </button>
          <div className="panel">
            <ul>
              <li>
                <a href="#" className="accordionItem">
                  {' '}
                  Sofa
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  {' '}
                  Beds
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  {' '}
                  Tv Units{' '}
                </a>
              </li>
            </ul>
          </div>

          <button className="accordion">
            <img className="accordionMenuIcon" src={Cat1} /> Living Room
          </button>
          <div className="panel">
            <ul>
              <li>
                <a href="#" className="accordionItem">
                  {' '}
                  Sofa
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  {' '}
                  Beds
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  {' '}
                  Tv Units{' '}
                </a>
              </li>
            </ul>
          </div>

          <button className="accordion">
            <img className="accordionMenuIcon" src={Cat1} /> Living Room
          </button>
          <div className="panel">
            <ul>
              <li>
                <a href="#" className="accordionItem">
                  {' '}
                  Sofa
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  {' '}
                  Beds
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  {' '}
                  Tv Units{' '}
                </a>
              </li>
            </ul>
          </div>


        </div>
        <div className="accordionMenuDiv">
          <button className="accordion">
            <img className="accordionMenuIcon" src={Cat1} /> Living Room
          </button>
          <div className="panel">
            <ul>
              <li>
                <a href="#" className="accordionItem">
                  {' '}
                  Sofa
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  {' '}
                  Beds
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  {' '}
                  Tv Units{' '}
                </a>
              </li>
            </ul>
          </div>
          <button className="accordion">
            <img className="accordionMenuIcon" src={Cat1} /> Living Room
          </button>
          <div className="panel">
            <ul>
              <li>
                <a href="#" className="accordionItem">
                  {' '}
                  Sofa
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  {' '}
                  Beds
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  {' '}
                  Tv Units{' '}
                </a>
              </li>
            </ul>
          </div>

          <button className="accordion">
            <img className="accordionMenuIcon" src={Cat1} /> Living Room
          </button>
          <div className="panel">
            <ul>
              <li>
                <a href="#" className="accordionItem">
                  {' '}
                  Sofa
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  {' '}
                  Beds
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  {' '}
                  Tv Units{' '}
                </a>
              </li>
            </ul>
          </div>
          <button className="accordion">
            <img className="accordionMenuIcon" src={Cat1} /> Living Room
          </button>
          <div className="panel">
            <ul>
              <li>
                <a href="#" className="accordionItem">
                  {' '}
                  Sofa
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  {' '}
                  Beds
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  {' '}
                  Tv Units{' '}
                </a>
              </li>
            </ul>
          </div>

          <button className="accordion">
            <img className="accordionMenuIcon" src={Cat1} /> Living Room
          </button>
          <div className="panel">
            <ul>
              <li>
                <a href="#" className="accordionItem">
                  {' '}
                  Sofa
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  {' '}
                  Beds
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  {' '}
                  Tv Units{' '}
                </a>
              </li>
            </ul>
          </div>

          <button className="accordion">
            <img className="accordionMenuIcon" src={Cat1} /> Living Room
          </button>
          <div className="panel">
            <ul>
              <li>
                <a href="#" className="accordionItem">
                  {' '}
                  Sofa
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  {' '}
                  Beds
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  {' '}
                  Tv Units{' '}
                </a>
              </li>
            </ul>
          </div>

          <button className="accordion">
            <img className="accordionMenuIcon" src={Cat1} /> Living Room
          </button>
          <div className="panel">
            <ul>
              <li>
                <a href="#" className="accordionItem">
                  {' '}
                  Sofa
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  {' '}
                  Beds
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  {' '}
                  Tv Units{' '}
                </a>
              </li>
            </ul>
          </div>


        </div>
      </>
    )
  }
}

export default HomeSideBar
