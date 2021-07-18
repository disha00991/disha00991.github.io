import React, { useState } from 'react';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';
import Spinner from '../components/Loader';
import axios from 'axios'

const Projects = () => (
    <Main fullPage={true}>
        <Helmet title="Color Palette" />
        <article className="post" id="projects">
            <header>
                <div className="title">
                    <h2>Create a Color Palette</h2>
                    <p>A project based on Clustering methods in Machine Learning</p>
                </div>
            </header>
            <p><strong>About Project:</strong> This project uses one of the methods in unsupervised learning to cluster the different colors in
                a picture to create a color palette. The palette can be used to create a gradient background for the picture or to select font color
                for any text to write on or around it!</p>
            <ClusteringForm />
        </article>
    </Main>
);


export function ClusteringForm(props) {
    const [algo, setAlgo] = useState("KMeans");
    const [url, setUrl] = useState("");
    const algoOptions = ['KMeans', 'KMeans++', 'Heirarchical Clustering', 'DAG Clustering', 'Linear Discriminant(LDA)', 'Kernel PCA']
    const [response, setResponse] = useState("")
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        callAPI(algo, url)
    }

    const callAPI = () => {
        setLoading(true)
        axios({
            method: 'GET',
            url: 'http://192.168.0.12:8080/get_color_palette',
            data: {
                url: url,
                is_url: 'true',
                algo: algo
            },
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    // response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
                    console.log("disha:"+result)
                    setResponse(result)
                },
                (error) => {
                    setLoading(false);
                    setError(error);
                }
            )
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="container row">
                <label className="col-3 pd-0" >
                    Algorithm to use:
                    <select name="algo" id="algo" value={algo} onChange={e => setAlgo(e.target.value)}>
                        {algoOptions && algoOptions.map(al => <option value={al}>{al}</option>)}
                    </select>
                </label>
                <label className="col-9">
                    Image URL
                    <small style={{ 'color': 'grey'}}> For eg: https://d21zeai4l2a92w.cloudfront.net/wp-content/uploads/2020/01/ColorChangingFlowers.jpg</small>
                    <input type="text" name="url" id="url" value={url} onChange={e => setUrl(e.target.value)} />
                </label>
                <input type="submit" value="Create Palette!" disable={!url || !algo}/>
            </form>
            {error && <small style={{ 'color': 'red' }}>Some error occurred!</small>}
            {loading && <div style={{ display: 'inline', marginLeft: '15px' }}><Spinner height={40} width={40}></Spinner></div>}
        </>
    );
}

export default Projects;
