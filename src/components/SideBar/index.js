import React from 'react'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper, 
    SidebarMenu, 
    SidebarLink, 
    SideBtnWrap, 
    SidebarRoute
} from './SideBarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='about' onClick={toggle}>Sobre</SidebarLink>
                <SidebarLink to='discover' onClick={toggle}>Descubra</SidebarLink>
                <SidebarLink to='services' onClick={toggle}>Serviços</SidebarLink>
                <SidebarLink to='signup' onClick={toggle}>Inscreva-se</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/signin'>Entrar</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar