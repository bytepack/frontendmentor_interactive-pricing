const slider = document.querySelector("[data-slider]")
const checkbox = document.querySelector("[data-checkbox]")
const viewElement = document.querySelector("[data-view]")
const  priceElement = document.querySelector("[data-price]")


let yearly = checkbox.checked
let sliderValue = slider.value

slider.addEventListener("input", () => {
    sliderValue = slider.value
    const [pageView, price] = calculateViewPrice()
    renderPricing(pageView, price)

})


checkbox.addEventListener("input", () => {
    yearly = checkbox.checked
    const [pageView, price] = calculateViewPrice()
    renderPricing(pageView, price)
})

function calculateViewPrice() {
    let pageView
    let price
    switch (sliderValue) {
        case "1":
            pageView = "10K"
            price = 8
            break
        case "2":
            pageView = "50K"
            price = 12
            break
        case "3":
            pageView = "100K"
            price = 16
            break
        case "4":
            pageView = "500K"
            price = 24
            break
        case "5":
            pageView = "1M"
            price = 36
            break
    }

    if (yearly) price = price - price / 4
    return [pageView, formatPrice(price)]
}

function renderPricing(pageView, price) {
    viewElement.textContent = pageView
    priceElement.textContent = price
}

function formatPrice(price){
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        "currency": "USD"
    }).format(price)
}