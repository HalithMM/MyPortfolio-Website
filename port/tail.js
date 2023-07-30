
  function form(){
    const Nameinput=document.getElementById(Name).value;
    const Emailinput=document.getElementById(Email).value;
    const Messageinput=document.getElementById(Message).value;

    if(Nameinput ===''){
      alert('your Name Is Required');
      return false;
    }
    if (!isValidEmail(Emailinput)) {
      alert('Please enter a valid email address.');
      return false;
    }

  }
  function isValidEmail(Email) {
    const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return EmailRegex.test(Email);
  }
  