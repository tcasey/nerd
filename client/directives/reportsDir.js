angular.module('nerd')

   .directive('tcBar', function () {
      return {
         restrict: 'EA',
         replace: true,
         template: '<div id="main"></div>',
         link: function (scope, element, attrs) {
                     //Width and height
           var w = 400;
           var h = 350;

           var numset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13, 11, 12, 15 ];
           var ascending = true;

           var dataset = [], index = 0;
           for (; index < numset.length; index++) {
              dataset.push({k: index, v: numset[index]});
           };
           var xScale = d3.scale.ordinal()
             .domain(d3.range(dataset.length))
             .rangeRoundBands([0, w], 0.05);

           function key(d) { return d.k; }

           var yScale = d3.scale.linear()
             .domain([0, d3.max(dataset, function(d) { return d.v; })])
             .range([0, h]);

           var sortBars = function() {
             var sortFn = ascending ? d3.ascending : d3.descending;
             var sorted =  svg.selectAll('g')
               .sort(function(a, b) { return sortFn.call(d3, a.v, b.v); })
               .transition()
               .delay(function(d, i) { return i * 50; })
               .duration(1000);
             sorted.select('rect')
             	.attr('x', function(d, i) { return xScale(i); });
             sorted.select('text')
               .attr("x", function(d, i) { return xScale(i) + xScale.rangeBand() / 2; })
               .attr("y", function(d) { return h - yScale(d.v) + 14; });
             ascending = !ascending;
           };

           //Create SVG element
           var svg = d3.select("#main")
             .append("svg")
             .attr('margin', '10')
             .attr("width", w)
             .attr("height", h);

           //Create g
           var bars = svg.selectAll("g")
             .data(dataset, key)
             .enter()
             .append('g');

           //Create bars
           bars.append("rect")
             .attr("x", function(d, i) { return xScale(i); })
             .attr("y", function(d) { return h - yScale(d.v); })
             .attr("width", xScale.rangeBand())
             .attr("height", function(d) { return yScale(d.v); })
             .attr("fill", function(d) { return "rgb(0, 80, " + (d.v * 10) + ")"; })
             .on('click', function() { sortBars(); });

           //Create labels
           bars.append("text")
             .text(function(d) { return d.v; })
             .attr("text-anchor", "middle")
             .attr("x", function(d, i) { return xScale(i) + xScale.rangeBand() / 2; })
             .attr("y", function(d) { return h - yScale(d.v) + 14; })
             .attr("font-family", "sans-serif")
             .attr("font-size", "11px")
             .attr("fill", "white");

         }
      };
   });
