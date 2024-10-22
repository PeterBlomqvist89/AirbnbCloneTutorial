// types/ListingWithUser.ts
import { Listing, User } from "@prisma/client";

export type ListingWithUser = Listing & {
  user: User;
};
