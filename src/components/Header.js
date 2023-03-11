import styled from "styled-components";
import { connect } from "react-redux";
import {signOutAPI} from "../actions";
import {Link} from "react-router-dom";
import {getUserDetailsAPI} from "../actions";
import { useEffect } from "react";
import CardHeader from '@mui/material/CardHeader';
import { maxHeight } from "@mui/system";
import React from "react";
import { Navigate } from "react-router-dom";


const Header = (props) => {
  const [delayComplete, setDelayComplete] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setDelayComplete(true);
    }, 1000);
  }, []);


  useEffect(() => {
    if (props.user) {
      props.getUserDetails(props.user.uid);
    }
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    
  }

    return(
        <Container>
          {delayComplete && (!props.user && <Navigate to="/" />)}
      <Content>
        <a href="/" style={{textDecoration:"none",marginBottom:"7px"}}>
        <h1><span class="firstName">Idea</span><span class="lastName">Lab</span></h1>
        </a>
        
        <Nav>
          <NavListWrap>
            <NavList style={{position:"relative",right:"70px"}}>
            <NavList>
              <a href="">
                <Link to="/home">
                <img src="/images/icons8-home-page.svg" alt="" style={{width:"30px"}}/>
                <span>My Hub</span>
                </Link>
              </a>
            </NavList>

            <NavList>
              <a href="">
                <Link to="/my-network">
                <img src="/images/icons8-business-network(1).svg" alt="" style={{width:"30px"}}/>
                <span>Lab Community</span>
                </Link>
                
              </a>
            </NavList>

            <NavList>
              <a href="">
                <Link to="/tech-today">
                <img src="/images/icons8-newspaper(1).svg" alt="" style={{width:"30px"}} />
                <span>Tech Today</span>
                </Link>
              </a>
            </NavList>

            <NavList>
              <a href="">
                <img src="/images/icons8-message-exchange.svg" alt="" style={{width:"30px"}} />
                <span>Mind Share</span>
              </a>
            </NavList>
            <NavList>
              <a href="">
                <img src="/images/icons8-notification.svg" alt="" style={{width:"30px"}}/>
                <span>Notifications</span>
              </a>
            </NavList>
            </NavList>
         {/*<Search style={{position:"relative",left:"50px"}}>
          <SearchForm onSubmit={handleSearch}>
            <div >
              <input type="text" placeholder="Search" />
            </div>
            <SearchIcon type="submit">
              <img src="/images/search-icon.svg" alt="" />
            </SearchIcon>
          </SearchForm>
          <searchResultsContainer>
            {}
          </searchResultsContainer>
        </Search>
    */
    }
            <SearchForm>
              <Search>
                <SearchIcon>
                  <img src="/images/search-icon.svg" alt="" />
                </SearchIcon>
                <div>
                  <input type="text" placeholder="Search..." />
                </div>
              </Search>
           </SearchForm>
            <User style={{position:"relative", left:"50px"}}>
              <a>
              <Link to="/profile">
                {props.userDetails && props.userDetails.photoUrl ? 
                   (<img src={props.userDetails.photoUrl} alt=""/>
                ) : (
                    <img src="/images/user.svg" alt=""/>
                ) 
                }
                <span>
                  Me
                <img src="/images/down-icon.svg" alt="" />
                </span>
              </Link> 
              </a>
              <SignOut onClick={()=>props.signOut()}>
                <a href="">Sign Out</a>
              </SignOut>
            </User>

            
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
    
}

const Container = styled.div`
background-color: white;
border-bottom: 1px solid rgba(0, 0, 0, 0.08);
left: 0;
padding: 0 24px;
position: fixed;
top: 0;
width: 100vw;
z-index: 100;
height: 100px;
`;

const Content = styled.div`
display: flex;
align-items: center;
margin: 0 auto;
min-height: 100%;
max-width: 1128px;
`;


/*
const Search = styled.div`
opacity: 1;
flex-grow: 1;
position: relative;
top:8px;
& > div {
  max-width: 280px;
  input {
    border: none;
    box-shadow: none;
    background-color: #eef3f8;
    border-radius: 2px;
    color: rgba(0, 0, 0, 0.9);
    width: 218px;
    padding: 0 8px 0 40px;
    line-height: 1.75;
    font-weight: 400;
    font-size: 14px;
    height: 34px;
    border-color: #dce6f1;
    vertical-align: text-top;
  }
}
`;
const SearchForm = styled.form`
 opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;


const SearchIcon = styled.div`
width: 40px;
position: absolute;
z-index: 1;
top: 10px;
left: 2px;
border-radius: 0 2px 2px 0;
margin: 0;
pointer-events: none;
display: flex;
justify-content: center;
align-items: center;
`;
*/
const Search = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 30px;
  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
  height: 40px;
  width: 280px;
  margin: 0 16px;
  flex-direction:row-reverse;

  & > div {
    flex-grow: 1;
    input {
      outline: none;
      border: none;
      box-shadow: none;
      background-color: transparent;
      color: rgba(0, 0, 0, 0.9);
      width: 100%;
      padding: 8px;
      border-radius: 30px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 24px;
      border-color: transparent;
      vertical-align: text-top;
      padding-left: 20px;
    }
  }
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
`;


const SearchIcon = styled.div`
  width: 20px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:rgb(102, 103, 171);
  color: #fff;
  border-radius: 30px;
  cursor: pointer;
`;
const Nav = styled.nav`
margin-left: auto;
display: block;
@media (max-width: 500px) {
  position: fixed;
  left: 0;
  bottom: 0;
  background: white;
  width: 100%;
}
`;

const NavListWrap = styled.ul`
display: flex;
flex-wrap: nowrap;
list-style-type: none;
.active {
  span:after {
    content: "";
    transform: scaleX(1);
    border-bottom: 2px solid var(--white, #fff);
    bottom: 0;
    left: 0;
    position: absolute;
    transition: transform 0.2s ease-in-out;
    width: 100%;
    border-color: rgba(0, 0, 0, 0.9);
  }
}
`;

const NavList = styled.li`
display: flex;
align-items: center;
margin-left:10px;
a {
  align-items: center;
  background: transparent;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  font-weight: 400;
  justify-content: center;
  line-height: 1.5;
  min-height: 52px;
  min-width: 80px;
  position: relative;
  text-decoration: none;
  span {
    font-family:  Helvetica, sans-serif;
    color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
  }
  @media (max-width: 768px) {
    min-width: 70px;
  }
}
&:hover:nth-child(1), &:hover:nth-child(2), &:hover:nth-child(3), &:hover:nth-child(4), &:hover:nth-child(5), &:hover:nth-child(6) {
  a {
    span {
      color: rgb(102, 103, 171);
    }
  }
}
 
`;

const SignOut = styled.div`
position: absolute;
top: 45px;
background: white;
border-radius: 0 0 5px 5px;
width: 100px;
height: 40px;
font-size: 16px;
transition-duration: 167ms;
text-align: center;
display: none;
`;

const User = styled(NavList)`
a > svg {
  width: 24px;
  border-radius: 50%;
}
a > img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
span {
  display: flex;
  align-items: center;
}
&:hover {
  ${SignOut} {
    align-items: center;
    display: flex;
    justify-content: center;
  }
}
`;

const Work = styled(User)`
border-left: 1px solid rgba(0, 0, 0, 0.08);
`;




const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
    userDetails:state.userDetailsState.userDetails,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutAPI()),
  getUserDetails:(userId)=>dispatch(getUserDetailsAPI(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
