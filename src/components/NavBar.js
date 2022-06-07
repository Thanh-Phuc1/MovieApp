import Logo from '../assets/images/avatar.png'
import {BsSearch} from 'react-icons/bs'
import styled from 'styled-components';
function NarBar (props)  {
    return (
        <Navigation>
            <div className="navContainer">
                <div className="logo">
                    <img src={Logo} alt=" No Logo" />
                </div>
                <div className= "navSeach">
                    <BsSearch className="iconSeach"/>
                    <input type="text" placeholder='Seach movie' />
                </div>
            </div>
        </Navigation>
    )
}
export default NarBar;
 const Navigation = styled.div`
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
    transition-timing-function: ease-in;
    transition: all 1s;
    z-index : 100 ;
      
      @media only screen and (max-width: 600px) {
        
          height: 100px;
      }

  .navContainer {
      background-color: #003366;
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: flex-start;
      height: 100%;
    


      @media only screen and (max-width: 600px) {
          flex-direction: column;
          height: 100px;
      }
      .logo {
          width: 100px;
          cursor: pointer;
          img {
              width: 100%;
          }
        
      }
      .navSeach {
          color: var(--color-white);
          padding-right: 20px;
          display: flex;
          justify-content: flex-end;
          &:hover .iconSeach {
              color: red;
          }
       .iconSeach {
           width: 20px;
           height: 20px;
           cursor: pointer;
           transform: translateX(24px) translateY(10px);
           color: #bbb;
       } 
          input {
              font-size: 15px;
              border: 1px solid #fff;
              color: white;
              outline: none;
              width: 0;
              padding: 15px;
              opacity: 0;
              cursor: pointer;
              transition: width 0.5s;

              &:focus {
                  padding-left: 30px;
                  width: 300px;
                  cursor: text;
                  opacity: 1;
                  border-radius: 5px;
              }
          }


      }
  }

 `
 ;
