var httpReq=new XMLHttpRequest();

var allRecipes=[]

function getRecipes(q){
    httpReq.open('GET',`https://forkify-api.herokuapp.com/api/search?&q=${q}`)
httpReq.send()


httpReq.addEventListener('readystatechange',function(){
    if(httpReq.readyState==4){
        allRecipes=  JSON.parse(httpReq.response).recipes
        display()
    }
})
}
getRecipes(`pizza`)


function display(){
    var box=``
    for(var i=0 ; i<allRecipes.length ; i++){
        box +=` <div class="col-md-4 my-4">
        <div class="recipe">
          <img height="400" class="w-100" src="${allRecipes[i].image_url}" alt="">
          <div class="post">
            <h3 class=" bold color-mine">${allRecipes[i].publisher}</h3>
            <p>${allRecipes[i].title}</p>
            <a class="btn btn-outline-warning" target="_blank" href="${allRecipes[i].source_url}">Visit Source</a>
          </div>
        </div>

      </div>`
    }
    document.getElementById('recipesRow').innerHTML=box;
};

var searchInput = document.getElementById('searchInput')
var searchBtn = document.getElementById('searchBtn')

searchBtn.addEventListener('click',function(){
    
getRecipes(`${searchInput.value}`)

})