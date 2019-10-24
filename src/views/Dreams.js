import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import ReactMarkdown from 'react-markdown';

import Main from '../layouts/Main';

import markdown from '../data/dreams.md';
import Spinner from '../components/Loader';

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

export class Dreams extends React.Component {
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
            <Helmet title="Dreams" />
            <article className="post" id="about">
                <header>
                    <div className="title">
                        <h2>My Not-So-Unrealistic Dreams</h2>
                        {false !== 0 && <p>(in about {this.state.count} words)</p>}
                        {!this.state.markdown && <><p>They're so many, it's taking time to load!<div style={{display:'inline-block', marginLeft: '15px'}}><Spinner height={40} width={40}></Spinner></div></p> </>}
                    </div>
                </header>
                {this.state.markdown && <ReactMarkdown
                    source={this.state.markdown}
                    renderers={{
                        Link: LinkRenderer,
                    }}
                    escapeHtml={false}
                />}
            </article>
        </Main>;
    }
}

export default Dreams;
