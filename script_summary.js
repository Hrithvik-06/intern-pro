// =====================================================
// PERSONAL EXPENSE SUMMARY
// =====================================================


// =====================================================
// USER DATA
// =====================================================

const userName = "Vidyashree.M";


// =====================================================
// EXPENSE DATA
// =====================================================
// This is sample data for testing the frontend.
// Later we will receive this data from the expense input page.

const expenses = [

    {
        category: "Food",
        amount: 250
    },

    {
        category: "Shopping",
        amount: 1000
    },

    {
        category: "Friends Party",
        amount: 500
    },

    {
        category: "Personal Use",
        amount: 1000
    }

];


// =====================================================
// CALCULATE TOTAL
// =====================================================

let total = 0;

for (let i = 0; i < expenses.length; i++) {

    total = total + expenses[i].amount;

}


// =====================================================
// CALCULATE AVERAGE
// =====================================================

let average = 0;

if (expenses.length > 0) {

    average = total / expenses.length;

}


// =====================================================
// DISPLAY USER NAME
// =====================================================

document.getElementById("userName").textContent =
    userName;


// =====================================================
// DISPLAY TOTAL
// =====================================================

document.getElementById("totalAmount").textContent =
    "₹" + total.toFixed(2);


// =====================================================
// DISPLAY NUMBER OF EXPENSES
// =====================================================

document.getElementById("expenseCount").textContent =
    expenses.length;


// =====================================================
// DISPLAY AVERAGE
// =====================================================

document.getElementById("averageAmount").textContent =
    "₹" + average.toFixed(2);


// =====================================================
// DISPLAY CURRENT DATE
// =====================================================

const today = new Date();

const formattedDate =
    today.toLocaleDateString("en-IN", {

        day: "numeric",

        month: "short",

        year: "numeric"

    });


document.getElementById("currentDate").textContent =
    formattedDate;


// =====================================================
// GET CATEGORY AND AMOUNT DATA
// =====================================================

const categories = [];

const amounts = [];


for (let i = 0; i < expenses.length; i++) {

    categories.push(
        expenses[i].category
    );

    amounts.push(
        expenses[i].amount
    );

}


// =====================================================
// CREATE DONUT CHART
// =====================================================

const donutCanvas =
    document.getElementById("donutChart");


new Chart(donutCanvas, {

    type: "doughnut",

    data: {

        labels: categories,

        datasets: [

            {

                data: amounts,

                backgroundColor: [

                    "#8b5cf6",

                    "#3b82f6",

                    "#f59e0b",

                    "#10b981",

                    "#ef4444",

                    "#ec4899"

                ],

                borderWidth: 0

            }

        ]

    },


    options: {

        responsive: true,

        maintainAspectRatio: false,

        cutout: "65%",

        plugins: {

            legend: {

                position: "bottom",

                labels: {

                    padding: 18,

                    usePointStyle: true

                }

            }

        }

    }

});


// =====================================================
// CREATE BAR CHART
// =====================================================

const barCanvas =
    document.getElementById("barChart");


new Chart(barCanvas, {

    type: "bar",

    data: {

        labels: categories,

        datasets: [

            {

                label: "Amount Spent",

                data: amounts,

                backgroundColor: "#7c3aed",

                borderRadius: 8,

                borderSkipped: false

            }

        ]

    },


    options: {

        responsive: true,

        maintainAspectRatio: false,


        scales: {

            y: {

                beginAtZero: true,

                ticks: {

                    callback: function(value) {

                        return "₹" + value;

                    }

                }

            }

        },


        plugins: {

            legend: {

                display: false

            }

        }

    }

});


// =====================================================
// CREATE EXPENSE TABLE
// =====================================================

const expenseTable =
    document.getElementById("expenseTable");


for (let i = 0; i < expenses.length; i++) {


    // Calculate percentage

    const percentage =
        (expenses[i].amount / total) * 100;


    // Create table row

    const row =
        document.createElement("tr");


    row.innerHTML = `

        <td>
            ${i + 1}
        </td>

        <td>
            ${expenses[i].category}
        </td>

        <td>
            ₹${expenses[i].amount.toFixed(2)}
        </td>

        <td class="percentage">
            ${percentage.toFixed(1)}%
        </td>

    `;


    expenseTable.appendChild(row);

}


// =====================================================
// FIND HIGHEST EXPENSE
// =====================================================

let highestExpense = null;


if (expenses.length > 0) {

    highestExpense = expenses[0];


    for (let i = 1; i < expenses.length; i++) {

        if (
            expenses[i].amount >
            highestExpense.amount
        ) {

            highestExpense =
                expenses[i];

        }

    }

}


// =====================================================
// QUICK INSIGHT
// =====================================================

const insightText =
    document.getElementById("insightText");


if (highestExpense !== null) {

    insightText.textContent =

        "Your highest spending category is " +

        highestExpense.category +

        " — ₹" +

        highestExpense.amount.toFixed(2) +

        ". Your average expense is ₹" +

        average.toFixed(2) +

        ".";

}


// =====================================================
// NEW CALCULATION BUTTON
// =====================================================

function startNewCalculation() {

    alert(
        "Starting a new expense calculation..."
    );

}