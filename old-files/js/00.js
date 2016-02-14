i=0;
function MenuAnim(){
 TM.rows[0].cells[i].firstChild.style.color="black";
 i=(++i)%7;
 TM.rows[0].cells[i].firstChild.style.color="red";
 IM.src="images/h_"+i+".jpg";
}
function StartAnim(){
alert(111)
 TM=document.getElementById("menu");
 IM=document.getElementById("menuimg");
 setInterval(MenuAnim,3000);
}