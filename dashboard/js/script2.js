const salesChartCtx = document.getElementById('salesChart').getContext('2d');
const activityChartCtx = document.getElementById('activityChart').getContext('2d');

const salesChart = new Chart(salesChartCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Sales',
            data: [90, 50, 10, 11, 20, 70],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const activityChart = new Chart(activityChartCtx, {
    type: 'bar',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Activity',
            data: [12, 19, 3, 5, 2, 3, 9],
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// kalender bagian dashboard
 document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth', // Tampilan awal kalender (bulanan)
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        events: [
            {
                title: 'PROJEK PMWEB 2025',
                start: '2025-01-01',
                end: '2025-01-26'
            },
            {
                title: 'MULAI UAS',
                start: '2025-01-13',
                end: '2025-01-20'
            },
            {
                title: 'Liburan',
                start: '2025-01-20',
                end: '2025-02-15'
            }
        ]
    });
    calendar.render();
});

// Script untuk toggle sidebar di mobile
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const sidebarMenu = document.getElementById('sidebar-menu');

    hamburger.addEventListener('click', function () {
        sidebarMenu.classList.toggle('hidden');
    });
});