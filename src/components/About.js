import React from 'react'
import { Typography } from '@mui/material';

export default function About() {
  return (
    <>
    <div style={{fontSize:'15px',padding:'35px'}}>
    Here, in this project, I tried to visualize one of the most popular algorithms to find the shortest path of nodes from a single source i.e Dijkstra's Algorithm.
      I have used technologies like React, HTML, CSS, and Material UI in this project.
    </div>
    <div style={{fontSize:'15px',padding:'0px 35px'}}>
      <strong>Dijkstra algorithm</strong> is a single-source shortest path algorithm. Here, single-source means that only one source is given, and we have to find the shortest path from the source to all the nodes.
    </div>   
    <h3 style={{margin:'30px 30px 0px',textDecoration:'underline',color:'green'}}>Follow Up Points</h3> 
    <div style={{fontSize:'15px',padding:'35px'}}>
    
    1. The initial grid has been marked for us with the starting and endpoints.<br></br>2. Initially, the shortest distance of every node of the grid from starting point is <span style={{color:'red'}}>INFINITE</span> except the starting node which is at a distance <span style={{color:'red'}}>0</span> from itself.<br></br> 
    3. We can add obstacles/walls in the grid at various positions by simply clicking on the desired positions.<br></br>4. If any wall is added by mistake we can click on it again to remove that wall.<hr></hr> Once the grid is as per our expectation, we can click on the visualize Dijkstra's Algorithm button placed above the grid to see how Dijkstra traverses the grid to find the shortest 
    the path from source to destination.</div>
    <Typography style={{textAlign:'center'}}>Made by @SatyamAbhishek</Typography>
    </>
  )
}
