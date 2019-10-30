import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Main from '../layouts/Main';

import markdown from '../data/about.md';
import bio from '../data/bio';
import Spinner from '../components/Loader';

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

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
                    <ul className="icons">
                        {bio.map((s) => (
                            <li key={s.label}>
                                <span><FontAwesomeIcon icon={s.icon} />{'  '}{s.data}</span>
                            </li>
                        ))}
                    </ul>
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
