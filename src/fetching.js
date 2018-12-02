import React, {Component} from 'react';
// import Table from "./table";
import ReactDOM from "react-dom";
import "./fetching.css"

// import './App.css';

class Fetch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            isLoaded: false
        };
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/locations", {
            method: 'get'
        }).then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({
                    isLoaded: true,
                    items: json
                })
            }).catch(err => {
            // Error :(
            console.log('oops!', err);
        });
    }


    render() {

        let {isLoaded, items} = this.state;
        if (!isLoaded) {
            return (<div className="loader">Loading...</div>);
        } else {
            return (

                <table>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Climate</th>
                        <th>Terrain</th>
                        <th>Surface_water</th>
                        <th>Residents</th>
                        <th>Films</th>
                        <th>Url</th>
                    </tr>
                    </thead>
                    <tbody>
                    {items.map((item, index) => (
                        <tr>
                            <td key={index}>{item.id}</td>
                            <td key={index}>{item.name}</td>
                            <td key={index}>{item.climate}</td>
                            <td key={index}>{item.terrain}</td>
                            <td key={index}>{item.surface_water}</td>
                            <td key={index}>{item.residents}</td>
                            <td key={index}>{item.films}</td>
                            <td key={index}>{item.url}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            );

        }
    }
}

export default Fetch;