import React, { useState } from 'react';
import { Question } from './Question';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => {
  toast("Form is not yet active")
}


const sizes = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
};

export const devices = {
    mobileS: `(min-width: ${sizes.mobileS})`,
    mobileM: `(min-width: ${sizes.mobileM})`,
    mobileL: `(min-width: ${sizes.mobileL})`,
    tablet: `(min-width: ${sizes.tablet})`,
    laptop: `(min-width: ${sizes.laptop})`,
};

const AccordionSection = styled.div`
//   flex-direction: column;
  align-items: center;
  justify-content: center;
//   position: relative;
  height: 100vh;
  background: ##1F1D2B;
  margin-left: 6rem;
  margin-top: 3rem;

  @media ${devices.mobileS} {
    margin-left: 0.5rem;
  }

  @media ${devices.mobileL} {
    margin-left: 2rem;
  }

  @media ${devices.tablet} {
    margin-left: 4rem;
  }
`;


const Container = styled.div`
//   position: absolute;
  top: 30%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
 width: 70vw;
`;

const Wrap = styled.div`
  background: #1F1D2B;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  h1 {
    padding: 2rem;
    font-size: 1.2rem;
  }
  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background: #1F1D2B;
  color: #F17E6C;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #F17E6C;
  border-top: 1px solid #F17E6C;
  p {
    font-size: 1rem;
    padding: 2rem;
  }
`;


const Help = () => {
    const [clicked, setClicked] = useState(false);

    const toggle = index => {
        if (clicked === index) {
            //if clicked question is already active, then close it
            return setClicked(null);
        }

        setClicked(index);
    };


    return (
        <>

            <IconContext.Provider value={{ color: '#F17E6C', size: '20px' }}>

                <AccordionSection>
                    <h2 style={{ color: "#fff", marginBottom: "1.5rem", textAlign: "center" }}>Frequently Asked Questions</h2>
                    <Container>
                        {Question.map((item, index) => {
                            return (
                                <>
                                    <Wrap onClick={() => toggle(index)} key={index}>
                                        <h1>{item.question}</h1>
                                        <span>{clicked === index ? <FaAngleUp /> : <FaAngleDown  />}</span>
                                    </Wrap>
                                    {clicked === index ? (
                                        <Dropdown>
                                            <p>{item.answer}</p>
                                        </Dropdown>
                                    ) : null}
                                </>
                            );
                        })}
                    </Container>
                    <h3 style={{ color: "#fff", marginTop: "2.5rem" }}>Still have questions?</h3> 
                    <p style={{ color: "#fff", marginTop: "1.3rem" }}>Can't find the answer you're looking for? Kindly fill the form below</p>
                    <p style={{ color: "#fff", marginTop: "1rem" }}>Want to file a complaint? Fill the <span style={{color: "#F17E6C", cursor: "pointer", textDecoration: "underline"}} onClick={notify}>form</span> to get answers ASAP</p>
                </AccordionSection>
            </IconContext.Provider>
            <ToastContainer />
        </>
    )
}

export default Help