const boxes = [
    { name: "Nicolás González", chance: 10, img: "https://fifastatic.fifaindex.com/FIFA24/players/240690.png" },
    { name: "Ángel Di María", chance: 10, img: "https://fifastatic.fifaindex.com/FIFA24/players/183898.png" },
    { name: "Pepê", chance: 10, img: "https://fifastatic.fifaindex.com/FIFA24/players/238896.png" },
    { name: "Nicolò Zaniolo", chance: 10, img: "https://fifastatic.fifaindex.com/FIFA24/players/238067.png" },
    { name: "Ademola Lookman", chance: 10, img: "https://fifastatic.fifaindex.com/FIFA24/players/230899.png" },
    { name: "Dušan Vlahović", chance: 10, img: "https://fifastatic.fifaindex.com/FIFA24/players/246430.png" },
    { name: "Karim Adeyemi", chance: 10, img: "https://fifastatic.fifaindex.com/FIFA24/players/251852.png" },
    { name: "Harry Kane", chance: 10, img: "https://fifastatic.fifaindex.com/FIFA24/players/202126.png" },
    { name: "Marcus Rashford", chance: 10, img: "https://fifastatic.fifaindex.com/FIFA24/players/231677.png" },
    { name: "Lautaro Martínez", chance: 10, img: "https://fifastatic.fifaindex.com/FIFA24/players/231478.png" },
    { name: "Aaron Ramsdale", chance: 10, img: "https://fifastatic.fifaindex.com/FIFA24/players/233934.png" },
    { name: "Re Spin", chance: 10, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpZy9nSt9heuiPj4X0ueBcx0Lq7JiqEjvrdw&s" },
    { name: "Mohamed Salah", chance: 5, img: "https://fifastatic.fifaindex.com/FIFA24/players/209331.png" },
    { name: "Antoine Griezmann", chance: 5, img: "https://fifastatic.fifaindex.com/FIFA24/players/194765.png" },
    { name: "Joshua Kimmich", chance: 5, img: "https://fifastatic.fifaindex.com/FIFA24/players/212622.png" },
    { name: "Robert Lewandowski", chance: 5, img: "https://fifastatic.fifaindex.com/FIFA24/players/188545.png" },
    { name: "Neymar Jr", chance: 5, img: "https://fifastatic.fifaindex.com/FIFA24/players/190871.png" },
    { name: "Vini Jr", chance: 5, img: "https://fifastatic.fifaindex.com/FIFA24/players/238794.png" },
    { name: "Erling Haaland", chance: 5, img: "https://fifastatic.fifaindex.com/FIFA24/players/239085.png" },
    { name: "Kylian Mbappé", chance: 5, img: "https://fifastatic.fifaindex.com/FIFA24/players/231747.png" }
];

const roulette = document.getElementById("roulette");
const resultBox = document.getElementById("result");

boxes.forEach(box => {
    const div = document.createElement("div");
    div.className = "box";
    div.innerHTML = `<img src="${box.img}"><p>${box.name}</p>`;
    roulette.appendChild(div);
});

function weightedRandom(items) {
    const total = items.reduce((sum, item) => sum + item.chance, 0);
    const rand = Math.random() * total;
    let acc = 0;
    for (const item of items) {
        acc += item.chance;
        if (rand < acc) return item;
    }
}

function spin() {
    const selected = weightedRandom(boxes);
    resultBox.innerHTML = `<br><h2>Kipörgetett loot: ${selected.name}</h2>`;

    const index = boxes.findIndex(b => b.name === selected.name);

    const allBoxes = document.querySelectorAll('.box');
    allBoxes.forEach(box => box.classList.remove('selected'));

    const selectedBox = allBoxes[index];
    selectedBox.classList.add('selected');

    const audio = new Audio('lootboxsound.mp3');
    audio.play();

    const itemWidth = 130;
    const visibleWidth = roulette.clientWidth;
    const centerOffset = (visibleWidth / 2) - (itemWidth / 2);
    const scrollX = index * itemWidth - centerOffset;

    roulette.scrollTo({ left: scrollX, behavior: 'smooth' });
}

