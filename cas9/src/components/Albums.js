import React from 'react';
import { API_URL } from './../constants';

export class Albums extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            albums: []
        }
    }

    componentDidMount() {
        fetch(`${API_URL}/albums`)
            .then(res => res.json())
            .then(json => this.setState({ albums: json }))
            .catch(err => { alert(err) })
    }


    render() {
        console.log(this.state.albums)
        return (
            <div id="albums">
                {this.state.albums.map(album=>{
                    return(
                        <div key={album.id}>
                            <p><span>ID:</span>{album.id}</p>
                            <p><span>Title:</span>{album.title}</p>
                        </div>    
                    )
                })}
            </div>
        )
    }
}