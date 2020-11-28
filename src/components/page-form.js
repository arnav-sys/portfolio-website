import React from 'react';
import Footer from './footer';

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Questions? Contact us.</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="#">Contact me</Footer.Link>
          <Footer.Link href="#">phone number: 9818905646</Footer.Link>
          <Footer.Link href="#">github: arnavy-sys</Footer.Link>
          <Footer.Link href="#">mail: programmeraggarwal@gmail.com</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">services</Footer.Link>
          <Footer.Link href="#">responsive web desing</Footer.Link>
          <Footer.Link href="#">web development</Footer.Link>
          <Footer.Link href="#">Building applications</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">my work</Footer.Link>
          <Footer.Link href="#">Tutor</Footer.Link>
          <Footer.Link href="#">Freelancer</Footer.Link>
          <Footer.Link href="#">Content Creator</Footer.Link>
        </Footer.Column>

      </Footer.Row>
      <Footer.Break />
    </Footer>
  );
}
