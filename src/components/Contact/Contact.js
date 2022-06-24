import React, { useState, useEffect } from 'react';
import { SocialIcon } from 'react-social-icons';
import { weather } from '../../api/endpoints.json';
import { Wrapper, WeatherWrapper, WeatherText } from './styles';
import Col from 'react-bootstrap/Col';
import Media from 'react-media';

const Contact = () => {
  const [state, setState] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        let res = await fetch(weather.url);
        res = await res.json();
        setState({
          city: res.name,
          temp: res.main.temp,
          description: res.weather[0].description
            .toLowerCase()
            .split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' '),
        });
      } catch (err) {
        console.log('Error Fetching: ', err);
      }
    }
    fetchData();
  }, []);

  return (
    <Wrapper>
      <Col sm={8}>
        <SocialIcon
          url='https://www.linkedin.com/in/eduardo-graziano-7795ab166/'
          target='_blank'
          bgColor='#dbc923'
          style={{ height: 60, width: 60, marginRight: '1rem' }}
        />
        <SocialIcon
          url='https://github.com/Eddy98'
          target='_blank'
          bgColor='#dbc923'
          style={{ height: 60, width: 60, marginRight: '1rem' }}
        />
        <SocialIcon
          url='mailto:eduardodgraziano@gmail.com'
          target='_blank'
          bgColor='#dbc923'
          style={{ height: 60, width: 60 }}
        />
      </Col>
      <Col sm={4}>
        <Media queries={{ small: { maxWidth: 575 } }}>
          {(matches) =>
            matches.small ? (
              <></>
            ) : (
              <>
                {Object.keys(state).length > 0 && (
                  <WeatherWrapper>
                    <WeatherText>
                      {`What's the weather like in ${state.city}?`}
                      <br />
                      <b>{`${state.description}, ${Math.round(
                        state.temp
                      )} `}</b>
                      <span>&#8457;</span>
                    </WeatherText>
                    <br />
                  </WeatherWrapper>
                )}
              </>
            )
          }
        </Media>
      </Col>
    </Wrapper>
  );
};

export default Contact;
