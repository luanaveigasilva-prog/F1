// Dados da Temporada 2026
const driversData = [
    { pos: 1, name: "Lando Norris", team: "McLaren", color: "#FF8000", wins: 7, points: 368 },
    { pos: 2, name: "Max Verstappen", team: "Red Bull Racing", color: "#3671C6", wins: 6, points: 354 },
    { pos: 3, name: "Charles Leclerc", team: "Ferrari", color: "#E8002D", wins: 4, points: 319 },
    { pos: 4, name: "Lewis Hamilton", team: "Ferrari", color: "#E8002D", wins: 2, points: 278 },
    { pos: 5, name: "Oscar Piastri", team: "McLaren", color: "#FF8000", wins: 2, points: 265 },
    { pos: 6, name: "George Russell", team: "Mercedes", color: "#27F4D2", wins: 0, points: 210 },
    { pos: 7, name: "Kimi Antonelli", team: "Mercedes", color: "#27F4D2", wins: 0, points: 142 },
    { pos: 8, name: "Gabriel Bortoleto", team: "Audi F1 Team", color: "#F50537", wins: 0, points: 64 }
];

const constructorsData = [
    { pos: 1, name: "McLaren", engine: "Mercedes", color: "#FF8000", wins: 9, points: 633 },
    { pos: 2, name: "Ferrari", engine: "Ferrari", color: "#E8002D", wins: 6, points: 597 },
    { pos: 3, name: "Red Bull Racing", engine: "Red Bull Ford", color: "#3671C6", wins: 6, points: 412 },
    { pos: 4, name: "Mercedes", engine: "Mercedes", color: "#27F4D2", wins: 0, points: 352 },
    { pos: 5, name: "Aston Martin", engine: "Honda", color: "#229971", wins: 0, points: 118 },
    { pos: 6, name: "Audi F1 Team", engine: "Audi", color: "#F50537", wins: 0, points: 89 }
];

const calendarData = [
    { round: "Etapa 19", gp: "GP dos Estados Unidos", circuit: "Circuito das Américas", date: "18 Out", status: "completed", winner: "Charles Leclerc" },
    { round: "Etapa 20", gp: "GP da Cidade do México", circuit: "Autódromo Hermanos Rodríguez", date: "25 Out", status: "completed", winner: "Lando Norris" },
    { round: "Etapa 21", gp: "GP de São Paulo", circuit: "Autódromo de Interlagos", date: "08 Nov", status: "completed", winner: "Max Verstappen" },
    { round: "Etapa 22", gp: "GP de Las Vegas", circuit: "Las Vegas Strip Circuit", date: "21 Nov", status: "upcoming", winner: "Próxima Etapa" },
    { round: "Etapa 23", gp: "GP do Catar", circuit: "Circuito Internacional de Lusail", date: "29 Nov", status: "upcoming", winner: "A disputar" },
    { round: "Etapa 24", gp: "GP de Abu Dhabi", circuit: "Circuito de Yas Marina", date: "06 Dez", status: "upcoming", winner: "Final da Temporada" }
];

const newsData = [
    {
        id: 1,
        tag: "Análise Técnica",
        title: "Como a aerodinâmica ativa de 2026 mudou as ultrapassagens nas longas retas",
        date: "19 Nov 2026 • 4 min de leitura",
        summary: "O novo regulamento de asas móveis dianteiras e traseiras promete velocidades finais inéditas na Las Vegas Strip.",
        content: [
            "A temporada 2026 marcou a maior revolução técnica da Fórmula 1 moderna. Com a introdução dos modos Z-Mode (alta pressão aerodinâmica para curvas) e X-Mode (baixo arrasto para retas), os pilotos ganharam uma ferramenta estratégica crucial.",
            "Para o GP de Las Vegas, onde a reta principal ultrapassa 1,9 km, engenheiros estimam que os carros podem atingir picos próximos a 355 km/h sem a necessidade de vácuo direto.",
            "Além disso, o sistema Manual Override entrega potência elétrica extra ao carro perseguidor quando está a menos de um segundo do rival, substituindo o antigo DRS."
        ]
    },
    {
        id: 2,
        tag: "Brasil na F1",
        title: "Gabriel Bortoleto celebra evolução da Audi após pontuar em Interlagos",
        date: "18 Nov 2026 • 3 min de leitura",
        summary: "Brasileiro chega à reta final de sua segunda temporada consolidado como líder técnico da equipe alemã.",
        content: [
            "Diante de arquibancadas lotadas em Interlagos, Gabriel Bortoleto conquistou um expressivo sétimo lugar, somando pontos fundamentais para a Audi em seu ano de estreia oficial como equipe de fábrica.",
            "O brasileiro destacou a eficiência da unidade de potência alemã em condições de pista mista e afirmou que as atualizações no assoalho trouxeram equilíbrio nas curvas de média velocidade.",
            "Com 64 pontos acumulados, Bortoleto ocupa a 8ª colocação no Mundial de Pilotos e mira terminar o ano à frente das equipes intermediárias."
        ]
    },
    {
        id: 3,
        tag: "Disputa pelo Título",
        title: "Norris x Verstappen: as contas matemáticas para a decisão em Las Vegas",
        date: "17 Nov 2026 • 5 min de leitura",
        summary: "Separados por apenas 14 pontos com três corridas restantes, britânico e holandês entram na fase decisiva.",
        content: [
            "A vitória de Max Verstappen sob chuva em São Paulo reabriu completamente a luta pelo campeonato de pilotos de 2026, reduzindo a vantagem de Lando Norris para 14 pontos.",
            "Mesmo se vencer em Las Vegas, Norris ainda não poderá garantir o título matematicamente neste fim de semana, levando a decisão obrigatoriamente para o Catar ou Abu Dhabi.",
            "A McLaren aposta no melhor aquecimento de pneus em temperaturas baixas, enquanto a Red Bull confia na eficiência em retas de baixa pressão aerodinâmica."
        ]
    }
];

// 1. Alternância de Tema (Claro / Escuro)
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const htmlEl = document.documentElement;

themeToggle.addEventListener("click", () => {
    htmlEl.classList.toggle("dark");
    themeIcon.textContent = htmlEl.classList.contains("dark") ? "☀️" : "🌙";
});

// 2. Contagem Regressiva para o Próximo GP
function startCountdown() {
    // Define a data alvo para 2 dias e 14 horas a partir do carregamento
    const targetDate = new Date().getTime() + (2 * 24 * 60 * 60 * 1000) + (14 * 60 * 60 * 1000) + (35 * 60 * 1000);

    setInterval(() => {
        const now = new Date().getTime();
        const diff = targetDate - now;

        if (diff <= 0) return;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById("cd-days").textContent = String(days).padStart(2, "0");
        document.getElementById("cd-hours").textContent = String(hours).padStart(2, "0");
        document.getElementById("cd-minutes").textContent = String(minutes).padStart(2, "0");
        document.getElementById("cd-seconds").textContent = String(seconds).padStart(2, "0");
    }, 1000);
}

// 3. Tabela de Classificação (Pilotos / Construtores)
const standingsBody = document.getElementById("standings-body");
const btnDrivers = document.getElementById("btn-drivers");
const btnConstructors = document.getElementById("btn-constructors");
const colEntity = document.getElementById("col-entity");
const colSub = document.getElementById("col-sub");

function renderStandings(type) {
    standingsBody.innerHTML = "";
    const data = type === "drivers" ? driversData : constructorsData;

    colEntity.textContent = type === "drivers" ? "Piloto" : "Construtor";
    colSub.textContent = type === "drivers" ? "Equipe" : "Unidade de Potência";

    data.forEach((item) => {
        const subText = type === "drivers" ? item.team : item.engine;
        const row = `
            <tr class="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                <td class="py-3.5 px-4 font-mono font-bold">${item.pos}</td>
                <td class="py-3.5 px-4 font-bold flex items-center space-x-3">
                    <span class="w-1.5 h-5 rounded-full inline-block" style="background-color: ${item.color}"></span>
                    <span>${item.name}</span>
                </td>
                <td class="py-3.5 px-4 text-gray-500 dark:text-gray-400 hidden sm:table-cell">${subText}</td>
                <td class="py-3.5 px-4 text-center font-mono">${item.wins}</td>
                <td class="py-3.5 px-4 text-right font-mono font-bold text-base">${item.points}</td>
            </tr>
        `;
        standingsBody.insertAdjacentHTML("beforeend", row);
    });
}

btnDrivers.addEventListener("click", () => {
    btnDrivers.classList.add("active");
    btnConstructors.classList.remove("active");
    renderStandings("drivers");
});

btnConstructors.addEventListener("click", () => {
    btnConstructors.classList.add("active");
    btnDrivers.classList.remove("active");
    renderStandings("constructors");
});

// 4. Simulador de Reflexo de Largada ("Luzes se Apagam!")
const reactionBtn = document.getElementById("reaction-btn");
const reactionResult = document.getElementById("reaction-result");
const reactionBest = document.getElementById("reaction-best");
const reactionFeedback = document.getElementById("reaction-feedback");
const lights = [1, 2, 3, 4, 5].map(n => document.getElementById(`light-${n}`));

let gameState = "idle"; // idle | lighting | ready
let lightTimers = [];
let goTimestamp = 0;
let bestTime = null;

function resetLights() {
    lights.forEach(l => l.classList.remove("lit"));
    lightTimers.forEach(t => clearTimeout(t));
    lightTimers = [];
}

reactionBtn.addEventListener("click", () => {
    if (gameState === "idle") {
        // Inicia sequência das 5 luzes
        gameState = "lighting";
        resetLights();
        reactionResult.textContent = "--.--- s";
        reactionFeedback.textContent = "Aguarde as luzes apagarem...";
        reactionBtn.textContent = "Aguarde... (Não queime!)";
        reactionBtn.classList.replace("bg-f1red", "bg-yellow-600");

        lights.forEach((light, index) => {
            const t = setTimeout(() => {
                light.classList.add("lit");
            }, (index + 1) * 700);
            lightTimers.push(t);
        });

        // Tempo aleatório após a 5ª luz para apagar tudo
        const randomDelay = 3500 + Math.floor(Math.random() * 2500);
        const goTimer = setTimeout(() => {
            lights.forEach(l => l.classList.remove("lit"));
            gameState = "ready";
            goTimestamp = performance.now();
            reactionBtn.textContent = "LARGAR AGORA!";
            reactionBtn.classList.replace("bg-yellow-600", "bg-green-600");
            reactionFeedback.textContent = "VAI! VAI! VAI!";
        }, randomDelay);

        lightTimers.push(goTimer);

    } else if (gameState === "lighting") {
        // Queimou a largada
        resetLights();
        gameState = "idle";
        reactionResult.textContent = "QUEIMOU!";
        reactionFeedback.textContent = "Penalidade de 5s! Você largou antes das luzes apagarem.";
        reactionBtn.textContent = "Tentar Novamente";
        reactionBtn.className = "px-8 py-4 rounded-xl font-black uppercase tracking-wider text-white bg-f1red hover:bg-red-700 active:scale-95 transition-all shadow-lg text-base sm:text-lg";

    } else if (gameState === "ready") {
        // Calcula tempo de reação
        const reactionSeconds = (performance.now() - goTimestamp) / 1000;
        gameState = "idle";

        reactionResult.textContent = `${reactionSeconds.toFixed(3)} s`;

        if (!bestTime || reactionSeconds < bestTime) {
            bestTime = reactionSeconds;
            reactionBest.textContent = `${bestTime.toFixed(3)} s`;
        }

        if (reactionSeconds < 0.22) {
            reactionFeedback.textContent = "Reflexo nível Max Verstappen / Lando Norris!";
        } else if (reactionSeconds < 0.32) {
            reactionFeedback.textContent = "Ótima largada! Manteve a posição na curva 1.";
        } else {
            reactionFeedback.textContent = "Largada lenta! Perdeu posições na reta.";
        }

        reactionBtn.textContent = "Jogar Novamente";
        reactionBtn.className = "px-8 py-4 rounded-xl font-black uppercase tracking-wider text-white bg-f1red hover:bg-red-700 active:scale-95 transition-all shadow-lg text-base sm:text-lg";
    }
});

// 5. Calendário Filtrável
const calendarGrid = document.getElementById("calendar-grid");
const filterBtns = document.querySelectorAll(".filter-btn");

function renderCalendar(filter = "all") {
    calendarGrid.innerHTML = "";
    const filtered = calendarData.filter(item => filter === "all" || item.status === filter);

    filtered.forEach(race => {
        const isNext = race.winner === "Próxima Etapa";
        const badgeClass = isNext
            ? "bg-f1red text-white"
            : race.status === "completed"
                ? "bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                : "bg-blue-500/10 text-blue-500 border border-blue-500/30";

        const card = `
            <div class="bg-white dark:bg-f1card border ${isNext ? 'border-f1red' : 'border-gray-200 dark:border-f1border'} rounded-xl p-5 shadow-md flex flex-col justify-between">
                <div>
                    <div class="flex justify-between items-center mb-3">
                        <span class="text-xs font-mono font-bold uppercase text-f1red">${race.round}</span>
                        <span class="text-xs font-mono font-bold px-2.5 py-0.5 rounded ${badgeClass}">${race.date}</span>
                    </div>
                    <h3 class="font-black text-lg uppercase tracking-tight">${race.gp}</h3>
                    <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">${race.circuit}</p>
                </div>
                <div class="mt-5 pt-3 border-t border-gray-200 dark:border-f1border flex justify-between items-center text-xs">
                    <span class="text-gray-500 uppercase font-semibold">Status / Vencedor:</span>
                    <span class="font-bold">${race.winner}</span>
                </div>
            </div>
        `;
        calendarGrid.insertAdjacentHTML("beforeend", card);
    });
}

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        filterBtns.forEach(b => {
            b.classList.remove("bg-f1red", "text-white");
            b.classList.add("bg-gray-200", "dark:bg-f1card");
        });
        btn.classList.remove("bg-gray-200", "dark:bg-f1card");
        btn.classList.add("bg-f1red", "text-white");
        renderCalendar(btn.dataset.filter);
    });
});

// 6. Notícias e Modal de Leitura
const newsGrid = document.getElementById("news-grid");
const newsModal = document.getElementById("news-modal");
const closeModal = document.getElementById("close-modal");

function renderNews() {
    newsGrid.innerHTML = "";
    newsData.forEach(article => {
        const card = `
            <article class="bg-white dark:bg-f1card border border-gray-200 dark:border-f1border rounded-xl p-6 shadow-md hover:border-f1red transition-all flex flex-col justify-between cursor-pointer group" onclick="openArticle(${article.id})">
                <div>
                    <span class="inline-block text-[11px] font-mono font-bold uppercase text-f1red mb-2">${article.tag}</span>
                    <h3 class="font-bold text-lg leading-snug group-hover:text-f1red transition-colors mb-3">${article.title}</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">${article.summary}</p>
                </div>
                <div class="mt-6 pt-4 border-t border-gray-200 dark:border-f1border flex justify-between items-center text-xs font-mono text-gray-500">
                    <span>${article.date}</span>
                    <span class="text-f1red font-bold group-hover:translate-x-1 transition-transform">Ler →</span>
                </div>
            </article>
        `;
        newsGrid.insertAdjacentHTML("beforeend", card);
    });
}

window.openArticle = function(id) {
    const article = newsData.find(a => a.id === id);
    if (!article) return;

    document.getElementById("modal-tag").textContent = article.tag;
    document.getElementById("modal-title").textContent = article.title;
    document.getElementById("modal-meta").textContent = article.date;
    document.getElementById("modal-body").innerHTML = article.content.map(p => `<p>${p}</p>`).join("");

    newsModal.classList.remove("hidden");
    newsModal.classList.add("flex");
};

closeModal.addEventListener("click", () => {
    newsModal.classList.add("hidden");
    newsModal.classList.remove("flex");
});

newsModal.addEventListener("click", (e) => {
    if (e.target === newsModal) {
        newsModal.classList.add("hidden");
        newsModal.classList.remove("flex");
    }
});

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
    startCountdown();
    renderStandings("drivers");
    renderCalendar("all");
    renderNews();
});