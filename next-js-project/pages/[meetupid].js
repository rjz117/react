import MeetupDetail from "../components/meetups/MeetupDetail";
import { MongoClient, ObjectId} from "mongodb";
import { Fragment } from "react";
import Head from "next/head";

const meetup_id = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta
          name="description"
          content={props.meetupData.description}
        />
      </Head>
      <MeetupDetail singleMeet={props.meetupData} />;
    </Fragment>
  )
  
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://raviraj:raviraj117@cluster0.4s6mv.mongodb.net/?retryWrites=true&w=majority"
  );
  const database = client.db("meetup");

  const meetupCollection = database.collection("meetups");

  const meetupIds = await meetupCollection.find({}, { _id: 1 }).toArray();

  return {
    fallback: false,
    paths: meetupIds.map((meetup) => ({
      params: { meetupid: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const mId = context.params.meetupid;
  console.log(mId);
  const client = await MongoClient.connect(
    "mongodb+srv://raviraj:raviraj117@cluster0.4s6mv.mongodb.net/?retryWrites=true&w=majority"
  );
  const database = client.db("meetup");

  const meetupCollection = database.collection("meetups");

  const selectedMeetup = await meetupCollection.findOne({_id: ObjectId(mId)})
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  };
}

export default meetup_id;
