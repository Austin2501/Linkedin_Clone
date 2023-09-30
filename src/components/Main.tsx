import { FeedItem } from "./FeedItem";
import { WriteNewPostCard } from "./WriteNewPostCard";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from "./primitives/DropdownMenu";
import { Separator } from "./primitives/Separator";

const SortByDivider = () => {
  return (
    <div className="flex flex-row mt-2">
      <div className="pt-2 w-full">
        <Separator className="bg-zinc-300" />
      </div>
      <span className="text-zinc-500 text-xs w-24 pl-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <span className="cursor-pointer">
              Sort by: <span className="font-semibold text-zinc-800">Top</span>
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-24">
            <DropdownMenuItem>
              <span>Top</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Recent</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </span>
    </div>
  );
};

export const Main = () => {
  return (
    <div style={{ gridArea: "main" }}>
      <WriteNewPostCard />
      <SortByDivider />
      <FeedItem
        type="post"
        content="Today, we are bringing together AI and quantum with Azure Quantum Elements, ushering in a new era of scientific discovery. Our goal is to compress the next 250 years of chemistry and materials science progress into the next 25."
        link={{
          title:
            "Accelerating scientific discovery with Azure Quantum - The Official Microsoft Blog",
          thumbnail:
            "https://images.ctfassets.net/pdf29us7flmy/6FcMxkKJ0euReXK4f6jT4d/781e465a162ea7886e3d29751da587c7/-IND-004-076-_Brand_Color_Psychology_Option_1.png",
          href: "https://blogs.microsoft.com/blog/2023/06/21/accelerating-scientific-discovery-with-azure-quantum/"
        }}
        author={{
          name: "Satya Nadella",
          subtext: "Chairman and CEO at Microsoft",
          imageUrl:
            "https://media.licdn.com/dms/image/C5603AQHHUuOSlRVA1w/profile-displayphoto-shrink_100_100/0/1579726624860?e=1692835200&v=beta&t=m5EDtXZALcLc9SM6BNRsfbid9cEUxfN8B_LYhdwFwGo",
          connectionDegree: "1st"
        }}
        stats={{
          likes: 5788,
          comments: 139,
          reposts: 593
        }}
      />
      <FeedItem
        type="post"
        content="In my annual letter to shareholders, I reflect on our opportunity and responsibility to connect what technology can do with what the world needs it to do."
        link={{
          title:
            "My annual letter: A historic intersection of opportunity and responsibility",
          thumbnail:
            "https://images.ctfassets.net/pdf29us7flmy/6FcMxkKJ0euReXK4f6jT4d/781e465a162ea7886e3d29751da587c7/-IND-004-076-_Brand_Color_Psychology_Option_1.png",
          href: "https://www.linkedin.com/pulse/my-annual-letter-historic-intersection-opportunity-satya-nadella?trackingId=dxsWwqZOReOJKem4oxhXlg%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_content%3BpL6f%2BL5xQK%2BhHU6uCrNBdg%3D%3D"
        }}
        author={{
          name: "Satya Nadella",
          subtext: "Chairman and CEO at Microsoft",
          imageUrl:
            "https://media.licdn.com/dms/image/C5603AQHHUuOSlRVA1w/profile-displayphoto-shrink_100_100/0/1579726624860?e=1692835200&v=beta&t=m5EDtXZALcLc9SM6BNRsfbid9cEUxfN8B_LYhdwFwGo",
          connectionDegree: "1st"
        }}
        stats={{
          likes: 5361,
          comments: 73,
          reposts: 275
        }}
      />
      <FeedItem
        type="post"
        content="Incredible day in New York for Salesforce AI Day. Huge thanks to all our customer TrAIlblazers, partners, media, and analysts who joined us. "
        thumbnail="https://images.ctfassets.net/pdf29us7flmy/6FcMxkKJ0euReXK4f6jT4d/781e465a162ea7886e3d29751da587c7/-IND-004-076-_Brand_Color_Psychology_Option_1.png"
        author={{
          name: "Clara Shih",
          subtext: "CEO of Salesforce AI, Board Director & Entrepreneur",
          imageUrl:
            "https://media.licdn.com/dms/image/D5603AQGVuircu90KUw/profile-displayphoto-shrink_100_100/0/1677475762784?e=1692835200&v=beta&t=zTH1P27U-lV_I_2hT74hDcqk-fhgg7wHrhx8W8a5xio",
          connectionDegree: "3rd"
        }}
        stats={{
          likes: 837,
          comments: 39,
          reposts: 27
        }}
      />
      <FeedItem
        type="post"
        content="Proud to announce the launch of our new sustainable data center region in Sweden, using 100% renewable energy and zero-waste operations."
        link={{
          title:
            "Google unveils its first sustainable data center region in Sweden",
          thumbnail:
            "https://images.ctfassets.net/pdf29us7flmy/6FcMxkKJ0euReXK4f6jT4d/781e465a162ea7886e3d29751da587c7/-IND-004-076-_Brand_Color_Psychology_Option_1.png",
          href: "https://www.blog.google/inside-google/infrastructure/google-announces-first-sustainable-data-center-region-in-sweden/"
        }}
        author={{
          name: "Sundar Pichai",
          subtext: "CEO at Google",
          imageUrl:
            "https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg",
          connectionDegree: "2nd"
        }}
        stats={{
          likes: 4891,
          comments: 131,
          reposts: 503
        }}
      />
      <FeedItem
        type="post"
        content="Really proud of the team for our continued advancements in VR technology. The future of communication is exciting!"
        link={{
          title: "Facebook's new VR tech is pushing the boundaries",
          thumbnail:
            "https://images.ctfassets.net/pdf29us7flmy/6FcMxkKJ0euReXK4f6jT4d/781e465a162ea7886e3d29751da587c7/-IND-004-076-_Brand_Color_Psychology_Option_1.png",
          href: "https://www.facebook.com/tech/news/tab/new-vr-tech"
        }}
        author={{
          name: "Mark Zuckerberg",
          subtext: "CEO at Facebook",
          imageUrl:
            "https://www.californiamuseum.org/sites/main/files/imagecache/medium/main-images/screen_shot_2012-07-27_at_6.32.28_pm.png?1632975955",
          connectionDegree: "3rd"
        }}
        stats={{
          likes: 3254,
          comments: 97,
          reposts: 213
        }}
      />
      <FeedItem
        type="post"
        content="Exciting to see SpaceX push the boundaries of space technology once more. The successful launch of Falcon Heavy was a sight to behold."
        thumbnail="https://images.ctfassets.net/pdf29us7flmy/6FcMxkKJ0euReXK4f6jT4d/781e465a162ea7886e3d29751da587c7/-IND-004-076-_Brand_Color_Psychology_Option_1.png"
        author={{
          name: "Elon Musk",
          subtext: "CEO of SpaceX and Tesla, Entrepreneur",
          imageUrl: "https://images.ctfassets.net/pdf29us7flmy/6FcMxkKJ0euReXK4f6jT4d/781e465a162ea7886e3d29751da587c7/-IND-004-076-_Brand_Color_Psychology_Option_1.png",
          connectionDegree: "2nd"
        }}
        stats={{
          likes: 18537,
          comments: 839,
          reposts: 1247
        }}
      />
    </div>
  );
};
