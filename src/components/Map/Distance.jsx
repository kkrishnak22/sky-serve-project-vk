import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import * as turf from "@turf/turf";
import "mapbox-gl/dist/mapbox-gl.css";
import { styled } from "@mui/material/styles";
import { Paper, Typography, Box } from "@mui/material";

mapboxgl.accessToken =
  "pk.eyJ1Ijoia3Jpc2huYWoyMiIsImEiOiJjbTM2MnQ3NWcwMHF2MmtxdzYyOXF2NWdyIn0.k-8sGP9xQS-3GVVRPckBsQ";


const StyledMapContainer = styled("div")(({ theme }) => ({
  display: "flex",
  height: "100vh",
  fontFamily: theme.typography.fontFamily,
  backgroundColor: theme.palette.background.default,
}));

const StyledSidebar = styled(Paper)(({ theme }) => ({
  width: "300px",
  background: theme.gradients.lightGrey,
  padding: theme.spacing(3),
  boxShadow: "2px 0 10px rgba(0, 0, 0, 0.2)",
  overflowY: "auto",
  borderRight: `1px solid ${theme.palette.divider}`,
  color: theme.palette.text.primary,
}));

const StyledDistanceContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  padding: theme.spacing(2),
  backgroundColor: theme.palette.action.selected,
  borderRadius: theme.shape.borderRadius,
}));

const StyledSegmentItem = styled(Box)(({ theme, selected }) => ({
  padding: theme.spacing(1.5),
  backgroundColor: selected ? theme.palette.primary.light : theme.palette.background.paper,
  marginBottom: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  fontSize: theme.typography.body2.fontSize,
  boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
  cursor: "pointer",
  transition: "background-color 0.3s",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const StyledMap = styled("div")(({ theme }) => ({
  flexGrow: 1,
  height: "100vh",
  position: "relative",
}));

const Distance = () => {
  const mapContainerRef = useRef(); 
  const [distance, setDistance] = useState(0); 
  const [segmentDistances, setSegmentDistances] = useState([]);
  const geojson = {
    type: "FeatureCollection",
    features: [],
  };
  const linestring = {
    type: "Feature",
    geometry: {
      type: "LineString",
      coordinates: [],
    },
  };

  useEffect(() => {
    
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [77.1025, 28.7041],
      zoom: 4,
    });

    
    map.on("load", () => {
      map.addSource("geojson", {
        type: "geojson",
        data: geojson,
      });

     
      map.addLayer({
        id: "measure-points",
        type: "circle",
        source: "geojson",
        paint: {
          "circle-radius": 5,
          "circle-color": "#000",
        },
        filter: ["in", "$type", "Point"],
      });

      
      map.addLayer({
        id: "measure-lines",
        type: "line",
        source: "geojson",
        layout: {
          "line-cap": "round",
          "line-join": "round",
        },
        paint: {
          "line-color": "#000",
          "line-width": 2.5,
        },
        filter: ["in", "$type", "LineString"],
      });
    });

   
    map.on("click", (e) => {
     
      const features = map.queryRenderedFeatures(e.point, {
        layers: ["measure-points"],
      });

      
      if (geojson.features.length > 1) geojson.features.pop();

      if (features.length) {
        
        const id = features[0].properties.id;
        geojson.features = geojson.features.filter(
          (point) => point.properties.id !== id
        );
        setSegmentDistances([]); 
      } else {
       
        const point = {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [e.lngLat.lng, e.lngLat.lat],
          },
          properties: {
            id: String(new Date().getTime()), 
          },
        };
        geojson.features.push(point);
      }

       
      if (geojson.features.length > 1) {
        linestring.geometry.coordinates = geojson.features.map(
          (point) => point.geometry.coordinates
        );
        geojson.features.push(linestring);

       
        const distance = turf.length(linestring);
        setDistance(distance);

       
        const segmentDist = geojson.features
          .slice(0, -1)
          .map((point, i, arr) =>
            i < arr.length - 1
              ? turf.distance(point, arr[i + 1]).toFixed(2)
              : null
          )
          .filter(Boolean);

        setSegmentDistances(segmentDist);
      }

    
      map.getSource("geojson").setData(geojson);
    });

    
    map.on("mousemove", (e) => {
      const features = map.queryRenderedFeatures(e.point, {
        layers: ["measure-points"],
      });
      map.getCanvas().style.cursor = features.length ? "pointer" : "crosshair";
    });


    return () => map.remove();
  }, []);


  return (
    <StyledMapContainer>
      <StyledSidebar>
        <Typography variant="h6" align="center" gutterBottom>
          Distance Measurement
        </Typography>
        <StyledDistanceContainer>
          <Typography variant="body1">
            Total distance: {distance.toFixed(2)} km
          </Typography>
        </StyledDistanceContainer>
        <Box>
          {segmentDistances.map((dist, index) => (
            <StyledSegmentItem
              key={index}
              
            
            >
              Segment {index + 1}: {dist} km
            </StyledSegmentItem>
          ))}
        </Box>
      </StyledSidebar>
      <StyledMap ref={mapContainerRef} />
    </StyledMapContainer>
  );
};

export default Distance;
