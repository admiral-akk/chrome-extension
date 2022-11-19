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
    for (link of links.values()) {
        curr = getOffset(newest);
        next = getOffset(link);
        if (next.top > curr.top || next.top == curr.top && curr.left < next.left) {
            newest = link;
        }
    }
    window.location.replace(newest.getAttribute('href'));
});
