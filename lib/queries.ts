import { groq } from "next-sanity";
import { client } from "./sanity";
import { defineQuery } from "groq";

export const homePageQuery = defineQuery(`{
  "hero": *[_type == "page" && slug.current == "home"][0].sections[_type == "heroSection"][0]{
    _type,
    _key,
    heroTitle,
    heroSubtitle,
    heroImage,
    heroLogos[] {
      _type,
      _key,
      asset
    },
    "featuredWork": *[_type == "work" && featured == true][0]{
      _id,
      title,
      description,
      coverImage,
      categories[]->{ 
        title, 
        slug { current } 
      }
    }
  },
  "heroWorks": *[_type == "heroWork" && active == true][0].works[]-> {
    title,
    coverImage,
    categories[]->{ 
      title, 
      slug { current } 
    }
  },
  "works": *[_type == "work" && (!defined(inDevelopment) || inDevelopment == false)] | order(orderRank) {
    ...,
    "client": client->{title, _id},
    "workType": workType->{title, slug},
    categories[]->{ title, slug { current } }
  },
  "categories": *[_type == "workCategory"] | order(order asc) { 
    title, 
    slug { current } 
  },
  "about": *[_type == "page" && slug.current == "about"][0].sections[_type == "aboutSection"][0]{
    heading,
    description,
    images[]{
      "url": asset->url
    },
    teamHeading,
    teamDescription,
    teamMembers[]{
      name,
      role,
      image{
        "url": asset->url,
        "alt": asset->altText
      }
    }
  }
}`);
export const pageQuery = `*[_type == "page" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  sections[]{
    _type,
    _key,
    heading,
    subheading,
    content,
    sectionType,
    image,
    description,
    sectionContent {
      ...,
      featuredWork[]->{
        _id,
        title,
        slug,
        description,
        coverImage,
        categories[]->{title}
      },
      testimonials[]->{
        _id,
        author,
        role,
        content
      }
    }
  }
}`;

export const blogPostsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  mainImage,
  publishedAt,
  description,
  categories[]->{title}
}`;

export const postQuery = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    content,
    mainImage,
    publishedAt,
    updatedAt,
    "slug": slug.current,
    categories[]->{title}
  }`;

export const workSectionQuery = groq`{
  "works": *[_type == "work" && (!defined(inDevelopment) || inDevelopment == false)] | order(orderRank) {
    ...,
    categories[]->{ title, slug { current } }
  },
  "categories": *[_type == "category"] | order(title asc) { title, slug { current } }
}`;

export const workDetailQuery = groq`{
  "work": *[_type == "work" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    completionDate,
    technologies,
    coverImage {
      _type,
      asset-> {
        _id,
        url,
        metadata,
        originalFilename,
        mimeType
      }
    },
    gallery[] {
      asset-> {
        _id,
        url,
        metadata
      }
    },
    projectUrl,
    testimonial,
    orderRank,
    categories[]-> {
      _id,
      title,
      slug {
        current,
        _type
      }
    },
    "client": client->{title, _id},
    core {
      projectTitle,
      clientName,
      projectCategory,
      projectChallenge,
      producerName,
      projectTechStack
    },
    brandDevelopment {
      purpose {
        title,
        description
      },
      audience {
        title,
        description
      },
      associations[] {
        title
      },
      mood[] {
        title,
        description
      }
    },
    webDesign[] {
      title,
      description,
      media {
        asset-> {
          _id,
          url,
          originalFilename,
          mimeType
        }
      },
      link
    },
    webDevelopment {
      features[] {
        _key,
        title,
        description,
        link,
        media[] {
          asset-> {
            _id,
            url,
            originalFilename,
            mimeType
          }
        },
        microFeatures[] {
          _key,
          title,
          description,
          link,
          media[] {
            asset-> {
              _id,
              url,
              originalFilename,
              mimeType
            }
          }
        }
      }
    },
    mediaContent[] {
      title,
      description,
      media {
        asset-> {
          _id,
          url,
          originalFilename,
          mimeType
        }
      },
      link
    }
  },
  "allWorks": *[_type == "work" && (!defined(inDevelopment) || inDevelopment == false)] | order(orderRank) {
    _id,
    title,
    slug {
      current
    },
    description,
    coverImage {
      asset-> {
        url
      }
    }
  }
}`;

export const workPageQuery = groq`{
  "works": *[_type == "work" && (!defined(inDevelopment) || inDevelopment == false)] | order(orderRank) {
    _id,
    title,
    slug,
    description,
    completionDate,
    technologies,
    coverImage {
      asset-> {
        _id,
        url
      }
    },
    projectUrl,
    categories[]->{ 
      title, 
      slug { current } 
    },
    "client": client->{title, _id},
    core {
      projectTitle,
      clientName,
      projectCategory,
      projectChallenge,
      producerName,
      projectTechStack
    },
    brandDevelopment {
      purpose {
        title,
        description
      },
      audience {
        title,
        description
      },
      associations[] {
        title
      },
      mood[] {
        title,
        description
      }
    },
    webDevelopment {
      features[] {
        _key,
        title,
        description,
        link,
        media[] {
          asset-> {
            _id,
            url,
            originalFilename,
            mimeType
          }
        },
        microFeatures[] {
          _key,
          title,
          description,
          link,
          media[] {
            asset-> {
              _id,
              url,
              originalFilename,
              mimeType
            }
          }
        }
      }
    }
  },
  "categories": *[_type == "workCategory"] | order(order asc) { 
    title, 
    slug { current } 
  }
}`;

export const aboutQuery = `*[_type == "page" && slug.current == "about"][0]{
  title,
  "description": sections[_type == "aboutSection"][0].description,
  "images": sections[_type == "aboutSection"][0].images[]{
    "url": asset->url
  },
  "teamHeading": sections[_type == "aboutSection"][0].teamHeading,
  "teamDescription": sections[_type == "aboutSection"][0].teamDescription,
  "teamMembers": sections[_type == "aboutSection"][0].teamMembers[]{
    name,
    role,
    image{
      "url": asset->url,
      "alt": asset->altText
    }
  }
}`;

export const getRelatedWorksQuery = groq`
{
  "currentWork": *[_type == "work" && slug.current == $slug][0] {
    _id,
    orderRank
  },
  "allWorks": *[_type == "work" && (!defined(inDevelopment) || inDevelopment == false)] | order(orderRank) {
    _id,
    title,
    slug {
      current
    },
    description,
    coverImage {
      asset-> {
        _id,
        url
      }
    }
  }
}`;

// For fetching all hero works
export const HeroWorksQuery = groq`
  *[_type == "heroWork"] {
    works[]-> {
      _id,
      title,
      slug {
        current
      },
      coverImage {
        asset-> {
          url
        }
      },
      categories[]-> {
        title,
        slug {
          current
        }
      },
      description
    }
  }
`;

export const heroSectionQuery = groq`
  *[_type == "page" && slug.current == "home"][0].sections[_type == "heroSection"][0]{
    _type,
    _key,
    heroTitle,
    heroSubtitle,
    heroImage,
    heroLogos[] {
      _type,
      _key,
      asset
    },
    "featuredWork": *[_type == "work" && featured == true][0]{
      _id,
      title,
      description,
      coverImage,
      categories[]->{ 
        title, 
        slug { current } 
      }
    }
  }
`;

export const aboutSectionQuery = groq`
  *[_type == "page" && slug.current == "about"][0].sections[_type == "aboutSection"][0]{
    heading,
    description,
    images[]{
      "url": asset->url
    },
    teamHeading,
    teamDescription,
    teamMembers[]{
      name,
      role,
      image{
        "url": asset->url,
        "alt": asset->altText
      }
    }
  }
`;

// Debug utility
export async function debugPageData() {
  console.group("🔍 Page Data Debug");
  try {
    const result = await client.fetch(homePageQuery);
    console.log("Full query result:", result);
    console.log("Hero section data:", result.hero);
    console.log("Works data:", result.works?.length || 0, "items");
    console.log("Categories:", result.categories?.length || 0, "items");
  } catch (error) {
    console.error("Query error:", error);
  }
  console.groupEnd();
}
