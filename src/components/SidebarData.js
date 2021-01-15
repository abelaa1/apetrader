import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as BiIcons from 'react-icons/bi';
import * as GiIcons from 'react-icons/gi';
import * as RiIcons from 'react-icons/ri';
import * as AiIcons from 'react-icons/ai';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <BiIcons.BiHomeAlt />,
        cName: 'nav-text'
    },
    {
        title: 'Curriculum',
        path: '/Curriculum',
        icon: <FaIcons.FaBookOpen />,
        cName: 'nav-text'
    },
    {
        title: 'Paper Trade',
        path: '/PaperTrade',
        icon: <GiIcons.GiTrade />,
        cName: 'nav-text'
    },
    {
        title: 'Portfolio',
        path: '/Portfolio',
        icon: <RiIcons.RiPassportFill />,
        cName: 'nav-text'
    },
    {
        title: 'Screener',
        path: '/Screener',
        icon: <AiIcons.AiOutlineFundProjectionScreen />,
        cName: 'nav-text'
    },
    {
        title: 'Trade',
        path: '/Trade',
        icon: <RiIcons.RiStockLine />,
        cName: 'nav-text'
    },
    {
        title: 'Better',
        path: '/Better',
        icon: <AiIcons.AiOutlineStock />,
        cName: 'nav-text'
    }
]