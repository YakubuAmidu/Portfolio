import React, { Component } from 'react';
import Title from '../Title/Title';
import Button from 'react-bootstrap/Button';
import profile from '../../assets/profile.png';
import './Header.scss';

class Header extends Component {
    state = {
        displayBio: false,
      };
    
      toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
      };

      render(){
    return (
        <div className='header'>
           <section className='header__section'>
          <img src={profile} alt='img' className='header__profile' />
          <h2 className='header__title'>Hello!</h2>
          <p className='header__name'>
            My name is <strong className='header__name-1'>Yakubu.</strong>
          </p>
          <Title />
          <p className='header__para-1'>
            I'am always looking forward to working on meaninful projects.
          </p>
          {this.state.displayBio ? (
            <div>
              <p className='header__para-2'>
                I live in Los Angeles and I code everyday.
              </p>
              <p className='header__para-3'>
                My favorite language is Javascript, and I think it awesome.
              </p>
              <p className='header__para-4'>
                Beside coding, I also love eating healthy and working out
                everyday
              </p>
              <Button variant="light" onClick={this.toggleDisplayBio} className="btn btn-white btn-animated">
                Read less
              </Button>
            </div>
          ) : (
            <div>
              <Button variant="light" onClick={this.toggleDisplayBio} className="btn btn-white btn-animated">
                Read more
              </Button>
            </div>
          )}
        </section>
        </div>
    );
};
};

export default Header;

