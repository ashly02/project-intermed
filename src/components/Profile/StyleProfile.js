import styled from "styled-components";

export const Container = styled.div`

justify-content: center;
align-items: center;
height: 100vh;
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
  
 
  }
`;
export const SharedActor=styled.div`
flex-wrap:nowrap;
padding:10px 12px 0;
align-items:center;
display:flex;
a{

  img{
    width:48px;
    height:48px;
  }
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
button{
  position:absolute;
  top:0px;
  right:12px;
  background:transparent;
  border:none;
  outline:none;
  padding:.5px;
}
`;


export const ArtCard = styled.div`

  display:flex;
  position:relative;
  width:1250px;
  margin-bottom: 80px;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 83ms;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  
  `;
  export const Widget = styled.div`

  
  width:1050px;
  margin-bottom: 80px;
  margin-left: 125px;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 83ms;
  border: none;  
  
  `;
export const CardBackground = styled.div`
  background: url("/images/16389946_5739877.jpg");
  background-position: center;
  background-size: 462px;
  height: 124px;
  width:1250px;
  margin:auto;
  margin-top:10px;
  border-radius:5px;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
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
  margin: -85px auto 12px 60px;
  border-radius: 50%;
`;

export const Link = styled.div`
  margin-left:120px;
  margin-top:25px;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
  `;
  
  export const InterestsContainer = styled.div`
  
  justify-content: center;
  margin-top: 60px;
  margin-left:-100px;
`;
  // CSS styling for the interest buttons
  export const InterestButton = styled.button`
  background-color: #fff;
  border: none;
  border-radius: 20px;
  padding: 4px 10px;
  margin: 8px;
  width: 85px; /* Adjust the width as per your preference */
  height: 40px;
  font-size: 14px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
  outline: none;
  box-shadow: 0 0 0 1px #814df0, 0 0 0 3px #fff;
  &:hover {
    background-color: #814df0;
    color: #fff;
    box-shadow: 0 0 0 2px #814df0, 0 0 0 4px #fff;
  }
`;
export const AddInterestForm = styled.form`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const InterestInput = styled.input`
  flex-grow: 1;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 20px;
`;

export const AddInterestButton = styled.button`
  background-color: #814df0;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  margin-left: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
  outline: none;

  &:hover {
    background-color: #6339b4;
  }
`;
