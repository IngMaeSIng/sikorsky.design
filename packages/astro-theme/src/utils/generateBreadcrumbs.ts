export interface BreadcrumbItem {
  label: string;
  href: string;
}

/**
 * Generate breadcrumb items from a path.
 * @param currentPath - The current page path (e.g., "/about" or "/blog/post-1")
 * @param pageTitle - The title of the current page
 * @param siteName - The site name to use for the home breadcrumb (optional, loaded from config if not provided)
 */
export function generateBreadcrumbs(currentPath: string, pageTitle: string, siteName?: string): BreadcrumbItem[] {
  const pathSegments = currentPath.split("/").filter((segment) => segment !== "");

  // Use provided siteName or fall back to a default
  const homeName = siteName ?? "Home";
  const breadcrumbs: BreadcrumbItem[] = [{ label: homeName, href: "/" }];

  let currentHref = "";
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
        label: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " "),
        href: currentHref
      });
    }
  }

  return breadcrumbs;
}
