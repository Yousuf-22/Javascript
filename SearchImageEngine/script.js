const form = document.getElementById('searchForm');
const txtF = document.querySelector('#textfield');
const btn = document.querySelector('#btn');

const searchresult = document.querySelector('#searchresult');
const morebtn = document.querySelector('#showmore');

let val = "";
let page = 1;
let accesskey = `yJB8YDy-4s27G30X_k3BXMWbkI-O0U8dKLR9t-nmPAI`;
async function searchimage() {
    val = txtF.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${val}&client_id=${accesskey}&per_page=12`;

    const response = await fetch(url);
    const responseJson = await response.json();
    
    if(page == 1) {
        searchresult.innerHTML = "";
    }

    const results = responseJson.results;

    results.map((e)=> {
        const image = document.createElement("img");
        image.src = e.urls.small;
        const imglink = document.createElement("a");
        imglink.href = e.links.html;    

        // open in new tab..
        imglink.target = "_blank";

        imglink.appendChild(image); 

        searchresult.appendChild(imglink);

    })
    morebtn.style.display = "block";
}

form.addEventListener("submit",(e) => {
    e.preventDefault();
    page = 1;
    searchimage();
})

morebtn.addEventListener('click', function() {
    page++;
    searchimage();
})