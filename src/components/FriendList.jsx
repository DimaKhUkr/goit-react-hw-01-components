import { FriendListItem } from './FriendListItem';

export const FriendList = ({ prop }) => {
  return (
    <ul class="friend-list">
      {prop.map(friend => (
        <li class="item" key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
};
