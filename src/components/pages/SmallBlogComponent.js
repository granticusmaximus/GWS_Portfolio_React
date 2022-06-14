import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../client.js";
import Pagination from "react-sanity-pagination";


const itemsToSend = [];
const SmallBlogComponent = () => {
  const postsPerPage = 3;
  const [allPostsData, setAllPosts] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] {
          title,
          slug,
          body,
          author,
          mainImage {
              asset -> {
                  _id,
                  url
              },
              alt
            }
        }`
      )
      .then(data => {itemsToSend.push(...data)})
      .catch(console.error);
    }, []);

  const action = (page, range, items) => {
    console.log(page, range, items);
    setAllPosts(items);
  }
  
  return (
    <div className="bg-green-100 min-h-screen p-12">
      <div className="container mx-auto">
        <h2 className="text-5xl flex justify-center cursive">GWS Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPostsData && allPostsData.map((post, index) => (
              <Link to={"/" + post.slug.current} key={post.slug.current}>
                <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-orange-400" key={index}>
                  <img className="w-full h-full rounded-r object-cover absolute" src={post.mainImage.asset.url} alt=""/>
                  <span className="block relative h-full flex justify-end items-end pr -4 pb-4">
                    <h2 className="text-gray-800 text-lg font-bold px-3 py-4 bg-orange-700 text-orangereact-sanity-pagination-100 bg-opacity-75 rounded">
                      {post.title}
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
                items={itemsToSend}
                action={action}
                postsPerPage={postsPerPage}
            />
        </center>
      </div>
    </div>
  );
};

export default SmallBlogComponent;