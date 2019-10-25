var my_event = true;
var my_favorite = true;
// var going_num = 5;
// var interested_num = 12;
var name_user = 'Taylor';

function myEvent() {

    if(my_event){
        document.getElementById('img1').src='Details/image/ic_event_available.png';
        going_num++;
        document.getElementById("myEvent").innerHTML = going_num + ' going';
        alert('You have successfully added this to your event!')
        my_event = !my_event;

        
    } else{
        document.getElementById('img1').src='Details/image/ic_event_available_24px.png';
        going_num--;
        document.getElementById("myEvent").innerHTML = going_num + ' going';
        alert('You have delete this from your event!')
        my_event = !my_event;
    }
    
}

function myFavorite() {
    if(my_favorite){
        document.getElementById('img2').src='Details/image/ic_favorite.png';
        interested_num++;
        document.getElementById("myFavorite").innerHTML = interested_num + ' interested';
        alert('You have successfully added this to your interest!')
        my_favorite = !my_favorite;
    } else{
        document.getElementById('img2').src='Details/image/ic_favorite_24px.png';
        interested_num--;
        document.getElementById("myFavorite").innerHTML = interested_num + ' interested';
        alert('You have delete this from your interest!')
        my_favorite = !my_favorite;
    }
}

function mySend(){
    let text;
    let comment;
    text = document.getElementById('myInput').value;
    if(text===""){
        alert("Comment cannot be Null!")
    }else{
        comment = document.getElementById("new_comment")
        let comment_part = document.createElement('div');
        let username = document.createElement('h3');
        let user_img = document.createElement('img');
        let comment_text = document.createElement('p');
        let line = document.createElement('p');

        user_img.className = 'icon';
        comment_text.className = 'i';
        line.className = 'line';
        user_img.style.display ="inline-block";
        username.style.display ="inline-block";
        user_img.src = 'Details/image/icon5.png';      
        username.innerText = name_user;
        comment_text.innerText = text;
        line.innerText = '__________________________________________________';
        
        comment_part.appendChild(user_img);
        comment_part.appendChild(username);
        comment_part.appendChild(comment_text);
        comment_part.appendChild(line);

        comment.appendChild(comment_part);
        document.getElementById('myInput').value='';
        
    }
    write(text);
}  

function SendMessage(){
    let text;
    let comment;
    text = document.getElementById('message').value;
    if(text===""){
        alert("Message cannot be Null!")
    }else{
        comment = document.getElementById("new_chat")
        let comment_part = document.createElement('div');
        let comment_text = document.createElement('p');
       
        comment_part.className = 'i';
        comment_text.innerText = text;
        
        comment_part.appendChild(comment_text);

        comment.appendChild(comment_part);
        document.getElementById('message').value='';
        
    }
    write(text);

} 


// src="http://www.openlayers.org/api/OpenLayers.js"
// map = new OpenLayers.Map("mapdiv");
// map.addLayer(new OpenLayers.Layer.OSM());
      
// var lonLat = new OpenLayers.LonLat( -0.1279688 ,51.5077286 )
//     .transform(
//         new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
//         map.getProjectionObject() // to Spherical Mercator Projection
//     );
                
// var zoom=16;
      
// var markers = new OpenLayers.Layer.Markers( "Markers" );
// map.addLayer(markers);
          
// markers.addMarker(new OpenLayers.Marker(lonLat));
          
// map.setCenter (lonLat, zoom);
    
