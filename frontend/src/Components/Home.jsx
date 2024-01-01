import Header from './Header'
import Content from './Content';
import { useRef } from 'react';
import { FirstSection, SecondSection } from './Content/Content.styles';
import TopicItem from './TopicItem';
import  useFetch  from '../hooks/useFetch';
function Home() {
    
    
    const [data] = useFetch({path: "topics"});
    return (
        <>
            <Header/>
            <Content>
                <FirstSection>
                    <h1>Welcome to the 
                        <br></br>
                        <b id='name'>Frontend Quiz!</b>
                    </h1>
                    <div className="text" id="pick">Pick a subject to get started</div>
                </FirstSection>
                <SecondSection>
                    {data && data.map((topic) => {
            return (
                <TopicItem value={topic.name}/>
            )
        })}
                </SecondSection>
            </Content>
        </>
    )
}

export default Home;