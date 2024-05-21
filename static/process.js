async function run() {
    event.preventDefault();
    loadIP_Search();
}

async function run2() {
    event.preventDefault();
    loadIP();
}

function loadIP() {
    let name_process = document.getElementById("name_process").value;
    let ip_process = document.getElementById("ipInput").value;
    let tableBody = document.getElementById("tableBody2");
    if (tableBody.innerHTML !== "") {
        tableBody.innerHTML = "";
    }
    for (let i = 1; i <= 3; i++) {
        fetch(`src/data/40${i}.json`)
            .then(response => response.json())
            .then(data => {
                for (let j = 0; j < data.length; j++) {
                    let ip_arr = data[j].ip;
                    console.log("IP: " + ip_arr);
                    if (ip_arr === ip_process) {
                        fetch(`/src/remote/killprocess`, {
                            method: "PUT",
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                "name": name_process,
                                "room": data[j].path
                            })
                        })
                            .then(response => {
                                return response.text();
                            })
                            .then(datas => {
                                console.log("IP " + ip_arr + " is in range. Adding to computerData.");
                                console.log(datas)
                                if (datas === "SC") {
                                    alert("Dừng tiên trình " + name_process + "thành công cho máy " + data[j].name)
                                } else {
                                    alert("Dừng tiên trình " + name_process + "thất bại cho máy " + data[j].name)
                                }
                            });
                    }
                }
            });
    }
}


function loadIP_Search() {
    let range_ip = document.getElementById("ipRangeInput").value;
    var tableBody = document.getElementById("tableBody");
    if (tableBody.innerHTML !== "") {
        tableBody.innerHTML = "";
    }
    var range = range_ip.split("-");
    var start_ip = range[0];
    var end_ip = range[1];
    var start_ip_arr = start_ip.split(".");
    var end_ip_arr = end_ip.split(".");
    var start_ip_num = parseInt(start_ip_arr[3]);
    var end_ip_num = parseInt(end_ip_arr[3]);
    console.log("Start IP: " + start_ip_num);
    console.log("End IP: " + end_ip_num);
    for (let i = 1; i <= 3; i++) {
        fetch(`src/data/40${i}.json`)
            .then(response => response.json())
            .then(data => {
                for (let j = 0; j < data.length; j++) {
                    let ip_arr = data[j].ip;
                    console.log("IP: " + ip_arr);
                    let _ip_arr = ip_arr.split(".");
                    let ip_num = parseInt(_ip_arr[3]);
                    console.log("Checking IP: " + ip_num);
                    if (ip_num >= start_ip_num && ip_num <= end_ip_num) {
                        fetch(`/src/remote/process.py`, {
                            method: "PUT",
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                "room": data[j].path
                            })
                        })
                            .then(response => {
                                return response.json();
                            })
                            .then(datas => {
                                console.log(datas)
                                console.log("IP " + ip_num + " is in range. Adding to computerData.");
                                var row = document.createElement("tr");
                                row.classList.add("highlight-row");

                                row.innerHTML = `
                                    <td>${data[j].id}</td>
                                    <td>${data[j].room}</td>
                                    <td>${data[j].name}</td>
                                    <td>${data[j].ip}</td>
                                    <td class="border px-4 py-2">
                                        <button class="openModalBtn" type="button"><i class="fas fa-desktop"></i></button>
                                    </td>
                                `;

                                tableBody.appendChild(row);
                                handleModal(datas);
                            });
                    }

                }

            });
    }
}


function handleModal(datas) {
    let openModalBtns = document.getElementById('myModal'); // openModalBtn
    const closeModalBtn = document.querySelector('.closeBtn');

    document.querySelectorAll('.openModalBtn').forEach(btn => {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            // Hiển thị modal khi nút được nhấn
            openModalBtns.style.display = 'block';
            const modalContent = document.getElementById('tableBody_modal')
            if (modalContent.innerHTML !== "") {
                modalContent.innerHTML = "";
            }datas.forEach(datas => {
                var row = document.createElement("tr");
                row.classList.add("highlight-row");
                console.log(datas);
                row.innerHTML = `
                        <td>${datas.pid}</td>
                        <td>${datas.name}</td>
                    `;
                modalContent.appendChild(row);
            });
        });
    });

    closeModalBtn.addEventListener('click', () => {
        // Ẩn modal khi nút đóng được nhấn
        openModalBtns.style.display = 'none';
    });
    window.addEventListener('click', (event) => {
        // Ẩn modal khi nhấn vào bất kỳ đâu ngoài modal
        if (event.target === openModalBtns) {
            openModalBtns.style.display = 'none';
        }
    });

}

