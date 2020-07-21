import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components'
import { Link } from "react-router-dom";

import fenderBanner from '../images/fenderbanner.png';
import gibsonBanner from '../images/gibsonbanner.png';
import electricGuitars from '../images/electricguitars.png'
import acousticGuitars from '../images/acousticguitars.png'
import amplifiers from '../images/amplifiers.png'
import tools from '../images/tools.png'
const Home = () => {
    return (
        <React.Fragment>
            <Carousel showIndicators={false} showArrows={false}>
                <div>
                    <img src={gibsonBanner} alt="" />
                </div>
                <div>
                    <img src={fenderBanner} alt="" />
                </div>
            </Carousel>
            <Categories>
                <Link to='/category/electric'>
                    <Category>
                        <CategoryPicture src={electricGuitars} />
                        <CategoryText>Electric Guitars</CategoryText>
                    </Category>
                </Link>

                <Link to='/category/acoustic'>
                    <Category>
                        <CategoryPicture src={acousticGuitars} />
                        <CategoryText>Acoustic Guitars</CategoryText>
                    </Category>
                </Link>

                <Link to='/category/amplifier'>
                    <Category>
                        <CategoryPicture src={amplifiers} />
                        <CategoryText>Amplifiers</CategoryText>
                    </Category>
                </Link>

                <Link to='/category/tools'>
                    <Category>
                        <CategoryPicture src={tools} />
                        <CategoryText>Parts and tools</CategoryText>
                    </Category>
                </Link>
            </Categories>
        </React.Fragment>
    )
}

export default Home;
const CategoryText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #dbdbdb;
  border: 1px solid black;
  border-radius: 3px;
  padding: 5px;
  font-size: 1.1rem;

`

const CategoryPicture = styled.img`
    max-height: 150px;
`

const Categories = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    background: #dbdbdb;
    padding-top: 10px;
    padding-bottom: 10px;
`

const Category = styled.div`
    position: relative;
    text-align: center;
    cursor: pointer;
`