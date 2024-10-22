// import prisma from "@/app/libs/prismadb";

// interface IParams {
//   listingId?: string;
// }

// export default async function getListingById(params: IParams) {
//   try {
//     const { listingId } = params;

//     const listing = await prisma.listing.findUnique({
//       where: {
//         id: listingId,
//       },
//       include: {
//         user: true,
//       },
//     });

//     if (!listing) {
//       return null;
//     }

//     return listing;
//   } catch (error: any) {
//     throw new Error(error);
//   }
// }

import prisma from "@/app/libs/prismadb";
import { ListingWithUser } from "@/app/types/ListingWithUser"; // Justera importen baserat på din struktur

interface IParams {
  listingId?: string;
}

export default async function getListingById(
  params: IParams
): Promise<ListingWithUser | null> {
  try {
    const { listingId } = params;

    const listing = await prisma.listing.findUnique({
      where: {
        id: listingId,
      },
      include: {
        user: true,
      },
    });

    if (!listing) {
      return null;
    }

    return listing as ListingWithUser; // Typa om till ListingWithUser
  } catch (error: any) {
    throw new Error(error);
  }
}
