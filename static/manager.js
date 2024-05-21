     // Sample data for IPs và biểu đồ
     var ipData = {
        "404": [
            { ip: "192.168.1.10", os: "Win 10", cpuData: [10, 20, 30, 40, 50, 20, 30, 10, 40, 35, 15, 25, 50, 10], ramData: [5, 15, 25, 35, 45, 5,10, 11, 20, 12, 35, 5, 11, 22], diskData: [8, 18, 28, 38, 48, 5, 4, 0, 1, 2, 4, 3, 5, 66], networkData: [12, 22, 32, 42, 52, 66, 44, 22, 11, 33, 11, 22, 10, 55] },
            { ip: "192.168.1.13", os: "Win 11", cpuData: [15, 25, 35, 45, 55, 25, 35, 15, 45, 30, 10, 20, 55, 15], ramData: [8, 18, 28, 38, 48, 8, 13, 14, 22, 15, 38, 8, 13, 25], diskData: [12, 22, 32, 42, 52, 8, 9, 10, 11, 12, 13, 14, 15, 16], networkData: [18, 28, 38, 48, 58, 18, 25, 15, 9, 28, 15, 18, 10, 45] },
            { ip: "192.168.1.16", os: "Win 7", cpuData: [22, 30, 40, 50, 60, 30, 40, 20, 50, 40, 20, 30, 60, 20], ramData: [10, 20, 30, 40, 50, 10, 18, 20, 28, 30, 35, 10, 18, 30], diskData: [15, 25, 35, 45, 55, 15, 18, 20, 22, 24, 26, 28, 30, 32], networkData: [22, 32, 42, 52, 62, 22, 30, 25, 15, 32, 14, 22, 15, 55] },
            { ip: "192.168.1.22", os: "Win 7", cpuData: [22, 30, 40, 50, 60, 30, 40, 20, 50, 40, 20, 30, 60, 20], ramData: [10, 20, 30, 40, 50, 10, 18, 20, 28, 30, 35, 10, 18, 30], diskData: [15, 25, 35, 45, 55, 15, 18, 20, 22, 24, 26, 28, 30, 32], networkData: [22, 32, 42, 52, 62, 22, 30, 25, 15, 32, 14, 22, 15, 55] },
            { ip: "192.168.1.32", os: "Win 7", cpuData: [33, 30, 40, 50, 60, 30, 40, 20, 50, 40, 20, 30, 60, 20], ramData: [10, 20, 30, 40, 50, 10, 18, 20, 28, 30, 35, 10, 18, 30], diskData: [15, 25, 35, 45, 55, 15, 18, 20, 22, 24, 26, 28, 30, 32], networkData: [22, 32, 42, 52, 62, 22, 30, 25, 15, 32, 14, 22, 15, 55] }

        ],
        "405": [
            { ip: "192.168.1.11", os: "Ubuntu", cpuData: [12, 22, 32, 42, 52, 22, 32, 12, 42, 37, 17, 27, 52, 12], ramData: [6, 16, 26, 36, 46, 6, 11, 12, 22, 14, 37, 6, 11, 23], diskData: [9, 19, 29, 39, 49, 6, 5, 1, 2, 3, 5, 4, 6, 67], networkData: [14, 24, 34, 44, 54, 67, 45, 23, 12, 34, 12, 24, 11, 56] },
            { ip: "192.168.1.14", os: "Ubuntu", cpuData: [18, 28, 38, 48, 58, 28, 38, 18, 48, 38, 18, 28, 58, 18], ramData: [9, 19, 29, 39, 49, 9, 14, 15, 23, 16, 39, 9, 14, 26], diskData: [11, 21, 31, 41, 51, 9, 8, 2, 3, 4, 6, 5, 7, 68], networkData: [16, 26, 36, 46, 56, 68, 46, 24, 13, 36, 13, 26, 12, 57] },
            { ip: "192.168.1.17", os: "Ubuntu", cpuData: [22, 32, 42, 52, 62, 32, 42, 22, 52, 42, 22, 32, 62, 22], ramData: [9, 19, 29, 39, 49, 9, 16, 18, 26, 29, 44, 9, 16, 30], diskData: [12, 22, 32, 42, 52, 9, 8, 4, 5, 6, 8, 7, 9, 72], networkData: [18, 28, 38, 48, 58, 72, 50, 28, 17, 38, 17, 28, 16, 61] }
        ],
        "406": [
            { ip: "192.168.1.12", os: "Macbook", cpuData: [14, 24, 34, 44, 54, 24, 34, 14, 44, 34, 14, 24, 54, 14], ramData: [7, 17, 27, 37, 47, 7, 12, 13, 21, 17, 40, 7, 12, 24], diskData: [10, 20, 30, 40, 50, 7, 6, 2, 3, 4, 6, 5, 7, 70], networkData: [15, 25, 35, 45, 55, 70, 48, 26, 15, 35, 15, 25, 14, 59] },
            { ip: "192.168.1.15", os: "Macbook", cpuData: [16, 26, 36, 46, 56, 26, 36, 16, 46, 36, 16, 26, 56, 16], ramData: [8, 18, 28, 38, 48, 8, 15, 16, 24, 18, 41, 8, 15, 28], diskData: [11, 21, 31, 41, 51, 8, 7, 3, 4, 5, 7, 6, 8, 71], networkData: [16, 26, 36, 46, 56, 71, 49, 27, 16, 36, 16, 26, 15, 60] },
            { ip: "192.168.1.18", os: "Macbook", cpuData: [18, 28, 38, 48, 58, 28, 38, 18, 48, 38, 18, 28, 58, 18], ramData: [9, 19, 29, 39, 49, 9, 16, 18, 26, 29, 44, 9, 16, 30], diskData: [12, 22, 32, 42, 52, 9, 8, 4, 5, 6, 8, 7, 9, 72], networkData: [18, 28, 38, 48, 58, 72, 50, 28, 17, 38, 17, 28, 16, 61] }
        ]
    };
    
    // Lấy thẻ tbody của bảng phần cứng
    var hardwareTableBody = document.getElementById('hardwareTableBody');
    
    // Lấy thẻ tbody của bảng mạng
    var networkTableBody = document.getElementById('networkTableBody');
    
    // Lấy danh sách các button room
    var roomButtons = document.querySelectorAll('.room-button');
    
    // Lặp qua từng button và thêm sự kiện click
    roomButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Xóa hết các dòng hiện tại trong bảng phần cứng
            hardwareTableBody.innerHTML = '';
    
            // Xóa hết các dòng hiện tại trong bảng mạng
            networkTableBody.innerHTML = '';
    
            // Lấy danh sách IP cho phòng tương ứng
            var ips = ipData[button.innerText];
    
            // Tạo ra các dòng dữ liệu mới dựa trên room được chọn và danh sách IP
            ips.forEach(function (data, index) {
                var hardwareRow = document.createElement('tr');
                hardwareRow.innerHTML = '<td>PC</td><td>' + data.ip + '</td><td>' + data.os + '</td><td><canvas id="cpuChart' + button.innerText + '_' + index + '" width="100" height="100"></canvas></td><td><canvas id="ramChart' + button.innerText + '_' + index + '" width="100" height="100"></canvas></td><td><canvas id="diskChart' + button.innerText + '_' + index + '" width="100" height="100"></canvas></td>';
                hardwareTableBody.appendChild(hardwareRow);
    
                var networkRow = document.createElement('tr');
                networkRow.innerHTML = '<td>PC</td><td>' + data.ip + '</td><td>' + data.os + '</td><td><canvas id="networkChart' + button.innerText + '_' + index + '" width="100" height="100"></canvas></td><td class="border px-4 py-2"><a><i class="fas fa-desktop"></i></a></td>';
                networkTableBody.appendChild(networkRow);
    
                // Gọi lại hàm vẽ biểu đồ sau khi thêm dữ liệu mới
                drawCharts(button.innerText + '_' + index, data);
            });
        });
    });
    
    // Hàm vẽ biểu đồ
    function drawCharts(room, data) {
        // Dữ liệu biểu đồ
        var cpuData = data.cpuData;
        var ramData = data.ramData;
        var diskData = data.diskData;
        var networkData = data.networkData;
    
        // Tạo biểu đồ CPU
        var cpuCtx = document.getElementById('cpuChart' + room).getContext('2d');
        var cpuChart = new Chart(cpuCtx, {
            type: 'line',
            data: {
                labels: Array.from(Array(cpuData.length), (_, i) => (i + 1).toString()), // Nhãn trục X (ví dụ)
                datasets: [{
                    label: 'CPU',
                    data: cpuData,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                animation: {
                    animateRotate: true // Kích hoạt hiệu ứng quay
                }
            }
        });
    
        // Tạo biểu đồ RAM
        var ramCtx = document.getElementById('ramChart' + room).getContext('2d');
        var ramChart = new Chart(ramCtx, {
            type: 'line',
            data: {
                labels: Array.from(Array(ramData.length), (_, i) => (i + 1).toString()), // Nhãn trục X (ví dụ)
                datasets: [{
                    label: 'RAM',
                    data: ramData,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                animation: {
                    animateRotate: true // Kích hoạt hiệu ứng quay
                }
            }
        });
    
        // Tạo biểu đồ Disk
        var diskCtx = document.getElementById('diskChart' + room).getContext('2d');
        var diskChart = new Chart(diskCtx, {
            type: 'line',
            data: {
                labels: Array.from(Array(diskData.length), (_, i) => (i + 1).toString()), // Nhãn trục X (ví dụ)
                datasets: [{
                    label: 'Disk',
                    data: diskData,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                animation: {
                    animateRotate: true // Kích hoạt hiệu ứng quay
                }
            }
        });
    
        // Tạo biểu đồ Network
        var networkCtx = document.getElementById('networkChart' + room).getContext('2d');
        var networkChart = new Chart(networkCtx, {
            type: 'line',
            data: {
                labels: Array.from(Array(networkData.length), (_, i) => (i + 1).toString()), // Nhãn trục X (ví dụ)
                datasets: [{
                    label: 'Network',
                    data: networkData,
                    backgroundColor: 'rgba(255, 205, 86, 0.2)',
                    borderColor: 'rgba(255, 205, 86, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                animation: {
                    animateRotate: true // Kích hoạt hiệu ứng quay
                }
            }
        });
    }
    
    //kiểm tra mạng
        // Hàm ping từng địa chỉ IP từ API và xác định mạng WAN hoặc LAN
        function checkNetwork(ipAddress) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://www.google.com', true);
            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    // Mạng WAN
                    console.log(ipAddress + ' - WAN');
                    // Thực hiện các hành động phù hợp cho mạng WAN
                    updateIcon(ipAddress, true);
                } else {
                   // Mạng LAN
                    console.log(ipAddress + ' - LAN');
                    // Thực hiện các hành động phù hợp cho mạng LAN
                    updateIcon(ipAddress, false);
                }
            };
            xhr.onerror = function () {
                // Mạng LAN
                console.log(ipAddress + ' - LAN');
                // Thực hiện các hành động phù hợp cho mạng LAN
                updateIcon(ipAddress, false);
            };
            xhr.send();
        }
    
    // Hàm cập nhật màu icon dựa trên kết quả kiểm tra mạng
    function updateIcon(ipAddress, isWAN) {
        var iconElement = document.querySelector('[data-ip="' + ipAddress + '"]');
        if (isWAN) {
            // Mạng WAN - Cập nhật màu icon thành xanh
            iconElement.style.color = 'green';
        } else {
            // Mạng LAN - Cập nhật màu icon thành đen
            iconElement.style.color = 'black';
        }
    }
    
    // Lặp qua danh sách các IP từ API và gọi hàm kiểm tra mạng cho mỗi IP
    var rooms = Object.keys(ipData);
    rooms.forEach(function (room) {
        ipData[room].forEach(function (data) {
            checkNetwork(data.ip);
        });
    });
    
    // Define the export function
    function exportTableToExcel(tableId, chartData, fileName) {
      const table = document.querySelector(tableId);
      const wb = XLSX.utils.book_new();
      
      // Convert table data to worksheet
      const ws = XLSX.utils.table_to_sheet(table, { sheet: "Table Data" });
    
      // Convert chart data to worksheet
      const chartWs = XLSX.utils.aoa_to_sheet(chartData);
    
      // Append both worksheets to the workbook
      XLSX.utils.book_append_sheet(wb, ws, "Table Data");
      XLSX.utils.book_append_sheet(wb, chartWs, "Chart Data");
    
      // Save the workbook as an Excel file
      XLSX.writeFile(wb, fileName + ".xlsx");
    }
    
    // Add a click event listener to the export button
    document.getElementById("exportButton").addEventListener("click", function() {
      // Gather chart data
      const chartData = [];
    
      // Get the CPU data from the table
      const cpuTableRows = document.querySelectorAll("#hardwareTableBody tr");
      const cpuData = Array.from(cpuTableRows).map(tr => {
        const cpuCanvas = tr.querySelector("td:nth-child(4) canvas");
        const chart = Chart.getChart(cpuCanvas);
        const chartData = chart.data.datasets[0].data;
        return chartData;
      });
    
      // Get the RAM data from the table
      const ramData = Array.from(cpuTableRows).map(tr => {
        const ramCanvas = tr.querySelector("td:nth-child(5) canvas");
        const chart = Chart.getChart(ramCanvas);
        const chartData = chart.data.datasets[0].data;
        return chartData;
      });
    
      // Get the disk data from the table
      const diskData = Array.from(cpuTableRows).map(tr => {
        const diskCanvas = tr.querySelector("td:nth-child(6) canvas");
        const chart = Chart.getChart(diskCanvas);
        const chartData = chart.data.datasets[0].data;
        return chartData;
      });
    
      // Get the network data from the table
      const networkTableRows = document.querySelectorAll("#networkTableBody tr td:nth-child(4) canvas");
      const networkData = Array.from(networkTableRows).map(canvas => {
        const chart = Chart.getChart(canvas);
        const chartData = chart.data.datasets[0].data;
        return chartData;
      });
    
      // Get the IP data from the table
      const ipTableRows = document.querySelectorAll("#ipTableBody tr");
      const ipData = Array.from(ipTableRows).map(tr => {
        const ipSpan = tr.querySelector("td:nth-child(3) span");
        const ip = ipSpan.innerText;
        return ip;
      });
    
      // Add the CPU, RAM, disk, network, and IP data to the chartData array
      for (let i = 0; i < cpuData.length; i++) {
        chartData.push(["CPU Data", ...cpuData[i]]);
        chartData.push(["RAM Data", ...ramData[i]]);
        chartData.push(["Disk Data", ...diskData[i]]);
        chartData.push(["Network Data", ...networkData[0]]);
        chartData.push(["IP Data", ipData[i]]);
      }
    
      // Call the export function with chartData
      exportTableToExcel("#hardwareTableBody", chartData, "HardwareTable");
    });