import { useDispatch, useSelector } from 'react-redux';

import UserPostsList from './user-posts-list';
import { profilesStateUserPosts } from 'src/store/slices/profiles/profiles.selectors';
import { addPost } from 'src/store/slices/profiles/profiles.slice';
import { AppDispatch } from 'src/store/store';

const UserPostsListContainer = () => {
  const userPosts = useSelector(profilesStateUserPosts);
  const dispatch = useDispatch<AppDispatch>();

  const onAddPost = (postText: string) => {
    dispatch(addPost({ postText }));
  };

  return <UserPostsList userPosts={userPosts} addPost={onAddPost} />;
};

export default UserPostsListContainer;
