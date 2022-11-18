function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}

window.addEventListener("load", (event) => {
    const link_block = document.getElementsByClassName('THUMBS-BLOCK');
    if (link_block.length == 0) {
        console.log("No link block found!");
        return;
    }
    const links = link_block[0].querySelectorAll("[href]");
    if (links.length == 0) {
        console.log("No links found!");
        return;
    }
    newest = links.item(0);
    for (link in links.entries()) {
        curr = getOffset(newest);
        next = getOffset(link);
        if (curr.left < next.left || curr.left == next.left && next.top < curr.top) {
            newest = link;
        }
    }
    window.location.replace(newest.getAttribute('href'));
});
