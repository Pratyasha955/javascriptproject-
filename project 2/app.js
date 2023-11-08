const form = document.querySelector("#allProduct");
const products = document.querySelector("#product");
const prices = document.querySelector("#price");
const categories = document.querySelector("#category");

function fetchData() {
    axios
        .get('https://crudcrud.com/api/576e326d3fb84278bc8c43d70d8e0832/productdetails')
        .then((res) => {
            const data = res.data;
            data.forEach(productdetails => {
                allProductList(productdetails);
            });
        })
        .catch((err) => console.log(err));
}

fetchData();

function allProductList(productdata) {
    const li = document.createElement("li");
    li.textContent = `${productdata.name}, ${productdata.price}, ${productdata.category}`;

    const button = document.createElement("button");
    button.textContent = 'Delete';
    button.classList.add('delete'); // Add the 'delete' class to the button
    li.appendChild(button);

    const list = document.querySelector(`#${productdata.category}List`);
    if (list) {
        li.dataset.id = productdata._id; // Set a unique id for each list item
        list.appendChild(li);
    }
}

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    if (products.value === '' || prices.value === '' || categories.value === '') {
        alert("Please Enter All Fields");
    } else {
        const dataobject = {
            name: products.value,
            price: prices.value,
            category: categories.value
        };

        axios
            .post('https://crudcrud.com/api/576e326d3fb84278bc8c43d70d8e0832/productdetails', dataobject)
            .then((res) => {
                console.log(res);
                allProductList(res.data);
            })
            .catch((err) => console.log(err));

        products.value = '';
        prices.value = '';
        categories.value = '';
    }
}

document.addEventListener('click', deleteItem);

function deleteItem(e) {
    if (e.target.textContent === 'Delete') {
        const li = e.target.parentElement;
        const id = li.dataset.id;

        axios
            .delete(`https://crudcrud.com/api/576e326d3fb84278bc8c43d70d8e0832/productdetails/${id}`)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));

        li.remove();
    }
}
