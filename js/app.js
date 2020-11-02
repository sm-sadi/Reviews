const reviews= [
    { imageURL : "./files/userOne.jpg",
      author: "Christian Bale",
      job : "Batman",
      info  : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, beatae?"
    },
    { imageURL : "/files/userTwo.jpg",
      author: "michle jackson ",
      job : "musician",
      info  : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, beatae?"
    },
    { imageURL : "./files/userThree.jpg",
      author: "robert patinson ",
      job : "Actor",
      info  : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, beatae?"
    },
    { imageURL : "./files/userFour.jpg",
      author: "brad pit ",
      job : "producer",
      info  : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, beatae?"
    },
    { imageURL : "./files/userFive.jpg",
      author: "zia ur rahman",
      job : "Ex president",
      info  : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, beatae?"
    }
];

// selectors
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
//  buttons 
const nextbtn = document.getElementById("nextbtn");
const randombtn = document.getElementById("random");
const prevbtn = document.getElementById("prebtn");



let review = 0;


function ChangeReview(review){
    author.innerHTML=reviews[review].author;
    job.innerHTML=reviews[review].job;
    info.innerHTML=reviews[review].info;
    img.src =reviews[review].imageURL;
};

nextbtn.addEventListener("click", function nextreiview() {
    ChangeReview(review);  
    review ++;
    if(review>4){
        review = 0;        
    }
}
);

prevbtn.addEventListener("click", function prereiview() {
    ChangeReview(review);
    review --;
    if(review<0){
        review = 4;       
    }
}
);

randombtn.addEventListener("click", function prereiview() {
  const randomN = Math.floor(Math.random() * reviews.length ) ;
 
 ChangeReview(randomN);
}
);
