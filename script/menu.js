$(document).ready(function () {
    $('.asdf').click(function () {
        $('.kama').toggle(0);
        $('#placeOrders').click(function () {
            $('#reply').show(0);
        })
    })
    $('#location').click(function () {
        $('#yes').show(0);
    });

    $('#yes').click(function () {
        $('#demo').hide(0, function () {

        });
    });
});


function myPrompt() {

    let promptLocation = prompt("enter your location:")
    return locations = promptLocation
    // console.log(locations)
}

let jina = document.getElementById('jina')

let Location = document.getElementById('location');

let message = document.getElementById('modal')

let size = document.getElementById('size')

let crust = document.getElementById('crust')

let toppings = document.getElementById('topping')

// deliveryFee.toInt();

function Order(size, crust, toppings) {
    this.size = size.value;
    this.crust = crust.value;
    this.toppings = toppings.value;
}

let sizePrice = {
    large: 1500,
    medium: 750,
    small: 500,
}

let crustPrice = [100, 150, 200]

let toppingsPrice = [200, 250, 300]


let order1 = new Order(size.value, crust.value, toppings.value)

let p = document.getElementById('demo');

if (size.value == 'Large at 1500') {
    let price1 = sizePrice.large;
} else if (size.value == 'small at 500') {
    let price2 = sizePrice.small;
} else if (size.value == 'Medium at 750') {
    let price3 = sizePrice.medium;
}


let deliveryFee = 150;


function myFunction() {

    // price setting for all large sizes toppings and crust

    if (size.value == 'Large at 1500' && crust.value == 'Crispy at 100' && toppings.value == 'Grilled Pineapple at 200') {
        let sum1 = sizePrice.large + crustPrice[0] + toppingsPrice[0]
        alert("Hi " + jina.value + ". We appreciate that you love our pizzas. Your order total is " + sum1);
    } else if (size.value == 'Large at 1500' && crust.value == 'Crispy at 100' && toppings.value == 'Bacon Pickle at 250') {
        let sum2 = sizePrice.large + crustPrice[0] + toppingsPrice[1]
        alert("Hi " + jina.value + ". We appreciate that you love our pizzas. Your order total is " + sum2);
    } else if (size.value == 'Large at 1500' && crust.value == 'Crispy at 100' && toppings.value == 'Buffalo Chicken at 300') {
        let sum3 = sizePrice.large + crustPrice[0] + toppingsPrice[2]
        alert("Hi " + jina.value + ". We appreciate that you love our pizzas. Your order total is " + sum3);
    } else if (size.value == 'Large at 1500' && crust.value == 'Stuffed at 150' && toppings.value == 'Grilled Pineapple at 200') {
        let sum4 = sizePrice.large + crustPrice[1] + toppingsPrice[0]
        alert("Hi " + jina.value + ". We appreciate that you love our pizzas. Your order total is " + sum4);
    } else if (size.value == 'Large at 1500' && crust.value == 'Stuffed at 150' && toppings.value == 'Bacon Pickle at 250') {
        let sum5 = sizePrice.large + crustPrice[1] + toppingsPrice[1]
        alert("Hi " + jina.value + ". We appreciate that you love our pizzas. Your order total is " + sum5);
    } else if (size.value == 'Large at 1500' && crust.value == 'Stuffed at 150' && toppings.value == 'Buffalo Chicken at 300') {
        let sum6 = sizePrice.large + crustPrice[1] + toppingsPrice[2]
        alert("Hi " + jina.value + ". We appreciate that you love our pizzas. Your order total is " + sum6);
    } else if (size.value == 'Large at 1500' && crust.value == 'Gluten-free at 200' && toppings.value == 'Grilled Pineapple at 200') {
        let sum7 = sizePrice.large + crustPrice[2] + toppingsPrice[0]
        alert("Hi " + jina.value + ". We appreciate that you love our pizzas. Your order total is " + sum7);
    } else if (size.value == 'Large at 1500' && crust.value == 'Gluten-free at 200' && toppings.value == 'Bacon Pickle at 250') {
        let sum8 = sizePrice.large + crustPrice[2] + toppingsPrice[1]
        alert("Hi " + jina.value + ". We appreciate that you love our pizzas. Your order total is " + sum8);
    } else if (size.value == 'Large at 1500' && crust.value == 'Gluten-free at 200' && toppings.value == 'Buffalo Chicken at 300') {
        let sum9 = sizePrice.large + crustPrice[2] + toppingsPrice[2]
        alert("Hi " + jina.value + ". We appreciate that you love our pizzas. Your order total is " + sum9);
    }

    //size setting for all medium selections
    else if (size.value == 'Medium at 750' && crust.value == 'Crispy at 100' && toppings.value == 'Grilled Pineapple at 200') {
        let sum10 = sizePrice.medium + crustPrice[0] + toppingsPrice[0]
        alert("Hi " + jina.value + ". We appreciate that you love our pizzas. Your order total is " + sum10);

    } else if (size.value == 'Medium at 750' && crust.value == 'Crispy at 100' && toppings.value == 'Bacon Pickle at 250') {
        let sum11 = sizePrice.medium + crustPrice[0] + toppingsPrice[1]
        alert("Hi " + jina.value + ". We appreciate that you love our pizzas. Your order total is " + sum11);

    } else if (size.value == 'Medium at 750' && crust.value == 'Crispy at 100' && toppings.value == 'Buffalo Chicken at 300') {
        let sum12 = sizePrice.medium + crustPrice[0] + toppingsPrice[2]
        alert("Hi " + jina.value + ". We appreciate that you love our pizzas. Your order total is " + sum12);

    } else if (size.value == 'Medium at 750' && crust.value == 'Stuffed at 150' && toppings.value == 'Grilled Pineapple at 200') {
        let sum13 = sizePrice.medium + crustPrice[1] + toppingsPrice[0]
        alert("Hi " + jina.value + ". We appreciate that you love our pizzas. Your order total is " + sum13);

    } else if (size.value == 'Medium at 750' && crust.value == 'Stuffed at 150' && toppings.value == 'Bacon Pickle at 250') {
        let sum14 = sizePrice.medium + crustPrice[1] + toppingsPrice[1]
        alert("Hi " + jina.value + ". We appreciate that you love our pizzas. Your order total is " + sum14);

    } else if (size.value == 'Medium at 750' && crust.value == 'Stuffed at 150' && toppings.value == 'Buffalo Chicken at 300') {
        let sum15 = sizePrice.medium + crustPrice[1] + toppingsPrice[2]
        alert("Hi " + jina.value + ". We appreciate that you love our pizzas. Your order total is " + sum15);

    } else if (size.value == 'Medium at 750' && crust.value == 'Gluten-free at 200' && toppings.value == 'Grilled Pineapple at 200') {
        let sum16 = sizePrice.medium + crustPrice[2] + toppingsPrice[0]
        alert("Hi " + jina.value + ". We appreciate that you love our pizzas. Your order total is " + sum16);

    } else if (size.value == 'Medium at 750' && crust.value == 'Gluten-free at 200' && toppings.value == 'Bacon Pickle at 250') {
        let sum17 = sizePrice.medium + crustPrice[2] + toppingsPrice[1]
        alert("Hi " + jina.value + ". We appreciate that you love our pizzas. Your order total is " + sum17);

    } else if (size.value == 'Medium at 750' && crust.value == 'Gluten-free at 200' && toppings.value == 'Buffalo Chicken at 300') {
        let sum18 = sizePrice.medium + crustPrice[2] + toppingsPrice[2]
        alert("Hi " + jina.value + ". We appreciate that you love our pizzas. Your order total is " + sum18);

    }

    // pricing for small
    else if (size.value == 'small at 500' && crust.value == 'Crispy at 100' && toppings.value == 'Grilled Pineapple at 200') {
        let sum19 = sizePrice.small + crustPrice[0] + toppingsPrice[0]
        alert("Hi " + jina.value + ". We appreciate that you love our pizzas. Your order total is " + sum19);

    } else if (size.value == 'small at 500' && crust.value == 'Crispy at 100' && toppings.value == 'Bacon Pickle at 250') {
        let sum20 = sizePrice.small + crustPrice[0] + toppingsPrice[1]
        alert("Hi " + jina.value + ". We appreciate that you love our pizzas. Your order total is " + sum20);

    } else if (size.value == 'small at 500' && crust.value == 'Crispy at 100' && toppings.value == 'Buffalo Chicken at 300') {
        let sum21 = sizePrice.small + crustPrice[0] + toppingsPrice[2]
        alert("Hi " + jina.value + ". We appreciate that you love our pizzas. Your order total is " + sum21);

    } else if (size.value == 'small at 500' && crust.value == 'Stuffed at 150' && toppings.value == 'Grilled Pineapple at 200') {
        let sum22 = sizePrice.small + crustPrice[1] + toppingsPrice[0]
        alert("Hi " + jina.value + ". We appreciate that you love our pizzas. Your order total is " + sum22);

    } else if (size.value == 'small at 500' && crust.value == 'Stuffed at 150' && toppings.value == 'Bacon Pickle at 250') {
        let sum23 = sizePrice.small + crustPrice[1] + toppingsPrice[1]
        alert("Hi " + jina.value + ". We appreciate that you love our pizzas. Your order total is " + sum23);

    } else if (size.value == 'small at 500' && crust.value == 'Stuffed at 150' && toppings.value == 'Buffalo Chicken at 300') {
        let sum24 = sizePrice.small + crustPrice[1] + toppingsPrice[2]
        alert("Hi " + jina.value + ". We appreciate that you love our pizzas. Your order total is " + sum24);

    } else if (size.value == 'small at 500' && crust.value == 'Gluten-free at 200' && toppings.value == 'Grilled Pineapple at 200') {
        let sum25 = sizePrice.small + crustPrice[2] + toppingsPrice[0]
        alert("Hi " + jina.value + ". We appreciate that you love our pizzas. Your order total is " + sum25);

    } else if (size.value == 'small at 500' && crust.value == 'Gluten-free at 200' && toppings.value == 'Bacon Pickle at 250') {
        let sum26 = sizePrice.small + crustPrice[2] + toppingsPrice[1]
        alert("Hi " + jina.value + ". We appreciate that you love our pizzas. Your order total is " + sum26);

    } else if (size.value == 'small at 500' && crust.value == 'Gluten-free at 200' && toppings.value == 'Buffalo Chicken at 300') {
        let sum27 = sizePrice.small + crustPrice[2] + toppingsPrice[2]
        alert("Hi " + jina.value + ". We appreciate that you love our pizzas. Your order total is " + sum27);

    };
}




function yes() {

    // prompt("enter your location:")

    if (size.value == 'Large at 1500' && crust.value == 'Crispy at 100' && toppings.value == 'Grilled Pineapple at 200') {
        let sum1 = sizePrice.large + crustPrice[0] + toppingsPrice[0]
        alert("Hi " + jina.value + ". Your pizza order will be delivered to " + locations + " at a total cost of " + (sum1 + deliveryFee))
    } else if (size.value == 'Large at 1500' && crust.value == 'Crispy at 100' && toppings.value == 'Bacon Pickle at 250') {
        let sum2 = sizePrice.large + crustPrice[0] + toppingsPrice[1]
        alert("Hi " + jina.value + ". Your pizza order will be delivered to " + locations + " at a total cost of " + (sum2 + deliveryFee))

    } else if (size.value == 'Large at 1500' && crust.value == 'Crispy at 100' && toppings.value == 'Buffalo Chicken at 300') {
        let sum3 = sizePrice.large + crustPrice[0] + toppingsPrice[2]
        alert("Hi " + jina.value + ". Your pizza order will be delivered to " + locations + " at a total cost of " + (sum3 + deliveryFee))
    } else if (size.value == 'Large at 1500' && crust.value == 'Stuffed at 150' && toppings.value == 'Grilled Pineapple at 200') {
        let sum4 = sizePrice.large + crustPrice[1] + toppingsPrice[0]
        alert("Hi " + jina.value + ". Your pizza order will be delivered to " + locations + " at a total cost of " + (sum4 + deliveryFee))
    } else if (size.value == 'Large at 1500' && crust.value == 'Stuffed at 150' && toppings.value == 'Bacon Pickle at 250') {
        let sum5 = sizePrice.large + crustPrice[1] + toppingsPrice[1]
        alert("Hi " + jina.value + ". Your pizza order will be delivered to " + locations + " at a total cost of " + (sum5 + deliveryFee))
    } else if (size.value == 'Large at 1500' && crust.value == 'Stuffed at 150' && toppings.value == 'Buffalo Chicken at 300') {
        let sum6 = sizePrice.large + crustPrice[1] + toppingsPrice[2]
        alert("Hi " + jina.value + ". Your pizza order will be delivered to " + locations + " at a total cost of " + (sum6 + deliveryFee))
    } else if (size.value == 'Large at 1500' && crust.value == 'Gluten-free at 200' && toppings.value == 'Grilled Pineapple at 200') {
        let sum7 = sizePrice.large + crustPrice[2] + toppingsPrice[0]
        alert("Hi " + jina.value + ". Your pizza order will be delivered to " + locations + " at a total cost of " + (sum7 + deliveryFee))
    } else if (size.value == 'Large at 1500' && crust.value == 'Gluten-free at 200' && toppings.value == 'Bacon Pickle at 250') {
        let sum8 = sizePrice.large + crustPrice[2] + toppingsPrice[1]
        alert("Hi " + jina.value + ". Your pizza order will be delivered to " + locations + " at a total cost of " + (sum8 + deliveryFee))
    } else if (size.value == 'Large at 1500' && crust.value == 'Gluten-free at 200' && toppings.value == 'Buffalo Chicken at 300') {
        let sum9 = sizePrice.large + crustPrice[2] + toppingsPrice[2]
        alert("Hi " + jina.value + ". Your pizza order will be delivered to " + locations + " at a total cost of " + (sum9 + deliveryFee))
    }

    //size setting for all medium selections
    else if (size.value == 'Medium at 750' && crust.value == 'Crispy at 100' && toppings.value == 'Grilled Pineapple at 200') {
        let sum10 = sizePrice.medium + crustPrice[0] + toppingsPrice[0]
        alert("Hi " + jina.value + ". Your pizza order will be delivered to " + locations + " at a total cost of " + (sum10 + deliveryFee))

    } else if (size.value == 'Medium at 750' && crust.value == 'Crispy at 100' && toppings.value == 'Bacon Pickle at 250') {
        let sum11 = sizePrice.medium + crustPrice[0] + toppingsPrice[1]
        alert("Hi " + jina.value + ". Your pizza order will be delivered to " + locations + " at a total cost of " + (sum11 + deliveryFee))

    } else if (size.value == 'Medium at 750' && crust.value == 'Crispy at 100' && toppings.value == 'Buffalo Chicken at 300') {
        let sum12 = sizePrice.medium + crustPrice[0] + toppingsPrice[2]
        alert("Hi " + jina.value + ". Your pizza order will be delivered to " + locations + " at a total cost of " + (sum12 + deliveryFee))

    } else if (size.value == 'Medium at 750' && crust.value == 'Stuffed at 150' && toppings.value == 'Grilled Pineapple at 200') {
        let sum13 = sizePrice.medium + crustPrice[1] + toppingsPrice[0]
        alert("Hi " + jina.value + ". Your pizza order will be delivered to " + locations + " at a total cost of " + (sum13 + deliveryFee))

    } else if (size.value == 'Medium at 750' && crust.value == 'Stuffed at 150' && toppings.value == 'Bacon Pickle at 250') {
        let sum14 = sizePrice.medium + crustPrice[1] + toppingsPrice[1]
        alert("Hi " + jina.value + ". Your pizza order will be delivered to " + locations + " at a total cost of " + (sum14 + deliveryFee))

    } else if (size.value == 'Medium at 750' && crust.value == 'Stuffed at 150' && toppings.value == 'Buffalo Chicken at 300') {
        let sum15 = sizePrice.medium + crustPrice[1] + toppingsPrice[2]
        alert("Hi " + jina.value + ". Your pizza order will be delivered to " + locations + " at a total cost of " + (sum15 + deliveryFee))

    } else if (size.value == 'Medium at 750' && crust.value == 'Gluten-free at 200' && toppings.value == 'Grilled Pineapple at 200') {
        let sum16 = sizePrice.medium + crustPrice[2] + toppingsPrice[0]
        alert("Hi " + jina.value + ". Your pizza order will be delivered to " + locations + " at a total cost of " + (sum16 + deliveryFee))

    } else if (size.value == 'Medium at 750' && crust.value == 'Gluten-free at 200' && toppings.value == 'Bacon Pickle at 250') {
        let sum17 = sizePrice.medium + crustPrice[2] + toppingsPrice[1]
        alert("Hi " + jina.value + ". Your pizza order will be delivered to " + locations + " at a total cost of " + (sum17 + deliveryFee))

    } else if (size.value == 'Medium at 750' && crust.value == 'Gluten-free at 200' && toppings.value == 'Buffalo Chicken at 300') {
        let sum18 = sizePrice.medium + crustPrice[2] + toppingsPrice[2]
        alert("Hi " + jina.value + ". Your pizza order will be delivered to " + locations + " at a total cost of " + (sum18 + deliveryFee))

    }

    // pricing for small
    else if (size.value == 'small at 500' && crust.value == 'Crispy at 100' && toppings.value == 'Grilled Pineapple at 200') {
        let sum19 = sizePrice.small + crustPrice[0] + toppingsPrice[0]
        alert("Hi " + jina.value + ". Your pizza order will be delivered to " + locations + " at a total cost of " + (sum19 + deliveryFee))

    } else if (size.value == 'small at 500' && crust.value == 'Crispy at 100' && toppings.value == 'Bacon Pickle at 250') {
        let sum20 = sizePrice.small + crustPrice[0] + toppingsPrice[1]
        alert("Hi " + jina.value + ". Your pizza order will be delivered to " + locations + " at a total cost of " + (sum20 + deliveryFee))

    } else if (size.value == 'small at 500' && crust.value == 'Crispy at 100' && toppings.value == 'Buffalo Chicken at 300') {
        let sum21 = sizePrice.small + crustPrice[0] + toppingsPrice[2]
        alert("Hi " + jina.value + ". Your pizza order will be delivered to " + locations + " at a total cost of " + (sum21 + deliveryFee))

    } else if (size.value == 'small at 500' && crust.value == 'Stuffed at 150' && toppings.value == 'Grilled Pineapple at 200') {
        let sum22 = sizePrice.small + crustPrice[1] + toppingsPrice[0]
        alert("Hi " + jina.value + ". Your pizza order will be delivered to " + locations + " at a total cost of " + (sum22 + deliveryFee))

    } else if (size.value == 'small at 500' && crust.value == 'Stuffed at 150' && toppings.value == 'Bacon Pickle at 250') {
        let sum23 = sizePrice.small + crustPrice[1] + toppingsPrice[1]
        alert("Hi " + jina.value + ". Your pizza order will be delivered to " + locations + " at a total cost of " + (sum23 + deliveryFee))

    } else if (size.value == 'small at 500' && crust.value == 'Stuffed at 150' && toppings.value == 'Buffalo Chicken at 300') {
        let sum24 = sizePrice.small + crustPrice[1] + toppingsPrice[2]
        alert("Hi " + jina.value + ". Your pizza order will be delivered to " + locations + " at a total cost of " + (sum24 + deliveryFee))

    } else if (size.value == 'small at 500' && crust.value == 'Gluten-free at 200' && toppings.value == 'Grilled Pineapple at 200') {
        let sum25 = sizePrice.small + crustPrice[2] + toppingsPrice[0]
        alert("Hi " + jina.value + ". Your pizza order will be delivered to " + locations + " at a total cost of " + (sum25 + deliveryFee))

    } else if (size.value == 'small at 500' && crust.value == 'Gluten-free at 200' && toppings.value == 'Bacon Pickle at 250') {
        let sum26 = sizePrice.small + crustPrice[2] + toppingsPrice[1]
        alert("Hi " + jina.value + ". Your pizza order will be delivered to " + locations + " at a total cost of " + (sum26 + deliveryFee))

    } else if (size.value == 'small at 500' && crust.value == 'Gluten-free at 200' && toppings.value == 'Buffalo Chicken at 300') {
        let sum27 = sizePrice.small + crustPrice[2] + toppingsPrice[2]
        alert("Hi " + jina.value + ". Your pizza order will be delivered to " + locations + " at a total cost of " + (sum27 + deliveryFee))

    };

}