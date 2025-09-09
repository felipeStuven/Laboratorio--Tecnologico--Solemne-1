import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm"
import data from './data.json' with {type : 'json'}

const murieronScale = d3.scaleLinear([0, 80], [0, 372])
const x = d3.sacleBand([alta, media, baja], [200, 400, 600])

d3.select('.chart')
    .selectAll('circle')
    .data(data)
    .join('circle')
    .attr('r', function(d){
        return murieronScale(d.population)
    })
    .attr('cx', function(d){
        return gdpScale(d.gdp)
    })
    .attr('cy', function(d){
        return giniScale(d.gini)
    })

d3.select('.labels')
    .selectAll('text')
    .data(personas)
    .data(sexo)
    .data(edades)
    .join('text')
    .attr('y', function(d, i){
        return i * 20 + 13
    })
    .text(function(d){
        return d.name
    })
   