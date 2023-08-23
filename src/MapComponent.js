import React, { Component } from 'react';
import Map, {Marker, Popup} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import exceedences from './Exceedences';
import PopupContent from './PopupContent';

export class MapComponent extends Component {
    static displayName = MapComponent.name;
    constructor(props){
        super(props)
        this.state = {
            selectedDay: 0,
            selectedData: exceedences[0],
            averageScore: 0,
            exceedence: null
        }

        this.mapRef = React.createRef(null);
        this.lngRef = React.createRef(0);
        this.latRef = React.createRef(0);

        this.RenderMap = this.RenderMap.bind(this);
        this.changeLocation = this.changeLocation.bind(this);
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
        this.getAverageScore = this.getAverageScore.bind(this);
    }

    changeLocation() {
        this.mapRef.current.flyTo({
            center: [this.state.selectedData[0].LONGITUDE, this.state.selectedData[0].LATITUDE], zoom: 14,
            essential: true
        });
    }

    handleChanges = () => {
        this.changeLocation();
        this.getAverageScore();
    }

    handleIncrement() {
        if (this.state.selectedDay < 16) {
            this.setState({selectedDay: this.state.selectedDay + 1, selectedData: exceedences[this.state.selectedDay]}, this.handleChanges());
        }
    }

    handleDecrement() {
        let temp = this.state.selectedDay - 1;
        if (temp < 0) {
            this.setState({selectedDay: 0}, this.handleChanges());
        } else {
            this.setState({selectedDay: this.state.selectedDay - 1, selectedData: exceedences[this.state.selectedDay]},this.handleChanges());
        }
    }

    getAverageScore() {
        let sum = 0;
        let counter = 0;
        for (let index = 0; index < this.state.selectedData.length; index++) {
            sum += this.state.selectedData[index].SCORE;
            counter++; 
        }
        let average = sum / counter;
            this.setState({averageScore: Math.round(average)});
    }

    RenderMap() {
        return(
            <Map
                initialViewState={{
                    longitude: exceedences[this.state.selectedDay][0].LONGITUDE,
                    latitude: exceedences[this.state.selectedDay][0].LATITUDE,
                    zoom: 14
                }}
                style={{width: '75%', height: 400, margin: 'auto', border: '1px solid black', borderRadius: '5px'}}
                mapStyle="mapbox://styles/mapbox/streets-v12"
                mapboxAccessToken='pk.eyJ1IjoiaGFycnlwb3J0ZXI5OCIsImEiOiJja3pkMmdsbWIwMzdjMnFucm5sd3ZieWZ4In0.aXsRiKXTFdjc7X4XBFcXOw'
                ref={this.mapRef}>
                
                {exceedences[this.state.selectedDay].map((record) => {
                    return <Marker key={record.RECORDING_ID + record.UNIX_TIME}
                    color={'#d90429'}
                    longitude={record.LONGITUDE}
                    latitude={record.LATITUDE}
                    anchor="bottom-right"
                    onClick={(e) => {
                        e.originalEvent.stopPropagation();
                        this.setState({exceedence: record})
                    }}
                    />
                }, this)}
                {this.state.exceedence && (<Popup
                    anchor='bottom'
                    offset={50}
                    longitude={this.state.exceedence.LONGITUDE}
                    latitude={this.state.exceedence.LATITUDE}
                    onClose={() => this.setState({exceedence: null})}
                    style={{width: "150px"}}>
                    <PopupContent exceedence={this.state.exceedence}/>
                 </Popup>)}
            </Map>
        );
    }

    render(){ 
        return(
            <div className='map'>
                <p>{this.state.selectedData[0].DATE}</p>
                <p>Average Heat Exceedence: <a style={{color: '#ef233c', fontWeight: 'bolder'}}>{this.state.averageScore}</a></p>
                {console.log(this.state.selectedData[0].DATE)}
                {this.RenderMap()}
                <button onClick={this.handleDecrement} className='interact'>Prev Day</button>
                <button onClick={this.handleIncrement} className='interact'>Next Day</button>
            </div>
        )
    }
}