
//Deps
import React from 'react';
import { Image } from 'react-bootstrap';
import logo from '../../media/logo.png';

interface SocialProps {
    socialType: string,
    socialLink: string
}

const Social: React.FC<SocialProps> = ({
    socialType,
    socialLink
}) => (
    <div>
        <a target="_blank" rel="noopener noreferrer" className={`social-${socialType}`} href={socialLink}>
            <svg className="icon">
                <use xlinkHref={"#" + socialType}></use>
            </svg>
        </a>
    </div>
);

const Header: React.FC = () => (
    <>
        <div className="mainAppHeader">
            <Image src={logo} width="200" />
            <h2>Hello, I'm Ryley</h2>
            <div>
              <svg className="hidden" xmlns="http://www.w3.org/2000/svg">
                <symbol viewBox="0 0 15 16" id="github">
                  <path d="M5.714 10.857q0 .357-.112.732t-.384.679-.647.304-.647-.304-.384-.679-.112-.732.112-.732.384-.679.647-.304.647.304.384.679.112.732zm5.715 0q0 .357-.112.732t-.384.679-.647.304-.647-.304-.384-.679-.112-.732.112-.732.384-.679.647-.304.647.304.384.679.112.732zm1.428 0q0-1.071-.616-1.821t-1.67-.75q-.366 0-1.741.188-.634.098-1.402.098t-1.402-.098q-1.357-.188-1.741-.188-1.054 0-1.67.75t-.616 1.821q0 .786.286 1.371t.723.92 1.089.536 1.25.263 1.33.063h1.5q.732 0 1.33-.063t1.25-.263 1.089-.536.723-.92.286-1.371zm2-1.571q0 1.848-.545 2.955-.339.688-.942 1.188t-1.259.768-1.518.424-1.531.196-1.491.04q-.696 0-1.268-.027t-1.317-.112-1.362-.268-1.223-.46-1.08-.723-.768-1.027q-.554-1.098-.554-2.955 0-2.116 1.214-3.536-.241-.732-.241-1.518 0-1.036.455-1.946.964 0 1.696.353T4.81 3.741q1.313-.313 2.759-.313 1.321 0 2.5.286.938-.732 1.67-1.08t1.688-.348q.455.911.455 1.946 0 .777-.241 1.5 1.214 1.429 1.214 3.554z"></path>
                </symbol>
                <symbol viewBox="0 0 16 16" id="linkedin">
                  <path d="M6 6h2.767v1.418h.04C9.192 6.727 10.134 6 11.539 6 14.46 6 15 7.818 15 10.183V15h-2.885v-4.27c0-1.018-.021-2.329-1.5-2.329-1.502 0-1.732 1.109-1.732 2.255V15H6V6zM1 6h3v9H1V6zM4 3.5a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 4 3.5z"></path>
                </symbol>
                <symbol viewBox="0 0 16 16" id="facebook">
                  <path d="M9.5 3H12V0H9.5C7.57 0 6 1.57 6 3.5V5H4v3h2v8h3V8h2.5l.5-3H9V3.5c0-.271.229-.5.5-.5z"></path>
                </symbol>
                <symbol viewBox="0 0 512 512" id="email">
                    <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                </symbol>
              </svg>
              <div className="socail-modal flex flex-center">
                <Social
                  socialType="github"
                  socialLink="https://github.com/rameden"
                />
                <Social
                  socialType="linkedin"
                  socialLink="https://www.linkedin.com/in/ryley-ameden-b6295754/"
                />
                <Social
                  socialType="facebook"
                  socialLink="https://www.facebook.com/rcameden"
                />
                <Social
                    socialType="email"
                    socialLink="https://www.facebook.com/rcameden"
                />
              </div>
            </div>
          </div>
    </>
);
export default Header;