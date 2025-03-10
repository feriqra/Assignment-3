import { useRouter } from "next/router";
import useSWR from "swr";
import PageHeader from "@/components/PageHeader";
import ListingDetails from "@/components/ListingDetails";
import Error from "next/error";

export default function Listing() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isLoading } = useSWR(
    `https://mongo-db-api-drab.vercel.app/api/listings/${id}`
  );

  if (isLoading) return null;
  if (error || !data) return <Error statusCode={404} />;

  return (
    <>
      <PageHeader text={data.name} />
      <ListingDetails listing={data} />
    </>
  );
}
