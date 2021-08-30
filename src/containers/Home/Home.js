import React, { Component } from 'react';
import axios from '../../axios';
import { connect } from 'react-redux';
import styles from './Home.module.css';
import Slider from '../Slider/Slider';
import Spinner from '../../components/Spinner/Spinner';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import { playlists, albums } from '../../data/data'

class Home extends Component {
    state = {
        loading: true,
        playlists: [],
        newAlbums: [],
    }
    componentDidMount() {
        Promise.all([axios({ method: "GET", url: "playlists" }), axios({ method: "GET", url: "albums" })]).then(response => {
            if (response[0].status === 200 && response[1].status === 200) {
                this.setState({
                    playlists: playlists,
                    newAlbums: albums,
                    loading: false
                });
            }
        })
            .catch(err => this.setState({ loading: false }));
    }
    render() {
        let playlists = [];
        if (playlists && playlists.length > 1) {
            const restPlaylists = playlists.filter((_, i) => i !== 0);
            playlists = restPlaylists.map(playlist => {
                return (
                    <Slider key={Math.random() * 11} itemType="song" title={playlist.name} items={playlist.songs} playlist={playlist.songIds} />
                );
            });
        }

        let content;
        if (this.state.loading) {
            content = <Spinner shape="buttonSpinner" />
        }
        else {
            content = <React.Fragment>
                <Slider itemType="song" title={this.state.playlists[0].name} items={this.state.playlists[0].songs} playlist={this.state.playlists[0].song_ids} />
                <Slider itemType="song" title={this.state.playlists[1].name} items={this.state.playlists[1].songs} playlist={this.state.playlists[1].song_ids} />
                {/* <Slider itemType="album" title="New Albums" items={this.state.newAlbums} /> */}
                {playlists}
            </React.Fragment>
        }

        return (
            <div className={"contentContainer" + " " + (this.state.loading ? styles.loading : "")}>
                {content}
            </div>
        );
    }
}
export default ErrorBoundary(Home);