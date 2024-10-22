"use client";

import Container from "@/app/components/Container";
import ListingHead from "@/app/components/listings/ListingHead";
import ListingInfo from "@/app/components/listings/ListingInfo";
import { categories } from "@/app/components/navbar/Categories";
import { SafeUser } from "@/app/types";
import { Reservation } from "@prisma/client";
import { useMemo } from "react";
import { ListingWithUser } from "@/app/types/ListingWithUser";

interface ListingClientProps {
  reservations?: Reservation[];
  listing: ListingWithUser;
  currentUser?: SafeUser | null;
}

const ListingClient: React.FC<ListingClientProps> = ({
  listing,
  currentUser,
}) => {
  const category = useMemo(() => {
    return categories.find((item) => item.label === listing.category);
  }, [listing.category]);

  const user: SafeUser = {
    ...listing.user,
    createdAt: listing.user.createdAt.toISOString(), // Konvertera till sträng
    updatedAt: listing.user.updatedAt.toISOString(), // Konvertera till sträng
    emailVerified: listing.user.emailVerified
      ? listing.user.emailVerified.toISOString()
      : null,
  };

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6 ">
          <ListingHead
            title={listing.title}
            imageSrc={listing.imageSrc}
            locationValue={listing.locationValue}
            id={listing.id}
            currentUser={currentUser ?? null}
          />
          <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6 ">
            <ListingInfo
              user={user}
              category={category}
              description={listing.description}
              roomCount={listing.roomCount}
              guestCount={listing.guestCount}
              bathroomCount={listing.bathroomCount}
              locationValue={listing.locationValue}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
export default ListingClient;
