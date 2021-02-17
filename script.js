
async function youTubeChannelInfo(){
  try{
    let channelInfo = document.getElementById("channelModal");
    channelInfo.innerHTML="";  
    
let response = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?forUsername=Google&key=AIzaSyCzPqEda09Wqh52OZ7WWGs5Dsgb-EgrVqM`)
 let data = await response.json(); 
 channelInfo.innerHTML+="Item kind : " + data["items"][0].kind + "<br>" +
                         "Channel ID : " + data["items"][0].id + "<br>" +
                         "etag : " + data["etag"] + "<br>" +
                         "Page Information " + "<br>" +
                          "Total Results : " + data["pageInfo"]["totalResults"] + " Results Per Page : " + data["pageInfo"]["resultsPerPage"] ; 
                         
                         }
                           catch(error){
    console.log(error);
  }
}

async function displaySubscription(){
  try{
    let subscriptionInfo = document.getElementById("subscriptionModal");
    subscriptionInfo.innerHTML ="";
    let response = await fetch(`https://youtube.googleapis.com/youtube/v3/subscriptions?channelId=UCK8sQmJBp8GCxrOtXWBpyEA&key=AIzaSyCzPqEda09Wqh52OZ7WWGs5Dsgb-EgrVqM`)
    let data = await response.json();
    console.log(data);
    subscriptionInfo.innerHTML += "channel kind : " + data["kind"] + "<br>" +
    "etag : " + data["etag"] + "<br>" +
    "Next Page Token : " + data["nextPageToken"] + "<br>" +
    "Page Information : "  + "<br>" +
    "Total Results : " + data["pageInfo"]["totalResults"] + " " + "Results per page : " +
    data["pageInfo"]["resultsPerPage"] + "<br>" +
    "List of Channel Ids : " + data["items"][0].id + "<br>" +
    data["items"][1].id + "<br>" +
    data["items"][2].id + "<br>" +
    data["items"][3].id + "<br>" +
    data["items"][4].id ; 
         
  }
  catch(error){
console.log(error);
  }
}

async function createPlaylist(){
  try{
    document.getElementById("playlistModal").innerHTML="";
       let respoonse = await fetch(`https://youtube.googleapis.com/youtube/v3/playlists?channelId=UCK8sQmJBp8GCxrOtXWBpyEA&key=AIzaSyCzPqEda09Wqh52OZ7WWGs5Dsgb-EgrVqM`)
        let data = await respoonse.json();       
        console.log(data);
        document.getElementById("playlistModal").innerHTML+= "etag: " + data["etag"] + "<br>"+
        "Next Page Token : " + data["nextPageToken"] + "<br>" +
        "Page Information : "  + "<br>" +
        "Total Results : " + data["pageInfo"]["totalResults"] + " " + "Results per page : " +
        data["pageInfo"]["resultsPerPage"];
      }
  catch(error){
console.log(error);
  }
}

async function searchVideos(searchData){
    let response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${searchData}&key=AIzaSyCzPqEda09Wqh52OZ7WWGs5Dsgb-EgrVqM`)
    let data = await response.json();
    console.log(data);
    alert(`There are ${data["pageInfo"]["totalResults"]} results for the search item! Region Code: ${data["regionCode"]}`);
}
