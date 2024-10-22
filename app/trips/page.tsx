import EmptyState from "../components/EmptyState";

import getCurrentUser from "../actions/getCurrentUsers";
import getReservations from "../actions/getReservations";
import TripsClient from "./TripsClient";

const TripsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <EmptyState
        title="Unauthorized"
        subtitle="Please login to view your trips"
      />
    );
  }

  const reservations = await getReservations({
    userId: currentUser.id,
  });

  if (reservations.length === 0) {
    return <EmptyState title="No trips" subtitle="You have no trips to show" />;
  }

  return <TripsClient reservations={reservations} currentUser={currentUser} />;
};

export default TripsPage;
