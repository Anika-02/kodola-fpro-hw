//Create smileys data
const smileys = [
    {
        smile: "😂",
        voteCount: 0,
    },
    {
        smile: "😅",
        voteCount: 0,
    },
    {
        smile: "❤️",
        voteCount: 0,
    },
    {
        smile: "😈",
        voteCount: 0,
    },
    {
        smile: "🥲",
        voteCount: 0,
    },
];

//Get smile && vote containers
let smileContainer = document.querySelector('#smile-container');
let voteContainer = document.querySelector('#vote-container');
let deleteContainer = document.querySelector('#delete-container');
let addContainer = document.querySelector('#add-container');

//Update vote scores
function updateVotes() {
    voteContainer.innerHTML = "";

    smileys.forEach((item) => {
        let voteElement = document.createElement('div');
        voteElement.classList.add('vote-score');
        voteElement.textContent = item.voteCount;

        voteContainer.appendChild(voteElement);
    })
}

//Show smileys elements
function showSmiles() {
    smileys.forEach((item, index) => {
        let smileElement = document.createElement('div');
        smileElement.textContent = item.smile;

        smileElement.addEventListener('click', () => {
            smileys[index].voteCount++;
            updateVotes();
        })

        smileContainer.appendChild(smileElement);
    })
}

//Delete smileys elements
function deleteSmiles() {
    smileys.forEach((item, index) => {
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = '🗑️';
        deleteBtn.classList.add('delete-button');

        deleteBtn.addEventListener('click', () => {
            smileys.splice(index, 1);
            smileContainer.innerHTML = '';
            showSmiles();

            voteContainer.innerHTML = '';
            updateVotes();

            deleteContainer.innerHTML = '';
            deleteSmiles();
        });

        deleteContainer.appendChild(deleteBtn);
    });
}

//Add smile element
function addSmile() {
    let addBtn = document.createElement('button');
    addBtn.textContent = 'Add smile';
    addBtn.classList.add('add-button');

    addBtn.addEventListener('click', () => {
        smileContainer.innerHTML = '';
        deleteContainer.innerHTML = '';

        let newSmile = prompt('Enter a new smile', '🔥');
        const newBlock = {
            smile: newSmile,
            voteCount: 0,
        };

        smileys.push(newBlock);
        showSmiles();
        updateVotes();
        deleteSmiles();
    });

    addContainer.append(addBtn);
}

//Initialization
showSmiles();
updateVotes();
deleteSmiles();
addSmile();