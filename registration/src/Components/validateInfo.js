export default function validateInfo(values) {
  let errors = {};
  let b=true;
  if (!values.username) {
    errors.username = 'Username required';
    b=false;
  } else if (!/^[a-zA-Z\s]{1,120}$/.test(values.username)) {
    errors.username = 'Username is invalid';
    b=false;
  }

  if (!values.email) {
    errors.email = 'Email required';
    b=false;
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
    b=false;
  }

  if (!values.password) {
    errors.password = 'Password is required';
    b=false;
  } else if (values.password.length < 8) {
    errors.password = 'Password needs to be 8 characters or more';
    b=false;
  }

  if (b){
    console.log(`Username: ${values.username} \nEmail: ${values.email} \nPassword: ${values.password}`);
    values.username='';
    values.email='';
    values.password='';
  }

  return errors;
}
