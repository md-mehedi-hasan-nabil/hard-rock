const btn = document.getElementById("search-btn");
const searchBox = document.getElementById("searchBox");
const searchResult = document.getElementById("searchResult");

btn.addEventListener("click", () => {
    const searchValue = document.getElementById("searchBox").value;
    fetch(`https://api.lyrics.ovh/suggest/${searchValue}`)
        .then(res => res.json())
        .then(info => {
            console.log(info);
            for (let i = 0; i < 10; i++) {
                const item = info.data[i];
                let title = item.title;
                let title_short = item.title_short;
                let artist = item.artist;
                let name = artist.name;
                let section = document.createElement("section");
                section.setAttribute("class", "moreInfo");
                section.setAttribute("id", "hide");
                let elements = `<div class="single-result row align-items-center my-3 p-3">
                    <div class="col-md-9">
                        <h3 class="lyrics-name">${name}</h3>
                        <p class="author lead">Album by <span>${title}</span></p>
                    </div>
                    <div class="col-md-3 text-md-right text-center">
                        <button class="btn btn-success" id="lyrics">Get Lyrics</button>
                    </div>
                </div>`;
                section.innerHTML = elements;
                searchResult.appendChild(section);
            }
        });
});



searchBox.addEventListener("blur", () => {
    searchBox.style.color = "#fff";
});
searchBox.addEventListener("focus", () => {
    searchBox.style.color = "#000";
});