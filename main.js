function accordion(contentId, carrotId) {
    let targetContainer = document.getElementById(contentId); // Find the element we know we want to update
    let targetCarrot = document.getElementById(carrotId); // Get the corresponding carrot
    let allContainers = document.getElementsByClassName("accord-container"); // Get all the elements
    let allCarrots = document.getElementsByClassName("project-tab-carrot");

    for (let i = 0; i < allContainers.length; i++) {
        let currentContainer = allContainers[i];
        let currentCarrot = allCarrots[i];
        if (currentContainer.id != targetContainer.id) { // If not the target container, automatically collapse it.
            currentContainer.className = currentContainer.className.replace(" accord-show", "");
            currentCarrot.className = currentCarrot.className.replace
            (" project-tab-carrot-down", "");
        }
    }

    if (targetContainer.className.indexOf("accord-show") == -1) { // Open the target container
        targetContainer.className += " accord-show";
        targetCarrot.className += " project-tab-carrot-down";
    } else { // Close the target container
        targetContainer.className = targetContainer.className.replace(" accord-show", "");
        targetCarrot.className = targetCarrot.className.replace(" project-tab-carrot-down", "");
    }
}


function imageCarousel(x, dir) {
    let parentElement = document.getElementById(x);
    let adjImages = parentElement.getElementsByClassName('carousel-image');

    for (let i = 0; i < adjImages.length; i++) {
        console.log(adjImages[i].className.indexOf("image-current"));
        if (adjImages[i].className.indexOf("image-current") == 15) { // Hide the current image
            adjImages[i].className = adjImages[i].className.replace("image-current", "image-hidden");

            if (dir=='prev') {
                if (i == 0) { // Wrap images from first to last
                    console.log("wrapping to end...");
                    adjImages[adjImages.length-1].className = adjImages[adjImages.length-1].className.replace("image-hidden", "image-current");
                    break;
                } else { // Otherwise, show prev image in array
                    console.log("show prev image...");
                    adjImages[i-1].className = adjImages[i-1].className.replace("image-hidden", "image-current");
                    break;
                }
            } else if (dir == 'next') {
                if (i == adjImages.length-1) {
                    console.log("wrapping to start...");
                    adjImages[0].className = adjImages[0].className.replace("image-hidden", "image-current");
                    break;
                } else {
                    console.log("showing next image...");
                    adjImages[i+1].className = adjImages[i+1].className.replace("image-hidden", "image-current");
                    break;
                }
            }
        }
    }
    console.log('break success')
}