import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import ReactMarkdown from 'react-markdown';

import Main from '../layouts/Main';

import markdown from '../data/about.md';
import bio from '../data/bio';
import Spinner from '../components/Loader';

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;
const Age = () => {
    const [age, setAge] = useState('');
  
    const tick = () => {
      const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
      const birthTime = new Date('1995-05-23T21:45:00');
      setAge(((Date.now() - birthTime) / divisor).toFixed(11));
    };
  
    useEffect(() => {
      const timer = setInterval(() => tick(), 25);
      return () => { clearInterval(timer); };
    }, []);
  
    return age;
  };
export class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            markdown: ''
        };
    }

    componentWillMount() {
        fetch(markdown).then((response) => response.text()).then((text) => {
            let count = text.split(/\s+/)
                .map((s) => s.replace(/\W/g, ''))
                .filter((s) => s.length).length;
            this.setState({ markdown: text, count })
        })
    }
    render() {
        return <Main>
            <Helmet title="About" />
            <article className="post" id="about">
                <header>
                    <div className="title">
                        <h2>About Me</h2>
                        {false !== 0 && <p>(In some {this.state.count} words)</p>}
                        {!this.state.markdown && <><p>Let's be a little patient..<div style={{ display: 'inline-block', marginLeft: '15px' }}><Spinner height={40} width={40}></Spinner></div></p> </>}
                    </div>
                </header>
                {this.state.markdown && <>
                    <h4>General Bio</h4>
                    <table>
                        <tbody>
                            {bio.map((s) => (
                                <tr>
                                    <td><i className={s.iconClass} style={{ marginRight: '10px' }}></i>{s.title}</td>
                                    <td width="70%">{s.label === 'age' ? <Age/> : s.data}</td>                                    
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <hr />
                    <ReactMarkdown
                        source={this.state.markdown}
                        renderers={{
                            Link: LinkRenderer,
                        }}
                        escapeHtml={false}
                    />
                </>}
            </article>
        </Main>;
    }
}

export default About;
