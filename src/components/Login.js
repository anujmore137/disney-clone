import React from "react";
import styled from "styled-components";
import "../styles/Login.css";

const Login = () => {
  return (
    <div className="login_container">
      <div className="login_content">
        <img
          src="https://user-images.githubusercontent.com/53031645/155871996-84dbeda8-4efa-4c0c-a694-86c4a6e24fb7.svg"
          alt="imageOne"
          className="imgOne"
        />
        <div className="signUpContainer">
          <button className="signUp">
            <h1>GET ALL THERE</h1>
          </button>
        </div>

        <div className="description">
          <p>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </p>
        </div>
        <img
          src="https://user-images.githubusercontent.com/53031645/155872948-a5aea2ba-d553-48e2-a926-6b68c1f81e96.png"
          alt="imageOne"
          className="imgTwo"
        />
      </div>
    </div>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vh;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/login-background.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  margin-bottom: 2vw;
  max-width: 650px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0;
  align-item: center;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
`;
const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

export default Login;

// <Container>
//   <Content>
//     <CTA>
//       <CTALogoOne src="/images/cta-logo-one.png" />
//       <
//     </CTA>
//     <BgImage />
//   </Content>
// </Container>
