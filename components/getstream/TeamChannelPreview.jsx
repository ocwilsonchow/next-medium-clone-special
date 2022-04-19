import { Flex, Text } from "@chakra-ui/react";
import { Avatar, useChatContext } from "stream-chat-react";

const TeamChannelPreview = ({ channel, type }) => {
  const { channel: activeChannel, client } = useChatContext();

  const ChannelPreview = () => (
    <Text># {channel?.data?.name || channel?.data?.id}</Text>
  );

  const DirectPreview = () => {
    const members = Object.values(channel.state.members).filter(
      ({ user }) => user.id !== client.userID
    );

    return (
      <Flex>
        <Avatar
          image={members[0]?.user?.image}
          name={members[0]?.user?.fullName}
        />
        <Text>{members[0]?.user?.fullName}</Text>
      </Flex>
    );
  };

  return <div></div>;
};

export default TeamChannelPreview;
