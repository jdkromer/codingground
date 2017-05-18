var teamArray = [];
var teamObj = [
        {
            "date": "05/05/2017",
            "team": "Go team",
            "numberoftickets": 2,
            "price": 5.89,
            "sold": 8.46,
            "difference": 3.43
        },
        {
            "date": "05/05/2017",
            "team": "No team",
            "numberoftickets": 5,
            "price": 8.46,
            "sold": 5.89,
            "difference": -3.43
        }
    ];


function cleardisplay()
{
    removedisplay();
    var nodetr = document.createElement("tr");
    var nodetd = document.createElement("td")
    var textnode = document.createTextNode("No Data");

    nodetd.setAttribute("colspan", "6");  
    nodetd.align = "center";
	nodetd.style.fontWeight  = "bolder";

    nodetd.appendChild(textnode);
    nodetr.appendChild(nodetd);
    document.getElementById("myTableBody").appendChild(nodetr);
    document.getElementById("cleardisplay").setAttributeNode(document.createAttribute("disabled"));
    document.getElementById("display").removeAttribute("disabled");
}

function display()
{
	
	readjson();
    removedisplay();	
    var nodetr = [];
    var nodetd = [];
    var textnode = [];
    var numberofticketstotal = 0;
    var pricetotal = 0.00;
    var soldtotal = 0.00;
    var differencetotal = 0.00;
    for(var t in teamObj)
    {
        nodetr[t] = document.createElement("tr");
        //console.log(teamObj[t]);
        for(var x in teamObj[t])
        {  
            nodetd[x + t] = document.createElement("td");
            if(x == "date")
            {
                nodetd[x + t].align = "center";
            }
            if(x == "numberoftickets")
            {
                numberofticketstotal += teamObj[t][x];
                nodetd[x + t].align = "right";
            }
            if(x == "price")
            {
                pricetotal += teamObj[t][x];
                nodetd[x + t].align = "right";
            }
            if(x == "sold")
            {
                soldtotal += teamObj[t][x];
                nodetd[x + t].align = "right";
            }
            if(x == "difference")
            {
                differencetotal += teamObj[t][x];
                nodetd[x + t].align = "right";
            }
           
            textnode[x + t] = document.createTextNode(teamObj[t][x]);
            nodetd[x + t].appendChild(textnode[x + t]);
            nodetr[t].appendChild(nodetd[x + t]);
        }
        document.getElementById("myTableBody").appendChild(nodetr[t])
       
    }
    var lastnodetr = document.createElement("tr");
    var lastnodetd = [];
    var lasttextnode = [];
    for(var l in [0, 1, 2, 3, 4])
    {
        lastnodetd[l] = document.createElement("td");
        if(l == 0)
        {
            lasttextnode[l] = document.createTextNode("Total");
            lastnodetd[l].setAttribute("colspan", "2");
			lastnodetd[l].align = "center";
            lastnodetd[l].style.fontWeight  = "bolder";
              
        }
        if(l == 1)
        {
            lasttextnode[l] = document.createTextNode(numberofticketstotal);
            lastnodetd[l].align = "right";
			lastnodetd[l].style.fontWeight  = "bolder";
        }
        if(l == 2)
        {
            lasttextnode[l] = document.createTextNode(pricetotal.toFixed(2));
            lastnodetd[l].align = "right";
			lastnodetd[l].style.fontWeight  = "bolder";
        }
        if(l == 3)
        {
            lasttextnode[l] = document.createTextNode(soldtotal.toFixed(2));
            lastnodetd[l].align = "right";
			lastnodetd[l].style.fontWeight  = "bolder";
        }
        if(l == 4)
        {
            lasttextnode[l] = document.createTextNode(differencetotal.toFixed(2));
            lastnodetd[l].align = "right";
			lastnodetd[l].style.fontWeight  = "bolder";
        }

        lastnodetd[l].appendChild(lasttextnode[l]);
        lastnodetr.appendChild(lastnodetd[l]);
    }
    document.getElementById("myTableBody").appendChild(lastnodetr)
    document.getElementById("display").setAttributeNode(document.createAttribute("disabled"));
    document.getElementById("cleardisplay").removeAttribute("disabled");
}

function readjson()
{
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
        	teamObj = JSON.parse(this.responseText);
			console.log("test " + teamObj);
    	}
	};
	xmlhttp.open("GET", "teamObj.json", false);
	xmlhttp.send(); 	
	
}

function removedisplay()
{
    var collectionsofchildren = document.getElementById("myTableBody").children;
    
    for(var x =  collectionsofchildren.length - 1; x > 0; x--)
    {
        document.getElementById("myTableBody").removeChild(collectionsofchildren.item(x));        
    }

}
        