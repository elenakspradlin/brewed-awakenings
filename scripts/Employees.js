import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li data-id="${employee.id}"
                    data-name="${employee.name}"
                    data-email="${employee.price}"
                    data-hourly="${employee.hourlyRate}"
                    data-type="employee"
                    >${employee.name}
                    </li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was an employee item clicked? -- 
        if (itemClicked.dataset.type === "employee") {
            const employeeId = itemClicked.dataset.id
            let counter = 0
            const orders = getOrders()
            for (const order of orders) {
                if (parseInt(employeeId) === order.employeeId) {
                    counter++
                }
            }

            window.alert(`${itemClicked.dataset.name} sold ${counter} products`)

        }


    }
)


//need to get the number of products sold by an employee when their name is clicked
//match employee ID with the employee ID on orders
//start a counter and then add to that counter
//need to iterate through the orders, so first need to import the orders and create a for/of loop