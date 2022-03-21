$(document).ready(function () {
    $('.asdf').click(function () {
        $('.kama').show(0);
        $('#placeOrders').click(function () {
            $('#reply').show(0);
        })
    })
    $('#yes').click(function () {
        $('#demo').hide(0, function () {
            // $('#modal').show(0);
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

if (size.value == 'Large') {
    let price1 = sizePrice.large;
} else if (size.value == 'small') {
    let price2 = sizePrice.small;
} else if (size.value == 'Medium') {
    let price3 = sizePrice.medium;
}


let deliveryFee = 50;


function myFunction() {

    // price setting for all large sizes toppings and crust

    if (size.value == 'Large' && crust.value == 'Crispy' && toppings.value == 'Grilled Pineapple') {
        let sum1 = sizePrice.large + crustPrice[0] + toppingsPrice[0]
        return p.innerText = sum1
    } else if (size.value == 'Large' && crust.value == 'Crispy' && toppings.value == 'Bacon Pickle') {
        let sum2 = sizePrice.large + crustPrice[0] + toppingsPrice[1]
        return p.innerText = sum2
    } else if (size.value == 'Large' && crust.value == 'Crispy' && toppings.value == 'Buffalo Chicken') {
        let sum3 = sizePrice.large + crustPrice[0] + toppingsPrice[2]
        return p.innerText = sum3
    } else if (size.value == 'Large' && crust.value == 'Stuffed' && toppings.value == 'Grilled Pineapple') {
        let sum4 = sizePrice.large + crustPrice[1] + toppingsPrice[0]
        return p.innerText = sum4
    } else if (size.value == 'Large' && crust.value == 'Stuffed' && toppings.value == 'Bacon Pickle') {
        let sum5 = sizePrice.large + crustPrice[1] + toppingsPrice[1]
        return p.innerText = sum5
    } else if (size.value == 'Large' && crust.value == 'Stuffed' && toppings.value == 'Buffalo Chicken') {
        let sum6 = sizePrice.large + crustPrice[1] + toppingsPrice[2]
        return p.innerText = sum6
    } else if (size.value == 'Large' && crust.value == 'Gluten-free' && toppings.value == 'Grilled Pineapple') {
        let sum7 = sizePrice.large + crustPrice[2] + toppingsPrice[0]
        return p.innerText = sum7
    } else if (size.value == 'Large' && crust.value == 'Gluten-free' && toppings.value == 'Bacon Pickle') {
        let sum8 = sizePrice.large + crustPrice[2] + toppingsPrice[1]
        return p.innerText = sum8
    } else if (size.value == 'Large' && crust.value == 'Gluten-free' && toppings.value == 'Buffalo Chicken') {
        let sum9 = sizePrice.large + crustPrice[2] + toppingsPrice[2]
        return p.innerText = sum9
    }

    //size setting for all medium selections
    else if (size.value == 'Medium' && crust.value == 'Crispy' && toppings.value == 'Grilled Pineapple') {
        let sum10 = sizePrice.medium + crustPrice[0] + toppingsPrice[0]
        return p.innerText = sum10
    } else if (size.value == 'Medium' && crust.value == 'Crispy' && toppings.value == 'Bacon Pickle') {
        let sum11 = sizePrice.medium + crustPrice[0] + toppingsPrice[1]
        return p.innerText = sum11
    } else if (size.value == 'Medium' && crust.value == 'Crispy' && toppings.value == 'Buffalo Chicken') {
        let sum12 = sizePrice.medium + crustPrice[0] + toppingsPrice[2]
        return p.innerText = sum12
    } else if (size.value == 'Medium' && crust.value == 'Stuffed' && toppings.value == 'Grilled Pineapple') {
        let sum13 = sizePrice.medium + crustPrice[1] + toppingsPrice[0]
        return p.innerText = sum13
    } else if (size.value == 'Medium' && crust.value == 'Stuffed' && toppings.value == 'Bacon Pickle') {
        let sum14 = sizePrice.medium + crustPrice[1] + toppingsPrice[1]
        return p.innerText = sum14
    } else if (size.value == 'Medium' && crust.value == 'Stuffed' && toppings.value == 'Buffalo Chicken') {
        let sum15 = sizePrice.medium + crustPrice[1] + toppingsPrice[2]
        return p.innerText = sum15
    } else if (size.value == 'Medium' && crust.value == 'Gluten-free' && toppings.value == 'Grilled Pineapple') {
        let sum16 = sizePrice.medium + crustPrice[2] + toppingsPrice[0]
        return p.innerText = sum16
    } else if (size.value == 'Medium' && crust.value == 'Gluten-free' && toppings.value == 'Bacon Pickle') {
        let sum17 = sizePrice.medium + crustPrice[2] + toppingsPrice[1]
        return p.innerText = sum17
    } else if (size.value == 'Medium' && crust.value == 'Gluten-free' && toppings.value == 'Buffalo Chicken') {
        let sum18 = sizePrice.medium + crustPrice[2] + toppingsPrice[2]
        return p.innerText = sum18
    }

    // pricing for small
    else if (size.value == 'small' && crust.value == 'Crispy' && toppings.value == 'Grilled Pineapple') {
        let sum19 = sizePrice.small + crustPrice[0] + toppingsPrice[0]
        return p.innerText = sum19
    } else if (size.value == 'small' && crust.value == 'Crispy' && toppings.value == 'Bacon Pickle') {
        let sum20 = sizePrice.small + crustPrice[0] + toppingsPrice[1]
        return p.innerText = sum20
    } else if (size.value == 'small' && crust.value == 'Crispy' && toppings.value == 'Buffalo Chicken') {
        let sum21 = sizePrice.small + crustPrice[0] + toppingsPrice[2]
        return p.innerText = sum21
    } else if (size.value == 'small' && crust.value == 'Stuffed' && toppings.value == 'Grilled Pineapple') {
        let sum22 = sizePrice.small + crustPrice[1] + toppingsPrice[0]
        return p.innerText = sum22
    } else if (size.value == 'small' && crust.value == 'Stuffed' && toppings.value == 'Bacon Pickle') {
        let sum23 = sizePrice.small + crustPrice[1] + toppingsPrice[1]
        return p.innerText = sum23
    } else if (size.value == 'small' && crust.value == 'Stuffed' && toppings.value == 'Buffalo Chicken') {
        let sum24 = sizePrice.small + crustPrice[1] + toppingsPrice[2]
        return p.innerText = sum24
    } else if (size.value == 'small' && crust.value == 'Gluten-free' && toppings.value == 'Grilled Pineapple') {
        let sum25 = sizePrice.small + crustPrice[2] + toppingsPrice[0]
        return p.innerText = sum25
    } else if (size.value == 'small' && crust.value == 'Gluten-free' && toppings.value == 'Bacon Pickle') {
        let sum26 = sizePrice.small + crustPrice[2] + toppingsPrice[1]
        return p.innerText = sum26
    } else if (size.value == 'small' && crust.value == 'Gluten-free' && toppings.value == 'Buffalo Chicken') {
        let sum27 = sizePrice.small + crustPrice[2] + toppingsPrice[2]
        return p.innerText = sum27
    };
}




function yes() {

    // prompt("enter your location:")

    if (size.value == 'Large' && crust.value == 'Crispy' && toppings.value == 'Grilled Pineapple') {
        let sum1 = sizePrice.large + crustPrice[0] + toppingsPrice[0]
        alert("Hi " + jina.value + ". Your order will be delivered to your location " + locations + " at a total cost of " + (sum1 + 50))
    } else if (size.value == 'Large' && crust.value == 'Crispy' && toppings.value == 'Bacon Pickle') {
        let sum2 = sizePrice.large + crustPrice[0] + toppingsPrice[1]
        return document.getElementById('demo2').innerText = myFunction() + deliveryFee
    } else if (size.value == 'Large' && crust.value == 'Crispy' && toppings.value == 'Buffalo Chicken') {
        let sum3 = sizePrice.large + crustPrice[0] + toppingsPrice[2]
        return document.getElementById('demo2').innerText = sum3 + deliveryFee
    } else if (size.value == 'Large' && crust.value == 'Stuffed' && toppings.value == 'Grilled Pineapple') {
        let sum4 = sizePrice.large + crustPrice[1] + toppingsPrice[0]
        return document.getElementById('demo2').innerText = sum4 + deliveryFee
    } else if (size.value == 'Large' && crust.value == 'Stuffed' && toppings.value == 'Bacon Pickle') {
        let sum5 = sizePrice.large + crustPrice[1] + toppingsPrice[1]
        return document.getElementById('demo2').innerText = sum5 + deliveryFee
    } else if (size.value == 'Large' && crust.value == 'Stuffed' && toppings.value == 'Buffalo Chicken') {
        let sum6 = sizePrice.large + crustPrice[1] + toppingsPrice[2]
        return document.getElementById('demo2').innerText = sum6 + deliveryFee
    } else if (size.value == 'Large' && crust.value == 'Gluten-free' && toppings.value == 'Grilled Pineapple') {
        let sum7 = sizePrice.large + crustPrice[2] + toppingsPrice[0]
        return document.getElementById('demo2').innerText = sum7 + deliveryFee
    } else if (size.value == 'Large' && crust.value == 'Gluten-free' && toppings.value == 'Bacon Pickle') {
        let sum8 = sizePrice.large + crustPrice[2] + toppingsPrice[1]
        return document.getElementById('demo2').innerText = sum8 + deliveryFee
    } else if (size.value == 'Large' && crust.value == 'Gluten-free' && toppings.value == 'Buffalo Chicken') {
        let sum9 = sizePrice.large + crustPrice[2] + toppingsPrice[2]
        return document.getElementById('demo2').innerText = sum9 + deliveryFee
    }

    //size setting for all medium selections
    else if (size.value == 'Medium' && crust.value == 'Crispy' && toppings.value == 'Grilled Pineapple') {
        let sum10 = sizePrice.medium + crustPrice[0] + toppingsPrice[0]
        return document.getElementById('demo2').innerText = sum10 + deliveryFee
    } else if (size.value == 'Medium' && crust.value == 'Crispy' && toppings.value == 'Bacon Pickle') {
        let sum11 = sizePrice.medium + crustPrice[0] + toppingsPrice[1]
        return document.getElementById('demo2').innerText = sum11 + deliveryFee
    } else if (size.value == 'Medium' && crust.value == 'Crispy' && toppings.value == 'Buffalo Chicken') {
        let sum12 = sizePrice.medium + crustPrice[0] + toppingsPrice[2]
        return document.getElementById('demo2').innerText = sum12 + deliveryFee
    } else if (size.value == 'Medium' && crust.value == 'Stuffed' && toppings.value == 'Grilled Pineapple') {
        let sum13 = sizePrice.medium + crustPrice[1] + toppingsPrice[0]
        return document.getElementById('demo2').innerText = sum13 + deliveryFee
    } else if (size.value == 'Medium' && crust.value == 'Stuffed' && toppings.value == 'Bacon Pickle') {
        let sum14 = sizePrice.medium + crustPrice[1] + toppingsPrice[1]
        return document.getElementById('demo2').innerText = sum14 + deliveryFee
    } else if (size.value == 'Medium' && crust.value == 'Stuffed' && toppings.value == 'Buffalo Chicken') {
        let sum15 = sizePrice.medium + crustPrice[1] + toppingsPrice[2]
        return document.getElementById('demo2').innerText = sum15 + deliveryFee
    } else if (size.value == 'Medium' && crust.value == 'Gluten-free' && toppings.value == 'Grilled Pineapple') {
        let sum16 = sizePrice.medium + crustPrice[2] + toppingsPrice[0]
        return document.getElementById('demo2').innerText = sum16 + deliveryFee
    } else if (size.value == 'Medium' && crust.value == 'Gluten-free' && toppings.value == 'Bacon Pickle') {
        let sum17 = sizePrice.medium + crustPrice[2] + toppingsPrice[1]
        return document.getElementById('demo2').innerText = sum17 + deliveryFee
    } else if (size.value == 'Medium' && crust.value == 'Gluten-free' && toppings.value == 'Buffalo Chicken') {
        let sum18 = sizePrice.medium + crustPrice[2] + toppingsPrice[2]
        return document.getElementById('demo2').innerText = sum18 + deliveryFee
    }

    // pricing for small
    else if (size.value == 'small' && crust.value == 'Crispy' && toppings.value == 'Grilled Pineapple') {
        let sum19 = sizePrice.small + crustPrice[0] + toppingsPrice[0]
        return document.getElementById('demo2').innerText = sum19 + deliveryFee
    } else if (size.value == 'small' && crust.value == 'Crispy' && toppings.value == 'Bacon Pickle') {
        let sum20 = sizePrice.small + crustPrice[0] + toppingsPrice[1]
        return document.getElementById('demo2').innerText = sum20 + deliveryFee
    } else if (size.value == 'small' && crust.value == 'Crispy' && toppings.value == 'Buffalo Chicken') {
        let sum21 = sizePrice.small + crustPrice[0] + toppingsPrice[2]
        return document.getElementById('demo2').innerText = sum21 + deliveryFee
    } else if (size.value == 'small' && crust.value == 'Stuffed' && toppings.value == 'Grilled Pineapple') {
        let sum22 = sizePrice.small + crustPrice[1] + toppingsPrice[0]
        return document.getElementById('demo2').innerText = sum22 + deliveryFee
    } else if (size.value == 'small' && crust.value == 'Stuffed' && toppings.value == 'Bacon Pickle') {
        let sum23 = sizePrice.small + crustPrice[1] + toppingsPrice[1]
        return document.getElementById('demo2').innerText = sum23 + deliveryFee
    } else if (size.value == 'small' && crust.value == 'Stuffed' && toppings.value == 'Buffalo Chicken') {
        let sum24 = sizePrice.small + crustPrice[1] + toppingsPrice[2]
        return document.getElementById('demo2').innerText = sum24 + deliveryFee
    } else if (size.value == 'small' && crust.value == 'Gluten-free' && toppings.value == 'Grilled Pineapple') {
        let sum25 = sizePrice.small + crustPrice[2] + toppingsPrice[0]
        return document.getElementById('demo2').innerText = sum25 + deliveryFee
    } else if (size.value == 'small' && crust.value == 'Gluten-free' && toppings.value == 'Bacon Pickle') {
        let sum26 = sizePrice.small + crustPrice[2] + toppingsPrice[1]
        return document.getElementById('demo2').innerText = sum26 + deliveryFee
    } else if (size.value == 'small' && crust.value == 'Gluten-free' && toppings.value == 'Buffalo Chicken') {
        let sum27 = sizePrice.small + crustPrice[2] + toppingsPrice[2]
        return document.getElementById('demo2').innerText = sum27 + deliveryFee
    };

}