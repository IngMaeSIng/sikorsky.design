export function generateBreadcrumbs(currentPath: string, pageTitle: string) {
    const pathSegments = currentPath.split('/').filter(segment => segment !== '');
    const breadcrumbs = [{ label: 'Paul Sikorsky', href: '/' }];

    let currentHref = '';
    for (let i = 0; i < pathSegments.length; i++) {
        const segment = pathSegments[i];
        currentHref += `/${segment}`;

        if (i === pathSegments.length - 1) {
            breadcrumbs.push({
                label: pageTitle,
                href: currentHref
            });
        } else {
            breadcrumbs.push({
                label: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
                href: currentHref
            });
        }
    }

    return breadcrumbs;
}