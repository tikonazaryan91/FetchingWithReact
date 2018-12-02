import React, {Component} from 'react';
// import Table from "./table";
import ReactDOM from "react-dom";
import "./fetching.css"

// import './App.css';

class Fetch extends Component {
    state = {
        items: [],
        isLoaded: false
    };

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films", {
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
                    {items.length>0 && Object.keys(items[0]).map((k) => (
                        <th key={k}>{k}</th>
                    ))}
                    </tr>
                    </thead>
                    <tbody>
                    {items.map((item) => (
                        <tr key={item.id}>
                            {Object.keys(item).map(k=>(
                                <td key={k}>{item[k]}</td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            );

        }
    }
}

export default Fetch;