import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import {
  Container,
  Grid,
  Icon,
  Image,
  Menu,
  Header,
  Divider,
  Segment,
  Dropdown,
  Button,
  GridColumn
} from 'semantic-ui-react';
import GridRow from 'semantic-ui-react/dist/commonjs/collections/Grid/GridRow';
import buns from './photo7.jpg'

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Grid container centered>
            <Header as="h1">LOTS OF LOPS RABBITRY</Header>
          </Grid>
        </Menu>
    );
  }
}

/*
class MiddleMenu extends React.Component {

  render() {
    return (
        <div className="ui equal width grid">
          <div className="column">
            <div className="ui segment">1</div>
          </div>
          <div className="twelve wide column">
            <div className="ui segment">
              <div className="ui equal width grid">
                //{<div className="ui borderless center menu">}
                  <div className="column">
                   // {<div className="ui segment">1</div>}
                    <div className="ui simple dropdown item">
                      <i className="fa fa-users"/> Home <i className="fa fa-caret-down"/>
                      <div className="menu">
                      </div>
                    </div>
                  </div>
                  <div className="column">
                  <div className="ui simple dropdown item">
                    <i className="fa fa-users"/> ABOUT <i className="fa fa-caret-down"/>
                    <div className="menu">
                      <a className="item"><i className="fa fa-users"/> SHOW RESULTS </a>
                    </div>
                  </div>
                  </div>
                  <div className="column">
                  <div className="ui simple dropdown item">
                    <i className="fa fa-users"/> MY HERD <i className="fa fa-caret-down"/>
                    <div className="menu">
                      <a className="item"><i className="fa fa-users"/> HOLLAND LOP BUCKS </a>
                      <a className="item"><i className="fa fa-users"/> HOLLAND LOP DOES </a>
                      <a className="item"><i className="fa fa-users"/> LIVING ELSEWHERE </a>
                    </div>
                  </div>
                  </div>
                  <div className="column">
                  <div className="ui simple dropdown item">
                    <i className="fa fa-users"/> FOR SALE <i className="fa fa-caret-down"/>
                    <div className="menu">
                      <a className="item"><i className="fa fa-users"/> SALES POLICY </a>
                      <a className="item"><i className="fa fa-users"/> BROOD POLICY </a>
                      <a className="item"><i className="fa fa-users"/> PET QUALITY </a>
                    </div>
                  </div>
                  </div>
                  <div className="column">
                  <div className="ui simple dropdown item">
                    <i className="fa fa-users"/> RABBIT CARE <i className="fa fa-caret-down"/>
                    <div className="menu">
                    </div>
                  </div>
                  </div>
                  <div className="column">
                  <div className="ui simple dropdown item">
                    <i className="fa fa-users"/> CONTACT <i className="fa fa-caret-down"/>
                    <div className="menu">
                    </div>
                  </div>
                  </div>
                //{</div>}
              </div>
            </div>
          </div>
          <div className="column">
            <div className="ui segment">3</div>
          </div>
        </div>
        // <div className="ui centered container">
        //   <div className="center aligned column">
        //     <div className="ui borderless center menu">
        //         <div className="ui simple dropdown item">
        //           <i className="fa fa-users"/> Home <i className="fa fa-caret-down"/>
        //           <div className="menu">
        //           </div>
        //         </div>
        //         <div className="ui simple dropdown item">
        //           <i className="fa fa-users"/> ABOUT <i className="fa fa-caret-down"/>
        //           <div className="menu">
        //             <a className="item"><i className="fa fa-users"/> SHOW RESULTS </a>
        //           </div>
        //         </div>
        //         <div className="ui simple dropdown item">
        //           <i className="fa fa-users"/> MY HERD <i className="fa fa-caret-down"/>
        //           <div className="menu">
        //             <a className="item"><i className="fa fa-users"/> HOLLAND LOP BUCKS </a>
        //             <a className="item"><i className="fa fa-users"/> HOLLAND LOP DOES </a>
        //             <a className="item"><i className="fa fa-users"/> LIVING ELSEWHERE </a>
        //           </div>
        //         </div>
        //         <div className="ui simple dropdown item">
        //           <i className="fa fa-users"/> FOR SALE <i className="fa fa-caret-down"/>
        //           <div className="menu">
        //             <a className="item"><i className="fa fa-users"/> SALES POLICY </a>
        //             <a className="item"><i className="fa fa-users"/> BROOD POLICY </a>
        //             <a className="item"><i className="fa fa-users"/> PET QUALITY </a>
        //           </div>
        //         </div>
        //         <div className="ui simple dropdown item">
        //           <i className="fa fa-users"/> RABBIT CARE <i className="fa fa-caret-down"/>
        //           <div className="menu">
        //           </div>
        //         </div>
        //         <div className="ui simple dropdown item">
        //           <i className="fa fa-users"/> CONTACT <i className="fa fa-caret-down"/>
        //           <div className="menu">
        //           </div>
        //         </div>
        //       </div>
        //   </div>
        // </div>
    );
  }
}



class CenterImage extends React.Component {
  render() {
    return (
        <footer className="center-background">
          <Container>
            <GridRow centered row="2">
              <div class="midtext">LOTS OF LOPS RABBITRY</div>
            </GridRow>
            <GridRow>
              <div class="midtext2">~Quality Holland Lops With Type and Color~
              </div>
            </GridRow>
          </Container>
        </footer>
    );
  }
}
*/

class MiddleMenu extends React.Component {
  state = { activeItem: '' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
        <Menu
            borderless
            fluid widths={6}
            style={{ backgroundColor: '#ffffff' }}>
          <Grid container centered>
            <Menu.Item
                name='HOME'
                active={activeItem === 'HOME'}
                onClick={this.handleItemClick}
            >
            </Menu.Item>
            <Menu.Item
                name='ABOUT'
                active={activeItem === 'ABOUT'}
                onClick={this.handleItemClick}
            >
              <Dropdown text='ABOUT' simple item>
                <Dropdown.Menu>
                  <Dropdown.Item text='SHOW RESULTS' centered/>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>

            <Menu.Item
                name='MY HERD'
                active={activeItem === 'MY HERD'}
                onClick={this.handleItemClick}
            >
              <Dropdown text='MY HERD' simple item>
                <Dropdown.Menu>
                  <Dropdown.Item text='HOLLAND LOP BUCKS' centered/>
                  <Dropdown.Item text='HOLLAND LOP DOE' centered/>
                  <Dropdown.Item text='LIVING ELSEWHERE ' centered/>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>

            <Menu.Item
                name='ADOPT'
                active={activeItem === 'ADOPT'}
                onClick={this.handleItemClick}
            >
              <Dropdown text='ADOPT' simple item>
                <Dropdown.Menu>
                  <Dropdown.Item text='ADOPTION POLICY' centered/>
                  <Dropdown.Item text='BROOD QUALITY' centered/>
                  <Dropdown.Item text='PET QUALITY' centered/>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>

            <Menu.Item
                name='RABBIT CARE'
                active={activeItem === 'RABBIT CARE'}
                onClick={this.handleItemClick}
            >
            </Menu.Item>
            <Menu.Item
                name='CONTACT'
                active={activeItem === 'CONTACT'}
                onClick={this.handleItemClick}
            >
            </Menu.Item>
          </Grid>
        </Menu>
    );
  }
}

class FullWidthImage extends React.Component {
  render() {
    return (
        <div className="center-background">
          <div className="midtext">
            LOTS OF LOPS RABBITRY
          </div>
          <div className="midtext2">
            ~QUALITY HOLLAND LOPS WITH TYPE AND COLOR~
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <div class="center-button">
            <Button>FACEBOOK</Button>
            <Button>INSTAGRAM</Button>
          </div>
        </div>
    );
  }
}

class BottomFloatImage extends React.Component {
  render() {
    return (
        <GridColumn className="white-background">
          <Container>
            <Grid centered columns="2">

              <GridColumn>
                <img src={buns} alt="buns" className="buns photo"/>
              </GridColumn>
              <GridColumn>
                <p>Lots of Lops Rabbitry is located in the Bay Area of California. I actively breed and show my Holland
                  Lops, which are bred in accordance with the ARBA Standard of Perfection. I strive for a quality animal
                  with type, strong genetics, and a good temperament. I am an ARBA licensed rabbit registrar, and my
                  rabbits have won several Best in Shows and Reserve in Shows, in addition to multiple local and
                  national rankings in the HLRSC.</p>
              </GridColumn>

            </Grid>
          </Container>
        </GridColumn>
    );
  }
}

class ColorBlockText extends React.Component {
  render(){
    return(
        <div className="back-color">
          <div className="midtext">
            QUALITY BUNS AND SUPER CUTE
          </div>
          <div className="left-text2">
            OUR BUNS PINTO AND NUGGET, AS SHOWN ABOVE ARE SOME OF THE CUTEST BUNS AROUND. PINTO 2, AND NUGGET 3, ARE A FUREVER BONDED PAIR.
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <div className="center-button extra-padding" >
            <Button inverted>MEET OUR BUNS</Button>
          </div>
        </div>
    );
  }
}

class LotsOfLops extends React.Component {
  render() {
    return (
        <div>
          <TopMenu/>
          <MiddleMenu/>
          <FullWidthImage/>
          <BottomFloatImage/>
          <ColorBlockText/>
        </div>
    );
  }
}

ReactDOM.render(<LotsOfLops/>, document.getElementById('root'));
