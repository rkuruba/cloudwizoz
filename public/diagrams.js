  
  (async function() {
  const response = await axios.get("/diagramData");
  const nodeDataArray = response.data;
 

  
  var $ = go.GraphObject.make;  // for conciseness in defining templates

    myDiagram =
      $(go.Diagram, "myDiagramDiv",  // the DIV HTML element
        {
          // Put the diagram contents at the top center of the viewport
          initialDocumentSpot: go.Spot.TopCenter,
          initialViewportSpot: go.Spot.TopCenter,
          // OR: Scroll to show a particular node, once the layout has determined where that node is
          //"InitialLayoutCompleted": function(e) {
          //  var node = e.diagram.findNodeForKey(28);
          //  if (node !== null) e.diagram.commandHandler.scrollToPart(node);
          //},
          layout:
            $(go.TreeLayout,  // use a TreeLayout to position all of the nodes
              {
                treeStyle: go.TreeLayout.StyleLastParents,
                // properties for most of the tree:
                angle: 90,
                layerSpacing: 80,
                // properties for the "last parents":
                alternateAngle: 0,
                alternateAlignment: go.TreeLayout.AlignmentStart,
                alternateNodeIndent: 20,
                alternateNodeIndentPastParent: 1,
                alternateNodeSpacing: 20,
                alternateLayerSpacing: 40,
                alternateLayerSpacingParentOverlap: 1,
                alternatePortSpot: new go.Spot(0.001, 1, 20, 0),
                alternateChildPortSpot: go.Spot.Left
              })
        });

    // define Converters to be used for Bindings
    // function theNationFlagConverter(nation) {
    //   return "https://www.nwoods.com/go/Flags/" + nation.toLowerCase().replace(/\s/g, "-") + "-flag.Png";
    // }

    function theInfoTextConverter(info) {
      var str = "";
      if (info.type) str += "Type:" + info.type;
      if (info.AvailabilityZone) str += "\n AvailabilityZone: " + info.AvailabilityZone;
      if (info.VpcId) str += "\n VpcId: " + info.VpcId;
      if (info.SubnetId) str += "\n VpcId: " + info.SubnetId;
      if (info.InstanceID) str += "\n InstanceID: " + info.InstanceID;
      if (info.InstanceType) str += "\n InstanceType: " + info.InstanceType;
      if (info.Platform) str += "\n Platform: " + info.Platform;
      if (info.Architecture) str += "\n Architecture: " + info.Architecture;
      if (info.LaunchTime) str += "\n LaunchTime: " + info.LaunchTime;
      if (info.DeviceName) str += "\n DeviceName: " + info.DeviceName;
      if (info.VolumeId) str += "\n VolumeId: " + info.VolumeId;
      if (typeof info.boss === "number") {
        var bossinfo = myDiagram.model.findNodeDataForKey(info.boss);
        if (bossinfo !== null) {
          str += "\n\nReporting to: " + bossinfo.name;
        }
      }
      return str;
    }

    // define the Node template
    myDiagram.nodeTemplate =
      $(go.Node, "Auto",
        // the outer shape for the node, surrounding the Table
        $(go.Shape, "RoundedRectangle",
          { stroke: null, strokeWidth: 0 },
          /* reddish if highlighted, blue otherwise */
          new go.Binding("fill", "isHighlighted", function(h) { return h ? "#F44336" : "#fefff0"; }).ofObject()),
        // a table to contain the different parts of the node
        $(go.Panel, "Table",
          { margin: 6, maxSize: new go.Size(200, NaN) },
          // the two TextBlocks in column 0 both stretch in width
          // but align on the left side
          $(go.RowColumnDefinition,
            {
              column: 0,
              stretch: go.GraphObject.Horizontal,
              alignment: go.Spot.Left
            }),
          // the name
          $(go.TextBlock,
            {
              row: 0, column: 0,
              maxSize: new go.Size(160, NaN), margin: 2,
              font: "500 16px Roboto, sans-serif",
              alignment: go.Spot.Top
            },
            new go.Binding("text", "name")),
          // the country flag
        //   $(go.Picture,
        //     {
        //       row: 0, column: 1, margin: 2,
        //       imageStretch: go.GraphObject.Uniform,
        //       alignment: go.Spot.TopRight
        //     },
        //     // only set a desired size if a flag is also present:
        //     new go.Binding("desiredSize", "nation", function() { return new go.Size(34, 26) }),
        //     new go.Binding("source", "nation", theNationFlagConverter)),
        //   // the additional textual information
          $(go.TextBlock,
            {
              row: 1, column: 0, columnSpan: 2,
              font: "12px Roboto, sans-serif"
            },
            new go.Binding("text", "", theInfoTextConverter))
        )  // end Table Panel
      );  // end Node

    // define the Link template, a simple orthogonal line
    myDiagram.linkTemplate =
      $(go.Link, go.Link.Orthogonal,
        { corner: 5, selectable: false },
        $(go.Shape, { strokeWidth: 3, stroke: "#424242" }));  // dark gray, rounded corner links


    // set up the nodeDataArray, describing each person/position



    var nodeDataArray7 = [
      // { key: 77, type: "project", projectName: "WizOZ" },
      // { key: 79, parent: 77, type: "AWS Cloud", AvailabilityZone: "us-east-1c"},
      // { key: 80, parent: 77, type: "VPC", VpcId: "vpc-1a2b3c4d"},
      // { key: 81, parent: 79, type: "subnet", SubnetId: "subnet-4fcab660"},
      // { key: 82, parent: 79, type: "ec2", InstanceID: "i-02830dbe3b396baf5", InstanceType:"t2.micro", Platform:"windows", Architecture:"x86_64", LaunchTime:"2019-06-25T23:18:47.000Z"},
      // { key: 81, parent: 79, type: "BlockDeviceMappings", DeviceName: "/dev/sda1", VolumeId: "vol-0066996b1c7ede09d"}
 


      { key: 2928508567503280600,
        parent: 2928508567503280600,
        type: 'VPC_ID',
        Vpc_Id: 'vpc-2e9d7d55' },
      { key: 8785525702509842000,
        parent: 2928508567503280600,
        type: 'AZ',
        AvailabilityZone: 'us-east-1a' },
      { key: 11714034270013123000,
        parent: 8785525702509842000,
        type: 'EC2',
        InstanceID: 'i-06068f860157afc8e',
        InstanceType: 't2.micro',
        Platform: 'windows' },
      { key: 20499559972522963000,
        parent: 8785525702509842000,
        type: 'BlockDeviceMappings',
        VolumeId: 'vol-0066996b1c7ede09d' },
      { key: 3823060091417203000,
        parent: 3823060091417203000,
        type: 'VPC_ID',
        Vpc_Id: 'vpc-2e9d7d55' },
      { key: 11469180274251610000,
        parent: 3823060091417203000,
        type: 'AZ',
        AvailabilityZone: 'us-east-1b' },
      { key: 15292240365668813000,
        parent: 11469180274251610000,
        type: 'EC2',
        InstanceID: 'i-06068f860157afc8f',
        InstanceType: 'db.t3.micro',
        Platform: 'RDS' },
      { key: 26761420639920423000,
        parent: 11469180274251610000,
        type: 'BlockDeviceMappings',
        VolumeId: 'vol-0066996b1c7ede09f' },
      { key: 6585245660570768000,
        parent: 6585245660570768000,
        type: 'VPC_ID',
        Vpc_Id: 'vpc-2e9d7d55' },
      { key: 19755736981712306000,
        parent: 6585245660570768000,
        type: 'AZ',
        AvailabilityZone: 'us-east-1a' },
      { key: 26340982642283074000,
        parent: 19755736981712306000,
        type: 'EC2',
        InstanceID: 'i-06068f860157afc8g',
        InstanceType: 'i3.large',
        Platform: 'windows' },
      { key: 46096719623995376000,
        parent: 19755736981712306000,
        type: 'BlockDeviceMappings',
        VolumeId: 'vol-0066996b1c7ede09c' },
      { key: 8286133334100417000,
        parent: 8286133334100417000,
        type: 'VPC_ID',
        Vpc_Id: 'vpc-2e9d7d55' },
      { key: 24858400002301247000,
        parent: 8286133334100417000,
        type: 'AZ',
        AvailabilityZone: 'us-east-1b' },
      { key: 33144533336401666000,
        parent: 24858400002301247000,
        type: 'EC2',
        InstanceID: 'i-06068f860157afc8h',
        InstanceType: 'u-6tb1.metal',
        Platform: 'windows' },
      { key: 58002933338702910000,
        parent: 24858400002301247000,
        type: 'BlockDeviceMappings',
        VolumeId: 'vol-0066996b1c7ede09l' } 
     ];

    // function theInfoTextConverter(info) {
    //     var str = "";
    //     if (info.type) str += "Type:" + info.type;
    //     if (info.AvailabilityZone) str += "\n AvailabilityZone: " + info.AvailabilityZone;
    //     if (info.VpcId) str += "\n VpcId: " + info.VpcId;
    //     if (info.SubnetId) str += "\n VpcId: " + info.SubnetId;
    //     if (info.InstanceID) str += "\n InstanceID: " + info.InstanceID;
    //     if (info.InstanceType) str += "\n InstanceType: " + info.InstanceType;
    //     if (info.Platform) str += "\n Platform: " + info.Platform;
    //     if (info.Architecture) str += "\n Architecture: " + info.Architecture;
    //     if (info.LaunchTime) str += "\n LaunchTime: " + info.LaunchTime;
    //     if (info.DeviceName) str += "\n DeviceName: " + info.DeviceName;
    //     if (info.VolumeId) str += "\n VolumeId: " + info.VolumeId;








    //     if (typeof info.boss === "number") {
    //       var bossinfo = myDiagram.model.findNodeDataForKey(info.boss);
    //       if (bossinfo !== null) {
    //         str += "\n\nReporting to: " + bossinfo.name;
    //       }
    //     }
    //     return str;
    //   }



    // create the Model with data for the tree, and assign to the Diagram
    myDiagram.model =
      $(go.TreeModel,
        {
          nodeParentKeyProperty: "parent",  // this property refers to the parent node data
          nodeDataArray: nodeDataArray
        });

    // Overview
    myOverview =
      $(go.Overview, "myOverviewDiv",  // the HTML DIV element for the Overview
        { observed: myDiagram, contentAlignment: go.Spot.Center });   // tell it which Diagram to show and pan
  
  // the Search functionality highlights all of the nodes that have at least one data property match a RegExp
  function searchDiagram() {  // called by button
    var input = document.getElementById("mySearch");
    if (!input) return;
    input.focus();

    myDiagram.startTransaction("highlight search");

    if (input.value) {
      // search four different data properties for the string, any of which may match for success
      // create a case insensitive RegExp from what the user typed
      var regex = new RegExp(input.value, "i");
      var results = myDiagram.findNodesByExample({ name: regex },
        { nation: regex },
        { title: regex },
        { headOf: regex });
      myDiagram.highlightCollection(results);
      // try to center the diagram at the first node that was found
      if (results.count > 0) myDiagram.centerRect(results.first().actualBounds);
    } else {  // empty string only clears highlighteds collection
      myDiagram.clearHighlighteds();
    }

    myDiagram.commitTransaction("highlight search");
  }

})();