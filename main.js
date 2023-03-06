function accordion(contentId) {
    let targetContainer = document.getElementById(contentId); // Find the element we know we want to update

    let allContainers = document.getElementsByClassName("accord-container"); // Get all the elements

    for (let i = 0; i < allContainers.length; i++) {
        if (allContainers[i].id != targetContainer.id) { // If not the target container, automatically collapse it.
            allContainers[i].className = allContainers[i].className.replace(" accord-show", "");
        }
    }

    if (targetContainer.className.indexOf("accord-show") == -1) { // Open the target container
        targetContainer.className += " accord-show";
    } else { // Close the target container
        targetContainer.className = targetContainer.className.replace(" accord-show", "");
    }
}