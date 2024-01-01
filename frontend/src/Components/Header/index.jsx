import { useContext } from 'react';
import { Wrapper, ThemeChanger, TopicDisplay } from './Header.styles';
import { ThemeContext } from 'styled-components';
import { memo } from 'react';
const Header = memo(function Header({topic}) {
    const themeContext = useContext(ThemeContext)
    let theme = themeContext.theme.name;
    const requireTopic = require.context('../../img/topics-icon/', false, /\.svg$/)
    const requireIcon = require.context('../../img/theme-icon/', true, /\.svg$/)
    
    const toggleTheme = () => {
        themeContext.changeTheme.toggleTheme();
    }

    return (
        <Wrapper>
            {topic && <TopicDisplay>
                <div className="img-holder">
                    <img src={requireTopic(`./${topic}.svg`)} alt={`${topic}-icon`}/> 
                </div>
                <p className='topic-name'>{topic.toUpperCase()}</p>
            </TopicDisplay>}
            <ThemeChanger>
                <img id='sun-icon' src={requireIcon(`./${theme}-theme/sun-icon.svg`)} alt='sun-theme-icon'/>
                <div className='toggle' onClick={toggleTheme}>
                    <span></span>
                </div>
                <img id='moon-icon' src={requireIcon(`./${theme}-theme/moon-icon.svg`)} alt='moon-theme-icon'/>
            </ThemeChanger>
        </Wrapper>
    )
})
export default Header