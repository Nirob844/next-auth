import { Avatar } from "antd";
import { useSession } from "next-auth/react";

import Head from "next/head";
const ProfilePage = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div style={{ textAlign: "center" }}>
      <Head>
        <title>Next Profile</title>
      </Head>
      <h1>User Profile</h1>
      <Avatar size={64} src={session?.user?.image} />
      {/* <Avatar size={64} icon={<UserOutlined />} /> */}
      <h2 style={{ textAlign: "center" }}>Name: {session?.user?.name} </h2>
      <h4 style={{ textAlign: "center" }}>Email: {session?.user?.email} </h4>
    </div>
  );
};

export default ProfilePage;
