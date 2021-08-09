import React from 'react';
import styled from 'styled-components';
import { About } from '../styles';
import Toggle from './Toggle';

const FaqSection = () => {
  return (
    <Faq>
      <h2>Any Questions <span>FAQ </span></h2>
      <Toggle title="How Do I Start?">
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, reprehenderit perferendis sunt magni dolores ratione.</p>
        </div>
      </Toggle>
      <Toggle title="What Products do you offer?">
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, reprehenderit perferendis sunt magni dolores ratione.</p>
        </div>
      </Toggle>
      <Toggle title="Diferrent Payment Methods">
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, reprehenderit perferendis sunt magni dolores ratione.</p>
        </div>
      </Toggle>
      <Toggle title="Daily Schedule">
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, reprehenderit perferendis sunt magni dolores ratione.</p>
        </div>
      </Toggle>
    </Faq>
  )
}

const Faq = styled(About)`
  display: block;
  span {
    display:block;
    color: #23d997;
  }
  h2 {
    font-weight: lighter;
    padding-bottom: 4rem;
  }
  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }
  .question {
    padding: 3rem 0;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0;
    p {
      padding: 1rem 0;
    }
  }
`

export default FaqSection;