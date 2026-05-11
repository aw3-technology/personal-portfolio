 import { MetadataRoute } from "next";
 import { projects } from "@/lib/projects";
 import { getAllPosts } from "@/lib/posts";

 export default function sitemap(): MetadataRoute.Sitemap {
   const baseUrl = "https://willschulz.me";

   const projectUrls = projects.map((project) => ({
     url: `${baseUrl}/work/${project.slug}`,
     lastModified: new Date(),
     changeFrequency: "monthly" as const,
     priority: 0.8,
   }));

   const postUrls = getAllPosts().map((post) => ({
     url: `${baseUrl}/blog/${post.slug}`,
     lastModified: post.date ? new Date(post.date) : new Date(),
     changeFrequency: "monthly" as const,
     priority: 0.6,
   }));

   return [
     {
       url: baseUrl,
       lastModified: new Date(),
       changeFrequency: "weekly",
       priority: 1,
     },
     {
       url: `${baseUrl}/blog`,
       lastModified: new Date(),
       changeFrequency: "weekly",
       priority: 0.7,
     },
     ...projectUrls,
     ...postUrls,
   ];
 }
