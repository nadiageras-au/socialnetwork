import React from 'react';
import styled from "styled-components";
import {Post, PostPropsType} from "./post/Post";
// import imgPost1 from "../../../assets/images/photos/post01.jpg"
// import imgPost2 from "../../../assets/images/photos/post02.jpg"
// import imgPost3_0 from "../../../assets/images/photos/post030.jpg"
// import imgPost3_1 from "../../../assets/images/photos/post031.jpg"
//
//
// const text1 = "Lock on to him, R2. Master, General Grievous's ship is directly ahead Master, General Grievous's ship is directly ahead the one crawling with vulture droids. I see it. Oh, this is going to be easy. Oddball, do you copy? Copy, Red Leader. It's only because I'm so in love. No, it's because I'm so in love with you. So love has blinded you? That's not exactly what I meant. But it's probably true."
//
// const text2 = "Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you been? They're heading in this direction. We don't want them here. Listen, why don't you wait out by the speeder. We don't want any trouble. I heartily agree with you sir. I suggest a new strategy, Artoo. Let the Wookiee win. Remember, a Jedi can feel the Force flowing through him. You mean it controls your actions? Partially. But it also obeys your commands. Hokey religions and ancient weapons are no match for a good blaster at your side, kid."
//
// const text3 = "Captain. Yes, sir? Tell them we wish to board at once. With all due respect, the Ambassadors for the Supreme Chancellor wish to board immediately. Yes, yes, of course, as you know, our blockade is perfectly legal, and we'd be happy to receive the Ambassador. Noooo! No given up General Ja Ja. Wesa tink of sometin. Hands up! My giv up. My giv up. There's always a bigger fish. The invasion is on schedule, My Lord. I have the Senate bogged down in procedures. They will have no choice but to accept your control of the system."

type MyPostsType = {
    posts: Array<PostPropsType>
}
export const MyPosts = (props:MyPostsType) => {

    // let postsData: PostPropsType[] = [
    //     {
    //         id: 1, text: "Lock on to him, R2. Master, General Grievous's ship is directly",
    //         media: imgPost1,
    //         postDateInfo: "20 hours ago",
    //         like: "15",
    //         comment: "3",
    //         share: '18'
    //     },
    //     {id: 2,
    //         text: text2,
    //         media: imgPost2,
    //         postDateInfo: "3 days",
    //         like: "25", comment: "8",
    //         share: '1'},
    //     {
    //         id: 3,
    //         text: text3 ,
    //         media: imgPost3_0,
    //         postDateInfo: "1 week",
    //         like: "38",
    //         comment: "10",
    //         share: '34'
    //     },
    // ]

    return (
        <StyledPosts>
            {
                props.posts.map(el =>{
                    return <Post
                        key={el.id}
                        id={el.id}
                        text={el.text}
                        media={el.media}
                        postDateInfo={el.postDateInfo}
                        like={el.like}
                        comment={el.comment}
                        share={el.share}/>
                })
            }

        </StyledPosts>
    );
};

const StyledPosts = styled.div`
  grid-area: h;
`