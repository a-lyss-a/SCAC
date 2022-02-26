import React, { useState, useEffect, useMemo } from 'react'
import Globe from 'react-globe.gl'
import * as d3 from 'd3';


export default function Earth() {
   
    const [countries, setCountries] = useState({ features: []});
    const [hoverD, setHoverD] = useState();
    
    
    
    useEffect(() => {
      // load data
      fetch('https://vasturiano.github.io/react-globe.gl/example/datasets/ne_110m_admin_0_countries.geojson').then(res => res.json()).then(setCountries);
    }, []);

    
    const colorScale = d3.scaleSequentialSqrt(d3.interpolateYlOrRd);

    // GDP per capita (avoiding countries with small pop)
    const getVal = feat => feat.properties.GDP_MD_EST / Math.max(1e5, feat.properties.POP_EST);
    
    const maxVal = useMemo(
      () => Math.max(...countries.features.map(getVal)),
      [countries]
    );

    colorScale.domain([0, maxVal]);

    // function handleClick(polygon){
    //   console.log(polygon.ISO_A2)
    // }

    return <Globe
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
      lineHoverPrecision={0}

      polygonsData={countries.features.filter(d => d.properties.ISO_A2 !== 'AQ')}
      polygonAltitude={d => d === hoverD ? 0.12 : 0.06}
      polygonCapColor={d => d === hoverD ? 'steelblue' : colorScale(getVal(d))}
      polygonSideColor={() => 'rgba(0, 100, 0, 0.15)'}
      polygonStrokeColor={() => '#111'}
      polygonLabel={({ properties: d }) => `
        <b>${d.ADMIN} (${d.ISO_A2}):</b> <br />
      `}
      onPolygonHover={setHoverD}
      // The onclick works 
      onPolygonClick={({ properties: d }) => {
        console.log(d.ISO_A2);
      }
        
      }
      polygonsTransitionDuration={300}
    />;
}