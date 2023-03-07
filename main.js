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