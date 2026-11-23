document.querySelectorAll('[data-story-chapters]').forEach((story) => {
    const search = story.querySelector('[data-chapter-search]');
    const list = story.querySelector('[data-chapter-list]');
    const noResults = story.querySelector('[data-no-results]');

    if (!search || !list || !noResults) {
        throw new Error('Story chapters requires search, list, and no-results elements.');
    }

    const items = Array.from(list.querySelectorAll('li'));

    search.addEventListener('input', () => {
        const query = search.value.trim().toLowerCase();
        let visibleCount = 0;

        items.forEach((item) => {
            const matches = item.textContent.toLowerCase().includes(query);
            item.hidden = !matches;
            if (matches) visibleCount += 1;
        });

        noResults.hidden = visibleCount > 0;
    });
});
