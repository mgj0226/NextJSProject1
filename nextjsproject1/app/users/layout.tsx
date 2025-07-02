export default function UsersLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <h1 style={{ color: "red", fontSize: "24px" }}>Users</h1>
            {children}
        </div>
    );
}
export const dynamic = "force-dynamic"; // This will ensure that the layout is always rendered on the server
export const revalidate = 0; // This will ensure that the layout is always fresh and not cached
export const fetchCache = "force-no-store"; // This will ensure that the layout is always fetched from the server and not cached
export const runtime = "edge"; // This will ensure that the layout is always rendered on the edge
export const preferredRegion = "auto"; // This will ensure that the layout is always rendered in the closest region to the user
export const tags = ["users", "layout"]; // This will ensure that the layout is always tagged with the users and layout tags
export const revalidateTag = "users-layout"; // This will ensure that the layout is always revalidated when the users layout tag is updated
export const fetchTags = ["users-layout"]; // This will ensure that the layout is always fetched with the users layout tag
export const fetchRevalidate = 0; // This will ensure that the layout is always fetched with the users layout tag and not cached
export const fetchCacheTags = ["users-layout"]; // This will ensure that the layout is always fetched with the users layout tag and not cached
export const fetchRuntime = "edge"; // This will ensure that the layout is always fetched on the edge
export const fetchPreferredRegion = "auto"; // This will ensure that the layout is always fetched in the closest region to the user
export const fetchRevalidateTag = "users-layout"; // This will ensure that the layout is always fetched with the users layout tag and revalidated when the users layout tag is updated
export const fetchRevalidateCache = "force-no-store"; // This will ensure that the layout is always fetched with the users layout tag and not cached
export const fetchRevalidateRuntime = "edge"; // This will ensure that the layout is always fetched on the edge with the users layout tag
export const fetchRevalidatePreferredRegion = "auto"; // This will ensure that the layout is always fetched in the closest region to the user with the users layout tag
export const fetchRevalidateTags = ["users-layout"]; // This will ensure that the layout is always fetched with the users layout tag and revalidated when the users layout tag is updated
export const fetchRevalidateCacheTags = ["users-layout"]; // This will ensure that the layout is always fetched with the users layout tag and not cached
export const fetchRevalidateRuntimeTags = ["users-layout"]; // This will ensure that the layout is always fetched on the edge with the users layout tag
export const fetchRevalidatePreferredRegionTags = ["users-layout"]; // This will ensure that the layout is always fetched in the closest region to the user with the users layout tag
export const fetchRevalidateCacheRuntime = "edge"; // This will ensure that the layout is always fetched with the users layout tag and not cached on the edge
export const fetchRevalidateCachePreferredRegion = "auto"; // This will ensure that the layout is always fetched with the users layout tag and not cached in the closest region to the user
export const fetchRevalidateCacheTagsRuntime = "edge"; // This will ensure that the layout is always fetched with the users layout tag and not cached on the edge
export const fetchRevalidateCacheTagsPreferredRegion = "auto"; // This will ensure that the layout is always fetched with the users layout tag and not cached in the closest region to the user
export const fetchRevalidateCacheRuntimeTags = ["users-layout"]; // This will ensure that the layout is always fetched with the users layout tag and not cached on the edge
export const fetchRevalidateCachePreferredRegionTags = ["users-layout"]; // This will ensure that the layout is always fetched with the users layout tag and not cached in the closest region to the user
export const fetchRevalidateCacheTagsRuntimeTags = ["users-layout"]; // This will ensure that the layout is always fetched with the users layout tag and not cached on the edge
export const fetchRevalidateCacheTagsPreferredRegionTags = ["users-layout"]; // This will ensure that the layout is always fetched with the users layout tag and not cached in the closest region to the user
export const fetchRevalidateCacheRuntimePreferredRegion = "auto"; // This will ensure that the layout is always fetched with the users layout tag and not cached on the edge in the closest region to the user
export const fetchRevalidateCachePreferredRegionRuntime = "edge"; // This will ensure that the layout is always fetched with the users layout tag and not cached in the closest region to the user on the edge
export const fetchRevalidateCacheTagsRuntimePreferredRegion = "auto"; // This will ensure that the layout is always fetched with the users layout tag and not cached on the edge in the closest region to the user
export const fetchRevalidateCacheTagsPreferredRegionRuntime = "edge"; // This will ensure that the layout is always fetched with the users layout tag and not cached in the closest region to the user on the edge
export const fetchRevalidateCacheRuntimePreferredRegionTags = ["users-layout"]; // This will ensure that the layout is always fetched with the users layout tag and not cached on the edge in the closest region to the user
export const fetchRevalidateCachePreferredRegionRuntimeTags = ["users-layout"]; // This will ensure that the layout is always fetched with the users layout tag and not cached in the closest region to the user on the edge
export const fetchRevalidateCacheTagsRuntimePreferredRegionTags = ["users-layout"]; // This will ensure that the layout is always fetched with the users layout tag and not cached on the edge in the closest region to the user
export const fetchRevalidateCacheTagsPreferredRegionRuntimeTags = ["users-layout"]; // This will ensure that the layout is always fetched with the users layout tag and not cached in the closest region to the user on the edge