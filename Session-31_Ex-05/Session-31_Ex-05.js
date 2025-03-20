const formElement = document.querySelector("#form");
const missionInputElement = document.querySelector("#missionInput");
const ulElement = document.querySelector("#ulList");
let mission = [];

const renderList = () => {
    ulElement.innerHTML = ""; 

    mission.forEach((element, index) => {
        const liElement = document.createElement("li");
        liElement.textContent = element;
        // nút xoá
        const closeBtn = document.createElement("button");
        closeBtn.textContent = "X";
        closeBtn.classList.add("delete-btn");

        closeBtn.addEventListener("click", () => {
            const confirmDelete = confirm("Bạn có chắc chắn muốn xóa nhiệm vụ này?");
            if (confirmDelete) {
                mission.splice(index, 1); 
                renderList(); 
            }
        });

        liElement.appendChild(closeBtn);
        ulElement.appendChild(liElement);
    });
};


formElement.addEventListener("submit", function (event) {
    event.preventDefault();
    const inputValue = missionInputElement.value.trim(); 

    if (inputValue) {
        mission.push(inputValue);
        renderList();
        missionInputElement.value = ""; 
    }
});

renderList(); 
