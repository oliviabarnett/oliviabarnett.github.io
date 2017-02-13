$(document).ready(function() {
        var names = ['Facebook', 'Instagram', 'Text Messages', 'Snapchat'];
    
        var groups = new vis.DataSet();
            groups.add({
                id: 0,
                content: names[0],
                //className: 'custom-style0',
              })
            groups.add({
                id: 1,
                content: names[1],
                //className: 'custom-style1',
            })
            groups.add({
                id: 2,
                content: names[2],
                //className: 'custom-style2',
            })
            groups.add({
                id: 3,
                content: names[3],
                //className: 'custom-style3',
            });
            
        var container = document.getElementById('visualization');
        
    
        var d = new Date();
        var seven = new Date();
        var six = new Date();
        var five = new Date();
        var four = new Date();
        var three = new Date();
        var two = new Date();
        var one = new Date();
    
    
        var test = d.getDate();
        seven.setDate(d.getDate() - 7);
        six.setDate(d.getDate() - 6);
        five.setDate(d.getDate() - 5);
        four.setDate(d.getDate() - 4);
        three.setDate(d.getDate() - 3);
        two.setDate(d.getDate() - 2);
        one.setDate(d.getDate() - 1);
        
        var items = [
                {x: seven, y: 2, group: 0},
              {x: six, y: 23, group: 0},
              {x: five, y: 10, group: 0},
              {x: four, y: 25, group: 0},
              {x: three, y: 30, group: 0},
              {x: two, y: 10, group: 0},
              {x: one, y: 15, group: 0},
              {x: Date(), y: 30, group: 0},
              
                {x: seven, y: 2, group: 1},
              {x: six, y: 23, group: 1},
              {x: five, y: 5, group: 1},
              {x: four, y: 5, group: 1},
              {x: three, y: 35, group: 1},
              {x: two, y: 40, group: 1},
              {x: one, y: 2, group: 1},
              {x: Date(), y: 20, group: 1},
              
            {x: seven, y: 7, group: 2},
              {x: six, y: 5, group: 2},
              {x: five, y: 3, group: 2},
              {x: four, y: 4, group: 2},
              {x: three, y: 5, group: 2},
              {x: two, y: 20, group: 2},
              {x: one, y: 0, group: 2},
              {x: Date(), y: 20, group: 2},
              
            {x: seven, y: 6, group: 3},
              {x: six, y: 35, group: 3},
              {x: five, y: 0, group: 3},
              {x: four, y: 0, group: 3},
              {x: three, y: 0, group: 3},
              {x: two, y: 10, group: 3},
              {x: one, y: 20, group: 3},
              {x: Date(), y: 30, group: 3}
          ];
            

          var dataset = new vis.DataSet(items);
          var options = {
              start: d.setDate(d.getDate() - 7),
              end: Date(),
              dataAxis: {left: {title: {text: 'Activity in # of instances'}}}
            };
          
        var graph2d = new vis.Graph2d(container, items, groups, options);


    
//fill external legend

    
 function populateExternalLegend() {
    var groupsData = groups.get();
    var legendDiv = document.getElementById("Legend");
    legendDiv.innerHTML = "";
    // get for all groups:
    for (var i = 0; i < groupsData.length; i++) {
      // create divs
      var containerDiv = document.createElement("div");
      var iconDiv = document.createElement("div");
      var descriptionDiv = document.createElement("div");
      // give divs classes and Ids where necessary
      containerDiv.className = 'legend-element-container';
      containerDiv.id = groupsData[i].id + "_legendContainer"
      iconDiv.className = "icon-container";
      descriptionDiv.className = "description-container";
        
      // get the legend for this group.
      var legend = graph2d.getLegend(groupsData[i].id,30,30);
        
      // append class to icon. All styling classes from the vis.css/vis-timeline-graph2d.min.css have been copied over into the head here to be able to style the
      // icons with the same classes if they are using the default ones.
      legend.icon.setAttributeNS(null, "class", "legend-icon");
      // append the legend to the corresponding divs
      iconDiv.appendChild(legend.icon);
      descriptionDiv.innerHTML = legend.label;
        
      // determine the order for left and right orientation
      if (legend.orientation == 'left') {
        descriptionDiv.style.textAlign = "left";
        containerDiv.appendChild(iconDiv);
        containerDiv.appendChild(descriptionDiv);
            }
      else {
        descriptionDiv.style.textAlign = "right";
        containerDiv.appendChild(descriptionDiv);
        containerDiv.appendChild(iconDiv);
      }
      // append to the legend container div
      legendDiv.appendChild(containerDiv);
      // bind click event to this legend element.
      containerDiv.onclick = toggleGraph.bind(this, groupsData[i].id);
      
    }
  }
  /**
   * This function switches the visible option of the selected group on an off.
   * @param groupId
   */
  function toggleGraph(groupId) {
    // get the container that was clicked on.
    var container = document.getElementById(groupId + "_legendContainer")
    // if visible, hide
    if (graph2d.isGroupVisible(groupId) == true) {
      groups.update({id:groupId, visible:false});
      //container.className = container.className + " hidden";
    }
    else { // if invisible, show
      groups.update({id:groupId, visible:true});
      container.className = container.className.replace("hidden","");
    }
  }
  populateExternalLegend();
    
    
});


 




