const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

// I create a variable that takes an element of the html
let postElement = document.getElementById("container");

// I open a loop that allows me to show all the elements in the object on the screen
posts.forEach(function(currentElement, index){

    // I set the date in Italian format
    let itDate = currentElement.created.split("-").reverse().join("-");

        // I insert all the html code into the created variable, modifying the sections based on the elements present in the object
        postElement.innerHTML +=  `        
        <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${currentElement.author.image}" alt="${currentElement.author.name}">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${currentElement.author.name}</div>
                    <div class="post-meta__time">${itDate}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${currentElement.content}</div>
        <div class="post__image">
            <img src="${currentElement.media}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="${currentElement.id}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${currentElement.id}" class="js-likes-counter">${currentElement.likes}</b> persone
                </div>
            </div> 
        </div>            
        </div>`;

        // I create a variable that takes the parent html element of the profile picture
        let profPicture = document.querySelectorAll(".post-meta__icon");

        // I create a condition such that if there is no profile picture,
        // remove the img element,
        // replace it with a div with an assigned class that handles a small text,
        // the initials of the name are taken into a variable and inserted into the created div.
        if (currentElement.author.image == null) {
            let profName = currentElement.author.name.split(" ").map((n)=>n[0]).join("");
            profPicture[index].removeChild;
            profPicture[index].innerHTML = `<div class="profile-pic-default">
                                                    <span>${profName}</span>
                                            </div>`;
        }

});


let likeButton = document.querySelectorAll(".like-button");
let likeNumber = document.querySelectorAll(".js-likes-counter");
let idArray = [];

// I open a loop for the buttons, with an event listener inside it
likeButton.forEach(function (button, count) {

    button.addEventListener("click", function(clicked){
        
        // I create a variable that adds the class when the button is clicked
        // I take the value present in the ids of the object elements
        // I insert the position of the element into the arrayElement variable with indexOf
        let buttonClicked = button.classList.contains("like-button--liked");
        clicked.preventDefault();
        const postId = button.dataset.postid;
        const arrayElement = idArray.indexOf(postId);

        // If the button already has the assigned class,
        // removes it, and removes the like from the count
        // Checks if the id is already present in the idArray and cuts it
        if (buttonClicked) {

            likeNumber[count].innerHTML --;
            button.classList.remove("like-button--liked");  
            
            if (idArray.includes(postId)){

                idArray.splice(arrayElement, 1);

            }

        } else {
            
            // If the class is not present on the button, 
            // adds it, increases the like count
            // and push the id into the array
            likeNumber[count].innerHTML ++;
            button.classList.add("like-button--liked");
            idArray.push(postId);

        }

        // Shows the IDs of the posts we have liked in the console
        console.log(idArray);
    })

});


