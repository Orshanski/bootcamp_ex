function getString() {
    
    const jobTitle = document.getElementById('jobTitle').value;
    let location = document.getElementById('location').value;
    let partnerName = document.getElementById('partnerName').value;
    let numChildren = document.getElementById('numberOfChildren').value;


    function tellFortune(jobTitle, location, partner, numChildren) {

        const fortune = `You will be a ${jobTitle} in ${location} married to ${partner} with ${numChildren} children`;
        return fortune;
    }

    document.getElementById('result').textContent = tellFortune(jobTitle, location, partnerName, numChildren);
    
}