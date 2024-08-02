// fetchData that returns a Promise

function fetchData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let message = "Data fetched successfully";
      res(message);
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Data fecthing error", error);
  });

//handle fetchdata error

function fetchDataerror() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let message = "Data fetched successfully";
      let error = "Failed to fetch data";
      rej(error);
    }, 2000);
  });
}

fetchDataerror()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

  // fetchdata using async
async function fetchdataasync() {
  try {
    // let fetchdata = "data fetched successfully";
    const data = await fetch('https://restcountries.com/v3.1/allS')  //INVALID LINK FOR TESTING ERROR HANDLING
    if (data.ok) {
        let message = "data fetchedData fetched successfully";
      console.log(message);

    } else {
        throw "Failed to fetch data";
    }
  } catch (err) {
    console.log(err);
  }
}
fetchdataasync();

async function getCountryData() {
  fetch("https://restcountries.com/v3.1/all")
    .then((Response) => {
      if (Response.ok) {
        return Response.json();
      } else {
        throw Response;
      }
    })
    .then((data) => {
      data.forEach((obj) => {
        console.log(obj);

        const container = document.getElementById("container");
        const newcard = document.createElement("div");
        const all = [
          document.createElement("img"),
          document.createElement("h2"),
          document.createElement("h3"),
          document.createElement("h4")
        ];
        // const name=document.createElement('h2')
        newcard.id = "div-card";
        // const img=document.createElement('img')
        all[0].src = obj.flags.png;
        all[1].innerText = "Name : " + obj.name.common;
        all[2].innerText = "Capital : " + obj.capital;
        all[3].innerText = "Populaton : " + obj.population;
        // newcard.appendChild(img)
        // newcard.appendChild(obj.name.common)
        all.forEach((test) => {
          newcard.appendChild(test);
        });
        container.appendChild(newcard);
      });
    })
    .catch((err) => {
      console.log(err);
      let err_div = document.createElement("h1");
      err_div.innerText = `${err.status} Page Not Found`;
      container.appendChild(err_div);
    });
}
getCountryData();
