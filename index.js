let form_button = document.getElementById("submit");
form_button.addEventListener('click',()=>{
 let checkboxes = document.querySelectorAll('input[name="option"]:checked');
 let values =[];
 checkboxes.forEach((checkbox)=>{
  values.push(checkbox.value);
 });

document.getElementById(
       "tablebody").innerHTML=`<tr>
      <td> ${document.getElementById("first-name").value}</td>
      <td> ${document.getElementById("last-name").value}</td>
      <td> ${document.getElementById("address").value}</td>
      <td> ${document.getElementById("pincode").value}</td>
      <td>${document.querySelector('input[name="flexRadioDefault"]:checked').value}</td>
      <td>${values}</td>
      <td> ${document.getElementById("state").value}</td>
      <td> ${document.getElementById("country").value}</td>     
                   </tr> `;
document.getElementById("form").reset();
});