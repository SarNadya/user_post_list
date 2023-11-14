import { Card, Carousel, Col, Row, Space } from 'antd';
import React from 'react';
import styles from './Styles.module.css';
import Info from '../components/Info/Info';
import building from './img/building.png';
import icon1 from './img/icon1.png';
import icon2 from './img/icon2.png';
import icon3 from './img/icon3.png';
import icon4 from './img/icon4.png';
import UIButton from '../components/UIButton/UIButton';
import poster from './img/photography.png';
import author1 from './img/author1.png';
import author2 from './img/author2.png';
import author3 from './img/author3.png';
import author4 from './img/author4.png';
import Instagram_logo from './img/Instagram_logo.svg';
import LinkedIn_logo from './img/LinkedIn_logo.svg';
import Facebook_logo from './img/Facebook_logo.svg';
import Twitter_logo from './img/Twitter_logo.svg';
import logo0 from './img/Logo_0.png';
import logo1 from './img/Logo_1.png';
import logo2 from './img/Logo_2.png';
import logo3 from './img/Logo_3.png';
import logo4 from './img/Logo_4.png';
import logo5 from './img/Logo_5.png';
import Profile from './img/Profile.png';

const Home = () => {
  return (
    <div className={styles.wrap}>
      <Carousel >
        <Info/>
        <Info/>
        <Info/>
      </Carousel>

      <div className={styles.conteiner}>
        <Space align="start" size="large" style={{marginBottom: '100px'}}>
          <Space direction="vertical" size="middle">
            <h1 className={styles.title}>Featured Post</h1>
            <Card
              hoverable
              cover={<img alt="building" src={building} />}
            >
            <p className={styles.author}>By <span style={{color: '#592EA9'}}>John Doe</span>   l   May 23, 2022</p>
            <h2 className={styles.articleTitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </h2>
            <p className={styles.articleText}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <UIButton>Read More {'>'}</UIButton>
            </Card>
          </Space>
          <Space direction="vertical" size="middle">
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <h1 className={styles.title}>All Posts</h1>
              <a href="#" className={styles.link}>View All</a>
            </div>
            <Space direction="vertical">
              <Card hoverable>
                <p className={styles.author}>
                  By <span style={{color: '#592EA9'}}>John Doe</span> l Aug 23, 2021
                </p>
                <h2 className={styles.articleTitle}>
                  8 Figma design systems that you can download for free today.
                </h2>
              </Card>
              <Card hoverable>
                <p className={styles.author}>
                  By <span style={{color: '#592EA9'}}>John Doe</span> l Aug 23, 2021
                </p>
                <h2 className={styles.articleTitle}>
                  8 Figma design systems that you can download for free today.
                </h2>
              </Card>
              <Card hoverable>
                <p className={styles.author}>
                  By <span style={{color: '#592EA9'}}>John Doe</span> l Aug 23, 2021
                </p>
                <h2 className={styles.articleTitle}>
                  8 Figma design systems that you can download for free today.
                </h2>
              </Card>
              <Card hoverable>
                <p className={styles.author}>
                  By <span style={{color: '#592EA9'}}>John Doe</span> l Aug 23, 2021
                </p>
                <h2 className={styles.articleTitle}>
                  8 Figma design systems that you can download for free today.
                </h2>
              </Card>
            </Space>
          </Space>
        </Space>

        <Row style={{height: '23px'}}>
          <Col span={5} style={{background: 'transparent'}}></Col>
          <Col span={13} style={{background: '#FFD050'}}></Col>
          <Col span={6} style={{background: '#592EA9'}}></Col>
        </Row>

        <Row className={styles.about_mission}>
          <Col span={12} className={styles.about}>
            <h2>ABOUT US</h2>
            <h1>We are a community of content writers who share their learnings</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a href="#" className={styles.link}>Read More {'>'}</a>
          </Col>
          <Col span={12} className={styles.ourMission}>
            <h2>Our mision</h2>
            <h1>Creating valuable content for creatives all around the world</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </Col>
        </Row>

        <Space direction="vertical" size="middle" className={styles.categories}>
          <h1>Choose A Catagory</h1>
          <Row gutter={16}>
            <Col span={6}>
              <div className={styles.col}>
                <div className={styles.icon}>
                  <img src={icon1} alt="icon" />
                </div>
                <h2>Business</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
              </div>
            </Col>
            <Col span={6}>
              <div className={styles.col}>
                <div className={styles.icon}>
                  <img src={icon2} alt="icon" />
                </div>
                <h2>Startup</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
              </div>
            </Col>
            <Col span={6}>
            <div className={styles.col}>
              <div className={styles.icon}>
                <img src={icon3} alt="icon" />
              </div>
              <h2>Economy</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            </div>
            </Col>
            <Col span={6}>
              <div className={styles.col}>
                <div className={styles.icon}>
                  <img src={icon4} alt="icon" />
                </div>
                <h2>Technology</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
              </div>
            </Col>
          </Row>
        </Space>

        <div className={styles.special_post}>
          <div className={styles.poster}>
            <img src={poster} alt="poster" />
          </div>
          <div className={styles.content}>
            <h2>Why we started</h2>
            <h1>It started out as a simple idea and evolved into our passion</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <UIButton>Read More {'>'}</UIButton>
          </div>
        </div>

        <Space direction="vertical" size="middle" className={styles.authors}>
          <h1>List of Authors</h1>
          <Row gutter={40} >
            <Col span={6}>
              <div className={styles.author_col}>
                <div className={styles.author_icon}>
                  <img src={author1} alt="author1" />
                </div>
                <h2>Floyd Miles</h2>
                <p>Content Writer @Company</p>
                <div className={styles.social_wrapper}>
                  <a href="#">
                    <img src={Facebook_logo} alt="LinkedIn_logo" className={styles.social_img}/>
                  </a>
                  <a href="#">
                    <img src={Twitter_logo} alt="LinkedIn_logo" className={styles.social_img}/>
                  </a>
                  <a href="#">
                    <img src={Instagram_logo} alt="LinkedIn_logo" className={styles.social_img}/>
                  </a>
                  <a href="#">
                    <img src={LinkedIn_logo} alt="LinkedIn_logo" className={styles.social_img}/>
                  </a>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className={styles.author_col}>
                <div className={styles.author_icon}>
                  <img src={author2} alt="author2" />
                </div>
                <h2>Dianne Russell</h2>
                <p>Content Writer @Company</p>
                <div className={styles.social_wrapper}>
                  <a href="#">
                    <img src={Facebook_logo} alt="LinkedIn_logo" className={styles.social_img}/>
                  </a>
                  <a href="#">
                    <img src={Twitter_logo} alt="LinkedIn_logo" className={styles.social_img}/>
                  </a>
                  <a href="#">
                    <img src={Instagram_logo} alt="LinkedIn_logo" className={styles.social_img}/>
                  </a>
                  <a href="#">
                    <img src={LinkedIn_logo} alt="LinkedIn_logo" className={styles.social_img}/>
                  </a>
                </div>
              </div>
            </Col>
            <Col span={6}>
            <div className={styles.author_col}>
              <div className={styles.author_icon}>
                <img src={author3} alt="author3" />
              </div>
              <h2>Jenny Wilson</h2>
              <p>Content Writer @Company</p>
              <div className={styles.social_wrapper}>
                  <a href="#">
                    <img src={Facebook_logo} alt="LinkedIn_logo" className={styles.social_img}/>
                  </a>
                  <a href="#">
                    <img src={Twitter_logo} alt="LinkedIn_logo" className={styles.social_img}/>
                  </a>
                  <a href="#">
                    <img src={Instagram_logo} alt="LinkedIn_logo" className={styles.social_img}/>
                  </a>
                  <a href="#">
                    <img src={LinkedIn_logo} alt="LinkedIn_logo" className={styles.social_img}/>
                  </a>
                </div>
            </div>
            </Col>
            <Col span={6}>
              <div className={styles.author_col}>
                <div className={styles.author_icon}>
                  <img src={author4} alt="author4" />
                </div>
                <h2>Leslie Alexander</h2>
                <p>Content Writer @Company</p>
                <div className={styles.social_wrapper}>
                  <a href="#">
                    <img src={Facebook_logo} alt="LinkedIn_logo" className={styles.social_img}/>
                  </a>
                  <a href="#">
                    <img src={Twitter_logo} alt="LinkedIn_logo" className={styles.social_img}/>
                  </a>
                  <a href="#">
                    <img src={Instagram_logo} alt="LinkedIn_logo" className={styles.social_img}/>
                  </a>
                  <a href="#">
                    <img src={LinkedIn_logo} alt="LinkedIn_logo" className={styles.social_img}/>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Space>

        <Row  justify="space-between" className={styles.logos}>
          <Col span={4}>
            <a href="#">
              <img src={logo0} alt="logo" className={styles.logo}/>
            </a>
          </Col>
          <Col span={4}>
            <a href="#">
              <img src={logo1} alt="logo" className={styles.logo}/>
            </a>
          </Col>
          <Col span={4}>
            <a href="#">
              <img src={logo2} alt="logo" className={styles.logo}/>
            </a>
          </Col>
          <Col span={4}>
            <a href="#">
              <img src={logo3} alt="logo" className={styles.logo}/>
            </a>
          </Col>
          <Col span={4}>
            <a href="#">
              <img src={logo4} alt="logo" className={styles.logo}/>
            </a>
          </Col>
          <Col span={4}>
            <a href="#">
              <img src={logo5} alt="logo" className={styles.logo}/>
            </a>
          </Col>
        </Row>

        <Row className={styles.testimonials}>
          <Col span={10} className={styles.testimonials_col1}>
            <h2>TESTIMONIALs</h2>
            <h1>What people say about our blog</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </Col>
          <Col span={14} className={styles.testimonials_col2}>
            <p className={styles.testimonials_text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className={styles.profile_wrapper}>
              <img src={Profile} alt="profile_img"/>
              <div className={styles.profile}>
                <h3>Jonathan Vallem</h3>
                <p>New york, USA</p>
              </div>
            </div>
          </Col>
        </Row>

        <Card hoverable className={styles.our_team}>
          <h2>Join our team to be a part of our story</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          <div className={styles.ourTeam_button}>
            <UIButton>Join Now</UIButton>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Home;