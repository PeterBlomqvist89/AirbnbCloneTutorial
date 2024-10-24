import EmptyState from "../components/EmptyState";

import getCurrentUser from "../actions/getCurrentUsers";
import getFavoriteListings from "../actions/getFavoriteListings";
import FavoritesClient from "./FavoritesClient";

const ListingPage = async () => {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return <EmptyState title="No Favorites" subtitle="You have no favorites" />;
  }

  return <FavoritesClient listings={listings} currentUser={currentUser} />;
};

export default ListingPage;
