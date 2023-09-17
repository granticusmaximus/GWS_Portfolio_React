import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import { Helmet } from "react-helmet";
import { Link } from "reactstrap";
import { useNavigate } from "react-router-dom";
import {
  Twitter,
  Facebook,
  Mail,
  Pinterest,
  Linkedin,
} from "react-social-sharing";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function OnePost() {
  let navigate = useNavigate();
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  const goBackToList = (e) => {
    e.preventDefault();
    navigate = "/blog";
  };

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
            title,
            slug,
            publishedAt,
            mainImage{
              asset->{
                _id,
                url
              }
            },
            body,
            "name": author->name,
            "authorImage": author->image
          }`
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  return (
    <>
      <Helmet>
        <title>GWS Post: {postData.title}</title>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="csrf_token" content="" />
        <meta property="type" content="website" />
        <meta property="og:title" content={postData.title} />
        <meta property="og:content" content={postData.body} />
        <meta
          property="og:image"
          content={postData.mainImage}
          data-react-helmet="true"
        />
        <meta
          property="og:image:secure_url"
          content={postData.mainImage}
          data-react-helmet="true"
        />
      </Helmet>
      <br />
      <br />
      <br />
      <div className="relative">
        <div className="absolute h-full w-full flex items-center justify-center p-8">
          {/* Title Section */}
          <div className="bg-white bg-opacity-75 rounded p-12">
            <center>
              <h2 className="cursive text-3xl lg:text-6xl mb-4">
                {postData.title}
              </h2>
            </center>
            <div className="flex justify-center text-gray-800">
              <img
                src={urlFor(postData.authorImage).url()}
                className="w-10 h-10 rounded-full"
                alt="Author is Grant Watson"
              />
              <h4 className="cursive flex items-center pl-2 text-2xl">
                {postData.name}
              </h4>
            </div>
          </div>
        </div>
        <img
          className="w-full object-cover rounded-t"
          src={urlFor(postData.mainImage).url()}
          alt=""
          style={{ height: "400px" }}
        />
      </div>
      <center>
        <Twitter
          solidcircle
          big
          message="I thought this was an awesome post on GWS"
          link={"http://grantwatson.dev/" + postData.slug.current}
        />
        <Facebook
          solidcircle
          big
          link={"http://grantwatson.dev/" + postData.slug.current}
        />
        <Mail
          solidcircle
          big
          subject="I thought this was an awesome post on GWS "
          link={"http://grantwatson.dev/" + postData.slug.current}
        />
        <Pinterest
          solidcircle
          big
          message="I thought this was an awesome post on GWS"
          link={"http://grantwatson.dev/" + postData.slug.current}
        />
        <Linkedin
          solidcircle
          big
          message="I thought this was an awesome post on GWS"
          link={"http://grantwatson.dev/" + postData.slug.current}
        />
      </center>
      <center>
        <a href="/blog" className="btn btn-warning">
          Back to All Posts
        </a>
      </center>
      <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
        <BlockContent
          blocks={postData.body}
          projectId={sanityClient.projectId}
          dataset={sanityClient.dataset}
        />
      </div>
    </>
  );
}
