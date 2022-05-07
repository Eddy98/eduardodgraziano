import Col from 'react-bootstrap/Col';
import {
  HeaderContainer,
  HeaderText,
  HeaderPic,
  PicWrapper,
  IntroductionText,
} from './styles';
import pic from '../../assets/profile.webp';
import data from '../../data';

const Header = () => {
  const { name, introduction} = data;
  return (
    <HeaderContainer>
      <Col sm={12} md={7}>
        <HeaderText>{name}</HeaderText>
        <IntroductionText startDelay={1000}>{introduction}</IntroductionText>
        <PicWrapper>
          <Col lg={7} style={{textAlign: 'center'}}>
            <HeaderPic src={pic} style={{width: '20rem', height: '20rem'}}/>
          </Col>
        </PicWrapper>
      </Col>
    </HeaderContainer>
  );
};

export default Header;
