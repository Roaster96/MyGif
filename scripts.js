
function printImage(url)
{

   var div =  document.querySelector('#result');
   var img = document.createElement('img');
    var a = document.createElement('a');
     img.src= url;
     img.className ='gallery';
      a.href=img.src;
    


    a.appendChild(img);
    //   a.className='gallery';
  for(let i = 0;i<36;i++)
    {    
        div.appendChild(a);  
        // a.download;
 
    }
    
   
}
function doAjax(){
 var search = document.querySelector('#searchtxt').value;
 var url = `http://api.giphy.com/v1/gifs/search?api_key=vFRSFWo6g7vJ7ZAjt3DMDolU52ORTxwH&q=${search}&limit=36`;
 var promise = fetch(url);
 document.querySelector('#result').innerHTML = '';
 promise.then(response=>{
         response.json().then(data=>{
             console.log('Data is ',data);
             for(let img of data.data){
                 let url = img.images.original.url;
                  printImage(url);
                 console.log('URL is ',url);
             }
         }).catch(e=>console.log('Invalid JSON ',e));
 }).catch(err=>console.log('Network error',err));
}