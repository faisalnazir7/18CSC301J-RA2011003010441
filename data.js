var bikeData;

function barChart(){

    d3version5.csv('201810-citibike-tripdata-nov-7-2018.csv')
        .then(function(data) {
            // data is now whole data set
            // draw chart in here!
            drawGraph(data, "#svg1", 13000);
            drawGraph(data, "#svg2", 13000);
            window.provaLocal = "PRova";
            //drawGraph(data)
           /* bikeData = data.filter(function(entry){
            
                return (entry["start station name"] != NULL);
                });*/


            bikeData = data;
                
            
      })

      
        
    }

    function loadData(){
        
            d3version5.csv('201810-citibike-tripdata-nov-7-20182.csv')
            .then(function(data) {
                // data is now whole data set
                // draw chart in here!
                
                //drawGraph(data)
                bikeData = data;
                    
                    
          })
        
        
            
        }