import styled from "styled-components";

export const Container = styled.div`

justify-content: center;
align-items: center;
height: 100vh
`;
export const EditModel = styled.ul`
  animation: fadeIn 0.5s;
  text-align: start;
  position: absolute;
  right: 5px;
  top: 135px;
  background-color: white;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 6px 9px rgb(0 0 0 / 20%);
  border-radius: 8px;
  overflow: hidden;
  z-index: 99;
  min-width: 180px;
  li {
    display: flex;
    padding: 10px;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
    img {
      width: 18px;
      height: 20px;
    }
    h6 {
      font-size: 14px;
      color: rgba(0, 0, 0, 1);
      font-weight: 600;
    }
    .info {
      text-align: start;
      span {
        font-size: 12px;
        display: block;
        color: rgba(0, 0, 0, 0.6);
      }
    }
  }
`;
export const SharedActor=styled.div`
flex-wrap:nowrap;
padding:10px 12px 0;
align-items:center;
display:flex;
a{
    
    flex-grow:1;
    overflow:hidden;
    display:flex;
    text-decoration:none;

  img{
    width:48px;
    height:48px;
  }
  >div{
    display:flex;
    flex-direction:column;
    flex-grow:1;
    flex-basis:0;
    margin-left:8px;
    overflow:hidden;

    span{
      text-align:left;
      :first-child{
        font-size:14px;
        font-weight:700;
        color:rgba(0,0,0,1);
      }
      :nth-child(n+1){
        font-size:12px;
        color:rgba(0,0,0,0.6);
      }
    }
  }
}
button{
  position:absolute;
  top:170px;
  right:12px;
  background:transparent;
  border:none;
  outline:none;
  padding:.5px;
}
`;


export const ArtCard = styled.div`
 text-align:center;
  overflow: hidden;
  width:1250px;
  margin-bottom: 8px;
  margin-left: 125px;
  margin-top: 28px;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

export const UserInfo = styled.div`

  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  word-wrap: break-word;
  word-break: break-word;
 
`;

export const CardBackground = styled.div`
  background: url("/images/16389946_5739877.jpg");
  background-position: center;
  background-size: 462px;
  height: 84px;
  margin: -12px -12px 0;
`;

export const Photo = styled.img`
  box-shadow: none;
  width: 180px;
  height: 180px;
  box-sizing: border-box;
  background-clip: content-box;
  background-color: white;
  background-size: 60%;
  background-repeat: no-repeat;
  border: 2px solid white;
  margin: -38px auto 12px 60px;
  border-radius: 50%;
`;

export const Link = styled.div`
  font-size: 20px;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
  margin-left:70px;
  `;

 
export const Widget = styled.div`
  
`;