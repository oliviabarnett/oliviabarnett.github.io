$(document).ready(function(){
    
    
    // create an array with nodes
    var nodes = new vis.DataSet([
        {id: 1, label: 'Me'},
        {id: 2, label: 'Isa'},
        {id: 3, label: 'Willa'},
        {id: 4, label: 'Mom'}
    ]);

    // create an array with edges
    var edges = new vis.DataSet([
        {from: 1, to: 2},
        {from: 1, to: 3},
        {from: 1, to: 4},
    ]);

    // create a network
    var container = document.getElementById('mynetwork');

    // provide the data in the vis format
    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {
        nodes:{
            borderWidth: 2,
            size: 40,
            shape: 'ellipse',
            shapeProperties: {
              borderDashes: false, // only for borders
              borderRadius: 10,     // only for box shape
              interpolation: false,  // only for image and circularImage shapes
              useImageSize: false,  // only for image and circularImage shapes
              useBorderWithImage: false  // only for image shape
            },
            color: {
              border: '#393E41',
              background: '#C4B2BC',
              highlight: {
                border: '#393E41',
                background: '#cec0ca'
              },
            hover: {
                border: '#2B7CE9',
                background: '#D2E5FF'
            },
            },
            font: {
              color: '#393E41',
              size: 14, // px
              face: 'raleway, sans-serif',
              background: 'none',
              strokeWidth: 0, // px
              strokeColor: '#ffffff',
              align: 'center',
              multi: false,
              vadjust: 0,
              bold: {
                color: '#343434',
                size: 14, // px
                face: 'arial',
                vadjust: 0,
                mod: 'bold'
              },
              ital: {
                color: '#343434',
                size: 14, // px
                face: 'arial',
                vadjust: 0,
                mod: 'italic',
              },
              boldital: {
                color: '#343434',
                size: 14, // px
                face: 'arial',
                vadjust: 0,
                mod: 'bold italic'
              },
              mono: {
                color: '#343434',
                size: 15, // px
                face: 'courier new',
                vadjust: 2,
                mod: ''
              }
            }
        },
        
        edges: {
            arrows: {
                from: {enabled: true, scaleFactor:1, type:'arrow'},},
            smooth: {
              enabled: true,
              type: "dynamic",
              roundness: 0.7
            }
        }
    };

    // initialize network
    var network = new vis.Network(container, data, options);
    var tabcontent;
    
    
    //initialize "tabs" for info box on right -- all should be hidden except the "me" page
    tabcontent = document.getElementsByClassName("tabs");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    };
    var homeTab = document.getElementById("hometab");
    homeTab.style.display = "block";
    

    
    //switch "tabs" when nodes are clicked. Special case for home tab
    network.on("click", function (params) {
        
        
        if (params.nodes.length != 0) {
            
            tabcontent = document.getElementsByClassName("tabs");
            for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    };
            
            
            
            var infoName = document.getElementById("infoName");
            var ids = params.nodes;
            var clickedNodes = nodes.get(ids);
            var name = clickedNodes[0].label;

            
            for (var t = 0; t <tabcontent.length; t++){
                if (name=="Me"){
                    homeTab.style.display ="block";
                }
                else{
                    if (tabcontent[t].innerHTML.includes(name)){
                        tabcontent[t].style.display = "block";
                        homeTab.style.display = "none";
                    }
                    else{
                        tabcontent[t].style.display = "none";}
                }
                }     
            }
    });
});