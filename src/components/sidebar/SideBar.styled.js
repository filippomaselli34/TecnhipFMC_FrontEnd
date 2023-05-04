import styled from "styled-components";

export const Sidebar = styled.div`
    display:${({isMenuOpen})=>isMenuOpen?"block":"none"};   
    width: 300px;
    background: rgba(32,44,70,1);
    min-height:100vh;
    .logo-details {
        height: 60px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top:20px;
        img {
        margin:16px;
        width: 70%;
        filter: none
        
        }
        .logo-name {
            font-size: 24px;
            width: 50%;
            color: #fff;
        }
    }


`
export const NavLinks = styled.ul`
    padding: 12px 4px;


  
    li{
        position: relative;
        list-style: none;
        transition: all 0.4s ease;
        padding:0 12px;
        font-weight: 100;
        margin:4px 0;
        gap:4px;
        .icon-link {
            display: flex;
            align-items: center;
            height: 32px;
            cursor:pointer;

        }

    }
    .map-div{
        display:flex;
        margin-bottom:16px;
        border-bottom:1px solid white;
        .map-name{
        font-size:16px;
        font-weight: 500;
        color: #fff;
        padding-bottom: 8px;

        :hover{
            font-weight: 600;

        }
    }
    }

    .localOverview-ul{
        display:${({localOverview})=>localOverview?"block":"none"}
    }

    .localOverview-p{
        color:white;
        font-weight:300;
        padding-left:50px;
        :hover{
            font-weight:500;
        }
    }

    .eteView-ul{
        display:${({eteView})=>eteView?"block":"none"}
    }

    .eteView-p{
        color:white;
        font-weight:300;
        padding-left:50px;
        :hover{
            font-weight:500;
        }
    }
.link-div{
    display:flex;
    align-items: center
 

}
.link-name {
        font-size: 16px;
        font-weight: 400;
        margin-left:0px;
        color: #fff;
        white-space: nowrap;
        :hover{
            font-weight: 600;

        }

    }
  
    li:hover{
        cursor:pointer;
    }


`

export const SubMenu = styled.ul`
    margin-top: 0;
    height: 100%;
    padding: 0;
    padding-left: 8px;
    cursor:pointer;
    opacity:${({isActive})=>isActive?"100%":"50%"};
    li {
    position: relative;
    list-style: none;
        .icon-link {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        padding: 0;


        }

        .link-name {
            font-size: 15px;
            font-weight: 400;
            color: #fff;

        }

    }
`
export const ThirdMenu = styled.ul`
    height: 100%;
    margin-left: -30px;
    padding-left: 60px;
    display: ${({disp})=>disp?"block":"none"};
    li {
        position: relative;
        list-style: none;
    font-size:14px;



    }

`

export const Icon  = styled.img`
    filter:invert(1);
    height:1.5rem;
    margin-right:4px;

`
export const ExptIcon = styled.img`
    filter:invert(1);
    height:1.5rem;
    margin-right:4px;
    margin-left:auto;
`

export const TextMenu = styled.p`
       
            display: flex;
            height: 20px;
            padding: 4px;
            line-height: 50px;
            color:#F9FAFD;
            align-items: center;
            text-decoration: none;
            padding-left:32px;
            cursor: pointer;
            font-weight:${({isActive})=>isActive?"400":"200"};
        
      :hover{
            font-weight:400;
        }
`



