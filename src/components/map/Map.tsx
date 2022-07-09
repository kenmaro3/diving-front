import React, { useEffect, useState, useRef } from 'react';
import "./map.scss";

import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { ISpot } from '../../types/spot-type';

// Mapbox Style
const mapStyle: mapboxgl.Style = {
    version: 8,
    sources: {
        OSM: {
            type: 'raster',
            tiles: ['http://tile.openstreetmap.org/{z}/{x}/{y}.png'],
            tileSize: 256,
            attribution:
                '<a href="http://osm.org/copyright">© OpenStreetMap contributors</a>',
        },
    },
    layers: [
        {
            id: 'OSM',
            type: 'raster',
            source: 'OSM',
            minzoom: 0,
            maxzoom: 18,
        },
    ],
};


interface MapProp {
    spots?: ISpot[]
    spot?: ISpot
}


const Map: React.FC<MapProp> = ({ spots, spot }) => {
    // mapboxgl.Mapのインスタンスへの参照を保存するためのuseState
    const [mapInstance, setMapInstance] = useState<mapboxgl.Map>();
    const [lng, setLng] = useState(139.4534);
    const [lat, setLat] = useState(35.4548);
    const [zoom, setZoom] = useState(4);
    const map = useRef(null);

    // 地図表示するDiv要素を特定するためのuseRef
    const mapContainer = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // mapContainer.currentはnullになり得るので型ガード（ていねい）
        if (!mapContainer.current) return;

        const map = new mapboxgl.Map({
            container: mapContainer.current, // ていねいな型ガードのおかげで必ずHTMLDivElementとして扱える、current!でも可
            style: mapStyle,
            center: [lng, lat],
            zoom: zoom,
        });

        if(spot){
            const condition = spot.lat && spot.lng
            if(condition){
                const popup = new mapboxgl.Popup({ offset: 25 }).setText(
                    spot.name
                    );
                const marker1 = new mapboxgl.Marker()
                    .setLngLat([lng, lat])
                    .setPopup(popup)
                    .addTo(map);
                }
        }

        spots?.forEach((oneSpot) => {
            const condition = oneSpot.lat && oneSpot.lng
            if(condition){
                const popup = new mapboxgl.Popup({ offset: 25 }).setText(
                    oneSpot.name
                    );
                const marker1 = new mapboxgl.Marker()
                    .setLngLat([lng, lat])
                    .setPopup(popup)
                    .addTo(map);
                }
        }
        )



        // mapboxgl.Mapのインスタンスへの参照を保存
        setMapInstance(map);

    }, []);

    useEffect(() => {
        mapInstance?.on('move', () => {
            setLng(Number(mapInstance.getCenter().lng.toFixed(2)));
            setLat(Number(mapInstance?.getCenter().lat.toFixed(2)));
            setZoom(Number(mapInstance?.getZoom()));
        });
    })





    return (
        <>
            <div style={{ height: 400 }} ref={mapContainer} >
                <div className="sidebar">
                    Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
                </div>
            </div>
        </>
    )
};
export default Map;
