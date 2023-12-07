const accessKey="6HA1bEDk-MNNr4AhgR7UvaIFCGRbB_IyHUcpuEulw6U";


const formEl=document.querySelector("form");
const inputEl=document.getElementById("search-input");
const searchResults=document.querySelector(".search-resutls");
const showMore=document.getElementById("show-more-button");
  

let inputdata="";
let page=1;

   async function searchImages(){
    inputdata=inputEl.value;
    
    
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${accessKey}`;


    const response=await fetch(url)
    const data= await response.json()

    const results=data.results

    if(page === 1){
       searchResults.innerHTML = ""
    }
    results.map((result)=>{
           const imageWrapper=document.createElement('div');
           imageWrapper.classList.add("search-input");
           const image= document.createElement('img');
           image.src=result.urls.small;
           image.alt=result.alt_description;
           const imgaeLink=document.createElement('a');
           imgaeLink.href=result.links.html;
           imgaeLink.target="_blank";
           imgaeLink.textContent=result.alt_description;

           imageWrapper.appendChild(image);
           imageWrapper.appendChild(imgaeLink);
           searchResults.appendChild(imageWrapper);


    });
    page++;

    if(page > 1){
        showMore.style.display="block";
    }
}



formEl.addEventListener("submit",(event)=>{
    event.preventDefault();
    page=1;
    searchImages();

})

showMore.addEventListener("click",()=>{
   
    searchImages();

})