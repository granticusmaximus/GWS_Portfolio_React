import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../client.js";
import {Helmet} from "react-helmet"
import Pagination from "react-sanity-pagination";

const itemsToSend = [];

export default function AllPosts() {
  const postsPerPage = 5;
  const [allPostsData, setAllPosts] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
            title,
            slug,
            author,
            publishedAt,
            mainImage{
              asset->{
                _id,
                url
              }
            }
          } | order(publishedAt desc)`
      )
      
      .then(res => {
        itemsToSend.push(...res);
      })
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  const action = (page, range, allPostsData) => {
    console.log(page, range, allPostsData);
    setAllPosts(allPostsData);
  };

  return (
    <>
    <Helmet>
        <title>GWS Blog</title>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="csrf_token" content="" />
        <meta property="type" content="website" />
        <meta property="og:title" content="GWS Blog" />
     </Helmet>
    <div className="bg-green-100 min-h-screen p-12">
      <div className="container mx-auto">
        <h1 
          className="text-5xl flex justify-center cursive"
          style={
            {
              color:'#bd5500',
              fontFamily: 'Brush Script MT'
            }
          }
        >
          Blog Posts
        </h1>
        <h3 
          className="text-lg text-gray-600 flex justify-center mb-12"
          style={
            {
              fontFamily: 'Brush Script MT'
            }
          }
        >
          Welcome to my blog posts page!
        </h3>
        <div className="grid md:grid-cols-2 grid-cols-3 gap-8">
          {allPostsData.map((post, index) => (
              <Link to={"/" + post.slug.current} key={post.slug.current}>
                <span
                  className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400"
                  key={index}
                >
                  <img
                    className="w-full h-full rounded-r object-cover absolute"
                    src={post.mainImage.asset.url}
                    alt=""
                  />
                  <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                    <h2 className="text-gray-800 text-lg font-bold px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded">
                      {post.title}{' '}
                      <p>
                        Published At: {post.publishedAt}
                      </p>
                    </h2>
                    
                  </span>
                </span>
              </Link>
            ))}
        </div>
        <center>
          <Pagination 
            nextButton={true}
            prevButton={true}
            nextButtonLabel={"Next"}
            prevButtonLabel={"Previous"}
            items={itemsToSend} 
            action={action} 
            postsPerPage={postsPerPage} 
          />
        </center>
      </div>
    </div>
    </>
  );
}