import { createSlice } from "@reduxjs/toolkit";

export const BlogSlice = createSlice({
  name: "blogs",
  initialState: {
    blogs: [
        {
            id: 1,
            title: "Health Benefits of Owning Dogs and Cats",
            description:
              "Discuss the physical and mental health benefits of owning pets, including stress reduction, increased physical activity, and companionship.",
            url: 'https://cdn2.thecatapi.com/images/ki.jpg'
          },
          {
            id: 2,
            title: "Training Tips for Dogs and Cats",
            description:
              "Provide practical training tips for both dogs and cats, including basic commands, litter training, and socialization techniques.",
            url: "https://cdn2.thecatapi.com/images/b3u.jpg",
          },
          {
            id: 3,
            title: "Nutrition and Diet for Dogs and Cats",
            description:
              "Explore the best dietary practices for keeping your pets healthy, including information on commercial pet food, homemade diets, and the importance of hydration.",
            url: "https://cdn2.thecatapi.com/images/b7d.jpg",
          },
          {
            id: 4,
            title: "Understanding Dog and Cat Behavior",
            description:
              "Help pet owners understand common behaviors in dogs and cats, such as body language, vocalizations, and play behaviors.",
            url: "https://cdn2.thecatapi.com/images/bpq.jpg",
          },
          {
            id: 5,
            title: "Choosing the Right Pet for Your Lifestyle",
            description:
              "Offer guidance on selecting the best pet for different lifestyles, considering factors like living space, activity level, and family dynamics.",
            url: "https://cdn2.thecatapi.com/images/brg.jpg",
          },
          {
            id: 6,
            title: "Grooming Tips for Dogs and Cats",
            description:
              "Provide detailed grooming tips, including brushing, bathing, nail trimming, and dealing with shedding.",
            url: "https://cdn2.thecatapi.com/images/buh.jpg",
          },
          {
            id: 7,
            title: "The Best Toys and Enrichment Activities for Dogs and Cats",
            description:
              "Review and recommend toys and activities that can keep pets mentally stimulated and physically active.",
            url: "https://cdn2.thecatapi.com/images/MTY5NjAwOQ.jpg",
          },
          {
            id: 8,
            title: "Traveling with Dogs and Cats: Tips and Tricks",
            description:
              "Share advice on how to travel safely and comfortably with pets, including preparation, packing, and managing stress during trips.",
            url: "https://cdn2.thecatapi.com/images/MTkwMDAxMw.jpg",
          },
          {
            id: 9,
            title: "Adopting Dogs and Cats: What to Expect",
            description:
              "Discuss the adoption process, what to expect when bringing a new pet home, and how to ensure a smooth transition.",
            url: "https://cdn2.thecatapi.com/images/MTkwMzAzNw.jpg",
          },
          {
            id: 10,
            title: "Common Health Issues in Dogs and Cats",
            description:
              "Provide information on common health problems in dogs and cats, their symptoms, and preventive measures.",
            url: "https://cdn2.thecatapi.com/images/AllGB9l57.jpg",
          },
    ],
  },
});

export default BlogSlice.reducer;
