import React from 'react';
import styled from 'styled-components/native'

const Top = styled.View`
    width: 100%;
    height: 60px;
    background-color: #000000;
    justify-content: center;
    align-items: center;
`;
const TopText = styled.Text`
    color: #FFFFFF;
    font-size: 24px;
`;

function Header() {
    return (
        <Top>
            <TopText>To Do List</TopText>
        </Top>
    );
}

export default Header;