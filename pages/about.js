import Link from "next/link";
import { Card } from "react-bootstrap";
import PageHeader from "@/components/PageHeader";
import ListingDetails from "@/components/ListingDetails";

export async function getStaticProps() {
  const response = await fetch(
    "https://mongo-db-api-drab.vercel.app/api/listings/67af97b28505480c0141a8ef"
  );
  const listing = await response.json();

  return {
    props: { listing },
  };
}

export default function About({ listing }) {
  return (
    <>
      <PageHeader text="About the Developer" />
      <Card>
        <Card.Body>
          <p>
            Hello! I&rsquo;m Md Asif Karim, a developer passionate about
            building web applications.
          </p>
          <p>Here&rsquo;s a listing from our database:</p>
        </Card.Body>
      </Card>
      <ListingDetails listing={listing} />
    </>
  );
}
