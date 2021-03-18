function fillprogressbar(sec) {
    
    //GETTING THE PROGRESSBAR FROM HTML
    const progressbar = document.querySelector('.progressbar');
    //RE-SETTING THE PROGRESSBAR
    let barAtPercentage = 0;
    //SETTING UP THE INTERVAL FOR RUNNING THE BAR AFTER ITS CLICKED
    const interval = setInterval(() => {
        progressbar.style.width = barAtPercentage + '%';
        barAtPercentage ++;
        console.log("clicked");
        if(barAtPercentage >= 100) {
            clearInterval(interval)
        }
    },(sec * 1000) / 100)
}