function talk() {
    const boughtTesla = document.getElementById("boughtTesla").checked;
    const yearOfTeslaPurchase = parseInt(document.getElementById("yearOfPurchase").value, 10);
    const isUSCitizen = document.getElementById("isUSCitizen").checked;
    const currentYear = new Date().getFullYear();
    const conversationElement = document.getElementById("conversation");

    // Clear previous conversation
    conversationElement.innerHTML = '';

    if (boughtTesla) {
        if (isUSCitizen) {
            const yearsSincePurchase = currentYear - yearOfTeslaPurchase;
            if (yearsSincePurchase >= 4) {
                conversationElement.innerHTML = "Would you like an upgrade?";
            } else {
                conversationElement.innerHTML = "Are you satisfied with your car?";
            }
        } else {
            conversationElement.innerHTML = "Would you like to move to the US?";
        }
    } else {
        conversationElement.innerHTML = "Are you interested in buying a Tesla?";
    }
};
