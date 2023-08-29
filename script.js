const listElements = document.querySelectorAll('.link');

listElements.forEach(listElement => {
    listElement.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default click behavior

        if (listElement.classList.contains('active')) {
            listElement.classList.remove('active');
        } else {
            // listElements.forEach(ListE => {
            //     ListE.classList.remove('active');
            // });
            listElement.classList.add('active');
        }
    });
});


// Get references to the buttons and the target divs
const activateButton1 = document.getElementById("open-up");
const activateButton2 = document.getElementById("open-up-2");
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");

// Define functions to toggle the "active" class on the target divs
function toggleDiv1Active() {
  div1.classList.toggle("active");
}

function toggleDiv2Active() {
  div2.classList.toggle("active");
}

// Add click event listeners to the buttons
activateButton1.addEventListener("click", toggleDiv1Active);
activateButton2.addEventListener("click", toggleDiv2Active);

// img opening 
const imgOne = document.getElementById("soda1"); 
const activatorOne = document.getElementById("drinks1"); 

function toggleActiveImg () {
    imgOne.classList.toggle("active"); 
}

activatorOne.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActiveImg();
});

const imgTwo = document.getElementById("soda2"); 
const activatorTwo = document.getElementById("drinks2"); 

function toggleActiveImg2 () {
    imgTwo.classList.toggle("active"); 
}

activatorTwo.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActiveImg2();
});

const imgThree = document.getElementById("soda3"); 
const activatorThree = document.getElementById("drinks3"); 

function toggleActiveImg3 () {
    imgThree.classList.toggle("active"); 
}

activatorThree.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActiveImg3();
});

const imgFour = document.getElementById("soda4"); 
const activatorFour = document.getElementById("drinks4"); 

function toggleActiveImg4 () {
    imgFour.classList.toggle("active"); 
}

activatorFour.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActiveImg4();
});

const imgFive = document.getElementById("soda5"); 
const activatorFive = document.getElementById("drinks5"); 

function toggleActiveImg5 () {
    imgFive.classList.toggle("active"); 
}

activatorFive.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActiveImg5();
});

const imgSix = document.getElementById("soda6"); 
const activatorSix = document.getElementById("drinks6"); 

function toggleActiveImg6 () {
    imgSix.classList.toggle("active"); 
}

activatorSix.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActiveImg6();
});

const imgSeven = document.getElementById("soda7"); 
const activatorSeven = document.getElementById("drinks7"); 

function toggleActiveImg7 () {
    imgSeven.classList.toggle("active"); 
}

activatorSeven.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActiveImg7 ();
});

const img8 = document.getElementById("soda8"); 
const activator8 = document.getElementById("drinks8"); 

function toggleActiveImg8 () {
    img8.classList.toggle("active"); 
}

activator8.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActiveImg8 ();
});



//water 
const pic1 = document.getElementById("water1"); 
const washa1 = document.getElementById("waba1"); 

function toggleActivepic1 () {
    pic1.classList.toggle("active"); 
}

washa1.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActivepic1 ();
});

const pic2 = document.getElementById("water2"); 
const washa2 = document.getElementById("waba2"); 

function toggleActivepic2 () {
    pic2.classList.toggle("active"); 
}

washa2.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActivepic2 ();
});

const pic3 = document.getElementById("water3"); 
const washa3 = document.getElementById("waba3"); 

function toggleActivepic3 () {
    pic3.classList.toggle("active"); 
}

washa3.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActivepic3 ();
});

const pic4 = document.getElementById("water4"); 
const washa4 = document.getElementById("waba4"); 

function toggleActivepic4 () {
    pic4.classList.toggle("active"); 
}

washa4.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActivepic4 ();
});

//ohh there has to be an easy way to do this!! 
// beverages 

const picture1 = document.getElementById("bever1"); 
const lit1 = document.getElementById("chai1"); 

function toggleActivepicture1 () {
    picture1.classList.toggle("active"); 
}

lit1.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActivepicture1 ();
});

const picture2 = document.getElementById("bever2"); 
const lit2 = document.getElementById("chai2"); 

function toggleActivepicture2 () {
    picture2.classList.toggle("active"); 
}

lit2.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActivepicture2 ();
});

const picture3 = document.getElementById("bever3"); 
const lit3 = document.getElementById("chai3"); 

function toggleActivepicture3 () {
    picture3.classList.toggle("active"); 
}

lit3.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActivepicture3 ();
});

const picture4 = document.getElementById("bever4"); 
const lit4 = document.getElementById("chai4"); 

function toggleActivepicture4 () {
    picture4.classList.toggle("active"); 
}

lit4.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActivepicture4 ();
});

const picture5 = document.getElementById("bever5"); 
const lit5 = document.getElementById("chai5"); 

function toggleActivepicture5 () {
    picture5.classList.toggle("active"); 
}

lit5.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActivepicture5 ();
});

const picture6 = document.getElementById("bever6"); 
const lit6 = document.getElementById("chai6"); 

function toggleActivepicture6 () {
    picture6.classList.toggle("active"); 
}

lit6.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActivepicture6 ();
});

const picture7 = document.getElementById("bever7"); 
const lit7 = document.getElementById("chai7"); 

function toggleActivepicture7 () {
    picture7.classList.toggle("active"); 
}

lit7.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActivepicture7 ();
});

const picture8 = document.getElementById("bever8"); 
const lit8 = document.getElementById("chai8"); 

function toggleActivepicture8 () {
    picture8.classList.toggle("active"); 
}

lit8.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActivepicture8 ();
});

//main food section
// there must be an easy way, i need to understand loops and how to use them for such case juu hii ni spaghetti code
const image1 = document.getElementById("main1"); 
const main1 = document.getElementById("food1"); 

function toggleActiveimage1 () {
    image1.classList.toggle("active"); 
}

main1.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActiveimage1 ();
});

const image2 = document.getElementById("main2"); 
const main2 = document.getElementById("food2"); 

function toggleActiveimage2 () {
    image2.classList.toggle("active"); 
}

main2.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActiveimage2 ();
});

const image3 = document.getElementById("main3"); 
const main3 = document.getElementById("food3"); 

function toggleActiveimage3 () {
    image3.classList.toggle("active"); 
}

main3.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActiveimage3 ();
});

const image4 = document.getElementById("main4"); 
const main4 = document.getElementById("food4"); 

function toggleActiveimage4 () {
    image4.classList.toggle("active"); 
}

main4.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActiveimage4 ();
});

const image5 = document.getElementById("main5"); 
const main5 = document.getElementById("food5"); 

function toggleActiveimage5 () {
    image5.classList.toggle("active"); 
}

main5.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActiveimage5 ();
});

const image6 = document.getElementById("main6"); 
const main6 = document.getElementById("food6"); 

function toggleActiveimage6 () {
    image6.classList.toggle("active"); 
}

main6.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActiveimage6 ();
});

const image7 = document.getElementById("main7"); 
const main7 = document.getElementById("food7"); 

function toggleActiveimage7 () {
    image7.classList.toggle("active"); 
}

main7.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActiveimage7 ();
});

const image8 = document.getElementById("main8"); 
const main8 = document.getElementById("food8"); 

function toggleActiveimage8 () {
    image8.classList.toggle("active"); 
}

main8.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActiveimage8 ();
});


const image9 = document.getElementById("main9"); 
const main9 = document.getElementById("food9"); 

function toggleActiveimage9 () {
    image9.classList.toggle("active"); 
}

main9.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActiveimage9 ();
});

const image10 = document.getElementById("main10"); 
const main10 = document.getElementById("food10"); 

function toggleActiveimage10 () {
    image10.classList.toggle("active"); 
}

main10.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActiveimage10 ();
});

const image11 = document.getElementById("main11"); 
const main11 = document.getElementById("food11"); 

function toggleActiveimage11 () {
    image11.classList.toggle("active"); 
}

main11.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActiveimage11 ();
});

//snacks and bitings 
const image12 = document.getElementById("main12"); 
const main12 = document.getElementById("food12"); 

function toggleActiveimage12 () {
    image12.classList.toggle("active"); 
}

main12.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActiveimage12 ();
});

const image13 = document.getElementById("main13"); 
const main13 = document.getElementById("food13"); 

function toggleActiveimage13 () {
    image13.classList.toggle("active"); 
}

main13.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActiveimage13 ();
});

const image14 = document.getElementById("main14"); 
const main14 = document.getElementById("food14"); 

function toggleActiveimage14 () {
    image14.classList.toggle("active"); 
}

main14.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActiveimage14 ();
});

const image15 = document.getElementById("main15"); 
const main15 = document.getElementById("food15"); 

function toggleActiveimage15 () {
    image15.classList.toggle("active"); 
}

main15.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActiveimage15 ();
});

const image16 = document.getElementById("main16"); 
const main16 = document.getElementById("food16"); 

function toggleActiveimage16 () {
    image16.classList.toggle("active"); 
}

main16.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActiveimage16 ();
});


const image17 = document.getElementById("main17"); 
const main17 = document.getElementById("food17"); 

function toggleActiveimage17 () {
    image17.classList.toggle("active"); 
}

main17.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActiveimage17 ();
});


const image18 = document.getElementById("main18"); 
const main18 = document.getElementById("food18"); 

function toggleActiveimage18 () {
    image18.classList.toggle("active"); 
}

main18.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActiveimage18 ();
});

const image19 = document.getElementById("main19"); 
const main19 = document.getElementById("food19"); 

function toggleActiveimage19 () {
    image19.classList.toggle("active"); 
}

main19.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActiveimage19 ();
});

const image20 = document.getElementById("main20"); 
const main20 = document.getElementById("food20"); 

function toggleActiveimage20 () {
    image20.classList.toggle("active"); 
}

main20.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActiveimage20 ();
});

const image21 = document.getElementById("main21"); 
const main21 = document.getElementById("food21"); 

function toggleActiveimage21 () {
    image21.classList.toggle("active"); 
}

main21.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActiveimage21 ();
});

const image22 = document.getElementById("main22"); 
const main22 = document.getElementById("food22"); 

function toggleActiveimage22 () {
    image22.classList.toggle("active"); 
}

main22.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActiveimage22 ();
});

//veggies section

const image23 = document.getElementById("main23"); 
const main23 = document.getElementById("food23"); 

function toggleActiveimage23 () {
    image23.classList.toggle("active"); 
}

main23.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActiveimage23 ();
});

const image24 = document.getElementById("main24"); 
const main24 = document.getElementById("food24"); 

function toggleActiveimage24 () {
    image24.classList.toggle("active"); 
}

main24.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActiveimage24 ();
});

const image25 = document.getElementById("main25"); 
const main25 = document.getElementById("food25"); 

function toggleActiveimage25 () {
    image25.classList.toggle("active"); 
}

main25.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActiveimage25 ();
});

const image26 = document.getElementById("main26"); 
const main26 = document.getElementById("food26"); 

function toggleActiveimage26 () {
    image26.classList.toggle("active"); 
}

main26.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActiveimage26 ();
});

//accompaniements section
const image27 = document.getElementById("main27"); 
const main27 = document.getElementById("food27"); 

function toggleActiveimage27 () {
    image27.classList.toggle("active"); 
}

main27.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActiveimage27 ();
});

const image28 = document.getElementById("main28"); 
const main28 = document.getElementById("food28"); 

function toggleActiveimage28 () {
    image28.classList.toggle("active"); 
}

main28.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActiveimage28 ();
});

const image29 = document.getElementById("main29"); 
const main29 = document.getElementById("food29"); 

function toggleActiveimage29 () {
    image29.classList.toggle("active"); 
}

main29.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActiveimage29 ();
});

const image30 = document.getElementById("main30"); 
const main30 = document.getElementById("food30"); 

function toggleActiveimage30 () {
    image30.classList.toggle("active"); 
}

main30.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActiveimage30 ();
});

const image31 = document.getElementById("main31"); 
const main31 = document.getElementById("food31"); 

function toggleActiveimage31 () {
    image31.classList.toggle("active"); 
}

main31.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActiveimage31 ();
});

//combos start here

const image32 = document.getElementById("main32"); 
const main32 = document.getElementById("food32"); 

function toggleActiveimage32 () {
    image32.classList.toggle("active"); 
}

main32.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActiveimage32 ();
});

const image33 = document.getElementById("main33"); 
const main33 = document.getElementById("food33"); 

function toggleActiveimage33 () {
    image33.classList.toggle("active"); 
}

main33.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActiveimage33 ();
});

const image34 = document.getElementById("main34"); 
const main34 = document.getElementById("food34"); 

function toggleActiveimage34 () {
    image34.classList.toggle("active"); 
}

main34.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActiveimage34 ();
});

const image35 = document.getElementById("main35"); 
const main35 = document.getElementById("food35"); 

function toggleActiveimage35 () {
    image35.classList.toggle("active"); 
}

main35.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    toggleActiveimage35 ();
});





// <!-- Jesus is King  -->