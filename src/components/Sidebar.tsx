import { BookmarkIcon, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Card } from "./primitives/Card";

const MyProfileHeader = () => {
  return (
    <div>
      <div
        className="bg-center bg-cover block h-14 w-full"
        style={{
          backgroundImage:
            "url(https://static.vecteezy.com/system/resources/thumbnails/008/023/852/small/abstract-colorful-geometric-shape-background-modern-color-background-for-your-website-vector.jpg)",
        }}
      ></div>
      <div className="flex justify-center">
        <img
          className="w-16 h-16 rounded-full overflow-hidden border-white border-2 mt-[-32px] z-1"
          src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/11/how-to-make-a-website-1.webp"
        />
      </div>
    </div>
  );
};

const MyProfileProfession = () => {
  return (
    <a
      className="flex justify-center items-center flex-col mt-4 pb-4 border-b border-slate-200"
      href="https://www.linkedin.com/in/vineet-rawat/"
      target="_blank"
    >
      <div className="text-md font-medium hover:underline cursor-pointer">
        Oliver Grayson
      </div>
      <div className="text-xs text-zinc-500 mt-1">Software Engineer</div>
    </a>
  );
};

const MyProfileStats: React.FC<{ text: string; count: number }> = ({
  text,
  count,
}) => {
  return (
    <div className="flex flex-row items-center text-xs font-semibold px-3 p-1 cursor-pointer hover:bg-zinc-200">
      <div className="w-full text-zinc-500">{text}</div>
      <div className="text-blue-600">{count}</div>
    </div>
  );
};

const MyItems: React.FC = () => {
  return (
    <div className="flex flex-row items-center text-xs font-semibold p-3 cursor-pointer hover:bg-zinc-200 text-zinc-600">
      <BookmarkIcon />
      <span className="ml-2">My items</span>
    </div>
  );
};

const Discover = () => {
  const discoverItem =
    "font-semibold text-blue-700 text-xs p-3 py-2 hover:underline";
  return (
    <Card className="pt-1 mt-2">
      <div className={discoverItem}>Groups</div>
      <div className={discoverItem}>Events</div>
      <div className={discoverItem}>Followed hashtags</div>
      <div className="border-t border-zinc-200 hover:bg-zinc-100 text-sm font-semibold text-zinc-500 p-3 text-center cursor-pointer transition-all">
        Discover more
      </div>
    </Card>
  );
};

const SidebarDesktopLayout = () => {
  return (
    <>
      <Card className="overflow-hidden">
        <MyProfileHeader />
        <MyProfileProfession />
        <div>
          <div className="py-3 border-b border-slate-200">
            <MyProfileStats text="Who's viewed your profile" count={50} />
            <MyProfileStats text="Impressions of your post" count={9195} />
          </div>
          <MyItems />
        </div>
      </Card>
      <div className="sticky top-16">
        <Discover />
      </div>
    </>
  );
};

const SidebarMobileLayout = () => {
  const [isShowingAllMobile, setShowingAllMobile] = useState(false);
  return (
    <>
      <Card className="overflow-hidden">
        <MyProfileHeader />
        <MyProfileProfession />
        {isShowingAllMobile && (
          <div>
            <div className="py-3 border-b border-slate-200">
              <MyProfileStats text="Who's viewed your profile" count={50} />
              <MyProfileStats text="Impressions of your post" count={9195} />
            </div>
            <MyItems />
          </div>
        )}
      </Card>
      {isShowingAllMobile && <Discover />}
      <div
        className="flex text-zinc-500 font-semibold p-1 mt-2 hover:bg-zinc-200 cursor-pointer flex-row justify-center items-center text-sm"
        onClick={() => setShowingAllMobile(!isShowingAllMobile)}
      >
        {isShowingAllMobile ? (
          <>
            Show less <ChevronUp />
          </>
        ) : (
          <>
            Show more <ChevronDown />
          </>
        )}
      </div>
    </>
  );
};

export const Sidebar = () => {
  return (
    <div style={{ gridArea: "sidebar" }}>
      <div className="hidden sm:block">
        <SidebarDesktopLayout />
      </div>
      <div className="block sm:hidden">
        <SidebarMobileLayout />
      </div>
    </div>
  );
};
