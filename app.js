const input = document.querySelectorAll("input");
const br = document.createElement("br");

input.forEach((inp) => {
  inp.parentElement.insertBefore(br.cloneNode(), inp.nextElementSibling)
})
const endDate = "02 may 2024 5:29:30 AM";

function clock() {
  let eDate = new Date(endDate);
  let date = new Date();
  let getDay = Math.floor((eDate - date) / 1000);
  let day = Math.floor((getDay / 60 / 60 / 24));
  let hour = Math.floor((getDay / 60 / 60)%24);
  let minute = Math.floor((getDay / 60)% 60);
  let second = Math.floor(getDay % 60);
  if(getDay < 0){
    return clock();
   }
  input[0].value = day;
  input[1].value = hour;
  input[2].value = minute;
  input[3].value = second;

}
clock();

setInterval(() => {
    clock();
}, 1000);
