class Temperatura {
  constructor(detalhes) {
    this.detalhes = detalhes;
  }
  
  obterLocalizacao() {
    return `${this.detalhes.location.name}, ${this.detalhes.location.country}`;
  }

  obterIcone() {
    return this.detalhes.current.weather_icons[0];
  }

  obterTemperatura() {
    return this.detalhes.current.temperature + "&deg;C";
  }
}

// dados

let dadosDoClima = {
  request: {
    type: "Cidade",
    query: "Florianopolis",
    language: "pt",
    unit: "m",
  },
  location: {
    name: "Florianópolis",
    country: "Brasil",
    region: "Santa Catarina",
    lat: "52.374",
    lon: "4.890",
    timezone_id: "Brasil/Brasília",
    localtime: "2020-11-25 09:11",
    localtime_epoch: 1606295460,
    utc_offset: "1.0",
  },
  current: {
    observation_time: "08:11 AM",
    temperature: 25,
    weather_code: 113,
    weather_icons: [
      "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png",
    ],
    weather_descriptions: ["Clear"],
    wind_speed: 17,
    wind_degree: 160,
    wind_dir: "SSE",
    pressure: 1014,
    precip: 0,
    humidity: 87,
    cloudcover: 0,
    feelslike: 1,
    uv_index: 1,
    visibility: 10,
    is_day: "yes",
  },
};

// ---- tela ----

document.write(
  `<div style="font-family: Verdana, Geneva, Tahoma, sans-serif;">     <div>         <h2>Previsão do tempo</h2>     <div><hr />         <h3 id="dv-cidade-pais"></h3>         <div style="display:flex; margin-left:1.5em">             <img src="" alt="Ícone de temperatura" id="dv-icone" />             <h3 style="margin-left:1.5em"              id="dv-temperatura"></h3>         </div>     </div> </div>`
);

let dvCidadePais = document.querySelector("#dv-cidade-pais");
let dvIcone = document.querySelector("#dv-icone");
let temperature = document.querySelector("#dv-temperatura");
let temperatura = new Temperatura(dadosDoClima);

dvCidadePais.textContent = temperatura.obterLocalizacao();
dvIcone.src = temperatura.obterIcone();
temperature.innerHTML = temperatura.obterTemperatura();
