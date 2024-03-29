var form = document.querySelector("form");
var tbody = document.querySelector(".tbody");

// Initially, set the editData function to add mode
let currentIndex = null;

form.addEventListener("submit", (e) => {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;

    let data = JSON.parse(localStorage.getItem("userData")) ?? [];
    // let submissionTime = new Date();
    // currentIndex = null;

    if (currentIndex !== null) {
        // If index is not null, it means we are in edit mode
        data[currentIndex] = {
            'name': name,
            'age': age,
            'address': address,
            'phone': phone
        };
    } else {
        // If index is null, it means we are in add mode
        data.push({
            'name': name,
            'age': age,
            'address': address,
            'phone': phone,
            // 'submissionTime': submissionTime.toLocaleString()
        });
    }

    localStorage.setItem("userData", JSON.stringify(data));
    form.reset();
    viewData();
    e.preventDefault();
});




let viewData = () => {
    let data = JSON.parse(localStorage.getItem("userData")) ?? [];
    let finalData = '';

    data.forEach((element, i) => {
        finalData += `<tbody class="tbody">
            <tr>
                <th>${i + 1}</th>
                <td>${element.name}</td>
                <td>${element.age}</td>
                <td>${element.address}</td>
                <td>${element.phone}</td>
                
                <td><button class="btn btn-success" onclick="editData(${i})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
              </svg>Edit</button></td>
                <td><button class="btn btn-outline-danger" onclick=removeData(${i})><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
</svg>Delete</button></td>
            </tr>
        </tbody>`;
    });

    tbody.innerHTML = finalData;
};

let removeData = (index) => {
    let confirmDelete = window.confirm("Are you sure you want to delete this record?");

    if (confirmDelete) {
        let data = JSON.parse(localStorage.getItem("userData")) || [];
        data.splice(index, 1);
        localStorage.setItem("userData", JSON.stringify(data));
        viewData(); // Update the table after removal
    }
};

let editData = (index) => {
    currentIndex = index;
    let data = JSON.parse(localStorage.getItem("userData")) ?? [];
    let editedData = data[index];

    document.getElementById("name").value = editedData.name;
    document.getElementById("age").value = editedData.age;
    document.getElementById("address").value = editedData.address;
    document.getElementById("phone").value = editedData.phone;
};



viewData();
