import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";

const index = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Brows a huge list of highly active react meetups!"
        />
      </Head>
      <MeetupList meetups={props.meets} />
    </Fragment>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://raviraj:raviraj117@cluster0.4s6mv.mongodb.net/?retryWrites=true&w=majority"
  );
  const database = client.db("meetup");

  const meetupCollection = database.collection("meetups");

  const meetups = await meetupCollection.find().toArray();

  client.close();
  return {
    props: {
      meets: meetups.map((meetup) => {
        return {
          title: meetup.title,
          image: meetup.image,
          address: meetup.address,
          description: meetup.description,
          id: meetup._id.toString(),
        };
      }),
    },
  };
}

export default index;
