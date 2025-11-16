function blockInstaFeed() {
    const feedSelectors = [
        "main[role='main'] article",         // Feed posts
        "section._aasi",                      // Reels section
        "div._ac0a",                          // Explore grid
        "div.x1iyjqo2.xh8yej3"                // Suggested posts container
    ];

    feedSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            el.style.display = "none";
        });
    });

    // Replace feed area with custom message
    let blocker = document.getElementById("instaFeedBlocker");
    if (!blocker) {
        blocker = document.createElement("div");
        blocker.id = "instaFeedBlocker";
        blocker.innerText =
            "🚫 Feed Blocked — go touch grass 🌿 or get stuff done.";
        document.body.appendChild(blocker);
    }
}

setInterval(blockInstaFeed, 1000); // keeps blocking even after navigation
