type IntersectionCallback = (entries: IntersectionObserverEntry) => void;

export function useIntersectionObserver() {
    const intersectionHandler = (intersectionCallback: IntersectionCallback) =>
        function handleIntersection(entries: IntersectionObserverEntry[]) {
            entries.forEach((entry) => {
                intersectionCallback(entry);
            });
        };

    function observeTarget(
        element: Element,
        intersectionCallback: IntersectionCallback,
        options?: IntersectionObserverInit,
    ) {
        const handleIntersection = intersectionHandler(intersectionCallback);
        const observer = new IntersectionObserver(handleIntersection, options);
        observer.observe(element);
    }

    return {
        observeTarget,
    };
}
