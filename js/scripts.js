// Scripting

// Data source
const url = "https://assets.codepen.io/16425/spring23web3.json";

// Get data
fetch(url)
  .then( response  => response.json())
  .then( data  => {
    
    // check-check: is the data good?
    console.log(data);
    console.log(data.Name);
    console.log(data.Image);

    // get container for data
    const roster = document.querySelector(".roster");

    // loop through data
    data.forEach( student => {
      
      // template
      const template = `
          <figure>
            <figcaption> ${student.Name} </figcaption>
            <img src=" ${student.Image} " alt=" ${student.Name} ">
            <p><span> Emoji: </span> ${student.Emoji} </p>
            <p><span> Quote: </span> ${student.Quote} </p>
            <p><span> Superpower: </span> ${student.Superpower}</p>
            <p><span> Favorite Color: </span> ${student.Color}</p>
          </figure>
       `;

      // insert EACH `student` record into container
      roster.insertAdjacentHTML("afterbegin", template);
    });
  });
