'use client';
import React, { useState, useEffect, useRef } from "react";
import { useRouter, useParams } from "next/navigation";
import apiClient from "../../../api";
import Banner from "../../../components/UiComponents/Banner";
import Form from "../../../components/UiComponents/Form";

const MainMarket = () => {
  const params = useParams();
  const blogSlug = params?.blogSlug;
  const state = null;
  const router = useRouter();
  const blogContainerRef = useRef(null);

  const [blogData, setBlogData] = useState({
    image: null,
    description: "No Description Available",
    blogTitle: "No Title Available",
    currentDate: "No Date Available",
    currentTime: "No Time Available",
    highlightBlog: "No Highlights Available",
    blogContent: "No Content Available",
    recentPosts: [],
  });

  const [loading, setLoading] = useState(true);

  const canonicalBlogUrl = `https://www.alsiglobal.com/market-updates/${blogSlug || ""}`;

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const currentSlug = blogSlug || (typeof window !== "undefined" ? window.location.pathname.split("/").filter(Boolean).pop() : "");

        if (!currentSlug) {
          setLoading(false);
          return;
        }

        let resolvedState = state;
        if (!resolvedState && typeof window !== "undefined") {
          const cachedState = sessionStorage.getItem('blog_state_' + currentSlug);
          if (cachedState) {
            try { resolvedState = JSON.parse(cachedState); } catch(e){}
          }
        }
        if (resolvedState && resolvedState.blogTitle) {
          setBlogData((prev) => ({
            ...prev,
            ...resolvedState,
            recentPosts: resolvedState.recentPosts?.length ? resolvedState.recentPosts : prev.recentPosts,
          }));
          setLoading(false);
        }

        const cachedEntries = typeof window !== "undefined" ? sessionStorage.getItem("blogPosts") : null;
        let recentPostsData = null;

        if (cachedEntries) {
          try {
            recentPostsData = JSON.parse(cachedEntries);
          } catch(e) {}
        }

        const [blogResponse, entriesResponse] = await Promise.all([
          apiClient.get(`market/blog-entries/${currentSlug}/`),
          recentPostsData ? Promise.resolve({ data: recentPostsData }) : apiClient.get("market/blog-entries/"),
        ]);

        if (!recentPostsData && entriesResponse.data && typeof window !== "undefined") {
          try {
            sessionStorage.setItem("blogPosts", JSON.stringify(entriesResponse.data));
          } catch(e) {}
        }

        const sortedPosts = (entriesResponse.data || [])
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .filter((post) => post.blog_slug !== currentSlug)
          .slice(0, 3);

        setBlogData({
          image: blogResponse.data.image,
          description: blogResponse.data.description,
          blogTitle: blogResponse.data.main_title || blogResponse.data.blog_title || "No Title Available",
          currentDate: blogResponse.data.date,
          currentTime: blogResponse.data.time,
          highlightBlog: blogResponse.data.intro || "No Highlights Available",
          blogContent: blogResponse.data.additional_content || "No Content Available",
          recentPosts: sortedPosts,
        });

        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };

    fetchBlogDetails();
  }, [blogSlug, state]);

  const handleReadMore = (recentPost) => {
    if (!recentPost || !recentPost.blog_slug) return;

    if (typeof window !== "undefined") {
      try {
        sessionStorage.setItem(
          'blog_state_' + recentPost.blog_slug,
          JSON.stringify({
            image: recentPost.image,
            description: recentPost.description || "No Description Available",
            blogTitle: recentPost.main_title || recentPost.blog_title || "No Title Available",
            currentDate: recentPost.date || "No Date Available",
            currentTime: recentPost.time || "No Time Available",
            highlightBlog: recentPost.intro || "No Highlights Available",
            blogContent: recentPost.additional_content || "No Content Available",
          })
        );
      } catch (e) {}
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    router.push(`/market-updates/${recentPost.blog_slug}/`);
  };

  const formatBlogHtml = (html) => {
    if (!html) return "";
    return html
      .replace(/<h6>\s*<br>\s*<\/h6>/g, "")
      .replace(/<h6([^>]*)>/g, '<h2$1 class="h6-style-as-h2">')
      .replace(/<\/h6>/g, "</h2>");
  };

  const stripHtmlTags = (html) => {
    return html ? html.replace(/<\/?[^>]+(>|$)/g, "") : "";
  };

  if (loading) {
    return <div></div>;
  }

  if (blogData.blogTitle === "No Title Available" && !blogData.image) {
    return <div></div>;
  }

  return (
    <>
      {blogData.image && (
        <div className="overflow-hidden mb-6 sm:mb-6 md:mb-10 lg:mb-10 mt-4 sm:mt-4 md:mt-0 lg:mt-0">
          <Banner
            image={blogData.image}
            mainTitle={blogData.blogTitle}
            date={blogData.currentDate || "No date available"}
            time={blogData.currentTime || "No time available"}
            currentUrl={canonicalBlogUrl}
            showSocialMedia={true}
            showMainTitle={true}
            showDateTime={true}
          />
        </div>
      )}
      <div className="container-fluid mx-auto mb-6 sm:mb-6 md:mb-10 lg:mb-10 mt-4 sm:mt-4 md:mt-0 lg:mt-0 px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mx-3 sm:mx-3 md:mx-10 lg:mx-16 xl:mx-20 mt-2 sm:mt-2 md:mt-8 lg:mt-8 xl:mt-10"
          style={{ backgroundColor: "#efefef", padding: "30px" }}
        >
          {blogData.highlightBlog && (
            <div
              dangerouslySetInnerHTML={{ __html: blogData.highlightBlog }}
              className="font-extrabold"
            />
          )}
        </div>
        <div
          className="flex flex-col md:flex-row mx-3 sm:mx-3 md:mx-10 lg:mx-16 xl:mx-20 mt-4 sm:mt-4 md:mt-6 lg:mt-6 xl:mt-6"
          ref={blogContainerRef}
        >
          <div className="md:w-[68%] pr-6 space-y-6">
            {blogData.description && (
              <div
                dangerouslySetInnerHTML={{ __html: formatBlogHtml(blogData.description) }}
                className="blog-detail-content"
              />
            )}
            {blogData.blogContent && (
              <div
                dangerouslySetInnerHTML={{ __html: formatBlogHtml(blogData.blogContent) }}
                className="space-y-1 custom-link-color blog-detail-content"
              />
            )}
          </div>
          <div className="md:w-[32%] mt-6 md:mt-0">
            <div className="sticky top-28 bg-[#EFEFEF] pt-6 px-4 h-auto overflow-hidden">
              <h2 className="text-lg font-bold text-[#212529] px-4">
                Recent Posts
              </h2>
              <div className="overflow-y-auto h-full">
                {blogData.recentPosts.length > 0 ? (
                  blogData.recentPosts.map((recentPost, index) => (
                    <div key={recentPost.id || recentPost.blog_slug || index} className="mt-2 px-4">
                      {recentPost.image && (
                        <img
                          src={recentPost.image}
                          alt={recentPost.blog_title?.replace(/<[^>]*>/g, "") || "Recent post"}
                          className="w-full cursor-pointer"
                          onClick={() => handleReadMore(recentPost)}
                        />
                      )}
                      <div
                        className="text-lg font-bold text-[#212529] mb-2 mt-2 cursor-pointer hover:text-[#009adb] transition-colors"
                        dangerouslySetInnerHTML={{ __html: recentPost.blog_title || recentPost.main_title || "" }}
                        onClick={() => handleReadMore(recentPost)}
                      />
                      <p
                        className="text-muted-foreground pb-4"
                        dangerouslySetInnerHTML={{ __html: recentPost.description }}
                      />
                      <button
                        onClick={() => handleReadMore(recentPost)}
                        className="text-[13px] text-[#1a2e73] hover:text-blue-800 font-semibold"
                      >
                        Read More
                      </button>
                    </div>
                  ))
                ) : (
                  <div>No recent posts available</div>
                )}
                <div className="pb-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6 sm:mb-6 md:mb-10 lg:mb-10 mt-4 sm:mt-4 md:mt-0 lg:mt-0">
        <Form />
      </div>
    </>
  );
};

export default MainMarket;
