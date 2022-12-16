var signupName = document.querySelector("#signupName");
var signupEmail = document.querySelector("#signupEmail");
var signupPassward = document.querySelector("#signupPassward");
var signinEmail = document.querySelector("#signinEmail");
var signinPassward = document.querySelector("#signinPassward");
var list=[];
var currentName;
if (localStorage.getItem("Data") != null){
   list = JSON.parse(localStorage.getItem("Data"));
}

////////////////Logout//////////////////////
if(document.querySelector("#Button")!=null){
    document.querySelector("#Button").addEventListener("click",function(){
        if(signupName.value== "" ||signupEmail.value== "" ||signupPassward.value== "" ){
            document.querySelector(".NotComplete").classList.remove('d-none')
        }
        else{
            SignUp();
            window.open('welcome.html',"_self")

        }
    })}

 

function SignUp(){
    if (validatesignupName() == true&& validatesignupEmail() == true&& validatesignupPassward() == true) {

 var myData={
    Name:signupName.value ,
    Email:signupEmail.value,
    Passward:signupPassward.value,
 }
    list.push(myData);
    localStorage.setItem("Data",JSON.stringify(list));
    document.querySelector(".Correct").classList.remove('d-none');
    Clearform();

}}
function Clearform(){
   signupName.value ="";
   signupEmail.value ="";
   signupPassward.value ="";
   document.querySelector(".NotComplete").classList.add('d-none');

}

    /////////////////Login///////////////////////
   
    if(document.querySelector("#Button1") != null){
        document.querySelector("#Button1").addEventListener("click" , function(){
            if(signinEmail.value == "" || signinPassward.value == ""){
                document.querySelector(".NotComplete").classList.remove('d-none');
            }
            else{
              window.open('welcome.html',"_self")
            }
            ClearDate()
            })}
       
            function ClearDate(){
                signinEmail.value ="";
                signinPassward.value ="";
                document.querySelector(".NotComplete").classList.add('d-none');
             
             }
            
          ////////////////page welcome////////////////////////////
           $('.container-fluid').animate({width:'100%'},1000);
           $('.container-fluid').animate({height:'100vh'},1000,function(){
            $('.container-fluid h3').fadeIn(1000,function(){
                $('.container-fluid >p').show(1000,function(){
                    $('.col-md-12').slideDown(1000)
                });
            });

           });
           ///////////////////////////////validateAll//////////////////////////////////
           function validatesignupName() {
            var regex = /^[A-Z][a-z]{3,8}$/;
        
            if (regex.test(signupName.value) == true) {
                        document.getElementById("name-validation").classList.replace("d-block", "d-none");
        
            return true
            } else {
                document.getElementById("name-validation").classList.replace("d-none","d-block")
             return false
            }
           }
            /////////////////////////////////////////////////////////////
         function validatesignupEmail() {
            var regex = /^[a-z]{3,}[0-9]{2,3}@(yahoo|gmail)\.com$/;
        
            if (regex.test(signupEmail.value||signinEmail.value) == true) {
                        document.getElementById("email-validation").classList.replace("d-block", "d-none");
        
            return true
            } else {
                document.getElementById("email-validation").classList.replace("d-none","d-block")
             return false
            }
        }
        ///////////////////////////////////////////////////////////////////////////
          
        function validatesignupPassward() {
            var regex = /^[A-Za-z0-9]{5,}$/;
        
            if (regex.test(signupPassward.value) == true) {
                        document.getElementById("Passward-validation").classList.replace("d-block", "d-none");
        
            return true
            } else {
                document.getElementById("Passward-validation").classList.replace("d-none","d-block");
             return false
            }
        }
        ////////////////////////////////////////////////////
        function validatesignInEmail() {
            var regex = /^[a-z]{3,}[0-9]{2,3}@(yahoo|gmail)\.com$/;
        
            if (regex.test(signinEmail.value) == true) {
                        document.getElementById("email-validation").classList.replace("d-block", "d-none");
        
            return true
            } else {
                document.getElementById("email-validation").classList.replace("d-none","d-block")
             return false
            }
        }
        /////////////////////////////////////////////////
        function validatesignInPassward() {
            var regex = /^[A-Za-z0-9]{5,}$/;
            if (regex.test(signinPassward.value) == true) {
                        document.getElementById("Passward-validation").classList.replace("d-block", "d-none");
        
            return true
            } else {
                document.getElementById("Passward-validation").classList.replace("d-none","d-block");
             return false
            }
        }