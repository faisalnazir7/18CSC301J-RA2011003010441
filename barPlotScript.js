var barGroupSvg1;
var barGroupSvg2;
var sample1;
var sample2;
var stationName = "all";
var numDays = 31
//bikeData;
//var svg = d3version5.select('svg')



function changeIt(svgName){
    
    var maxY = 13000;
    if (stationName == "all"){
            var filterSex = window.parent.document.getElementById("form"+svgName).gender.value;
        console.log(filterSex);
        var filterAgeMin = parseInt(window.parent.document.getElementById("minAge"+svgName).value);
        var filterAgeMax = parseInt(window.parent.document.getElementById("maxAge"+svgName).value);
        console.log("changeIt started");
        d3version5.select(svgName).selectAll("rect.bar").remove();
        d3version5.select(svgName).selectAll("text.value").remove();
        d3version5.select(svgName).selectAll("line").remove();
        d3version5.select(svgName).selectAll("text").remove();
        console.log("changeIt removed");
        var newData;
        if (stationName != "all"){
            var name = stationName.substring(1,stationName.length-1);
            if (filterSex == "both"){
                newData = bikeData.filter(function(entry){
                
                return ((entry["start station name"] === name) && (2019 - parseInt(entry["birth year"]) >= filterAgeMin) && (2019 - parseInt(entry["birth year"]) <= filterAgeMax));
                });
            }
            else  {
                newData = bikeData.filter(function(entry){
                
                return ((entry["start station name"] === name) && entry.gender === filterSex && (2019 - parseInt(entry["birth year"]) >= filterAgeMin) && (2019 - parseInt(entry["birth year"]) <= filterAgeMax));
                });
            }
        }
        else{
            if (filterSex == "both"){
                newData = bikeData.filter(function(entry){
                return ((2019 - parseInt(entry["birth year"]) >= filterAgeMin) && (2019 - parseInt(entry["birth year"]) <= filterAgeMax));
                });
            }
            else  {
                newData = bikeData.filter(function(entry){
                return (entry.gender === filterSex && (2019 - parseInt(entry["birth year"]) >= filterAgeMin) && (2019 - parseInt(entry["birth year"]) <= filterAgeMax));
                });
            }
        }
    }
    else {
        var filterSex = window.parent.document.getElementById("form#svg1").gender.value;
        console.log(filterSex);
        var filterAgeMin = parseInt(window.parent.document.getElementById("minAge#svg1").value);
        var filterAgeMax = parseInt(window.parent.document.getElementById("maxAge#svg1").value);
        console.log("changeIt started");
        d3version5.select("#svg1").selectAll("rect.bar").remove();
        d3version5.select("#svg1").selectAll("text.value").remove();
        d3version5.select("#svg1").selectAll("line").remove();
        d3version5.select("#svg1").selectAll("text").remove();
        console.log("changeIt removed");
        var newData;
        if (stationName != "all"){
            var name = stationName.substring(1,stationName.length-1);
            if (filterSex == "both"){
                newData = bikeData.filter(function(entry){
                
                return ((entry["start station name"] === name) && (2019 - parseInt(entry["birth year"]) >= filterAgeMin) && (2019 - parseInt(entry["birth year"]) <= filterAgeMax));
                });
            }
            else  {
                newData = bikeData.filter(function(entry){
                
                return ((entry["start station name"] === name) && entry.gender === filterSex && (2019 - parseInt(entry["birth year"]) >= filterAgeMin) && (2019 - parseInt(entry["birth year"]) <= filterAgeMax));
                });
            }
        }
        else{
            if (filterSex == "both"){
                newData = bikeData.filter(function(entry){
                return ((2019 - parseInt(entry["birth year"]) >= filterAgeMin) && (2019 - parseInt(entry["birth year"]) <= filterAgeMax));
                });
            }
            else  {
                newData = bikeData.filter(function(entry){
                return (entry.gender === filterSex && (2019 - parseInt(entry["birth year"]) >= filterAgeMin) && (2019 - parseInt(entry["birth year"]) <= filterAgeMax));
                });
            }
        }
    
        var filterSexAux = window.parent.document.getElementById("form#svg2").gender.value;
        console.log(filterSex);
        var filterAgeMinAux = parseInt(window.parent.document.getElementById("minAge#svg2").value);
        var filterAgeMaxAux = parseInt(window.parent.document.getElementById("maxAge#svg2").value);
        console.log("changeIt started");
        d3version5.select("#svg2").selectAll("rect.bar").remove();
        d3version5.select("#svg2").selectAll("text.value").remove();
        d3version5.select("#svg2").selectAll("line").remove();
        d3version5.select("#svg2").selectAll("text").remove();
        console.log("changeIt removed");
        var newDataAux;
        if (stationName != "all"){
            var name = stationName.substring(1,stationName.length-1);
            if (filterSexAux == "both"){
                newDataAux = bikeData.filter(function(entry){
                
                return ((entry["start station name"] === name) && (2019 - parseInt(entry["birth year"]) >= filterAgeMinAux) && (2019 - parseInt(entry["birth year"]) <= filterAgeMaxAux));
                });
            }
            else  {
                newDataAux = bikeData.filter(function(entry){
                
                return ((entry["start station name"] === name) && entry.gender === filterSexAux && (2019 - parseInt(entry["birth year"]) >= filterAgeMinAux) && (2019 - parseInt(entry["birth year"]) <= filterAgeMaxAux));
                });
            }
        }
        else{
            if (filterSexAux == "both"){
                newDataAux = bikeData.filter(function(entry){
                return ((2019 - parseInt(entry["birth year"]) >= filterAgeMinAux) && (2019 - parseInt(entry["birth year"]) <= filterAgeMaxAux));
                });
            }
            else  {
                newDataAux = bikeData.filter(function(entry){
                return (entry.gender === filterSexAux && (2019 - parseInt(entry["birth year"]) >= filterAgeMinAux) && (2019 - parseInt(entry["birth year"]) <= filterAgeMaxAux));
                });
            }
        }
    
    
    
        
        var proxyBikes = [0,0,0,0,0,0,0,0,0,0,0,0];
        var proxyBikes2 = [0,0,0,0,0,0,0,0,0,0,0,0];
       if (stationName != "all"){
        var name = stationName.substring(1,stationName.length-1);
        var filterSex1 = window.parent.document.getElementById("form#svg1").gender.value;
        console.log(filterSex);
        var filterAgeMin1 = parseInt(window.parent.document.getElementById("minAge#svg1").value);
        var filterAgeMax1 = parseInt(window.parent.document.getElementById("maxAge#svg1").value);
        if (filterSex1 == "both"){
            var proxyData = bikeData.filter(function(entry){
                return ((entry["start station name"] === name)&& (2019 - parseInt(entry["birth year"]) >= filterAgeMin1) && (2019 - parseInt(entry["birth year"]) <= filterAgeMax1));
                });
                
                var numTrips = proxyData.length;
                if (numTrips != 0){
                    for (var i = 0; i < numTrips; ++i){
                        trip = proxyData[i];
                        var date = trip["starttime"];
                        //console.log(date);
                        var dateArray = date.split(" ");
                        //console.log(dateArray);
                        var hour = dateArray[1];
                        //console.log(hour);
                        var hourArray = hour.split(":");
                        //console.log(hourArray);
                        var h = parseInt(hourArray[0]);
                        //var m = hour[1];
                        if (h >= 0 && h < 2) proxyBikes[0] = proxyBikes[0] + 1;
                        if (h >= 2 && h < 4) proxyBikes[1] = proxyBikes[1] + 1;
                        if (h >= 4 && h < 6) proxyBikes[2] = proxyBikes[2] + 1;
                        if (h >= 6 && h < 8) proxyBikes[3] = proxyBikes[3] + 1;
                        if (h >= 8 && h < 10) proxyBikes[4] = proxyBikes[4] + 1;
                        if (h >= 10 && h < 12) proxyBikes[5] = proxyBikes[5] + 1;
                        if (h >= 12 && h < 14) proxyBikes[6] = proxyBikes[6] + 1;
                        if (h >= 14 && h < 16) proxyBikes[7] = proxyBikes[7] + 1;
                        if (h >= 16 && h < 18) proxyBikes[8] = proxyBikes[8] + 1;
                        if (h >= 18 && h < 20) proxyBikes[9] = proxyBikes[9] + 1;
                        if (h >= 20 && h < 22) proxyBikes[10] = proxyBikes[10] + 1;
                        if (h >= 22 && h < 24) proxyBikes[11] = proxyBikes[11] + 1;
            
                    }
                }
                
                for (var i = 0; i < 12; ++i){
                    proxyBikes[i]/=numDays;
                    proxyBikes[i]=proxyBikes[i].toFixed(2);
                }
        } else {
            var proxyData = bikeData.filter(function(entry){
                return (entry.gender === filterSex1 && (entry["start station name"] === name)&& (2019 - parseInt(entry["birth year"]) >= filterAgeMin1) && (2019 - parseInt(entry["birth year"]) <= filterAgeMax1));
                });
                
                var numTrips = proxyData.length;
                if (numTrips != 0){
                    for (var i = 0; i < numTrips; ++i){
                        trip = proxyData[i];
                        var date = trip["starttime"];
                        //console.log(date);
                        var dateArray = date.split(" ");
                        //console.log(dateArray);
                        var hour = dateArray[1];
                        //console.log(hour);
                        var hourArray = hour.split(":");
                        //console.log(hourArray);
                        var h = parseInt(hourArray[0]);
                        //var m = hour[1];
                        if (h >= 0 && h < 2) proxyBikes[0] = proxyBikes[0] + 1;
                        if (h >= 2 && h < 4) proxyBikes[1] = proxyBikes[1] + 1;
                        if (h >= 4 && h < 6) proxyBikes[2] = proxyBikes[2] + 1;
                        if (h >= 6 && h < 8) proxyBikes[3] = proxyBikes[3] + 1;
                        if (h >= 8 && h < 10) proxyBikes[4] = proxyBikes[4] + 1;
                        if (h >= 10 && h < 12) proxyBikes[5] = proxyBikes[5] + 1;
                        if (h >= 12 && h < 14) proxyBikes[6] = proxyBikes[6] + 1;
                        if (h >= 14 && h < 16) proxyBikes[7] = proxyBikes[7] + 1;
                        if (h >= 16 && h < 18) proxyBikes[8] = proxyBikes[8] + 1;
                        if (h >= 18 && h < 20) proxyBikes[9] = proxyBikes[9] + 1;
                        if (h >= 20 && h < 22) proxyBikes[10] = proxyBikes[10] + 1;
                        if (h >= 22 && h < 24) proxyBikes[11] = proxyBikes[11] + 1;
            
                    }
                }
                
                for (var i = 0; i < 12; ++i){
                    proxyBikes[i]/=numDays;
                    proxyBikes[i]=proxyBikes[i].toFixed(2);
                }
        }
    
        var filterSex2 = window.parent.document.getElementById("form#svg2").gender.value;
        console.log(filterSex);
        var filterAgeMin2 = parseInt(window.parent.document.getElementById("minAge#svg2").value);
        var filterAgeMax2 = parseInt(window.parent.document.getElementById("maxAge#svg2").value);
        if (filterSex2 == "both"){
            var proxyData = bikeData.filter(function(entry){
                return ((entry["start station name"] === name)&& (2019 - parseInt(entry["birth year"]) >= filterAgeMin2) && (2019 - parseInt(entry["birth year"]) <= filterAgeMax2));
                });
                
                var numTrips = proxyData.length;
                if (numTrips != 0){
                    for (var i = 0; i < numTrips; ++i){
                        trip = proxyData[i];
                        var date = trip["starttime"];
                        //console.log(date);
                        var dateArray = date.split(" ");
                        //console.log(dateArray);
                        var hour = dateArray[1];
                        //console.log(hour);
                        var hourArray = hour.split(":");
                        //console.log(hourArray);
                        var h = parseInt(hourArray[0]);
                        //var m = hour[1];
                        if (h >= 0 && h < 2) proxyBikes2[0] = proxyBikes2[0] + 1;
                        if (h >= 2 && h < 4) proxyBikes2[1] = proxyBikes2[1] + 1;
                        if (h >= 4 && h < 6) proxyBikes2[2] = proxyBikes2[2] + 1;
                        if (h >= 6 && h < 8) proxyBikes2[3] = proxyBikes2[3] + 1;
                        if (h >= 8 && h < 10) proxyBikes2[4] = proxyBikes2[4] + 1;
                        if (h >= 10 && h < 12) proxyBikes2[5] = proxyBikes2[5] + 1;
                        if (h >= 12 && h < 14) proxyBikes2[6] = proxyBikes2[6] + 1;
                        if (h >= 14 && h < 16) proxyBikes2[7] = proxyBikes2[7] + 1;
                        if (h >= 16 && h < 18) proxyBikes2[8] = proxyBikes2[8] + 1;
                        if (h >= 18 && h < 20) proxyBikes2[9] = proxyBikes2[9] + 1;
                        if (h >= 20 && h < 22) proxyBikes2[10] = proxyBikes2[10] + 1;
                        if (h >= 22 && h < 24) proxyBikes2[11] = proxyBikes2[11] + 1;
            
                    }
                }
                
                for (var i = 0; i < 12; ++i){
                    proxyBikes2[i]/=numDays;
                    proxyBikes2[i]=proxyBikes2[i].toFixed(2);
                }
        } else {
            var proxyData = bikeData.filter(function(entry){
                return (entry.gender === filterSex2 && (entry["start station name"] === name)&& (2019 - parseInt(entry["birth year"]) >= filterAgeMin2) && (2019 - parseInt(entry["birth year"]) <= filterAgeMax2));
                });
                
                var numTrips = proxyData.length;
                if (numTrips != 0){
                    for (var i = 0; i < numTrips; ++i){
                        trip = proxyData[i];
                        var date = trip["starttime"];
                        //console.log(date);
                        var dateArray = date.split(" ");
                        //console.log(dateArray);
                        var hour = dateArray[1];
                        //console.log(hour);
                        var hourArray = hour.split(":");
                        //console.log(hourArray);
                        var h = parseInt(hourArray[0]);
                        //var m = hour[1];
                        if (h >= 0 && h < 2) proxyBikes2[0] = proxyBikes2[0] + 1;
                        if (h >= 2 && h < 4) proxyBikes2[1] = proxyBikes2[1] + 1;
                        if (h >= 4 && h < 6) proxyBikes2[2] = proxyBikes2[2] + 1;
                        if (h >= 6 && h < 8) proxyBikes2[3] = proxyBikes2[3] + 1;
                        if (h >= 8 && h < 10) proxyBikes2[4] = proxyBikes2[4] + 1;
                        if (h >= 10 && h < 12) proxyBikes2[5] = proxyBikes2[5] + 1;
                        if (h >= 12 && h < 14) proxyBikes2[6] = proxyBikes2[6] + 1;
                        if (h >= 14 && h < 16) proxyBikes2[7] = proxyBikes2[7] + 1;
                        if (h >= 16 && h < 18) proxyBikes2[8] = proxyBikes2[8] + 1;
                        if (h >= 18 && h < 20) proxyBikes2[9] = proxyBikes2[9] + 1;
                        if (h >= 20 && h < 22) proxyBikes2[10] = proxyBikes2[10] + 1;
                        if (h >= 22 && h < 24) proxyBikes2[11] = proxyBikes2[11] + 1;
            
                    }
                }
                
                for (var i = 0; i < 12; ++i){
                    proxyBikes2[i]/=numDays;
                    proxyBikes2[i]=proxyBikes2[i].toFixed(2);
                }
        }
    }
   

    max1 = Math.max.apply(null, proxyBikes);
    max2 = Math.max.apply(null, proxyBikes2);
    maxY = Math.max(max1, max2);
    maxY = maxY + 0.1*maxY;
   } 
    
        
        
   console.log(maxY);
    console.log("changeIt data filtered");
    if (stationName == "all") drawGraph(newData, svgName, maxY);
    else {
        drawGraph(newData, "#svg1", maxY);   
        drawGraph(newDataAux, "#svg2", maxY);   
    }   
    
    console.log("changeIt ended");
    //document.getElementById("reload2").onchange();
}

function drawGraph(data, svgName, maxY){
    
        console.log(data[1]);
        //array containing number of bikes used every two hours
        var bikesUsed = [0,0,0,0,0,0,0,0,0,0,0,0];
        
        
        /*var trip = data[1];
        var date = trip["starttime"];
        console.log(date);
        var dateArray = date.split(" ");
        console.log(dateArray);
        var hour = dateArray[1];
        console.log(hour);
        var hourArray = hour.split(":");
        console.log(hourArray);
        console.log(parseInt(hourArray[0]));*/
        var numTrips = data.length;
        if (numTrips != 0){
            for (var i = 0; i < numTrips; ++i){
                trip = data[i];
                var date = trip["starttime"];
                //console.log(date);
                var dateArray = date.split(" ");
                //console.log(dateArray);
                var hour = dateArray[1];
                //console.log(hour);
                var hourArray = hour.split(":");
                //console.log(hourArray);
                var h = parseInt(hourArray[0]);
                //var m = hour[1];
                if (h >= 0 && h < 2) bikesUsed[0] = bikesUsed[0] + 1;
                if (h >= 2 && h < 4) bikesUsed[1] = bikesUsed[1] + 1;
                if (h >= 4 && h < 6) bikesUsed[2] = bikesUsed[2] + 1;
                if (h >= 6 && h < 8) bikesUsed[3] = bikesUsed[3] + 1;
                if (h >= 8 && h < 10) bikesUsed[4] = bikesUsed[4] + 1;
                if (h >= 10 && h < 12) bikesUsed[5] = bikesUsed[5] + 1;
                if (h >= 12 && h < 14) bikesUsed[6] = bikesUsed[6] + 1;
                if (h >= 14 && h < 16) bikesUsed[7] = bikesUsed[7] + 1;
                if (h >= 16 && h < 18) bikesUsed[8] = bikesUsed[8] + 1;
                if (h >= 18 && h < 20) bikesUsed[9] = bikesUsed[9] + 1;
                if (h >= 20 && h < 22) bikesUsed[10] = bikesUsed[10] + 1;
                if (h >= 22 && h < 24) bikesUsed[11] = bikesUsed[11] + 1;
    
            }
        }
        
        for (var i = 0; i < 12; ++i){
            bikesUsed[i]/=numDays;
            bikesUsed[i] = bikesUsed[i].toFixed(2);
        }
        console.log(bikesUsed);
        if(svgName == "#svg1"){ sample1 = [
            {
            hourRange: '0-2',
            value: bikesUsed[0],
            color: '#000000'
            },
            {
            hourRange: '2-4',
            value: bikesUsed[1],
            color: '#00a2ee'
            },
            {
            hourRange: '4-6',
            value: bikesUsed[2],
            color: '#fbcb39'
            },
            {
            hourRange: '6-8',
            value: bikesUsed[3],
            color: '#007bc8'
            },
            {
            hourRange: '8-10',
            value: bikesUsed[4],
            color: '#65cedb'
            },
            {
            hourRange: '10-12',
            value: bikesUsed[5],
            color: '#ff6e52'
            },
            {
            hourRange: '12-14',
            value: bikesUsed[6],
            color: '#f9de3f'
            },
            {
            hourRange: '14-16',
            value: bikesUsed[7],
            color: '#5d2f8e'
            },
            {
            hourRange: '16-18',
            value: bikesUsed[8],
            color: '#008fc9'
            },
            {
            hourRange: '18-20',
            value: bikesUsed[9],
            color: '#507dca'
            },
            {
            hourRange: '20-22',
            value: bikesUsed[10],
            color: '#507dca'
            },
            {
            hourRange: '22-24',
            value: bikesUsed[11],
            color: '#507dca'
            }
        ];
    }
    else{
        sample2 = [
            {
            hourRange: '0-2',
            value: bikesUsed[0],
            color: '#000000'
            },
            {
            hourRange: '2-4',
            value: bikesUsed[1],
            color: '#00a2ee'
            },
            {
            hourRange: '4-6',
            value: bikesUsed[2],
            color: '#fbcb39'
            },
            {
            hourRange: '6-8',
            value: bikesUsed[3],
            color: '#007bc8'
            },
            {
            hourRange: '8-10',
            value: bikesUsed[4],
            color: '#65cedb'
            },
            {
            hourRange: '10-12',
            value: bikesUsed[5],
            color: '#ff6e52'
            },
            {
            hourRange: '12-14',
            value: bikesUsed[6],
            color: '#f9de3f'
            },
            {
            hourRange: '14-16',
            value: bikesUsed[7],
            color: '#5d2f8e'
            },
            {
            hourRange: '16-18',
            value: bikesUsed[8],
            color: '#008fc9'
            },
            {
            hourRange: '18-20',
            value: bikesUsed[9],
            color: '#507dca'
            },
            {
            hourRange: '20-22',
            value: bikesUsed[10],
            color: '#507dca'
            },
            {
            hourRange: '22-24',
            value: bikesUsed[11],
            color: '#507dca'
            }
        ];
    }

   

    console.log(maxY);
    
        var svg = d3version5.select(svgName)
            //.attr("preserveAspectRatio", "xMinYMin meet")
            //.attr("viewBox", "0 0 960 500");


            
        var svgContainer = d3version5.select('#container');
        
        var margin = 80;
        var width = document.getElementById("container").offsetWidth - 2 * margin;
        //var height = 600 - 2 * margin;
        var height = document.getElementById("container").offsetHeight - 2 * margin;
        /*var chart = svg.append('g')
            .attr('transform', `translate(${margin}, ${margin})`);*/
        
        var chart = svg.append('g')
            .attr('class', 'chartClass')
            .attr('transform', `translate(${margin}, ${margin})`);

        var xScale;
        if (svgName == "#svg1"){
            xScale = d3version5.scaleBand()
            .range([0, width])
            .domain(sample1.map((s) => s.hourRange))
            .padding(0.4)
        }
        else {
            xScale = d3version5.scaleBand()
            .range([0, width])
            .domain(sample2.map((s) => s.hourRange))
            .padding(0.4)
        }
        
        var yScale = d3version5.scaleLinear()
            .range([height, 0])
            .domain([0, maxY]);
        
        
        
            //.domain([0, maxY]);
        
        // vertical grid lines
        // var makeXLines = () => d3version5.axisBottom()
        //   .scale(xScale)
        
        var makeYLines = () => d3version5.axisLeft()
            .scale(yScale)
            
        
        chart.append('g')
            .attr('transform', `translate(0, ${height})`)
            .call(d3version5.axisBottom(xScale));
        
        chart.append('g')
            .call(d3version5.axisLeft(yScale));
        
        // vertical grid lines
        // chart.append('g')
        //   .attr('class', 'grid')
        //   .attr('transform', `translate(0, ${height})`)
        //   .call(makeXLines()
        //     .tickSize(-height, 0, 0)
        //     .tickFormat('')
        //   )
        
        chart.append('g')
            .attr('class', 'grid')
            .call(makeYLines()
            .tickSize(-width, 0, 0)
            .tickFormat('')
            )
        
        if (svgName == "#svg1"){
            barGroupSvg1 = chart.selectAll()
            .data(sample1)
            .enter()
            .append('g')
        }
        else {
            barGroupSvg2 = chart.selectAll()
            .data(sample2)
            .enter()
            .append('g')
        }
        
        
        if (svgName == "#svg1") { barGroupSvg1
            .append('rect')
            .attr('class', 'bar')
            .attr('x', (g) => xScale(g.hourRange))
            .attr('y', (g) => yScale(g.value))
            .attr('height', (g) => height - yScale(g.value))
            .attr('width', xScale.bandwidth())
            .on('mouseenter', function (actual, i) {
                d3version5.selectAll('.value')
                .attr('opacity', 0)
        
            d3version5.select(this)
                .transition()
                .duration(300)
                .attr('opacity', 0.6)
                .attr('x', (a) => xScale(a.hourRange) - 5)
                .attr('width', xScale.bandwidth()+10)

            d3version5.selectAll(".bar").filter(function(d){return d.hourRange == actual.hourRange})
                .transition()
                .duration(300)
                .attr('opacity', 0.6)
                .attr('x', (a) => xScale(a.hourRange) - 5)
                .attr('width', xScale.bandwidth()+10)
            
            var y = yScale(actual.value)
        
           /* line = chart.append('line')
                .attr('id', 'limit')
                .attr('x1', 0)
                .attr('y1', y)
                .attr('x2', width)
                .attr('y2', y)
                */
            
           
            barGroupSvg1.append('text')
            //d3version5.select(".chartClass").append('text')
            //d3version5.selectAll(".bar").filter(function(d){return d.hourRange == "0-2"}).append('text')
                .attr('class', 'divergence')
                .attr('x', (a) => xScale(a.hourRange) + xScale.bandwidth() / 2)
                .attr('y', (a) => yScale(a.value)-10)
                .attr('fill', 'black')
                .style('fill', 'black')
                .attr('text-anchor', 'middle')
                .text((a, idx) => {
                var divergence = (a.value - sample1[i]["value"]).toFixed(2)
                
                let text = ''
                if (divergence > 0) text += '+'
                text += `${divergence}`
                
                return idx !== i ? text : a.value;
                })

                barGroupSvg2.append('text')
                //d3version5.select(".chartClass").append('text')
                //d3version5.selectAll(".bar").filter(function(d){return d.hourRange == "0-2"}).append('text')
                    .attr('class', 'divergence')
                    .attr('x', (a) => xScale(a.hourRange) + xScale.bandwidth() / 2)
                    .attr('y', (a) => yScale(a.value)-10)
                    .attr('fill', 'black')
                    .style('fill', 'black')
                    .attr('text-anchor', 'middle')
                    .text((a, idx) => {
                    var divergence = (a.value - sample2[i]["value"]).toFixed(2)
                    
                    let text = ''
                    if (divergence > 0) text += '+'
                    text += `${divergence}`
                    
                    return idx !== i ? text : a.value;
                    })

               
        
            })
            
            
            .on('mouseleave', function (actual) {
            d3version5.selectAll('.value')
                .attr('opacity', 1)
        
            d3version5.select(this)
                .transition()
                .duration(300)
                .attr('opacity', 1)
                .attr('x', (a) => xScale(a.hourRange))
                .attr('width', xScale.bandwidth())

            d3version5.selectAll(".bar").filter(function(d){return d.hourRange == actual.hourRange})
                .transition()
                .duration(300)
                .attr('opacity', 1)
                .attr('x', (a) => xScale(a.hourRange))
                .attr('width', xScale.bandwidth())

            chart.selectAll('#limit').remove()
            d3version5.selectAll('.divergence').remove()
            })
        }

        else {
            barGroupSvg2
            .append('rect')
            .attr('class', 'bar')
            .attr('x', (g) => xScale(g.hourRange))
            .attr('y', (g) => yScale(g.value))
            .attr('height', (g) => height - yScale(g.value))
            .attr('width', xScale.bandwidth())
            .on('mouseenter', function (actual, i) {
                d3version5.selectAll('.value')
                .attr('opacity', 0)
        
            d3version5.select(this)
                .transition()
                .duration(300)
                .attr('opacity', 0.6)
                .attr('x', (a) => xScale(a.hourRange) - 5)
                .attr('width', xScale.bandwidth()+10)

            d3version5.selectAll(".bar").filter(function(d){return d.hourRange == actual.hourRange})
                .transition()
                .duration(300)
                .attr('opacity', 0.6)
                .attr('x', (a) => xScale(a.hourRange) - 5)
                .attr('width', xScale.bandwidth()+10)
            
            var y = yScale(actual.value)
        
            /*line = chart.append('line')
                .attr('id', 'limit')
                .attr('x1', 0)
                .attr('y1', y)
                .attr('x2', width)
                .attr('y2', y)*/
                
            
           
            barGroupSvg2.append('text')
            //d3version5.select(".chartClass").append('text')
            //d3version5.selectAll(".bar").filter(function(d){return d.hourRange == "0-2"}).append('text')
                .attr('class', 'divergence')
                .attr('x', (a) => xScale(a.hourRange) + xScale.bandwidth() / 2)
                .attr('y', (a) => yScale(a.value)-10)
                .attr('fill', 'black')
                .style('fill', 'black')
                .attr('text-anchor', 'middle')
                .text((a, idx) => {
                var divergence = (a.value - sample2[i]["value"]).toFixed(2)
                
                let text = ''
                if (divergence > 0) text += '+'
                text += `${divergence}`
                
                return idx !== i ? text : a.value;
                })

                barGroupSvg1.append('text')
            //d3version5.select(".chartClass").append('text')
            //d3version5.selectAll(".bar").filter(function(d){return d.hourRange == "0-2"}).append('text')
                .attr('class', 'divergence')
                .attr('x', (a) => xScale(a.hourRange) + xScale.bandwidth() / 2)
                .attr('y', (a) => yScale(a.value)-10)
                .attr('fill', 'black')
                .style('fill', 'black')
                .attr('text-anchor', 'middle')
                .text((a, idx) => {
                var divergence = (a.value - sample1[i]["value"]).toFixed(2)
                
                let text = ''
                if (divergence > 0) text += '+'
                text += `${divergence}`
                
                return idx !== i ? text : a.value;
                })

               
        
            })
            
            
            .on('mouseleave', function (actual) {
            d3version5.selectAll('.value')
                .attr('opacity', 1)
        
            d3version5.select(this)
                .transition()
                .duration(300)
                .attr('opacity', 1)
                .attr('x', (a) => xScale(a.hourRange))
                .attr('width', xScale.bandwidth())

            d3version5.selectAll(".bar").filter(function(d){return d.hourRange == actual.hourRange})
                .transition()
                .duration(300)
                .attr('opacity', 1)
                .attr('x', (a) => xScale(a.hourRange))
                .attr('width', xScale.bandwidth())

            chart.selectAll('#limit').remove()
            d3version5.selectAll('.divergence').remove()
            })
        }
        
        if (svgName == "#svg1"){
        barGroupSvg1 
            .append('text')
            .attr('class', 'value')
            .attr('x', (a) => xScale(a.hourRange) + xScale.bandwidth() / 2)
            .attr('y', (a) => yScale(a.value)-10)
            .attr('text-anchor', 'middle')
            .text((a) => `${a.value}`)
        }

        else{
            barGroupSvg2 
            .append('text')
            .attr('class', 'value')
            .attr('x', (a) => xScale(a.hourRange) + xScale.bandwidth() / 2)
            .attr('y', (a) => yScale(a.value)-10)
            .attr('text-anchor', 'middle')
            .text((a) => `${a.value}`)
        }

        svg
            .append('text')
            .attr('class', 'label')
            .attr('x', -(height / 2) - margin)
            .attr('y', margin / 2.4 - 10)
            .attr('transform', 'rotate(-90)')
            .attr('text-anchor', 'middle')
            .text('Avg daily trips')
        
        svg.append('text')
            .attr('class', 'label')
            .attr('x', width / 2 + margin)
            .attr('y', height + margin * 1.7)
            .attr('text-anchor', 'middle')
            .text('Hours')

        var sex = "";
        if (window.parent.document.getElementById("form"+svgName).gender.value == "1") sex = " - Men";
        if (window.parent.document.getElementById("form"+svgName).gender.value == "2") sex = " - Women";

        svg.append('text')
            .attr('class', 'title')
            .attr('x', width / 2 + margin)
            .attr('y', 40)
            .attr('text-anchor', 'middle')
            .text(function(){if (stationName=="all") return "All Stations" + sex;
                else return stationName.substring(1,stationName.length-1) + sex});
        
        


           
            
}



function highlightBar(e){
    selected_bar = d3version5.selectAll(".bar").filter(function(d){ return d.properties.hourRange == e.properties.name})
    selected_bar.style("fill", "rgb(202, 75, 65)")
    
}

function filterOnStation(){
    stationName = document.getElementById("changer").value;
    console.log(stationName);
    changeIt('#svg1');
    changeIt('#svg2');
}

function changeClusterSM(){
    document.getElementById("clusterIframe").contentWindow.document.getElementById("clusterChanger").value = document.getElementById("holderChange").value;
    document.getElementById("clusterIframe").contentWindow.document.getElementById("clusterSelect").onchange();
}

function resetPlots(){

    stationName = "all";

    d3version5.select("#svg1").selectAll("rect.bar").remove();
    d3version5.select("#svg1").selectAll("text.value").remove();
    d3version5.select("#svg1").selectAll("line").remove();
    d3version5.select("#svg1").selectAll("text").remove();

    d3version5.select("#svg2").selectAll("rect.bar").remove();
    d3version5.select("#svg2").selectAll("text.value").remove();
    d3version5.select("#svg2").selectAll("line").remove();
    d3version5.select("#svg2").selectAll("text").remove();

    window.parent.document.getElementById("form#svg1").gender.value = "both";
    
    window.parent.document.getElementById("minAge#svg1").value = 0;
    window.parent.document.getElementById("maxAge#svg1").value = 115;

    window.parent.document.getElementById("form#svg2").gender.value = "both";
    
    window.parent.document.getElementById("minAge#svg2").value = 0;
    window.parent.document.getElementById("maxAge#svg2").value = 115;

    drawGraph(bikeData, "#svg1", 13000);
    drawGraph(bikeData, "#svg2", 13000);
}