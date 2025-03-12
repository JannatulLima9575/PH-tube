// load categories
function loadCategories() {
  // 1-fetch the data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    // 2-convert promise to json
    .then((res) => res.json())
    // 3-send data to display
    .then((data) => displayCategories(data.categories));
}

// load videos
function loadVideos() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then(responsive => responsive.json())
    .then((data) => displayVideo(data.videos));
}

function displayCategories(categories) {
  // get the container
  const categoryContainer = document.getElementById("category-container");
  // loop operation on array of object
  for (let cat of categories) {
    // console.log(cat);    
    // create Element
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
    <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
    `;
    // Append the element
    categoryContainer.append(categoryDiv);
  }
}

const displayVideo = (videos) => {
  const videoContainer = document.getElementById('video-container');

  videos.forEach(video => {
    console.log(video);

    //create element
    const videoCard = document.createElement('div');
    videoCard.innerHTML = `
    <div class="card bg-base-100">
    <figure class="relative">
      <img class="w-full h-[150px] object-cover"
        src="${video.thumbnail}"
        alt="Shoes" />
        <span class="absolute bottom-2 right-2 text-white text-sm rounded bg-black px-2">3hrs 56 min ago</span>
    </figure>

    <div class="flex gap-3 px-0 py-5">
        <div class="profile">
            <div class="avatar">
                <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
                  <img src="${video.authors[0].profile_picture}"/>
                </div>
              </div>
        </div>
        <div class="intro">
            <h2 class="text-sm font-semibold">Shape of You</h2>
            <p class="text-sm text-gray-400 flex gap-1">${video.authors[0].profile_name} 
            <img class="w-5 h-5" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt=""></p>
                <p class="text-sm text-gray-400">${video.others.views} views</p>
        </div>
    </div>
  </div>
        `;
    //append
    videoContainer.append(videoCard)
  });
}

loadCategories();
loadVideos();