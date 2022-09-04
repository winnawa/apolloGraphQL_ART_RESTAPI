import  {useQuery, gql} from '@apollo/client'
import { useEffect } from 'react'
import { DescriptionContainer, ImageContainer, SingleBox, TittleContainer } from './styled.ts'
//import ReactHtmlParser from 'react-html-parser'
const GET_ITEMS = gql`
    query{
        getItems{
            data{
                description
                image
                title
                id
            }
        }
    }
`


const DisplayTable = ()=>{
    const  {loading,error,data} = useQuery(GET_ITEMS)   
    if (error) return `Error : ${error}`
    let divArray;
    if (!loading){
        console.log(data.getItems.data);
        divArray = data.getItems.data.map((element)=>{
            let descriptionFix = "";
            let originalDes = element.description;
            for (let i=3;i < element.description.length-5;i++){descriptionFix = descriptionFix + originalDes[i]}    
            return(
            <SingleBox>
                <ImageContainer imgURL={element.image}></ImageContainer>
                <TittleContainer> {element.title} </TittleContainer>
                {/* <DescriptionContainer> {ReactHtmlParser(element.description)} </DescriptionContainer> */}
                <DescriptionContainer > {descriptionFix ? descriptionFix: ""} </DescriptionContainer>
            </SingleBox>
            )
        })
    }
    

    return(
        <div style={{display : "flex", flexWrap:"wrap"}}>
            {divArray}
        </div>
    )
}

export default DisplayTable;