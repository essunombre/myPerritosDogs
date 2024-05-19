console.log("This will be the repo for the dogs rpoyect api");
console.log(fetch("https://dog.ceo/api/breed/dachshund/images/random"));

// fetch always succeeds so I need to validate the response
fetch("https://dog.ceo/api/breed/dachshund/images/random")
  .then((res) => {
    if (res.ok) {
      console.log('SUCCESS');
    } else{
      console.log('NOT SUCCESSFUL')
    }
    res.json();
  })
  .then((data) => console.log(data));
