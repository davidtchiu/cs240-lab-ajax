/**
 * This asynchronous method fetches all dog breeds (sub breeds ignored)
 */
async function getBreeds() {
  try {
    let request = await axios.get("https://dog.ceo/api/breeds/list/all");
    let dropdown = document.querySelector("select");
    for (let b in request.data.message) {
      let option = document.createElement("option");
      option.value = b;
      option.innerHTML = b;
      dropdown.appendChild(option);
    }
  } catch (error) {
    console.log(error);
  }
}

/**
 * This asynchronous method fetches a random pic of a given breed
 * @param {string} breed
 * @returns Node
 */
async function getRandomPic(breed) {
  try {
    let request = await axios.get(
      `https://dog.ceo/api/breed/${breed}/images/random`
    );
    let img = document.createElement("img");
    img.src = request.data.message;
    return img;
  } catch (error) {
    console.log(error);
  }
}

/**
 * Main
 */
// fill the dropdown menu
getBreeds();

// add a listener to the button to wait for the img and appends it to the HTML
let button = document.querySelector("button");
button.addEventListener("click", async function () {
  let img = await getRandomPic(document.querySelector("select").value);
  let div = document.querySelector("div");
  div.innerHTML = "";
  div.appendChild(img);
});
