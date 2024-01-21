import Header from '../Components/Header'
import Content from '../Components/Content';
import Spinner from '../Components/Spinner';
import { FirstSection, SecondSection } from '../Components/Content/Content.styles';
import TopicItem from '../Components/TopicItem';
import  useFetch  from '../hooks/useFetch';
function Home() {
    const {data, loading} = useFetch({path: "topics"});
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
                {loading && <Spinner/>}
                {!loading && 
                <SecondSection>
                    {data && data.map((topic) => {
                    return (
                        <TopicItem value={topic.name}/>
                    )
                    })}
                </SecondSection>}
            </Content>
        </>
    )
}

export default Home;