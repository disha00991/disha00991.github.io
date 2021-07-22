import React, { useState } from 'react';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';
import Spinner from '../components/Loader';
import axios from 'axios'

const Projects = () => (
    <Main fullPage={true}>
        <Helmet title="Color Palette" />
        <article className="post" id="projects">
            <header className="row">
                <div className="title col-6">
                    <h2>Create a Color Palette</h2>
                    <p>A project based on Clustering methods in Machine Learning</p>
                </div>
                <div className="title col-6">
                    <img width="120px" src={process.env.PUBLIC_URL + '/images/palet.png'} />
                </div>
            </header>
            <p><strong>About Project:</strong> This project shows how unsupervised learning can be used to cluster the different colors in
                a picture to create a color palette. The palette can be used to create a gradient background for the picture or to select font color
                for any text to write on or around it!</p>
            <ClusteringForm />
        </article>
    </Main>
);


export function ClusteringForm(props) {
    const [algo, setAlgo] = useState("KMeans");
    const [url, setUrl] = useState("");
    const [n_colors, setNoOfColors] = useState(6);
    const algoOptions = ['KMeans', 'KMeans++', 'Heirarchical Clustering', 'DAG Clustering', 'Linear Discriminant(LDA)', 'Kernel PCA']
    const [palette, setPalette] = useState("")
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        callAPI()
    }

    const callAPI = () => {
        setLoading(true)
        let queryParams = `is_url=${true}&url=${url}&algo=${algo}&n_colors=${n_colors}`
        axios.get('https://color-palette-creation.herokuapp.com/get_color_palette?' + queryParams, {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        }).then(
            (response) => {
                let palette = (response.data).map(rgb => `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`)
                setPalette(palette)
                setLoading(false);
                console.log(palette)
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
                    Algorithm to use*:
                    <select name="algo" id="algo" value={algo} onChange={e => setAlgo(e.target.value)}>
                        {algoOptions && algoOptions.map(al => <option value={al}>{al}</option>)}
                    </select>
                </label>
                <label className="col-2" >
                    No. of colors*:
                    <input type="number" min="1" name="n_colors" id="n_colors" value={n_colors} onChange={e => setNoOfColors(e.target.value)} />
                </label>
                <label className="col-7">
                    Image URL*:
                    <small style={{ 'color': 'grey' }}> For eg: https://d21zeai4l2a92w.cloudfront.net/wp-content/uploads/2020/01/ColorChangingFlowers.jpg</small>
                    <input type="text" name="url" id="url" value={url} onChange={e => setUrl(e.target.value)} />
                </label>
                {algo && url && n_colors && <input type="submit" value="Create Palette!" disable={!url || !algo} />}
                {loading && <div style={{ display: 'inline', marginLeft: '15px' }}><Spinner height={40} width={40}></Spinner></div>}
            </form>
            {error && !palette && <small style={{ 'color': 'red' }}>Some error occurred!</small>}
            {palette && url && <div className="palette-container">
                <div className="mb-10">
                    {palette.map(clr => <div className="palette-color d-inline-block" style={{ backgroundColor: clr }}></div>)}
                </div>
                <img src={url} width="400" />
            </div>}
        </>
    );
}

export default Projects;
