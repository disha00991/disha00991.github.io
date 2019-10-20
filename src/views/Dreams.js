import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import ReactMarkdown from 'react-markdown';

import Main from '../layouts/Main';

import markdown from '../data/dreams.md';

// const count = markdown.split(/\s+/)
//     .map((s) => s.replace(/\W/g, ''))
//     .filter((s) => s.length).length;

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
                        <h2><Link to="/about">My Not-So-Unrealistic Dreams</Link></h2>
                        <p>(in about {this.state.count} words)</p>
                    </div>
                </header>
                <ReactMarkdown
                    source={this.state.markdown}
                    renderers={{
                        Link: LinkRenderer,
                    }}
                    escapeHtml={false}
                />
            </article>
        </Main>;
    }
}

export default Dreams;
