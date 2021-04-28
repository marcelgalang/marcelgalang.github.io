const product = [
    {
        
    }
]


const buildProductContainer = product => {
    const productInfoWrapper = document.createElement("div");
    const productHeader = document.createElement("h4");
    const h3 = document.createElement("h3");
    const productInfo = document.createElement("p");
    const productFeatures = document.createElement("ul");
    const feature = document.createElement("li");
    const select = document.createElement("select");
    const option = document.createElement("option");
    const body = document.querySelector('body');
    const quantityWrapper = document.createElement("div");

    body.append(productInfoWrapper);
    productInfoWrapper.setAttribute("class", "right-column");
    productInfoWrapper.append(productHeader);
    productInfoWrapper.append(productInfo);
    productInfoWrapper.append(productFeatures);
    //li loop
    productInfoWrapper.append(h3);
    productInfoWrapper.append(quantityWrapper);
    quantityWrapper.append(select);
    // option loop
};