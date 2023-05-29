function SubMenu(sublist, subel) {
    let subList = sublist
    let subEl = subel
    for (let i = 0; i < subList.length; i++) {
        document.getElementById(`${subList[i]}`).addEventListener("click", function () {
            subEl[i].classList.toggle("showopt");
            for (let j = 0; j < subEl.length; j++) {
                if (subEl[i] !== subEl[j]) {
                    subEl[j].classList.remove("showopt");
                }
            }
        });
    }
}
let sub1List = ["about", "services", "training", "social-media"];
let sub1El = document.querySelectorAll(".sub1");
let sub2List = ["marketing", "mobile-app", "development"];
let sub2El = document.querySelectorAll(".sub2");
SubMenu(sub1List,sub1El);
SubMenu(sub2List,sub2El);