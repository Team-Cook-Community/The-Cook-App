import { Divider } from "@heroui/react";

export default function MediaStats({
  totalFollowing = 0,
  totalFollowers = 0,
  totalLikes = 0,
  removeWrapper = false,
}: any) {
  const containerStyle = "flex flex-col items-center";
  const numberStyle = "text-lg font-semibold";

  const children = (
    <>
      <div className={containerStyle}>
        <p className={numberStyle}>{totalFollowing}</p>
        <p className=" text-default-400 text-small">Following</p>
      </div>
      <Divider orientation="vertical" />
      <div className={containerStyle}>
        <p className={numberStyle}>{totalFollowers}</p>
        <p className="text-default-400 text-small">Followers</p>
      </div>
      <Divider orientation="vertical" />
      <div className={containerStyle}>
        <p className={numberStyle}>{totalLikes}</p>
        <p className="text-default-400 text-small">Likes</p>
      </div>
    </>
  );

  return removeWrapper ? children : <div>{children}</div>;
}
