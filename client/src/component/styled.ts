import styled from "styled-components"

interface BoxProps{
    imgURL : string, 
} 

export const SingleBox = styled.div`
    width : 300px;
    padding-left : 50px;
    padding-right : 50px;
    height : 550px;
    padding-bottom : 50px;
    display : flex;
    flex-direction : column;
`
export const ImageContainer = styled.div<BoxProps>`
    width : 300px;
    height : 300px;
    background-image : ${(props)=>(`url(${props.imgURL});`)}
    background-size  : cover;
    background-repeat : no-repeat;
`
export const TittleContainer = styled.div`
    width : 300px;
    height : 100px;
    text-align : center;
`
export const DescriptionContainer = styled.div`
    text-align : justify;
`