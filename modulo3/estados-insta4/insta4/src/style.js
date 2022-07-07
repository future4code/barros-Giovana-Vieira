import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const IconContainer = styled.div`
    display: flex;
`

export const IconImage = styled.img ` 
	margin-right: 5px;
`

export const CommentContainer = styled.div `
    display: flex;
    justify-content: center;
    padding: 5px;
`

export const InputComentario = styled.input `
    width: 100%;
    margin-right: 5px;
`

export const PostContainer = styled.div `
    border: 1px solid gray;
    width: 300px;
    margin-bottom: 10px;
`

export const PostHeader = styled.div `
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 10px;
`

export const UserPhoto = styled.img `
    height: 30px;
    width: 30px;
    margin-right: 10px;
    border-radius: 50%;
`

export const PostPhoto = styled.img `
    width: 100%;
`

export const PostFooter = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    justify-content: space-between;
`

export const MyForm = styled.form`

    padding: 1vw;

    input {
        margin: 1vw;
        border: solid 2px gray;
    }

    
`
