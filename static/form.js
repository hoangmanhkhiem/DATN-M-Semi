$(document).ready(function () {
    $('.serviceColumn').hide(); // Ẩn tất cả các cột service ban đầu
    $('.service-checkbox').change(function () {
        var service = $(this).val(); // Lấy giá trị của checkbox đã thay đổi
        if (this.checked) {
            $('.' + service + 'Column').show(); // Hiển thị cột tương ứng nếu checkbox được chọn
        } else {
            $('.' + service + 'Column').hide(); // Ẩn cột tương ứng nếu checkbox không được chọn
        }
    });
});

var name_program_by_index = [
    "Caculator",
    "Paint",
    "Word",
    "Excel",
    "Powerpoint",
    "Outlook",
    "Onenote"
]

function installApp(id_computer, room, index) {
    event.preventDefault();
    fetch("/install", {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "id": id_computer,
            "room": room,
            "name_program": name_program_by_index[index]
        })
    })
        .then(response => {
            return response.text()
        })
        .then(data => {
            console.log(data)
            if(data === "SC") {
                alert("Cài đặt thành công " + name_program_by_index[index] + " cho máy " + id_computer)
            } else {
                alert("Cài đặt thất bại " + name_program_by_index[index] + " cho máy " + id_computer)
            }
        })
}

function loadIP_Search() {
    console.log("Button");
    let range_ip = document.getElementById("ipRangeInput").value
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
                        fetch(`src/remote/program.py`, {
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
                                console.log("IP " + ip_num + " is in range. Adding to computerData.");
                                var row = document.createElement("tr");
                                row.classList.add("highlight-row");
                                let tempHtml = [
                                    "<button onclick=''><i class='fas fa-download'></i></button>",
                                    "Đã cài đặt"
                                ]

                                function renderHtmlForRowTools(id_computer, room, type, index) {
                                    let tempHtml = [
                                        "<button onclick='installApp(" + id_computer + ", " + room + " , " + index + ")'><i class='fas fa-download'></i></button>",
                                        "Đã cài đặt"
                                    ]
                                    return tempHtml[type];
                                }

                                row.innerHTML = `
                                    <td>${data[j].id}</td>
                                    <td>${data[j].name}</td>
                                    <td>${data[j].ip}</td>  
                                    <td>${data[j].room}</td>        
                                    <td>${renderHtmlForRowTools(data[j].id, data[j].room, datas[0], 0)}</td>                    
                                    <td>${renderHtmlForRowTools(data[j].id, data[j].room, datas[1], 1)}</td>
                                    <td>${renderHtmlForRowTools(data[j].id, data[j].room, datas[2], 2)}</td>
                                    <td>${renderHtmlForRowTools(data[j].id, data[j].room, datas[3], 3)}</td>
                                    <td>${renderHtmlForRowTools(data[j].id, data[j].room, datas[4], 4)}</td>
                                    <td>${renderHtmlForRowTools(data[j].id, data[j].room, datas[5], 5)}</td>
                                    <td>${renderHtmlForRowTools(data[j].id, data[j].room, datas[6], 6)}</td>
                                  
                                `;
                                $(document).ready(function () {
                                    $('.serviceColumn').hide(); // Ẩn tất cả các cột service ban đầu
                                    $('.service-checkbox').change(function () {
                                        var service = $(this).val(); // Lấy giá trị của checkbox đã thay đổi
                                        if (this.checked) {
                                            $('.' + service + 'Column').show(); // Hiển thị cột tương ứng nếu checkbox được chọn
                                        } else {
                                            $('.' + service + 'Column').hide(); // Ẩn cột tương ứng nếu checkbox không được chọn
                                        }
                                    });
                                });

                                tableBody.appendChild(row);
                            })
                    }
                }
            });
    }
}

async function run() {
    event.preventDefault();
    console.log("Buton nay duoc an hehe run da chay")
    loadIP_Search();
}