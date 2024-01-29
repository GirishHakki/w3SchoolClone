import { Tutorials } from "./Data/Tutorials.js"
import {References} from "./Data/References.js"

//***** */ 
let mobileTutorialContent = ""
let mobileReferencesContent = ""


// section is  menu-btn-mobile
let MenuBtnMobileE1 = document.getElementById("menu-btn-mobile")
let MenuBtnMobileE1OpenBoolen = false
let mobileMenuNavE1 = document.getElementById("mobile-menu-nav")

MenuBtnMobileE1.addEventListener("click",()=>{
    if (MenuBtnMobileE1OpenBoolen){
        // mobileMenuNavE1.style.display = "none"
        mobileMenuNavE1.classList.remove("mobile-menu-nav-hidden")
        MenuBtnMobileE1OpenBoolen = false
    }
    else{
        // mobileMenuNavE1.style.display = "block"
        mobileMenuNavE1.classList.add("mobile-menu-nav-hidden")
        MenuBtnMobileE1OpenBoolen = true
    }
}
)

// this is for xmark
let mobileNavcloseE1 = document.getElementById("mobile-nav-close")

mobileNavcloseE1.addEventListener("click",()=>{
    // mobileMenuNavE1.style.display = "none"
    mobileMenuNavE1.classList.remove("mobile-menu-nav-hidden")
    MenuBtnMobileE1OpenBoolen = false
}
)

//***************** Tutorial-btn ************ */
const NestedNavigationContainer = document.getElementById("nested-navigation-container_id")
let TutorialE1 = document.getElementById("Tutorial-btn")
const nestedNavigationCloseBtn = document.getElementById("nested-navigation-close-btn")

TutorialE1.addEventListener("click",toggleTutorial)
nestedNavigationCloseBtn.addEventListener("click",closeMenuContent)

function closeMenuContent(){
    NestedNavigationContainer.classList.toggle("nested_navigation_hidden")

    // tutorial
    TutorialE1.classList.remove("bg-black")
    TutorialE1.classList.remove("text-white")

    // reference
    referenceBtnE1.classList.remove("bg-black")
    referenceBtnE1.classList.remove("text-white")

    // exercises
    exercisesBtnE1.classList.remove("bg-black")
    exercisesBtnE1.classList.remove("text-white")
}


function toggleTutorial(){
    TutorialE1.classList.toggle("bg-black")
    TutorialE1.classList.toggle("text-white")
    NestedNavigationContainer.classList.remove("nested_navigation_hidden")

    tutorialMenuDisplayAll()
    // reference
    referenceBtnE1.classList.remove("bg-black")
    referenceBtnE1.classList.remove("text-white")

    // exercises
    exercisesBtnE1.classList.remove("bg-black")
    exercisesBtnE1.classList.remove("text-white")
}

// ***************** Tutorial data
console.log(Tutorials)

// ******************************************
let nestedNavigationContainerContentID = document.getElementById("nested-navigation-container_contentID")
let nestedNavigationHeading = ''
let nestedNavigationTab1 = ''
let nestedNavigationTab2 = ''
let nestedNavigationTab3 = ''
let nestedNavigationTab4 = ''


// mobile tutorial menu********************
const tutorialMenuLinkMobileE1 = document.getElementById("tutorial_menuLink_mobile")
let TutorialMenuMobileE1 = document.getElementById("Tutorial_menu_mobile")


tutorialMenuLinkMobileE1.addEventListener("click",()=>{
    tutorialMenuDisplayAll()
    let tutorialMenuTab_Mobile = mobileTutorialContent

    tutorialMenuLinkMobileE1.classList.toggle("mobile_menu_Active")
    TutorialMenuMobileE1.classList.toggle("mobile_menuActive_tutorial")

    TutorialMenuMobileE1.innerHTML = tutorialMenuTab_Mobile

})
// mobile reference menu********************
const referencesMenuLinkMobileE1 = document.getElementById("references_menuLink_mobile")
let referencesMenuMobileE1 = document.getElementById("references_menuLink_mobile")


referencesMenuLinkMobileE1.addEventListener("click",()=>{
    referenceContent()
    let tutorialMenuTab_Mobile = mobileReferencesContent

    referencesMenuLinkMobileE1.classList.toggle("mobile_menu_Active")
    referencesMenuMobileE1.classList.toggle("mobile_menuActive_tutorial")

    referencesMenuMobileE1.innerHTML = tutorialMenuTab_Mobile

})
























function tutorialMenuDisplayAll(){
    nestedNavigationHeading = ''
    nestedNavigationTab1 = ''
    nestedNavigationTab2 = ''
    nestedNavigationTab3 = ''
    nestedNavigationTab4 = ''

// heading
nestedNavigationHeading = `<h1>${Tutorials.name}</h1>`

// sub menu
// 1
nestedNavigationTab1 = `<h2>${Tutorials.HTMLANDCSS.name}</h2>`
Tutorials.HTMLANDCSS.menu.forEach(el =>{
    nestedNavigationTab1 += `<a href="${el.link}">${el.title}</a>`
})

// 2
nestedNavigationTab2 += `<h2>${Tutorials.JavaScript.name}</h2>`
Tutorials.JavaScript.menu.forEach(el =>{
    nestedNavigationTab2 += `<a href="${el.link}">${el.title}</a>`
})

// 3
nestedNavigationTab3 += `<h2>${Tutorials.Python.name}</h2>`
Tutorials.Python.menu.forEach(el =>{
    nestedNavigationTab3 += `<a href="${el.link}">${el.title}</a>`
})

// 4
nestedNavigationTab4 += `<h2>${Tutorials.DevOps.name}</h2>`
Tutorials.DevOps.menu.forEach(el =>{
    nestedNavigationTab4 += `<a href="${el.link}">${el.title}</a>`
})


    // render all the menu
nestedNavigationContainerContentID.innerHTML = `
${nestedNavigationHeading}
<div class="nested-navigation-container_content_data">
    <div class="nested-navigation_item">
        ${nestedNavigationTab1}
    </div>
    <div class="nested-navigation_item">
        ${nestedNavigationTab2}
    </div>
    <div class="nested-navigation_item">
        ${nestedNavigationTab3}
    </div>
    <div class="nested-navigation_item">
        ${nestedNavigationTab4}
    </div>
</div>
`

mobileTutorialContent = nestedNavigationHeading + nestedNavigationTab1 + nestedNavigationTab2 + nestedNavigationTab3 + nestedNavigationTab4

nestedNavigationHeading = ''
nestedNavigationTab1 = ''
nestedNavigationTab2 = ''
nestedNavigationTab3 = ''
nestedNavigationTab4 = ''

}

/// reference section javascript
console.log(References)
let referenceBtnE1 = document.getElementById("reference-btn")
referenceBtnE1.addEventListener("click",()=>{
    // alert("hii")
    referenceBtnE1.classList.toggle("bg-black")
    referenceBtnE1.classList.toggle("text-white")
    NestedNavigationContainer.classList.remove("nested_navigation_hidden")

    // tutorial
    TutorialE1.classList.remove("bg-black")
    TutorialE1.classList.remove("text-white")

    // exercises
    exercisesBtnE1.classList.remove("bg-black")
    exercisesBtnE1.classList.remove("text-white")

    referenceContent()
})

// exercises-btn
let exercisesBtnE1 = document.getElementById("exercises-btn")

exercisesBtnE1.addEventListener("click",()=>{
    exercisesBtnE1.classList.toggle("bg-black")
    exercisesBtnE1.classList.toggle("text-white")
    NestedNavigationContainer.classList.remove("nested_navigation_hidden")

    // tutorial
    TutorialE1.classList.remove("bg-black")
    TutorialE1.classList.remove("text-white")

    // reference
    referenceBtnE1.classList.remove("bg-black")
    referenceBtnE1.classList.remove("text-white")

})

function referenceContent(){
nestedNavigationHeading = ''
nestedNavigationTab1 = ''
nestedNavigationTab2 = ''
nestedNavigationTab3 = ''
nestedNavigationTab4 = ''

    // heading
nestedNavigationHeading += `<h1>${References.name}</h1>`

// sub menu
// 1
nestedNavigationTab1 = `<h2>${References.HTML.name}</h2>`
References.HTML.menu.forEach(el =>{
    nestedNavigationTab1 += `<a href="${el.link}">${el.title}</a>`
})
nestedNavigationTab1 += `<h2>${References.CSS.name}</h2>`
References.CSS.menu.forEach(el =>{
    nestedNavigationTab1 += `<a href="${el.link}">${el.title}</a>`
})

// 2
nestedNavigationTab2 += `<h2>${References.JavaScript.name}</h2>`
References.JavaScript.menu.forEach(el =>{
    nestedNavigationTab2 += `<a href="${el.link}">${el.title}</a>`
})

// 3
nestedNavigationTab3 += `<h2>${References.Python.name}</h2>`
References.Python.menu.forEach(el =>{
    nestedNavigationTab3 += `<a href="${el.link}">${el.title}</a>`
})

// 4
nestedNavigationTab4 += `<h2>${References.DevOps.name}</h2>`
References.DevOps.menu.forEach(el =>{
    nestedNavigationTab4 += `<a href="${el.link}">${el.title}</a>`
})


    // render all the menu
nestedNavigationContainerContentID.innerHTML = `
${nestedNavigationHeading}
<div class="nested-navigation-container_content_data">
    <div class="nested-navigation_item">
        ${nestedNavigationTab1}
    </div>
    <div class="nested-navigation_item">
        ${nestedNavigationTab2}
    </div>
    <div class="nested-navigation_item">
        ${nestedNavigationTab3}
    </div>
    <div class="nested-navigation_item">
        ${nestedNavigationTab4}
    </div>
</div>
`
mobileReferencesContent() = nestedNavigationHeading + nestedNavigationTab1 + nestedNavigationTab2 + nestedNavigationTab3 + nestedNavigationTab4

nestedNavigationHeading = ''
nestedNavigationTab1 = ''
nestedNavigationTab2 = ''
nestedNavigationTab3 = ''
nestedNavigationTab4 = ''

}

/************************************************/
 const htmlCode = `<!DOCTYPE html>
        <html>
        <title>HTML Tutorial</title>
        <body>

            <h1>this is heading</h1>
            <p>this is paragraph</p>

        </body>
        </html>


 `

document.getElementById("htmlcode").innerText = htmlCode

 /************************************************/

 const cssCode = `body {
    background-color: lightblue;
  }
  
  h1 {
    color: white;
    text-align: center;
  }
  
  p {
    font-family: verdana;
  }
 `
document.getElementById("cssCode").innerText = cssCode


// ************************************

const javascriptCode = `<button onclick="myFunction()">Click Me!</button>

<script>
function myFunction() {
  let x = document.getElementById("demo");
  x.style.fontSize = "25px";
  x.style.color = "red";
}
</script>

`
document.getElementById("javaScriptCode").innerText = javascriptCode


// ************************************

const pythonCode = `print("Girish Hakki !")
  
  




  
  `
 document.getElementById("pythonCode").innerText = pythonCode

 // ************************************
 const SQLCode = `SELECT * FROM Customers
 WHERE Country='India';
 
 




 
 `
document.getElementById("SQLCode").innerText = SQLCode




