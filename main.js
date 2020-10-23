let headElements = document.getElementsByTagName('header')[0];
let mainElements = document.getElementsByTagName('main')[0];

function applyHeadHtml(json) {
    headElements.innerHTML = `
    <h1>${json.main.cosmos}</h1>
    ${json.main.infoFly}
    ${json.main.infoCosmos}
    `;
}

function applyJsonInfo(json) {
    let infoArray = json.info;
    let infoHtml = '';
    for(let info of infoArray) {
        infoHtml += `<p>${info}</p>`;
    }
    let html = `<div class="planet">
        <h4 class="planet-title">${json.title}</h4>
        <img class="planet-img" src="${json.url}">
        <div class="planet-info">${infoHtml}</div>
    </div>`
    return html;
}

function applyPlanetsHtml(json) {
    let planetsInfo = json.planets;
    for(let planet in planetsInfo) {
        mainElements.innerHTML += applyJsonInfo(planetsInfo[planet]);
    }
}

fetch('https://trevadim.github.io/vue/data/data.json')
    .then(response => response.json())
    .then(json => {
        applyHeadHtml(json);
        applyPlanetsHtml(json);
    });
